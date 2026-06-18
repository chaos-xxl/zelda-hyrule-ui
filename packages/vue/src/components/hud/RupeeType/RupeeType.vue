<script lang="ts">
export type RupeeVariant = 'green' | 'blue' | 'red' | 'purple' | 'silver' | 'gold'

export interface RupeeTypeProps {
  /** 卢比类型 */
  type: RupeeVariant
  /** 尺寸（默认 25×46px 比例） */
  size?: number
}

/** 卢比颜色映射 — 从 Figma 精确提取（与 React 版同源） */
const RUPEE_COLORS: Record<RupeeVariant, { light: string; dark: string }> = {
  green: { light: '#4CAF50', dark: '#173515' },
  blue: { light: '#42A5F5', dark: '#0D2B5C' },
  red: { light: '#EF5350', dark: '#5C1414' },
  purple: { light: '#AB47BC', dark: '#3A0C5C' },
  silver: { light: '#BDBDBD', dark: '#424242' },
  gold: { light: '#FFD54F', dark: '#5C4A14' },
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import styles from '@react/components/hud/RupeeType/rupeeType.module.less'

const props = withDefaults(defineProps<RupeeTypeProps>(), { size: 46 })
const width = computed(() => props.size * (25 / 46))
const id = computed(() => `rupee-type-${props.type}`)
const colors = computed(() => RUPEE_COLORS[props.type])
</script>

<template>
  <div :class="styles.container" :style="{ width: width + 'px', height: props.size + 'px' }">
    <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 25 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 10.86L18.75 15.97V30.03L25 35.14V10.86Z" :fill="`url(#${id}-d)`" />
      <path d="M0 10.86L6.25 15.97V30.03L0 35.14V10.86Z" :fill="`url(#${id}-m)`" />
      <path d="M12.5 0L25 10.86L18.75 15.97L12.5 10.86V0Z" :fill="`url(#${id}-d)`" />
      <path d="M12.5 0L0 10.86L6.25 15.97L12.5 10.86V0Z" :fill="`url(#${id}-l)`" />
      <path d="M12.5 46L25 35.14L18.75 30.03L12.5 35.14V46Z" :fill="`url(#${id}-m)`" />
      <path d="M12.5 46L0 35.14L6.25 30.03L12.5 35.14V46Z" :fill="`url(#${id}-d)`" />
      <path d="M12.5 10.86L18.75 15.97V30.03L12.5 35.14L6.25 30.03V15.97L12.5 10.86Z" :fill="`url(#${id}-c)`" />
      <defs>
        <linearGradient :id="`${id}-l`" x1="6" y1="0" x2="10" y2="16" gradientUnits="userSpaceOnUse">
          <stop :stop-color="colors.light" />
          <stop offset="1" :stop-color="colors.light" stop-opacity="0.75" />
        </linearGradient>
        <linearGradient :id="`${id}-c`" x1="12.5" y1="10.86" x2="12.5" y2="35.14" gradientUnits="userSpaceOnUse">
          <stop :stop-color="colors.light" />
          <stop offset="1" :stop-color="colors.dark" />
        </linearGradient>
        <linearGradient :id="`${id}-m`" x1="3" y1="10" x2="3" y2="35" gradientUnits="userSpaceOnUse">
          <stop :stop-color="colors.light" stop-opacity="0.6" />
          <stop offset="1" :stop-color="colors.dark" />
        </linearGradient>
        <linearGradient :id="`${id}-d`" x1="21" y1="10" x2="21" y2="35" gradientUnits="userSpaceOnUse">
          <stop :stop-color="colors.dark" />
          <stop offset="1" :stop-color="colors.dark" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>
