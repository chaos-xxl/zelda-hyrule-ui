import React from 'react'
import classNames from 'classnames'
import styles from './questDescription.module.less'

export interface QuestDescriptionProps {
  /** 任务标题 */
  title: string
  /** 任务描述（支持 ReactNode 以便高亮关键词） */
  description: React.ReactNode
  /** 任务地点 */
  location?: string
  /** NPC 名字 */
  npc?: string
  /** 完成进度文字 */
  cleared?: string
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const QuestDescription: React.FC<QuestDescriptionProps> = ({
  title,
  description,
  location,
  npc,
  cleared,
  className,
  style,
}) => (
  <div className={classNames(styles.container, className)} style={style}>
    <div className={styles.innerBorder} />
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.dividerLine} />
      {(npc || location) && (
        <div className={styles.meta}>
          {npc && <span className={styles.npc}>{npc}</span>}
          {location && <span className={styles.location}>{location}</span>}
        </div>
      )}
      <div className={styles.description}>{description}</div>
      {cleared && <div className={styles.cleared}>{cleared}</div>}
    </div>
  </div>
)

QuestDescription.displayName = 'QuestDescription'
export default QuestDescription
