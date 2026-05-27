import React from 'react'
import classNames from 'classnames'
import styles from './directionalArrow.module.less'
import arrowSvg from '../../../assets/svg/directional-arrow.svg'

export type ArrowDirection = 'up' | 'down' | 'left' | 'right'
export type ArrowVariant = 'outline' | 'solid' | 'triangle' | 'large'

export interface DirectionalArrowProps {
  direction?: ArrowDirection
  variant?: ArrowVariant
  size?: number
  className?: string
  style?: React.CSSProperties
}

const ROTATION: Record<ArrowDirection, number> = { up: 0, right: 90, down: 180, left: 270 }

const DirectionalArrow: React.FC<DirectionalArrowProps> = ({ direction = 'up', size = 18, className, style }) => (
  <div
    className={classNames(styles.container, className)}
    style={{ width: size * (10 / 18), height: size, transform: `rotate(${ROTATION[direction]}deg)`, ...style }}
  >
    <img src={arrowSvg} alt="" className={styles.icon} />
  </div>
)

DirectionalArrow.displayName = 'DirectionalArrow'
export default DirectionalArrow
