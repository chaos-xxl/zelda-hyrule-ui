<script lang="ts">
export type CardVariant = 'default' | 'sheikah' | 'item' | 'golden'

export interface CardProps {
  /** 卡片变体 */
  variant?: CardVariant
  /** 卡片标题（复杂内容用 #title slot） */
  title?: string
  /** 是否选中 */
  selected?: boolean
}
</script>

<script setup lang="ts">
import styles from '@react/components/Card/card.module.less'

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'default',
  title: undefined,
  selected: false,
})

defineSlots<{
  default?: () => unknown
  /** 标题区（覆盖 title prop） */
  title?: () => unknown
}>()
</script>

<template>
  <div
    :class="[styles.card, styles[props.variant], { [styles.selected]: props.selected }]"
  >
    <div v-if="$slots.title || props.title" :class="styles.title">
      <slot name="title">{{ props.title }}</slot>
    </div>
    <div :class="styles.body"><slot /></div>
  </div>
</template>
