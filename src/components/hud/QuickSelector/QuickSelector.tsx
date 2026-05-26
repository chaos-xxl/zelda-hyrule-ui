import React from 'react'
import classNames from 'classnames'
import styles from './quickSelector.module.less'

export type QuickSelectorSlot = 'weapon' | 'bow' | 'shield' | 'arrow'

export interface QuickSelectorItem {
  /** 槽位类型 */
  slot: QuickSelectorSlot
  /** 物品名称 */
  name: string
  /** 图标（React 节点） */
  icon?: React.ReactNode
  /** 是否选中 */
  active?: boolean
}

export interface QuickSelectorProps {
  /** 选择器物品列表 */
  items?: QuickSelectorItem[]
  /** 是否可见 */
  visible?: boolean
  /** 选中回调 */
  onSelect?: (slot: QuickSelectorSlot) => void
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const QuickSelector: React.FC<QuickSelectorProps> = ({
  items = [],
  visible = true,
  onSelect,
  className,
  style,
}) => {
  if (!visible) return null

  return (
    <div className={classNames(styles.wheel, className)} style={style}>
      {/* 中心圆环 */}
      <svg
        className={styles.ring}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeOpacity={0.3} strokeWidth="2" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeOpacity={0.2} strokeWidth="1" />
        {/* 十字分割线 */}
        <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeOpacity={0.15} strokeWidth="1" />
        <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeOpacity={0.15} strokeWidth="1" />
      </svg>
      {/* 四个槽位 */}
      {items.map((item) => (
        <button
          key={item.slot}
          className={classNames(styles.slot, styles[item.slot], {
            [styles.active]: item.active,
          })}
          onClick={() => onSelect?.(item.slot)}
          aria-label={item.name}
        >
          {item.icon && <span className={styles.slotIcon}>{item.icon}</span>}
          <span className={styles.slotName}>{item.name}</span>
        </button>
      ))}
    </div>
  )
}

QuickSelector.displayName = 'QuickSelector'
export default QuickSelector
