<script lang="ts">
export type ButtonVariant = 'primary' | 'sheikah' | 'ghost' | 'danger'
export type ButtonSize = 'small' | 'middle' | 'large'

export interface ButtonProps {
  /** 按钮变体 */
  variant?: ButtonVariant
  /** 按钮尺寸 */
  size?: ButtonSize
  /** HTML button type */
  htmlType?: 'submit' | 'reset' | 'button'
  /** 是否占满宽度 */
  block?: boolean
  /** 加载状态 */
  loading?: boolean
  /** 禁用 */
  disabled?: boolean
}
</script>

<script setup lang="ts">
import styles from '@react/components/Button/button.module.less'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'middle',
  htmlType: 'button',
  block: false,
  loading: false,
  disabled: false,
})

defineSlots<{
  /** 按钮内容 */
  default?: () => unknown
  /** 图标（对应 React 版的 icon prop） */
  icon?: () => unknown
}>()
</script>

<template>
  <button
    :class="[
      styles.button,
      styles[props.variant],
      styles[props.size],
      {
        [styles.block]: props.block,
        [styles.loading]: props.loading,
        [styles.disabled]: props.disabled,
      },
    ]"
    :type="props.htmlType"
    :disabled="props.disabled || props.loading"
  >
    <span v-if="props.loading" :class="styles.spinner" />
    <span v-else-if="$slots.icon" :class="styles.icon"><slot name="icon" /></span>
    <span v-if="$slots.default" :class="styles.content"><slot /></span>
  </button>
</template>
