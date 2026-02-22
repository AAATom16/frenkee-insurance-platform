#!/usr/bin/env node
/**
 * Stáhne assety z Figma plugin serveru (localhost:3845).
 * Spusť když máš otevřenou Figmu desktop s pluginem a vybraný frame.
 * Předtím zavolej v Cursoru get_design_context pro výběr – výstup se uloží do agent-tools.
 *
 * Použití:
 *   node scripts/download-figma-assets.js [cesta-k-výstupu-txt]
 *
 * Nebo předaj URL přímo:
 *   FIGMA_ASSET_URLS='{"life-char-1":"http://localhost:3845/assets/xxx.png"}' node scripts/download-figma-assets.js
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';
import os from 'os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.join(__dirname, '../public/assets');
const DEFAULT_INPUT = path.join(os.homedir(), '.cursor', 'projects', 'Users-tomashajek-Desktop-web-Frenkee-new', 'agent-tools');
const BASE_URL = 'http://localhost:3845';

// Mapování Figma proměnných -> název souboru v public/assets
const VAR_TO_FILENAME = {
  imgFrame10: 'frenkee-logo.svg',
  // postavičky pro Life step 1–6 (z 5feb5216... – design všech kroků)
  imgChatGptImageFeb62026111803Am1: 'life-char-1.png',
  imgChatGptImageJan222026014137Pm1: 'life-char-1.png',
  imgChatGptImageJan222026014137Pm2: 'life-char-1.png',
  imgChatGptImageJan222026013951Pm1: 'life-char-1.png',
  imgChatGptImageJan222026020902Pm1: 'life-char-2.png',
  imgChatGptImageJan222026020018Pm1: 'life-char-4.png',
  imgChatGptImageJan222026020342Pm1: 'life-char-5.png',
  imgChatGptImageJan222026022438Pm1: 'life-char-6.png',
  imgChatGptImageJan222026012240Pm1: 'life-char-landing.png',
  imgChatGptImageFeb82026083207Pm1: 'life-char-alt.png',
  imgPictureNaTentoProjektBylaPoskytnutaFinancniPodporaOdEvropskeUnie: 'eu-flag.png',
  imgVector: 'icon-close.svg',
  imgVector1: 'chevron-down.svg',
  imgVector2: 'dropdown-arrow.svg',
  imgLine5: 'active-line.svg',
  imgLucidePhone: 'phone-icon.svg',
  imgLucideMail: 'mail-icon.svg',
  imgLucideInstagram: 'instagram-icon.svg',
  imgLucideLinkedin: 'linkedin-icon.svg',
  imgLucideFacebook: 'facebook-icon.svg',
  imgLucideHouse: 'house-icon.svg',
  imgLucideShieldCheck: 'shield-check-icon.svg',
  imgLucideShield: 'shield-icon.svg',
  imgLucideShieldPlus: 'shield-plus-icon.svg',
  imgLucideDroplets: 'droplets-icon.svg',
  imgLucideUser: 'user-icon.svg',
  imgLucideCheck: 'check-simple-icon.svg',
  imgAxaLogoSvg1: 'axa-logo.png',
};

function extractUrlsFromCode(content) {
  const re = /const\s+(img\w+)\s*=\s*["'](https?:\/\/[^"']+)["']/g;
  const urls = {};
  let m;
  while ((m = re.exec(content)) !== null) {
    urls[m[1]] = m[2];
  }
  return urls;
}

function filenameFromVar(varName, url) {
  if (VAR_TO_FILENAME[varName]) return VAR_TO_FILENAME[varName];
  const ext = path.extname(new URL(url).pathname) || '.png';
  const base = varName.replace(/^img/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
  return (base || 'asset') + ext;
}

const FETCH_TIMEOUT_MS = 20000; // delší timeout pro velké exporty z Figmy
const RETRY_ATTEMPTS = 3;
const RETRY_DELAY_MS = 1500;

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { timeout: FETCH_TIMEOUT_MS }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        fetchUrl(res.headers.location).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function fetchWithRetry(url) {
  let lastErr;
  for (let i = 0; i < RETRY_ATTEMPTS; i++) {
    try {
      return await fetchUrl(url);
    } catch (e) {
      lastErr = e;
      if (i < RETRY_ATTEMPTS - 1) {
        await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
      }
    }
  }
  throw lastErr;
}

async function main() {
  const envUrls = process.env.FIGMA_ASSET_URLS;
  let urls = {};

  if (envUrls) {
    try {
      urls = JSON.parse(envUrls);
    } catch {
      console.error('Neplatný FIGMA_ASSET_URLS JSON');
      process.exit(1);
    }
  } else {
    const inputPath = process.argv[2] || DEFAULT_INPUT;
    const processAll = process.argv.includes('--all');
    if (fs.existsSync(inputPath)) {
      const stat = fs.statSync(inputPath);
      if (stat.isDirectory() && processAll) {
        const files = fs.readdirSync(inputPath).filter((f) => f.endsWith('.txt'));
        const allUrls = {};
        for (const f of files) {
          const c = fs.readFileSync(path.join(inputPath, f), 'utf8');
          Object.assign(allUrls, extractUrlsFromCode(c));
        }
        urls = allUrls;
        console.log(`Načteno z ${files.length} souborů, ${Object.keys(urls).length} unikátních assetů.`);
      } else if (stat.isDirectory()) {
        const files = fs.readdirSync(inputPath).filter((f) => f.endsWith('.txt'));
        const latest = files.sort().reverse()[0];
        if (latest) urls = extractUrlsFromCode(fs.readFileSync(path.join(inputPath, latest), 'utf8'));
      } else {
        urls = extractUrlsFromCode(fs.readFileSync(inputPath, 'utf8'));
      }
    }
    if (Object.keys(urls).length === 0) {
      console.error('Žádný vstup. Vyber frame ve Figmě, zavolej get_design_context, pak spusť tento skript.');
      console.error('Pro všechny soubory: node scripts/download-figma-assets.js <agent-tools-cesta> --all');
      process.exit(1);
    }
  }

  if (Object.keys(urls).length === 0) {
    console.error('Nenalezeny žádné asset URL.');
    process.exit(1);
  }

  if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });

  console.log(`Stahuji ${Object.keys(urls).length} assetů do ${ASSETS_DIR}...`);
  let ok = 0;
  let fail = 0;

  for (const [varName, url] of Object.entries(urls)) {
    if (!url.includes('localhost') && !url.includes('127.0.0.1')) {
      console.warn(`  Přeskočeno (ne localhost): ${varName}`);
      continue;
    }
    const filename = filenameFromVar(varName, url);
    const filepath = path.join(ASSETS_DIR, filename);
    try {
      const buf = await fetchWithRetry(url);
      fs.writeFileSync(filepath, buf);
      console.log(`  ✓ ${filename}`);
      ok++;
    } catch (e) {
      console.error(`  ✗ ${filename}: ${e.message}`);
      fail++;
    }
  }

  console.log(`\nHotovo: ${ok} OK, ${fail} chyb.`);
  if (fail > 0 && ok === 0) {
    console.log('\nZkontroluj, že Figma desktop s pluginem běží a máš vybraný frame.');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
