import React from 'react'
import classNames from 'classnames'
import styles from './sheikahAlbumButton.module.less'

export interface SheikahAlbumButtonProps {
  /** 按钮文字 */
  label: string
  /** 是否选中 */
  selected?: boolean
  /** 点击回调 */
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

const SheikahAlbumButton: React.FC<SheikahAlbumButtonProps> = ({ label, selected = false, onClick, className, style }) => (
  <button className={classNames(styles.button, { [styles.selected]: selected }, className)} style={style} onClick={onClick}>
    <span className={styles.innerBorder} />
    <span className={styles.label}>{label}</span>
  </button>
)

SheikahAlbumButton.displayName = 'SheikahAlbumButton'
export default SheikahAlbumButton
