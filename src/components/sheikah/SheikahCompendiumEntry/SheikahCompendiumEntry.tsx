import React from 'react'
import classNames from 'classnames'
import styles from './sheikahCompendiumEntry.module.less'

export interface SheikahCompendiumEntryProps {
  /** 是否已发现 */
  revealed?: boolean
  /** 是否悬停 */
  hovered?: boolean
  /** 图片（已发现时显示） */
  image?: React.ReactNode
  /** 编号 */
  number?: number
  /** 点击回调 */
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

const SheikahCompendiumEntry: React.FC<SheikahCompendiumEntryProps> = ({
  revealed = false, hovered = false, image, number, onClick, className, style,
}) => (
  <div className={classNames(styles.container, { [styles.revealed]: revealed, [styles.hovered]: hovered }, className)} style={style} onClick={onClick}>
    <div className={styles.innerBorder} />
    {revealed && image ? <div className={styles.image}>{image}</div> : <span className={styles.unknown}>?</span>}
    {number !== undefined && <span className={styles.number}>{String(number).padStart(3, '0')}</span>}
  </div>
)

SheikahCompendiumEntry.displayName = 'SheikahCompendiumEntry'
export default SheikahCompendiumEntry
