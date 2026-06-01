# 主题定制

> Reference for `skill/SKILL.md`. 三种实际可行的主题定制路径。⚠️ 重要：本组件库已编译成 CSS，运行时不能改 Less 变量。

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

