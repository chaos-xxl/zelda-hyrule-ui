import React from 'react'
import classNames from 'classnames'
import styles from './mapLocationName.module.less'

export type LocationNameSize = 'small' | 'medium' | 'large'

export interface MapLocationNameProps {
  /** 地名 */
  name: string
  /** 尺寸 */
  size?: LocationNameSize
  className?: string
  style?: React.CSSProperties
}

const MapLocationName: React.FC<MapLocationNameProps> = ({ name, size = 'medium', className, style }) => (
  <div className={classNames(styles.container, styles[size], className)} style={style}>
    <span className={styles.name}>{name}</span>
  </div>
)

MapLocationName.displayName = 'MapLocationName'
export default MapLocationName
