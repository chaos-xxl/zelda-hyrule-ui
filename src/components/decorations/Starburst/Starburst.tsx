import React from 'react'
import classNames from 'classnames'
import styles from './starburst.module.less'
import starburst1Svg from '../../../assets/svg/starburst-1.svg'
import starburst2Svg from '../../../assets/svg/starburst-2.svg'

export interface StarburstProps {
  size?: number
  className?: string
  style?: React.CSSProperties
}

/** 精确还原 Figma node 13:920 — 200×200px 星芒特效 */
const Starburst: React.FC<StarburstProps> = ({ size = 200, className, style }) => (
  <div className={classNames(styles.container, className)} style={{ width: size, height: size, ...style }}>
    <img src={starburst1Svg} alt="" className={styles.layer1} />
    <img src={starburst2Svg} alt="" className={styles.layer2} />
  </div>
)

Starburst.displayName = 'Starburst'
export default Starburst
