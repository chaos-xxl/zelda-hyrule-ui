# Design Tokens

> Reference for `skill/SKILL.md`. 完整设计 token 系统（色彩 / 辉光 / 字体 / 间距 / 圆角 / 动效）+ 不依赖组件库时的 CSS 变量模板。

## 色彩系统

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

**装包用户（路径甲）**：`import 'zelda-hyrule-ui/style'` 即可——**Hylia Serif 已随包发布**（0.2.1+，`dist/index.css` 自带 `@font-face`，ttf 在 `dist/files/`），无需任何手动加载。Roboto 仍需 Google Fonts：

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
```

**纯 HTML / 非装包用户（路径丙）**：Cinzel 只是**应急兜底，不可作为正式交付的标题字体**。必须内联真实 Hylia Serif（从 `node_modules/zelda-hyrule-ui/dist/files/HyliaSerif.*.ttf` 或仓库 `src/assets/fonts/HyliaSerif.ttf` 取，base64 内联，单文件可移植）：

```css
@font-face {
  font-family: 'Hylia Serif';
  src: url('data:font/ttf;base64,<把真实 HyliaSerif.ttf base64 后贴这里>') format('truetype');
  font-weight: 400; font-style: normal; font-display: swap;
}
```

⚠️ 取不到 ttf 时，按 SKILL.md「兜底总则」**停下来告诉用户去哪取**，不要默默只留 Cinzel 就交付（那会让标题不是塞尔达味道）。Google Fonts 的 Cinzel `<link>` 仅在拿不到真字体的临时预览时用。

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

## CSS 变量完整模板

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

