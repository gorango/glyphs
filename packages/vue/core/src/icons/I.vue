
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
          d="M40 64L40 16"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M24 16L56 16"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M24 64L56 64"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M37 64C37 65.6569 38.3431 67 40 67C41.6569 67 43 65.6569 43 64H37ZM43 16C43 14.3431 41.6569 13 40 13C38.3431 13 37 14.3431 37 16H43ZM24 13C22.3431 13 21 14.3431 21 16C21 17.6569 22.3431 19 24 19L24 13ZM56 19C57.6569 19 59 17.6569 59 16C59 14.3431 57.6569 13 56 13V19ZM24 61C22.3431 61 21 62.3431 21 64C21 65.6569 22.3431 67 24 67L24 61ZM56 67C57.6569 67 59 65.6569 59 64C59 62.3431 57.6569 61 56 61V67ZM43 64L43 16H37L37 64H43ZM24 19L56 19V13L24 13L24 19ZM24 67H56V61L24 61L24 67Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M38 64C38 65.1046 38.8954 66 40 66C41.1046 66 42 65.1046 42 64H38ZM42 16C42 14.8954 41.1046 14 40 14C38.8954 14 38 14.8954 38 16H42ZM24 14C22.8954 14 22 14.8954 22 16C22 17.1046 22.8954 18 24 18L24 14ZM56 18C57.1046 18 58 17.1046 58 16C58 14.8954 57.1046 14 56 14V18ZM24 62C22.8954 62 22 62.8954 22 64C22 65.1046 22.8954 66 24 66L24 62ZM56 66C57.1046 66 58 65.1046 58 64C58 62.8954 57.1046 62 56 62V66ZM42 64L42 16H38L38 64H42ZM24 18L56 18V14L24 14L24 18ZM24 66H56V62L24 62L24 66Z"
          fill="#219653"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M40 64V16M24 16L56 16M24 64H56"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M58 16C58 17.1046 57.1046 18 56 18L42 18L42 62L56 62C57.1046 62 58 62.8954 58 64C58 65.1046 57.1046 66 56 66H24C22.8954 66 22 65.1046 22 64C22 62.8954 22.8954 62 24 62H38L38 18L24 18C22.8954 18 22 17.1046 22 16C22 14.8954 22.8954 14 24 14L56 14C57.1046 14 58 14.8954 58 16Z"
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
