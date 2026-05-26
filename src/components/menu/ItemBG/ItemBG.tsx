import React from 'react'
import classNames from 'classnames'
import styles from './itemBG.module.less'

export type ItemBGState = 'empty' | 'filled' | 'selected' | 'equipped' | 'sheikahSelect'

export interface ItemBGProps {
  /** 物品格子状态 */
  state?: ItemBGState
  /** 尺寸（默认 130px） */
  size?: number
  /** 子元素（物品图标） */
  children?: React.ReactNode
  /** 点击回调 */
  onClick?: () => void
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

/** 角落装饰 SVG（12×12px，精确还原 Figma） */
const CornerSVG: React.FC<{ rotation: number }> = ({ rotation }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    <path d="M12 0V12H0L12 0Z" fill="#E2DED3" />
  </svg>
)

const ItemBG: React.FC<ItemBGProps> = ({
  state = 'empty',
  size = 130,
  children,
  onClick,
  className,
  style,
}) => {
  const isSelected = state === 'selected' || state === 'sheikahSelect'

  return (
    <div
      className={classNames(styles.container, styles[state], className)}
      style={{ width: size, height: size, ...style }}
      onClick={onClick}
    >
      {/* 内层边框 */}
      <div className={styles.innerBorder} />

      {/* 选中态角落装饰 */}
      {isSelected && (
        <>
          <span className={styles.cornerTR}><CornerSVG rotation={-90} /></span>
          <span className={styles.cornerTL}><CornerSVG rotation={180} /></span>
          <span className={styles.cornerBL}><CornerSVG rotation={90} /></span>
          <span className={styles.cornerBR}><CornerSVG rotation={0} /></span>
        </>
      )}

      {/* 物品内容 */}
      {children && <div className={styles.content}>{children}</div>}
    </div>
  )
}

ItemBG.displayName = 'ItemBG'
export default ItemBG
