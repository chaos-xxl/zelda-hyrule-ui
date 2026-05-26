import React from 'react'
import classNames from 'classnames'
import styles from './attackDefenseValues.module.less'

export type AttackDefenseType = 'attack' | 'defense'
export type ValueModifier = 'normal' | 'bonus' | 'penalty'

export interface AttackDefenseValuesProps {
  /** 类型：攻击或防御 */
  type: AttackDefenseType
  /** 数值 */
  value: number
  /** 数值修正状态 */
  modifier?: ValueModifier
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const AttackDefenseValues: React.FC<AttackDefenseValuesProps> = ({
  type,
  value,
  modifier = 'normal',
  className,
  style,
}) => {
  const cls = classNames(
    styles.container,
    styles[type],
    { [styles.bonus]: modifier === 'bonus', [styles.penalty]: modifier === 'penalty' },
    className
  )

  return (
    <div className={cls} style={style}>
      <span className={styles.icon}>
        {type === 'attack' ? (
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 2L9 7M14 2L11 2M14 2L14 5M2 14L7 9M5 14H2V11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 1L2 5V9C2 12 4.5 14.5 8 15C11.5 14.5 14 12 14 9V5L8 1Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className={styles.value}>{value}</span>
    </div>
  )
}

AttackDefenseValues.displayName = 'AttackDefenseValues'
export default AttackDefenseValues
