import React from 'react'
import classNames from 'classnames'
import styles from './questTypeIcon.module.less'

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

const QuestTypeIcon: React.FC<QuestTypeIconProps> = ({ type, size = 77, className, style }) => {
  const { glow, fill } = ICON_COLORS[type]

  return (
    <div
      className={classNames(styles.container, className)}
      style={{ width: size, height: size, boxShadow: `0 0 23px ${glow}, 0 0 18px black`, ...style }}
    >
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
        {type === 'main' && (
          <path d="M20 4L8 12V28L20 36L32 28V12L20 4ZM20 8L28 13V27L20 32L12 27V13L20 8Z" fill={fill} />
        )}
        {type === 'side' && (
          <path d="M20 2C10 2 2 10 2 20C2 30 10 38 20 38C30 38 38 30 38 20C38 10 30 2 20 2ZM20 6C27.7 6 34 12.3 34 20C34 27.7 27.7 34 20 34C12.3 34 6 27.7 6 20C6 12.3 12.3 6 20 6ZM18 12V22L26 27L28 24L22 20V12H18Z" fill={fill} />
        )}
        {type === 'shrine' && (
          <path d="M20 2L4 20L20 38L36 20L20 2ZM20 8L30 20L20 32L10 20L20 8ZM20 14L14 20L20 26L26 20L20 14Z" fill={fill} />
        )}
        {type === 'memory' && (
          <path d="M20 4C11.2 4 4 11.2 4 20C4 28.8 11.2 36 20 36C28.8 36 36 28.8 36 20C36 11.2 28.8 4 20 4ZM20 8C26.6 8 32 13.4 32 20C32 26.6 26.6 32 20 32C13.4 32 8 26.6 8 20C8 13.4 13.4 8 20 8ZM16 14V26L28 20L16 14Z" fill={fill} />
        )}
      </svg>
    </div>
  )
}

QuestTypeIcon.displayName = 'QuestTypeIcon'
export default QuestTypeIcon
