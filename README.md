# 🗡️ zelda-hyrule-ui
<img width="4040" height="2360" alt="image" src="https://github.com/user-attachments/assets/36b61f20-7290-4455-85ec-860fa5c7d54a" />


A React UI component library inspired by *The Legend of Zelda: Breath of the Wild*.

Dark theme, Sheikah glow effects, and the visual language of Hyrule — packaged as reusable React components + AI-consumable design specs.

## Installation

```bash
npm install zelda-hyrule-ui
```

## Quick Start

```tsx
import { Button, Card, HealthBar, StaminaWheel } from 'zelda-hyrule-ui'
import 'zelda-hyrule-ui/style'

function App() {
  return (
    <div>
      <HealthBar current={10} max={13} bonus={3} />
      <StaminaWheel value={0.8} />
      <Card variant="sheikah" title="Sheikah Slate">
        Distilling rune...
      </Card>
      <Button variant="sheikah">Activate</Button>
    </div>
  )
}
```

## For AI Users (Cursor / Copilot)

Drop `skill/SKILL.md` into your Cursor rules, then just say:
> "Build a login page in Zelda BOTW style"

The AI will generate pixel-perfect code matching the game's visual language.

## Documentation

| File | For | Purpose |
|------|-----|---------|
| `AI_USAGE.md` | AI code assistants | API reference — all props, types, defaults |
| `skill/SKILL.md` | Cursor / Copilot | Pixel-level CSS spec for self-implementation |
| `DESIGN_PROMPT.md` | v0 / Figma AI / MJ | One-click design prompts |

## Components (90+)

Covers the **entire** Zelda BOTW UI Kit — every single component from the Figma source:
- HUD: Hearts, Stamina, Temperature, Weather, Rupees, Divine Beasts, Sheikah Abilities, Sound Meter, Sensor, Target Indicator...
- Menu: Item Slots, Descriptions, Stats, Pagination, Scrollbar, Modals, Quick Selector, Material Selection...
- Dialog: Speech, Written, Mental, Sheikah, Choices, Floating...
- Sheikah Slate: Background, Frame, Scanlines, Runes, Compendium, Camera, Scope, Album, Memory Photos, Divine Beast Controls...
- Map: Icons, Beacons, Minimap, Quest Markers, Cursor, Hero Location, Grid...
- Quest: List Items, Descriptions, Notifications, Illustrations, Type Icons...
- Battle: Bonus Effects, Enchantments, Aiming, Attack/Defense Values, Status Healing...
- Settings: Toggle Base, Toggle Component, Save Selection, List Items...
- Shop: Item Info, Price/Quantity, Rupee Counter, List Items, Number Input...
- Toast: Inventory Notification, Side Info (5 variants)...
- Decorations: Ornaments, Corners, Arrows, Starburst, Dividers...
- Controls: All Switch buttons, Sticks, D-Pad, Button Hints, Action Sets, Gamepad...
- Brand: Full Logo, Logo Mark
- Full Screens: Menu, Quest Log, Loading, Title, Game Over, Shop, System Settings...

## Design Tokens

Core colors from the BOTW UI:

- **Sheikah Blue**: `#3CD3FC`
- **Sheikah Yellow**: `#FFE460`
- **Effect Orange**: `#FCC413`
- **Main Tan**: `#E2DED3`
- **Text Main**: `#E9E1D1`
- **Dark BG**: `#66645D`

## Local Development

```bash
git clone <repo-url>
cd zelda-hyrule-ui
npm install
npm run dev       # Start demo dev server
npm run build     # Build component library
```

## Tech Stack

- React 18 + TypeScript
- Vite (library mode)
- Less Modules
- Inline SVG (exported from Figma)
- Google Fonts (Cinzel + Roboto) / Hylia Serif Beta

## License

MIT — For learning and personal use only. This is a fan-creation project. All Zelda-related trademarks belong to Nintendo.
