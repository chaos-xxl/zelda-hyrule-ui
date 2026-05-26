import React from 'react'
import classNames from 'classnames'
import styles from './shopScreen.module.less'

export interface ShopScreenProps {
  /** 自定义内容覆盖层 */
  children?: React.ReactNode
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/**
 * ShopScreen - 商店界面
 * 包含物品列表和价格显示
 */
const ShopScreen: React.FC<ShopScreenProps> = ({ children, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    {/* 顶部商店名称 */}
    <div className={styles.header}>
      <h1 className={styles.shopName}>General Store</h1>
      <div className={styles.rupeeDisplay}>
        <span className={styles.rupeeIcon} />
        <span className={styles.rupeeAmount}>0</span>
      </div>
    </div>

    {/* 主内容区域 */}
    <div className={styles.body}>
      {/* 左侧商品列表 */}
      <div className={styles.itemList}>
        <div className={styles.listContent} />
      </div>

      {/* 右侧商品详情与价格 */}
      <div className={styles.itemDetail}>
        <div className={styles.itemPreview} />
        <div className={styles.itemInfo}>
          <div className={styles.itemName} />
          <div className={styles.itemDescription} />
        </div>
        <div className={styles.priceArea}>
          <div className={styles.priceTag} />
          <div className={styles.quantityControl} />
        </div>
      </div>
    </div>

    {/* 底部操作栏 */}
    <div className={styles.footer} />

    {children}
  </div>
)

ShopScreen.displayName = 'ShopScreen'
export default ShopScreen
