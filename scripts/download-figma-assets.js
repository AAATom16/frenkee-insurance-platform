#!/usr/bin/env node
/**
 * Stáhne assety z Figma plugin serveru (localhost:3845).
 * Spusť když máš otevřenou Figmu desktop s pluginem a vybraný frame.
 * Předtím zavolej v Cursoru get_design_context pro výběr – výstup se uloží do agent-tools.
 *
 * Použití:
 *   node scripts/download-figma-assets.js [cesta-k-výstupu-txt] [--all] [--verbose]
 *   --all = zpracuj všechny .txt v agent-tools
 *   --verbose = u chyb vypiš varName a URL + body odpovědi
 *
 * Když padne ≥3 assetů, skript automaticky načte latest .txt a zkusí retry
 * (předtím spusť get_design_context pro čerstvé URL)
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
  // Cestovní pojištění – flow Step 1, 2
  imgTravelPerson: 'travel-person.png',
  imgTravelAirplane: 'travel-airplane.png',
  imgCestovaniPerson: 'travel-person.png',
  imgCestovaniTraveler: 'travel-person.png',
  // Ikonky pro cestovní flow
  globeEuropeAfrica1: 'globe-europe-africa.svg',
  europe1: 'europe.svg',
  mingIconCarFill: 'car-fill.svg',
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

const FETCH_TIMEOUT_MS = 60000; // velké PNG renderuje Figma dlouho
const RETRY_ATTEMPTS = 5;
const RETRY_BACKOFF_BASE_MS = 500; // 0.5s, 1s, 2s, 4s, 8s
const DELAY_BETWEEN_REQUESTS_MS = 1200; // throttle – nezahlcovat on-demand render
const RETRY_FAILED_THRESHOLD = 3; // když padne víc, načti latest .txt a zkus znovu

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { timeout: FETCH_TIMEOUT_MS }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        fetchUrl(res.headers.location).then(resolve).catch(reject);
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        if (res.statusCode !== 200) {
          const preview = buf.toString('utf8', 0, 200).replace(/\s+/g, ' ').trim();
          reject(new Error(`HTTP ${res.statusCode} (${preview || 'no body'})`));
          return;
        }
        resolve(buf);
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function jitter(maxMs) {
  return Math.floor(Math.random() * maxMs);
}

async function fetchWithRetry(url) {
  let lastErr;
  for (let i = 0; i < RETRY_ATTEMPTS; i++) {
    try {
      return await fetchUrl(url);
    } catch (e) {
      lastErr = e;
      if (i < RETRY_ATTEMPTS - 1) {
        const base = RETRY_BACKOFF_BASE_MS * Math.pow(2, i);
        const delay = base + jitter(200);
        await sleep(delay);
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

  const verbose = process.argv.includes('--verbose');
  const downloaded = new Set(); // první úspěch pro daný filename vyhrává, dupes nepřepisují
  const failedFilenames = new Set();
  const inputPath = process.argv[2] || DEFAULT_INPUT;
  let ok = 0;
  let fail = 0;
  let skipped = 0;

  async function tryDownload(varName, url) {
    const filename = filenameFromVar(varName, url);
    if (downloaded.has(filename)) return { status: 'skip' };
    if (!url.includes('localhost') && !url.includes('127.0.0.1')) return { status: 'skip' };
    try {
      const buf = await fetchWithRetry(url);
      fs.writeFileSync(path.join(ASSETS_DIR, filename), buf);
      downloaded.add(filename);
      return { status: 'ok', filename };
    } catch (e) {
      failedFilenames.add(filename);
      return { status: 'fail', filename, varName, url, err: e };
    }
  }

  console.log(`Stahuji ${Object.keys(urls).length} assetů do ${ASSETS_DIR}...`);
  for (const [varName, url] of Object.entries(urls)) {
    if (!url.includes('localhost') && !url.includes('127.0.0.1')) {
      console.warn(`  Přeskočeno (ne localhost): ${varName}`);
      continue;
    }
    const filename = filenameFromVar(varName, url);
    if (downloaded.has(filename)) {
      skipped++;
      continue;
    }
    const r = await tryDownload(varName, url);
    if (r.status === 'skip') continue;
    if (r.status === 'ok') {
      console.log(`  ✓ ${r.filename}`);
      ok++;
    } else {
      if (verbose) {
        console.error(`  ✗ ${r.filename}: ${r.err.message}`);
        console.error(`    var: ${r.varName}`);
        console.error(`    url: ${r.url}`);
      } else {
        console.error(`  ✗ ${r.filename}: ${r.err.message}`);
      }
      fail++;
    }
    await sleep(DELAY_BETWEEN_REQUESTS_MS);
  }

  // Re-run failed: načti latest .txt (čerstvé URL po get_design_context) a zkus znovu
  if (fail >= RETRY_FAILED_THRESHOLD && failedFilenames.size > 0) {
    const stat = fs.existsSync(inputPath) ? fs.statSync(inputPath) : null;
    if (stat?.isDirectory()) {
      const files = fs.readdirSync(inputPath).filter((f) => f.endsWith('.txt'));
      const latest = files.sort().reverse()[0];
      if (latest) {
        const freshUrls = extractUrlsFromCode(fs.readFileSync(path.join(inputPath, latest), 'utf8'));
        const toRetry = [...failedFilenames];
        let retryOk = 0;
        console.log(`\nRetry: načten latest .txt, znovu zkouším ${toRetry.length} selhavších...`);
        for (const [varName, url] of Object.entries(freshUrls)) {
          const filename = filenameFromVar(varName, url);
          if (!failedFilenames.has(filename) || downloaded.has(filename)) continue;
          const r = await tryDownload(varName, url);
          if (r.status === 'ok') {
            console.log(`  ✓ ${r.filename} (retry)`);
            ok++;
            retryOk++;
            failedFilenames.delete(filename);
          }
          await sleep(DELAY_BETWEEN_REQUESTS_MS);
        }
        fail -= retryOk;
      }
    }
  }

  console.log(`\nHotovo: ${ok} OK, ${fail} chyb${skipped ? `, ${skipped} přeskočeno (duplicity)` : ''}.`);
  if (fail > 0) {
    console.log('\nTip: Spusť get_design_context ve Figmě znovu, pak skript. Body u chyb = "Error getting image" → node nerenderovatelný.');
    if (verbose) console.log('Použij --verbose pro URL a varName.');
    if (ok === 0) {
      console.log('Zkontroluj, že Figma desktop s pluginem běží a máš vybraný frame.');
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
