<script lang="ts">
export type RupeeColor = 'green' | 'blue' | 'red' | 'purple' | 'silver' | 'gold'

export interface RupeeCounterProps {
  /** 卢比数量 */
  amount: number
  /** 卢比颜色（影响图标渐变） */
  color?: RupeeColor
  /** 是否显示数字标签 */
  showLabel?: boolean
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import styles from '@react/components/hud/RupeeCounter/rupeeCounter.module.less'
import RupeeType from '../RupeeType'

const props = withDefaults(defineProps<RupeeCounterProps>(), { color: 'green', showLabel: true })
const formatted = computed(() => props.amount.toLocaleString())
</script>

<template>
  <div :class="styles.container">
    <RupeeType :type="props.color" :size="40" />
    <span v-if="props.showLabel" :class="styles.amount">{{ formatted }}</span>
  </div>
</template>
