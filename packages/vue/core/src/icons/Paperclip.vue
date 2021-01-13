
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
          d="M52 24.5L52 60C52 66.6274 46.6274 72 40 72V72C33.3726 72 28 66.6274 28 60L28 17C28 12.0294 32.0294 8 37 8V8C41.9706 8 46 12.0294 46 17L46 53C46 56.3137 43.3137 59 40 59V59C36.6863 59 34 56.3137 34 53L34 24.5"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M52.1128 24.6127L52.1128 60.1127C52.1128 66.7401 46.7402 72.1127 40.1128 72.1127V72.1127C33.4854 72.1127 28.1128 66.7401 28.1128 60.1127L28.1128 17.1127C28.1128 12.1421 32.1422 8.1127 37.1128 8.1127V8.1127C42.0834 8.1127 46.1128 12.1421 46.1128 17.1127V53.1127C46.1128 56.4264 43.4265 59.1127 40.1128 59.1127V59.1127C36.7991 59.1127 34.1128 56.4264 34.1128 53.1127L34.1128 24.6127"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M52.1128 24.6127L52.1128 60.1127C52.1128 66.7401 46.7402 72.1127 40.1128 72.1127V72.1127C33.4854 72.1127 28.1128 66.7401 28.1128 60.1127L28.1128 17.1127C28.1128 12.1421 32.1422 8.1127 37.1128 8.1127V8.1127C42.0834 8.1127 46.1128 12.1421 46.1128 17.1127V53.1127C46.1128 56.4264 43.4265 59.1127 40.1128 59.1127V59.1127C36.7991 59.1127 34.1128 56.4264 34.1128 53.1127L34.1128 24.6127"
          stroke="#2F80ED"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M52 24.5V60C52 66.6274 46.6274 72 40 72C33.3726 72 28 66.6274 28 60V17C28 12.0294 32.0294 8 37 8C41.9706 8 46 12.0294 46 17V53C46 56.3137 43.3137 59 40 59C36.6863 59 34 56.3137 34 53V24.5"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M26.1128 17.1127C26.1128 11.0375 31.0377 6.11267 37.1128 6.11267C43.1879 6.11267 48.1128 11.0375 48.1128 17.1127V53.1127C48.1128 57.5309 44.5311 61.1127 40.1128 61.1127C35.6945 61.1127 32.1128 57.5309 32.1128 53.1127V24.6127C32.1128 23.5081 33.0082 22.6127 34.1128 22.6127C35.2174 22.6127 36.1128 23.5081 36.1128 24.6127V53.1127C36.1128 55.3218 37.9037 57.1127 40.1128 57.1127C42.3219 57.1127 44.1128 55.3218 44.1128 53.1127V17.1127C44.1128 13.2467 40.9788 10.1127 37.1128 10.1127C33.2468 10.1127 30.1128 13.2467 30.1128 17.1127V60.1127C30.1128 65.6355 34.5899 70.1127 40.1128 70.1127C45.6356 70.1127 50.1128 65.6355 50.1128 60.1127V24.6127C50.1128 23.5081 51.0082 22.6127 52.1128 22.6127C53.2174 22.6127 54.1128 23.5081 54.1128 24.6127V60.1127C54.1128 67.8447 47.8448 74.1127 40.1128 74.1127C32.3808 74.1127 26.1128 67.8447 26.1128 60.1127V17.1127Z"
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
