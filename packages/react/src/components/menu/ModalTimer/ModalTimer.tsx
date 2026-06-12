import React from 'react'
import classNames from 'classnames'
import styles from './modalTimer.module.less'

export interface ModalTimerProps {
  /** 时间文字（如 "2:30"） */
  time: string
  /** 是否红色（紧急） */
  red?: boolean
  className?: string
  style?: React.CSSProperties
}

const ModalTimer: React.FC<ModalTimerProps> = ({ time, red = false, className, style }) => (
  <div className={classNames(styles.container, { [styles.red]: red }, className)} style={style}>
    <div className={styles.innerBorder} />
    <span className={styles.time}>{time}</span>
  </div>
)

ModalTimer.displayName = 'ModalTimer'
export default ModalTimer
