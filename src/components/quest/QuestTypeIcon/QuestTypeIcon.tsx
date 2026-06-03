import React from 'react'
import classNames from 'classnames'
import styles from './questTypeIcon.module.less'
import { QuestIcon } from '../questIcons'

export type QuestIconType = 'main' | 'side' | 'shrine' | 'memory'

export interface QuestTypeIconProps {
  /** 任务类型 */
  type: QuestIconType
  /** 尺寸（默认 77px） */
  size?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const ICON_COLORS: Record<QuestIconType, { glow: string; fill: string }> = {
  main: { glow: '#FFEA2E', fill: '#FFD700' },
  side: { glow: '#54C0FD', fill: '#3CD3FC' },
  shrine: { glow: '#54C0FD', fill: '#3CD3FC' },
  memory: { glow: '#FCC413', fill: '#FCC413' },
}

/**
 * 任务类型徽记 — 图标从 Figma 精确导出（与 QuestListItem 共用 questIcons）。
 */
const QuestTypeIcon: React.FC<QuestTypeIconProps> = ({ type, size = 77, className, style }) => {
  const { glow, fill } = ICON_COLORS[type]

  return (
    <div
      className={classNames(styles.container, className)}
      style={{ width: size, height: size, boxShadow: `0 0 23px ${glow}, 0 0 18px black`, ...style }}
    >
      <div className={styles.icon} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
        <QuestIcon type={type} color={fill} widthPct={type === 'main' ? 64 : undefined} />
      </div>
    </div>
  )
}

QuestTypeIcon.displayName = 'QuestTypeIcon'
export default QuestTypeIcon

