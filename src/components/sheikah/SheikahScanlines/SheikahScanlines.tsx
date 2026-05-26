import React from 'react'
import classNames from 'classnames'
import styles from './sheikahScanlines.module.less'

export interface SheikahScanlinesProps {
  /** 透明度 (0-1) */
  opacity?: number
  /** 是否动画 */
  animated?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const SheikahScanlines: React.FC<SheikahScanlinesProps> = ({
  opacity = 0.15,
  animated = false,
  className,
  style,
}) => (
  <div
    className={classNames(styles.container, { [styles.animated]: animated }, className)}
    style={{ opacity, ...style }}
  />
)

SheikahScanlines.displayName = 'SheikahScanlines'
export default SheikahScanlines
