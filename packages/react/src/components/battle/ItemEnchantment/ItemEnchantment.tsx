import React from 'react'
import classNames from 'classnames'
import styles from './itemEnchantment.module.less'

export type EnchantmentQuality = 0 | 1 | 2 | 3

export interface ItemEnchantmentProps {
  /** 附魔品质 (0-3) */
  quality: EnchantmentQuality
  className?: string
  style?: React.CSSProperties
}

const ItemEnchantment: React.FC<ItemEnchantmentProps> = ({ quality, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    {Array.from({ length: 3 }, (_, i) => (
      <span key={i} className={classNames(styles.diamond, { [styles.filled]: i < quality })} />
    ))}
  </div>
)

ItemEnchantment.displayName = 'ItemEnchantment'
export default ItemEnchantment
