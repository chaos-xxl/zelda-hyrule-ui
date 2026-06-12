<script lang="ts">
export interface LoadingProps {
  /** 加载提示文字 */
  tip?: string
  /** 尺寸 */
  size?: 'small' | 'middle' | 'large'
}
</script>

<script setup lang="ts">
import styles from '@react/components/Loading/loading.module.less'

const props = withDefaults(defineProps<LoadingProps>(), {
  tip: undefined,
  size: 'middle',
})
</script>

<template>
  <div :class="[styles.container, styles[props.size]]">
    <div :class="styles.spinner">
      <div :class="styles.ring" />
      <div :class="styles.eye" />
    </div>
    <span v-if="props.tip" :class="styles.tip">{{ props.tip }}</span>
  </div>
</template>
