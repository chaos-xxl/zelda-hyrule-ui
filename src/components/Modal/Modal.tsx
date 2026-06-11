import React, { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import styles from './modal.module.less'

export interface ModalProps {
  /** 是否显示 */
  open: boolean
  /** 标题 */
  title?: React.ReactNode
  /** 宽度 */
  width?: number | string
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 底部按钮区 */
  footer?: React.ReactNode | null
  /** 关闭回调 */
  onClose?: () => void
  /** 确认回调 */
  onOk?: () => void
  children?: React.ReactNode
  className?: string
}

/** 弹窗内可聚焦元素选择器（用于 focus trap） */
const FOCUSABLE = [
  'a[href]', 'button:not([disabled])', 'textarea:not([disabled])',
  'input:not([disabled])', 'select:not([disabled])', '[tabindex]:not([tabindex="-1"])',
].join(',')

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  width = 480,
  maskClosable = true,
  footer,
  onClose,
  onOk,
  children,
  className,
}) => {
  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  // 记录打开前的焦点元素，关闭时还原
  const prevFocusRef = useRef<HTMLElement | null>(null)

  // 锁定 body 滚动：记住原值，关闭时还原（而非粗暴清空，避免覆盖用户设置）
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prevOverflow }
  }, [open])

  // Escape 关闭
  useEffect(() => {
    if (!open || !onClose) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  // 焦点管理：打开时把焦点移进对话框，关闭时还原到原来的元素
  useEffect(() => {
    if (!open) return
    prevFocusRef.current = document.activeElement as HTMLElement | null
    // 聚焦弹窗内第一个可聚焦元素，没有则聚焦对话框本身
    const dialog = dialogRef.current
    const first = dialog?.querySelector<HTMLElement>(FOCUSABLE)
    ;(first ?? dialog)?.focus()
    return () => { prevFocusRef.current?.focus?.() }
  }, [open])

  if (!open) return null

  // focus trap：在弹窗内循环 Tab 焦点，防止 Tab 到背后被遮挡的元素
  const handleTrapKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab') return
    const dialog = dialogRef.current
    if (!dialog) return
    const items = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE))
    if (items.length === 0) { e.preventDefault(); return }
    const firstItem = items[0]
    const lastItem = items[items.length - 1]
    const active = document.activeElement
    if (e.shiftKey && active === firstItem) {
      e.preventDefault(); lastItem.focus()
    } else if (!e.shiftKey && active === lastItem) {
      e.preventDefault(); firstItem.focus()
    }
  }

  const handleMaskClick = () => {
    if (maskClosable && onClose) onClose()
  }

  const defaultFooter = (
    <>
      <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
      <button className={styles.confirmBtn} onClick={onOk}>Confirm</button>
    </>
  )

  const modal = (
    <div className={styles.overlay} onClick={handleMaskClick} role="presentation">
      <div
        ref={dialogRef}
        className={classNames(styles.modal, className)}
        style={{ width }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleTrapKeyDown}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        tabIndex={-1}
      >
        {title && (
          <div className={styles.header}>
            <h3 className={styles.title} id={titleId}>{title}</h3>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
          </div>
        )}
        <div className={styles.body}>{children}</div>
        {footer !== null && (
          <div className={styles.footer}>
            {footer === undefined ? defaultFooter : footer}
          </div>
        )}
      </div>
    </div>
  )

  // Portal 到 body，脱离父级 overflow/transform/层叠上下文的裁切。
  // SSR 安全：服务端无 document 时直接原地返回（仅客户端 hydrate 后才 portal）。
  if (typeof document === 'undefined') return modal
  return createPortal(modal, document.body)
}

Modal.displayName = 'Modal'
export default Modal
