import React from 'react'
import classNames from 'classnames'
import styles from './bonusEffectIcon.module.less'
import attackUpSvg from '../../../assets/svg/effect-attack-up.svg'
import defenseUpSvg from '../../../assets/svg/effect-defense-up.svg'
import speedUpSvg from '../../../assets/svg/effect-speed-up.svg'
import heatResistSvg from '../../../assets/svg/effect-heat-resist.svg'
import coldResistSvg from '../../../assets/svg/effect-cold-resist.svg'
import electricResistSvg from '../../../assets/svg/effect-electric-resist.svg'
import quietUpSvg from '../../../assets/svg/effect-quiet-up.svg'
import fireResistSvg from '../../../assets/svg/effect-fire-resist.svg'
import durabilityUpSvg from '../../../assets/svg/effect-durability-up.svg'
import longThrowSvg from '../../../assets/svg/effect-long-throw.svg'
import climbSpeedUpSvg from '../../../assets/svg/effect-climb-speed-up.svg'
import swimSpeedUpSvg from '../../../assets/svg/effect-swim-speed-up.svg'
import bonusHeartSvg from '../../../assets/svg/effect-bonus-heart.svg'
import staminaUpSvg from '../../../assets/svg/effect-stamina-up.svg'

export type EffectType = 'attackUp' | 'defenseUp' | 'speedUp' | 'heatResist' | 'coldResist' | 'electricResist' | 'quietUp' | 'fireResist' | 'durabilityUp' | 'criticalHit' | 'longThrow' | 'climbSpeedUp' | 'swimSpeedUp' | 'bonusHeart' | 'staminaUp'

export interface BonusEffectIconProps {
  icon: EffectType
  arrow?: boolean
  size?: number
  className?: string
  style?: React.CSSProperties
}

/**
 * 增益效果图标 — 全部从 Figma node 6:305 (Bonus Effect - Icons) 精确导出，保留游戏原色。
 * criticalHit 复用 attackUp 图标（游戏内同为剑形）。
 */
const EFFECT_ICONS: Record<EffectType, string> = {
  attackUp: attackUpSvg,
  criticalHit: attackUpSvg,
  defenseUp: defenseUpSvg,
  speedUp: speedUpSvg,
  heatResist: heatResistSvg,
  coldResist: coldResistSvg,
  electricResist: electricResistSvg,
  quietUp: quietUpSvg,
  fireResist: fireResistSvg,
  durabilityUp: durabilityUpSvg,
  longThrow: longThrowSvg,
  climbSpeedUp: climbSpeedUpSvg,
  swimSpeedUp: swimSpeedUpSvg,
  bonusHeart: bonusHeartSvg,
  staminaUp: staminaUpSvg,
}

const BonusEffectIcon: React.FC<BonusEffectIconProps> = ({ icon, arrow = false, size = 50, className, style }) => {
  return (
    <div className={classNames(styles.container, className)} style={{ width: size, height: size, ...style }}>
      <img src={EFFECT_ICONS[icon]} alt="" className={styles.icon} />
      {arrow && (
        <svg aria-hidden="true" viewBox="0 0 10 8" fill="none" className={styles.arrow}>
          <path d="M5 0L10 8H0L5 0Z" fill="white" />
        </svg>
      )}
    </div>
  )
}

BonusEffectIcon.displayName = 'BonusEffectIcon'
export default BonusEffectIcon
