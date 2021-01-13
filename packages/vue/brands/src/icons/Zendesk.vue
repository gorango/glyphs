
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
        <path
          d="M42.5 12.5L42.5001 51.7857L75.0001 12.5H42.5Z"
          fill="#07363D"
        />
        <path
          d="M21.2501 30C30.1405 30 37.5001 21.0395 37.5001 12.5001H5.00006C5.00006 21.0395 12.3596 30 21.2501 30Z"
          fill="#07363D"
        />
        <path
          d="M42.5001 67.5C42.5001 58.9605 49.8596 50 58.7501 50C67.6405 50 75.0001 58.9605 75.0001 67.5H42.5001Z"
          fill="#07363D"
        />
        <path
          d="M37.5001 67.5V28.2143L5 67.5H37.5001Z"
          fill="#07363D"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          d="M42.5 12.5L42.5001 51.7857L75.0001 12.5H42.5Z"
          fill="currentColor"
        />
        <path
          d="M21.2501 30C30.1405 30 37.5001 21.0395 37.5001 12.5001H5.00006C5.00006 21.0395 12.3596 30 21.2501 30Z"
          fill="currentColor"
        />
        <path
          d="M42.5001 67.5C42.5001 58.9605 49.8596 50 58.7501 50C67.6405 50 75.0001 58.9605 75.0001 67.5H42.5001Z"
          fill="currentColor"
        />
        <path
          d="M37.5001 67.5V28.2143L5 67.5H37.5001Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M42.5 12.5L42.5001 51.7857L75.0001 12.5H42.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M21.2501 30C30.1405 30 37.5001 21.0395 37.5001 12.5001H5.00006C5.00006 21.0395 12.3596 30 21.2501 30Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M42.5001 67.5C42.5001 58.9605 49.8596 50 58.7501 50C67.6405 50 75.0001 58.9605 75.0001 67.5H42.5001Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M37.5001 67.5V28.2143L5 67.5H37.5001Z"
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
