import React from 'react'
import classNames from 'classnames'
import styles from './button.module.less'

export type ButtonVariant = 'primary' | 'sheikah' | 'ghost' | 'danger'
export type ButtonSize = 'small' | 'middle' | 'large'

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** 按钮变体 */
  variant?: ButtonVariant
  /** 按钮尺寸 */
  size?: ButtonSize
  /** HTML button type */
  htmlType?: 'submit' | 'reset' | 'button'
  /** 是否占满宽度 */
  block?: boolean
  /** 加载状态 */
  loading?: boolean
  /** 禁用 */
  disabled?: boolean
  /** 图标 */
  icon?: React.ReactNode
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'middle',
  htmlType = 'button',
  block = false,
  loading = false,
  disabled = false,
  icon,
  children,
  className,
  style,
  ...rest
}) => {
  const cls = classNames(
    styles.button,
    styles[variant],
    styles[size],
    {
      [styles.block]: block,
      [styles.loading]: loading,
      [styles.disabled]: disabled,
    },
    className
  )

  return (
    <button
      className={cls}
      style={style}
      type={htmlType}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <span className={styles.spinner} />}
      {icon && !loading && <span className={styles.icon}>{icon}</span>}
      {children && <span className={styles.content}>{children}</span>}
    </button>
  )
}

Button.displayName = 'Button'
export default Button
