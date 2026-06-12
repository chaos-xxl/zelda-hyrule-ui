import React from 'react'
import classNames from 'classnames'
import styles from './modalButton.module.less'

export interface ModalButtonProps {
  /** 是否选中 */
  selected?: boolean
  /** 按钮文字 */
  children: React.ReactNode
  /** 点击回调 */
  onClick?: () => void
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const ModalButton: React.FC<ModalButtonProps> = ({
  selected = false,
  children,
  onClick,
  className,
  style,
}) => (
  <button
    className={classNames(styles.button, { [styles.selected]: selected }, className)}
    style={style}
    onClick={onClick}
  >
    <span className={styles.innerBorder} />
    <span className={styles.label}>{children}</span>
  </button>
)

ModalButton.displayName = 'ModalButton'
export default ModalButton
