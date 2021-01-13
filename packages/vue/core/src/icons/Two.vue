
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
          d="M30 16L40.8754 16C47.0193 16 52 20.9807 52 27.1246C52 31.3383 49.6193 35.1903 45.8505 37.0748L40 40C32.6456 43.6772 28 51.1939 28 59.4164V63C28 63.5523 28.4477 64 29 64L52 64"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M30 13C28.3431 13 27 14.3431 27 16C27 17.6569 28.3431 19 30 19V13ZM52 67C53.6569 67 55 65.6569 55 64C55 62.3431 53.6569 61 52 61V67ZM45.8505 37.0748L47.1921 39.758L45.8505 37.0748ZM40 40L38.6584 37.3167H38.6584L40 40ZM30 19L40.8754 19V13L30 13V19ZM29 67H52V61L29 61V67ZM44.5088 34.3915L38.6584 37.3167L41.3416 42.6833L47.1921 39.758L44.5088 34.3915ZM25 59.4164V63H31V59.4164H25ZM29 61C30.1046 61 31 61.8954 31 63H25C25 65.2091 26.7909 67 29 67V61ZM38.6584 37.3167C30.2876 41.5021 25 50.0576 25 59.4164H31C31 52.3303 35.0036 45.8523 41.3416 42.6833L38.6584 37.3167ZM49 27.1246C49 30.202 47.2613 33.0152 44.5088 34.3915L47.1921 39.758C51.9773 37.3655 55 32.4746 55 27.1246H49ZM40.8754 19C45.3625 19 49 22.6375 49 27.1246H55C55 19.3238 48.6762 13 40.8754 13V19Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M30 14C28.8954 14 28 14.8954 28 16C28 17.1046 28.8954 18 30 18V14ZM52 66C53.1046 66 54 65.1046 54 64C54 62.8954 53.1046 62 52 62V66ZM45.8505 37.0748L46.7449 38.8636L45.8505 37.0748ZM40 40L39.1056 38.2111L40 40ZM30 18L40.8754 18V14L30 14V18ZM29 66H52V62L29 62V66ZM44.956 35.2859L39.1056 38.2111L40.8944 41.7889L46.7449 38.8636L44.956 35.2859ZM26 59.4164V63H30V59.4164H26ZM29 62C29.5523 62 30 62.4477 30 63H26C26 64.6569 27.3431 66 29 66V62ZM39.1056 38.2111C31.0736 42.2271 26 50.4364 26 59.4164H30C30 51.9515 34.2176 45.1273 40.8944 41.7889L39.1056 38.2111ZM50 27.1246C50 30.5808 48.0473 33.7403 44.956 35.2859L46.7449 38.8636C51.1913 36.6404 54 32.0958 54 27.1246H50ZM40.8754 18C45.9148 18 50 22.0852 50 27.1246H54C54 19.8761 48.1239 14 40.8754 14V18Z"
          fill="#219653"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M30 16H40.8754C47.0193 16 52 20.9807 52 27.1246C52 31.3383 49.6193 35.1903 45.8505 37.0748L40 40C32.6456 43.6772 28 51.1939 28 59.4164V63C28 63.5523 28.4477 64 29 64H52"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M28 16C28 14.8954 28.8954 14 30 14L40.8754 14C48.1239 14 54 19.8761 54 27.1246C54 32.0958 51.1913 36.6404 46.7449 38.8636L40.8944 41.7889C34.2176 45.1273 30 51.9515 30 59.4164V62L52 62C53.1046 62 54 62.8954 54 64C54 65.1046 53.1046 66 52 66H29C27.3431 66 26 64.6569 26 63V59.4164C26 50.4364 31.0736 42.2271 39.1056 38.2111L44.956 35.2859C48.0473 33.7403 50 30.5808 50 27.1246C50 22.0852 45.9148 18 40.8754 18L30 18C28.8954 18 28 17.1046 28 16Z"
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
