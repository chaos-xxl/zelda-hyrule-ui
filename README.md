<div align="center">

# 🗡️ zelda-hyrule-ui

[![npm version](https://img.shields.io/npm/v/zelda-hyrule-ui?color=cb3837&labelColor=222)](https://www.npmjs.com/package/zelda-hyrule-ui)
[![npm downloads](https://img.shields.io/npm/dm/zelda-hyrule-ui?color=5fa04e&labelColor=222)](https://www.npmjs.com/package/zelda-hyrule-ui)
[![GitHub stars](https://img.shields.io/github/stars/chaos-xxl/zelda-hyrule-ui?color=ffd700&labelColor=222)](https://github.com/chaos-xxl/zelda-hyrule-ui/stargazers)
[![License](https://img.shields.io/badge/license-MIT-3CD3FC?labelColor=222)](LICENSE)

[![Components](https://img.shields.io/badge/Components-83-3CD3FC?labelColor=222)](https://chaos-xxl.github.io/zelda-hyrule-ui/#/docs)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&labelColor=222)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=fff&labelColor=222)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=fff&labelColor=222)](https://vitejs.dev)
[![Cursor Ready](https://img.shields.io/badge/Cursor-Ready-A0A0A0?labelColor=222)](skill/SKILL.md)
[![BOTW Style](https://img.shields.io/badge/Style-BOTW-E2D146?labelColor=222)](#)
[![Bilingual](https://img.shields.io/badge/docs-EN%20%2F%20%E4%B8%AD%E6%96%87-FF9E64?labelColor=222)](#)

</div>

A React UI component library inspired by *The Legend of Zelda: Breath of the Wild*.
83 components with dark theme, Sheikah glow effects, and AI-consumable design specs.

一套受《塞尔达传说：旷野之息》启发的 React UI 组件库。
83 个组件，暗色主题 + 希卡之石辉光效果，附带 AI 可消费的设计规范。

> **Unofficial, non-commercial fan project — not affiliated with Nintendo.** 非官方、非商用粉丝创作，与任天堂无隶属关系。详见 [Disclaimer & License ↓](#disclaimer--license--声明与许可证)

<div align="center">

<a href="https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/shrine-focus-timer.html"><img src="docs/showcase/hero.gif" width="760" alt="Playable showcases: Focus Timer, Boss Rush, Habit Tracker, Quest Calendar" /></a>

**▶ Playable demos / 在线可玩：** [Focus Timer](https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/shrine-focus-timer.html) · [Boss Rush](https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/finals-boss-rush.html) · [Habit Tracker](https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/daily-shrine-tracker.html) · [Quest Calendar](https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/june-quest-calendar.html)
<br/><sub>Each is a single HTML file — zero dependencies, no build, real embedded font + Figma-exact SVGs. 每个都是单 HTML 文件，零依赖、无构建。</sub>

⭐ **Star it if you'd use it — 用得上就点个 star**

</div>

![Showcase](docs/img/showcase.png)

### 🔗 Preview

- **Online Preview (PC):** [zelda-hyrule-ui](https://chaos-xxl.github.io/zelda-hyrule-ui/)
- **Online Preview (Mobile):** [zelda-hyrule-ui-mobile](https://chaos-xxl.github.io/zelda-hyrule-ui/#/mobile)
- **Component Docs:** [All 83 components](https://chaos-xxl.github.io/zelda-hyrule-ui/#/docs) — live previews, code examples, and props tables
- **Showcase:** [Real-world UI examples](https://chaos-xxl.github.io/zelda-hyrule-ui/#/showcase) — title screens, HUD overlays, quest trackers, and more

### 🔗 预览

- **在线预览（PC）：** [zelda-hyrule-ui](https://chaos-xxl.github.io/zelda-hyrule-ui/)
- **在线预览（Mobile）：** [zelda-hyrule-ui-mobile](https://chaos-xxl.github.io/zelda-hyrule-ui/#/mobile)
- **组件文档：** [全部 83 个组件](https://chaos-xxl.github.io/zelda-hyrule-ui/#/docs)——实时预览、代码示例和 Props 表格
- **效果展示：** [真实界面示例](https://chaos-xxl.github.io/zelda-hyrule-ui/#/showcase)——标题屏、HUD、任务面板等完整场景

---

## Highlights / 核心卖点

<table>
<tr>
<td width="50%"><img src="docs/img/feature-onepager.png" alt="Feature overview (English)" /></td>
<td width="50%"><img src="docs/img/feature-onepager-zh.png" alt="核心卖点（中文）" /></td>
</tr>
</table>

---

## 🗓️ Showcase / 实战案例

Real-world demos built **from the skill alone** — each is a single HTML file: zero
dependencies, no React, no build step, real embedded Hylia Serif + Figma-exact SVG paths.

仅凭 skill 产出的实战案例——每个都是单 HTML 文件：零依赖、无 React、无构建，
内嵌真实 Hylia Serif 字体与 Figma 逐节点导出的 SVG path。

<!-- Showcase grid · 2 columns (four-grid). To add a case: capture a thumbnail to
     docs/showcase/<name>.png via scripts/shoot-showcase.mjs, then add a <td> cell.
     When there are ~6+ cases, switch to 3 columns (nine-grid) — change width="50%"
     to width="33%" and wrap every 3 cells in a new <tr>. -->
<table>
<tr>
<td align="center" width="50%" valign="top">
<a href="https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/finals-boss-rush.html"><img src="docs/showcase/boss-rush.png" width="100%" alt="Finals Boss Rush" /></a><br/>
<a href="https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/finals-boss-rush.html"><b>Finals Boss Rush</b></a> · <a href="https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/finals-boss-rush.html?lang=zh">中文</a><br/>
Turn exam revision into a boss fight<br/>把期末复习做成打 Boss
</td>
<td align="center" width="50%" valign="top">
<a href="https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/june-quest-calendar.html"><img src="docs/showcase/calendar.png" width="100%" alt="June Quest Calendar" /></a><br/>
<a href="https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/june-quest-calendar.html"><b>June Quest Calendar</b></a> · <a href="https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/june-quest-calendar.html?lang=zh">中文</a><br/>
Student calendar with an interactive Quest Log<br/>学生日程表 + 可交互任务面板
</td>
</tr>
<tr>
<td align="center" width="50%" valign="top">
<a href="https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/daily-shrine-tracker.html"><img src="docs/showcase/shrine-tracker.png" width="100%" alt="Daily Shrine Tracker" /></a><br/>
<a href="https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/daily-shrine-tracker.html"><b>Daily Shrine Tracker</b></a> · <a href="https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/daily-shrine-tracker.html?lang=zh">中文</a><br/>
Habit tracker — 4 Spirit Orbs = 1 Heart Container<br/>习惯打卡，集精神球换心之容器
</td>
<td align="center" width="50%" valign="top">
<a href="https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/shrine-focus-timer.html"><img src="docs/showcase/focus-timer.png" width="100%" alt="Shrine Focus Timer" /></a><br/>
<a href="https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/shrine-focus-timer.html"><b>Shrine Focus Timer</b></a> · <a href="https://chaos-xxl.github.io/zelda-hyrule-ui/showcase/shrine-focus-timer.html?lang=zh">中文</a><br/>
Pomodoro — the Stamina wheel counts down<br/>番茄钟，精力轮倒计时
</td>
</tr>
</table>

---

## Installation / 安装

```bash
# React
npm install zelda-hyrule-ui

# Vue 3 (official port — MVP component set, props 1:1 with React)
# Vue 3 官方移植版——MVP 组件集，props 与 React 版 1:1 对齐
npm install zelda-hyrule-ui-vue
```

> 🟢 **Vue users:** [`zelda-hyrule-ui-vue`](https://www.npmjs.com/package/zelda-hyrule-ui-vue) ships 11 components
> (Button / Card / Dialog / Modal / Divider / Loading / HealthBar / StaminaWheel + SheikahBackground / SheikahScanlines / SheikahSymbol)
> sharing the exact same design tokens, Less modules, and Figma-exact assets — pixel-identical to React.
> The rest are being ported: vote / track at [#2](https://github.com/chaos-xxl/zelda-hyrule-ui/issues/2).
> Usage mapping: [`skill/references/vue-usage.md`](skill/references/vue-usage.md) · Package docs: [`packages/vue/README.md`](packages/vue/README.md)

---

## Quick Start / 快速开始

```tsx
import { HealthBar, StaminaWheel, Button, Card } from 'zelda-hyrule-ui'
import 'zelda-hyrule-ui/style'

export default function App() {
  return (
    <div style={{ background: '#66645D', padding: 40, minHeight: '100vh' }}>
      {/* HUD elements */}
      <HealthBar current={10} max={13} bonus={3} />
      <StaminaWheel value={0.75} size={70} />

      {/* Cards */}
      <Card variant="sheikah" title="Sheikah Slate">
        Distilling rune...
      </Card>

      {/* Buttons */}
      <Button variant="sheikah">Activate</Button>
      <Button variant="primary">Confirm</Button>
    </div>
  )
}
```

More examples / 更多示例:

```tsx
// Dialog
import { Dialog, DialogChoice } from 'zelda-hyrule-ui'

<Dialog type="speech" speaker="Old Man">
  It is cold here. You should find warm clothes.
</Dialog>

<DialogChoice
  options={[{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }]}
  selectedIndex={0}
/>
```

```tsx
// Quest tracking
import { QuestListItem } from 'zelda-hyrule-ui'

<QuestListItem
  title="Destroy Ganon"
  location="Hyrule Castle"
  questType="main"
  state="marked"
/>
```

```tsx
// Divine Beasts & Abilities
import { DivineBeast, SheikahAbility } from 'zelda-hyrule-ui'

<DivineBeast beast="ruta" charges={1} />
<SheikahAbility ability="magnesis" />
<SheikahAbility ability="stasis" plus />
```

```tsx
// Sheikah Slate themed layout
import { SheikahBackground, SheikahScanlines, SheikahTextTitle } from 'zelda-hyrule-ui'

<SheikahBackground color="darkBlue">
  <SheikahScanlines animated opacity={0.08} />
  <SheikahTextTitle title="Compendium" description="Creatures of Hyrule" />
</SheikahBackground>
```

---

## For AI Users / AI 用户指南

The simplest way to use this library with AI:

最简单的 AI 使用方式：

1. **Give your AI the GitHub link** and say "use this style to build me a landing page"

   把 GitHub 链接丢给 AI，说"用这个风格给我做一个落地页"

2. **Or** drop `skill/SKILL.md` into Cursor rules, then say "Build in Zelda style"

   或者把 `skill/SKILL.md` 放进 Cursor rules，然后说"用塞尔达风格做"

3. **Or** install the package and reference `AI_USAGE.md` for the full API

   或者安装包后参考 `AI_USAGE.md` 获取完整 API

4. **For PPT / social-card layouts**: pair with a dedicated layout skill (e.g. guizang's PPT / social-card skills) and let the AI apply the Zelda skin on top — see [`skill/references/layout-bridge.md`](skill/references/layout-bridge.md). (Interop only; their AGPL code is never merged here — this project stays MIT.)

   **做 PPT / 图文排版**：可配合专门的排版 skill（如归藏的 PPT / 图文 skill），让 AI 在其版式上套塞尔达皮——见 [`skill/references/layout-bridge.md`](skill/references/layout-bridge.md)。（仅互操作，不合并其 AGPL 代码，本项目保持 MIT。）

### AI Documentation Files / AI 文档

| File | For | Purpose |
|------|-----|---------|
| [`skill/SKILL.md`](skill/SKILL.md) | Cursor / Copilot | Routing-layer skill (progressive disclosure) — design rules + load-on-demand `references/` for pixel-level specs |
| [`AI_USAGE.md`](AI_USAGE.md) | AI assistants | Core API reference — 8 core components in depth; full 83-component enums in `skill/references/` |
| [`DESIGN_PROMPT.md`](DESIGN_PROMPT.md) | v0 / Figma AI / MJ | One-click design generation prompts |
| [`skill/references/layout-bridge.md`](skill/references/layout-bridge.md) | Cursor / Claude Code | Layout interop — pair with a layout skill to make Zelda-style PPT / 图文 / 封面 (skin-over-skeleton) |

| 文件 | 面向 | 用途 |
|------|-----|---------|
| [`skill/SKILL.md`](skill/SKILL.md) | Cursor / Copilot | 路由层 skill（渐进披露）——设计铁律 + 按需加载的 `references/` 像素级规范 |
| [`AI_USAGE.md`](AI_USAGE.md) | AI 编程助手 | 核心 API 手册——8 个核心组件详解；全部 83 组件枚举值见 `skill/references/` |
| [`DESIGN_PROMPT.md`](DESIGN_PROMPT.md) | v0 / Figma AI / MJ | 一键设计生成提示词 |
| [`skill/references/layout-bridge.md`](skill/references/layout-bridge.md) | Cursor / Claude Code | 排版互操作——配合排版 skill 做塞尔达风 PPT / 图文 / 封面（骨 + 皮） |

---

## Components (83) / 组件

| Category | Count | Components |
|----------|-------|------------|
| **HUD** | 16 | HealthBar, StaminaWheel, WeatherIcon, RupeeCounter, DivineBeast, SheikahAbility, RupeeType, Temperature, SoundMeter, Sensor, EffectDuration, BonusEffectIcon, LoadingIcon, HorseSpur, QuickSelector, LoadingHeart |
| **Menu** | 8 | MenuSections, ItemBG, Pagination, ModalButton, Scrollbar, ModalTimer, StatsStack, ModalTutorial |
| **Titles** | 5 | TitleLocation, TitleQuest, TitleShrine, TitleLocationLarge, TitlePointOfInterest |
| **Dialog** | 3 | Dialog, DialogChoice, DialogFloating |
| **Sheikah** | 8 | SheikahSymbol, SheikahBackground, SheikahScanlines, SheikahRune, SheikahCompendiumEntry, SheikahTextTitle, SheikahCompendiumFilters, SheikahAlbumButton |
| **Map** | 7 | MapIcon, MapBeacon, MapQuestMarker, MapLocationName, MapCursor, MapHeroLocation, MapGrid |
| **Quest** | 4 | QuestListItem, QuestDescription, QuestTypeIcon, QuestNotification |
| **Battle** | 4 | ItemEnchantment, StatusHealing, AimingReticle, AttackDefenseValues |
| **Controls** | 2 | ControllerButton, ActionSet |
| **Shop** | 3 | ShopListItem, ShopPriceQuantity, NumberInput |
| **Settings** | 1 | SettingsToggle |
| **Decorations** | 6 | TitleOrnament, DirectionalArrow, Starburst, TextOrnamentCorner, TimerOrnament, Illustration |
| **Brand** | 1 | Logo |
| **Common** | 6 | Button, Card, Modal, Divider, Loading, Toast |
| **Screens** | 9 | MenuScreen, QuestScreen, LoadingScreen, TitleScreen, GameOverScreen, SystemScreen, ShopScreen, SheikahMapScreen, QuickSelectorScreen |

> 📖 Full interactive docs with code examples and props tables: **[Online Documentation](https://chaos-xxl.github.io/zelda-hyrule-ui/#/docs)**
>
> 完整交互式文档（含代码示例和 Props 表格）：**[在线文档](https://chaos-xxl.github.io/zelda-hyrule-ui/#/docs)**

---

## Design Tokens / 设计变量

| Token | Value | Usage |
|-------|-------|-------|
| Sheikah Blue | `#3CD3FC` | Core accent, glows, focus states |
| Sheikah Yellow | `#FFE460` | Highlights, active states |
| Effect Orange | `#FCC413` | Confirm buttons, golden glow |
| Main Tan | `#E2DED3` | Borders, titles |
| Text Main | `#E9E1D1` | Body text (warm white) |
| Dark BG | `#66645D` | Page background |
| Sheikah Panel | `rgba(10,20,40,0.85)` | Sheikah Slate panels |

| 变量 | 值 | 用途 |
|------|-----|------|
| 希卡蓝 | `#3CD3FC` | 核心主色、辉光、焦点态 |
| 希卡黄 | `#FFE460` | 高亮、激活态 |
| 效果橙 | `#FCC413` | 确认按钮、金色辉光 |
| 米色 | `#E2DED3` | 边框、标题 |
| 主文字 | `#E9E1D1` | 正文（暖白） |
| 深色背景 | `#66645D` | 页面背景 |
| 希卡面板 | `rgba(10,20,40,0.85)` | 希卡之石面板 |

---

## Tech Stack / 技术栈

| | |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite (library mode, ESM + CJS dual output) |
| Styling | Less Modules (`zelda-[local]-[hash:5]` scoped names) |
| Assets | SVGs exported from Figma, externalized via `@laynezh/vite-plugin-lib-assets` |
| Fonts | Hylia Serif + Cinzel + Roboto |
| Bundle | ~120KB ESM, tree-shakeable |

---

## Local Development / 本地开发

```bash
git clone https://github.com/chaos-xxl/zelda-hyrule-ui.git
cd zelda-hyrule-ui
npm install
npm run dev       # Start demo dev server
npm run build     # Build component library
npm run deploy    # Deploy demo to gh-pages
```

---

## Contributing / 贡献

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

贡献指南请参阅 [CONTRIBUTING.md](CONTRIBUTING.md)。

---

## Credits / 致谢

This project is built on top of the [**Zelda BOTW UI Kit**](https://www.figma.com/community/file/965825767811358609) by [**Hunter Paramore**](https://hunterparamore.com), shared on the Figma Community. All UI elements, icons, and visual structure originate from this kit. The Figma file is the foundation of every component in this library — all SVGs were exported node-by-node from the original work.

本项目基于 [**Hunter Paramore**](https://hunterparamore.com) 在 Figma 社区分享的 [**Zelda BOTW UI Kit**](https://www.figma.com/community/file/965825767811358609) 构建。所有 UI 元素、图标和视觉结构都源自该素材包。本组件库的全部 SVG 都是从原始 Figma 文件中逐节点精确导出的。

If you use this library or the original UI kit, please credit Hunter Paramore.

如果你使用本库或原始素材，请同时致谢 Hunter Paramore。

| Resource | Link |
|----------|------|
| Original Figma file | https://www.figma.com/community/file/965825767811358609 |
| Author profile | https://hunterparamore.com |
| Author's Figma | [Hunter Paramore on Figma](https://www.figma.com/@hparamore) |

---

## Disclaimer & License / 声明与许可证

> **Unofficial fan project · 非官方粉丝项目**
> This is a free, non-commercial fan project for learning and demonstration only. It is **not affiliated with, endorsed by, or sponsored by Nintendo**. *The Legend of Zelda*, *Breath of the Wild*, the Triforce, the Sheikah eye, and all related names and visual elements are trademarks of **Nintendo Co., Ltd.** No copyrighted Nintendo game assets are redistributed here — the visual design originates from a community [CC BY 4.0 Figma kit](ATTRIBUTION.md). If you are a Nintendo rights holder with concerns, please open an issue and changes will be made promptly.
>
> 本项目为免费、非商用的粉丝创作，仅供学习与演示，**与任天堂无任何隶属、背书或赞助关系**。《塞尔达传说》《旷野之息》、三角力量、希卡之眼等相关名称与视觉元素均为**任天堂（Nintendo Co., Ltd.）的商标**。本仓库不再分发任天堂的受版权保护游戏素材——视觉设计来自社区 [CC BY 4.0 的 Figma 素材包](ATTRIBUTION.md)。如任天堂权利方有任何顾虑，请提 issue，我会第一时间处理。



**Code: [MIT](LICENSE).** The MIT license grants full rights to use, modify, and redistribute the **code**, including commercially.

However, this project's visuals are inspired by Nintendo IP. The MIT license does **not** grant any rights to Nintendo's trademarks or game IP. Because of that, **commercial use is strongly discouraged** — this is a non-commercial fan creation, and any use touching the Zelda/Nintendo IP (especially commercial) is at your own risk and your own responsibility. See [`ATTRIBUTION.md`](ATTRIBUTION.md) for the full two-layer rights breakdown (CC BY 4.0 assets + Nintendo trademark layer).

**代码：[MIT](LICENSE)。** MIT 授予对**代码**的使用、修改、再分发权利（含商用）。

但本项目视觉受任天堂 IP 启发，MIT **不**授予任何任天堂商标或游戏 IP 的权利。因此**强烈不建议商用**——这是非商用粉丝创作，任何涉及塞尔达/任天堂 IP 的使用（尤其商用）风险与责任由使用者自负。完整的两层权利说明见 [`ATTRIBUTION.md`](ATTRIBUTION.md)（CC BY 4.0 素材层 + 任天堂商标层）。

MIT — 仅供学习和个人使用。本项目为粉丝创作，所有塞尔达相关商标归任天堂所有。
