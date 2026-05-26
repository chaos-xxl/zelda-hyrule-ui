import React from 'react'
import classNames from 'classnames'
import styles from './temperature.module.less'

export type TemperatureValue = 'regular' | 'cold' | 'hot'

export interface TemperatureProps {
  /** 温度状态 */
  value?: TemperatureValue
  /** 尺寸（默认 50px） */
  size?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const TEMP_COLORS: Record<TemperatureValue, string> = {
  regular: '#8FEFFF',
  cold: '#4FC0FF',
  hot: '#FF6B4A',
}

const Temperature: React.FC<TemperatureProps> = ({ value = 'regular', size = 50, className, style }) => {
  const color = TEMP_COLORS[value]

  return (
    <div className={classNames(styles.container, className)} style={{ width: size, height: size, ...style }}>
      <svg viewBox="0 0 50 50" fill="none" className={styles.bg}>
        <circle cx="25" cy="25" r="25" fill="black" fillOpacity="0.8" />
      </svg>
      <div className={styles.content}>
        <svg viewBox="0 0 20 30" fill="none" className={styles.thermometer}>
          <rect x="7" y="0" width="6" height="20" rx="3" fill={color} opacity="0.6" />
          <circle cx="10" cy="24" r="6" fill={color} />
          <text x="10" y="28" textAnchor="middle" fontSize="8" fontWeight="700" fill="black" fontFamily="Roboto">
            {value === 'regular' ? 'F' : value === 'cold' ? 'C' : 'H'}
          </text>
        </svg>
      </div>
    </div>
  )
}

Temperature.displayName = 'Temperature'
export default Temperature
