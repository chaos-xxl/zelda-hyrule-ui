import React from 'react'
import classNames from 'classnames'
import styles from './mapGrid.module.less'

export type MapGridVariant = 'small' | 'large'

export interface MapGridProps {
  /** 网格变体 */
  variant?: MapGridVariant
  /** 网格列数 */
  columns?: number
  /** 网格行数 */
  rows?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const MapGrid: React.FC<MapGridProps> = ({
  variant = 'small',
  columns = 8,
  rows = 8,
  className,
  style,
}) => {
  const cls = classNames(styles.grid, styles[variant], className)

  return (
    <div className={cls} style={style}>
      <svg
        className={styles.svg}
        viewBox={`0 0 ${columns * 100} ${rows * 100}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Vertical lines */}
        {Array.from({ length: columns + 1 }, (_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 100}
            y1={0}
            x2={i * 100}
            y2={rows * 100}
            stroke="currentColor"
            strokeOpacity={0.2}
            strokeWidth={variant === 'large' ? 2 : 1}
          />
        ))}
        {/* Horizontal lines */}
        {Array.from({ length: rows + 1 }, (_, i) => (
          <line
            key={`h-${i}`}
            x1={0}
            y1={i * 100}
            x2={columns * 100}
            y2={i * 100}
            stroke="currentColor"
            strokeOpacity={0.2}
            strokeWidth={variant === 'large' ? 2 : 1}
          />
        ))}
      </svg>
    </div>
  )
}

MapGrid.displayName = 'MapGrid'
export default MapGrid
