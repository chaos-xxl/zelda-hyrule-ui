| name | zelda-hyrule-ui-style |
| --- | --- |
| description | 使用 zelda-hyrule-ui 设计风格创建 React UI 界面或组件。当用户需要：(1) 用塞尔达旷野之息风格创建 UI 页面或组件；(2) 使用 zelda-hyrule-ui 组件库开发界面；(3) 构建暗色科技感、希卡辉光风格的 React 界面；(4) 复现或扩展 zelda-hyrule-ui 的视觉语言；(5) 提问"塞尔达风格"、"BOTW 风格"、"希卡之石风格"、"Hyrule 风格"的 UI 时，务必使用此 skill。 |

# zelda-hyrule-ui 设计风格指南

> Validated against `zelda-hyrule-ui@0.2.x`
>
> **设计来源致谢**：本组件库的视觉设计、UI 结构和 SVG 素材均源自 [Hunter Paramore](https://hunterparamore.com) 在 Figma 社区分享的 [Zelda BOTW UI Kit](https://www.figma.com/community/file/965825767811358609)。生成代码时如需展示出处，请在合适位置（footer/about 页等）保留致谢。详见 [`ATTRIBUTION.md`](../ATTRIBUTION.md)。

---

## 这份 Skill 怎么用（给执行 Agent）

本文件是 **路由层**，必须**完整读完**——其中的「设计铁律」和「禁止模式」是硬约束，任何情况下都要遵守。

详细规范不在本文件里，而是拆分到了 `references/` 目录。**你应该根据当前任务，只加载需要的 1-2 个 reference 文件，不要一次性全部读取**（这是为了节省 context，详见下方「Reference 加载路由」）。

本文件保留：
- 如何获取与使用（路径甲装包 / 路径乙让 AI 现写）
- 30 秒快速开始（起手式）
- Reference 加载路由（你该读哪个文件）
- Design Token 速查（最高频的色 / 字）
- 设计铁律 8 条（硬约束）
- 塞尔达味道命门组件（优先用哪几个组件）
- 禁止模式与正确示例（护栏）

---

## 📥 如何获取与使用（重要 · 先读这节）

本 skill 文件本身就是**完整的设计规范**（配色、字体、尺寸、CSS、关键 SVG path）。基于此，有**三种用法**（见下）。

### 🛑 兜底总则（最高硬约束，任何路径都适用）

> **标志性素材（希卡之眼 / 神兽 / 插画 / 天气图标等）和 Hylia Serif 字体，必须使用项目导出的真实文件。如果当前环境取不到真实文件，停下来告诉用户"这个素材/字体需要从 npm 包或仓库获取"，并给出确切路径——绝不允许手绘、近似、用 emoji 或退化字体（如只用 Cinzel）静默替代。宁可先放占位、留 TODO，也不要交付一个"看起来差不多"的假素材。**
>
> 原因：本项目的核心价值就是"逐节点精确还原、不是 AI slop"。一个手画的希卡之眼 / 一个 Cinzel 标题，会当场摧毁这个信任。**"看起来像"不等于"是它"。**
>
> 真实文件位置：字体 `HyliaSerif.ttf`、SVG `sheikah-symbol.svg` 等 —— 装包后在 `node_modules/zelda-hyrule-ui/dist/files/`；clone 仓库则在 `src/assets/`。高频 inline path（天气/心形/菜单等）直接见 `references/svg-paths.md`（已含真实 path data）。

### 路径甲 · 装组件库（用现成组件，最省事）

```bash
npm i zelda-hyrule-ui   # 国内慢可加 --registry=https://registry.npmmirror.com
```

```tsx
import { HealthBar } from 'zelda-hyrule-ui'
import 'zelda-hyrule-ui/style'   // 含真实 Hylia Serif @font-face（0.2.1+ 已打进包）
```

- 装包走 **npm 源，不是 GitHub**，国内无代理也能装。
- 83 个组件 + 全部 SVG/PNG 素材 + Hylia Serif 字体都在包里，开箱即用，**字体无需任何手动加载**。

### 路径乙 · 让 AI 照规范现写 React（零依赖，不联网）

把 skill md 喂给 AI，说"用塞尔达风格做个 X"，AI 照 `references/components-full.md` 现写组件代码。适合只要某几个组件、不想引依赖。**遇到标志性素材时按"兜底总则"处理。**

### 路径丙 · 纯 HTML / 非 React（无构建、单文件）

用户说"先用 HTML""不要 React"时走这条。骨架照 `references/design-tokens.md` 的 `:root` CSS 变量块 + `core-patterns.md` 的双层边框。**素材与字体严格按"兜底总则"：**

- **字体**：把真实 `HyliaSerif.ttf` 取出来，用 base64 内联 `@font-face`（`src: url('data:font/ttf;base64,....')`），保证单文件可移植。**不要只写 Cinzel 兜底就交付。**
- **标志性 SVG**（希卡之眼等）：取真实 `.svg` 文件，base64 成 `data:image/svg+xml;base64,...` 用 `<img>` 引入，或直接内联其 `<path>`。**不要手画。**
- **高频 inline 图标**（天气/心形/菜单）：直接用 `references/svg-paths.md` 里的真实 path data。

### ⚠️ 必须用真实素材、禁止现画的组件清单

下面这些依赖**具体导出的 SVG/PNG 文件**，AI **禁止**凭文字规范手绘或近似（违反"兜底总则"）：

> `SheikahSymbol`（希卡之眼）、`Illustration`（剑/卢比/希卡之石/回忆花）、`DivineBeast`（4 神兽）、`SheikahBackground`（背景纹理）、`SheikahRune` / `SheikahAbility`、`SheikahCompendiumFilters`、`SheikahTextTitle`、`SoundMeter`、`QuickSelector`、`LoadingIcon`、`HorseSpur`、`Starburst`、`DirectionalArrow`、`TextOrnamentCorner`、`TimerOrnament`、`MapQuestMarker` / `QuestNotification`

取不到这些文件时，**停下来告诉用户去哪取（见兜底总则的路径），不要交付近似物**。
（注：`WeatherIcon`、`Temperature`、`BonusEffectIcon` 等是 inline path 组件，真实 path 见 `references/svg-paths.md`，直接抄即可。）

### 在线 demo / 文档

预览站在 GitHub Pages，国内可能需代理。但**使用本 skill 不需要访问 GitHub**。

---

## 🚀 30 秒快速开始

最常用的 import + 一段可运行的 JSX。直接复制就能跑（前提：已 `npm i zelda-hyrule-ui`，见上方路径甲）。

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

## 📂 Reference 加载路由

本 SKILL.md 已完整读完后，根据当前任务**只加载需要的 reference**，不要一次性全部读取。

| 当前任务 | 加载文件 |
|---------|---------|
| 做完整页面 / 整体风格（网页、PPT、应用界面） | `references/ui-cases.md` + `references/recipes.md` |
| 做 PPT / 网页 PPT / 小红书图文 / 封面海报（信息排版） | `references/layout-bridge.md` |
| 需要某个区块的组件组合（如导航栏、卡片列表、HUD overlay） | `references/recipes.md` |
| 需要某组件的精确样式（颜色、尺寸、阴影、动画） | `references/components-full.md` |
| 需要 8 个核心组件的深度示例 | `references/components-core.md` |
| 需要完整设计 token（配色、字体、间距、动效） | `references/design-tokens.md` |
| 需要理解"双层边框 / 希卡变体"等核心视觉模式 | `references/core-patterns.md` |
| 查有哪些组件可用 | `references/component-list.md` |
| 查某组件的 props / 合法枚举值（**skill 内自带**） | `references/props-quickref.md` |
| 查某组件的完整 props / API / 默认值（装包后） | `AI_USAGE.md`（随 npm 包发布，不在本 skill 内） |
| 自己实现 / 扩展新组件 | `references/new-component.md` |
| 主题换色 | `references/theming.md` |
| 无障碍处理（ARIA、对比度、焦点） | `references/accessibility.md` |
| demo 页面布局规范 | `references/demo-layout.md` |
| 查高频 SVG path 索引 | `references/svg-paths.md` |

**典型流程**（用户说"用这个风格做个 X"）：
1. 读 `references/ui-cases.md` 找最接近的整页模板
2. 读 `references/design-tokens.md` 拿配色 / 字体
3. 拼装时按需查 `references/components-full.md` 的精确样式

**你卡住时的默认值：**
- 不确定用哪个 variant → 默认 `sheikah`（暗色科技感最强）
- 不确定尺寸 → 默认 `middle`
- 不确定颜色 → 文字用 `#E9E1D1`，强调用 `#3CD3FC`
- 用户没说要不要双语 → 默认只英文，要中文时再加（默认双语会撑爆布局）
- **拿不准某个组件的枚举值 → 查 `references/props-quickref.md`，别凭英文直觉猜**（如晴天是 `clear` 不是 `sunny`，尺寸是 `middle` 不是 `medium`）

---

## 🎨 Design Token 速查

最高频的值，写代码直接用。完整 token 系统（辉光、神兽色、动效曲线等）见 `references/design-tokens.md`。

```less
// 背景
@zelda-dark-bg:    #66645D;          // 页面背景
@bg-card:          rgba(0,0,0,0.6);  // 容器背景
@bg-sheikah:       rgba(10,20,40,0.8); // 希卡面板背景

// 文字
@text-color-main:   #E9E1D1;  // 主文字（暖白，不要纯白）
@text-color-yellow: #E2D146;  // 黄色强调
@text-color-red:    #F15050;  // 红/危险
@text-color-green:  #6FD49C;  // 绿/物品高亮

// 核心强调
@sheikah-blue:      #3CD3FC;  // 希卡蓝（唯一的蓝色）
@sheikah-blue-glow: #4FC0FF;  // 蓝色辉光
@effect-orange:     #FCC413;  // 金色/确认

// 边框
@border-color:      rgba(226,222,211,0.3);  // 默认内层边框
@zelda-tan:         #E2DED3;                 // 米色（边框/标题）

// 字体
@font-title: 'Hylia Serif', 'Cinzel', serif;  // 标题，normal
@font-body:  'Roboto', sans-serif;            // 正文/按钮，italic

// 圆角（偏方正）
@radius-sm: 4px;  @radius-md: 8px;  // 交互元素最大 8px

// 动效
@motion-ease: cubic-bezier(0.4, 0, 0.2, 1);
@motion-duration-base: 0.25s;
```

---

## ⚖️ 设计铁律（8 条，硬约束）

1. **暗色为主** — 页面背景 `#66645D` 或更深，容器背景 `rgba(0,0,0,0.6)`。禁止亮色/白色背景。
2. **双层边框** — 所有容器/按钮使用外层半透明黑背景 + 内层 `::after` 细边框（inset 3px）。这是最核心的视觉特征。详见 `references/core-patterns.md`。
3. **辉光系统** — 选中/激活态使用蓝色（`#4FC0FF`）或金色（`#FFB800`）辉光。禁止纯色高亮或蓝色 outline。
4. **Italic 正文** — 对话/按钮/正文使用 Roboto Medium Italic。标题用 Hylia Serif（normal）。
5. **禁止纯白** — 文字用暖白 `#E9E1D1`，边框用米色 `#E2DED3`。禁止 `#FFFFFF` 或 `#000000` 作为文字色。
6. **禁止冷色** — 不用冷蓝（`#0066ff`）、冷灰（`#666`）。所有灰色带暖色调。唯一的蓝色是希卡蓝 `#3CD3FC`。
7. **SVG 优先** — **小图标和装饰**（按钮里的图标、心心、箭头等）使用 inline SVG（`<svg><path>`），保证矢量清晰、可用 `currentColor` 着色。**大尺寸装饰图**（如 `Illustration` 组件里的剑、回忆花，~30-160KB）可用 `<img src>` 引入 SVG URL，避免拖慢首屏。判断标准：可着色 / 需动画 → inline；纯展示大图 → `<img>`。**⚠️ 但 inline 的 `d` 必须用真实导出的 path（见 `references/svg-paths.md`），绝不自己发明/手画 path——见「兜底总则」。**
8. **焦点色** — focus-visible 用希卡蓝 `#3CD3FC`（outline: 2px solid）。禁止浏览器默认蓝色焦点环。

---

## 🗝️ 塞尔达味道命门组件（先用这几个）

不是所有组件权重相等。下面 5 个（组）是**"塞尔达味道"的主要来源**——它们决定一个界面"一眼像不像塞尔达"。**做任何塞尔达风格页面，先想这几个怎么用，再去拼别的功能组件。** 用对了事半功倍，缺了它们就算配色对、字体对，也只是"暗色 UI"而不是"塞尔达 UI"。

| 组件 | 为什么是味道命门 | 典型场景 | 关键 props |
|------|----------------|---------|-----------|
| `SheikahBackground` + `SheikahScanlines` | 暗色科技感面板 + CRT 扫描线，**最强希卡氛围底座** | 几乎所有页面的最外层容器 | `color="darkBlue"`/`"blueGrey"`；`animated` + `opacity={0.08~0.15}` |
| `SheikahSymbol` | 希卡之眼标志，**一眼认出是塞尔达的视觉锚点** | 标题屏、加载页、空状态、装饰锚点 | `size`（默认 380）、`outline`（默认 true） |
| `Illustration` | 大尺寸游戏美术（剑 / 卢比 / 希卡之石 / 回忆花），**留白区氛围拉满** | 页面或区块背景、PPT 背景、hero 区 | `illustration="sword"\|"rupee"\|"slate"\|"memories"`；`opacity={0.3~0.6}` |
| `Logo` | 品牌锚点（**用我们的安全替代版，不是官方商标 logo**） | 标题屏、页头 | `variant="full"\|"mark"`、`width` |
| `Divider` | 希卡 / 金色分隔纹样，比普通线更"塞尔达" | 区块之间的分隔 | `variant="sheikah"\|"golden"\|"ornament"\|"subtle"` |

### 风味起手式（任何塞尔达页面的默认骨架）

```tsx
import { SheikahBackground, SheikahScanlines, SheikahSymbol, Illustration } from 'zelda-hyrule-ui'

// 1. 永远先用 SheikahBackground + Scanlines 打底（味道地基）
<SheikahBackground color="darkBlue">
  <SheikahScanlines animated opacity={0.1} />

  {/* 2. 大留白区放 Illustration 做背景氛围（opacity 压低，别抢内容） */}
  <Illustration illustration="sword" opacity={0.35} />

  {/* 3. 视觉焦点 / 标题区放 SheikahSymbol 做锚点 */}
  <div style={{ position: 'relative', zIndex: 1 }}>
    <SheikahSymbol size={120} />
    {/* ...你的功能组件（HUD / 对话 / 按钮等）放这里 */}
  </div>
</SheikahBackground>
```

### 命门组件使用规则

1. **底座优先**：塞尔达页面**先铺 `SheikahBackground` + `SheikahScanlines`**，再考虑放功能组件。这是味道地基，跳过它直接堆功能组件 = 不够味。
2. **锚点点睛**：每个主要视图至少有一个 `SheikahSymbol` 或 `Illustration` 当视觉锚点，让人一眼锁定"这是塞尔达"。
3. **Illustration 永远当背景**：`opacity` 压到 `0.3~0.6`，放在内容**下层**（内容套 `position: relative; zIndex: 1`），它是氛围不是主角，别让它抢可读性。
4. **扫描线要克制**：`SheikahScanlines` 的 `opacity` 控制在 `0.08~0.15`，高了像电视坏了。`animated` 适合加载 / 标题屏，信息密集页可以静态。
5. **Logo 用安全替代版**：`Logo` 组件是力量三角 + 通用衬线字，**刻意不还原官方商标 logo 美术**（IP 安全，见 `ATTRIBUTION.md`）。不要试图换成官方 logo 图。

---

## 🚫 禁止模式与正确示例

下面每条都是 ✗ 错误 + ✓ 正确的对照，生成代码时按 ✓ 来。

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

## 📁 References 索引

完整规范在 `references/` 下，按需加载：

| 文件 | 内容 |
|------|------|
| `references/design-tokens.md` | 完整设计 token 系统 + CSS 变量模板 |
| `references/core-patterns.md` | 双层边框结构、希卡蓝变体 |
| `references/recipes.md` | 9 个场景配方（HUD / 任务 / 对话 / 商店 / 设置 / 加载 / 地图等） |
| `references/components-core.md` | 8 个核心组件深度示例（Button / Card / Dialog / HealthBar / StaminaWheel / Modal / Divider / Loading） |
| `references/components-full.md` | 全部 83 个组件的精确样式规范 |
| `references/component-list.md` | 83 个组件的完整 export 清单 |
| `references/props-quickref.md` | **props 合法枚举值速查**（防 AI 猜错值，skill 内自带，不装包也能查） |
| `references/ui-cases.md` | 5 个完整界面案例（标题屏 / 暂停菜单 / 库存 / 对话 / 设置） |
| `references/new-component.md` | 新组件文件结构模板 + 开发 checklist |
| `references/demo-layout.md` | demo 页面布局精确规范 |
| `references/theming.md` | 主题定制（3 种路径） |
| `references/accessibility.md` | 无障碍（ARIA / 对比度 / 焦点环） |
| `references/svg-paths.md` | 高频 SVG path 数据索引 |
| `references/layout-bridge.md` | 排版互操作桥接——做 PPT / 图文 / 封面时，配合归藏排版 skill 换塞尔达皮（骨 + 皮） |
