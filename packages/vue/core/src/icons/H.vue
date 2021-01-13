
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
          d="M56 64L56 16M24 64L24 16"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M24 40L56 40"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M53 64C53 65.6569 54.3431 67 56 67C57.6569 67 59 65.6569 59 64H53ZM59 16C59 14.3431 57.6569 13 56 13C54.3431 13 53 14.3431 53 16H59ZM21 64C21 65.6569 22.3431 67 24 67C25.6569 67 27 65.6569 27 64H21ZM27 16C27 14.3431 25.6569 13 24 13C22.3431 13 21 14.3431 21 16H27ZM24 37C22.3431 37 21 38.3431 21 40C21 41.6569 22.3431 43 24 43V37ZM56 43C57.6569 43 59 41.6569 59 40C59 38.3431 57.6569 37 56 37L56 43ZM59 64L59 16H53L53 64H59ZM27 64L27 16H21L21 64H27ZM24 43H56L56 37H24V43Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M54 64C54 65.1046 54.8954 66 56 66C57.1046 66 58 65.1046 58 64H54ZM58 16C58 14.8954 57.1046 14 56 14C54.8954 14 54 14.8954 54 16H58ZM22 64C22 65.1046 22.8954 66 24 66C25.1046 66 26 65.1046 26 64H22ZM26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16H26ZM24 38C22.8954 38 22 38.8954 22 40C22 41.1046 22.8954 42 24 42V38ZM56 42C57.1046 42 58 41.1046 58 40C58 38.8954 57.1046 38 56 38L56 42ZM58 64L58 16H54L54 64H58ZM26 64L26 16H22L22 64H26ZM24 42H56L56 38H24V42Z"
          fill="#F2994A"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M56 64V16M24 64V16M24 40H56"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16L22 64C22 65.1046 22.8954 66 24 66C25.1046 66 26 65.1046 26 64L26 42H54V64C54 65.1046 54.8954 66 56 66C57.1046 66 58 65.1046 58 64L58 16C58 14.8954 57.1046 14 56 14C54.8954 14 54 14.8954 54 16L54 38H26L26 16Z"
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
