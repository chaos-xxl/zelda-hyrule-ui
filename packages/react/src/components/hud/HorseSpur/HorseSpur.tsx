import React from 'react'
import classNames from 'classnames'
import styles from './horseSpur.module.less'
import horseSpurNormalSvg from '@core/assets/svg/horse-spur-normal.svg'

export type HorseSpurVariant = 'normal' | 'ancient' | 'endura'

export interface HorseSpurProps {
  /** 冲刺类型 */
  type?: HorseSpurVariant
  /** 是否已使用 */
  used?: boolean
  /** 尺寸（默认 84px） */
  size?: number
  className?: string
  style?: React.CSSProperties
}

const HorseSpur: React.FC<HorseSpurProps> = ({ type = 'normal', used = false, size = 84, className, style }) => (
  <div
    className={classNames(styles.container, styles[type], { [styles.used]: used }, className)}
    style={{ width: size, height: size, ...style }}
  >
    <img src={horseSpurNormalSvg} alt="" className={styles.icon} />
  </div>
)

HorseSpur.displayName = 'HorseSpur'
export default HorseSpur
