# 无障碍（A11y）

> Reference for `skill/SKILL.md`. 组件库已内置的 ARIA 属性、a11y 检查清单、焦点环规范、对比度数据。

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

