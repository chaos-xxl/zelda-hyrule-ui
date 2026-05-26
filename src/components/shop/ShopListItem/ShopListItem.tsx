import React from 'react'
import classNames from 'classnames'
import styles from './shopListItem.module.less'

export interface ShopListItemProps {
  /** 物品名称 */
  name: string
  /** 价格 */
  price: number
  /** 是否悬停 */
  hovered?: boolean
  /** 点击回调 */
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

const ShopListItem: React.FC<ShopListItemProps> = ({ name, price, hovered = false, onClick, className, style }) => (
  <div className={classNames(styles.container, { [styles.hovered]: hovered }, className)} style={style} onClick={onClick}>
    <div className={styles.innerBorder} />
    <span className={styles.name}>{name}</span>
    <span className={styles.price}>{price}</span>
  </div>
)

ShopListItem.displayName = 'ShopListItem'
export default ShopListItem
