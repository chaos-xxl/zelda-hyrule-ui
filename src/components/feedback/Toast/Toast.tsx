import React, { useEffect, useRef, useState } from 'react'
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

  // 用 ref 收住 onClose：避免父组件每次渲染传入新的内联函数时，
  // 把自动关闭的 timer 反复清除重建，导致 Toast 永不消失。
  const onCloseRef = useRef(onClose)
  useEffect(() => { onCloseRef.current = onClose }, [onClose])

  useEffect(() => { setShow(visible) }, [visible])

  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(() => { setShow(false); onCloseRef.current?.() }, duration)
      return () => clearTimeout(timer)
    }
  }, [show, duration])

  if (!show) return null

  return (
    <div className={classNames(styles.container, className)} style={style} role="alert" aria-live="polite">
      <div className={styles.innerBorder} />
      <span className={styles.message}>{message}</span>
    </div>
  )
}

Toast.displayName = 'Toast'
export default Toast
