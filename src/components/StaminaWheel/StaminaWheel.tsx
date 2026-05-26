import React from 'react'
import classNames from 'classnames'
import styles from './staminaWheel.module.less'

export interface StaminaWheelProps {
  /** 当前精力值 (0-1) */
  value: number
  /** 轮盘尺寸（默认 90px，和 Figma 一致） */
  size?: number
  /** 是否为奖励精力 */
  bonus?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/** 从 Figma 导出的精确精力轮路径（环形） */
const STAMINA_RING_PATH = "M60.75 30.375C60.75 47.1506 47.1506 60.75 30.375 60.75C13.5994 60.75 0 47.1506 0 30.375C0 13.5994 13.5994 0 30.375 0C47.1506 0 60.75 13.5994 60.75 30.375ZM19.7438 30.375C19.7438 36.2465 24.5035 41.0062 30.375 41.0062C36.2465 41.0062 41.0062 36.2465 41.0062 30.375C41.0062 24.5035 36.2465 19.7438 30.375 19.7438C24.5035 19.7438 19.7438 24.5035 19.7438 30.375Z"

const StaminaWheel: React.FC<StaminaWheelProps> = ({
  value,
  size = 90,
  bonus = false,
  className,
  style,
}) => {
  const depleted = value <= 0.2 && !bonus
  const angle = Math.max(0, Math.min(1, value)) * 360
  const innerSize = size * 0.675

  // 精力轮颜色
  const fillColor = bonus ? '#FFE465' : depleted ? '#F15050' : '#13FF59'
  const glowColor = bonus
    ? 'rgba(255, 228, 96, 0.6)'
    : depleted
      ? 'rgba(241, 80, 80, 0.6)'
      : 'rgba(19, 255, 89, 0.6)'

  return (
    <div
      className={classNames(
        styles.container,
        { [styles.bonus]: bonus, [styles.depleted]: depleted },
        className
      )}
      style={{ width: size, height: size, ...style }}
    >
      {/* 轨道（黑色半透明环） */}
      <svg
        className={styles.track}
        viewBox="0 0 60.75 60.75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: innerSize, height: innerSize }}
      >
        <path d={STAMINA_RING_PATH} fill="black" fillOpacity="0.6" />
      </svg>

      {/* 填充环（用 conic-gradient mask 控制比例） */}
      <div
        className={styles.wheelWrapper}
        style={{
          width: innerSize,
          height: innerSize,
          maskImage: `conic-gradient(from -90deg, black ${angle}deg, transparent ${angle}deg)`,
          WebkitMaskImage: `conic-gradient(from -90deg, black ${angle}deg, transparent ${angle}deg)`,
        }}
      >
        <svg
          className={styles.wheel}
          viewBox="0 0 60.75 60.75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: '100%',
            height: '100%',
            filter: `drop-shadow(0 0 4px ${glowColor})`,
          }}
        >
          <path d={STAMINA_RING_PATH} fill={fillColor} />
        </svg>
      </div>
    </div>
  )
}

StaminaWheel.displayName = 'StaminaWheel'
export default StaminaWheel
