import React from 'react'
import classNames from 'classnames'
import styles from './soundMeter.module.less'
import soundBgSvg from '@core/assets/svg/sound-bg.svg'
import soundMeterLowSvg from '@core/assets/svg/sound-meter-low.svg'
import soundMeterHighSvg from '@core/assets/svg/sound-meter-high.svg'

export type SoundLevel = 'low' | 'high'

export interface SoundMeterProps {
  level?: SoundLevel
  size?: number
  className?: string
  style?: React.CSSProperties
}

const SoundMeter: React.FC<SoundMeterProps> = ({ level = 'low', size = 50, className, style }) => (
  <div className={classNames(styles.container, className)} style={{ width: size, height: size, ...style }}>
    <img src={soundBgSvg} alt="" className={styles.bg} />
    <img src={level === 'high' ? soundMeterHighSvg : soundMeterLowSvg} alt="" className={styles.meter} />
  </div>
)

SoundMeter.displayName = 'SoundMeter'
export default SoundMeter
