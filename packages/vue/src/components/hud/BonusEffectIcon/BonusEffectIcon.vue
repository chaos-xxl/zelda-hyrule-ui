<script lang="ts">
export type EffectType =
  | 'attackUp' | 'defenseUp' | 'speedUp' | 'heatResist' | 'coldResist' | 'electricResist'
  | 'quietUp' | 'fireResist' | 'durabilityUp' | 'criticalHit' | 'longThrow' | 'climbSpeedUp'
  | 'swimSpeedUp' | 'bonusHeart' | 'staminaUp'

export interface BonusEffectIconProps {
  /** 增益类型 */
  icon: EffectType
  /** 是否显示上升箭头 */
  arrow?: boolean
  /** 尺寸（默认 50px） */
  size?: number
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import styles from '@react/components/hud/BonusEffectIcon/bonusEffectIcon.module.less'
import attackUpSvg from '@core/assets/svg/effect-attack-up.svg'
import defenseUpSvg from '@core/assets/svg/effect-defense-up.svg'
import speedUpSvg from '@core/assets/svg/effect-speed-up.svg'
import heatResistSvg from '@core/assets/svg/effect-heat-resist.svg'
import coldResistSvg from '@core/assets/svg/effect-cold-resist.svg'
import electricResistSvg from '@core/assets/svg/effect-electric-resist.svg'
import quietUpSvg from '@core/assets/svg/effect-quiet-up.svg'
import fireResistSvg from '@core/assets/svg/effect-fire-resist.svg'
import durabilityUpSvg from '@core/assets/svg/effect-durability-up.svg'
import longThrowSvg from '@core/assets/svg/effect-long-throw.svg'
import climbSpeedUpSvg from '@core/assets/svg/effect-climb-speed-up.svg'
import swimSpeedUpSvg from '@core/assets/svg/effect-swim-speed-up.svg'
import bonusHeartSvg from '@core/assets/svg/effect-bonus-heart.svg'
import staminaUpSvg from '@core/assets/svg/effect-stamina-up.svg'

/** criticalHit 复用 attackUp 图标（游戏内同为剑形），与 React 版一致 */
const EFFECT_ICONS: Record<EffectType, string> = {
  attackUp: attackUpSvg,
  criticalHit: attackUpSvg,
  defenseUp: defenseUpSvg,
  speedUp: speedUpSvg,
  heatResist: heatResistSvg,
  coldResist: coldResistSvg,
  electricResist: electricResistSvg,
  quietUp: quietUpSvg,
  fireResist: fireResistSvg,
  durabilityUp: durabilityUpSvg,
  longThrow: longThrowSvg,
  climbSpeedUp: climbSpeedUpSvg,
  swimSpeedUp: swimSpeedUpSvg,
  bonusHeart: bonusHeartSvg,
  staminaUp: staminaUpSvg,
}

const props = withDefaults(defineProps<BonusEffectIconProps>(), { arrow: false, size: 50 })
const src = computed(() => EFFECT_ICONS[props.icon])
</script>

<template>
  <div :class="styles.container" :style="{ width: props.size + 'px', height: props.size + 'px' }">
    <img :src="src" alt="" :class="styles.icon" />
    <svg v-if="props.arrow" aria-hidden="true" viewBox="0 0 10 8" fill="none" :class="styles.arrow">
      <path d="M5 0L10 8H0L5 0Z" fill="white" />
    </svg>
  </div>
</template>
