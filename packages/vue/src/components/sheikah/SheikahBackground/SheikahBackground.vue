<script lang="ts">
export type SheikahBgColor = 'darkBlue' | 'blueGrey'

export interface SheikahBackgroundProps {
  /** 背景色调 */
  color?: SheikahBgColor
}
</script>

<script setup lang="ts">
import styles from '@react/components/sheikah/SheikahBackground/sheikahBackground.module.less'
import bgTexture from '@core/assets/img/sheikah-bg-dark.png'

const props = withDefaults(defineProps<SheikahBackgroundProps>(), {
  color: 'darkBlue',
})
</script>

<template>
  <div :class="[styles.container, styles[props.color]]">
    <div :class="styles.texture" :style="{ backgroundImage: `url(${bgTexture})` }" />
    <div :class="styles.content"><slot /></div>
  </div>
</template>
