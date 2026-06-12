import React from 'react'
import classNames from 'classnames'
import styles from './effectDuration.module.less'

export interface EffectDurationProps {
  /** 效果名称 */
  name: string
  /** 剩余时间（格式 "MM:SS"） */
  timeRemaining: string
  /** 效果图标（ReactNode） */
  icon?: React.ReactNode
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const EffectDuration: React.FC<EffectDurationProps> = ({ name, timeRemaining, icon, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    {icon && <span className={styles.icon}>{icon}</span>}
    <span className={styles.name}>{name}</span>
    <span className={styles.time}>{timeRemaining}</span>
  </div>
)

EffectDuration.displayName = 'EffectDuration'
export default EffectDuration
