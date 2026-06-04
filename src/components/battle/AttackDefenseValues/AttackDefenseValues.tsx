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
          /* 剑（攻击）— 复用 MenuSections weapons 的 Figma 精确 path (node 8:466)，currentColor 着色 */
          <svg aria-hidden="true" viewBox="0 0 42.22 42.22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.8418 11.9931L20.3232 32.1458L16.0847 27.8743L26.4636 17.4146L27.2244 15.1146L24.9421 15.8813L14.5631 26.341L10.3246 22.0695L30.3217 0.38334L42.2222 0L41.8418 11.9931ZM20.7579 35.9793L6.19477 21.3028C5.43401 20.5361 4.23852 20.5361 3.47776 21.3028L2.39096 22.398C1.6302 23.1647 1.6302 24.3695 2.39096 25.1362L7.55327 30.3387L0.652081 37.2936C-0.21736 38.1698 -0.21736 39.6484 0.652081 40.5246L1.68454 41.5651C2.55398 42.4413 4.02116 42.4413 4.8906 41.5651L11.7375 34.6649L16.8998 39.8674C17.6605 40.6341 18.856 40.6341 19.6168 39.8674L20.7036 38.7722C21.5187 37.9507 21.5187 36.7459 20.7579 35.9793Z" fill="currentColor" />
          </svg>
        ) : (
          /* 盾（防御）— 复用 MenuSections shields 的 Figma 精确 path (node 8:468)，currentColor 着色 */
          <svg aria-hidden="true" viewBox="0 0 33.33 38.89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.8889 0H1.44445C0.66667 0 0 0.676328 0 1.46538V17.19C0 22.4316 1.83333 27.5604 5.22222 31.562C8.33333 35.2254 11.6667 38.8889 16.6667 38.8889C21.6667 38.8889 24.7778 35.3945 27.8889 31.8438C31.3889 27.7858 33.3333 22.5443 33.3333 17.1337V1.46538C33.3333 0.676328 32.7222 0 31.8889 0ZM28.3333 17.19C28.3333 21.3607 26.8333 25.4187 24.1111 28.5185C21 32.1256 19.2222 33.8164 16.6667 33.8164C14.1667 33.8164 12.2222 32.0129 9.00001 28.2367C6.44445 25.2496 5 21.3043 5 17.19V6.42512C5 5.69243 5.55555 5.12882 6.27777 5.12882H27C27.7222 5.12882 28.2778 5.74879 28.2778 6.42512V17.19H28.3333ZM24.3333 8.45411C24.7222 8.45411 25 8.79227 25 9.13044V17.1337C25 20.4589 23.7778 23.7279 21.6111 26.2077C18.8333 29.4203 17.7222 30.3784 16.6667 30.3784C15.6667 30.3784 14.2778 29.1948 11.5 25.9823C9.44445 23.5588 8.33333 20.4589 8.33333 17.1337V9.1868C8.33333 8.79227 8.66667 8.51047 9.00001 8.51047H24.3333V8.45411Z" fill="currentColor" />
          </svg>
        )}
      </span>
      <span className={styles.value}>{value}</span>
    </div>
  )
}

AttackDefenseValues.displayName = 'AttackDefenseValues'
export default AttackDefenseValues
