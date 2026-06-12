import React from 'react'
import classNames from 'classnames'
import styles from './pagination.module.less'

export interface PaginationProps {
  /** 总页数 (1-6) */
  totalPages: number
  /** 当前页 (1-based) */
  currentPage: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  className,
  style,
}) => {
  const pages = Math.min(Math.max(totalPages, 1), 6)
  const current = Math.min(Math.max(currentPage, 1), pages)

  return (
    <div className={classNames(styles.container, className)} style={style}>
      {Array.from({ length: pages }, (_, i) => (
        <span
          key={i}
          className={classNames(styles.dot, {
            [styles.active]: i + 1 === current,
          })}
        />
      ))}
    </div>
  )
}

Pagination.displayName = 'Pagination'
export default Pagination
