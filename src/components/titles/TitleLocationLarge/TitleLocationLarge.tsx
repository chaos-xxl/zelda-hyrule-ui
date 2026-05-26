import React from 'react'
import classNames from 'classnames'
import styles from './titleLocationLarge.module.less'

export interface TitleLocationLargeProps {
  /** 地点名称 */
  name: string
  className?: string
  style?: React.CSSProperties
}

const TitleLocationLarge: React.FC<TitleLocationLargeProps> = ({ name, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    <h1 className={styles.name}>{name}</h1>
  </div>
)

TitleLocationLarge.displayName = 'TitleLocationLarge'
export default TitleLocationLarge
