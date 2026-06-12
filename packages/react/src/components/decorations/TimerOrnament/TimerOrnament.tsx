import React from 'react'
import classNames from 'classnames'
import styles from './timerOrnament.module.less'
import timerOrnamentSvg from '@core/assets/svg/timer-ornament-right.svg'

export type TimerOrnamentSide = 'left' | 'right'

export interface TimerOrnamentProps {
  side?: TimerOrnamentSide
  className?: string
  style?: React.CSSProperties
}

/** 精确还原 Figma node 20:1370/20:1372 — 24×10px 计时器装饰 */
const TimerOrnament: React.FC<TimerOrnamentProps> = ({ side = 'right', className, style }) => (
  <div
    className={classNames(styles.container, className)}
    style={{ transform: side === 'left' ? 'scaleX(-1)' : undefined, ...style }}
  >
    <img src={timerOrnamentSvg} alt="" className={styles.icon} />
  </div>
)

TimerOrnament.displayName = 'TimerOrnament'
export default TimerOrnament
