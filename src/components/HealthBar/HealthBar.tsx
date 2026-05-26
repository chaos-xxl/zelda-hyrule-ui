import React from 'react'
import classNames from 'classnames'
import styles from './healthBar.module.less'

export interface HealthBarProps {
  /** 当前生命值 */
  current: number
  /** 最大生命值 */
  max: number
  /** 奖励心心数量 */
  bonus?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/** 从 Figma 导出的精确心形路径 */
const HEART_PATH = "M21.7675 12.7969L12.1037 21.7487L2.05872 11.598C-0.686241 8.82416 -0.686239 4.35741 2.05872 1.58356C4.14815 -0.527857 7.55918 -0.527854 9.64861 1.58357L12.1037 4.06447L14.0676 2.0798C16.3794 -0.256337 20.1909 -0.129535 22.3423 2.35509C24.9973 5.42139 24.7431 10.0406 21.7675 12.7969Z"

const HeartIcon: React.FC<{ type: 'filled' | 'empty' | 'bonus' }> = ({ type }) => {
  const fill = type === 'filled' ? '#F1362F' : type === 'bonus' ? '#FFE465' : '#363930'

  return (
    <svg width="30" height="24" viewBox="0 0 24.18 21.75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={HEART_PATH} fill={fill} />
    </svg>
  )
}

const HealthBar: React.FC<HealthBarProps> = ({
  current,
  max,
  bonus = 0,
  className,
  style,
}) => {
  const hearts = []

  for (let i = 0; i < max; i++) {
    const filled = i < current
    hearts.push(
      <span key={`heart-${i}`} className={classNames(styles.heart, {
        [styles.filled]: filled,
        [styles.empty]: !filled,
      })}>
        <HeartIcon type={filled ? 'filled' : 'empty'} />
      </span>
    )
  }

  for (let i = 0; i < bonus; i++) {
    hearts.push(
      <span key={`bonus-${i}`} className={classNames(styles.heart, styles.bonus)}>
        <HeartIcon type="bonus" />
      </span>
    )
  }

  return (
    <div className={classNames(styles.container, className)} style={style}>
      {hearts}
    </div>
  )
}

HealthBar.displayName = 'HealthBar'
export default HealthBar
