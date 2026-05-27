import React from 'react'
import classNames from 'classnames'
import styles from './questListItem.module.less'

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

/** 从 Figma 精确导出的主线任务图标（三角力量/海利亚鸟翼） */
const MAIN_QUEST_ICON = (color: string) => (
  <svg viewBox="0 0 77 45.2" fill="none" style={{ width: '100%', height: '100%' }}>
    <path d="M38.512 0L32.5925 8.943H44.3963L38.512 0" fill={color} />
    <path d="M26.7084 17.8509L32.5926 8.943L38.5122 17.8509H26.7084Z" fill={color} />
    <path d="M38.5122 17.8509H50.3513L44.3965 8.943L38.5122 17.8509Z" fill={color} />
    <path d="M0 2.765L2.89 11.445L23.02 14.47V16.603L4.933 18.587L8.521 25.58L23.52 19.976L24.467 21.811L13.006 30.44L17.939 33.912L26.31 24.638L27.606 25.878L23.52 35.549L28.453 36.541L30.197 27.713C31.749 27.923 34.028 27.713 33.967 25.58C33.937 24.541 33.45 23.267 31.648 22.713C23.875 20.326 25.463 10.651 27.905 6.634C24.986 8.943 24.779 10.109 23.968 11.197C22.635 10.843 0 2.765 0 2.765Z" fill={color} />
    <path d="M77 2.765L74.11 11.445L53.978 14.47V16.603L72.067 18.587L68.479 25.58L53.48 19.976L52.533 21.811L63.994 30.44L59.061 33.912L50.69 24.638L49.394 25.878L53.48 35.549L48.547 36.541L46.803 27.713C45.251 27.923 42.972 27.713 43.033 25.58C43.063 24.541 43.55 23.267 45.352 22.713C53.125 20.326 51.537 10.651 49.095 6.634C52.014 8.943 52.221 10.109 53.032 11.197C54.365 10.843 77 2.765 77 2.765Z" fill={color} />
    <path d="M38.512 20.604C38.459 21.656 37.049 24.251 36.679 24.638C36.382 24.948 35.974 25.58 35.146 27.713C34.318 29.845 34.66 29.946 32.944 31.195C40.002 34.425 35.974 37.702 35.974 38.456C36.858 40.68 38.512 45.171 38.512 45.171C38.512 45.171 40.164 40.68 41.047 38.456C41.047 37.702 37.02 34.425 44.078 31.195C42.362 29.946 42.704 29.845 41.876 27.713C41.048 25.58 40.64 24.948 40.343 24.638C39.973 24.251 38.565 21.656 38.512 20.604Z" fill={color} />
  </svg>
)

/** 支线任务图标（对话气泡） */
const SIDE_QUEST_ICON = (color: string) => (
  <svg viewBox="0 0 40 40" fill="none" style={{ width: '60%', height: '60%' }}>
    <path d="M20 4C11.2 4 4 10 4 17.5C4 21.5 6 25 9 27.5L7 34L14 30.5C16 31.5 18 32 20 32C28.8 32 36 26 36 18.5C36 11 28.8 4 20 4Z" fill={color} />
    <circle cx="13" cy="18" r="2.5" fill="black" opacity="0.4" />
    <circle cx="20" cy="18" r="2.5" fill="black" opacity="0.4" />
    <circle cx="27" cy="18" r="2.5" fill="black" opacity="0.4" />
  </svg>
)

/** 神庙任务图标（菱形） */
const SHRINE_QUEST_ICON = (color: string) => (
  <svg viewBox="0 0 40 40" fill="none" style={{ width: '60%', height: '60%' }}>
    <path d="M20 4L4 20L20 36L36 20L20 4ZM20 10L30 20L20 30L10 20L20 10Z" fill={color} />
    <path d="M20 14L14 20L20 26L26 20L20 14Z" fill={color} opacity="0.5" />
  </svg>
)

/** 回忆任务图标（胶片格） */
const MEMORY_QUEST_ICON = (color: string) => (
  <svg viewBox="0 0 40 40" fill="none" style={{ width: '60%', height: '60%' }}>
    <rect x="6" y="8" width="28" height="24" rx="2" fill={color} />
    <rect x="8" y="6" width="4" height="4" rx="1" fill={color} />
    <rect x="14" y="6" width="4" height="4" rx="1" fill={color} />
    <rect x="20" y="6" width="4" height="4" rx="1" fill={color} />
    <rect x="26" y="6" width="4" height="4" rx="1" fill={color} />
    <rect x="8" y="30" width="4" height="4" rx="1" fill={color} />
    <rect x="14" y="30" width="4" height="4" rx="1" fill={color} />
    <rect x="20" y="30" width="4" height="4" rx="1" fill={color} />
    <rect x="26" y="30" width="4" height="4" rx="1" fill={color} />
    <rect x="10" y="12" width="20" height="16" rx="1" fill="black" opacity="0.3" />
  </svg>
)

/** 右侧标记：marked = 金色圆环，unmarked = 小灰点 */
const MarkedIndicator: React.FC = () => (
  <svg width="50" height="50" viewBox="0 0 47 47" fill="none" className={styles.marker}>
    <path fillRule="evenodd" clipRule="evenodd" d="M23.5294 32.3529C28.4025 32.3529 32.3529 28.4025 32.3529 23.5294C32.3529 18.6563 28.4025 14.7059 23.5294 14.7059C18.6563 14.7059 14.7059 18.6563 14.7059 23.5294C14.7059 28.4025 18.6563 32.3529 23.5294 32.3529ZM23.5294 28.8235C20.6056 28.8235 18.2353 26.4533 18.2353 23.5294C18.2353 20.6056 20.6056 18.2353 23.5294 18.2353C26.4533 18.2353 28.8235 20.6056 28.8235 23.5294C28.8235 26.4533 26.4533 28.8235 23.5294 28.8235ZM23.5295 26.4706C25.1538 26.4706 26.4706 25.1538 26.4706 23.5294C26.4706 21.9051 25.1538 20.5882 23.5295 20.5882C21.9051 20.5882 20.5883 21.9051 20.5883 23.5294C20.5883 25.1538 21.9051 26.4706 23.5295 26.4706Z" fill="#FFF381" />
  </svg>
)

const QUEST_ICONS: Record<QuestItemType, (color: string) => React.ReactNode> = {
  main: MAIN_QUEST_ICON,
  side: SIDE_QUEST_ICON,
  shrine: SHRINE_QUEST_ICON,
  memory: MEMORY_QUEST_ICON,
}

const QuestListItem: React.FC<QuestListItemProps> = ({
  title, location, questType = 'main', state = 'default', hovered = false, onClick, className, style,
}) => {
  const isCompleted = state === 'completed'
  const iconColor = isCompleted ? 'rgba(226,222,211,0.3)' : '#E2DED3'

  return (
    <div
      className={classNames(styles.container, styles[state], { [styles.hovered]: hovered }, className)}
      style={style}
      onClick={onClick}
    >
      <div className={styles.innerBorder} />
      {/* 左侧图标 */}
      <div className={styles.icon}>
        {QUEST_ICONS[questType](iconColor)}
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
