# Figma MCP – návod pro Cursor Agent

Základní dokument pro nastavení a používání Figma MCP v Cursor Agentovi pro React frontend. Lze zkopírovat do libovolného projektu.

---

## 0) Co budeš mít na konci

- Cursor Agent vidí Figma strukturu (frames/layers), styly a proměnné
- Umí generovat React komponenty (defaultně React + Tailwind) a můžeš ho přesměrovat na tvůj stack
- Umí vytáhnout tokeny (barvy, fonty, spacing) a screenshot pro kontrolu
- (Doporučeno) bude používat tvoje existující UI komponenty přes Code Connect mapování

---

## 1) Instalace "Figma" pluginu v Cursoru

Cursor má Marketplace pluginy, které umí balit MCP servery + rules/skills dohromady.

V Agent chatu použij:

```
/add-plugin figma
```

Pokud plugin nechceš, můžeš MCP přidat ručně (krok 2).

---

## 2) Ruční nastavení MCP serveru v .cursor/mcp.json

Cursor MCP konfigurace je v `.cursor/mcp.json` (projekt) nebo globálně v `~/.cursor/mcp.json`.

### Varianta A — Remote (funguje i pro Figma ve webu)

```json
{
  "mcpServers": {
    "figma-remote": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

Remote server je hostovaný Figmou a je nejrychlejší start.

### Varianta B — Desktop (lepší pro selection-based workflow)

```json
{
  "mcpServers": {
    "figma-desktop": {
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

Lokální desktop server běží na `127.0.0.1:3845/mcp`.

Po změně configu Cursor restartni / reloadni, aby server načetl.

---

## 3) Zapnutí Desktop MCP serveru ve Figmě

Jen pokud používáš desktop variantu:

1. Aktualizuj Figma desktop na poslední verzi
2. Otevři design file
3. Přepni do Dev Mode (`Shift + D`)
4. V panelu MCP server dej **Enable desktop MCP server**

---

## 4) Ověření, že Agent vidí Figma tools

V Cursor Agent chatu zkus:

> Použij Figma MCP a zavolej get_design_context pro tento Figma link: \<vlož odkaz na frame/layer\>

**Klíčové Figma MCP nástroje:**

| Nástroj | Popis |
|---------|-------|
| `get_design_context` | Hlavní design→code kontext, layout, typografie, struktura |
| `get_variable_defs` | Tokeny – barvy, fonty, spacing, proměnné |
| `get_screenshot` | Vizuální kontrola designu |
| `get_metadata` | Struktura node ID pro velké/sekce (sublayers) |
| Code Connect | `get_code_connect_map`, `add_code_connect_map`, suggestions workflow |

---

## 5) Cursor Rules (doporučené)

Vytvoř soubor `.cursor/rules/figma-react-handoff.mdc` s instrukcemi pro agenta (viz tento projekt).

---

## 6) Workflow prompty pro React

### A) Jednorázové vygenerování komponenty ze screenu (link-based)

```
Implementuj tento Figma frame do Reactu.
1) Použij get_design_context + get_variable_defs.
2) Použij existující komponenty v src/components pokud to jde.
3) Exportovatelné assety ulož do src/assets nebo public/assets.
4) Výsledek rozděl na menší komponenty a přidej základní a11y.
Figma link: <sem>
```

Link-based je oficiálně podporovaný způsob (agent si vytáhne node-id z URL).

### B) Iterace přes selection-based (jen desktop server)

```
Implementuj moji aktuální Figma selection do Reactu podle repo rules.
Použij existující komponenty a tokeny. Nevymejšlej nové.
```

Funguje přes desktop server – vyber vrstvu/frame ve Figmě a spusť prompt.

### C) Vynucení jiného stacku než React + Tailwind

```
Generate my Figma selection in React with CSS Modules (no Tailwind).
```

---

## 7) Assety z Figmy

- **Nejlépe fungují** vrstvy, které mají ve Figmě nastavené **Export** (SVG/PNG)
- Vektory → **SVG** je ideál pro React
- Fotky/bitmapy → **PNG/JPG**
- Ukládej do `src/assets/` nebo `public/assets/` s kebab-case názvy
- Na tokeny/typografii je top `get_variable_defs`

---

## 8) Code Connect (pokud máš design system)

Pokud máš design system v kódu:

- Získej mapu: `get_code_connect_map`
- Přidej mapu: `add_code_connect_map`
- Nebo nech navrhnout mapování přes `get_code_connect_suggestions` + potvrď `send_code_connect_mappings`

To dramaticky sníží „AI-hallucinated“ komponenty.
