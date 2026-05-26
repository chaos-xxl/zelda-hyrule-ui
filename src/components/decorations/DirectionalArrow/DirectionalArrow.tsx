import React from 'react'
import classNames from 'classnames'
import styles from './directionalArrow.module.less'

export type ArrowDirection = 'up' | 'down' | 'left' | 'right'
export type ArrowVariant = 'outline' | 'solid' | 'triangle' | 'large'

export interface DirectionalArrowProps {
  /** 方向 */
  direction?: ArrowDirection
  /** 变体 */
  variant?: ArrowVariant
  /** 尺寸 */
  size?: number
  className?: string
  style?: React.CSSProperties
}

const ROTATION: Record<ArrowDirection, number> = { up: 0, right: 90, down: 180, left: 270 }

const DirectionalArrow: React.FC<DirectionalArrowProps> = ({ direction = 'up', variant = 'outline', size = 18, className, style }) => (
  <div
    className={classNames(styles.container, className)}
    style={{ width: size, height: size, transform: `rotate(${ROTATION[direction]}deg)`, ...style }}
  >
    <svg viewBox="0 0 10 18" fill="none" className={styles.arrow}>
      {variant === 'outline' && <path d="M5 1L1 7H9L5 1Z" stroke="#E2DED3" strokeWidth="1.5" fill="none" />}
      {variant === 'solid' && <path d="M5 1L1 7H9L5 1Z" fill="#E2DED3" />}
      {variant === 'triangle' && <path d="M5 0L10 18H0L5 0Z" fill="#E2DED3" />}
      {variant === 'large' && <path d="M5 0L0 10H10L5 0Z" fill="#E2DED3" />}
    </svg>
  </div>
)

DirectionalArrow.displayName = 'DirectionalArrow'
export default DirectionalArrow
