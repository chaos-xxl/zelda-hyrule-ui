import React from 'react'
import classNames from 'classnames'
import styles from './dialogFloating.module.less'

export interface DialogFloatingProps {
  text: string
  type?: 'dialog' | 'name'
  className?: string
  style?: React.CSSProperties
}

const FLOATING_BG_PATH = 'M35.0534 0C15.7235 0 0.0534337 15.67 0.0534337 35C0.0534337 42.6033 2.4779 49.6404 6.59591 55.3803C5.01152 59.3704 2.25893 64.2087 0.229117 67.5837C-0.504363 69.0082 0.579748 70.5902 2.67405 69.7205C8.37584 67.3527 11.9815 64.6802 13.9506 62.925C19.8177 67.3657 27.128 70 35.0535 70H275C294.33 70 310 54.33 310 35C310 15.67 294.33 0 275 0H35.0534Z'

const DialogFloating: React.FC<DialogFloatingProps> = ({ text, type = 'dialog', className, style }) => (
  <div className={classNames(styles.container, styles[type], className)} style={style}>
    {type === 'dialog' ? (
      <>
        <svg viewBox="0 0 310 70" fill="none" className={styles.bg} preserveAspectRatio="none">
          <path fillRule="evenodd" clipRule="evenodd" d={FLOATING_BG_PATH} fill="black" fillOpacity="0.5" />
        </svg>
        <span className={styles.text}>{text}</span>
      </>
    ) : (
      <>
        <span className={styles.nameText}>{text}</span>
        <span className={styles.arrow}>▼</span>
      </>
    )}
  </div>
)

DialogFloating.displayName = 'DialogFloating'
export default DialogFloating
