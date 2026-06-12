<script lang="ts">
export interface ModalProps {
  /** 是否显示 */
  open: boolean
  /** 标题（复杂内容用 #title slot） */
  title?: string
  /** 宽度 */
  width?: number | string
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 传 null/false 隐藏底部按钮区；自定义内容用 #footer slot */
  footer?: null | false
}

/** 弹窗内可聚焦元素选择器（用于 focus trap，与 React 版同源） */
const FOCUSABLE = [
  'a[href]', 'button:not([disabled])', 'textarea:not([disabled])',
  'input:not([disabled])', 'select:not([disabled])', '[tabindex]:not([tabindex="-1"])',
].join(',')
</script>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, useId, watch } from 'vue'
import styles from '@react/components/Modal/modal.module.less'

const props = withDefaults(defineProps<ModalProps>(), {
  title: undefined,
  width: 480,
  maskClosable: true,
  footer: undefined,
})

const emit = defineEmits<{
  /** 关闭（遮罩 / Escape / Cancel / ✕） */
  close: []
  /** 确认（默认底部的 Confirm） */
  ok: []
}>()

const slots = defineSlots<{
  default?: () => unknown
  /** 标题区（覆盖 title prop） */
  title?: () => unknown
  /** 底部按钮区（覆盖默认 Cancel/Confirm） */
  footer?: () => unknown
}>()

const titleId = useId()
const dialogRef = ref<HTMLDivElement | null>(null)
// 记录打开前的焦点元素，关闭时还原
let prevFocus: HTMLElement | null = null
// 锁定 body 滚动：记住原值，关闭时还原（而非粗暴清空，避免覆盖用户设置）
let prevOverflow = ''

const hasTitle = computed(() => Boolean(props.title) || Boolean(slots.title))
const showFooter = computed(() => props.footer !== null && props.footer !== false)
const widthStyle = computed(() =>
  typeof props.width === 'number' ? `${props.width}px` : props.width
)

// SSR 安全：服务端无 document 时禁用 Teleport，原地渲染（与 React 版行为一致）
const isBrowser = typeof document !== 'undefined'

const onDocKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
}

watch(
  () => props.open,
  (open) => {
    if (!isBrowser) return
    if (open) {
      prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', onDocKeyDown)
      // 焦点管理：打开时把焦点移进对话框
      prevFocus = document.activeElement as HTMLElement | null
      nextTick(() => {
        const dialog = dialogRef.value
        const first = dialog?.querySelector<HTMLElement>(FOCUSABLE)
        ;(first ?? dialog)?.focus()
      })
    } else {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onDocKeyDown)
      prevFocus?.focus?.()
      prevFocus = null
    }
  }
)

onBeforeUnmount(() => {
  if (!isBrowser || !props.open) return
  document.body.style.overflow = prevOverflow
  document.removeEventListener('keydown', onDocKeyDown)
})

// focus trap：在弹窗内循环 Tab 焦点，防止 Tab 到背后被遮挡的元素
const handleTrapKeyDown = (e: KeyboardEvent) => {
  if (e.key !== 'Tab') return
  const dialog = dialogRef.value
  if (!dialog) return
  const items = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE))
  if (items.length === 0) {
    e.preventDefault()
    return
  }
  const firstItem = items[0]
  const lastItem = items[items.length - 1]
  const active = document.activeElement
  if (e.shiftKey && active === firstItem) {
    e.preventDefault()
    lastItem.focus()
  } else if (!e.shiftKey && active === lastItem) {
    e.preventDefault()
    firstItem.focus()
  }
}

const handleMaskClick = () => {
  if (props.maskClosable) emit('close')
}
</script>

<template>
  <Teleport to="body" :disabled="!isBrowser">
    <div v-if="props.open" :class="styles.overlay" role="presentation" @click="handleMaskClick">
      <div
        ref="dialogRef"
        :class="styles.modal"
        :style="{ width: widthStyle }"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="hasTitle ? titleId : undefined"
        tabindex="-1"
        @click.stop
        @keydown="handleTrapKeyDown"
      >
        <div v-if="hasTitle" :class="styles.header">
          <h3 :id="titleId" :class="styles.title">
            <slot name="title">{{ props.title }}</slot>
          </h3>
          <button :class="styles.closeBtn" aria-label="Close" @click="emit('close')">✕</button>
        </div>
        <div :class="styles.body"><slot /></div>
        <div v-if="showFooter" :class="styles.footer">
          <slot name="footer">
            <button :class="styles.cancelBtn" @click="emit('close')">Cancel</button>
            <button :class="styles.confirmBtn" @click="emit('ok')">Confirm</button>
          </slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>
