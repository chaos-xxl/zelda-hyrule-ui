import React from 'react'
import classNames from 'classnames'
import styles from './sheikahSymbol.module.less'
import sheikahSymbolSvg from '@core/assets/svg/sheikah-symbol.svg'

export interface SheikahSymbolProps {
  /** 是否仅显示轮廓 */
  outline?: boolean
  /** 尺寸（默认 380px） */
  size?: number
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const SheikahSymbol: React.FC<SheikahSymbolProps> = ({ outline = true, size = 380, className, style }) => (
  <div className={classNames(styles.container, { [styles.outline]: outline }, className)} style={{ width: size, height: size, ...style }}>
    <img src={sheikahSymbolSvg} alt="Sheikah Symbol" className={styles.symbol} />
  </div>
)

SheikahSymbol.displayName = 'SheikahSymbol'
export default SheikahSymbol
