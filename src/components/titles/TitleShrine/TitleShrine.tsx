import React from 'react'
import classNames from 'classnames'
import styles from './titleShrine.module.less'

export interface TitleShrineProps {
  /** 神庙名称 */
  name: string
  /** 副标题 */
  subtitle?: string
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const TitleShrine: React.FC<TitleShrineProps> = ({ name, subtitle, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    <h2 className={styles.name}>{name}</h2>
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
  </div>
)

TitleShrine.displayName = 'TitleShrine'
export default TitleShrine
