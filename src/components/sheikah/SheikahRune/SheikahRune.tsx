import React from 'react'
import classNames from 'classnames'
import styles from './sheikahRune.module.less'
import roundBombSvg from '../../../assets/svg/ability-round-bomb.svg'
import cubeBombSvg from '../../../assets/svg/ability-cube-bomb.svg'
import magnesisSvg from '../../../assets/svg/ability-magnesis.svg'
import stasisSvg from '../../../assets/svg/ability-stasis.svg'
import cryonisSvg from '../../../assets/svg/ability-cryonis.svg'
import cameraSvg from '../../../assets/svg/ability-camera.svg'

export type RuneType = 'roundBomb' | 'cubeBomb' | 'magnesis' | 'stasis' | 'cryonis' | 'camera'

export interface SheikahRuneProps {
  /** 当前激活的符文 */
  activeRune?: RuneType
  /** 符文列表 */
  runes?: RuneType[]
  /** 选择回调 */
  onSelect?: (rune: RuneType) => void
  className?: string
  style?: React.CSSProperties
}

const RUNE_ICONS: Record<RuneType, string> = {
  roundBomb: roundBombSvg,
  cubeBomb: cubeBombSvg,
  magnesis: magnesisSvg,
  stasis: stasisSvg,
  cryonis: cryonisSvg,
  camera: cameraSvg,
}

const RUNE_LABELS: Record<RuneType, string> = {
  roundBomb: 'Round Bomb',
  cubeBomb: 'Cube Bomb',
  magnesis: 'Magnesis',
  stasis: 'Stasis',
  cryonis: 'Cryonis',
  camera: 'Camera',
}

/**
 * 希卡符文选择器 — 6 种符文能力（圆形炸弹/方形炸弹/磁力/静止/制冰/相机）。
 * 图标均从 Figma node 139:4 (Rune 界面) 精确导出，保留游戏原色。
 */
const SheikahRune: React.FC<SheikahRuneProps> = ({
  activeRune = 'roundBomb',
  runes = ['roundBomb', 'cubeBomb', 'magnesis', 'stasis', 'cryonis', 'camera'],
  onSelect,
  className,
  style,
}) => (
  <div className={classNames(styles.container, className)} style={style}>
    {runes.map((rune) => (
      <button
        key={rune}
        className={classNames(styles.rune, { [styles.active]: rune === activeRune })}
        onClick={() => onSelect?.(rune)}
        aria-label={RUNE_LABELS[rune]}
        aria-pressed={rune === activeRune}
      >
        <img src={RUNE_ICONS[rune]} alt="" className={styles.icon} />
      </button>
    ))}
  </div>
)

SheikahRune.displayName = 'SheikahRune'
export default SheikahRune
