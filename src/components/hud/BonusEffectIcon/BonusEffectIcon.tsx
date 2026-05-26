import React from 'react'
import classNames from 'classnames'
import styles from './bonusEffectIcon.module.less'

export type EffectType = 'attackUp' | 'defenseUp' | 'speedUp' | 'heatResist' | 'coldResist' | 'electricResist' | 'quietUp' | 'fireResist' | 'durabilityUp' | 'criticalHit' | 'longThrow' | 'climbSpeedUp' | 'swimSpeedUp' | 'bonusHeart' | 'staminaUp'

export interface BonusEffectIconProps {
  /** 效果类型 */
  icon: EffectType
  /** 是否显示箭头 */
  arrow?: boolean
  /** 尺寸（默认 50px） */
  size?: number
  className?: string
  style?: React.CSSProperties
}

/** 简化的效果图标 — 用不同形状/颜色区分 */
const EFFECT_SYMBOLS: Record<EffectType, { symbol: string; color: string }> = {
  attackUp: { symbol: '⚔', color: '#FF6B4A' },
  defenseUp: { symbol: '🛡', color: '#4FC0FF' },
  speedUp: { symbol: '⚡', color: '#7CFF4E' },
  heatResist: { symbol: '🔥', color: '#FF6B4A' },
  coldResist: { symbol: '❄', color: '#4FC0FF' },
  electricResist: { symbol: '⚡', color: '#FFE460' },
  quietUp: { symbol: '🔇', color: '#9DECFD' },
  fireResist: { symbol: '🔥', color: '#FF6B4A' },
  durabilityUp: { symbol: '🔧', color: '#7CFF4E' },
  criticalHit: { symbol: '✦', color: '#FFE460' },
  longThrow: { symbol: '→', color: '#9DECFD' },
  climbSpeedUp: { symbol: '↑', color: '#7CFF4E' },
  swimSpeedUp: { symbol: '~', color: '#4FC0FF' },
  bonusHeart: { symbol: '♥', color: '#FFE465' },
  staminaUp: { symbol: '◎', color: '#7CFF4E' },
}

const BonusEffectIcon: React.FC<BonusEffectIconProps> = ({ icon, arrow = false, size = 50, className, style }) => {
  const { symbol, color } = EFFECT_SYMBOLS[icon]
  return (
    <div className={classNames(styles.container, className)} style={{ width: size, height: size, ...style }}>
      <span className={styles.symbol} style={{ color }}>{symbol}</span>
      {arrow && <span className={styles.arrow} style={{ color }}>▲</span>}
    </div>
  )
}

BonusEffectIcon.displayName = 'BonusEffectIcon'
export default BonusEffectIcon
