import React from 'react'
import classNames from 'classnames'
import styles from './loading.module.less'

export interface LoadingProps {
  /** 加载提示文字 */
  tip?: string
  /** 尺寸 */
  size?: 'small' | 'middle' | 'large'
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const Loading: React.FC<LoadingProps> = ({
  tip,
  size = 'middle',
  className,
  style,
}) => {
  return (
    <div className={classNames(styles.container, styles[size], className)} style={style}>
      <div className={styles.spinner}>
        <div className={styles.ring} />
        <div className={styles.eye} />
      </div>
      {tip && <span className={styles.tip}>{tip}</span>}
    </div>
  )
}

Loading.displayName = 'Loading'
export default Loading
