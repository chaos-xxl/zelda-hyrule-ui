import React from 'react'
import classNames from 'classnames'
import styles from './sheikahAbility.module.less'
import roundBombPlusSvg from '../../../assets/svg/ability-round-bomb-plus.svg'
import roundBombSvg from '../../../assets/svg/ability-round-bomb.svg'
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
  cubeBomb: roundBombPlusSvg, // cube bomb 用 plus 版本的 SVG
  magnesis: magnesisSvg,
  stasis: stasisSvg,
  cryonis: cryonisSvg,
  camera: cryonisSvg, // camera 暂用 cryonis 替代
  masterCycle: roundBombPlusSvg, // masterCycle 暂用 bomb plus 替代
}

const ABILITY_PLUS_SVGS: Record<AbilityType, string> = {
  roundBomb: roundBombPlusSvg,
  cubeBomb: roundBombPlusSvg,
  magnesis: magnesisSvg,
  stasis: stasisSvg,
  cryonis: cryonisSvg,
  camera: cryonisSvg,
  masterCycle: roundBombPlusSvg,
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
