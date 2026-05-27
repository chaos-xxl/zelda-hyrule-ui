import React from 'react'
import classNames from 'classnames'
import styles from './loadingIcon.module.less'
import loadingShrineSvg from '../../../assets/svg/loading-icon-shrine.svg'

export type LoadingIconType = 'shrine' | 'orb' | 'rupee' | 'korok' | 'stamina'

export interface LoadingIconProps {
  icon: LoadingIconType
  showQuantity?: boolean
  quantity?: number
  size?: number
  className?: string
  style?: React.CSSProperties
}

/** 从 Figma 精确导出的加载图标 — shrine 有精确 SVG，其余用 shrine 的变色版 */
const LoadingIcon: React.FC<LoadingIconProps> = ({ icon, showQuantity = false, quantity, size = 40, className, style }) => (
  <div className={classNames(styles.container, styles[icon], className)} style={{ width: size, height: size, ...style }}>
    <img src={loadingShrineSvg} alt="" className={styles.icon} />
    {showQuantity && quantity !== undefined && <span className={styles.quantity}>{quantity}</span>}
  </div>
)

LoadingIcon.displayName = 'LoadingIcon'
export default LoadingIcon
