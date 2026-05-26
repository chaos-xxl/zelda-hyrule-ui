import React from 'react'
import classNames from 'classnames'
import styles from './rupeeCounter.module.less'

export type RupeeColor = 'green' | 'blue' | 'red' | 'purple' | 'silver' | 'gold'

export interface RupeeCounterProps {
  /** 卢比数量 */
  amount: number
  /** 卢比颜色（影响图标渐变） */
  color?: RupeeColor
  /** 是否显示数字标签 */
  showLabel?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/** 卢比颜色对应的渐变 */
const RUPEE_GRADIENTS: Record<RupeeColor, [string, string]> = {
  green: ['#0F2810', '#173515'],
  blue: ['#0C1A3A', '#142D5C'],
  red: ['#3A0C0C', '#5C1414'],
  purple: ['#2A0C3A', '#4A145C'],
  silver: ['#2A2A2A', '#4A4A4A'],
  gold: ['#3A2A0C', '#5C4A14'],
}

/** 从 Figma 精确导出的卢比 SVG path (viewBox 0 0 12.5 15.97) */
const RUPEE_PATH = 'M0 10.8611V0L12.5 10.8611L6.25 15.9722L0 10.8611Z'

const RupeeIcon: React.FC<{ color: RupeeColor; id: string }> = ({ color, id }) => {
  const [stop1, stop2] = RUPEE_GRADIENTS[color]
  return (
    <svg width="25" height="46" viewBox="0 0 25 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 上半部分 */}
      <g transform="translate(0, 0)">
        <path d={RUPEE_PATH} fill={`url(#${id}-grad)`} />
      </g>
      {/* 下半部分（翻转） */}
      <g transform="translate(0, 30) scale(1, -1)">
        <path d={RUPEE_PATH} fill={`url(#${id}-grad)`} />
      </g>
      {/* 左侧镜像 */}
      <g transform="translate(25, 0) scale(-1, 1)">
        <path d={RUPEE_PATH} fill={`url(#${id}-grad2)`} />
      </g>
      <g transform="translate(25, 30) scale(-1, -1)">
        <path d={RUPEE_PATH} fill={`url(#${id}-grad2)`} />
      </g>
      {/* 中间高光 */}
      <rect x="6" y="11" width="13" height="24" rx="1" fill={stop2} opacity="0.4" />
      <defs>
        <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="10" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor={stop1} />
          <stop offset="1" stopColor={stop2} />
        </linearGradient>
        <linearGradient id={`${id}-grad2`} x1="0" y1="0" x2="10" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor={stop2} />
          <stop offset="1" stopColor={stop1} />
        </linearGradient>
      </defs>
    </svg>
  )
}

const RupeeCounter: React.FC<RupeeCounterProps> = ({
  amount,
  color = 'green',
  showLabel = true,
  className,
  style,
}) => {
  const formattedAmount = amount.toLocaleString()

  return (
    <div className={classNames(styles.container, className)} style={style}>
      <RupeeIcon color={color} id={`rupee-${color}`} />
      {showLabel && <span className={styles.amount}>{formattedAmount}</span>}
    </div>
  )
}

RupeeCounter.displayName = 'RupeeCounter'
export default RupeeCounter
