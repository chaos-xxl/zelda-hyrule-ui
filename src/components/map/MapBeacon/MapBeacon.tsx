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
      {/* 信标针：圆角方框 + 折角书签纹样，从 Figma node 151:3884 精确导出（可着色） */}
      <svg aria-hidden="true" viewBox="0 0 60 60" fill="none" className={styles.pin} style={{ filter: `drop-shadow(0 0 5px ${hex})` }}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.7143 15H19.2857C17.6143 16.6714 16.6714 17.6143 15 19.2857V40.7143C16.6714 42.3857 17.6143 43.3286 19.2857 45H40.7143C42.3857 43.3286 43.3286 42.3857 45 40.7143V19.2857C43.3286 17.6143 42.3857 16.6714 40.7143 15ZM23.3143 39.9429H21L19.7143 38.6571V21.3429L21 20.0571H31.7571V23.3571H25.5429C24.6857 24.2143 24.1714 24.7286 23.3143 25.5857V39.9429V39.9429ZM28.1571 27.8143H31.8857V31.5429H28.1571V27.8143ZM39.8143 38.6571L38.5286 39.9429H28.2V36.6429H34.4571C35.3143 35.7857 35.8286 35.2714 36.6857 34.4143V20.0571H38.5286L39.8143 21.3429V38.6571Z"
          fill={hex}
        />
      </svg>
    </div>
  )
}

MapBeacon.displayName = 'MapBeacon'
export default MapBeacon
