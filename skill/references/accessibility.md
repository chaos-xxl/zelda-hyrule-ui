# 无障碍（A11y）

> Reference for `skill/SKILL.md`. 组件库已内置的 ARIA 属性、a11y 检查清单、焦点环规范、对比度数据。

## 已内置的无障碍保障（v0.2.1+）

组件库已系统化处理以下三层无障碍，二次封装时保留即可：

### 1. ARIA 语义

| 组件 | ARIA 属性 |
|------|----------|
| Modal | `role="dialog"`, `aria-modal="true"`, `aria-labelledby`，按 `Escape` 关闭，关闭按钮 `aria-label="Close"` |
| Toast | `role="alert"`, `aria-live="polite"` |
| Dialog | `role="region"`, `aria-label={speaker}` |
| SettingsToggle | `role="group"`, 箭头按钮 `aria-label` |
| MenuSections | 每个分类按钮 `aria-label` + `aria-pressed`（图标按钮） |
| NumberInput | ▲▼ 按钮 `aria-label="Increase/Decrease"` |
| Button | 继承 `React.ButtonHTMLAttributes`，可传任意 `aria-*` |

### 2. 装饰性 SVG 全部 `aria-hidden="true"`

库内所有 inline `<svg>` 图标（34 处）均标记 `aria-hidden="true"`，符合图标库行业标准（Lucide/Heroicons 默认隐藏 SVG，由交互容器承载可访问名）。装饰图标不会污染屏幕阅读器输出。

### 3. 键盘可达 + 可见焦点环

- 所有原生 `<button>` 类组件（Button / ModalButton / DialogChoice / SheikahRune / SheikahCompendiumFilters / SheikahAlbumButton / NumberInput / SettingsToggle / MenuSections / Modal 三按钮 / ModalTutorial）均有 `:focus-visible` 希卡蓝焦点环。
- 用 `<div>` 实现的可点击组件（QuestListItem / ShopListItem / ItemBG / SheikahCompendiumEntry），当传入 `onClick` 时，通过 `interactiveProps()` 工具自动补齐 `role="button"` + `tabIndex={0}` + Enter/Space 键盘激活 + 焦点环。未传 `onClick` 则保持非交互、不进 Tab 序列。

```tsx
// src/utils/a11y.ts — 给 div/span 实现的可点击元素补齐键盘无障碍
import { interactiveProps } from '../../../utils/a11y'
<div {...interactiveProps(onClick)} className={...}>...</div>
```

### A11y 自查

跑 `node scripts/audit-a11y.mjs` 扫描全量组件，检查图标按钮缺 `aria-label`、`div` 挂 `onClick` 缺 `role`、`svg` 缺 `aria-hidden`、`img` 缺 `alt`。

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

