import React from 'react'
import classNames from 'classnames'
import styles from './controllerButton.module.less'

export type ButtonType = 'A' | 'B' | 'X' | 'Y' | 'L' | 'R' | 'ZL' | 'ZR' | 'Plus' | 'Minus'

export interface ControllerButtonProps {
  /** 按钮类型 */
  button: ButtonType
  /** 标签文字 */
  label?: string
  /** 尺寸（默认 40px） */
  size?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const BUTTON_LABELS: Record<ButtonType, string> = {
  A: 'A', B: 'B', X: 'X', Y: 'Y',
  L: 'L', R: 'R', ZL: 'ZL', ZR: 'ZR',
  Plus: '+', Minus: '−',
}

const ControllerButton: React.FC<ControllerButtonProps> = ({
  button,
  label,
  size = 40,
  className,
  style,
}) => {
  return (
    <div className={classNames(styles.wrapper, className)} style={style}>
      <div className={styles.button} style={{ width: size, height: size }}>
        <span className={styles.letter}>{BUTTON_LABELS[button]}</span>
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  )
}

ControllerButton.displayName = 'ControllerButton'
export default ControllerButton
