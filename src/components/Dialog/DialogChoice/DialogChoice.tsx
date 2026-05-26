import React from 'react'
import classNames from 'classnames'
import styles from './dialogChoice.module.less'

export interface DialogChoiceOption { label: string; value: string }
export interface DialogChoiceProps { options: DialogChoiceOption[]; selectedIndex?: number; onSelect?: (value: string, index: number) => void; className?: string; style?: React.CSSProperties }

const DialogChoice: React.FC<DialogChoiceProps> = ({ options, selectedIndex = 0, onSelect, className, style }) => (
  <div className={classNames(styles.container, className)} style={style}>
    {options.map((option, i) => (
      <button key={option.value} className={classNames(styles.option, { [styles.selected]: i === selectedIndex })} onClick={() => onSelect?.(option.value, i)}>
        {i === selectedIndex && <span className={styles.arrow}>▶</span>}
        <span className={styles.label}>{option.label}</span>
      </button>
    ))}
  </div>
)

DialogChoice.displayName = 'DialogChoice'
export default DialogChoice
