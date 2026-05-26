import React from 'react'
import classNames from 'classnames'
import styles from './questListItem.module.less'

export type QuestItemType = 'main' | 'side' | 'shrine' | 'memory'
export type QuestItemState = 'default' | 'marked' | 'unmarked' | 'completed'

export interface QuestListItemProps {
  /** 任务标题 */
  title: string
  /** 任务地点 */
  location?: string
  /** 任务类型 */
  questType?: QuestItemType
  /** 任务状态 */
  state?: QuestItemState
  /** 是否悬停 */
  hovered?: boolean
  /** 点击回调 */
  onClick?: () => void
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const QuestListItem: React.FC<QuestListItemProps> = ({
  title,
  location,
  questType = 'main',
  state = 'default',
  hovered = false,
  onClick,
  className,
  style,
}) => {
  return (
    <div
      className={classNames(styles.container, styles[state], { [styles.hovered]: hovered }, className)}
      style={style}
      onClick={onClick}
    >
      <div className={styles.innerBorder} />
      <div className={classNames(styles.icon, styles[`icon_${questType}`])} />
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        {location && <span className={styles.location}>{location}</span>}
      </div>
      {state === 'marked' && <div className={styles.marker} />}
      {state === 'completed' && <span className={styles.checkmark}>✓</span>}
    </div>
  )
}

QuestListItem.displayName = 'QuestListItem'
export default QuestListItem
