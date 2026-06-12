<script lang="ts">
export interface StaminaWheelProps {
  /** 当前精力值 (0-1) */
  value: number
  /** 轮盘尺寸（默认 90px，和 Figma 一致） */
  size?: number
  /** 是否为奖励精力 */
  bonus?: boolean
}

/** 从 Figma 导出的精确精力轮路径（环形，与 React 版同源） */
const STAMINA_RING_PATH = "M60.75 30.375C60.75 47.1506 47.1506 60.75 30.375 60.75C13.5994 60.75 0 47.1506 0 30.375C0 13.5994 13.5994 0 30.375 0C47.1506 0 60.75 13.5994 60.75 30.375ZM19.7438 30.375C19.7438 36.2465 24.5035 41.0062 30.375 41.0062C36.2465 41.0062 41.0062 36.2465 41.0062 30.375C41.0062 24.5035 36.2465 19.7438 30.375 19.7438C24.5035 19.7438 19.7438 24.5035 19.7438 30.375Z"
</script>

<script setup lang="ts">
import { computed } from 'vue'
import styles from '@react/components/StaminaWheel/staminaWheel.module.less'

const props = withDefaults(defineProps<StaminaWheelProps>(), {
  size: 90,
  bonus: false,
})

const depleted = computed(() => props.value <= 0.2 && !props.bonus)
const angle = computed(() => Math.max(0, Math.min(1, props.value)) * 360)
const innerSize = computed(() => props.size * 0.675)

const fillColor = computed(() =>
  props.bonus ? '#FFE465' : depleted.value ? '#F15050' : '#13FF59'
)
const glowColor = computed(() =>
  props.bonus
    ? 'rgba(255, 228, 96, 0.6)'
    : depleted.value
      ? 'rgba(241, 80, 80, 0.6)'
      : 'rgba(19, 255, 89, 0.6)'
)

const maskStyle = computed(() => ({
  width: `${innerSize.value}px`,
  height: `${innerSize.value}px`,
  'mask-image': `conic-gradient(from -90deg, black ${angle.value}deg, transparent ${angle.value}deg)`,
  '-webkit-mask-image': `conic-gradient(from -90deg, black ${angle.value}deg, transparent ${angle.value}deg)`,
}))
</script>

<template>
  <div
    :class="[styles.container, { [styles.bonus]: props.bonus, [styles.depleted]: depleted }]"
    :style="{ width: `${props.size}px`, height: `${props.size}px` }"
  >
    <!-- 轨道（黑色半透明环） -->
    <svg
      aria-hidden="true"
      :class="styles.track"
      viewBox="0 0 60.75 60.75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :style="{ width: `${innerSize}px`, height: `${innerSize}px` }"
    >
      <path :d="STAMINA_RING_PATH" fill="black" fill-opacity="0.6" />
    </svg>

    <!-- 填充环（用 conic-gradient mask 控制比例） -->
    <div :class="styles.wheelWrapper" :style="maskStyle">
      <svg
        aria-hidden="true"
        :class="styles.wheel"
        viewBox="0 0 60.75 60.75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :style="{ width: '100%', height: '100%', filter: `drop-shadow(0 0 4px ${glowColor})` }"
      >
        <path :d="STAMINA_RING_PATH" :fill="fillColor" />
      </svg>
    </div>
  </div>
</template>
