import React from 'react'
import classNames from 'classnames'
import styles from './actionSet.module.less'

export interface ActionItem {
  /** 按钮字母 */
  button: string
  /** 操作标签 */
  label: string
}

export interface ActionSetProps {
  /** 操作列表 */
  actions: ActionItem[]
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const ActionSet: React.FC<ActionSetProps> = ({ actions, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    {actions.map((action, i) => (
      <div key={i} className={styles.item}>
        <span className={styles.label}>{action.label}</span>
        <span className={styles.button}>{action.button}</span>
      </div>
    ))}
  </div>
)

ActionSet.displayName = 'ActionSet'
export default ActionSet
