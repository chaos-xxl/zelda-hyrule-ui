import React from 'react'
import classNames from 'classnames'
import styles from './textOrnamentCorner.module.less'

export type CornerPosition = 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft'

export interface TextOrnamentCornerProps {
  /** 角落位置 */
  position?: CornerPosition
  /** 是否显示 Triforce 装饰 */
  showTriforce?: boolean
  /** 尺寸 */
  size?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const TextOrnamentCorner: React.FC<TextOrnamentCornerProps> = ({
  position = 'topLeft',
  showTriforce = false,
  size = 24,
  className,
  style,
}) => {
  const cls = classNames(
    styles.corner,
    styles[position],
    { [styles.triforce]: showTriforce },
    className
  )

  return (
    <div className={cls} style={{ width: size, height: size, ...style }}>
      <svg
        className={styles.svg}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Corner L-shape */}
        <path
          d="M2 2V10M2 2H10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Decorative dot */}
        <circle cx="2" cy="2" r="1.5" fill="currentColor" fillOpacity={0.8} />
        {showTriforce && (
          <>
            {/* Small triforce in corner */}
            <path
              d="M14 14L18 22H10L14 14Z"
              fill="currentColor"
              fillOpacity={0.6}
            />
            <path
              d="M10 22L6 22L8 18L10 22Z"
              fill="currentColor"
              fillOpacity={0.4}
            />
            <path
              d="M18 22L22 22L20 18L18 22Z"
              fill="currentColor"
              fillOpacity={0.4}
            />
          </>
        )}
      </svg>
    </div>
  )
}

TextOrnamentCorner.displayName = 'TextOrnamentCorner'
export default TextOrnamentCorner
