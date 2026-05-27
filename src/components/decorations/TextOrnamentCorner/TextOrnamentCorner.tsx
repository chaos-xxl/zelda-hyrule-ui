import React from 'react'
import classNames from 'classnames'
import styles from './textOrnamentCorner.module.less'
import cornerSvg from '../../../assets/svg/text-ornament-corner.svg'

export type CornerPosition = 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft'

export interface TextOrnamentCornerProps {
  /** 角落位置 */
  position?: CornerPosition
  /** 是否显示三角力量 */
  showTriforce?: boolean
  /** 尺寸（默认 35px） */
  size?: number
  className?: string
  style?: React.CSSProperties
}

const ROTATION: Record<CornerPosition, number> = {
  topLeft: 180,
  topRight: -90,
  bottomRight: 0,
  bottomLeft: 90,
}

/** 精确还原 Figma node 20:1224 — 35×35px 角落装饰 */
const TextOrnamentCorner: React.FC<TextOrnamentCornerProps> = ({ position = 'bottomRight', size = 35, className, style }) => (
  <div
    className={classNames(styles.container, className)}
    style={{ width: size, height: size, transform: `rotate(${ROTATION[position]}deg)`, ...style }}
  >
    <img src={cornerSvg} alt="" className={styles.icon} />
  </div>
)

TextOrnamentCorner.displayName = 'TextOrnamentCorner'
export default TextOrnamentCorner
