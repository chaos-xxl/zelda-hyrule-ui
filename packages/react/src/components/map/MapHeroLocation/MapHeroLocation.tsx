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
    {/* 英雄朝向箭头 — 从 Figma node 160:53985 精确导出（圆角风筝形 + 希卡黄 + 金色辉光） */}
    <svg aria-hidden="true" viewBox="0 0 10.9165 14.357" fill="none" className={styles.arrow}>
      <path d="M4.48887 0.681318C4.81591 -0.227107 6.10064 -0.227106 6.42767 0.681319L10.854 12.9766C11.1335 13.753 10.4324 14.5265 9.6323 14.3245L6.71956 13.5889C5.8917 13.3799 5.02485 13.3799 4.19698 13.5889L1.28425 14.3245C0.484172 14.5265 -0.216921 13.753 0.062587 12.9766L4.48887 0.681318Z" fill="#FFE460" />
    </svg>
    {vision && <div className={styles.vision} />}
  </div>
)

MapHeroLocation.displayName = 'MapHeroLocation'
export default MapHeroLocation
