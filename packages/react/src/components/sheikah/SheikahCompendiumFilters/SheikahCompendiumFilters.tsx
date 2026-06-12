import React from 'react'
import classNames from 'classnames'
import styles from './sheikahCompendiumFilters.module.less'
import creaturesSvg from '@core/assets/svg/compendium-creatures.svg'
import enemiesSvg from '@core/assets/svg/compendium-enemies.svg'
import materialsSvg from '@core/assets/svg/compendium-materials.svg'
import weaponsSvg from '@core/assets/svg/compendium-weapons.svg'
import treasureSvg from '@core/assets/svg/compendium-treasure.svg'

export type CompendiumFilter = 'creatures' | 'materials' | 'enemies' | 'weapons' | 'treasure'

export interface SheikahCompendiumFiltersProps {
  /** 当前激活的过滤器 */
  activeFilter?: CompendiumFilter
  /** 选择回调 */
  onSelect?: (filter: CompendiumFilter) => void
  className?: string
  style?: React.CSSProperties
}

const FILTERS: { key: CompendiumFilter; icon: string; label: string }[] = [
  { key: 'creatures', icon: creaturesSvg, label: 'Creatures' },
  { key: 'enemies', icon: enemiesSvg, label: 'Enemies' },
  { key: 'materials', icon: materialsSvg, label: 'Materials' },
  { key: 'weapons', icon: weaponsSvg, label: 'Weapons' },
  { key: 'treasure', icon: treasureSvg, label: 'Treasures' },
]

/**
 * 希卡图鉴分类过滤器 — 5 个分类（生物/敌人/材料/武器/宝物）。
 * 图标从 Figma node 260:27029 精确导出（自带希卡蓝辉光滤镜）。
 */
const SheikahCompendiumFilters: React.FC<SheikahCompendiumFiltersProps> = ({ activeFilter, onSelect, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    {FILTERS.map(({ key, icon, label }) => (
      <button
        key={key}
        className={classNames(styles.filter, { [styles.active]: key === activeFilter })}
        onClick={() => onSelect?.(key)}
        aria-label={label}
        aria-pressed={key === activeFilter}
      >
        <img src={icon} alt="" className={styles.icon} />
      </button>
    ))}
  </div>
)

SheikahCompendiumFilters.displayName = 'SheikahCompendiumFilters'
export default SheikahCompendiumFilters
