
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 80"
    :width="size"
    :height="size"
    :transform="transform"
  >
    <slot></slot>
    <g>      
      <template v-if="variant === 'path'">
        <path
          d="M15.9629 44.1831L37.8416 22.3045C39.0131 21.1329 40.9126 21.1329 42.0842 22.3045L63.9629 44.1831"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M15.9629 60.1831L37.8416 38.3045C39.0131 37.1329 40.9126 37.1329 42.0842 38.3045L63.9629 60.1831"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M16.0371 44.1836L36.8551 23.3656C38.6125 21.6082 41.4617 21.6082 43.2191 23.3656L64.0371 44.1836"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M16.0371 60.1836L36.8551 39.3656C38.6125 37.6082 41.4617 37.6082 43.2191 39.3656L64.0371 60.1836"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M16.0371 44.1836L36.8551 23.3656C38.6125 21.6082 41.4617 21.6082 43.2191 23.3656L64.0371 44.1836"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M16.0371 60.1836L36.8551 39.3656C38.6125 37.6082 41.4617 37.6082 43.2191 39.3656L64.0371 60.1836"
          stroke="#F2C94C"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M15.9629 44.1834L36.7809 23.3654C38.5383 21.608 41.3875 21.608 43.1449 23.3654L63.9629 44.1834M15.9629 60.1834L36.7809 39.3654C38.5383 37.608 41.3875 37.608 43.1449 39.3654L63.9629 60.1834"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M40.7442 22.0619C40.3537 21.6714 39.7205 21.6714 39.33 22.0619L17.4513 43.9406C16.6703 44.7217 15.4039 44.7217 14.6229 43.9406C13.8418 43.1596 13.8418 41.8932 14.6229 41.1122L36.5016 19.2335C38.4542 17.2809 41.62 17.2809 43.5726 19.2335L65.4513 41.1122C66.2324 41.8932 66.2324 43.1596 65.4513 43.9406C64.6703 44.7217 63.4039 44.7217 62.6229 43.9406L40.7442 22.0619Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M40.7442 38.0619C40.3537 37.6714 39.7205 37.6714 39.33 38.0619L17.4513 59.9406C16.6703 60.7217 15.4039 60.7217 14.6229 59.9406C13.8418 59.1596 13.8418 57.8932 14.6229 57.1122L36.5016 35.2335C38.4542 33.2809 41.62 33.2809 43.5726 35.2335L65.4513 57.1122C66.2324 57.8932 66.2324 59.1596 65.4513 59.9406C64.6703 60.7217 63.4039 60.7217 62.6229 59.9406L40.7442 38.0619Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
    </g>
  </svg>
</template>

<script>
import Vue from 'vue'
import { transform } from '../utils'

export default {
  name: 'node_modules/@glyphs/core',

  props: {
    size: { type: String, default: '40', },
    color: { type: String, default: 'currentColor', },
    variant: { type: String, default: '', },
    colors: { type: [String], default: ['#000000', '#C4C4C4'], },
    strokeWidth: { type: String, default: '3', },
    strokeLinecap: { type: String, default: 'round', },
    strokeLinejoin: { type: String, default: 'round', },
    rotate: { type: String, default: '0', },
    flip: { type: String, default: '' }
  },

  computed: {
    transform () {
      return transform(this.rotate, this.flip)
    }
  }
}
</script>
