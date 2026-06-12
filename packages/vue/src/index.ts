// ============================================
// zelda-hyrule-ui-vue - Component Exports
// props API 与 React 版（zelda-hyrule-ui）1:1 对齐：
// 同名、同枚举、同默认值；回调 → emit；children/icon/footer → slot
// ============================================

// 全局字体声明（随包发布，确保标题字体 Hylia Serif 可用）
import '@core/styles/fonts.less'

// --- Common Components ---
export { default as Button } from './components/Button'
export { default as Card } from './components/Card'
export { default as Dialog } from './components/Dialog'
export { default as Modal } from './components/Modal'
export { default as Divider } from './components/Divider'
export { default as Loading } from './components/Loading'

// --- HUD Components ---
export { default as HealthBar } from './components/HealthBar'
export { default as StaminaWheel } from './components/StaminaWheel'

// --- Sheikah Components ---
export { default as SheikahBackground } from './components/sheikah/SheikahBackground'
export { default as SheikahScanlines } from './components/sheikah/SheikahScanlines'
export { default as SheikahSymbol } from './components/sheikah/SheikahSymbol'

// --- Types ---
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button'
export type { CardProps, CardVariant } from './components/Card'
export type { DialogProps, DialogType } from './components/Dialog'
export type { ModalProps } from './components/Modal'
export type { DividerProps, DividerVariant } from './components/Divider'
export type { LoadingProps } from './components/Loading'
export type { HealthBarProps } from './components/HealthBar'
export type { StaminaWheelProps } from './components/StaminaWheel'
export type { SheikahBackgroundProps, SheikahBgColor } from './components/sheikah/SheikahBackground'
export type { SheikahScanlinesProps } from './components/sheikah/SheikahScanlines'
export type { SheikahSymbolProps } from './components/sheikah/SheikahSymbol'
