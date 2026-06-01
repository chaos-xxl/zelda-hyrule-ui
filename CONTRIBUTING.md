# Contributing to zelda-hyrule-ui

Thanks for your interest in contributing!

## Development Setup

```bash
git clone https://github.com/chaosflutter/zelda-hyrule-ui.git
cd zelda-hyrule-ui
npm install
npm run dev
```

## Project Structure

```
src/components/   # React components (by category)
src/styles/       # Design tokens (variables.less)
src/assets/       # SVG and font files
demo/             # Demo site
skill/            # AI Skill specification
docs/             # Project documentation
```

## Adding a New Component

1. Create folder: `src/components/[category]/[Name]/`
2. Create files: `Name.tsx`, `name.module.less`, `index.ts`
3. Export from `src/index.ts`
4. Add demo in `demo/App.tsx`
5. Follow the checklist in `skill/references/new-component.md`

## Design Rules

- Dark theme only (background #66645D or darker)
- Double-border structure (::after inset 3px)
- Sheikah blue (#3CD3FC) for glows and focus
- Roboto Medium Italic for body text
- Hylia Serif for titles
- All SVG inline (no img src)

## Scripts

- `npm run dev` — Start demo dev server
- `npm run build` — Build library
- `npm run build:demo` — Build demo site
- `npm run deploy` — Deploy demo to gh-pages

## License

MIT — For learning and personal use only.
