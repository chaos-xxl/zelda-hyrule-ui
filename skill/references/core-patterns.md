# 核心设计模式

> Reference for `skill/SKILL.md`. zelda-hyrule-ui 最重要的视觉骨架——双层边框结构 + 希卡蓝变体。所有容器类组件都基于这套模式。

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

