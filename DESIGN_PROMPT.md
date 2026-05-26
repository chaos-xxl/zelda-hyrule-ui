# zelda-hyrule-ui 设计提示词

## UI 工具提示词（适用于 v0 / Figma AI / Framer AI）

```
Design a UI in the style of "zelda-hyrule-ui" — a Zelda Breath of the Wild-inspired React component library.
Reproduce every detail below as precisely as possible.

=== FONTS ===
Title font: 'Hylia Serif' (fan-made Zelda serif), fallback: 'Cinzel' from Google Fonts
Body font: 'Roboto' Medium Italic (Google Fonts)
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

Font weights:
- Titles:              400 (Hylia Serif, normal style)
- Buttons / dialogs:   500-700 (Roboto, ITALIC — always italic)
- Body text:           500 (Roboto, italic)
- HUD numbers:         500 (Roboto, normal)
- Never use weight < 400

=== COLOR PALETTE ===
Page background:          #66645D (warm dark gray)
Card/Button background:   rgba(0, 0, 0, 0.6) (semi-transparent black)
Sheikah variant bg:       rgba(10, 20, 40, 0.8) (deep navy)

Text colors:
  Primary (warm white):    #E9E1D1
  Titles/borders (tan):    #E2DED3
  Yellow emphasis:         #E2D146
  Red/danger:              #F15050
  Green (item keywords):   #6FD49C / #6BDECC
  Muted:                   rgba(233, 225, 209, 0.6)

Accent colors:
  Sheikah Blue:            #3CD3FC (THE core accent — used for glows, focus, borders)
  Sheikah Yellow:          #FFE460
  Effect Orange/Gold:      #FCC413 (confirm buttons, golden glow)
  Sheikah Blue Glow:       #4FC0FF (lighter, for box-shadow)
  Sheikah Blue Dark:       #0A8DD7 (deeper shadow layer)

Divine Beast colors:
  Water (Vah Ruta):        #27CBFF
  Wind (Vah Medoh):        #7CFF4E
  Thunder (Vah Naboris):   #FCC63D
  Fire (Vah Rudania):      #EB4713

Status:
  Heart red:               #F1362F
  Heart empty:             #363930
  Bonus heart yellow:      #FFE465
  Stamina green:           #13FF59
  Low stamina red:         #F15050

=== SHAPE & STRUCTURE ===
MOST IMPORTANT FEATURE: Double-border structure on ALL containers:
  - Outer layer: background rgba(0,0,0,0.6), border-radius 4px, NO visible border
  - Inner layer: ::after pseudo-element, inset 3px, border 1px solid rgba(226,222,211,0.3), border-radius 2px
  - Hover: inner border brightens to rgba(226,222,211,0.6)
  - Selected: golden glow (inset 0 0 7px 3px rgba(246,231,152,0.5), 0 0 12px 1px rgba(227,227,200,0.8))

Border-radius: 4px outer, 2px inner — ANGULAR, NOT rounded/pill-shaped
Dialog boxes: capsule shape (90px radius) with SVG background path
Modals: border-radius 12px (exception for larger containers)

=== GLOW EFFECTS (defining visual feature) ===
Blue Glow:     box-shadow: 0 0 8px #4FC0FF
Sheikah Glow:  box-shadow: 0 0 10px #4FC0FF, 0 1px 11px #0A8DD7
Golden Glow:   box-shadow: 0 0 6px #FFB800, 0 0 8px #FFDB7E, 0 0 10px #FFB904
Hover Glow:    box-shadow: inset 0 0 7px 3px rgba(246,231,152,0.5), 0 0 12px 1px rgba(227,227,200,0.8)
Tan Shadow:    box-shadow: 0 0 20px #000, 0 0 14px #E2DED3

Top-line decoration on Sheikah cards:
  position absolute, top 0, left 10%, right 10%, height 1px
  background: linear-gradient(90deg, transparent, #3CD3FC, transparent), opacity 0.6

=== INTERACTION ===
Hover: inner border brightens + optional glow appears
Active: transform scale(0.98)
Focus: outline 2px solid #3CD3FC, outline-offset 2px
Disabled: opacity 0.4, cursor not-allowed
Transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1)

=== HUD ELEMENTS ===
Hearts: 30×24px SVG, red #F1362F filled / #363930 empty / #FFE465 bonus yellow
Stamina: 90×90px container, 60.75×60.75 ring SVG, green #13FF59, conic-gradient mask for partial fill
Dividers: gradient lines (subtle/sheikah blue/golden) or ornamental SVG decorations

=== DIALOG BOXES ===
Capsule shape (border-radius ~90px), SVG background path (fill black, opacity 0.5)
Speaker name: 28px Roboto Medium Italic, positioned above the box (margin-top -20px)
Body text: 36px Roboto Bold Italic, line-height 1.2
Continue arrow: blinking triangle at bottom center (animation: blink 1.2s step-end infinite)
Keyword colors: items #6BDECC, locations #F15050

=== MODAL ===
Overlay: rgba(0,0,0,0.7) + backdrop-filter blur(2px)
Container: rgba(20,20,18,0.95), border-radius 12px
Entry animation: scale from 0.92 to 1, opacity 0 to 1, 0.3s ease
Title: Hylia Serif, 22px, color #E2DED3
Confirm button: border 1px solid #FCC413, bg rgba(252,196,19,0.12), color #FCC413
Cancel button: border 1px solid rgba(226,222,211,0.3), bg transparent

=== FORBIDDEN PATTERNS ===
✗ Light/white backgrounds (#fff, #f8f8f0, any light color)
✗ Pure black #000 or pure white #fff as text color
✗ Cold blue focus rings (#0066ff, #2196f3)
✗ Pill-shaped buttons (border-radius 50px) — use angular 4px
✗ 3D bottom box-shadow on buttons (that's Animal Crossing style, NOT Zelda)
✗ Rounded/bubbly fonts (Nunito, Comic Sans) — use Roboto Italic + Hylia Serif
✗ Warm pastel backgrounds (cream, mint, peach) — always dark
✗ Non-italic button/dialog text
✗ font-weight below 400
```

## 图片生成提示词（适用于 Midjourney / DALL-E / Stable Diffusion）

```
Pixel-perfect UI screenshot of "zelda-hyrule-ui" React component library,
The Legend of Zelda: Breath of the Wild game interface aesthetic,

Interface details:
- Dark warm gray background #66645D, NEVER white or light
- Angular containers (border-radius 4px) with double-border structure:
  outer layer semi-transparent black, inner layer thin tan border
- Sheikah blue glow effects #3CD3FC on hover and active states
- Golden glow #FCC413 on confirm actions and selected items
- Capsule-shaped dialog boxes with italic bold white text
- Red heart containers in a row (SVG hearts, 30x24px each)
- Green circular stamina wheel with partial fill
- Hylia Serif font for titles (Zelda-style serif)
- Roboto Medium Italic for all body text and buttons
- Sheikah Slate blue-tinted panels with top gradient line decoration
- Ornamental dividers with Zelda-style decorative SVG motifs
- Color-coded keywords in dialog: cyan-green for items, red for locations
- Blinking triangle continue-arrow at bottom of dialog boxes
- Divine Beast ability icons with colored glows (blue/green/yellow/red)
- Dark, atmospheric, ancient-technology aesthetic
- Subtle scan-line texture on Sheikah Slate interfaces
- 4K resolution, game UI design mockup, dark mode interface
```

## 关键数值速查表

| 属性 | 值 | 用途 |
|------|-----|------|
| 页面背景 | #66645D | body background |
| 容器背景 | rgba(0,0,0,0.6) | Card/Button 外层 |
| 希卡容器背景 | rgba(10,20,40,0.8) | Sheikah 变体 |
| 内层边框 | 1px solid rgba(226,222,211,0.3) | ::after, inset 3px |
| 内层边框 hover | rgba(226,222,211,0.6) | 变亮 |
| 主文字色 | #E9E1D1 | 暖白 |
| 标题/边框色 | #E2DED3 | 米色 tan |
| 希卡蓝 | #3CD3FC | 核心主色 |
| 希卡辉光 | 0 0 8px #4FC0FF | box-shadow |
| 金色辉光 | 0 0 6px #FFB800, 0 0 8px #FFDB7E, 0 0 10px #FFB904 | 确认/选中 |
| 悬停辉光 | inset 0 0 7px 3px rgba(246,231,152,0.5), 0 0 12px 1px rgba(227,227,200,0.8) | selected |
| 确认按钮色 | border #FCC413, bg rgba(252,196,19,0.12) | Modal confirm |
| 心红色 | #F1362F | 填充心 |
| 心空色 | #363930 | 空心 |
| 奖励心黄 | #FFE465 | 黄心 |
| 精力绿 | #13FF59 | 精力轮填充 |
| 物品关键词 | #6BDECC | Dialog 中物品名 |
| 地点关键词 | #F15050 | Dialog 中地点名 |
| 标题字体 | 'Hylia Serif', 'Cinzel', serif | 标题 |
| 正文字体 | 'Roboto' Medium Italic | 按钮/对话/正文 |
| 按钮高度（中） | 75px | middle size |
| 对话框宽度 | max-width 910px | Dialog |
| 对话正文字号 | 36px Bold Italic | Dialog content |
| 心心尺寸 | 30×24px | 每个心 |
| 精力轮尺寸 | 90×90px（环 60.75×60.75） | StaminaWheel |
| 外层圆角 | 4px | 容器 |
| 内层圆角 | 2px | ::after |
| 过渡 | 0.25s cubic-bezier(0.4,0,0.2,1) | 通用 |
| 焦点 | outline 2px solid #3CD3FC, offset 2px | focus-visible |
| 禁用 | opacity 0.4 | disabled |
| Google Fonts | Cinzel:400;500;700 + Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700 | 在线加载 |
