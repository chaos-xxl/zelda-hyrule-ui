import React from 'react'
import classNames from 'classnames'
import styles from './timerOrnament.module.less'

export type TimerOrnamentSide = 'left' | 'right'

export interface TimerOrnamentProps {
  /** 装饰方向 */
  side?: TimerOrnamentSide
  /** 宽度 */
  width?: number
  /** 高度 */
  height?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const TimerOrnament: React.FC<TimerOrnamentProps> = ({
  side = 'left',
  width = 60,
  height = 20,
  className,
  style,
}) => {
  const cls = classNames(styles.ornament, styles[side], className)

  return (
    <div className={cls} style={{ width, height, ...style }}>
      <svg
        className={styles.svg}
        viewBox="0 0 60 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Decorative line with flourish */}
        <path
          d="M0 10H40C42 10 44 8 46 6C48 4 50 3 52 3H56C58 3 59 4 59 5V15C59 16 58 17 56 17H52C50 17 48 16 46 14C44 12 42 10 40 10"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity={0.6}
          fill="none"
        />
        {/* Center diamond */}
        <path
          d="M54 10L56 7L58 10L56 13L54 10Z"
          fill="currentColor"
          fillOpacity={0.5}
        />
        {/* Start dot */}
        <circle cx="2" cy="10" r="1.5" fill="currentColor" fillOpacity={0.8} />
      </svg>
    </div>
  )
}

TimerOrnament.displayName = 'TimerOrnament'
export default TimerOrnament
