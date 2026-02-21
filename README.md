# Frenkee - Finance jednoduše

React aplikace implementující 21 designů z Figma (Frenkee-web--Copy-).

## Technologie

- React 19 + TypeScript
- Vite 7
- React Router v7
- Tailwind CSS
- Design systém z Figmy (barvy, typografie)

## Spuštění

```bash
npm install
npm run dev
```

Aplikace poběží na http://localhost:5173

## Struktura

- `src/components/ui/` - UI komponenty (Button, Input, Select, Toggle, Checkbox, RadioGroup, ProgressIndicator)
- `src/components/layout/` - Header, Footer, MainLayout
- `src/components/KanbanCard.tsx` - Kanban karty (Majetek 1-4-x)
- `src/pages/` - Stránky aplikace
- `src/styles/` - Design tokens a typografie

## Routy

- `/` - Landing page
- `/kontakt` - Kontaktní formulář
- `/pojisteni/majetek` - Flow pojištění majetku
- `/pojisteni/majetek/zakladni-udaje` - Základní údaje o nemovitosti
- `/pojisteni/majetek/detail` - Detail bytu
- `/pojisteni/majetek/domacnost` - Domácnost (hodnoty)
- `/pojisteni/majetek/osobni-udaje` - Osobní údaje (s taby)
- `/pojisteni/majetek/nabidky` - Srovnání nabídek
- `/pojisteni/majetek/shrnuti` - Shrnutí před platbou
- `/pojisteni/cestovani` - Travel insurance flow (4 kroky)
- `/pojisteni/auto` - Car insurance flow (5 kroků)
- `/kanban` - Kanban karty Majetek

## Implementované Figma designy

1. Design system (24-504, 24-676, 28-1026) - Barvy, typografie, UI komponenty
2. Landing (157-4601) - "Finance jednoduše"
3. Kontakt (257-15215) - Kontaktujte nás
4. Majetek formuláře (118-2322, 120-5461, 120-6638, 120-4047, 257-12952, 221-3032)
5. Travel flow (157-3953)
6. Car flow (157-3194)
7. Kanban karty (157-4543, 157-4554, 221-3722, 157-4565, 157-4576, 257-15203)
