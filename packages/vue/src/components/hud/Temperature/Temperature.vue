<script lang="ts">
export type TemperatureValue = 'regular' | 'cold' | 'hot'

export interface TemperatureProps {
  /** 温度状态 */
  value?: TemperatureValue
  /** 尺寸（默认 50px） */
  size?: number
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import styles from '@react/components/hud/Temperature/temperature.module.less'
import tempRegularSvg from '@core/assets/svg/temp-regular.svg'
import tempColdSvg from '@core/assets/svg/temp-cold.svg'

const TEMP_SVGS: Record<TemperatureValue, string> = {
  regular: tempRegularSvg,
  cold: tempColdSvg,
  hot: tempRegularSvg, // hot 用 regular 的 SVG + CSS 色相旋转（与 React 版一致）
}

const props = withDefaults(defineProps<TemperatureProps>(), { value: 'regular', size: 50 })
const src = computed(() => TEMP_SVGS[props.value])
</script>

<template>
  <div :class="[styles.container, styles[props.value]]" :style="{ width: props.size + 'px', height: props.size + 'px' }">
    <img :src="src" alt="" :class="styles.icon" />
  </div>
</template>
