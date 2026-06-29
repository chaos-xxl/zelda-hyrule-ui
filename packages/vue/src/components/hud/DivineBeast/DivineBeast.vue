<script lang="ts">
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
}

/** 精确还原 Figma 中的神兽辉光色（与 React 版同源） */
const BEAST_SHADOWS: Record<BeastType, string> = {
  ruta: '0 0 4px #27CBFF, 0 0 5px #27CBFF, 0 0 15px #27CBFF',
  medoh: '0 0 4px #7CFF4E, 0 0 5px #7CFF4E, 0 0 15px #7CFF4E',
  naboris: '0 0 4px #FCC63D, 0 0 5px #F8AF42, 0 0 15px #BD8B28',
  rudania: '0 0 4px #EB4713, 0 0 5px #EB4815, 0 0 15px #EC4916',
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import styles from '@react/components/hud/DivineBeast/divineBeast.module.less'
import beastRutaSvg from '@core/assets/svg/beast-ruta.svg'
import beastMedohSvg from '@core/assets/svg/beast-medoh.svg'
import beastNaborisSvg from '@core/assets/svg/beast-naboris.svg'
import beastRudaniaSvg from '@core/assets/svg/beast-rudania.svg'

const BEAST_SVGS: Record<BeastType, string> = {
  ruta: beastRutaSvg,
  medoh: beastMedohSvg,
  naboris: beastNaborisSvg,
  rudania: beastRudaniaSvg,
}

const props = withDefaults(defineProps<DivineBeastProps>(), { recharging: false, charges: 1, size: 75 })
const shadow = computed(() =>
  props.recharging ? '0 0 4px #FF0000, 0 0 5px #FF0000, 0 0 15px #FF0000' : BEAST_SHADOWS[props.beast]
)
</script>

<template>
  <div
    :class="[styles.container, { [styles.recharging]: props.recharging }]"
    :style="{ width: props.size + 'px', height: props.size + 'px', boxShadow: shadow }"
  >
    <img :src="BEAST_SVGS[props.beast]" alt="" :class="styles.icon" />
    <span v-if="props.charges > 0" :class="styles.charges">
      <span :class="styles.times">×</span>
      <span :class="styles.count">{{ props.charges }}</span>
    </span>
  </div>
</template>
