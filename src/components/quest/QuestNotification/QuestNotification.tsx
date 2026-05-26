import React from 'react'
import classNames from 'classnames'
import styles from './questNotification.module.less'

export interface QuestNotificationProps {
  /** 是否显示标签文字 */
  showLabel?: boolean
  /** NPC/任务名 */
  label?: string
  className?: string
  style?: React.CSSProperties
}

const QuestNotification: React.FC<QuestNotificationProps> = ({ showLabel = false, label, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    <div className={styles.icon}>
      <svg viewBox="0 0 26 26" fill="none" className={styles.iconSvg}>
        <circle cx="13" cy="13" r="12" fill="#FCC413" opacity="0.8" />
        <path d="M12 7H14V15H12V7ZM12 17H14V19H12V17Z" fill="black" />
      </svg>
    </div>
    {showLabel && label && <span className={styles.label}>{label}</span>}
  </div>
)

QuestNotification.displayName = 'QuestNotification'
export default QuestNotification
