# Contributing to zelda-hyrule-ui

Thanks for your interest in contributing!

## Development Setup

```bash
git clone https://github.com/chaos-xxl/zelda-hyrule-ui.git
cd zelda-hyrule-ui
npm install
npm run dev        # React demo dev server
npm run dev:vue    # Vue playground dev server
```

## Project Structure (monorepo)

```
packages/core/      # Shared design tokens (styles/) + SVG/font assets — single source
packages/react/     # React library → npm: zelda-hyrule-ui
packages/vue/       # Vue 3 library → npm: zelda-hyrule-ui-vue
demo/               # React demo site (repo root vite config)
skill/              # AI Skill specification (serves both frameworks)
docs/               # Project documentation
```

## Adding a New Component

1. Create folder: `packages/react/src/components/[category]/[Name]/`
2. Create files: `Name.tsx`, `name.module.less`, `index.ts`
3. Export from `packages/react/src/index.ts`
4. Add demo in `demo/App.tsx`
5. Follow the checklist in `skill/references/new-component.md`
6. If the component is in the Vue package's scope, port it to
   `packages/vue/src/components/...` — **props must stay 1:1 with the React
   version** (same names, enums, defaults; callbacks become emits, children
   become slots). The Vue component reuses the React component's
   `.module.less` via the `@react` alias — never fork styles.

## Design Rules

- Dark theme only (background #66645D or darker)
- Double-border structure (::after inset 3px)
- Sheikah blue (#3CD3FC) for glows and focus
- Roboto Medium Italic for body text
- Hylia Serif for titles
- Simple icons inline (`<svg><path>`, colorable via `currentColor`); large/complex art imported from `@core/assets` (externalized by lib-assets)

## Scripts

- `npm run dev` — Start React demo dev server
- `npm run dev:vue` — Start Vue playground
- `npm run build` — Build React library
- `npm run build:vue` — Build Vue library
- `npm run build:demo` — Build demo site
- `npm run deploy` — Deploy demo to gh-pages

## License

MIT — For learning and personal use only.
