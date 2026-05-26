import React from 'react'
import classNames from 'classnames'
import styles from './rupeeType.module.less'

export type RupeeVariant = 'green' | 'blue' | 'red' | 'purple' | 'silver' | 'gold'

export interface RupeeTypeProps {
  /** 卢比类型 */
  type: RupeeVariant
  /** 尺寸（默认 25×46px 比例） */
  size?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/** 卢比颜色映射 — 从 Figma 精确提取 */
const RUPEE_COLORS: Record<RupeeVariant, { light: string; dark: string }> = {
  green: { light: '#4CAF50', dark: '#173515' },
  blue: { light: '#42A5F5', dark: '#0D2B5C' },
  red: { light: '#EF5350', dark: '#5C1414' },
  purple: { light: '#AB47BC', dark: '#3A0C5C' },
  silver: { light: '#BDBDBD', dark: '#424242' },
  gold: { light: '#FFD54F', dark: '#5C4A14' },
}

const RupeeType: React.FC<RupeeTypeProps> = ({ type, size = 46, className, style }) => {
  const { light, dark } = RUPEE_COLORS[type]
  const width = size * (25 / 46)
  const id = `rupee-type-${type}`

  return (
    <div className={classNames(styles.container, className)} style={{ width, height: size, ...style }}>
      <svg width={width} height={size} viewBox="0 0 25 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 上右 */}
        <path d="M12.5 0L25 16L12.5 24L12.5 0Z" fill={`url(#${id}-1)`} />
        {/* 上左 */}
        <path d="M12.5 0L0 16L12.5 24L12.5 0Z" fill={`url(#${id}-2)`} />
        {/* 下右 */}
        <path d="M12.5 46L25 30L12.5 22L12.5 46Z" fill={`url(#${id}-3)`} />
        {/* 下左 */}
        <path d="M12.5 46L0 30L12.5 22L12.5 46Z" fill={`url(#${id}-4)`} />
        {/* 中间高光 */}
        <path d="M0 16L12.5 24L25 16L25 30L12.5 22L0 30Z" fill={light} opacity="0.6" />
        <defs>
          <linearGradient id={`${id}-1`} x1="18" y1="0" x2="18" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor={light} />
            <stop offset="1" stopColor={dark} />
          </linearGradient>
          <linearGradient id={`${id}-2`} x1="6" y1="0" x2="6" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor={dark} />
            <stop offset="1" stopColor={light} stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id={`${id}-3`} x1="18" y1="22" x2="18" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor={dark} />
            <stop offset="1" stopColor={light} stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id={`${id}-4`} x1="6" y1="22" x2="6" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor={light} stopOpacity="0.7" />
            <stop offset="1" stopColor={dark} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

RupeeType.displayName = 'RupeeType'
export default RupeeType
