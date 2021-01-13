
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
          d="M56 64L24 64L24 16"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M24 64H21C21 65.6569 22.3431 67 24 67V64ZM56 67C57.6569 67 59 65.6569 59 64C59 62.3431 57.6569 61 56 61V67ZM27 16C27 14.3431 25.6569 13 24 13C22.3431 13 21 14.3431 21 16H27ZM24 67H56V61L24 61V67ZM27 64V62H21V64H27ZM27 62L27 16H21L21 62H27Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M24 64H22C22 65.1046 22.8954 66 24 66V64ZM56 66C57.1046 66 58 65.1046 58 64C58 62.8954 57.1046 62 56 62V66ZM26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16H26ZM24 66H56V62L24 62V66ZM26 64V62H22V64H26ZM26 62L26 16H22L22 62H26Z"
          fill="#F2994A"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M56 64H24V16"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M24 14C22.8954 14 22 14.8954 22 16L22 64C22 65.1046 22.8954 66 24 66H56C57.1046 66 58 65.1046 58 64C58 62.8954 57.1046 62 56 62L26 62L26 16C26 14.8954 25.1046 14 24 14Z"
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
