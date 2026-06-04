import React from 'react'
import classNames from 'classnames'
import styles from './mapCursor.module.less'

export interface MapCursorProps {
  /** 信息面板在右侧 */
  rightSide?: boolean
  /** 是否显示操作按钮 */
  action?: boolean
  /** 地点名称 */
  locationName?: string
  className?: string
  style?: React.CSSProperties
}

const MapCursor: React.FC<MapCursorProps> = ({ rightSide = true, action = false, locationName = 'Location', className, style }) => (
  <div className={classNames(styles.container, { [styles.right]: rightSide }, className)} style={style}>
    <div className={styles.cursor}>
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={styles.crosshair}>
        <circle cx="10" cy="10" r="8" stroke="#E2DED3" strokeWidth="1.5" fill="none" />
        <line x1="10" y1="2" x2="10" y2="6" stroke="#E2DED3" strokeWidth="1.5" />
        <line x1="10" y1="14" x2="10" y2="18" stroke="#E2DED3" strokeWidth="1.5" />
        <line x1="2" y1="10" x2="6" y2="10" stroke="#E2DED3" strokeWidth="1.5" />
        <line x1="14" y1="10" x2="18" y2="10" stroke="#E2DED3" strokeWidth="1.5" />
      </svg>
    </div>
    <div className={styles.info}>
      <span className={styles.name}>{locationName}</span>
      {action && <span className={styles.action}>A Travel</span>}
    </div>
  </div>
)

MapCursor.displayName = 'MapCursor'
export default MapCursor
