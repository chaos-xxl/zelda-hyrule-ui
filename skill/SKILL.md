| name | zelda-hyrule-ui-style |
| --- | --- |
| description | 使用 zelda-hyrule-ui 设计风格创建 React UI 界面或组件。当用户需要：(1) 用塞尔达旷野之息风格创建 UI 页面或组件；(2) 使用 zelda-hyrule-ui 组件库开发界面；(3) 构建暗色科技感、希卡辉光风格的 React 界面；(4) 复现或扩展 zelda-hyrule-ui 的视觉语言；(5) 提问"塞尔达风格"、"BOTW 风格"、"希卡之石风格"、"Hyrule 风格"的 UI 时，务必使用此 skill。 |

# zelda-hyrule-ui 设计风格指南

> Last updated: 2025-01 · Validated against `zelda-hyrule-ui@0.1.x`

三文档分工（生成代码 / 调样式时按需查阅，避免互相翻查）：

• `AI_USAGE.md` — API 手册：每个组件的 props、类型、默认值、合法取值、禁用用法。写代码优先查这里。
• `skill/SKILL.md`（本文档）— 像素级样式：设计 token、每组件精确 CSS（hex/px/keyframe）、Demo 布局、新组件开发模板。要自己实现/扩展样式时查这里。
• `DESIGN_PROMPT.md` — 给外部工具（v0 / Figma AI / Midjourney / DALL-E）的提示词包，含色板速查、禁用清单。只在喂别的 AI 时用。

---

## 📑 Table of Contents

- [🚀 30 秒快速开始](#-30-秒快速开始)
- [🧭 AI 决策导航](#-ai-决策导航)
- [📦 常见配方](#-常见配方)
- [概述](#概述)
- [1. Design Tokens](#1-design-tokens)
- [2. 核心设计模式](#2-核心设计模式)
- [3. 核心组件深度示例](#3-核心组件深度示例)
- [4. CSS 变量完整模板](#4-css-变量完整模板)
- [5. 设计铁律（8 条）](#5-设计铁律8-条)
- [6. 新组件文件结构模板](#6-新组件文件结构模板)
- [7. 新组件 Checklist](#7-新组件-checklist)
- [8. 禁止模式与正确示例](#8-禁止模式与正确示例)
- [9. 完整界面案例](#9-完整界面案例)
- [10. 全量组件精确样式规范（84 个组件）](#10-全量组件精确样式规范84-个组件)
- [11. 全量组件清单（84 个）](#11-全量组件清单84-个)
- [12. Demo 布局精确规范](#12-demo-布局精确规范)
- [13. 主题定制](#13-主题定制)
- [14. 无障碍（A11y）](#14-无障碍a11y)
- [15. 完整 SVG Path 数据索引](#15-完整-svg-path-数据索引)

---

## 🚀 30 秒快速开始

最常用的 import + 一段可运行的 JSX。直接复制就能跑。

```tsx
import {
  Button, Card, Dialog, HealthBar, StaminaWheel,
  RupeeCounter, SheikahBackground, SheikahScanlines, SheikahTextTitle,
} from 'zelda-hyrule-ui'
import 'zelda-hyrule-ui/style'

export default function App() {
  return (
    <div style={{ background: '#66645D', minHeight: '100vh', padding: 40 }}>
      {/* 希卡之石面板：暗色 + 扫描线 */}
      <SheikahBackground color="darkBlue">
        <SheikahScanlines animated opacity={0.08} />
        <div style={{ position: 'relative', zIndex: 1, padding: 40 }}>
          <SheikahTextTitle title="Hyrule" description="The Legend Continues" />

          {/* HUD 三件套：心心 / 精力 / 卢比 */}
          <div style={{ display: 'flex', gap: 24, marginTop: 32 }}>
            <HealthBar current={10} max={13} bonus={3} />
            <StaminaWheel value={0.75} size={70} />
            <RupeeCounter amount={13878} />
          </div>

          {/* 对话框 + 按钮 */}
          <Dialog type="speech" speaker="Old Man">
            It is dangerous to go alone. Take this.
          </Dialog>

          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <Button variant="sheikah">Activate</Button>
            <Button variant="primary">Continue</Button>
          </div>
        </div>
      </SheikahBackground>
    </div>
  )
}
```

记住三件事：
1. 页面背景永远是 `#66645D` 或更深
2. 对话/按钮文字必须 italic
3. 用 `<SheikahBackground>` 做暗色科技感面板，里面套 `<SheikahScanlines>` 加扫描线

---

## 🧭 AI 决策导航

收到用户需求时，按下表查找对应章节，避免盲读 2000+ 行：

| 用户问 | 查这里 |
|--------|-------|
| "做一个登录页/首页/任务面板" | [§9 完整界面案例](#9-完整界面案例) |
| "用什么组件做 X 场景" | [📦 常见配方](#-常见配方) |
| "Button 怎么用" / "Card 有几种 variant" | `AI_USAGE.md` |
| "希卡蓝是什么颜色" / "字号多少" | [§1 Design Tokens](#1-design-tokens) |
| "为什么我的按钮看起来不对" | [§5 设计铁律](#5-设计铁律8-条) + [§8 禁止模式](#8-禁止模式与正确示例) |
| "怎么自己做一个新组件" | [§6 文件结构模板](#6-新组件文件结构模板) + [§7 Checklist](#7-新组件-checklist) |
| "想换主题色" | [§13 主题定制](#13-主题定制) |
| "Modal 的 ARIA 怎么处理" | [§14 无障碍](#14-无障碍a11y) |
| 单个组件的精确 CSS 值 | [§10 全量组件规范](#10-全量组件精确样式规范84-个组件) |

**AI 卡住时怎么办：**
- 不确定用哪个 variant → 默认用 `sheikah`（暗色科技感最强）
- 不确定尺寸 → 默认 `middle`
- 不确定颜色 → 用 `@text-color-main` (`#E9E1D1`) 写文字，`@sheikah-blue` (`#3CD3FC`) 做强调
- 用户没说要不要双语 → 默认只英文，要中文时主动加（不要默认双语，会撑爆布局）

---

## 📦 常见配方

把"用户场景 → 组件组合"写成查询表，AI 不用再凭空发明。

### 游戏 HUD（屏幕 overlay）

```tsx
// 左上角：心心 + 精力
<div style={{ position: 'fixed', top: 24, left: 24, display: 'flex', gap: 16 }}>
  <HealthBar current={10} max={13} bonus={3} />
  <StaminaWheel value={0.75} size={60} />
</div>

// 右上角：卢比
<div style={{ position: 'fixed', top: 24, right: 24 }}>
  <RupeeCounter amount={13878} />
</div>

// 右下角：天气 + 温度 + 噪音
<div style={{ position: 'fixed', bottom: 24, right: 24, display: 'flex', gap: 12 }}>
  <WeatherIcon weather="rain" />
  <Temperature value="cold" />
  <SoundMeter level="low" />
</div>
```

### 任务追踪面板

```tsx
<Card variant="sheikah" title="Active Quests">
  <QuestListItem title="Destroy Ganon" location="Hyrule Castle" questType="main" state="marked" />
  <QuestListItem title="Robbie's Research" location="Akkala Lab" questType="side" />
  <QuestListItem title="The Stolen Heirloom" location="Kakariko" questType="shrine" state="completed" />
</Card>
```

### 对话场景（NPC）

```tsx
<div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '0 80px 40px' }}>
  <Dialog type="speech" speaker="Old Man">
    It is cold here. You should find warm clothes.
  </Dialog>
  <DialogChoice
    options={[
      { label: 'Yes, please', value: 'yes' },
      { label: 'No, I\'m fine', value: 'no' },
    ]}
    selectedIndex={0}
  />
</div>
```

### 库存/物品菜单

```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 6 }}>
  <ItemBG state="filled" />
  <ItemBG state="selected" />
  <ItemBG state="equipped" />
  <ItemBG state="empty" />
  {/* ... 重复填满 */}
</div>
<MenuSections activeSection="weapons" />
<Pagination totalPages={4} currentPage={1} />
```

### 商店界面

```tsx
<Card variant="default" title="Beedle's Shop">
  <ShopListItem name="Hylian Shield" price={3000} />
  <ShopListItem name="Ancient Arrow" price={90} hovered />
  <ShopListItem name="Mighty Elixir" price={150} />
</Card>
<RupeeCounter amount={13878} />
```

### 神兽 / 能力栏

```tsx
<div style={{ display: 'flex', gap: 16 }}>
  <DivineBeast beast="ruta" charges={1} />
  <DivineBeast beast="medoh" charges={3} />
  <DivineBeast beast="naboris" charges={2} />
  <DivineBeast beast="rudania" charges={1} />
</div>
<div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
  <SheikahAbility ability="roundBomb" plus />
  <SheikahAbility ability="magnesis" />
  <SheikahAbility ability="stasis" plus />
  <SheikahAbility ability="cryonis" />
</div>
```

### 设置页

```tsx
<Card variant="sheikah" title="System Settings">
  <SettingsToggle label="HUD Display" options={['ON', 'OFF']} value="ON" selected />
  <SettingsToggle label="Camera Sensitivity" options={['Low', 'Normal', 'High']} value="Normal" />
  <SettingsToggle label="Motion Controls" options={['ON', 'OFF']} value="OFF" />
</Card>
```

### 加载/启动屏

```tsx
<SheikahBackground color="darkBlue">
  <SheikahScanlines animated opacity={0.12} />
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
    <SheikahSymbol size={120} />
    <Loading />
    <p style={{ color: '#E9E1D1', fontStyle: 'italic', marginTop: 24 }}>Loading Hyrule...</p>
  </div>
</SheikahBackground>
```

### 地图标记群

```tsx
<div style={{ position: 'relative', width: 800, height: 600, background: '#66645D' }}>
  <MapHeroLocation rotation={45} vision style={{ position: 'absolute', top: '50%', left: '50%' }} />
  <MapBeacon color="blue" flare style={{ position: 'absolute', top: 100, left: 200 }} />
  <MapIcon icon="shrine" style={{ position: 'absolute', top: 300, left: 450 }} />
  <MapIcon icon="tower" style={{ position: 'absolute', top: 150, left: 600 }} />
  <MapQuestMarker pulse style={{ position: 'absolute', top: 400, left: 300 }} />
</div>
```

---

## 概述

zelda-hyrule-ui 是一套受《塞尔达传说：旷野之息》启发的 React + TypeScript UI 组件库。
设计语言核心：暗色主题 + 希卡蓝辉光 + 双层边框结构 + 游戏内 HUD 元素 + Roboto Medium Italic 正文。

• 源码：`src/components/<Category>/<ComponentName>/`
• Demo 站：`demo/`
• 构建：Vite (library mode) + `vite.config.ts`（库）/ `vite.config.demo.ts`（Demo）
• 样式系统：Less Modules + `src/styles/variables.less` 设计 token

## 1. Design Tokens

### 色彩系统

```less
// ---- 核心色彩（从 Figma Variables 精确提取）----
@zelda-tan:              #E2DED3;    // 主 UI 米色，边框/标题文字
@zelda-dark-bg:          #66645D;    // 页面背景
@zelda-black:            #000000;    // 纯黑（遮罩）
@zelda-loading-white:    #FFFDE4;    // 加载画面暖白

// ---- 文字色 ----
@text-color-main:        #E9E1D1;    // 主体文字（暖白）
@text-color-yellow:      #E2D146;    // 黄色强调
@text-color-red:         #F15050;    // 红色/危险/关键词高亮
@text-color-green:       #6FD49C;    // 绿色/物品关键词高亮
@text-color-muted:       rgba(233, 225, 209, 0.6);  // 次要文字

// ---- 希卡色系 ----
@sheikah-blue:           #3CD3FC;    // 核心希卡蓝
@sheikah-blue-dark:      #0A8DD7;    // 深希卡蓝（辉光阴影层）
@sheikah-blue-glow:      #4FC0FF;    // 希卡辉光色
@sheikah-yellow:         #FFE460;    // 希卡黄
@sheikah-white-glow:     #BAEFFB;    // 白蓝辉光

// ---- 效果色 ----
@effect-orange:          #FCC413;    // 金色/确认按钮
@golden-glow-1:          #FFB800;    // 金色辉光层 1
@golden-glow-2:          #FFDB7E;    // 金色辉光层 2
@golden-glow-3:          #FFB904;    // 金色辉光层 3

// ---- 神兽色 ----
@beast-water:            #27CBFF;    // Vah Ruta（水）
@beast-wind:             #7CFF4E;    // Vah Medoh（风）
@beast-thunder:          #FCC63D;    // Vah Naboris（雷）
@beast-fire:             #EB4713;    // Vah Rudania（火）
@beast-recharge:         #FF0000;    // 充能中

// ---- 背景 ----
@bg-dark:                #1a1a1a;    // 最深背景
@bg-menu:               rgba(0, 0, 0, 0.85);  // 菜单遮罩
@bg-card:               rgba(0, 0, 0, 0.6);   // 卡片/按钮背景
@bg-item-slot:          rgba(60, 58, 52, 0.8); // 物品格子

// ---- 边框 ----
@border-color:           rgba(226, 222, 211, 0.3);  // 默认内层边框
@border-color-active:    #E2DED3;                    // 激活态边框
@border-color-sheikah:   rgba(60, 211, 252, 0.5);   // 希卡蓝边框
```

### 辉光与阴影系统

```less
// ---- 辉光（box-shadow / filter）----
@glow-blue:              0 0 8px #4FC0FF;
@glow-sheikah:           0 0 10px #4FC0FF, 0 1px 11px #0A8DD7;
@glow-golden:            0 0 6px #FFB800, 0 0 8px #FFDB7E, 0 0 10px #FFB904;
@glow-hover:             inset 0 0 7px 3px rgba(246, 231, 152, 0.5),
                         0 0 12px 1px rgba(227, 227, 200, 0.8);
@glow-wide-blue:         0 0 34px rgba(255, 255, 255, 0.4), 0 0 30px #32A7E9;

// ---- 阴影 ----
@shadow-dark:            0 0 11px rgba(0, 0, 0, 0.8);
@shadow-subtle:          -2px 2px 10px rgba(0, 0, 0, 0.15);
@shadow-tan:             0 0 20px #000, 0 0 14px #E2DED3;
```

### 字体

```less
// 字体栈
@font-title:  'Hylia Serif', 'Cinzel', Georgia, serif;
@font-body:   'Roboto', -apple-system, 'PingFang SC', sans-serif;
@font-mono:   'Roboto Mono', 'SF Mono', Consolas, monospace;
```

加载方式：

```html
<!-- index.html <head> 中 -->
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
```

```css
@font-face {
  font-family: 'Hylia Serif';
  src: url('/src/assets/fonts/HyliaSerif.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

字重分级：

| 用途 | 字重 | 字体 | 样式 |
|------|------|------|------|
| 标题/大字 | 400 | Hylia Serif | normal |
| 按钮/对话正文 | 500-700 | Roboto | italic |
| 正文内容 | 500 | Roboto | italic |
| 数值（HUD） | 500 | Roboto | normal |
| placeholder/说明 | 400 | Roboto | italic |

禁止使用细体（weight < 400）。对话和按钮文字**必须 italic**。

### 间距 / 圆角 / 边框

```less
// 间距（来自 variables.less）
@spacing-xs:   4px;
@spacing-sm:   8px;
@spacing-md:   12px;
@spacing-lg:   16px;
@spacing-xl:   24px;
@spacing-2xl:  32px;
@spacing-3xl:  48px;

// 圆角
@radius-sm:    4px;
@radius-md:    8px;
@radius-lg:    12px;
@radius-xl:    16px;
@radius-round: 50%;

// 边框
@border-color:         rgba(226, 222, 211, 0.3);  // 默认内层
@border-color-active:  #E2DED3;                    // 激活态
@border-color-sheikah: rgba(60, 211, 252, 0.5);   // 希卡蓝
// 外层容器 background：rgba(0, 0, 0, 0.6) 或 @bg-card
```

### 动效

```less
@motion-duration-fast:   0.15s;
@motion-duration-base:   0.25s;
@motion-duration-slow:   0.4s;
@motion-ease:            cubic-bezier(0.4, 0, 0.2, 1);
@motion-ease-out:        cubic-bezier(0, 0, 0.2, 1);
```

关键帧动画：

```css
@keyframes hyrule-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes hyrule-scale-in {
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes hyrule-slide-up {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes hyrule-glow-pulse {
  0%, 100% { box-shadow: 0 0 8px #4FC0FF; }
  50%      { box-shadow: 0 0 10px #4FC0FF, 0 1px 11px #0A8DD7; }
}
@keyframes hyrule-blink {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
}
```

---

## 2. 核心设计模式

### 双层边框结构（最重要的视觉特征）

所有容器类元素（Button、Card、Modal、ItemSlot）使用双层结构：

```css
/* 外层 — 半透明黑色背景 */
.container {
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 4px;
  position: relative;
}

/* 内层 — 米色细边框（用 ::after 伪元素）*/
.container::after {
  content: '';
  position: absolute;
  inset: 3px;
  border: 1px solid rgba(226, 222, 211, 0.3);
  border-radius: 2px;
  pointer-events: none;
}

/* Hover 态 — 内层边框变亮 */
.container:hover::after {
  border-color: rgba(226, 222, 211, 0.6);
}

/* 选中态 — 辉光效果 */
.container.selected {
  box-shadow: inset 0 0 7px 3px rgba(246, 231, 152, 0.5),
              0 0 12px 1px rgba(227, 227, 200, 0.8);
}
.container.selected::after {
  border-color: #E2DED3;
}
```

### 希卡蓝变体

```css
.sheikah {
  background: rgba(10, 20, 40, 0.8);
}
.sheikah::after {
  border-color: rgba(60, 211, 252, 0.4);
}
.sheikah:hover {
  box-shadow: 0 0 8px #4FC0FF;
}
.sheikah:hover::after {
  border-color: #3CD3FC;
}
```

---

## 3. 核心组件深度示例

> 本节为 8 个最常用组件的深度示例（Button / Card / Dialog / HealthBar / StaminaWheel / Modal / Divider / Loading）。
> 完整 84 个组件的精确样式规范见 [§10](#10-全量组件精确样式规范84-个组件)。

### Button

双层边框结构，Roboto Medium Italic 文字，4 种变体。

尺寸表：

| 属性 | small | middle | large |
|------|-------|--------|-------|
| height | 50px | 75px | 90px |
| padding | 0 24px | 0 32px | 0 40px |
| font-size | 20px | 30px | 36px |
| border-radius (外层) | 4px | 4px | 4px |
| border-radius (内层) | 2px | 2px | 2px |

精确样式值：

```css
/* 基础（所有变体共享）*/
background: rgba(0, 0, 0, 0.6);
border: none;
border-radius: 4px;
font-family: 'Roboto', sans-serif;
font-weight: 500;
font-style: italic;
color: #E2DED3;
letter-spacing: 0.01em;
line-height: 1;
cursor: pointer;
transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

/* 内层边框 ::after */
inset: 3px;
border: 1px solid rgba(226, 222, 211, 0.3);
border-radius: 2px;

/* hover */
background: rgba(0, 0, 0, 0.75);
/* hover ::after */ border-color: rgba(226, 222, 211, 0.6);

/* active */
transform: scale(0.98);

/* focus-visible */
outline: 2px solid #3CD3FC;
outline-offset: 2px;

/* disabled */
opacity: 0.4;
cursor: not-allowed;
```

变体差异：

| 变体 | 背景 | 内层边框色 | hover 效果 |
|------|------|-----------|-----------|
| primary | rgba(0,0,0,0.6) | rgba(226,222,211,0.3) | 边框变亮 + tan glow |
| sheikah | rgba(10,20,40,0.8) | rgba(60,211,252,0.4) | box-shadow: 0 0 8px #4FC0FF |
| ghost | transparent | transparent | 显示背景+边框 |
| danger | rgba(0,0,0,0.6) | rgba(241,80,80,0.4) | box-shadow: 0 0 8px rgba(241,80,80,0.4) |

selected 态（Modal 中选中的按钮）：

```css
background: rgba(226, 222, 211, 0.12);
box-shadow: inset 0 0 7px 3px rgba(246, 231, 152, 0.5),
            0 0 12px 1px rgba(227, 227, 200, 0.8);
/* ::after */ border-color: #E2DED3;
```

### Card

双层边框容器，4 种变体。

```css
/* 基础 */
background: rgba(0, 0, 0, 0.6);
border-radius: 4px;
padding: 24px 32px;
color: #E9E1D1;
font-family: 'Roboto', sans-serif;
font-weight: 500;
font-style: italic;
transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

/* 内层边框 ::after */
inset: 3px;
border: 1px solid rgba(226, 222, 211, 0.2);
border-radius: 2px;

/* 标题 */
font-family: 'Hylia Serif', 'Cinzel', serif;
font-size: 18px;
font-weight: 400;
font-style: normal;
color: #E2DED3;
letter-spacing: 0.04em;
margin-bottom: 12px;

/* 正文 */
font-size: 14px;
line-height: 1.6;
color: rgba(233, 225, 209, 0.8);
```

sheikah 变体额外样式：

```css
background: rgba(10, 20, 40, 0.85);
/* ::after */ border-color: rgba(60, 211, 252, 0.3);
/* 顶部蓝色光线 ::before */
position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
background: linear-gradient(90deg, transparent, #3CD3FC, transparent);
opacity: 0.6;
/* hover */ box-shadow: 0 0 8px #4FC0FF;
```

golden 变体额外样式：

```css
background: rgba(30, 25, 15, 0.85);
/* ::after */ border-color: rgba(252, 196, 19, 0.3);
/* 顶部金色光线 ::before */
background: linear-gradient(90deg, transparent, #FCC413, transparent);
opacity: 0.5;
/* hover */ box-shadow: 0 0 12px rgba(252, 196, 19, 0.2);
```

### Dialog（对话框）

精确还原 Figma node 13:1561。胶囊形 SVG 背景。

```css
/* 容器 */
position: relative;
width: 100%;
max-width: 910px;
min-height: 185px;
padding: 40px 80px;
display: flex;
flex-direction: column;
justify-content: center;
```

背景 SVG path（精确值，viewBox="0 0 910 185"）：

```
M0 90C0 40.2944 40.2944 0 90 0H820C869.706 0 910 40.2944 910 90V95C910 144.706 869.706 185 820 185H90C40.2944 185 0 144.706 0 95V90Z
[含左右两侧菱形装饰的完整 clip-rule path — 见源码]
fill: black; fill-opacity: 0.5;
```

文字样式：

```css
/* 说话者名字 */
font-size: 28px; font-weight: 500; font-style: italic;
color: #E9E1D1;
text-shadow: 0 0 14px rgba(0, 0, 0, 0.8);
margin-top: -20px;

/* 对话正文 */
font-size: 36px; font-weight: 700; font-style: italic;
color: #E9E1D1; line-height: 1.2;

/* 关键词高亮 */
物品名 → color: #6BDECC (青绿)
地点名 → color: #F15050 (红色)
```

继续箭头：底部居中，三角形，animation: hyrule-blink 1.2s step-end infinite。

### HealthBar（心心容器）

精确还原 Figma node 191:19861。

```css
/* 容器 */
display: flex; flex-wrap: wrap; gap: 0;
/* 每行最多 15 个心 */

/* 每个心 */
width: 30px; height: 24px;
```

心形 SVG path（精确值，viewBox="0 0 24.18 21.75"）：

```
M21.7675 12.7969L12.1037 21.7487L2.05872 11.598C-0.686241 8.82416 -0.686239 4.35741 2.05872 1.58356C4.14815 -0.527857 7.55918 -0.527854 9.64861 1.58357L12.1037 4.06447L14.0676 2.0798C16.3794 -0.256337 20.1909 -0.129535 22.3423 2.35509C24.9973 5.42139 24.7431 10.0406 21.7675 12.7969Z
```

颜色值：

| 状态 | fill 色 | filter |
|------|---------|--------|
| 填充（红心） | #F1362F | drop-shadow(0 1px 3px rgba(180,30,30,0.4)) |
| 空心 | #363930 | 无 |
| 奖励心（黄心） | #FFE465 | drop-shadow(0 1px 3px rgba(200,180,50,0.4)) |

### StaminaWheel（精力轮）

精确还原 Figma node 3:353。90×90px 容器，内部 inset 16.25%。

环形 SVG path（viewBox="0 0 60.75 60.75"）：

```
M60.75 30.375C60.75 47.1506 47.1506 60.75 30.375 60.75C13.5994 60.75 0 47.1506 0 30.375C0 13.5994 13.5994 0 30.375 0C47.1506 0 60.75 13.5994 60.75 30.375ZM19.7438 30.375C19.7438 36.2465 24.5035 41.0062 30.375 41.0062C36.2465 41.0062 41.0062 36.2465 41.0062 30.375C41.0062 24.5035 36.2465 19.7438 30.375 19.7438C24.5035 19.7438 19.7438 24.5035 19.7438 30.375Z
```

| 层 | fill | 用途 |
|----|------|------|
| 轨道 | black, fill-opacity: 0.6 | 背景环 |
| 填充 | #13FF59 | 当前精力值 |
| 奖励 | #FFE465 | 奖励精力 |
| 低精力 | #F15050 | value ≤ 0.2 时 |

填充比例控制：使用 `conic-gradient` mask：
```css
mask-image: conic-gradient(from -90deg, black ${angle}deg, transparent ${angle}deg);
```

辉光效果：`filter: drop-shadow(0 0 4px rgba(19, 255, 89, 0.6));`

### Modal

双层边框 + 遮罩 + 缩放入场动画。

```css
/* 遮罩 */
background: rgba(0, 0, 0, 0.7);
backdrop-filter: blur(2px);
animation: hyrule-fade-in 0.2s ease;
z-index: 900;

/* 弹窗容器 */
background: rgba(20, 20, 18, 0.95);
border-radius: 12px;
max-width: calc(100vw - 32px);
max-height: calc(100vh - 64px);
animation: hyrule-scale-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
box-shadow: 0 0 11px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5);

/* 顶部光线 ::before */
height: 1px;
background: linear-gradient(90deg, transparent, #E2DED3, transparent);
opacity: 0.4;

/* 标题 */
font-family: 'Hylia Serif', serif;
font-size: 22px; color: #E2DED3; letter-spacing: 0.03em;

/* 确认按钮 */
border: 1px solid #FCC413;
background: rgba(252, 196, 19, 0.12);
color: #FCC413;
/* hover */ background: rgba(252, 196, 19, 0.2); box-shadow: 0 0 8px rgba(252, 196, 19, 0.3);

/* 取消按钮 */
border: 1px solid rgba(226, 222, 211, 0.3);
background: transparent;
color: #E9E1D1;
```

### Divider

4 种变体，纯装饰。

```css
/* subtle */
height: 1px;
background: linear-gradient(90deg, transparent, rgba(226,222,211,0.2), transparent);

/* sheikah */
height: 2px;
background: linear-gradient(90deg, transparent, #3CD3FC, transparent);
box-shadow: 0 0 6px rgba(60, 211, 252, 0.3);

/* golden */
height: 2px;
background: linear-gradient(90deg, transparent, #FCC413, transparent);
box-shadow: 0 0 6px rgba(252, 196, 19, 0.3);

/* ornament — 使用 Figma 导出的标题装饰 SVG */
display: flex; align-items: center; gap: 12px;
/* 左右各一个 50×25px 的装饰 SVG（viewBox 0 0 49.95 25.01，fill #E2DED3）*/
/* 中间线 */
flex: 1; height: 1px;
background: linear-gradient(90deg, rgba(226,222,211,0.5), rgba(226,222,211,0.15), rgba(226,222,211,0.5));
```

标题装饰 SVG path（精确值）：

```
M31.451 9.13059C30.8963 7.24598 29.2323 5.86136 27.2117 5.63059...
[完整 path 见 src/components/Divider/Divider.tsx]
fill: #E2DED3
```

### Loading

希卡之眼旋转 + 脉冲动画。

```css
/* 旋转环 */
border-radius: 50%;
border: 3px solid rgba(60, 211, 252, 0.2);
border-top-color: #3CD3FC;
animation: sheikah-spin 1s linear infinite;
filter: drop-shadow(0 0 4px rgba(60, 211, 252, 0.4));

/* 中心眼 */
width: 30%; height: 30%;
border-radius: 50%;
background: #3CD3FC;
box-shadow: 0 0 6px #3CD3FC, 0 0 12px rgba(60, 211, 252, 0.4);
animation: sheikah-pulse 1.5s ease-in-out infinite;

/* 尺寸 */
small: ring 24×24px
middle: ring 40×40px
large: ring 60×60px

@keyframes sheikah-spin { to { transform: rotate(360deg); } }
@keyframes sheikah-pulse {
  0%, 100% { opacity: 0.6; transform: scale(0.8); }
  50%      { opacity: 1; transform: scale(1); }
}
```

---

## 4. CSS 变量完整模板

不依赖组件库时，在 `:root` 中声明以下变量：

```css
:root {
  /* 字体 */
  --zelda-font-title: 'Hylia Serif', 'Cinzel', Georgia, serif;
  --zelda-font-body: 'Roboto', -apple-system, sans-serif;

  /* 核心色 */
  --zelda-tan: #E2DED3;
  --zelda-dark-bg: #66645D;
  --zelda-text-main: #E9E1D1;
  --zelda-text-yellow: #E2D146;
  --zelda-text-red: #F15050;
  --zelda-text-green: #6FD49C;
  --zelda-sheikah-blue: #3CD3FC;
  --zelda-sheikah-yellow: #FFE460;
  --zelda-effect-orange: #FCC413;

  /* 背景 */
  --zelda-bg-page: #66645D;
  --zelda-bg-card: rgba(0, 0, 0, 0.6);
  --zelda-bg-sheikah: rgba(10, 20, 40, 0.8);

  /* 边框 */
  --zelda-border: rgba(226, 222, 211, 0.3);
  --zelda-border-active: #E2DED3;
  --zelda-border-sheikah: rgba(60, 211, 252, 0.4);

  /* 辉光 */
  --zelda-glow-blue: 0 0 8px #4FC0FF;
  --zelda-glow-sheikah: 0 0 10px #4FC0FF, 0 1px 11px #0A8DD7;
  --zelda-glow-golden: 0 0 6px #FFB800, 0 0 8px #FFDB7E, 0 0 10px #FFB904;
  --zelda-glow-hover: inset 0 0 7px 3px rgba(246,231,152,0.5), 0 0 12px 1px rgba(227,227,200,0.8);

  /* 阴影 */
  --zelda-shadow-dark: 0 0 11px rgba(0,0,0,0.8);
  --zelda-shadow-tan: 0 0 20px #000, 0 0 14px #E2DED3;

  /* 动效 */
  --zelda-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --zelda-duration: 0.25s;
  --zelda-duration-fast: 0.15s;
  --zelda-duration-slow: 0.4s;
}
```

---

## 5. 设计铁律（8 条）

1. **暗色为主** — 页面背景 `#66645D` 或更深，容器背景 `rgba(0,0,0,0.6)`。禁止亮色/白色背景。
2. **双层边框** — 所有容器/按钮使用外层半透明黑背景 + 内层 `::after` 细边框（inset 3px）。这是最核心的视觉特征。
3. **辉光系统** — 选中/激活态使用蓝色（`#4FC0FF`）或金色（`#FFB800`）辉光。禁止纯色高亮或蓝色 outline。
4. **Italic 正文** — 对话/按钮/正文使用 Roboto Medium Italic。标题用 Hylia Serif（normal）。
5. **禁止纯白** — 文字用暖白 `#E9E1D1`，边框用米色 `#E2DED3`。禁止 `#FFFFFF` 或 `#000000` 作为文字色。
6. **禁止冷色** — 不用冷蓝（`#0066ff`）、冷灰（`#666`）。所有灰色带暖色调。唯一的蓝色是希卡蓝 `#3CD3FC`。
7. **SVG 优先** — **小图标和装饰**（按钮里的图标、心心、箭头等）使用 inline SVG（`<svg><path>`），保证矢量清晰、可用 `currentColor` 着色。**大尺寸装饰图**（如 `Illustration` 组件里的剑、回忆花，~30-160KB）可用 `<img src>` 引入 SVG URL，避免拖慢首屏。判断标准：可着色 / 需动画 → inline；纯展示大图 → `<img>`。
8. **焦点色** — focus-visible 用希卡蓝 `#3CD3FC`（outline: 2px solid）。禁止浏览器默认蓝色焦点环。

---

## 6. 新组件文件结构模板

```
src/components/[category]/[MyComponent]/
├── MyComponent.tsx          # 组件逻辑（必须设置 displayName）
├── myComponent.module.less  # CSS Modules 样式
└── index.ts                 # 统一导出
```

`src/index.ts` 追加：

```ts
export { default as MyComponent } from './components/[category]/MyComponent'
export type { MyComponentProps } from './components/[category]/MyComponent/MyComponent'
```

Less 模板：

```less
@import '../../../styles/variables.less';

.container {
  position: relative;
  background: @bg-card;
  border: none;
  border-radius: @radius-sm;
  color: @text-color-main;
  font-family: @font-body;
  font-weight: @font-weight-medium;
  font-style: italic;
  transition: all @motion-duration-base @motion-ease;

  // 内层边框
  &::after {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px solid @border-color;
    border-radius: 2px;
    pointer-events: none;
    transition: border-color @motion-duration-base @motion-ease;
  }

  &:hover:not(.disabled)::after {
    border-color: rgba(226, 222, 211, 0.6);
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}
```

TSX 模板：

```tsx
import React from 'react'
import classNames from 'classnames'
import styles from './myComponent.module.less'

export interface MyComponentProps {
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
  children?: React.ReactNode
}

const MyComponent: React.FC<MyComponentProps> = ({
  className,
  style,
  children,
}) => {
  return (
    <div className={classNames(styles.container, className)} style={style}>
      {children}
    </div>
  )
}

MyComponent.displayName = 'MyComponent'
export default MyComponent
```

---

## 7. 新组件 Checklist

> 项目级前置（一次性，不在每个组件 checklist 里重复）：字体加载、`variables.less` 引入、Vite 配置。详见 §1 字体小节。

每个新组件必须确保：

- [ ] Props interface 从组件文件导出，所有 props 有 JSDoc 注释
- [ ] 使用双层边框结构（外层 bg + 内层 ::after border）
- [ ] 颜色引用 `variables.less` token，不硬编码 hex（除非 token 中没有）
- [ ] 辉光使用暖色调（希卡蓝 `#4FC0FF` 或金色 `#FFB800`），非冷色
- [ ] hover 态：内层边框变亮 + 可选辉光
- [ ] disabled 态：opacity 0.4 + cursor: not-allowed
- [ ] 焦点：outline 2px solid #3CD3FC, outline-offset 2px
- [ ] 动画使用 `@motion-duration-*` 和 `@motion-ease` token
- [ ] 小图标 inline SVG（可 `currentColor` 着色），大尺寸装饰图可 `<img>`
- [ ] 组件设置 `displayName`
- [ ] 组件从 `src/index.ts` 导出，类型也从源文件 re-export
- [ ] Demo 页创建于 `demo/` 对应分类
- [ ] SKILL.md §10 补充该组件的精确样式值
- [ ] AI_USAGE.md 补充该组件的 API 文档

---

## 8. 禁止模式与正确示例

下面每条都是 ✗ 错误 + ✓ 正确的对照，AI 生成代码时按 ✓ 来。

### 配色

```
✗ background: #fff;
✓ background: #66645D;  // 页面用 dark-bg
✓ background: rgba(0, 0, 0, 0.6);  // 容器用半透明黑

✗ color: #000;
✓ color: #E9E1D1;  // 暖白主文字

✗ color: #fff;
✓ color: #E9E1D1;  // 不要纯白

✗ color: #666;  // 冷灰
✓ color: rgba(233, 225, 209, 0.6);  // 米色 + 透明度 = 暖灰
```

### 焦点态

```
✗ outline: 2px solid #0066ff;  // 浏览器默认冷蓝
✓ outline: 2px solid #3CD3FC;  // 希卡蓝
✓ outline-offset: 2px;
```

### 圆角

```
✗ border-radius: 24px;  // 太圆，像 pill
✓ border-radius: 4px;   // 塞尔达 UI 偏方正
✓ border-radius: 8px;   // 卡片最大也就这个值
```

### 容器边框

```
✗ <div style={{ background: '#000', border: '1px solid #fff' }}>
   // 单层边框 = 不是塞尔达风

✓ <div className={styles.container}>
.container {
  background: rgba(0, 0, 0, 0.6);
  position: relative;
}
.container::after {
  content: '';
  position: absolute;
  inset: 3px;
  border: 1px solid rgba(226, 222, 211, 0.3);
  pointer-events: none;
}
   // 双层边框是核心视觉特征
```

### 字体

```
✗ font-family: 'Helvetica';
✗ font-weight: 300;
✗ <button>Click me</button>  // 默认非 italic

✓ font-family: 'Roboto', sans-serif;
✓ font-weight: 500;
✓ font-style: italic;  // 按钮/对话/正文都要 italic
```

### SVG 加载

```
✗ <img src="/icon.svg" />          // 小图标用 img 时模糊、无法着色
✗ background-image: url(icon.svg)  // 同样问题

✓ <svg viewBox="0 0 24 24"><path d="..." fill="currentColor" /></svg>
   // 小图标用 inline SVG：用 currentColor 跟随 CSS color，矢量清晰

✓ <img src={largeDecorationSvg} alt="" />
   // 大尺寸装饰图（Illustration 组件那种 30-160KB 的）用 img 即可
   // 例外场景：纯展示、不需要着色、不需要动画
```

### 用 Tailwind？

```
✗ <button className="bg-black text-white p-4 rounded-lg">
✓ // 本项目用 Less Modules，不是 Tailwind
✓ <Button variant="sheikah">Click</Button>  // 直接用现成组件
```

### 自创 props

```
✗ <Button color="purple" size="huge">  // color/huge 不存在
✓ <Button variant="sheikah" size="large">  // 查 AI_USAGE.md 确认
```

### 3D 按键效果

```
✗ box-shadow: 0 4px 0 #333, 0 6px 8px rgba(0,0,0,0.3);
   // 这是 animal-island-ui 的"凸起按键"风格，不是塞尔达的

✓ background: rgba(0, 0, 0, 0.6);
   border: none;  // 塞尔达按钮是扁平的，靠 ::after 双层边框 + hover 辉光
```

---

## 9. 完整界面案例

5 个真实场景的完整组合代码。AI 接到"做一个 X 页"的需求，先看这里有没有现成模板。

### 9.1 标题屏（启动页）

```tsx
import { SheikahBackground, SheikahScanlines, SheikahSymbol, Button, Logo } from 'zelda-hyrule-ui'

export function TitleScreen({ onStart }: { onStart: () => void }) {
  return (
    <SheikahBackground color="darkBlue">
      <SheikahScanlines animated opacity={0.12} />
      <div style={{
        position: 'relative', zIndex: 1, minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 32,
      }}>
        <SheikahSymbol size={140} />
        <Logo variant="full" width={400} />
        <p style={{
          fontFamily: "'Hylia Serif', serif", fontSize: 18,
          color: 'rgba(233,225,209,0.6)', fontStyle: 'italic',
        }}>
          The Legend of Zelda: Breath of the Wild
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
          <Button variant="sheikah" size="large" onClick={onStart}>Start Game</Button>
          <Button variant="primary" size="large">Continue</Button>
        </div>
      </div>
    </SheikahBackground>
  )
}
```

### 9.2 暂停菜单（HUD overlay）

```tsx
import {
  HealthBar, StaminaWheel, RupeeCounter, WeatherIcon, Temperature,
  DivineBeast, SheikahAbility, MenuSections, Modal, Button,
} from 'zelda-hyrule-ui'

export function PauseMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} title="Paused" width={720}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* 顶部状态栏 */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <HealthBar current={10} max={13} bonus={3} />
          <StaminaWheel value={0.75} size={60} />
          <RupeeCounter amount={13878} />
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <WeatherIcon weather="rain" />
            <Temperature value="cold" />
          </div>
        </div>

        {/* 神兽 + 能力 */}
        <div>
          <p style={{ color: 'rgba(233,225,209,0.5)', fontSize: 11, letterSpacing: '0.1em', marginBottom: 8 }}>
            DIVINE BEASTS &amp; ABILITIES
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <DivineBeast beast="ruta" charges={1} />
            <DivineBeast beast="medoh" charges={3} />
            <DivineBeast beast="naboris" charges={2} />
            <DivineBeast beast="rudania" charges={1} />
            <div style={{ width: 1, height: 50, background: 'rgba(226,222,211,0.1)', margin: '0 8px' }} />
            <SheikahAbility ability="roundBomb" plus />
            <SheikahAbility ability="magnesis" />
            <SheikahAbility ability="stasis" plus />
            <SheikahAbility ability="cryonis" />
          </div>
        </div>

        {/* 菜单分类 */}
        <MenuSections activeSection="weapons" />

        {/* 操作按钮 */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          <Button variant="ghost" onClick={onClose}>Resume</Button>
          <Button variant="sheikah">Save</Button>
          <Button variant="danger">Quit</Button>
        </div>
      </div>
    </Modal>
  )
}
```

### 9.3 库存/物品页

```tsx
import { Card, MenuSections, ItemBG, Pagination, ItemEnchantment, Scrollbar, StatsStack } from 'zelda-hyrule-ui'

export function InventoryPage() {
  return (
    <Card variant="sheikah" title="Weapons">
      <MenuSections activeSection="weapons" />

      {/* 8x4 物品网格 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 60px)', gap: 6, marginTop: 16 }}>
        <ItemBG state="filled" size={60} />
        <ItemBG state="selected" size={60} />
        <ItemBG state="equipped" size={60} />
        <ItemBG state="filled" size={60} />
        <ItemBG state="filled" size={60} />
        <ItemBG state="filled" size={60} />
        <ItemBG state="empty" size={60} />
        <ItemBG state="empty" size={60} />
        {/* ... 重复 */}
      </div>

      {/* 选中物品的属性 */}
      <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
        <StatsStack type="weapon" value={32} />
        <StatsStack type="armor" value={24} comparison={28} />
        <ItemEnchantment quality={3} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
        <Pagination totalPages={4} currentPage={1} />
        <Scrollbar location={1} maxSections={5} width={200} />
      </div>
    </Card>
  )
}
```

### 9.4 NPC 对话场景

```tsx
import { Dialog, DialogChoice, ControllerButton, ActionSet, TitleLocation } from 'zelda-hyrule-ui'
import { useState } from 'react'

export function DialogScene() {
  const [step, setStep] = useState(0)

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* 顶部地点提示 */}
      <div style={{ position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)' }}>
        <TitleLocation name="Hateno Village" />
      </div>

      {/* 底部对话区 */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 80px 40px' }}>
        {step === 0 && (
          <Dialog type="speech" speaker="Old Man">
            It is dangerous to go alone. Take this.
          </Dialog>
        )}
        {step === 1 && (
          <>
            <Dialog type="speech" speaker="Old Man">
              Will you accept this gift?
            </Dialog>
            <DialogChoice
              options={[
                { label: 'Yes, thank you', value: 'yes' },
                { label: 'No, I cannot', value: 'no' },
              ]}
              selectedIndex={0}
            />
          </>
        )}

        {/* 底部操作提示 */}
        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end' }}>
          <ActionSet actions={[
            { button: 'A', label: 'Continue' },
            { button: 'B', label: 'Skip' },
          ]} />
        </div>
      </div>
    </div>
  )
}
```

### 9.5 设置页

```tsx
import { Card, SettingsToggle, Divider, Button } from 'zelda-hyrule-ui'

export function SettingsPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: 40 }}>
      <Card variant="sheikah" title="System Settings">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <SettingsToggle label="HUD Display" options={['ON', 'OFF']} value="ON" selected />
          <SettingsToggle label="Mini-map" options={['ON', 'OFF']} value="ON" />
          <SettingsToggle label="Camera Sensitivity" options={['Low', 'Normal', 'High']} value="Normal" />
        </div>

        <Divider variant="sheikah" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <SettingsToggle label="Motion Controls" options={['ON', 'OFF']} value="OFF" />
          <SettingsToggle label="Vibration" options={['ON', 'OFF']} value="ON" />
          <SettingsToggle label="Subtitles" options={['ON', 'OFF']} value="ON" />
        </div>

        <Divider variant="golden" />

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
          <Button variant="ghost">Reset</Button>
          <Button variant="sheikah">Save</Button>
        </div>
      </Card>
    </div>
  )
}
```

---

## 10. 全量组件精确样式规范（84 个组件）

> 以下为 Phase 2 完成后所有组件的精确样式值。AI 生成代码时按此规范实现。

### HUD 组件（16 个）

#### WeatherIcon
```css
/* 容器 */ size: 29px; display: inline-flex; align-items: center; justify-content: center;
/* 图标 */ width: 70%; height: 80%;
/* glowing 态 */ filter: drop-shadow(0 0 4px #4FC0FF);
/* SVG fill */ #C9FAFF, fill-opacity: 0.8
/* 4 种天气 path 见源码 */
```

#### RupeeCounter
```css
/* 容器 */ display: inline-flex; align-items: center; gap: 13px; filter: drop-shadow(-2px 2px 5px rgba(0,0,0,0.15));
/* 卢比图标 */ 25×46px SVG 渐变菱形
/* 数字 */ font: Roboto 32px/500 italic; color: #E9E1D1; letter-spacing: 0.96px;
```

#### DivineBeast
```css
/* 容器 */ size: 75px; filter: blur(0.5px);
/* 辉光 */ box-shadow: 0 0 4px var(--beast-color), 0 0 5px var(--beast-color), 0 0 15px var(--beast-color);
/* 颜色 */ ruta: #27CBFF, medoh: #7CFF4E, naboris: #FCC63D, rudania: #EB4713, recharging: #FF0000
/* 次数文字 */ font: Roboto 20px/500 italic white (×) + 24px (数字)
```

#### SheikahAbility
```css
/* 容器 */ size: 70px;
/* Plus 标记 */ position: absolute; top: 2px; right: 2px; font: Roboto 14px/700; color: #FFE460;
/* 充能覆盖 */ border: 2px solid #FF0000; border-right-color: transparent; animation: spin 1.5s linear infinite;
```

#### Temperature
```css
/* 容器 */ size: 50px; overflow: hidden; border-radius: 50%;
/* 背景 */ circle r=25, fill: black, fill-opacity: 0.8
/* 颜色 */ regular: #8FEFFF, cold: #4FC0FF, hot: #FF6B4A
```

#### SoundMeter
```css
/* 容器 */ size: 50px; overflow: hidden; border-radius: 50%;
/* 背景 */ 同 Temperature
/* 颜色 */ low: #8FEFFF, high: #FFE460
/* 声波条 */ 4 个 rect, width: 3px, rx: 1, 高度递增
```

#### Sensor
```css
/* 容器 */ size: 50px; overflow: hidden; border-radius: 50%;
/* 背景 */ 同上
/* 图标 */ width: 68%; height: 74%; fill: active ? #9DECFD : #658D95
/* active 态 */ box-shadow: 0 0 6px rgba(60, 211, 252, 0.3);
/* Plus 标记 */ font: Roboto 12px/700; color: #FFE460;
```

#### EffectDuration
```css
/* 容器 */ display: flex; align-items: center; gap: 10px; filter: drop-shadow(-2px 2px 10px rgba(0,0,0,0.15));
/* 图标 */ 40×40px
/* 名称 */ font: Roboto 26px/500 italic; color: #E2DED3; letter-spacing: 0.52px; text-shadow: -2px 2px 10px rgba(0,0,0,0.15);
/* 时间 */ font: Roboto 26px/500 italic; color: #E2DED3; letter-spacing: 1.3px;
```

#### BonusEffectIcon
```css
/* 容器 */ size: 50px; display: inline-flex; align-items: center; justify-content: center;
/* 符号 */ font-size: 24px;
/* 箭头 */ position: absolute; top: 2px; right: 2px; font-size: 10px;
/* 15 种效果颜色见源码 */
```

#### RupeeType
```css
/* 容器 */ 25×46px 比例; filter: drop-shadow(0 1px 3px rgba(0,0,0,0.3));
/* SVG 菱形 */ 4 面渐变 + 中间高光
/* 6 色 */ green: #4CAF50/#173515, blue: #42A5F5/#0D2B5C, red: #EF5350/#5C1414, purple: #AB47BC/#3A0C5C, silver: #BDBDBD/#424242, gold: #FFD54F/#5C4A14
```

#### LoadingIcon
```css
/* 容器 */ size: 40px; display: inline-flex; align-items: center; justify-content: center;
/* 图标 */ font-size: 24px;
/* 数量 */ position: absolute; bottom: -2px; right: -4px; font: Roboto 12px/700; color: #E9E1D1;
/* 5 种图标颜色 */ shrine: #3CD3FC, orb: #FCC413, rupee: #4CAF50, korok: #7CFF4E, stamina: #13FF59
```

#### LoadingHeart
```css
/* 容器 */ display: inline-flex; transition: opacity 0.3s;
/* SVG */ 24×20px, viewBox: 0 0 24.18 21.75
/* shown */ fill: #F1362F
/* hidden */ fill: #363930; opacity: 0.3;
```

#### HorseSpur
```css
/* 容器 */ size: 84px; border-radius: 50%;
/* 颜色 */ normal: #3CD3FC, ancient: #FCC413, endura: #7CFF4E
/* used 态 */ opacity: 0.3;
```

#### QuickSelector
```css
/* 容器 */ size: 200px; position: relative;
/* 环 */ stroke: rgba(226,222,211,0.3); stroke-width: 3; fill: none;
/* 槽位 */ 4 个 60×60px 按钮, 上下左右分布
/* 选中槽 */ border-color: #E2DED3; box-shadow: glow-hover;
```

### 菜单组件（8 个）

#### MenuSections
```css
/* 容器 */ display: flex; align-items: center; gap: 0;
/* 每项 */ 50×50px; padding: 8px; background: transparent; border: none; cursor: pointer;
/* active 态 */ ::after 底部 2px 线, background: #E2DED3;
/* 图标 fill */ active: #E2DED3, inactive: rgba(226,222,211,0.4)
/* 7 种图标 SVG path 见源码 */
```

#### ItemBG
```css
/* 容器 */ size: 130px; border-radius: 4px; cursor: pointer;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(255,255,255,0.2); border-radius: 2px;
/* 5 种状态 */
  empty: background rgba(255,255,255,0.1)
  filled: background rgba(0,0,0,0.6)
  selected: background rgba(0,0,0,0.9); box-shadow: 0 0 12px 1px rgba(227,227,200,0.8); 内层 border-color: #E2DED3; inset shadow
  equipped: background rgba(0,0,0,0.7); 右上角 8px 蓝色圆点
  sheikahSelect: background rgba(10,20,40,0.9); box-shadow: glow-blue; 内层 border-color: #3CD3FC
/* 角落装饰 */ 12×12px SVG 三角形, fill: #E2DED3, 4 个角旋转 0/90/180/270deg
```

#### Pagination
```css
/* 容器 */ display: flex; align-items: center; justify-content: center; gap: 4px;
/* 圆点 */ 5×5px; border-radius: 50%; background: #66645D;
/* active */ background: #E2DED3;
```

#### ModalButton
```css
/* 按钮 */ width: 100%; height: 75px; background: rgba(0,0,0,0.6); border-radius: 4px;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(226,222,211,0.3); border-radius: 2px;
/* 文字 */ font: Roboto 30px/500 italic; color: #E2DED3; text-align: center;
/* selected 态 */ background: rgba(226,222,211,0.12); box-shadow: glow-hover; 内层 border-color: #E2DED3;
```

#### Scrollbar
```css
/* 容器 */ height: 2px; position: relative;
/* 轨道 */ background: rgba(226,222,211,0.2); border-radius: 1px;
/* 滑块 */ background: #E2DED3; border-radius: 1px; transition: left 0.15s;
```

#### ModalTimer
```css
/* 容器 */ 300×60px; background: rgba(0,0,0,0.7); border-radius: 4px;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(226,222,211,0.3);
/* 时间 */ font: Roboto 32px/700; color: #E9E1D1; letter-spacing: 2px;
/* red 态 */ 内层 border-color: rgba(241,80,80,0.5); 时间 color: #F15050; animation: flash 0.8s infinite;
```

#### StatsStack
```css
/* 容器 */ display: inline-flex; align-items: center; gap: 8px;
/* 标签 */ font: Roboto 22px/500 italic; color: rgba(233,225,209,0.6);
/* 数值 */ font: Roboto 24px/700; color: #E9E1D1;
/* 差值 */ font: Roboto 20px/700 italic; positive: #6FD49C, negative: #F15050;
/* 特性 */ font: Roboto 18px/500 italic; color: #FFE460;
```

#### ModalTutorial
```css
/* 容器 */ background: rgba(0,0,0,0.8); border-radius: 8px; padding: 32px;
/* 内层边框 */ 双层边框结构
/* 标题 */ font: Hylia Serif 28px; color: #E2DED3;
/* 正文 */ font: Roboto 22px/500 italic; color: #E9E1D1; line-height: 1.5;
/* 继续按钮 */ animation: blink 1.2s step-end infinite;
```


### 标题组件（5 个）

#### TitleLocation
```css
/* 容器 */ display: flex; align-items: center; justify-content: center; gap: 20px;
/* 装饰 */ Timer Ornament SVG 24×10px, fill: #E2DED3 (左右各一个，右侧 scaleX(-1))
/* 文字 */ font: Roboto 30px/500; color: #E9E1D1; text-align: center; line-height: 1.12;
```

#### TitleQuest
```css
/* 容器 */ display: flex; flex-direction: column; align-items: center; gap: 5px;
/* 副标题 */ display: flex; gap: 12px; 图标 45px 圆形 + 文字 Roboto 27px/500 italic #E9E1D1
/* 任务名 */ font: Hylia Serif 80px/400; color: rgba(0,0,0,0.8); filter: drop-shadow(0 0 15px rgba(255,255,126,0.3));
/* 名称背景 */ ::before background: rgba(255,246,196,0.2); mix-blend-mode: screen;
/* 图标辉光 */ main: #FFEA2E, side/shrine: #54C0FD, memory: #FCC413
```

#### TitleShrine
```css
/* 容器 */ display: flex; flex-direction: column; align-items: center; gap: 4px;
/* 名称 */ font: Hylia Serif 45px/400; color: #E9E1D1; text-shadow: 0 0 20px rgba(0,0,0,0.5);
/* 副标题 */ font: Roboto 30px/500; color: #E9E1D1;
```

#### TitleLocationLarge
```css
/* 名称 */ font: Hylia Serif 72px/400; color: #E9E1D1; text-shadow: 0 0 30px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4); letter-spacing: 0.04em;
```

#### TitlePointOfInterest
```css
/* 容器 */ display: flex; flex-direction: column; align-items: center; gap: 8px;
/* 名称 */ font: Hylia Serif 48px/400; color: #E9E1D1; text-shadow: 0 0 20px rgba(0,0,0,0.5);
/* 血条（poiWithHealth）*/ width: 200px; height: 6px; background: rgba(226,222,211,0.2); border-radius: 3px; 填充 #F15050;
```

### 对话组件（3 个）

#### Dialog
```css
/* 容器 */ max-width: 910px; min-height: 185px; padding: 40px 80px;
/* 背景 SVG */ viewBox: 0 0 910 185; fill: black; fill-opacity: 0.5; (胶囊形 + 菱形装饰)
/* 说话者 */ font: Roboto 28px/500 italic; color: #E9E1D1; text-shadow: 0 0 14px rgba(0,0,0,0.8); margin-top: -20px;
/* 正文 */ font: Roboto 36px/700 italic; color: #E9E1D1; line-height: 1.2;
/* 关键词 */ 物品: #6BDECC, 地点: #F15050, 强调: #E2D146
/* 继续箭头 */ bottom: 8px; left: 50%; animation: blink 1.2s step-end infinite;
/* sheikah 变体 */ bg fill: rgba(10,20,40,0.7); border: 1px solid rgba(60,211,252,0.3); box-shadow: glow-blue;
```

#### DialogChoice
```css
/* 容器 */ width: 360px; display: flex; flex-direction: column; gap: 10px;
/* 选项 */ height: 70px; background: rgba(0,0,0,0.7); border-radius: 35px; padding: 15px 25px;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(226,222,211,0.2); border-radius: 32px;
/* selected 态 */ border: 2px solid #E2DED3; box-shadow: 0 0 10px 1px rgba(255,249,193,0.6);
/* 箭头 */ position: absolute; left: -17px; color: #E2DED3; font-size: 14px;
/* 文字 */ font: Roboto 32px/500 italic; color: #E9E1D1;
```

#### DialogFloating
```css
/* 容器 */ 310×70px; overflow: hidden;
/* 背景 SVG */ viewBox: 0 0 310 70; 气泡形 path; fill: black; fill-opacity: 0.5;
/* 文字 */ padding: 17px 32px; font: Roboto 32px/500 italic; color: #E9E1D1;
```

### 任务组件（4 个）

#### QuestListItem
```css
/* 容器 */ max-width: 640px; height: 90px; background: rgba(0,0,0,0.8); border-radius: 4px; padding: 0 20px 0 100px;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(255,255,255,0.2); border-radius: 2px;
/* 图标 */ 77×77px; border-radius: 50%; left: 18px; top: 6px;
  main: box-shadow 0 0 23px rgba(255,234,46,0.5)
  side/shrine: box-shadow 0 0 23px rgba(84,192,253,0.5)
/* 标题 */ font: Roboto 38px/700 italic; color: #E2DED3;
/* 地点 */ font: Roboto 22px/700 italic; color: #E2D146;
/* completed 态 */ opacity: 0.6; title text-decoration: line-through;
```

#### QuestDescription
```css
/* 容器 */ max-width: 943px; min-height: 400px; background: rgba(0,0,0,0.3); border-radius: 3px 0 0 3px;
/* 内层边框 */ inset: 3px 0 3px 3px; border: 1px solid rgba(226,222,211,0.15);
/* 标题 */ font: Roboto 38px/700 italic; color: #E9E1D1;
/* 分割线 */ height: 1px; background: rgba(226,222,211,0.3);
/* NPC */ font: Roboto 26px/500 italic; color: #AAA79F;
/* 地点 */ font: Roboto 24px/700 italic; color: #E1C139;
/* 正文 */ font: Roboto 30px/500 italic; color: #E9E1D1; line-height: 1.2;
```

#### QuestTypeIcon
```css
/* 容器 */ size: 77px; border-radius: 50%;
/* 辉光 */ box-shadow: 0 0 23px [color], 0 0 18px black;
/* 颜色 */ main: #FFD700, side: #3CD3FC, shrine: #3CD3FC, memory: #FCC413
/* 图标 SVG */ width: 60%; height: 60%;
```

#### QuestNotification
```css
/* 容器 */ display: inline-flex; align-items: center; gap: 4px;
/* 图标 */ 26×26px; circle fill: #FCC413 opacity 0.8; 感叹号 fill: black;
/* 标签 */ font: Roboto 26px/500 italic; color: #AAA79F;
```

### 控制器组件（2 个）

#### ControllerButton
```css
/* 按钮 */ border-radius: 50%; background: #000; border: 2px solid #E2DED3;
/* 字母 */ font: Roboto 18px/700; color: #E2DED3;
/* 标签 */ font: Roboto 22px/500 italic; color: #E9E1D1; gap: 8px;
```

#### ActionSet
```css
/* 容器 */ display: flex; align-items: center; justify-content: flex-end; gap: 55px;
/* 每项 */ display: flex; gap: 5px; align-items: center;
/* 标签 */ font: Roboto 26px/500 italic; color: #E9E1D1; text-align: right;
/* 按钮 */ 40×40px 圆形, 同 ControllerButton;
```

### 地图组件（7 个）

#### MapIcon
```css
/* 容器 */ size: 50px; filter: blur(0.25px); box-shadow: 0 1.25px 13.75px #0A8DD7, 0 0 12.5px #4FC0FF;
/* 图标 SVG */ width: 68%; height: 68%;
/* 颜色 */ shrine: #3CD3FC, resurrection: #ADEFFF, lab: #FCC413, tower: #FFE460
```

#### MapBeacon
```css
/* 容器 */ width: 30px; height: flare ? 90px : 30px;
/* 信标 SVG */ path 菱形, fill: [color]; circle cx=15 cy=12 r=4 fill white opacity 0.6;
/* 光柱 */ width: 4px; background: linear-gradient(to top, [color], transparent); opacity: 0.7;
/* 5 色 */ red: #FF4444, blue: #44AAFF, yellow: #FFDD44, green: #44DD88, pink: #FF88CC
```

#### MapQuestMarker
```css
/* 容器 */ size: 75px;
/* 图标 */ hexagon stroke: #FCC413 strokeWidth: 2.5; center circle r=5 fill: #FCC413;
/* pulse 态 */ animation: scale 1→1.15→1, opacity 1→0.7→1, 2s infinite;
```

#### MapLocationName
```css
/* 容器 */ padding: 4px 12px; background: rgba(0,0,0,0.5); border-radius: 2px;
/* 文字 */ font: Roboto 500; color: #E9E1D1; white-space: nowrap;
/* 尺寸 */ small: 18px, medium: 24px, large: 32px;
```

#### MapCursor
```css
/* 容器 */ display: inline-flex; align-items: center; gap: 12px;
/* 十字线 */ 40×40px SVG; circle r=8 stroke #E2DED3; 4 条线 stroke #E2DED3;
/* 信息面板 */ background: rgba(0,0,0,0.6); padding: 8px 12px; border-radius: 3px;
/* 地名 */ font: Roboto 20px/500 italic; color: #E9E1D1;
/* 操作 */ font: Roboto 16px/500 italic; color: rgba(233,225,209,0.6);
```

#### MapHeroLocation
```css
/* 容器 */ 18×25px;
/* 箭头 SVG */ path "M9 0L0 25L9 20L18 25L9 0Z" fill: #3CD3FC; filter: drop-shadow(0 0 4px rgba(60,211,252,0.6));
/* 视野锥 */ border-left/right: 20px solid transparent; border-bottom: 40px solid rgba(60,211,252,0.1);
```

#### MapGrid
```css
/* 容器 */ position: absolute; inset: 0;
/* 网格线 */ repeating-linear-gradient, stroke: rgba(226,222,211,0.1);
/* small */ gap: 20px; large: gap: 80px;
```


### 希卡之石组件（8 个）

#### SheikahSymbol
```css
/* 容器 */ size: 380px; display: inline-flex; align-items: center; justify-content: center;
/* SVG */ width: 100%; height: 92%; object-fit: contain; fill: white;
/* outline 态 */ opacity: 0.3;
```

#### SheikahBackground
```css
/* 容器 */ width: 100%; height: 100%; overflow: hidden; border-radius: 8px;
/* 纹理 */ background-size: cover; background-position: top left; opacity: 0.8;
/* darkBlue */ background-color: #0a1628;
/* blueGrey */ background-color: #1a2a3a; 纹理 opacity: 0.6;
```

#### SheikahScanlines
```css
/* 容器 */ position: absolute; inset: 0; pointer-events: none; mix-blend-mode: overlay;
/* 纹理 */ background: repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(60,211,252,0.03) 1px, rgba(60,211,252,0.03) 2px);
/* filter */ blur(0.5px);
/* animated 态 */ animation: scan-move 8s linear infinite; (background-position 0→200px)
```

#### SheikahRune
```css
/* 容器 */ display: flex; gap: 8px; align-items: center;
/* 每个符文 */ 70×70px; border-radius: 8px; border: 2px solid rgba(60,211,252,0.3); background: rgba(10,20,40,0.6);
/* hover */ border-color: rgba(60,211,252,0.6); box-shadow: 0 0 6px rgba(60,211,252,0.3);
/* active */ border-color: #3CD3FC; box-shadow: glow-sheikah; background: rgba(60,211,252,0.1);
/* 图标 */ font-size: 28px; color: #3CD3FC;
```

#### SheikahCompendiumEntry
```css
/* 容器 */ 178×178px; background: rgba(10,20,40,0.8); border-radius: 4px; cursor: pointer;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(60,211,252,0.2); border-radius: 2px;
/* hovered 态 */ 内层 border-color: #3CD3FC; box-shadow: 0 0 8px #4FC0FF;
/* 未发现 */ "?" font-size: 48px; color: rgba(60,211,252,0.3); font-weight: 700;
/* 编号 */ position: absolute; bottom: 6px; right: 8px; font: Roboto 12px/500; color: rgba(60,211,252,0.5);
```

#### SheikahTextTitle
```css
/* 容器 */ display: flex; flex-direction: column; align-items: center; gap: 8px;
/* 标题行 */ display: flex; gap: 12px; align-items: center;
/* 装饰 ◆ */ color: #3CD3FC; font-size: 8px; opacity: 0.6;
/* 标题 */ font: Roboto 22px/500 italic; color: #3CD3FC; letter-spacing: 0.05em;
/* 描述 */ font: Roboto 16px/500 italic; color: rgba(60,211,252,0.6); max-width: 584px; line-height: 1.4;
```

#### SheikahCompendiumFilters
```css
/* 容器 */ display: flex; gap: 16px; align-items: center; justify-content: center;
/* 每个过滤器 */ 50×50px; border-radius: 50%; border: 2px solid rgba(60,211,252,0.2); background: rgba(10,20,40,0.6);
/* active */ border-color: #3CD3FC; box-shadow: 0 0 8px rgba(60,211,252,0.4); background: rgba(60,211,252,0.1);
/* 图标 */ font-size: 22px;
```

#### SheikahAlbumButton
```css
/* 按钮 */ 420×60px; background: rgba(10,20,40,0.7); border-radius: 4px;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(60,211,252,0.2); border-radius: 2px;
/* selected 态 */ 内层 border-color: #3CD3FC; box-shadow: 0 0 8px rgba(60,211,252,0.3);
/* 文字 */ font: Roboto 24px/500 italic; color: #3CD3FC;
```

### 反馈组件（1 个）

#### Toast
```css
/* 容器 */ 610×115px; background: rgba(0,0,0,0.6); border-radius: 0 3px 3px 0;
/* 内层边框 */ inset: 3px 3px 3px 0; border: 1px solid rgba(226,222,211,0.2); border-radius: 0 2px 2px 0;
/* 文字 */ padding: 32px 31px 33px 120px; font: Roboto 29px/500 italic; color: #E9E1D1;
/* 动画 */ animation: slide-in 0.3s (translateX -100%→0, opacity 0→1);
```

### 装饰组件（5 个）

#### TitleOrnament
```css
/* SVG */ 50×25px; viewBox: 0 0 49.95 25.01; fill: #E2DED3; opacity: 0.7;
/* right 态 */ transform: scaleX(-1);
```

#### DirectionalArrow
```css
/* 容器 */ display: inline-flex; size: 18px;
/* 方向 */ transform: rotate(0/90/180/270deg) for up/right/down/left;
/* 4 种变体 */ outline: stroke #E2DED3; solid: fill #E2DED3; triangle: 全填充; large: 大三角;
```

#### Starburst
```css
/* 容器 */ size: 200px; animation: starburst-rotate 6s linear infinite;
/* SVG */ 12 条射线 stroke: #FCC413 strokeWidth: 2; 交替 opacity 0.4/0.7;
/* 中心 */ circle r=30 fill: #FCC413 opacity: 0.3; circle r=15 fill: #FCC413 opacity: 0.6;
```

#### TextOrnamentCorner
```css
/* SVG */ 12×12px; path "M12 0V12H0L12 0Z" fill: #E2DED3;
/* 4 个位置 */ rotation: 0(BR), 90(BL), 180(TL), -90(TR);
/* triforce 态 */ 额外三角力量装饰;
```

#### TimerOrnament
```css
/* SVG */ 24×10px; viewBox: 0 0 24 10; fill: #E2DED3;
/* left 态 */ transform: scaleX(-1);
```

#### Illustration
```css
/* 容器 */ position: relative; width: 100%; height: 100%; overflow: hidden;
/* 图片 */ position: absolute; inset: -10%; width: 120%; height: 120%; object-fit: contain;
         mix-blend-mode: screen; pointer-events: none; opacity: 0.6 (默认);
/* 4 种变体 */
  sword    — 大师之剑 + 海利亚鸟翼（166KB SVG）
  rupee    — 卢比宝石图案（31KB SVG）
  slate    — 希卡之石古代纹路（134KB SVG）
  memories — 回忆花/沉默公主（43KB SVG）
/* 用法：作为页面/区块背景装饰 */
  <div style={{ position: 'relative', height: '100vh', background: '#66645D' }}>
    <Illustration illustration="sword" opacity={0.4} />
    <div style={{ position: 'relative', zIndex: 1 }}>{内容}</div>
  </div>
```

### 设置组件（1 个）

#### SettingsToggle
```css
/* 容器 */ width: 100%; height: 54px; background: rgba(0,0,0,0.6); border-radius: 4px; padding: 0 20px;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(226,222,211,0.2); border-radius: 2px;
/* selected 态 */ 内层 border-color: #E2DED3; box-shadow: inset 0 0 7px 3px rgba(246,231,152,0.3);
/* 标签 */ font: Roboto 24px/500 italic; color: #E9E1D1; flex: 1;
/* 选项按钮 */ padding: 4px 16px; font: Roboto 20px/500 italic; color: rgba(233,225,209,0.5);
/* active 选项 */ color: #E9E1D1; background: rgba(226,222,211,0.15);
```

### 战斗组件（4 个）

#### ItemEnchantment
```css
/* 容器 */ display: inline-flex; gap: 4px;
/* 菱形 */ 10×10px; transform: rotate(45deg); border: 1.5px solid rgba(226,222,211,0.4);
/* filled */ background: #FCC413; border-color: #FCC413; box-shadow: 0 0 4px rgba(252,196,19,0.5);
```

#### StatusHealing
```css
/* 容器 */ display: inline-flex; align-items: center; gap: 2px;
/* 心 SVG */ 24×20px; fill: #F1362F (普通) / #FFE465 (奖励);
/* 精力 SVG */ 30×30px; fill: #13FF59;
/* fullRecovery */ 额外 "+" 符号 font-size: 20px; color: #F1362F;
```

#### AimingReticle
```css
/* 容器 */ size: 100px; position: relative;
/* bow */ 十字线 + 圆环; stroke: #E2DED3; strokeWidth: 1.5;
/* sheikahAbility */ 方形 + 对角线; stroke: #3CD3FC;
```

#### AttackDefenseValues
```css
/* 容器 */ display: inline-flex; align-items: center; gap: 8px;
/* 数值 */ font: Roboto 24px/700; color: #E9E1D1;
/* 对比箭头 */ positive: ▲ #6FD49C; negative: ▼ #F15050;
```

### 商店组件（3 个）

#### ShopListItem
```css
/* 容器 */ max-width: 660px; height: 80px; background: rgba(0,0,0,0.6); border-radius: 4px; padding: 0 24px;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(226,222,211,0.2); border-radius: 2px;
/* hovered 态 */ 内层 border-color: rgba(226,222,211,0.5); box-shadow: inset 0 0 7px 3px rgba(246,231,152,0.3);
/* 名称 */ font: Roboto 28px/500 italic; color: #E9E1D1; flex: 1;
/* 价格 */ font: Roboto 26px/700 italic; color: #E2D146;
```

#### ShopPriceQuantity
```css
/* 容器 */ display: flex; flex-direction: column; gap: 8px;
/* 标签 */ font: Roboto 22px/500 italic; color: rgba(233,225,209,0.6);
/* 数值 */ font: Roboto 26px/700 italic; color: #E9E1D1;
```

#### NumberInput
```css
/* 容器 */ display: inline-flex; align-items: center; gap: 8px;
/* 按钮 */ 24×24px; border-radius: 3px; background: rgba(226,222,211,0.15); color: #E2DED3; font-size: 12px;
/* hover */ background: rgba(226,222,211,0.3);
/* 数值 */ font: Roboto 28px/700; color: #E9E1D1; min-width: 40px; text-align: center;
```

### 品牌组件（1 个）

#### Logo
```css
/* full 变体 */ 三角力量 SVG + "ZELDA" 文字 font: Hylia Serif 48px; color: #E2DED3;
/* mark 变体 */ 仅三角力量 SVG; fill: #E2DED3;
/* 三角力量 path */ 三个三角形组合; filter: drop-shadow(0 0 8px rgba(226,222,211,0.3));
```

### 页面级组件（9 个）

#### MenuScreen
```css
/* 容器 */ width: 100%; aspect-ratio: 16/9; background: #1a1a18; overflow: hidden;
/* 布局 */ 顶部 MenuSections + 中间 ItemBG 网格 + 右侧 ItemDescription;
```

#### QuestScreen
```css
/* 容器 */ 同上;
/* 布局 */ 左侧 QuestListItem 列表 + 右侧 QuestDescription;
```

#### LoadingScreen
```css
/* 容器 */ 同上; background: #000;
/* 布局 */ 居中 tip 文字 + 底部 LoadingHeart 行 + 角落 DivineBeast 图标;
```

#### TitleScreen
```css
/* 容器 */ 同上;
/* 布局 */ 居中 Logo + 底部菜单选项列表;
```

#### GameOverScreen
```css
/* 容器 */ 同上; background: #0a0000;
/* 文字 */ "GAME OVER" font: Hylia Serif 80px; color: #F15050; text-shadow: 0 0 30px rgba(241,80,80,0.5);
/* 动画 */ fade-in 2s;
```

#### SystemScreen
```css
/* 容器 */ 同上;
/* 布局 */ 居中 SettingsToggle 列表 + 底部 ActionSet;
```

#### ShopScreen
```css
/* 容器 */ 同上;
/* 布局 */ 左侧 ShopListItem 列表 + 右侧物品详情 + 底部 ShopPriceQuantity;
```

#### SheikahMapScreen
```css
/* 容器 */ 同上; background: #0a1628;
/* 布局 */ 全屏 MapGrid + MapIcon 标记 + MapCursor + 边框 SheikahFrame;
/* 叠加 */ SheikahScanlines animated;
```

#### QuickSelectorScreen
```css
/* 容器 */ position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);
/* 布局 */ 居中 QuickSelector 轮盘;
```


---

## 11. 全量组件清单（84 个）

从 `src/index.ts` 导出：

```ts
// Common (6)
Button, Card, Dialog, Modal, Divider, Loading

// HUD (16)
HealthBar, StaminaWheel, WeatherIcon, RupeeCounter, DivineBeast, SheikahAbility,
RupeeType, Temperature, SoundMeter, Sensor, EffectDuration, BonusEffectIcon,
LoadingIcon, LoadingHeart, HorseSpur, QuickSelector

// Menu (8)
MenuSections, ItemBG, Pagination, ModalButton, Scrollbar, ModalTimer, StatsStack, ModalTutorial

// Titles (5)
TitleLocation, TitleQuest, TitleShrine, TitleLocationLarge, TitlePointOfInterest

// Dialog (3)
Dialog, DialogChoice, DialogFloating

// Quest (4)
QuestListItem, QuestDescription, QuestTypeIcon, QuestNotification

// Controls (2)
ControllerButton, ActionSet

// Map (7)
MapIcon, MapBeacon, MapQuestMarker, MapLocationName, MapCursor, MapHeroLocation, MapGrid

// Sheikah (8)
SheikahSymbol, SheikahBackground, SheikahScanlines, SheikahRune,
SheikahCompendiumEntry, SheikahTextTitle, SheikahCompendiumFilters, SheikahAlbumButton

// Feedback (1)
Toast

// Decorations (5)
TitleOrnament, DirectionalArrow, Starburst, TextOrnamentCorner, TimerOrnament

// Settings (1)
SettingsToggle

// Battle (4)
ItemEnchantment, StatusHealing, AimingReticle, AttackDefenseValues

// Shop (3)
ShopListItem, ShopPriceQuantity, NumberInput

// Brand (1)
Logo

// Screens (9)
MenuScreen, QuestScreen, LoadingScreen, TitleScreen, GameOverScreen,
SystemScreen, ShopScreen, SheikahMapScreen, QuickSelectorScreen
```

---

## 12. Demo 布局精确规范

```css
/* 页面背景 */
body { background: #66645D; color: #E9E1D1; font-family: 'Roboto', sans-serif; font-weight: 500; }

/* 主容器 */
padding: 48px 40px; max-width: 960px; margin: 0 auto;

/* 主标题 */
font-family: 'Hylia Serif', 'Cinzel', serif;
font-size: 48px; color: #E2DED3; letter-spacing: 0.04em;
text-shadow: 0 0 20px rgba(0,0,0,0.5), 0 0 14px rgba(226,222,211,0.3);

/* Section 标题 */
font-family: 'Hylia Serif', 'Cinzel', serif;
font-size: 24px; color: #E2DED3; letter-spacing: 0.05em; margin-bottom: 12px;

/* 小标签 */
font-size: 11px; font-weight: 500; color: rgba(233,225,209,0.4);
letter-spacing: 0.1em; margin-bottom: 8px;

/* Section 间距 */
margin-bottom: 48px;
```

---

## 13. 主题定制

⚠️ **重要前提**：本组件库已编译成 CSS，运行时不能改 Less 变量。要换主题色，必须 fork 源码后修改 `src/styles/variables.less` 重新编译。

### 方式 A — Fork 后改 Less 变量（最干净）

```bash
git clone https://github.com/chaos-xxl/zelda-hyrule-ui.git my-zelda-theme
cd my-zelda-theme
# 编辑 src/styles/variables.less
npm run build
# 用本地包链接到你的项目
npm link
cd /path/to/your/project && npm link my-zelda-theme
```

### 方式 B — 用 CSS 变量覆盖（运行时，部分组件支持）

由于库内只有部分关键色用了 CSS 变量回退，你可以在外层覆盖一些颜色：

```css
/* 在你的应用 entry 里 import 之后 */
:root {
  --zelda-sheikah-blue: #FF5577;       /* 改希卡蓝为粉红 */
  --zelda-text-yellow: #FFA500;        /* 改黄色强调为橙色 */
  --zelda-bg-page: #2A2A3A;            /* 改页面背景 */
}
```

注意：这种方式只对 §4 列出的 CSS 变量生效。Less 编译时已固化的色值（大多数组件内部）改不了。

### 方式 C — 用 className/style 局部覆盖

最简单的局部主题定制——直接给单个组件传 `style` 或 `className`：

```tsx
<Button style={{ borderColor: '#FF5577' }}>Custom</Button>

<div className="my-custom-theme">
  <Card>...</Card>
</div>

// my-custom-theme.css
.my-custom-theme [class*='zelda-card'] { background: rgba(40, 0, 30, 0.6); }
```

### 三种常见定制方向

| 方向 | 改哪些 token | 视觉效果 |
|------|------------|---------|
| 暖色调（火焰王国风） | `@sheikah-blue` → 橙红 | 红橙黄主导 |
| 暗紫主题 | `@sheikah-blue` → `#A855F7` | 神秘紫 |
| 高对比（无障碍） | `@text-color-main` → `#FFFFFF`，提升所有 `rgba` 透明度 | WCAG AAA |

### 注意事项

- ✗ 不要直接改组件源码 — 升级时会被覆盖
- ✓ Fork 后改 Less，或用 CSS 变量/className 覆盖
- ✗ 不要把希卡蓝改成冷蓝（如 `#0066FF`）— 会破坏整体风格
- ✓ 改色时保持"暖色调"原则（饱和度足够、不死板）

---

## 14. 无障碍（A11y）

组件库已为以下组件添加 ARIA 属性，二次封装时保留即可：

| 组件 | ARIA 属性 |
|------|----------|
| Modal | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` |
| Toast | `role="alert"`, `aria-live="polite"` |
| Dialog | `role="region"`, `aria-label={speaker}` |
| SettingsToggle | `role="group"`, 箭头按钮 `aria-label` |
| Button | 继承 `React.ButtonHTMLAttributes`，可传任意 `aria-*` |

### AI 生成代码时的 a11y 检查

```tsx
// ✗ 没有 alt / aria-label
<button onClick={...}><Icon /></button>

// ✓ 给纯图标按钮加 aria-label
<button onClick={...} aria-label="Close menu">
  <Icon aria-hidden="true" />
</button>

// ✗ 装饰性 SVG 没有 aria-hidden
<svg><path d="..." /></svg>

// ✓ 装饰性 SVG 标记为隐藏
<svg aria-hidden="true"><path d="..." /></svg>

// ✗ 用 div 做点击
<div onClick={...}>Click</div>

// ✓ 用 button + 类名重置默认样式
<button className={styles.linkLike} onClick={...}>Click</button>
```

### 焦点环

```less
// 所有可交互元素必须有可见焦点态
.button:focus-visible {
  outline: 2px solid @sheikah-blue;
  outline-offset: 2px;
}

// 禁止移除焦点环（除非提供替代）
✗ outline: none;
✓ outline: 2px solid #3CD3FC; outline-offset: 2px;
```

### 颜色对比度

下表为根据 hex 值估算的对比度，**未经实际辅助技术工具验证**。生产环境请用 axe DevTools / Stark / WebAIM Contrast Checker 实测。

| 组合 | 估算对比度 | 估算等级 |
|------|--------|------|
| `#E9E1D1` on `#66645D` | ~4.5:1 | AA Pass |
| `#3CD3FC` on `rgba(0,0,0,0.6)` | ~7+:1 | AAA Pass |
| `#E2D146` on `rgba(0,0,0,0.6)` | ~6+:1 | AA Pass |

⚠️ 完整 WCAG 验证需要人工辅助技术测试（屏幕阅读器、键盘导航）和无障碍专家评审。本组件库目标是 WCAG AA 基础合规，不保证 AAA。

---

## 15. 完整 SVG Path 数据索引

以下 SVG path 数据从 Figma 精确导出，可直接在 JSX 中使用：

| 组件 | viewBox | 用途 |
|------|---------|------|
| Heart | 0 0 24.18 21.75 | 心形（红/空/黄） |
| Stamina Ring | 0 0 60.75 60.75 | 精力轮环形 |
| Dialog BG | 0 0 910 185 | 对话框胶囊背景 |
| Dialog Floating | 0 0 310 70 | 浮动气泡背景 |
| Title Ornament | 0 0 49.95 25.01 | 标题装饰 |
| Timer Ornament | 0 0 24 10 | 计时器装饰 |
| Item Corner | 0 0 12 12 | 物品格子角落 |
| Map Shrine | 0 0 34 34 | 地图神庙图标 |
| Map Resurrection | 0 0 35 33 | 地图复活点图标 |
| Weather Clear | 0 0 20.88 23.2 | 天气-晴 |
| Weather Storm | 0 0 19.71 23.22 | 天气-暴风 |
| Weather Rain | 0 0 19.2 20.85 | 天气-雨 |
| Weather Cloudy | 0 0 23.66 19.08 | 天气-阴 |
| Menu Weapons | 0 0 42.22 42.22 | 菜单-武器 |
| Menu Bows | 0 0 46.67 46.67 | 菜单-弓 |
| Menu Shields | 0 0 33.33 38.89 | 菜单-盾 |
| Sensor | 0 0 34.08 37.11 | 希卡感应器 |

完整 path data 见各组件 TSX 源码中的常量定义。
