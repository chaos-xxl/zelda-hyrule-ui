import React from 'react'
import classNames from 'classnames'
import styles from './statsStack.module.less'

export type StatsType = 'weapon' | 'armor' | 'shield' | 'healing'

export interface StatsStackProps {
  /** 属性类型 */
  type: StatsType
  /** 主数值 */
  value: number
  /** 对比数值（可选） */
  comparison?: number
  /** 特性文字（可选） */
  trait?: string
  className?: string
  style?: React.CSSProperties
}

const TYPE_LABELS: Record<StatsType, string> = { weapon: 'Attack', armor: 'Defense', shield: 'Guard', healing: 'Restore' }

const StatsStack: React.FC<StatsStackProps> = ({ type, value, comparison, trait, className, style }) => {
  const diff = comparison !== undefined ? comparison - value : undefined
  return (
    <div className={classNames(styles.container, className)} style={style}>
      <span className={styles.label}>{TYPE_LABELS[type]}</span>
      <span className={styles.value}>{value}</span>
      {diff !== undefined && (
        <span className={classNames(styles.diff, { [styles.positive]: diff > 0, [styles.negative]: diff < 0 })}>
          {diff > 0 ? `+${diff}` : diff}
        </span>
      )}
      {trait && <span className={styles.trait}>{trait}</span>}
    </div>
  )
}

StatsStack.displayName = 'StatsStack'
export default StatsStack
