import React from 'react'
import classNames from 'classnames'
import styles from './questNotification.module.less'
import markerSvg from '../../../assets/svg/map-quest-marker.svg'

export interface QuestNotificationProps {
  /** 是否显示标签文字 */
  showLabel?: boolean
  /** NPC/任务名 */
  label?: string
  className?: string
  style?: React.CSSProperties
}

/**
 * 任务通知指示器 — 同心圆环靶标（与 MapQuestMarker 共用 Figma node 151:4900 导出的 SVG，
 * 即任务列表项右侧那个发光黄点），取代原先手画的感叹号圆。
 */
const QuestNotification: React.FC<QuestNotificationProps> = ({ showLabel = false, label, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    <div className={styles.icon}>
      <img src={markerSvg} alt="" className={styles.iconSvg} />
    </div>
    {showLabel && label && <span className={styles.label}>{label}</span>}
  </div>
)

QuestNotification.displayName = 'QuestNotification'
export default QuestNotification

