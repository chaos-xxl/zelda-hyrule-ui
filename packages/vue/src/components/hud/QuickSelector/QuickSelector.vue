<script lang="ts">
export interface QuickSelectorSlot {
  position: 'top' | 'right' | 'bottom' | 'left'
}

export interface QuickSelectorItem {
  label?: string
}

export interface QuickSelectorProps {
  /** 选择器类型 */
  type?: 'weapons' | 'bow'
}
</script>

<script setup lang="ts">
import styles from '@react/components/hud/QuickSelector/quickSelector.module.less'
import centerSvg from '@core/assets/svg/quick-selector-center.svg'
import rightSvg from '@core/assets/svg/quick-selector-right.svg'
import leftSvg from '@core/assets/svg/quick-selector-left.svg'
import topSvg from '@core/assets/svg/quick-selector-top.svg'

defineProps<QuickSelectorProps>()
</script>

<template>
  <!-- 精确还原 Figma node 36:97 — 142×120px 快速选择器 -->
  <div :class="styles.container">
    <img :src="centerSvg" alt="" :class="styles.center" />
    <img :src="topSvg" alt="" :class="styles.top" />
    <img :src="rightSvg" alt="" :class="styles.right" />
    <img :src="leftSvg" alt="" :class="styles.left" />
  </div>
</template>
