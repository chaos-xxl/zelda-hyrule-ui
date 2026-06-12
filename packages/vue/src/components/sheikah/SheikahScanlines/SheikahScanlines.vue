<script lang="ts">
export interface SheikahScanlinesProps {
  /** 透明度 (0-1) */
  opacity?: number
  /** 是否动画 */
  animated?: boolean
}
</script>

<script setup lang="ts">
import styles from '@react/components/sheikah/SheikahScanlines/sheikahScanlines.module.less'

const props = withDefaults(defineProps<SheikahScanlinesProps>(), {
  opacity: 0.15,
  animated: false,
})
</script>

<template>
  <div
    :class="[styles.container, { [styles.animated]: props.animated }]"
    :style="{ opacity: props.opacity }"
  />
</template>
