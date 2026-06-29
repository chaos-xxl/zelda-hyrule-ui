<script lang="ts">
export type AbilityType = 'roundBomb' | 'cubeBomb' | 'magnesis' | 'stasis' | 'cryonis' | 'camera'

export interface SheikahAbilityProps {
  /** 能力类型 */
  ability: AbilityType
  /** 是否充能中 */
  recharging?: boolean
  /** 是否 Plus 版本 */
  plus?: boolean
  /** 尺寸（默认 70px） */
  size?: number
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import styles from '@react/components/hud/SheikahAbility/sheikahAbility.module.less'
import roundBombPlusSvg from '@core/assets/svg/ability-round-bomb-plus.svg'
import roundBombSvg from '@core/assets/svg/ability-round-bomb.svg'
import cubeBombSvg from '@core/assets/svg/ability-cube-bomb.svg'
import cameraSvg from '@core/assets/svg/ability-camera.svg'
import stasisSvg from '@core/assets/svg/ability-stasis.svg'
import cryonisSvg from '@core/assets/svg/ability-cryonis.svg'
import magnesisSvg from '@core/assets/svg/ability-magnesis.svg'

const ABILITY_SVGS: Record<AbilityType, string> = {
  roundBomb: roundBombSvg,
  cubeBomb: cubeBombSvg,
  magnesis: magnesisSvg,
  stasis: stasisSvg,
  cryonis: cryonisSvg,
  camera: cameraSvg,
}
const ABILITY_PLUS_SVGS: Record<AbilityType, string> = {
  roundBomb: roundBombPlusSvg,
  cubeBomb: cubeBombSvg,
  magnesis: magnesisSvg,
  stasis: stasisSvg,
  cryonis: cryonisSvg,
  camera: cameraSvg,
}

const props = withDefaults(defineProps<SheikahAbilityProps>(), { recharging: false, plus: false, size: 70 })
const src = computed(() => (props.plus ? ABILITY_PLUS_SVGS[props.ability] : ABILITY_SVGS[props.ability]))
</script>

<template>
  <div
    :class="[styles.container, { [styles.recharging]: props.recharging }]"
    :style="{ width: props.size + 'px', height: props.size + 'px' }"
  >
    <img :src="src" alt="" :class="styles.icon" />
    <span v-if="props.plus" :class="styles.plusBadge">+</span>
    <div v-if="props.recharging" :class="styles.rechargeOverlay" />
  </div>
</template>
