import React from 'react'
import classNames from 'classnames'
import styles from './illustration.module.less'
import swordSvg from '@core/assets/svg/illustration-sword.svg'
import rupeeSvg from '@core/assets/svg/illustration-rupee.svg'
import slateSvg from '@core/assets/svg/illustration-slate.svg'
import memoriesSvg from '@core/assets/svg/illustration-memories.svg'

export type IllustrationType = 'sword' | 'rupee' | 'slate' | 'memories'

export interface IllustrationProps {
  /** 插画类型 */
  illustration: IllustrationType
  /** 透明度（默认 0.6） */
  opacity?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const ILLUSTRATION_SVGS: Record<IllustrationType, string> = {
  sword: swordSvg,
  rupee: rupeeSvg,
  slate: slateSvg,
  memories: memoriesSvg,
}

/**
 * 塞尔达主题装饰插画 — 适合用作背景、留白区域装饰、PPT 背景等。
 * 4 种变体：剑（Master Sword）、卢比、希卡之石、回忆花。
 * 从 Figma node 174:17614 精确导出。
 */
const Illustration: React.FC<IllustrationProps> = ({
  illustration,
  opacity = 0.6,
  className,
  style,
}) => (
  <div className={classNames(styles.container, className)} style={style}>
    <img
      src={ILLUSTRATION_SVGS[illustration]}
      alt=""
      className={styles.image}
      style={{ opacity }}
    />
  </div>
)

Illustration.displayName = 'Illustration'
export default Illustration
