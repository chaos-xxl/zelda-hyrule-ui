# 🗡️ zelda-hyrule-ui
<img width="3582" height="1916" alt="image" src="https://github.com/user-attachments/assets/af8fcaf2-18fc-40b8-9846-03e74ed137a1" />



A React UI component library inspired by *The Legend of Zelda: Breath of the Wild*.
Dark theme, Sheikah glow effects, and the visual language of Hyrule — packaged as reusable React components + AI-consumable design specs.

一套受《塞尔达传说：旷野之息》启发的 React UI 组件库。
暗色主题、希卡之石辉光效果、海拉鲁的视觉语言——封装为可复用的 React 组件 + AI 可消费的设计规范。

<img width="3592" height="1890" alt="image" src="https://github.com/user-attachments/assets/ba6be6dd-bf23-4c04-969d-948888e049fb" />



---

## Installation / 安装

```bash
npm install zelda-hyrule-ui
```

## Quick Start / 快速开始

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

## For AI Users (Cursor / Copilot) / AI 用户指南

Drop `skill/SKILL.md` into your Cursor rules, then just say:
> "Build a login page in Zelda BOTW style"

The AI will generate pixel-perfect code matching the game's visual language.

将 `skill/SKILL.md` 放入你的 Cursor 规则中，然后对 AI 说：
> "用塞尔达旷野之息风格做一个登录页面"

AI 会自动生成像素级还原游戏视觉语言的代码。

## Documentation / 文档

| File / 文件 | For / 面向 | Purpose / 用途 |
|------|-----|---------|
| `AI_USAGE.md` | AI code assistants / AI 编程助手 | API reference — all props, types, defaults / API 手册——所有 props、类型、默认值 |
| `skill/SKILL.md` | Cursor / Copilot | Pixel-level CSS spec for self-implementation / 像素级 CSS 规范，用于自行实现 |
| `DESIGN_PROMPT.md` | v0 / Figma AI / MJ | One-click design prompts / 一键设计提示词 |

## Components (84) / 组件（84 个）

Covers the **entire** Zelda BOTW UI Kit — every single component from the Figma source.
覆盖**完整的**塞尔达 BOTW UI Kit——Figma 素材库中的每一个组件。

- **HUD (16)**: Hearts, Stamina, Temperature, Weather, Rupees, Divine Beasts, Sheikah Abilities, Sound Meter, Sensor, Effect Duration...
  心心、精力轮、温度计、天气、卢比、神兽、希卡能力、声音探测器、感应器、效果持续时间...
- **Menu (8)**: Item Slots, Descriptions, Stats, Pagination, Scrollbar, Modals, Quick Selector...
  物品格子、描述面板、属性、分页、滚动条、弹窗、快速选择器...
- **Titles (5)**: Location, Quest, Shrine, Large Location, Point of Interest
  地点标题、任务标题、神庙标题、大号地点、兴趣点
- **Dialog (3)**: Speech, Choices, Floating
  对话框、选项、浮动气泡
- **Sheikah Slate (8)**: Background, Frame, Scanlines, Runes, Compendium, Filters, Album...
  背景、边框、扫描线、符文、图鉴、过滤器、相册...
- **Map (7)**: Icons, Beacons, Minimap, Quest Markers, Cursor, Hero Location, Grid
  图标、信标、小地图、任务标记、光标、英雄位置、网格
- **Quest (4)**: List Items, Descriptions, Notifications, Type Icons
  任务列表、描述、通知、类型图标
- **Battle (4)**: Bonus Effects, Enchantments, Aiming, Attack/Defense Values
  增益效果、附魔、瞄准、攻防数值
- **Controls (2)**: Controller Buttons, Action Sets
  控制器按钮、操作提示
- **Shop (3)**: List Items, Price/Quantity, Number Input
  商品列表、价格数量、数字输入
- **Settings (1)**: Toggle
  设置开关
- **Decorations (5)**: Ornaments, Arrows, Starburst, Corners, Logo
  装饰线、箭头、星芒、角落、Logo
- **Feedback (1)**: Toast
  通知提示
- **Screens (9)**: Menu, Quest, Loading, Title, Game Over, System, Shop, Map, Quick Selector
  菜单界面、任务界面、加载界面、标题界面、游戏结束、系统设置、商店、地图、快速选择

## Online Demo / 在线预览

🔗 **[Live Demo](https://chaos-xxl.github.io/zelda-hyrule-ui/)**

## Design Tokens / 设计变量

Core colors from the BOTW UI / 从 BOTW UI 提取的核心色彩：

| Token | Value / 值 | Usage / 用途 |
|-------|------|------|
| Sheikah Blue / 希卡蓝 | `#3CD3FC` | Core accent, glows, focus / 核心主色、辉光、焦点 |
| Sheikah Yellow / 希卡黄 | `#FFE460` | Highlights / 高亮 |
| Effect Orange / 效果橙 | `#FCC413` | Confirm buttons, golden glow / 确认按钮、金色辉光 |
| Main Tan / 米色 | `#E2DED3` | Borders, titles / 边框、标题 |
| Text Main / 主文字 | `#E9E1D1` | Body text (warm white) / 正文（暖白） |
| Dark BG / 深色背景 | `#66645D` | Page background / 页面背景 |

## Local Development / 本地开发

```bash
git clone https://github.com/chaos-xxl/zelda-hyrule-ui.git
cd zelda-hyrule-ui
npm install
npm run dev       # Start demo dev server / 启动 Demo 开发服务器
npm run build     # Build component library / 构建组件库
npm run deploy    # Deploy demo to gh-pages / 部署 Demo 到 gh-pages
```

## Tech Stack / 技术栈

- React 18 + TypeScript
- Vite (library mode)
- Less Modules
- Inline SVG (exported from Figma / 从 Figma 导出)
- Google Fonts (Cinzel + Roboto) / Hylia Serif Beta
- `@laynezh/vite-plugin-lib-assets` (asset externalization / 资源外部化)

## License / 许可证

MIT — For learning and personal use only. This is a fan-creation project. All Zelda-related trademarks belong to Nintendo.

MIT — 仅供学习和个人使用。本项目为粉丝创作，所有塞尔达相关商标归任天堂所有。
