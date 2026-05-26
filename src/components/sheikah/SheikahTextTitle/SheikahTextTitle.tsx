import React from 'react'
import classNames from 'classnames'
import styles from './sheikahTextTitle.module.less'

export interface SheikahTextTitleProps {
  /** 标题 */
  title: string
  /** 描述（可选） */
  description?: string
  className?: string
  style?: React.CSSProperties
}

const SheikahTextTitle: React.FC<SheikahTextTitleProps> = ({ title, description, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    <div className={styles.titleRow}>
      <span className={styles.ornament}>◆</span>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.ornament}>◆</span>
    </div>
    {description && <p className={styles.description}>{description}</p>}
  </div>
)

SheikahTextTitle.displayName = 'SheikahTextTitle'
export default SheikahTextTitle
