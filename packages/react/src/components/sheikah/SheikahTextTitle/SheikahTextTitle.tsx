import React from 'react'
import classNames from 'classnames'
import styles from './sheikahTextTitle.module.less'
import ornamentSvg from '@core/assets/svg/text-divider-ornament.svg'

export interface SheikahTextTitleProps {
  /** 标题 */
  title: string
  /** 描述（可选） */
  description?: string
  className?: string
  style?: React.CSSProperties
}

/**
 * 希卡文字标题 — 标题两侧带对称的希卡风装饰分隔符。
 * 装饰图标从 Figma node 239:25636 (Text Ornament Divider) 精确导出，右侧水平镜像。
 */
const SheikahTextTitle: React.FC<SheikahTextTitleProps> = ({ title, description, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    <div className={styles.titleRow}>
      <img src={ornamentSvg} alt="" className={styles.ornament} />
      <h3 className={styles.title}>{title}</h3>
      <img src={ornamentSvg} alt="" className={classNames(styles.ornament, styles.ornamentRight)} />
    </div>
    {description && <p className={styles.description}>{description}</p>}
  </div>
)

SheikahTextTitle.displayName = 'SheikahTextTitle'
export default SheikahTextTitle
