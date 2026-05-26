import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './toast.module.less'

export interface ToastProps {
  /** 通知文字 */
  message: string
  /** 是否显示 */
  visible?: boolean
  /** 自动关闭时间（ms），0 表示不自动关闭 */
  duration?: number
  /** 关闭回调 */
  onClose?: () => void
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const Toast: React.FC<ToastProps> = ({ message, visible = true, duration = 3000, onClose, className, style }) => {
  const [show, setShow] = useState(visible)

  useEffect(() => { setShow(visible) }, [visible])

  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(() => { setShow(false); onClose?.() }, duration)
      return () => clearTimeout(timer)
    }
  }, [show, duration, onClose])

  if (!show) return null

  return (
    <div className={classNames(styles.container, className)} style={style}>
      <div className={styles.innerBorder} />
      <span className={styles.message}>{message}</span>
    </div>
  )
}

Toast.displayName = 'Toast'
export default Toast
