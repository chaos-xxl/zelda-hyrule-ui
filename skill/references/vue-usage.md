# Vue 3 用法（zelda-hyrule-ui-vue）

> 项目是 Vue 3 时读这份。官方 Vue 移植版与 React 版**props 1:1 对齐**（同名、同枚举值、同默认值），
> 样式与素材同源（同一份 .module.less / SVG / 字体），视觉像素级一致。
> 设计铁律、Design Token、禁止模式与 React 版完全相同——本文件只讲"语法怎么换"。

## 安装

```bash
npm i zelda-hyrule-ui-vue   # 国内慢可加 --registry=https://registry.npmmirror.com
```

```ts
// main.ts
import 'zelda-hyrule-ui-vue/style'   // 含真实 Hylia Serif @font-face
```

- peer 依赖：`vue >= 3.5`
- Roboto 仍需自行从 Google Fonts 加载（同 React 版）

## 当前组件集（MVP，0.1.0）

8 个核心：`Button` `Card` `Dialog` `Modal` `Divider` `Loading` `HealthBar` `StaminaWheel`
3 个味道命门：`SheikahBackground` `SheikahScanlines` `SheikahSymbol`

> 不在此列的组件：Vue 包还没有，按 SKILL.md 路径乙（照规范现写）处理，
> 或用 React 版枚举值规范（`props-quickref.md`）自己写 Vue 实现。
> **不要假装 import 一个不存在的组件。**

## React → Vue 语法映射（核心 5 条）

| React | Vue 3 | 例子 |
|-------|-------|------|
| 字符串 prop | 一样直接写 | `variant="sheikah"` → `variant="sheikah"` |
| 数字/布尔/表达式 prop | 加 `:` | `current={10}` → `:current="10"`；`animated` 布尔简写不变 |
| 回调 prop `onX` | 事件 `@x` | `onClose={fn}` → `@close="fn"` |
| `children` | 默认 slot | `<Button>Go</Button>` 不变 |
| ReactNode 型 prop | 具名 slot | `icon={<Svg/>}` → `<template #icon><Svg/></template>`；Modal 的 `footer` 同理 `#footer` |

另外两条 Vue 特有：

- `className` / `style`：**不需要专门的 prop**，直接写 `class=""` / `style=""`，Vue 的 attrs 透传会落到组件根元素。
- `Modal` 的 `footer={null}`（隐藏底栏）→ `:footer="null"`。

## 起手式（与 React 版 30 秒快速开始等价）

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  Button, Card, Dialog, HealthBar, StaminaWheel, Modal,
  SheikahBackground, SheikahScanlines, SheikahSymbol,
} from 'zelda-hyrule-ui-vue'

const open = ref(false)
</script>

<template>
  <div style="background: #66645d; min-height: 100vh; padding: 40px">
    <SheikahBackground color="darkBlue">
      <SheikahScanlines animated :opacity="0.1" />
      <div style="position: relative; z-index: 1; padding: 40px">
        <SheikahSymbol :size="120" />

        <div style="display: flex; gap: 24px; margin-top: 32px">
          <HealthBar :current="10" :max="13" :bonus="3" />
          <StaminaWheel :value="0.75" :size="70" />
        </div>

        <Dialog type="speech" speaker="Old Man">
          It is dangerous to go alone. Take this.
        </Dialog>

        <div style="display: flex; gap: 12px; margin-top: 24px">
          <Button variant="sheikah" @click="open = true">Activate</Button>
          <Button variant="primary">Continue</Button>
        </div>
      </div>
    </SheikahBackground>

    <Modal :open="open" title="System" @close="open = false" @ok="open = false">
      Save and quit to the title screen?
    </Modal>
  </div>
</template>
```

## 三条提醒

1. **枚举值照抄 React 版**：`middle` 不是 `medium`、`clear` 不是 `sunny`——查 `props-quickref.md`，两个框架同一套值。
2. **素材兜底总则同样适用**：标志性 SVG / Hylia Serif 必须用真实文件（装包后在 `node_modules/zelda-hyrule-ui-vue/dist/files/`），绝不手绘替代。
3. **Modal 已内置** Teleport 到 body、焦点圈定、Escape 关闭、滚动锁定——不要自己再包一层。
