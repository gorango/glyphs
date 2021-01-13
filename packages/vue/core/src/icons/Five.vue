
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
          d="M28 64H38C45.732 64 52 57.732 52 50C52 42.268 45.732 36 38 36H29C28.4477 36 28 35.5523 28 35L28 17C28 16.4477 28.4477 16 29 16L48 16"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M28 61C26.3431 61 25 62.3431 25 64C25 65.6569 26.3431 67 28 67V61ZM48 19C49.6569 19 51 17.6569 51 16C51 14.3431 49.6569 13 48 13V19ZM28 67H38V61H28V67ZM31 35L31 17H25L25 35H31ZM29 19L48 19V13L29 13V19ZM38 33H29V39H38V33ZM31 17C31 18.1046 30.1046 19 29 19V13C26.7909 13 25 14.7909 25 17H31ZM25 35C25 37.2091 26.7909 39 29 39V33C30.1046 33 31 33.8954 31 35H25ZM55 50C55 40.6112 47.3888 33 38 33V39C44.0751 39 49 43.9249 49 50L55 50ZM38 67C47.3888 67 55 59.3888 55 50L49 50C49 56.0751 44.0751 61 38 61V67Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M28 62C26.8954 62 26 62.8954 26 64C26 65.1046 26.8954 66 28 66V62ZM48 18C49.1046 18 50 17.1046 50 16C50 14.8954 49.1046 14 48 14V18ZM28 66H38V62H28V66ZM30 35L30 17H26L26 35H30ZM29 18L48 18V14L29 14V18ZM38 34H29V38H38V34ZM30 17C30 17.5523 29.5523 18 29 18V14C27.3431 14 26 15.3431 26 17H30ZM26 35C26 36.6569 27.3431 38 29 38V34C29.5523 34 30 34.4477 30 35H26ZM54 50C54 41.1634 46.8366 34 38 34V38C44.6274 38 50 43.3726 50 50L54 50ZM38 66C46.8366 66 54 58.8366 54 50L50 50C50 56.6274 44.6274 62 38 62V66Z"
          fill="#F2994A"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M28 64H38C45.732 64 52 57.732 52 50C52 42.268 45.732 36 38 36H29C28.4477 36 28 35.5523 28 35V17C28 16.4477 28.4477 16 29 16H48"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M26 64C26 65.1046 26.8954 66 28 66H38C46.8366 66 54 58.8366 54 50C54 41.1634 46.8366 34 38 34H30L30 18L48 18C49.1046 18 50 17.1046 50 16C50 14.8954 49.1046 14 48 14L29 14C27.3431 14 26 15.3431 26 17L26 35C26 36.6569 27.3431 38 29 38H38C44.6274 38 50 43.3726 50 50C50 56.6274 44.6274 62 38 62H28C26.8954 62 26 62.8954 26 64Z"
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
