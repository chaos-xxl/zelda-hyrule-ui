import React from 'react'
import classNames from 'classnames'
import styles from './modalTutorial.module.less'

export interface ModalTutorialProps {
  /** 教程文本内容 */
  text: string
  /** 继续按钮文字 */
  continueLabel?: string
  /** 是否可见 */
  visible?: boolean
  /** 点击继续回调 */
  onContinue?: () => void
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const ModalTutorial: React.FC<ModalTutorialProps> = ({
  text,
  continueLabel = 'Continue',
  visible = true,
  onContinue,
  className,
  style,
}) => {
  if (!visible) return null

  return (
    <div className={classNames(styles.overlay, className)} style={style}>
      <div className={styles.modal}>
        <p className={styles.text}>{text}</p>
        <button className={styles.continueBtn} onClick={onContinue} type="button">
          <span>{continueLabel}</span>
          <svg aria-hidden="true"
            className={styles.arrow}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6H10M10 6L7 3M10 6L7 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

ModalTutorial.displayName = 'ModalTutorial'
export default ModalTutorial
