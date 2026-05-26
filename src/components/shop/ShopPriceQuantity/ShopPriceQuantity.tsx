import React from 'react'
import classNames from 'classnames'
import styles from './shopPriceQuantity.module.less'

export interface ShopPriceQuantityProps {
  /** 价格 */
  price: number
  /** 数量 */
  quantity: number
  className?: string
  style?: React.CSSProperties
}

const ShopPriceQuantity: React.FC<ShopPriceQuantityProps> = ({ price, quantity, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    <div className={styles.row}>
      <span className={styles.label}>Price</span>
      <span className={styles.value}>{price}</span>
    </div>
    <div className={styles.row}>
      <span className={styles.label}>Qty</span>
      <span className={styles.value}>{quantity}</span>
    </div>
  </div>
)

ShopPriceQuantity.displayName = 'ShopPriceQuantity'
export default ShopPriceQuantity
