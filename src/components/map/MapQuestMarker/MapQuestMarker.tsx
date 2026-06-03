import React from 'react'
import classNames from 'classnames'
import styles from './mapQuestMarker.module.less'
import markerSvg from '../../../assets/svg/map-quest-marker.svg'

export interface MapQuestMarkerProps {
  /** 是否脉冲动画 */
  pulse?: boolean
  /** 尺寸（默认 75px） */
  size?: number
  className?: string
  style?: React.CSSProperties
}

/**
 * 地图任务标记 — 同心圆环靶标，从 Figma node 151:4900 精确导出（自带黄色辉光滤镜）。
 */
const MapQuestMarker: React.FC<MapQuestMarkerProps> = ({ pulse = false, size = 75, className, style }) => (
  <div className={classNames(styles.container, { [styles.pulse]: pulse }, className)} style={{ width: size, height: size, ...style }}>
    <img src={markerSvg} alt="" className={styles.icon} />
  </div>
)

MapQuestMarker.displayName = 'MapQuestMarker'
export default MapQuestMarker

