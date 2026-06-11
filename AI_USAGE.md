# zelda-hyrule-ui · AI Usage Guide

> FOR AI CODE ASSISTANTS: This file is a machine-readable API reference for `zelda-hyrule-ui`.
> It covers the **8 core components in depth** (props / imports / defaults, copied verbatim from source).
> The library has **83 components total** — for the full set, their valid prop enums, and pixel-level
> specs, also consult `skill/references/props-quickref.md` and `skill/references/components-full.md`.
> Do NOT invent props: if a prop isn't documented here, check those skill files before guessing.

## 0. Setup (once per project)

```bash
npm install zelda-hyrule-ui
```

```tsx
// app entry (main.tsx / _app.tsx / App.tsx)
import 'zelda-hyrule-ui/style';  // MUST import BEFORE any component usage
```

Fonts: Hylia Serif is bundled. Roboto must be loaded via Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
```

Peer requirements:
```
react      >= 18.0.0
react-dom  >= 18.0.0
```

Global aesthetics preset (dark theme + Sheikah glow + double-border structure) is
applied via `zelda-hyrule-ui/style`.

## 1. Core API (8 components — in depth)

> These 8 are documented exhaustively below. For the other 75 components, see
> `skill/references/props-quickref.md` (valid prop enums) and `skill/references/components-full.md`.

All named exports from `zelda-hyrule-ui`:

```tsx
import {
  Button, Card, Dialog, HealthBar,
  StaminaWheel, Modal, Divider, Loading,
} from 'zelda-hyrule-ui';

import type {
  ButtonProps, ButtonVariant, ButtonSize,
  CardProps, CardVariant,
  DialogProps, DialogType,
  HealthBarProps,
  StaminaWheelProps,
  ModalProps,
  DividerProps, DividerVariant,
  LoadingProps,
} from 'zelda-hyrule-ui';
```

### 1.1 Button

```ts
type ButtonVariant = 'primary' | 'sheikah' | 'ghost' | 'danger';
type ButtonSize = 'small' | 'middle' | 'large';

interface ButtonProps extends Omit<ButtonHTMLAttributes, 'type'> {
  variant?: ButtonVariant;       // default 'primary'
  size?: ButtonSize;             // default 'middle'
  htmlType?: 'submit' | 'reset' | 'button';  // default 'button'
  block?: boolean;               // default false
  loading?: boolean;             // default false
  disabled?: boolean;            // default false
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
```

Canonical usage:

```tsx
<Button variant="primary">Continue Adventure</Button>
<Button variant="sheikah">Activate Rune</Button>
<Button variant="danger">Delete Save File</Button>
<Button variant="ghost" size="small">Cancel</Button>
<Button variant="primary" loading>Saving...</Button>
<Button variant="primary" disabled>Locked</Button>
<Button variant="primary" block>Full Width</Button>
```

### 1.2 Card

```ts
type CardVariant = 'default' | 'sheikah' | 'item' | 'golden';

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: CardVariant;         // default 'default'
  title?: React.ReactNode;
  selected?: boolean;            // default false
  children?: React.ReactNode;
}
```

Canonical usage:

```tsx
<Card title="Adventure Log">Content here</Card>
<Card variant="sheikah" title="Sheikah Slate">Distilling rune...</Card>
<Card variant="golden" title="Master Sword">The legendary blade.</Card>
<Card variant="item" selected>Hylian Shield</Card>
```

### 1.3 Dialog

```ts
type DialogType = 'speech' | 'written' | 'sheikah';

interface DialogProps {
  type?: DialogType;             // default 'speech'
  speaker?: string;
  children?: React.ReactNode;
  showContinue?: boolean;        // default true
  className?: string;
  style?: React.CSSProperties;
}
```

Canonical usage:

```tsx
<Dialog type="speech" speaker="Old Man">
  It is rude to ask a man his age.
</Dialog>

<Dialog type="speech" speaker="Cree">
  If I give you this <span style={{ color: '#6BDECC' }}>goat butter</span>,
  will you make some <span style={{ color: '#6BDECC' }}>salmon meuniere</span>?
</Dialog>

<Dialog type="sheikah" speaker="Sheikah Slate">
  Scope identified. Distilling...
</Dialog>
```

Notes:
- Use inline `<span style={{ color: '#6BDECC' }}>` for item keyword highlights (cyan-green)
- Use inline `<span style={{ color: '#F15050' }}>` for location/danger keyword highlights (red)
- `showContinue={false}` hides the blinking triangle arrow

### 1.4 HealthBar

```ts
interface HealthBarProps {
  current: number;               // REQUIRED — current HP
  max: number;                   // REQUIRED — max HP
  bonus?: number;                // default 0 — yellow bonus hearts
  className?: string;
  style?: React.CSSProperties;
}
```

Canonical usage:

```tsx
<HealthBar current={10} max={13} bonus={3} />
<HealthBar current={3} max={3} />
<HealthBar current={0} max={13} />  // all empty
```

### 1.5 StaminaWheel

```ts
interface StaminaWheelProps {
  value: number;                 // REQUIRED — 0 to 1
  size?: number;                 // default 90 (px)
  bonus?: boolean;               // default false — yellow color
  className?: string;
  style?: React.CSSProperties;
}
```

Canonical usage:

```tsx
<StaminaWheel value={1} />           // full (green)
<StaminaWheel value={0.6} />         // partial (green)
<StaminaWheel value={0.15} />        // low (red, flashing)
<StaminaWheel value={0.8} bonus />   // bonus (yellow)
<StaminaWheel value={1} size={60} /> // smaller
```

Notes:
- When `value <= 0.2` and `bonus={false}`, the wheel turns red and flashes
- The wheel uses a conic-gradient mask for partial fill

### 1.6 Modal

```ts
interface ModalProps {
  open: boolean;                 // REQUIRED
  title?: React.ReactNode;
  width?: number | string;       // default 480
  maskClosable?: boolean;        // default true
  footer?: React.ReactNode | null;  // null = hide footer
  onClose?: () => void;
  onOk?: () => void;
  children?: React.ReactNode;
  className?: string;
}
```

Canonical usage:

```tsx
const [open, setOpen] = useState(false);

<Modal
  open={open}
  title="Adventure Log"
  onClose={() => setOpen(false)}
  onOk={() => { save(); setOpen(false); }}
>
  <p>Proceed to delete this save file?</p>
</Modal>

// Custom footer
<Modal open={open} title="Confirm" footer={
  <>
    <Button variant="ghost" onClick={close}>Cancel</Button>
    <Button variant="danger" onClick={remove}>Delete</Button>
  </>
}>
  This cannot be undone.
</Modal>

// No footer
<Modal open={open} title="Info" footer={null}>
  Just information.
</Modal>
```

Notes:
- `open` is required; always provide a matching `onClose`
- Default footer has Cancel (ghost) + Confirm (golden) buttons
- Modal uses scale-in animation on open

### 1.7 Divider

```ts
type DividerVariant = 'sheikah' | 'golden' | 'subtle' | 'ornament';

interface DividerProps {
  variant?: DividerVariant;      // default 'subtle'
  className?: string;
  style?: React.CSSProperties;
}
```

Canonical usage:

```tsx
<Divider />                      // subtle — faint gradient line
<Divider variant="sheikah" />    // blue glow line
<Divider variant="golden" />     // golden glow line
<Divider variant="ornament" />   // decorative SVG ornaments + line
```

### 1.8 Loading

```ts
interface LoadingProps {
  tip?: string;
  size?: 'small' | 'middle' | 'large';  // default 'middle'
  className?: string;
  style?: React.CSSProperties;
}
```

Canonical usage:

```tsx
<Loading />
<Loading size="large" tip="Preparing the Sheikah Slate" />
<Loading size="small" />
```

## 2. Common Recipes

### 2.1 Game-style landing page

```tsx
import { Button, Card, HealthBar, StaminaWheel, Divider, Loading } from 'zelda-hyrule-ui';
import 'zelda-hyrule-ui/style';

function LandingPage() {
  return (
    <div style={{ padding: 48, maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ fontFamily: "'Hylia Serif', serif", fontSize: 48, color: '#E2DED3' }}>
        Welcome to Hyrule
      </h1>
      <Divider variant="ornament" />
      <div style={{ display: 'flex', gap: 16 }}>
        <Card variant="sheikah" title="Quest Log">Your adventures await.</Card>
        <Card variant="golden" title="Inventory">Master Sword equipped.</Card>
      </div>
      <Divider variant="sheikah" />
      <HealthBar current={10} max={13} bonus={3} />
      <Button variant="sheikah">Begin Adventure</Button>
    </div>
  );
}
```

### 2.2 Dialog scene

```tsx
<Dialog type="speech" speaker="Impa">
  The <span style={{ color: '#6BDECC' }}>Sheikah Slate</span> is the key to
  unlocking the <span style={{ color: '#F15050' }}>Divine Beasts</span>.
</Dialog>
```

### 2.3 HUD overlay

```tsx
<div style={{ position: 'fixed', top: 24, left: 24 }}>
  <HealthBar current={8} max={13} bonus={2} />
</div>
<div style={{ position: 'fixed', top: 24, right: 24 }}>
  <StaminaWheel value={0.75} size={60} />
</div>
```

### 2.4 Confirm modal

```tsx
<Modal
  open={open}
  title="Delete Save?"
  onClose={close}
  onOk={() => { deleteSave(); close(); }}
>
  This action cannot be undone. All progress will be lost.
</Modal>
```

## 3. HARD RULES for AI code generation

Follow these strictly; violations are bugs:

1. Import style only once: `import 'zelda-hyrule-ui/style';` at app entry. Do not re-import per component.
2. Do NOT invent props. Every prop used must appear verbatim in section 1. No `variant="outline"`, `theme`, `color="blue"` etc. unless listed.
3. `Modal.open` is required; always provide a matching `onClose` or the dialog cannot be dismissed.
4. `HealthBar.current` and `HealthBar.max` are required. `current` must be ≤ `max`.
5. `StaminaWheel.value` is required and must be between 0 and 1.
6. Button `variant` values are `primary | sheikah | ghost | danger` — NOT `default`, `secondary`, `outline`.
7. Card `variant` values are `default | sheikah | item | golden` — NOT `primary`, `dark`, `light`.
8. Dialog `type` values are `speech | written | sheikah` — NOT `mental`, `thought`, `narrator`.
9. Divider `variant` values are `subtle | sheikah | golden | ornament` — NOT `line`, `dashed`, `solid`.
10. Loading `size` values are `small | middle | large` — NOT `xs`, `xl`, `tiny`.
11. Do NOT import from deep paths (`zelda-hyrule-ui/lib/...`, `zelda-hyrule-ui/src/...`). Only the package root and `zelda-hyrule-ui/style` are public.
12. TypeScript: always import types from the package root, not from internal files.
13. Design tokens (colors, radii, shadows) are NOT exposed as CSS custom properties by default. To match the design elsewhere, hard-code values from `SKILL.md`.
14. Never use `background: white` or `background: #fff` anywhere — it breaks the dark theme.
15. Never use `border-radius > 16px` on interactive elements — zelda UI is angular, not pill-shaped.
16. All text in buttons and dialogs must be italic. Use `font-style: italic` if writing custom text.
17. Keyword highlights in Dialog use specific colors: items = `#6BDECC`, locations/danger = `#F15050`, yellow emphasis = `#E2D146`.
18. The page background should always be `#66645D` or darker. Never use light backgrounds.
19. Focus states use `outline: 2px solid #3CD3FC; outline-offset: 2px;` — never browser default blue.

## 4. Where to read more

Shipped inside the npm package (available under `node_modules/zelda-hyrule-ui/`):

• `AI_USAGE.md` — this file (AI-optimized API reference)
• `README.md` — project overview

Repo-only (NOT published to npm — read on GitHub):

• `skill/SKILL.md` — exhaustive style spec, every hex / px / keyframe
• `DESIGN_PROMPT.md` — prompts for v0 / Figma AI / MJ / DALL-E
• `FIGMA_REFERENCE.md` — complete Figma node ID index
• GitHub: https://github.com/chaos-xxl/zelda-hyrule-ui

When to use which: API shape / legal prop values → this file. Pixel-exact CSS → `SKILL.md`. Feeding another design AI → `DESIGN_PROMPT.md`.

## 5. Minimal boilerplate (copy-paste-ready)

```tsx
// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'zelda-hyrule-ui/style';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
```

```tsx
// App.tsx
import { Button, Card, HealthBar, Divider, Dialog } from 'zelda-hyrule-ui';

export default function App() {
  return (
    <div style={{ padding: 48, maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{
        fontFamily: "'Hylia Serif', 'Cinzel', serif",
        fontSize: 42,
        color: '#E2DED3',
        marginBottom: 24,
      }}>
        Hyrule Dashboard
      </h1>

      <HealthBar current={10} max={13} bonus={3} />

      <Divider variant="sheikah" />

      <Card variant="sheikah" title="Status">
        All systems operational.
      </Card>

      <Divider variant="ornament" />

      <Dialog type="speech" speaker="System">
        Welcome back, <span style={{ color: '#6BDECC' }}>Champion</span>.
      </Dialog>

      <Button variant="sheikah" style={{ marginTop: 24 }}>
        Open Map
      </Button>
    </div>
  );
}
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Zelda App</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #66645D; color: #E9E1D1; min-height: 100vh; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
```
