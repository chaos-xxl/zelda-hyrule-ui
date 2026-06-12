import React from 'react'
import classNames from 'classnames'
import styles from './quickSelector.module.less'
import centerSvg from '@core/assets/svg/quick-selector-center.svg'
import rightSvg from '@core/assets/svg/quick-selector-right.svg'
import leftSvg from '@core/assets/svg/quick-selector-left.svg'
import topSvg from '@core/assets/svg/quick-selector-top.svg'

export interface QuickSelectorSlot {
  position: 'top' | 'right' | 'bottom' | 'left'
}

export interface QuickSelectorItem {
  label?: string
}

export interface QuickSelectorProps {
  /** 选择器类型 */
  type?: 'weapons' | 'bow'
  className?: string
  style?: React.CSSProperties
}

/** 精确还原 Figma node 36:97 — 142×120px 快速选择器 */
const QuickSelector: React.FC<QuickSelectorProps> = ({ className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    {/* 中心：方向键 */}
    <img src={centerSvg} alt="" className={styles.center} />
    {/* 上方：magnesis 图标 */}
    <img src={topSvg} alt="" className={styles.top} />
    {/* 右侧：attack 图标 */}
    <img src={rightSvg} alt="" className={styles.right} />
    {/* 左侧：shield 图标 */}
    <img src={leftSvg} alt="" className={styles.left} />
  </div>
)

QuickSelector.displayName = 'QuickSelector'
export default QuickSelector
