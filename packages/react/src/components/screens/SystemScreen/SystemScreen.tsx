import React from 'react'
import classNames from 'classnames'
import styles from './systemScreen.module.less'

export interface SystemScreenProps {
  /** 自定义内容覆盖层 */
  children?: React.ReactNode
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/**
 * SystemScreen - 系统设置界面
 * 包含 SettingsToggle 列表的设置面板
 */
const SystemScreen: React.FC<SystemScreenProps> = ({ children, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    {/* 顶部标题 */}
    <div className={styles.header}>
      <h1 className={styles.title}>System Settings</h1>
    </div>

    {/* 设置列表区域 */}
    <div className={styles.body}>
      <div className={styles.settingsList}>
        <div className={styles.settingsGroup}>
          <h2 className={styles.groupTitle}>Display</h2>
          <div className={styles.groupContent} />
        </div>
        <div className={styles.settingsGroup}>
          <h2 className={styles.groupTitle}>Audio</h2>
          <div className={styles.groupContent} />
        </div>
        <div className={styles.settingsGroup}>
          <h2 className={styles.groupTitle}>Controls</h2>
          <div className={styles.groupContent} />
        </div>
      </div>
    </div>

    {/* 底部操作栏 */}
    <div className={styles.footer} />

    {children}
  </div>
)

SystemScreen.displayName = 'SystemScreen'
export default SystemScreen
