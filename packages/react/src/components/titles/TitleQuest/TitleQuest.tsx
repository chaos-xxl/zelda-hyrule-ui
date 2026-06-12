import React from 'react'
import classNames from 'classnames'
import styles from './titleQuest.module.less'

export type QuestType = 'main' | 'side' | 'shrine'

export interface TitleQuestProps {
  /** 任务名称 */
  name: string
  /** 任务类型 */
  questType?: QuestType
  /** 是否已完成 */
  complete?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const QUEST_LABELS: Record<QuestType, string> = {
  main: 'Main Quest',
  side: 'Side Quest',
  shrine: 'Shrine Quest',
}

const QUEST_GLOW_COLORS: Record<QuestType, string> = {
  main: '#FFEA2E',
  side: '#54C0FD',
  shrine: '#54C0FD',
}

const TitleQuest: React.FC<TitleQuestProps> = ({
  name,
  questType = 'main',
  complete = false,
  className,
  style,
}) => {
  const glowColor = QUEST_GLOW_COLORS[questType]

  return (
    <div className={classNames(styles.container, className)} style={style}>
      {/* Quest type subtitle */}
      <div className={styles.subtitle}>
        <div
          className={styles.questIcon}
          style={{ boxShadow: `0 0 23px ${glowColor}, 0 0 18px black` }}
        />
        <span className={styles.questLabel}>{QUEST_LABELS[questType]}</span>
      </div>

      {/* Quest name */}
      <div className={styles.nameWrapper}>
        <span className={classNames(styles.name, { [styles.complete]: complete })}>
          {name}
        </span>
      </div>

      {/* Complete badge */}
      {complete && <div className={styles.completeBadge}>COMPLETE</div>}
    </div>
  )
}

TitleQuest.displayName = 'TitleQuest'
export default TitleQuest
