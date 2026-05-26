import React from 'react'
import classNames from 'classnames'
import styles from './mapHeroLocation.module.less'

export interface MapHeroLocationProps {
  /** 是否显示视野锥 */
  vision?: boolean
  /** 朝向角度（度） */
  rotation?: number
  className?: string
  style?: React.CSSProperties
}

const MapHeroLocation: React.FC<MapHeroLocationProps> = ({ vision = false, rotation = 0, className, style }) => (
  <div className={classNames(styles.container, className)} style={{ transform: `rotate(${rotation}deg)`, ...style }}>
    <svg viewBox="0 0 18 25" fill="none" className={styles.arrow}>
      <path d="M9 0L0 25L9 20L18 25L9 0Z" fill="#3CD3FC" />
    </svg>
    {vision && <div className={styles.vision} />}
  </div>
)

MapHeroLocation.displayName = 'MapHeroLocation'
export default MapHeroLocation
