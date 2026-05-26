import React from 'react'
import classNames from 'classnames'
import styles from './starburst.module.less'

export interface StarburstProps {
  /** 尺寸（默认 200px） */
  size?: number
  className?: string
  style?: React.CSSProperties
}

const Starburst: React.FC<StarburstProps> = ({ size = 200, className, style }) => (
  <div className={classNames(styles.container, className)} style={{ width: size, height: size, ...style }}>
    <svg viewBox="0 0 200 200" fill="none" className={styles.burst}>
      {Array.from({ length: 12 }, (_, i) => (
        <line
          key={i}
          x1="100" y1="100"
          x2={100 + 90 * Math.cos((i * 30 * Math.PI) / 180)}
          y2={100 + 90 * Math.sin((i * 30 * Math.PI) / 180)}
          stroke="#FCC413"
          strokeWidth="2"
          opacity={0.4 + (i % 2) * 0.3}
        />
      ))}
      <circle cx="100" cy="100" r="30" fill="#FCC413" opacity="0.3" />
      <circle cx="100" cy="100" r="15" fill="#FCC413" opacity="0.6" />
    </svg>
  </div>
)

Starburst.displayName = 'Starburst'
export default Starburst
