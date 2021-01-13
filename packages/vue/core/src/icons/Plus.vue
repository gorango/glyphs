
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
          d="M61.7637 40L17.7637 40"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M39.7637 62L39.7637 18"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M17.7637 40L37.7637 40L41.7637 40L61.7637 40"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M39.7637 18L39.7637 38L39.7637 42L39.7637 62"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M17.7637 40L37.7637 40L41.7637 40L61.7637 40"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M39.7637 18L39.7637 38L39.7637 42L39.7637 62"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M61.7637 40H17.7637M39.7637 62L39.7637 18"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M42 18C42 16.8954 41.1046 16 40 16C38.8954 16 38 16.8954 38 18V38H18C16.8954 38 16 38.8954 16 40C16 41.1046 16.8954 42 18 42H38L38 62C38 63.1046 38.8954 64 40 64C41.1046 64 42 63.1046 42 62L42 42L62 42C63.1046 42 64 41.1046 64 40C64 38.8954 63.1046 38 62 38L42 38V18Z"
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
