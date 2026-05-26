import React from 'react'
import classNames from 'classnames'
import styles from './sheikahAbility.module.less'

export type AbilityType = 'roundBomb' | 'cubeBomb' | 'magnesis' | 'stasis' | 'cryonis' | 'camera' | 'masterCycle'

export interface SheikahAbilityProps {
  /** 能力类型 */
  ability: AbilityType
  /** 是否充能中 */
  recharging?: boolean
  /** 是否显示 Plus 图标 */
  plus?: boolean
  /** 尺寸（默认 70px） */
  size?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/** 能力图标的简化 SVG 表示 */
const ABILITY_ICONS: Record<AbilityType, React.ReactNode> = {
  roundBomb: (
    <circle cx="35" cy="35" r="18" fill="none" stroke="#3CD3FC" strokeWidth="3" />
  ),
  cubeBomb: (
    <rect x="17" y="17" width="36" height="36" fill="none" stroke="#3CD3FC" strokeWidth="3" />
  ),
  magnesis: (
    <path d="M35 15 L35 55 M25 20 L35 15 L45 20 M25 50 L35 55 L45 50" fill="none" stroke="#F15050" strokeWidth="3" strokeLinecap="round" />
  ),
  stasis: (
    <path d="M35 15 L50 35 L35 55 L20 35 Z" fill="none" stroke="#FFE460" strokeWidth="3" />
  ),
  cryonis: (
    <path d="M35 12 L55 28 L55 48 L35 58 L15 48 L15 28 Z" fill="none" stroke="#3CD3FC" strokeWidth="2.5" />
  ),
  camera: (
    <g>
      <rect x="20" y="25" width="30" height="22" rx="3" fill="none" stroke="#3CD3FC" strokeWidth="2.5" />
      <circle cx="35" cy="36" r="7" fill="none" stroke="#3CD3FC" strokeWidth="2" />
    </g>
  ),
  masterCycle: (
    <circle cx="35" cy="35" r="20" fill="none" stroke="#3CD3FC" strokeWidth="2.5" strokeDasharray="8 4" />
  ),
}

const SheikahAbility: React.FC<SheikahAbilityProps> = ({
  ability,
  recharging = false,
  plus = false,
  size = 70,
  className,
  style,
}) => {
  return (
    <div
      className={classNames(styles.container, { [styles.recharging]: recharging }, className)}
      style={{ width: size, height: size, ...style }}
    >
      <svg
        className={styles.icon}
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {ABILITY_ICONS[ability]}
      </svg>
      {plus && <span className={styles.plusBadge}>+</span>}
      {recharging && <div className={styles.rechargeOverlay} />}
    </div>
  )
}

SheikahAbility.displayName = 'SheikahAbility'
export default SheikahAbility
