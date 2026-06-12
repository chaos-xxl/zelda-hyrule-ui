import React from 'react'
import classNames from 'classnames'
import styles from './logo.module.less'

export type LogoVariant = 'full' | 'mark'

export interface LogoProps {
  /** Logo 变体 */
  variant?: LogoVariant
  /** 宽度 */
  width?: number
  /** 高度 */
  height?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  width,
  height,
  className,
  style,
}) => {
  const cls = classNames(styles.logo, styles[variant], className)
  const defaultWidth = variant === 'full' ? 200 : 48
  const defaultHeight = variant === 'full' ? 80 : 48
  const w = width ?? defaultWidth
  const h = height ?? defaultHeight

  return (
    <div className={cls} style={{ width: w, height: h, ...style }}>
      {variant === 'full' ? (
        <svg aria-hidden="true"
          className={styles.svg}
          viewBox="0 0 200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Triforce mark */}
          <path
            d="M100 8L108 22H92L100 8Z"
            fill="currentColor"
            fillOpacity={0.9}
          />
          <path
            d="M92 22L84 36H100L92 22Z"
            fill="currentColor"
            fillOpacity={0.7}
          />
          <path
            d="M108 22L100 36H116L108 22Z"
            fill="currentColor"
            fillOpacity={0.7}
          />
          {/* Stylized wordmark — deliberately NOT the official Zelda logo artwork
              (trademark-safe; see ATTRIBUTION.md). Generic serif lettering only. */}
          <text
            x="100"
            y="58"
            textAnchor="middle"
            fontFamily="Hylia Serif, Cinzel, serif"
            fontSize="18"
            fontWeight="700"
            fill="currentColor"
            letterSpacing="0.15em"
          >
            ZELDA
          </text>
          <text
            x="100"
            y="74"
            textAnchor="middle"
            fontFamily="Roboto, sans-serif"
            fontSize="8"
            fontWeight="500"
            fontStyle="italic"
            fill="currentColor"
            fillOpacity={0.6}
            letterSpacing="0.3em"
          >
            BREATH OF THE WILD
          </text>
        </svg>
      ) : (
        <svg aria-hidden="true"
          className={styles.svg}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Triforce mark only */}
          <path
            d="M24 6L34 24H14L24 6Z"
            fill="currentColor"
            fillOpacity={0.9}
          />
          <path
            d="M14 24L4 42H24L14 24Z"
            fill="currentColor"
            fillOpacity={0.7}
          />
          <path
            d="M34 24L24 42H44L34 24Z"
            fill="currentColor"
            fillOpacity={0.7}
          />
        </svg>
      )}
    </div>
  )
}

Logo.displayName = 'Logo'
export default Logo
