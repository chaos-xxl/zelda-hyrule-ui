import React from 'react'
import classNames from 'classnames'
import styles from './questScreen.module.less'

export interface QuestScreenProps {
  /** 自定义内容覆盖层 */
  children?: React.ReactNode
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/**
 * QuestScreen - 任务日志界面
 * 左侧任务列表，右侧任务描述详情
 */
const QuestScreen: React.FC<QuestScreenProps> = ({ children, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    {/* 顶部标题栏 */}
    <div className={styles.header}>
      <h1 className={styles.title}>Adventure Log</h1>
    </div>

    {/* 主内容区域 */}
    <div className={styles.body}>
      {/* 左侧任务列表 */}
      <div className={styles.questList}>
        <div className={styles.questTabs}>
          <span className={styles.tabActive}>Main Quests</span>
          <span className={styles.tab}>Side Quests</span>
          <span className={styles.tab}>Shrine Quests</span>
        </div>
        <div className={styles.listContent} />
      </div>

      {/* 右侧任务描述 */}
      <div className={styles.questDetail}>
        <div className={styles.detailTitle} />
        <div className={styles.detailDescription} />
        <div className={styles.detailObjective} />
      </div>
    </div>

    {children}
  </div>
)

QuestScreen.displayName = 'QuestScreen'
export default QuestScreen
