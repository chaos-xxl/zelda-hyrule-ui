import React from 'react'
import classNames from 'classnames'
import styles from './sheikahRune.module.less'

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

const RUNE_LABELS: Record<RuneType, string> = {
  roundBomb: '●', cubeBomb: '■', magnesis: '⊕', stasis: '◇', cryonis: '⬡', camera: '📷',
}

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
      >
        <span className={styles.icon}>{RUNE_LABELS[rune]}</span>
      </button>
    ))}
  </div>
)

SheikahRune.displayName = 'SheikahRune'
export default SheikahRune
