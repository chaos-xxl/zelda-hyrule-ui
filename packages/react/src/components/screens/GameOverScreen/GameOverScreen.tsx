import React from 'react'
import classNames from 'classnames'
import styles from './gameOverScreen.module.less'

export interface GameOverScreenProps {
  /** 自定义内容覆盖层 */
  children?: React.ReactNode
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/**
 * GameOverScreen - Game Over 界面
 * 红色文字 "Game Over" 居中显示，暗色背景
 */
const GameOverScreen: React.FC<GameOverScreenProps> = ({ children, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    <div className={styles.content}>
      <h1 className={styles.gameOverText}>Game Over</h1>
      <div className={styles.options}>
        <span className={styles.option}>Continue</span>
        <span className={styles.option}>Load Save</span>
      </div>
    </div>

    {children}
  </div>
)

GameOverScreen.displayName = 'GameOverScreen'
export default GameOverScreen
