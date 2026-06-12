import React from 'react'
import classNames from 'classnames'
import styles from './titlePointOfInterest.module.less'

export type TitlePOIVariant = 'poi' | 'bossName' | 'poiWithHealth'

export interface TitlePointOfInterestProps {
  /** 标题文字 */
  title: string
  /** 副标题 */
  subtitle?: string
  /** 变体 */
  variant?: TitlePOIVariant
  /** 血量百分比（0-100），仅 poiWithHealth 变体使用 */
  healthPercent?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const TitlePointOfInterest: React.FC<TitlePointOfInterestProps> = ({
  title,
  subtitle,
  variant = 'poi',
  healthPercent = 100,
  className,
  style,
}) => {
  const cls = classNames(styles.container, styles[variant], className)

  return (
    <div className={cls} style={style}>
      <span className={styles.title}>{title}</span>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      {variant === 'poiWithHealth' && (
        <div className={styles.healthBar}>
          <div
            className={styles.healthFill}
            style={{ width: `${Math.max(0, Math.min(100, healthPercent))}%` }}
          />
        </div>
      )}
    </div>
  )
}

TitlePointOfInterest.displayName = 'TitlePointOfInterest'
export default TitlePointOfInterest
