import React from 'react'
import classNames from 'classnames'
import styles from './horseSpur.module.less'

export type HorseSpurVariant = 'normal' | 'ancient' | 'endura'

export interface HorseSpurProps {
  /** 马刺变体 */
  variant?: HorseSpurVariant
  /** 是否已使用 */
  used?: boolean
  /** 尺寸 */
  size?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const HorseSpur: React.FC<HorseSpurProps> = ({
  variant = 'normal',
  used = false,
  size = 28,
  className,
  style,
}) => {
  const cls = classNames(
    styles.spur,
    styles[variant],
    { [styles.used]: used },
    className
  )

  return (
    <div className={cls} style={{ width: size, height: size, ...style }}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L14.5 8.5L21 9.5L16 14L17.5 21L12 17.5L6.5 21L8 14L3 9.5L9.5 8.5L12 2Z"
          fill="currentColor"
          fillOpacity={used ? 0.3 : 1}
        />
        <path
          d="M12 5L13.8 9.5L18.5 10.2L15 13.5L15.9 18.2L12 16L8.1 18.2L9 13.5L5.5 10.2L10.2 9.5L12 5Z"
          fill="currentColor"
          fillOpacity={used ? 0.15 : 0.6}
        />
      </svg>
    </div>
  )
}

HorseSpur.displayName = 'HorseSpur'
export default HorseSpur
