import React from 'react'
import classNames from 'classnames'
import styles from './settingsToggle.module.less'

export type ToggleType = 'track' | 'on' | 'off' | 'center' | 'right' | 'left' | 'button'

export interface SettingsToggleProps {
  /** 开关类型 */
  type?: ToggleType
  /** 是否选中 */
  selected?: boolean
  /** 标签文字 */
  label?: string
  /** 选项列表（用于 track/center 等多选类型） */
  options?: string[]
  /** 当前值 */
  value?: string
  /** 变更回调 */
  onChange?: (value: string) => void
  className?: string
  style?: React.CSSProperties
}

const SettingsToggle: React.FC<SettingsToggleProps> = ({
  selected = false,
  label,
  options = ['On', 'Off'],
  value,
  onChange,
  className,
  style,
}) => (
  <div className={classNames(styles.container, { [styles.selected]: selected }, className)} style={style}>
    <div className={styles.innerBorder} />
    {label && <span className={styles.label}>{label}</span>}
    <div className={styles.options}>
      {options.map((opt) => (
        <button
          key={opt}
          className={classNames(styles.option, { [styles.active]: opt === value })}
          onClick={() => onChange?.(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
)

SettingsToggle.displayName = 'SettingsToggle'
export default SettingsToggle
