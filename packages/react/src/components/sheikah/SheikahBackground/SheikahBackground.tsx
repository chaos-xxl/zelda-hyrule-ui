import React from 'react'
import classNames from 'classnames'
import styles from './sheikahBackground.module.less'
import bgTexture from '@core/assets/img/sheikah-bg-dark.png'

export type SheikahBgColor = 'darkBlue' | 'blueGrey'

export interface SheikahBackgroundProps {
  /** 背景色调 */
  color?: SheikahBgColor
  /** 子元素 */
  children?: React.ReactNode
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const SheikahBackground: React.FC<SheikahBackgroundProps> = ({
  color = 'darkBlue',
  children,
  className,
  style,
}) => (
  <div className={classNames(styles.container, styles[color], className)} style={style}>
    <div className={styles.texture} style={{ backgroundImage: `url(${bgTexture})` }} />
    <div className={styles.content}>{children}</div>
  </div>
)

SheikahBackground.displayName = 'SheikahBackground'
export default SheikahBackground
