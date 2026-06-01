# 新组件开发模板

> Reference for `skill/SKILL.md`. 自己实现/扩展新组件时的文件结构、boilerplate 模板与验收 checklist。

## 文件结构模板

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

## 新组件 Checklist

> 项目级前置（一次性，不在每个组件 checklist 里重复）：字体加载、`variables.less` 引入、Vite 配置。详见 `design-tokens.md` 字体小节。

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
- [ ] `references/components-full.md` 补充该组件的精确样式值
- [ ] AI_USAGE.md 补充该组件的 API 文档

---

