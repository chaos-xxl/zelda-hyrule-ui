import React from 'react'
import classNames from 'classnames'
import styles from './numberInput.module.less'

export interface NumberInputProps {
  /** 当前值 */
  value: number
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 变更回调 */
  onChange?: (value: number) => void
  className?: string
  style?: React.CSSProperties
}

const NumberInput: React.FC<NumberInputProps> = ({ value, min = 1, max = 99, onChange, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    <button className={styles.btn} onClick={() => onChange?.(Math.max(min, value - 1))}>▼</button>
    <span className={styles.value}>{value}</span>
    <button className={styles.btn} onClick={() => onChange?.(Math.min(max, value + 1))}>▲</button>
  </div>
)

NumberInput.displayName = 'NumberInput'
export default NumberInput
