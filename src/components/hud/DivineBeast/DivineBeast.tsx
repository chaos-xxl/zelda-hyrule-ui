import React from 'react'
import classNames from 'classnames'
import styles from './divineBeast.module.less'

export type BeastType = 'ruta' | 'medoh' | 'naboris' | 'rudania'

export interface DivineBeastProps {
  /** 神兽类型 */
  beast: BeastType
  /** 是否充能中 */
  recharging?: boolean
  /** 可用次数 */
  charges?: number
  /** 尺寸（默认 75px） */
  size?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const BEAST_COLORS: Record<BeastType, string> = {
  ruta: '#27CBFF',
  medoh: '#7CFF4E',
  naboris: '#FCC63D',
  rudania: '#EB4713',
}

const DivineBeast: React.FC<DivineBeastProps> = ({
  beast,
  recharging = false,
  charges = 1,
  size = 75,
  className,
  style,
}) => {
  const color = recharging ? '#FF0000' : BEAST_COLORS[beast]

  return (
    <div
      className={classNames(styles.container, { [styles.recharging]: recharging }, className)}
      style={{
        width: size,
        height: size,
        '--beast-color': color,
        ...style,
      } as React.CSSProperties}
    >
      <svg
        className={styles.icon}
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 简化的神兽轮廓 — 用圆形 + 内部图标表示 */}
        <circle cx="37.5" cy="37.5" r="30" fill="none" stroke={color} strokeWidth="2" opacity="0.6" />
        <circle cx="37.5" cy="37.5" r="20" fill="none" stroke={color} strokeWidth="1.5" opacity="0.4" />
        <circle cx="37.5" cy="37.5" r="8" fill={color} opacity="0.8" />
      </svg>
      {charges > 0 && (
        <span className={styles.charges}>
          <span className={styles.times}>×</span>
          <span className={styles.count}>{charges}</span>
        </span>
      )}
    </div>
  )
}

DivineBeast.displayName = 'DivineBeast'
export default DivineBeast
