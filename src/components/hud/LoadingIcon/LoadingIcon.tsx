import React from 'react'
import classNames from 'classnames'
import styles from './loadingIcon.module.less'

export type LoadingIconType = 'shrine' | 'orb' | 'rupee' | 'korok' | 'stamina'

export interface LoadingIconProps {
  /** 图标类型 */
  icon: LoadingIconType
  /** 是否显示数量 */
  showQuantity?: boolean
  /** 数量 */
  quantity?: number
  /** 尺寸（默认 40px） */
  size?: number
  className?: string
  style?: React.CSSProperties
}

const ICON_SYMBOLS: Record<LoadingIconType, { symbol: string; color: string }> = {
  shrine: { symbol: '◇', color: '#3CD3FC' },
  orb: { symbol: '●', color: '#FCC413' },
  rupee: { symbol: '◆', color: '#4CAF50' },
  korok: { symbol: '🌱', color: '#7CFF4E' },
  stamina: { symbol: '◎', color: '#13FF59' },
}

const LoadingIcon: React.FC<LoadingIconProps> = ({ icon, showQuantity = false, quantity, size = 40, className, style }) => {
  const { symbol, color } = ICON_SYMBOLS[icon]
  return (
    <div className={classNames(styles.container, className)} style={{ width: size, height: size, ...style }}>
      <span className={styles.icon} style={{ color }}>{symbol}</span>
      {showQuantity && quantity !== undefined && <span className={styles.quantity}>{quantity}</span>}
    </div>
  )
}

LoadingIcon.displayName = 'LoadingIcon'
export default LoadingIcon
