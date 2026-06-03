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

/**
 * 卢比宝石 — 几何从 Figma node 3:213 (Rupee Types) 精确重建：
 * 纵向六边形宝石的 7 个切面（尖顶/尖底 + 中央主面 + 上下左右切角），
 * 按原图打光分配明暗（左上最亮 → 右下最暗），营造 3D 切割感。
 * 保留 light/dark 双色渐变以支持 6 种颜色着色。
 */
const RupeeIcon: React.FC<{ color: RupeeVariant; id: string }> = ({ color, id }) => {
  const { light, dark } = RUPEE_COLORS[color]
  return (
    <svg width="100%" height="100%" viewBox="0 0 25 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 右侧切角（暗） */}
      <path d="M25 10.86L18.75 15.97V30.03L25 35.14V10.86Z" fill={`url(#${id}-d)`} />
      {/* 左侧切角（中） */}
      <path d="M0 10.86L6.25 15.97V30.03L0 35.14V10.86Z" fill={`url(#${id}-m)`} />
      {/* 右上切面（暗） */}
      <path d="M12.5 0L25 10.86L18.75 15.97L12.5 10.86V0Z" fill={`url(#${id}-d)`} />
      {/* 左上切面（亮，主高光） */}
      <path d="M12.5 0L0 10.86L6.25 15.97L12.5 10.86V0Z" fill={`url(#${id}-l)`} />
      {/* 右下切面（中） */}
      <path d="M12.5 46L25 35.14L18.75 30.03L12.5 35.14V46Z" fill={`url(#${id}-m)`} />
      {/* 左下切面（暗） */}
      <path d="M12.5 46L0 35.14L6.25 30.03L12.5 35.14V46Z" fill={`url(#${id}-d)`} />
      {/* 中央主面（亮） */}
      <path d="M12.5 10.86L18.75 15.97V30.03L12.5 35.14L6.25 30.03V15.97L12.5 10.86Z" fill={`url(#${id}-c)`} />
      <defs>
        <linearGradient id={`${id}-l`} x1="6" y1="0" x2="10" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor={light} />
          <stop offset="1" stopColor={light} stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id={`${id}-c`} x1="12.5" y1="10.86" x2="12.5" y2="35.14" gradientUnits="userSpaceOnUse">
          <stop stopColor={light} />
          <stop offset="1" stopColor={dark} />
        </linearGradient>
        <linearGradient id={`${id}-m`} x1="3" y1="10" x2="3" y2="35" gradientUnits="userSpaceOnUse">
          <stop stopColor={light} stopOpacity="0.6" />
          <stop offset="1" stopColor={dark} />
        </linearGradient>
        <linearGradient id={`${id}-d`} x1="21" y1="10" x2="21" y2="35" gradientUnits="userSpaceOnUse">
          <stop stopColor={dark} />
          <stop offset="1" stopColor={dark} />
        </linearGradient>
      </defs>
    </svg>
  )
}

const RupeeType: React.FC<RupeeTypeProps> = ({ type, size = 46, className, style }) => {
  const width = size * (25 / 46)
  const id = `rupee-type-${type}`

  return (
    <div className={classNames(styles.container, className)} style={{ width, height: size, ...style }}>
      <RupeeIcon color={type} id={id} />
    </div>
  )
}

RupeeType.displayName = 'RupeeType'
export default RupeeType
