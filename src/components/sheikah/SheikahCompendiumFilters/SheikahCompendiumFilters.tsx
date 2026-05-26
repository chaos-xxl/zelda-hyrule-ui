import React from 'react'
import classNames from 'classnames'
import styles from './sheikahCompendiumFilters.module.less'

export type CompendiumFilter = 'creatures' | 'materials' | 'enemies' | 'weapons' | 'treasure'

export interface SheikahCompendiumFiltersProps {
  /** 当前激活的过滤器 */
  activeFilter?: CompendiumFilter
  /** 选择回调 */
  onSelect?: (filter: CompendiumFilter) => void
  className?: string
  style?: React.CSSProperties
}

const FILTERS: { key: CompendiumFilter; label: string }[] = [
  { key: 'creatures', label: '🐾' },
  { key: 'enemies', label: '👹' },
  { key: 'materials', label: '🌿' },
  { key: 'weapons', label: '⚔' },
  { key: 'treasure', label: '💎' },
]

const SheikahCompendiumFilters: React.FC<SheikahCompendiumFiltersProps> = ({ activeFilter, onSelect, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    {FILTERS.map(({ key, label }) => (
      <button key={key} className={classNames(styles.filter, { [styles.active]: key === activeFilter })} onClick={() => onSelect?.(key)}>
        <span className={styles.icon}>{label}</span>
      </button>
    ))}
  </div>
)

SheikahCompendiumFilters.displayName = 'SheikahCompendiumFilters'
export default SheikahCompendiumFilters
