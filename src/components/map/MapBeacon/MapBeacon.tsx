import React from 'react'
import classNames from 'classnames'
import styles from './mapBeacon.module.less'

export type BeaconColor = 'red' | 'blue' | 'yellow' | 'green' | 'pink'

export interface MapBeaconProps {
  /** 信标颜色 */
  color: BeaconColor
  /** 是否有光柱 */
  flare?: boolean
  /** 尺寸（默认 30px） */
  size?: number
  className?: string
  style?: React.CSSProperties
}

const BEACON_HEX: Record<BeaconColor, string> = {
  red: '#FF4444',
  blue: '#44AAFF',
  yellow: '#FFDD44',
  green: '#44DD88',
  pink: '#FF88CC',
}

const MapBeacon: React.FC<MapBeaconProps> = ({ color, flare = false, size = 30, className, style }) => {
  const hex = BEACON_HEX[color]
  return (
    <div className={classNames(styles.container, { [styles.flare]: flare }, className)} style={{ width: size, height: flare ? size * 3 : size, ...style }}>
      {flare && <div className={styles.beam} style={{ background: `linear-gradient(to top, ${hex}, transparent)` }} />}
      <svg viewBox="0 0 30 30" fill="none" className={styles.pin}>
        <path d="M15 2L8 12L15 28L22 12L15 2Z" fill={hex} />
        <circle cx="15" cy="12" r="4" fill="white" fillOpacity="0.6" />
      </svg>
    </div>
  )
}

MapBeacon.displayName = 'MapBeacon'
export default MapBeacon
