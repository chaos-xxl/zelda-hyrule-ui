import React from 'react'
import classNames from 'classnames'
import styles from './sheikahMapScreen.module.less'

export interface SheikahMapScreenProps {
  /** 自定义内容覆盖层 */
  children?: React.ReactNode
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/**
 * SheikahMapScreen - 希卡之石地图界面
 * 包含 MapGrid 网格、MapIcons 图标、MapCursor 光标
 */
const SheikahMapScreen: React.FC<SheikahMapScreenProps> = ({ children, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    {/* 地图主区域 */}
    <div className={styles.mapArea}>
      {/* 网格背景 */}
      <div className={styles.mapGrid} />

      {/* 地图图标层 */}
      <div className={styles.mapIcons} />

      {/* 光标层 */}
      <div className={styles.mapCursor}>
        <div className={styles.cursorInner} />
      </div>
    </div>

    {/* 左侧信息面板 */}
    <div className={styles.infoPanel}>
      <div className={styles.locationName} />
      <div className={styles.coordinates} />
    </div>

    {/* 右侧工具栏 */}
    <div className={styles.toolbar}>
      <div className={styles.toolButton} />
      <div className={styles.toolButton} />
      <div className={styles.toolButton} />
    </div>

    {/* 底部操作提示 */}
    <div className={styles.footer} />

    {children}
  </div>
)

SheikahMapScreen.displayName = 'SheikahMapScreen'
export default SheikahMapScreen
