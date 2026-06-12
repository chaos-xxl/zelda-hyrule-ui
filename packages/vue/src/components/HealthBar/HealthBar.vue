<script lang="ts">
export interface HealthBarProps {
  /** 当前生命值 */
  current: number
  /** 最大生命值 */
  max: number
  /** 奖励心心数量 */
  bonus?: number
}

/** 从 Figma 导出的精确心形路径（与 React 版同源） */
const HEART_PATH = "M21.7675 12.7969L12.1037 21.7487L2.05872 11.598C-0.686241 8.82416 -0.686239 4.35741 2.05872 1.58356C4.14815 -0.527857 7.55918 -0.527854 9.64861 1.58357L12.1037 4.06447L14.0676 2.0798C16.3794 -0.256337 20.1909 -0.129535 22.3423 2.35509C24.9973 5.42139 24.7431 10.0406 21.7675 12.7969Z"

const HEART_FILL = { filled: '#F1362F', bonus: '#FFE465', empty: '#363930' } as const
</script>

<script setup lang="ts">
import { computed } from 'vue'
import styles from '@react/components/HealthBar/healthBar.module.less'

const props = withDefaults(defineProps<HealthBarProps>(), {
  bonus: 0,
})

interface HeartItem {
  key: string
  type: 'filled' | 'empty' | 'bonus'
}

const hearts = computed<HeartItem[]>(() => {
  const items: HeartItem[] = []
  for (let i = 0; i < props.max; i++) {
    items.push({ key: `heart-${i}`, type: i < props.current ? 'filled' : 'empty' })
  }
  for (let i = 0; i < props.bonus; i++) {
    items.push({ key: `bonus-${i}`, type: 'bonus' })
  }
  return items
})
</script>

<template>
  <div :class="styles.container">
    <span
      v-for="heart in hearts"
      :key="heart.key"
      :class="[
        styles.heart,
        {
          [styles.filled]: heart.type === 'filled',
          [styles.empty]: heart.type === 'empty',
          [styles.bonus]: heart.type === 'bonus',
        },
      ]"
    >
      <svg aria-hidden="true" width="30" height="24" viewBox="0 0 24.18 21.75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :d="HEART_PATH" :fill="HEART_FILL[heart.type]" />
      </svg>
    </span>
  </div>
</template>
