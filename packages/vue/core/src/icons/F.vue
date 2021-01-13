
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
          d="M56 16L24 16L24 64"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M24 40L49 40"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M56 19C57.6569 19 59 17.6569 59 16C59 14.3431 57.6569 13 56 13V19ZM24 16V13C22.3431 13 21 14.3431 21 16H24ZM21 64C21 65.6569 22.3431 67 24 67C25.6569 67 27 65.6569 27 64H21ZM24 37C22.3431 37 21 38.3431 21 40C21 41.6569 22.3431 43 24 43V37ZM49 43C50.6569 43 52 41.6569 52 40C52 38.3431 50.6569 37 49 37V43ZM56 13L24 13V19L56 19V13ZM21 16V16.5H27V16H21ZM21 63.5V64H27V63.5H21ZM21 16.5L21 40H27L27 16.5H21ZM21 40L21 63.5H27L27 40H21ZM24 43H49V37H24V43Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M56 18C57.1046 18 58 17.1046 58 16C58 14.8954 57.1046 14 56 14V18ZM24 16V14C22.8954 14 22 14.8954 22 16H24ZM22 64C22 65.1046 22.8954 66 24 66C25.1046 66 26 65.1046 26 64H22ZM24 38C22.8954 38 22 38.8954 22 40C22 41.1046 22.8954 42 24 42V38ZM49 42C50.1046 42 51 41.1046 51 40C51 38.8954 50.1046 38 49 38V42ZM56 14L24 14V18L56 18V14ZM22 16V16.5H26V16H22ZM22 63.5V64H26V63.5H22ZM22 16.5L22 40H26L26 16.5H22ZM22 40L22 63.5H26L26 40H22ZM24 42H49V38H24V42Z"
          fill="#2F80ED"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M56 16H24V40M24 64V40M24 40H49"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M24 14C22.8954 14 22 14.8954 22 16L22 64C22 65.1046 22.8954 66 24 66C25.1046 66 26 65.1046 26 64L26 42H49C50.1046 42 51 41.1046 51 40C51 38.8954 50.1046 38 49 38H26L26 18L56 18C57.1046 18 58 17.1046 58 16C58 14.8954 57.1046 14 56 14L24 14Z"
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
