import React from 'react'
import classNames from 'classnames'
import styles from './card.module.less'

export type CardVariant = 'default' | 'sheikah' | 'item' | 'golden'

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 卡片变体 */
  variant?: CardVariant
  /** 卡片标题 */
  title?: React.ReactNode
  /** 是否选中 */
  selected?: boolean
  children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  title,
  selected = false,
  children,
  className,
  style,
  ...rest
}) => {
  const cls = classNames(
    styles.card,
    styles[variant],
    { [styles.selected]: selected },
    className
  )

  return (
    <div className={cls} style={style} {...rest}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.body}>{children}</div>
    </div>
  )
}

Card.displayName = 'Card'
export default Card
