import React from 'react'
import classNames from 'classnames'
import styles from './statusHealing.module.less'

export type HealingType = '5+Hearts' | '5Hearts' | '4Hearts' | '3Hearts' | '2Hearts' | '1Hearts' | '0Hearts' | 'fullRecovery' | 'bonusHearts' | 'stamina'

export interface StatusHealingProps {
  /** 治疗类型 */
  type: HealingType
  className?: string
  style?: React.CSSProperties
}

const HEART_PATH = 'M21.7675 12.7969L12.1037 21.7487L2.05872 11.598C-0.686241 8.82416 -0.686239 4.35741 2.05872 1.58356C4.14815 -0.527857 7.55918 -0.527854 9.64861 1.58357L12.1037 4.06447L14.0676 2.0798C16.3794 -0.256337 20.1909 -0.129535 22.3423 2.35509C24.9973 5.42139 24.7431 10.0406 21.7675 12.7969Z'

const HEART_COUNTS: Record<HealingType, number> = {
  '5+Hearts': 6, '5Hearts': 5, '4Hearts': 4, '3Hearts': 3, '2Hearts': 2, '1Hearts': 1, '0Hearts': 0,
  fullRecovery: 7, bonusHearts: 4, stamina: 0,
}

const StatusHealing: React.FC<StatusHealingProps> = ({ type, className, style }) => {
  const count = HEART_COUNTS[type]
  const isBonus = type === 'bonusHearts'
  const isStamina = type === 'stamina'

  return (
    <div className={classNames(styles.container, className)} style={style}>
      {isStamina ? (
        <svg aria-hidden="true" width="30" height="30" viewBox="0 0 60.75 60.75" fill="none">
          <path d="M60.75 30.375C60.75 47.1506 47.1506 60.75 30.375 60.75C13.5994 60.75 0 47.1506 0 30.375C0 13.5994 13.5994 0 30.375 0C47.1506 0 60.75 13.5994 60.75 30.375ZM19.7438 30.375C19.7438 36.2465 24.5035 41.0062 30.375 41.0062C36.2465 41.0062 41.0062 36.2465 41.0062 30.375C41.0062 24.5035 36.2465 19.7438 30.375 19.7438C24.5035 19.7438 19.7438 24.5035 19.7438 30.375Z" fill="#13FF59" />
        </svg>
      ) : (
        Array.from({ length: Math.min(count, 6) }, (_, i) => (
          <svg aria-hidden="true" key={i} width="24" height="20" viewBox="0 0 24.18 21.75" fill="none">
            <path d={HEART_PATH} fill={isBonus ? '#FFE465' : '#F1362F'} />
          </svg>
        ))
      )}
      {type === 'fullRecovery' && <span className={styles.plus}>+</span>}
    </div>
  )
}

StatusHealing.displayName = 'StatusHealing'
export default StatusHealing
