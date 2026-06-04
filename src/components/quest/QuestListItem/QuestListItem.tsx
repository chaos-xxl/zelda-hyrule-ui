import React from 'react'
import classNames from 'classnames'
import styles from './questListItem.module.less'
import { QuestIcon } from '../questIcons'
import { interactiveProps } from '../../../utils/a11y'

export type QuestItemType = 'main' | 'side' | 'shrine' | 'memory'
export type QuestItemState = 'default' | 'marked' | 'unmarked' | 'completed'

export interface QuestListItemProps {
  title: string
  location?: string
  questType?: QuestItemType
  state?: QuestItemState
  hovered?: boolean
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

/** 右侧标记：marked = 金色圆环，unmarked = 小灰点 */
const MarkedIndicator: React.FC = () => (
  <svg aria-hidden="true" width="50" height="50" viewBox="0 0 47 47" fill="none" className={styles.marker}>
    <path fillRule="evenodd" clipRule="evenodd" d="M23.5294 32.3529C28.4025 32.3529 32.3529 28.4025 32.3529 23.5294C32.3529 18.6563 28.4025 14.7059 23.5294 14.7059C18.6563 14.7059 14.7059 18.6563 14.7059 23.5294C14.7059 28.4025 18.6563 32.3529 23.5294 32.3529ZM23.5294 28.8235C20.6056 28.8235 18.2353 26.4533 18.2353 23.5294C18.2353 20.6056 20.6056 18.2353 23.5294 18.2353C26.4533 18.2353 28.8235 20.6056 28.8235 23.5294C28.8235 26.4533 26.4533 28.8235 23.5294 28.8235ZM23.5295 26.4706C25.1538 26.4706 26.4706 25.1538 26.4706 23.5294C26.4706 21.9051 25.1538 20.5882 23.5295 20.5882C21.9051 20.5882 20.5883 21.9051 20.5883 23.5294C20.5883 25.1538 21.9051 26.4706 23.5295 26.4706Z" fill="#FFF381" />
  </svg>
)

const QuestListItem: React.FC<QuestListItemProps> = ({
  title, location, questType = 'main', state = 'default', hovered = false, onClick, className, style,
}) => {
  const isCompleted = state === 'completed'
  const iconColor = isCompleted ? 'rgba(226,222,211,0.3)' : '#E2DED3'

  return (
    <div
      className={classNames(styles.container, styles[state], { [styles.hovered]: hovered }, className)}
      style={style}
      {...interactiveProps(onClick)}
    >
      <div className={styles.innerBorder} />
      {/* 左侧图标（与 QuestTypeIcon 共用 questIcons，Figma 精确导出） */}
      <div className={styles.icon}>
        <QuestIcon type={questType} color={iconColor} widthPct={questType === 'main' ? 100 : undefined} />
      </div>
      {/* 文字内容 */}
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        {location && <span className={styles.location}>{location}</span>}
      </div>
      {/* 右侧标记 */}
      {state === 'marked' && <MarkedIndicator />}
      {state === 'unmarked' && <span className={styles.dot} />}
    </div>
  )
}

QuestListItem.displayName = 'QuestListItem'
export default QuestListItem
