import React from 'react'
import classNames from 'classnames'
import styles from './aimingReticle.module.less'

export type AimingReticleVariant = 'bow' | 'sheikahAbility'

export interface AimingReticleProps {
  /** 准星变体 */
  variant?: AimingReticleVariant
  /** 尺寸 */
  size?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const AimingReticle: React.FC<AimingReticleProps> = ({
  variant = 'bow',
  size = 64,
  className,
  style,
}) => {
  const cls = classNames(styles.reticle, styles[variant], className)

  return (
    <div className={cls} style={{ width: size, height: size, ...style }}>
      <svg aria-hidden="true"
        className={styles.icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 外圈 */}
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" strokeOpacity={0.6} />
        {/* 内圈 */}
        <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="1" strokeOpacity={0.8} />
        {/* 中心点 */}
        <circle cx="32" cy="32" r="2" fill="currentColor" />
        {/* 十字线 */}
        <line x1="32" y1="4" x2="32" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="44" x2="32" y2="60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="32" x2="20" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="44" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* 对角标记（仅 sheikahAbility） */}
        {variant === 'sheikahAbility' && (
          <>
            <line x1="10" y1="10" x2="18" y2="18" stroke="currentColor" strokeWidth="1" strokeOpacity={0.5} />
            <line x1="54" y1="10" x2="46" y2="18" stroke="currentColor" strokeWidth="1" strokeOpacity={0.5} />
            <line x1="10" y1="54" x2="18" y2="46" stroke="currentColor" strokeWidth="1" strokeOpacity={0.5} />
            <line x1="54" y1="54" x2="46" y2="46" stroke="currentColor" strokeWidth="1" strokeOpacity={0.5} />
          </>
        )}
      </svg>
    </div>
  )
}

AimingReticle.displayName = 'AimingReticle'
export default AimingReticle
