| name | zelda-hyrule-ui-style |
| --- | --- |
| description | 使用 zelda-hyrule-ui 设计风格创建 React UI 界面或组件。当用户需要：(1) 用塞尔达旷野之息风格创建 UI 页面或组件；(2) 使用 zelda-hyrule-ui 组件库开发界面；(3) 构建暗色科技感、希卡辉光风格的 React 界面；(4) 复现或扩展 zelda-hyrule-ui 的视觉语言；(5) 提问"塞尔达风格"、"BOTW 风格"、"希卡之石风格"、"Hyrule 风格"的 UI 时，务必使用此 skill。 |

# zelda-hyrule-ui 设计风格指南

> Last updated: 2025-01 · Validated against `zelda-hyrule-ui@0.1.x`
>
> **设计来源致谢**：本组件库的视觉设计、UI 结构和 SVG 素材均源自 [Hunter Paramore](https://hunterparamore.com) 在 Figma 社区分享的 [Zelda BOTW UI Kit](https://www.figma.com/community/file/965825767811358609)。生成代码时如需展示出处，请在合适位置（footer/about 页等）保留致谢。详见 [`ATTRIBUTION.md`](../ATTRIBUTION.md)。

---

## 这份 Skill 怎么用（给执行 Agent）

本文件是 **路由层**，必须**完整读完**——其中的「设计铁律」和「禁止模式」是硬约束，任何情况下都要遵守。

详细规范不在本文件里，而是拆分到了 `references/` 目录。**你应该根据当前任务，只加载需要的 1-2 个 reference 文件，不要一次性全部读取**（这是为了节省 context，详见下方「Reference 加载路由」）。

本文件保留：
- 30 秒快速开始（起手式）
- Reference 加载路由（你该读哪个文件）
- Design Token 速查（最高频的色 / 字）
- 设计铁律 8 条（硬约束）
- 禁止模式与正确示例（护栏）

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

## 📂 Reference 加载路由

本 SKILL.md 已完整读完后，根据当前任务**只加载需要的 reference**，不要一次性全部读取。

| 当前任务 | 加载文件 |
|---------|---------|
| 做完整页面 / 整体风格（网页、PPT、应用界面） | `references/ui-cases.md` + `references/recipes.md` |
| 需要某个区块的组件组合（如导航栏、卡片列表、HUD overlay） | `references/recipes.md` |
| 需要某组件的精确样式（颜色、尺寸、阴影、动画） | `references/components-full.md` |
| 需要 8 个核心组件的深度示例 | `references/components-core.md` |
| 需要完整设计 token（配色、字体、间距、动效） | `references/design-tokens.md` |
| 需要理解"双层边框 / 希卡变体"等核心视觉模式 | `references/core-patterns.md` |
| 查有哪些组件可用 | `references/component-list.md` |
| 查某组件的 props / API / 合法取值 | `AI_USAGE.md`（不在本 skill 内） |
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
7. **SVG 优先** — **小图标和装饰**（按钮里的图标、心心、箭头等）使用 inline SVG（`<svg><path>`），保证矢量清晰、可用 `currentColor` 着色。**大尺寸装饰图**（如 `Illustration` 组件里的剑、回忆花，~30-160KB）可用 `<img src>` 引入 SVG URL，避免拖慢首屏。判断标准：可着色 / 需动画 → inline；纯展示大图 → `<img>`。
8. **焦点色** — focus-visible 用希卡蓝 `#3CD3FC`（outline: 2px solid）。禁止浏览器默认蓝色焦点环。

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
| `references/components-full.md` | 全部 84 个组件的精确样式规范 |
| `references/component-list.md` | 84 个组件的完整 export 清单 |
| `references/ui-cases.md` | 5 个完整界面案例（标题屏 / 暂停菜单 / 库存 / 对话 / 设置） |
| `references/new-component.md` | 新组件文件结构模板 + 开发 checklist |
| `references/demo-layout.md` | demo 页面布局精确规范 |
| `references/theming.md` | 主题定制（3 种路径） |
| `references/accessibility.md` | 无障碍（ARIA / 对比度 / 焦点环） |
| `references/svg-paths.md` | 高频 SVG path 数据索引 |
