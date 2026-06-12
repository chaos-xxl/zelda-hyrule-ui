import React from 'react'
import classNames from 'classnames'
import styles from './loadingHeart.module.less'

export interface LoadingHeartProps {
  /** 是否显示 */
  shown?: boolean
  className?: string
  style?: React.CSSProperties
}

const HEART_PATH = 'M21.7675 12.7969L12.1037 21.7487L2.05872 11.598C-0.686241 8.82416 -0.686239 4.35741 2.05872 1.58356C4.14815 -0.527857 7.55918 -0.527854 9.64861 1.58357L12.1037 4.06447L14.0676 2.0798C16.3794 -0.256337 20.1909 -0.129535 22.3423 2.35509C24.9973 5.42139 24.7431 10.0406 21.7675 12.7969Z'

const LoadingHeart: React.FC<LoadingHeartProps> = ({ shown = true, className, style }) => (
  <div className={classNames(styles.container, { [styles.hidden]: !shown }, className)} style={style}>
    <svg aria-hidden="true" width="24" height="20" viewBox="0 0 24.18 21.75" fill="none">
      <path d={HEART_PATH} fill={shown ? '#F1362F' : '#363930'} />
    </svg>
  </div>
)

LoadingHeart.displayName = 'LoadingHeart'
export default LoadingHeart
