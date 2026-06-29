<script lang="ts">
export type SoundLevel = 'low' | 'high'

export interface SoundMeterProps {
  /** 声音等级 */
  level?: SoundLevel
  /** 尺寸（默认 50px） */
  size?: number
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import styles from '@react/components/hud/SoundMeter/soundMeter.module.less'
import soundBgSvg from '@core/assets/svg/sound-bg.svg'
import soundMeterLowSvg from '@core/assets/svg/sound-meter-low.svg'
import soundMeterHighSvg from '@core/assets/svg/sound-meter-high.svg'

const props = withDefaults(defineProps<SoundMeterProps>(), { level: 'low', size: 50 })
const meter = computed(() => (props.level === 'high' ? soundMeterHighSvg : soundMeterLowSvg))
</script>

<template>
  <div :class="styles.container" :style="{ width: props.size + 'px', height: props.size + 'px' }">
    <img :src="soundBgSvg" alt="" :class="styles.bg" />
    <img :src="meter" alt="" :class="styles.meter" />
  </div>
</template>
