import React from 'react'
import classNames from 'classnames'
import styles from './soundMeter.module.less'

export type SoundLevel = 'low' | 'high'

export interface SoundMeterProps {
  /** 声音等级 */
  level?: SoundLevel
  /** 尺寸（默认 50px） */
  size?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const SoundMeter: React.FC<SoundMeterProps> = ({ level = 'low', size = 50, className, style }) => (
  <div className={classNames(styles.container, className)} style={{ width: size, height: size, ...style }}>
    <svg viewBox="0 0 50 50" fill="none" className={styles.bg}>
      <circle cx="25" cy="25" r="25" fill="black" fillOpacity="0.8" />
    </svg>
    <div className={styles.content}>
      <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
        {/* 声波图标 */}
        <rect x="3" y="14" width="3" height="6" rx="1" fill={level === 'high' ? '#FFE460' : '#8FEFFF'} />
        <rect x="8" y="10" width="3" height="10" rx="1" fill={level === 'high' ? '#FFE460' : '#8FEFFF'} />
        <rect x="13" y="6" width="3" height="14" rx="1" fill={level === 'high' ? '#FFE460' : '#8FEFFF'} opacity={level === 'high' ? 1 : 0.4} />
        <rect x="18" y="2" width="3" height="18" rx="1" fill={level === 'high' ? '#FFE460' : '#8FEFFF'} opacity={level === 'high' ? 1 : 0.2} />
      </svg>
    </div>
  </div>
)

SoundMeter.displayName = 'SoundMeter'
export default SoundMeter
