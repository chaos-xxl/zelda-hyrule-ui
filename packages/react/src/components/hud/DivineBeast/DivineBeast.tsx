import React from 'react'
import classNames from 'classnames'
import styles from './divineBeast.module.less'
import beastRutaSvg from '@core/assets/svg/beast-ruta.svg'
import beastMedohSvg from '@core/assets/svg/beast-medoh.svg'
import beastNaborisSvg from '@core/assets/svg/beast-naboris.svg'
import beastRudaniaSvg from '@core/assets/svg/beast-rudania.svg'

export type BeastType = 'ruta' | 'medoh' | 'naboris' | 'rudania'

export interface DivineBeastProps {
  /** 神兽类型 */
  beast: BeastType
  /** 是否充能中 */
  recharging?: boolean
  /** 可用次数 */
  charges?: number
  /** 尺寸（默认 75px） */
  size?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const BEAST_SVGS: Record<BeastType, string> = {
  ruta: beastRutaSvg,
  medoh: beastMedohSvg,
  naboris: beastNaborisSvg,
  rudania: beastRudaniaSvg,
}

/** 精确还原 Figma 中的神兽辉光色 */
const BEAST_SHADOWS: Record<BeastType, string> = {
  ruta: '0 0 4px #27CBFF, 0 0 5px #27CBFF, 0 0 15px #27CBFF',
  medoh: '0 0 4px #7CFF4E, 0 0 5px #7CFF4E, 0 0 15px #7CFF4E',
  naboris: '0 0 4px #FCC63D, 0 0 5px #F8AF42, 0 0 15px #BD8B28',
  rudania: '0 0 4px #EB4713, 0 0 5px #EB4815, 0 0 15px #EC4916',
}

const DivineBeast: React.FC<DivineBeastProps> = ({
  beast,
  recharging = false,
  charges = 1,
  size = 75,
  className,
  style,
}) => {
  const shadow = recharging
    ? '0 0 4px #FF0000, 0 0 5px #FF0000, 0 0 15px #FF0000'
    : BEAST_SHADOWS[beast]

  return (
    <div
      className={classNames(styles.container, { [styles.recharging]: recharging }, className)}
      style={{ width: size, height: size, boxShadow: shadow, ...style }}
    >
      <img src={BEAST_SVGS[beast]} alt="" className={styles.icon} />
      {charges > 0 && (
        <span className={styles.charges}>
          <span className={styles.times}>×</span>
          <span className={styles.count}>{charges}</span>
        </span>
      )}
    </div>
  )
}

DivineBeast.displayName = 'DivineBeast'
export default DivineBeast
