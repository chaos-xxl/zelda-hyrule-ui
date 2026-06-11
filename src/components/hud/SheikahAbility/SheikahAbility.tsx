import React from 'react'
import classNames from 'classnames'
import styles from './sheikahAbility.module.less'
import roundBombPlusSvg from '../../../assets/svg/ability-round-bomb-plus.svg'
import roundBombSvg from '../../../assets/svg/ability-round-bomb.svg'
import cubeBombSvg from '../../../assets/svg/ability-cube-bomb.svg'
import cameraSvg from '../../../assets/svg/ability-camera.svg'
import stasisSvg from '../../../assets/svg/ability-stasis.svg'
import cryonisSvg from '../../../assets/svg/ability-cryonis.svg'
import magnesisSvg from '../../../assets/svg/ability-magnesis.svg'

export type AbilityType = 'roundBomb' | 'cubeBomb' | 'magnesis' | 'stasis' | 'cryonis' | 'camera' | 'masterCycle'

export interface SheikahAbilityProps {
  ability: AbilityType
  recharging?: boolean
  plus?: boolean
  size?: number
  className?: string
  style?: React.CSSProperties
}

/** 从 Figma 精确导出的能力图标 SVG */
const ABILITY_SVGS: Record<AbilityType, string> = {
  roundBomb: roundBombSvg,
  cubeBomb: cubeBombSvg,
  magnesis: magnesisSvg,
  stasis: stasisSvg,
  cryonis: cryonisSvg,
  camera: cameraSvg,
  masterCycle: roundBombSvg, // 注：Master Cycle Zero（DLC 摩托）无专属图标，暂回退 roundBomb
}

const ABILITY_PLUS_SVGS: Record<AbilityType, string> = {
  roundBomb: roundBombPlusSvg,
  cubeBomb: roundBombPlusSvg,
  magnesis: magnesisSvg,
  stasis: stasisSvg,
  cryonis: cryonisSvg,
  camera: cameraSvg,
  masterCycle: roundBombPlusSvg, // 同上，无专属图标
}

const SheikahAbility: React.FC<SheikahAbilityProps> = ({
  ability, recharging = false, plus = false, size = 70, className, style,
}) => (
  <div
    className={classNames(styles.container, { [styles.recharging]: recharging }, className)}
    style={{ width: size, height: size, ...style }}
  >
    <img
      src={plus ? ABILITY_PLUS_SVGS[ability] : ABILITY_SVGS[ability]}
      alt=""
      className={styles.icon}
    />
    {plus && <span className={styles.plusBadge}>+</span>}
    {recharging && <div className={styles.rechargeOverlay} />}
  </div>
)

SheikahAbility.displayName = 'SheikahAbility'
export default SheikahAbility
