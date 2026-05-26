import React from 'react'
import classNames from 'classnames'
import styles from './scrollbar.module.less'

export interface ScrollbarProps {
  /** 当前位置 (1-based) */
  location: number
  /** 最大分段数 */
  maxSections: number
  /** 宽度（默认 500px） */
  width?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const Scrollbar: React.FC<ScrollbarProps> = ({ location, maxSections, width = 500, className, style }) => {
  const progress = Math.max(0, Math.min(1, (location - 1) / (maxSections - 1)))
  const thumbWidth = width / maxSections

  return (
    <div className={classNames(styles.container, className)} style={{ width, ...style }}>
      <div className={styles.track} />
      <div
        className={styles.thumb}
        style={{ width: thumbWidth, left: `${progress * (width - thumbWidth)}px` }}
      />
    </div>
  )
}

Scrollbar.displayName = 'Scrollbar'
export default Scrollbar
