import React from 'react'
import classNames from 'classnames'
import styles from './settingsToggle.module.less'

export type ToggleType = 'track' | 'on' | 'off' | 'center' | 'right' | 'left' | 'button'

export interface SettingsToggleProps {
  /** 开关类型 */
  type?: ToggleType
  /** 是否选中（整行高亮） */
  selected?: boolean
  /** 标签文字 */
  label?: string
  /** 选项列表 */
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
  options = ['ON', 'OFF'],
  value,
  onChange,
  className,
  style,
}) => {
  const isMultiOption = options.length > 2
  const activeIndex = value ? options.indexOf(value) : 0

  return (
    <div className={classNames(styles.container, { [styles.selected]: selected }, className)} style={style} role="group" aria-label={label || 'Settings toggle'}>
      {/* 选中态外边框 + 角落装饰 */}
      {selected && (
        <>
          <div className={styles.selectedBorder} />
          <span className={styles.cornerTL} />
          <span className={styles.cornerTR} />
          <span className={styles.cornerBL} />
          <span className={styles.cornerBR} />
        </>
      )}

      {/* 左侧标签 */}
      {label && <span className={styles.label}>{label}</span>}

      {/* 右侧开关区域 */}
      <div className={styles.toggleArea}>
        <div className={styles.toggleBg}>
          <div className={styles.toggleInnerBorder} />
        </div>

        {isMultiOption ? (
          /* 多选模式：◀ 文字 ▶ */
          <div className={styles.multiOption}>
            <button className={styles.arrowBtn} onClick={() => onChange?.(options[Math.max(0, activeIndex - 1)])} aria-label="Previous option">◀</button>
            <span className={styles.optionValue}>{value || options[0]}</span>
            <button className={styles.arrowBtn} onClick={() => onChange?.(options[Math.min(options.length - 1, activeIndex + 1)])} aria-label="Next option">▶</button>
          </div>
        ) : (
          /* 二选模式：ON | OFF */
          <div className={styles.twoOption}>
            {options.map((opt) => (
              <button
                key={opt}
                className={classNames(styles.optionBtn, { [styles.activeOption]: opt === (value || options[0]) })}
                onClick={() => onChange?.(opt)}
              >
                {opt}
              </button>
            ))}
            {/* 高亮滑块 */}
            <div
              className={styles.highlight}
              style={{ left: (value || options[0]) === options[0] ? '6px' : '50%' }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

SettingsToggle.displayName = 'SettingsToggle'
export default SettingsToggle
