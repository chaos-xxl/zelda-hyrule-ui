import React from 'react'
import classNames from 'classnames'
import styles from './bonusEffectIcon.module.less'

export type EffectType = 'attackUp' | 'defenseUp' | 'speedUp' | 'heatResist' | 'coldResist' | 'electricResist' | 'quietUp' | 'fireResist' | 'durabilityUp' | 'criticalHit' | 'longThrow' | 'climbSpeedUp' | 'swimSpeedUp' | 'bonusHeart' | 'staminaUp'

export interface BonusEffectIconProps {
  icon: EffectType
  arrow?: boolean
  size?: number
  className?: string
  style?: React.CSSProperties
}

/** 从 Figma 精确导出的 Attack Up SVG path (viewBox 0 0 38 38) */
const ATTACK_UP_PATH = 'M37.6577 10.7938L18.2909 28.9313L14.4762 25.0869L23.8172 15.6732L24.5019 13.6031L22.4479 14.2931L13.1068 23.7069L9.29215 19.8625L27.2896 0.345006L38 0L37.6577 10.7938ZM18.6821 32.3813L5.57529 19.1725C4.89061 18.4825 3.81467 18.4825 3.12999 19.1725L2.15187 20.1582C1.46718 20.8483 1.46718 21.9326 2.15187 22.6226L6.79794 27.3048L0.586873 33.5642C-0.195624 34.3528 -0.195624 35.6835 0.586873 36.4721L1.51609 37.4086C2.29858 38.1971 3.61905 38.1971 4.40154 37.4086L10.5637 31.1984L15.2098 35.8807C15.8945 36.5707 16.9704 36.5707 17.6551 35.8807L18.6332 34.8949C19.3668 34.1556 19.3668 33.0713 18.6821 32.3813Z'

/** 简化的图标 path（用于尚未从 Figma 导出的效果类型） */
const GENERIC_PATHS: Record<EffectType, { path: string; viewBox: string }> = {
  attackUp: { path: ATTACK_UP_PATH, viewBox: '0 0 38 38' },
  defenseUp: { path: 'M19 2L4 10V22L19 36L34 22V10L19 2ZM19 6L30 12V20L19 30L8 20V12L19 6Z', viewBox: '0 0 38 38' },
  speedUp: { path: 'M4 19L14 4L19 14L34 4L24 19L19 9L4 19ZM4 34L14 19L19 29L34 19L24 34L19 24L4 34Z', viewBox: '0 0 38 38' },
  heatResist: { path: 'M19 2C19 2 8 14 8 22C8 28 13 34 19 34C25 34 30 28 30 22C30 14 19 2 19 2ZM19 30C15 30 12 26 12 22C12 17 17 9 19 6C21 9 26 17 26 22C26 26 23 30 19 30Z', viewBox: '0 0 38 38' },
  coldResist: { path: 'M19 0L21 7L28 4L23 10L30 12L23 14L28 20L21 17L19 24L17 17L10 20L15 14L8 12L15 10L10 4L17 7L19 0ZM19 28L21 32L24 30L22 33L26 34L22 35L24 38L21 36L19 38L17 36L14 38L16 35L12 34L16 33L14 30L17 32L19 28Z', viewBox: '0 0 38 38' },
  electricResist: { path: 'M22 2L10 20H18L14 36L28 16H20L22 2Z', viewBox: '0 0 38 38' },
  quietUp: { path: 'M6 14V24H12L22 32V6L12 14H6ZM26 10V28M30 14V24', viewBox: '0 0 38 38' },
  fireResist: { path: 'M19 2C19 2 8 14 8 22C8 28 13 34 19 34C25 34 30 28 30 22C30 14 19 2 19 2Z', viewBox: '0 0 38 38' },
  durabilityUp: { path: 'M10 4L6 8V30L10 34H28L32 30V8L28 4H10ZM12 8H26V12H12V8ZM12 16H26V20H12V16Z', viewBox: '0 0 38 38' },
  criticalHit: { path: 'M19 2L22 14L34 14L24 22L28 34L19 26L10 34L14 22L4 14L16 14L19 2Z', viewBox: '0 0 38 38' },
  longThrow: { path: 'M4 19H28M28 19L20 12M28 19L20 26M32 12V26', viewBox: '0 0 38 38' },
  climbSpeedUp: { path: 'M19 34V10M19 10L12 17M19 10L26 17M8 4H30', viewBox: '0 0 38 38' },
  swimSpeedUp: { path: 'M4 14C8 10 12 14 16 10C20 6 24 10 28 6C32 2 36 6 36 6M4 22C8 18 12 22 16 18C20 14 24 18 28 14C32 10 36 14 36 14M4 30C8 26 12 30 16 26C20 22 24 26 28 22C32 18 36 22 36 22', viewBox: '0 0 38 38' },
  bonusHeart: { path: 'M19 32L4 18C0 14 0 8 4 4C8 0 14 0 18 4L19 5L20 4C24 0 30 0 34 4C38 8 38 14 34 18L19 32Z', viewBox: '0 0 38 38' },
  staminaUp: { path: 'M19 2C10 2 2 10 2 19C2 28 10 36 19 36C28 36 36 28 36 19C36 10 28 2 19 2ZM19 8C24.5 8 29 12.5 29 19C29 25.5 24.5 30 19 30C13.5 30 9 25.5 9 19C9 12.5 13.5 8 19 8Z', viewBox: '0 0 38 38' },
}

const BonusEffectIcon: React.FC<BonusEffectIconProps> = ({ icon, arrow = false, size = 50, className, style }) => {
  const { path, viewBox } = GENERIC_PATHS[icon]
  return (
    <div className={classNames(styles.container, className)} style={{ width: size, height: size, ...style }}>
      <svg viewBox={viewBox} fill="none" className={styles.icon}>
        <path d={path} fill="white" />
      </svg>
      {arrow && (
        <svg viewBox="0 0 10 8" fill="none" className={styles.arrow}>
          <path d="M5 0L10 8H0L5 0Z" fill="white" />
        </svg>
      )}
    </div>
  )
}

BonusEffectIcon.displayName = 'BonusEffectIcon'
export default BonusEffectIcon
