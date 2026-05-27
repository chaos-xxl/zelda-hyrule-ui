import React from 'react'
import classNames from 'classnames'
import styles from './temperature.module.less'
import tempRegularSvg from '../../../assets/svg/temp-regular.svg'
import tempColdSvg from '../../../assets/svg/temp-cold.svg'

export type TemperatureValue = 'regular' | 'cold' | 'hot'

export interface TemperatureProps {
  value?: TemperatureValue
  size?: number
  className?: string
  style?: React.CSSProperties
}

const TEMP_SVGS: Record<TemperatureValue, string> = {
  regular: tempRegularSvg,
  cold: tempColdSvg,
  hot: tempRegularSvg, // hot 用 regular 的 SVG + CSS 色相旋转
}

const Temperature: React.FC<TemperatureProps> = ({ value = 'regular', size = 50, className, style }) => (
  <div
    className={classNames(styles.container, styles[value], className)}
    style={{ width: size, height: size, ...style }}
  >
    <img src={TEMP_SVGS[value]} alt="" className={styles.icon} />
  </div>
)

Temperature.displayName = 'Temperature'
export default Temperature
