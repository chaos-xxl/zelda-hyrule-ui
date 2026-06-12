import React from 'react'
import classNames from 'classnames'
import styles from './loadingScreen.module.less'

export interface LoadingScreenProps {
  /** 自定义内容覆盖层 */
  children?: React.ReactNode
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/**
 * LoadingScreen - 加载界面
 * 包含提示文字、加载心形动画、神兽图标
 */
const LoadingScreen: React.FC<LoadingScreenProps> = ({ children, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    {/* 神兽图标装饰 */}
    <div className={styles.beastIcons}>
      <div className={styles.beastIcon} />
      <div className={styles.beastIcon} />
      <div className={styles.beastIcon} />
      <div className={styles.beastIcon} />
    </div>

    {/* 中央加载区域 */}
    <div className={styles.center}>
      {/* 加载心形动画 */}
      <div className={styles.hearts}>
        <span className={styles.heart} />
        <span className={styles.heart} />
        <span className={styles.heart} />
      </div>

      {/* 提示文字 */}
      <p className={styles.tipText}>Loading...</p>
    </div>

    {/* 底部提示 */}
    <div className={styles.footer}>
      <p className={styles.hint} />
    </div>

    {children}
  </div>
)

LoadingScreen.displayName = 'LoadingScreen'
export default LoadingScreen
