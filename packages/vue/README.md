# zelda-hyrule-ui-vue

The official **Vue 3 port** of [**zelda-hyrule-ui**](https://github.com/chaos-xxl/zelda-hyrule-ui) —
a UI component library inspired by *The Legend of Zelda: Breath of the Wild*.
Dark theme, Sheikah glow effects, pixel-identical to the React version (same design
tokens, same Less modules, same Figma-exact SVG assets, real Hylia Serif bundled).

[**zelda-hyrule-ui**](https://github.com/chaos-xxl/zelda-hyrule-ui)（塞尔达旷野之息风格组件库）的官方
**Vue 3 移植版**。与 React 版共享同一份设计 token / Less 样式 / Figma 逐节点导出的 SVG 素材，视觉像素级一致。

## Install / 安装

```bash
npm i zelda-hyrule-ui-vue
```

Requires `vue >= 3.5`.

## Usage / 使用

```vue
<script setup lang="ts">
import { HealthBar, Button, SheikahBackground, SheikahScanlines } from 'zelda-hyrule-ui-vue'
import 'zelda-hyrule-ui-vue/style'
</script>

<template>
  <SheikahBackground color="darkBlue">
    <SheikahScanlines animated :opacity="0.1" />
    <HealthBar :current="10" :max="13" :bonus="3" />
    <Button variant="sheikah">Activate</Button>
  </SheikahBackground>
</template>
```

## Components (25) / 当前组件集

**Common** — `Button` · `Card` · `Dialog` · `Modal` · `Divider` · `Loading`

**HUD** (full category ✅) — `HealthBar` · `StaminaWheel` · `WeatherIcon` · `RupeeCounter` · `RupeeType` · `Temperature` · `Sensor` · `SoundMeter` · `DivineBeast` · `SheikahAbility` · `EffectDuration` · `BonusEffectIcon` · `LoadingIcon` · `LoadingHeart` · `HorseSpur` · `QuickSelector`

**Sheikah** — `SheikahBackground` · `SheikahScanlines` · `SheikahSymbol`

Props are **1:1 identical** to the React version — same names, same enums, same defaults.
Differences are Vue idioms only: callbacks are emits (`onClose` → `@close`), `children`/`icon`/`footer`
are slots, and `class`/`style` fall through natively.

Props 与 React 版 **1:1 对齐**——同名、同枚举、同默认值。区别仅为 Vue 语法：回调转 emit
（`onClose` → `@close`），`children`/`icon`/`footer` 转 slot，`class`/`style` 原生透传。

The full HUD category landed in 0.2.0. The remaining categories (Menu, Map, Quest,
Titles, Battle, …) are being ported — track progress and vote at
[issue #2](https://github.com/chaos-xxl/zelda-hyrule-ui/issues/2).
Full docs / design specs: [main repository](https://github.com/chaos-xxl/zelda-hyrule-ui).

0.2.0 补齐了整个 HUD 类别。其余类别（菜单 / 地图 / 任务 / 标题 / 战斗…）移植中——进度与催更见 [issue #2](https://github.com/chaos-xxl/zelda-hyrule-ui/issues/2)。
完整文档 / 设计规范见[主仓库](https://github.com/chaos-xxl/zelda-hyrule-ui)。

---

> **Unofficial fan project · 非官方粉丝项目**
> Free, non-commercial, for learning and demonstration only. **Not affiliated with, endorsed by,
> or sponsored by Nintendo.** *The Legend of Zelda*, *Breath of the Wild*, and all related names
> and visual elements are trademarks of Nintendo Co., Ltd. Visual design originates from a
> community CC BY 4.0 Figma kit by [Hunter Paramore](https://hunterparamore.com) — see
> [ATTRIBUTION.md](https://github.com/chaos-xxl/zelda-hyrule-ui/blob/main/ATTRIBUTION.md).
>
> 本项目为免费、非商用的粉丝创作，仅供学习与演示，**与任天堂无任何隶属、背书或赞助关系**。
> 相关名称与视觉元素均为任天堂的商标。视觉设计来自社区 CC BY 4.0 Figma 素材包，详见 ATTRIBUTION。

MIT (code only — grants no rights to Nintendo trademarks or IP)
