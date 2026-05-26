import React from 'react'
import classNames from 'classnames'
import styles from './menuScreen.module.less'

export interface MenuScreenProps {
  /** 自定义内容覆盖层 */
  children?: React.ReactNode
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/**
 * MenuScreen - 完整的物品菜单界面
 * 1920x1080 布局：顶部 MenuSections 分类栏，中间 ItemBG 网格，底部 ItemDescription 面板
 */
const MenuScreen: React.FC<MenuScreenProps> = ({ children, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    {/* 顶部分类导航区域 */}
    <div className={styles.header}>
      <div className={styles.sectionNav} />
    </div>

    {/* 主内容区域 */}
    <div className={styles.body}>
      {/* 左侧物品网格 */}
      <div className={styles.itemGrid}>
        <div className={styles.gridInner} />
      </div>

      {/* 右侧物品描述面板 */}
      <div className={styles.descriptionPanel}>
        <div className={styles.itemName} />
        <div className={styles.itemDesc} />
        <div className={styles.itemStats} />
      </div>
    </div>

    {/* 底部操作栏 */}
    <div className={styles.footer} />

    {children}
  </div>
)

MenuScreen.displayName = 'MenuScreen'
export default MenuScreen
