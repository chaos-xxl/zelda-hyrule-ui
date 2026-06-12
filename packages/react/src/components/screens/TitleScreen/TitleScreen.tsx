import React from 'react'
import classNames from 'classnames'
import styles from './titleScreen.module.less'

export interface TitleScreenProps {
  /** 自定义内容覆盖层 */
  children?: React.ReactNode
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/**
 * TitleScreen - 标题界面
 * 包含 Logo 和菜单选项（Continue, New Game, Options）
 */
const TitleScreen: React.FC<TitleScreenProps> = ({ children, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    {/* Logo 区域 */}
    <div className={styles.logoArea}>
      <div className={styles.logo} />
    </div>

    {/* 菜单选项 */}
    <nav className={styles.menu}>
      <div className={styles.menuItem}>Continue</div>
      <div className={styles.menuItem}>New Game</div>
      <div className={styles.menuItem}>Options</div>
    </nav>

    {/* 底部版权信息 */}
    <div className={styles.footer}>
      <span className={styles.copyright} />
    </div>

    {children}
  </div>
)

TitleScreen.displayName = 'TitleScreen'
export default TitleScreen
