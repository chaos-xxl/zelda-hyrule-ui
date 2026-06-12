import React from 'react'
import classNames from 'classnames'
import styles from './rupeeCounter.module.less'
import RupeeType from '../RupeeType/RupeeType'

export type RupeeColor = 'green' | 'blue' | 'red' | 'purple' | 'silver' | 'gold'

export interface RupeeCounterProps {
  /** 卢比数量 */
  amount: number
  /** 卢比颜色（影响图标渐变） */
  color?: RupeeColor
  /** 是否显示数字标签 */
  showLabel?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/**
 * 卢比计数器 — 复用 RupeeType 的精确宝石几何（从 Figma node 3:213 重建），
 * 避免维护第二套卢比图标。
 */
const RupeeCounter: React.FC<RupeeCounterProps> = ({
  amount,
  color = 'green',
  showLabel = true,
  className,
  style,
}) => {
  const formattedAmount = amount.toLocaleString()

  return (
    <div className={classNames(styles.container, className)} style={style}>
      <RupeeType type={color} size={40} />
      {showLabel && <span className={styles.amount}>{formattedAmount}</span>}
    </div>
  )
}

RupeeCounter.displayName = 'RupeeCounter'
export default RupeeCounter
