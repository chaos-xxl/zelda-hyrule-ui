import React from 'react'
import classNames from 'classnames'
import styles from './mapQuestMarker.module.less'

export interface MapQuestMarkerProps {
  /** 是否脉冲动画 */
  pulse?: boolean
  /** 尺寸（默认 75px） */
  size?: number
  className?: string
  style?: React.CSSProperties
}

const MapQuestMarker: React.FC<MapQuestMarkerProps> = ({ pulse = false, size = 75, className, style }) => (
  <div className={classNames(styles.container, { [styles.pulse]: pulse }, className)} style={{ width: size, height: size, ...style }}>
    <svg viewBox="0 0 40 40" fill="none" className={styles.icon}>
      <path d="M20 4L8 12V28L20 36L32 28V12L20 4Z" fill="none" stroke="#FCC413" strokeWidth="2.5" />
      <circle cx="20" cy="20" r="5" fill="#FCC413" />
    </svg>
  </div>
)

MapQuestMarker.displayName = 'MapQuestMarker'
export default MapQuestMarker
