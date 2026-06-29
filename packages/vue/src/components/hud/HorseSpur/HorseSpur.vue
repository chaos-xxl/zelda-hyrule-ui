<script lang="ts">
export type HorseSpurVariant = 'normal' | 'ancient' | 'endura'

export interface HorseSpurProps {
  /** 冲刺类型 */
  type?: HorseSpurVariant
  /** 是否已使用 */
  used?: boolean
  /** 尺寸（默认 84px） */
  size?: number
}
</script>

<script setup lang="ts">
import styles from '@react/components/hud/HorseSpur/horseSpur.module.less'
import horseSpurNormalSvg from '@core/assets/svg/horse-spur-normal.svg'

const props = withDefaults(defineProps<HorseSpurProps>(), { type: 'normal', used: false, size: 84 })
</script>

<template>
  <div
    :class="[styles.container, styles[props.type], { [styles.used]: props.used }]"
    :style="{ width: props.size + 'px', height: props.size + 'px' }"
  >
    <img :src="horseSpurNormalSvg" alt="" :class="styles.icon" />
  </div>
</template>
