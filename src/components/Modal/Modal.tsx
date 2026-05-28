import React, { useEffect } from 'react'
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
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  const handleMaskClick = () => {
    if (maskClosable && onClose) onClose()
  }

  const defaultFooter = (
    <>
      <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
      <button className={styles.confirmBtn} onClick={onOk}>Confirm</button>
    </>
  )

  return (
    <div className={styles.overlay} onClick={handleMaskClick} role="presentation">
      <div
        className={classNames(styles.modal, className)}
        style={{ width }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {title && (
          <div className={styles.header}>
            <h3 className={styles.title} id="modal-title">{title}</h3>
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
}

Modal.displayName = 'Modal'
export default Modal
