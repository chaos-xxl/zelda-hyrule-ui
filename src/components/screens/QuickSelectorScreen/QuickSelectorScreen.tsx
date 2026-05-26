import React from 'react'
import classNames from 'classnames'
import styles from './quickSelectorScreen.module.less'

export interface QuickSelectorScreenProps {
  /** 自定义内容覆盖层 */
  children?: React.ReactNode
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/**
 * QuickSelectorScreen - 快速物品选择器覆盖层
 * 半透明覆盖层，中央显示快速选择轮盘
 */
const QuickSelectorScreen: React.FC<QuickSelectorScreenProps> = ({ children, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    {/* 半透明背景遮罩 */}
    <div className={styles.backdrop} />

    {/* 中央选择器 */}
    <div className={styles.selectorArea}>
      {/* 选择轮盘 */}
      <div className={styles.wheel}>
        <div className={styles.wheelCenter} />
        <div className={styles.slots}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.slot} />
          ))}
        </div>
      </div>

      {/* 选中物品名称 */}
      <div className={styles.selectedName} />
    </div>

    {children}
  </div>
)

QuickSelectorScreen.displayName = 'QuickSelectorScreen'
export default QuickSelectorScreen
