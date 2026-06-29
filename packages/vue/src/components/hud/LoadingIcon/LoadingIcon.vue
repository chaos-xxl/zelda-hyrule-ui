<script lang="ts">
export type LoadingIconType = 'shrine' | 'orb' | 'rupee' | 'korok' | 'stamina'

export interface LoadingIconProps {
  /** 图标类型 */
  icon: LoadingIconType
  /** 是否显示数量 */
  showQuantity?: boolean
  /** 数量 */
  quantity?: number
  /** 尺寸（默认 40px） */
  size?: number
}
</script>

<script setup lang="ts">
import styles from '@react/components/hud/LoadingIcon/loadingIcon.module.less'
import loadingShrineSvg from '@core/assets/svg/loading-icon-shrine.svg'

const props = withDefaults(defineProps<LoadingIconProps>(), { showQuantity: false, size: 40 })
</script>

<template>
  <div :class="[styles.container, styles[props.icon]]" :style="{ width: props.size + 'px', height: props.size + 'px' }">
    <img :src="loadingShrineSvg" alt="" :class="styles.icon" />
    <span v-if="props.showQuantity && props.quantity !== undefined" :class="styles.quantity">{{ props.quantity }}</span>
  </div>
</template>
