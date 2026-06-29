<script lang="ts">
export interface EffectDurationProps {
  /** 效果名称 */
  name: string
  /** 剩余时间（格式 "MM:SS"） */
  timeRemaining: string
}
</script>

<script setup lang="ts">
import styles from '@react/components/hud/EffectDuration/effectDuration.module.less'

defineProps<EffectDurationProps>()
defineSlots<{
  /** 效果图标（对应 React 版的 icon prop） */
  icon?: () => unknown
}>()
</script>

<template>
  <div :class="styles.container">
    <span v-if="$slots.icon" :class="styles.icon"><slot name="icon" /></span>
    <span :class="styles.name">{{ name }}</span>
    <span :class="styles.time">{{ timeRemaining }}</span>
  </div>
</template>
