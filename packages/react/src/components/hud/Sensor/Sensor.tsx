import React from 'react'
import classNames from 'classnames'
import styles from './sensor.module.less'

export interface SensorProps {
  /** 是否激活 */
  active?: boolean
  /** 是否 Plus 版本 */
  plus?: boolean
  /** 尺寸（默认 50px） */
  size?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/** 从 Figma 精确导出的 Sensor 图标 path */
const SENSOR_PATHS = [
  'M29.9407 16.5394C29.6813 10.0177 24.4565 4.64465 17.9718 4.19999C10.4125 3.64416 4.15015 9.64712 4.15015 17.0952C4.15015 22.2459 7.15163 26.6555 11.4871 28.7677C11.7094 28.8788 11.9318 28.7677 12.0059 28.5454L12.3764 27.1743C12.4135 26.989 12.3394 26.8408 12.1912 26.7296C8.41151 24.8028 5.9288 20.8008 6.29936 16.2059C6.70696 10.907 11.0424 6.64564 16.3414 6.31214C22.6037 5.90453 27.8285 10.907 27.8285 17.0952C27.8285 21.2454 25.457 24.8769 22.0108 26.6926C21.8626 26.7667 21.7885 26.952 21.8255 27.1002L22.1961 28.4712C22.2702 28.6936 22.4925 28.8047 22.7149 28.7306C27.1615 26.5444 30.163 21.8754 29.9407 16.5394Z',
  'M22.2704 17.0582C22.2704 13.9826 19.6024 11.537 16.4527 11.8705C14.1183 12.1299 12.2284 13.9826 11.8949 16.3171C11.5614 18.7628 12.9325 20.949 15.0076 21.8384C15.1558 21.9125 15.267 22.0607 15.2299 22.246L13.4142 36.2529C13.3401 36.6976 13.7106 37.1052 14.1553 37.1052H19.973C20.4177 37.1052 20.7512 36.6976 20.7141 36.2529L18.8984 22.246C18.8613 22.0607 18.9725 21.9125 19.1207 21.8384C20.9735 21.0602 22.2704 19.2074 22.2704 17.0582Z',
]

const Sensor: React.FC<SensorProps> = ({ active = true, plus = false, size = 50, className, style }) => {
  const color = active ? '#9DECFD' : '#658D95'

  return (
    <div className={classNames(styles.container, { [styles.active]: active }, className)} style={{ width: size, height: size, ...style }}>
      <svg aria-hidden="true" viewBox="0 0 50 50" fill="none" className={styles.bg}>
        <circle cx="25" cy="25" r="25" fill="black" fillOpacity="0.8" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 34 37" fill="none" className={styles.icon}>
        {SENSOR_PATHS.map((d, i) => (
          <path key={i} d={d} fill={color} />
        ))}
      </svg>
      {plus && <span className={styles.plusBadge}>+</span>}
    </div>
  )
}

Sensor.displayName = 'Sensor'
export default Sensor
