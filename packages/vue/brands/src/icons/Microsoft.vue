
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
      <template v-if="variant === 'color'">
        <rect
          x="42.5"
          y="42.5"
          width="25"
          height="25"
          fill="#FEBA08"
        />
        <rect
          x="12.5"
          y="42.5"
          width="25"
          height="25"
          fill="#05A6F0"
        />
        <rect
          x="42.5"
          y="12.5"
          width="25"
          height="25"
          fill="#80BC06"
        />
        <rect
          x="12.5"
          y="12.5"
          width="25"
          height="25"
          fill="#F25325"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          d="M42.5 42.5H67.5V67.5H42.5V42.5Z"
          fill="currentColor"
        />
        <path
          d="M12.5 42.5H37.5V67.5H12.5V42.5Z"
          fill="currentColor"
        />
        <path
          d="M42.5 12.5H67.5V37.5H42.5V12.5Z"
          fill="currentColor"
        />
        <path
          d="M12.5 12.5H37.5V37.5H12.5V12.5Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M42.5 42.5H67.5V67.5H42.5V42.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M12.5 42.5H37.5V67.5H12.5V42.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M42.5 12.5H67.5V37.5H42.5V12.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M12.5 12.5H37.5V37.5H12.5V12.5Z"
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
  name: 'node_modules/@glyphs/brands',

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
