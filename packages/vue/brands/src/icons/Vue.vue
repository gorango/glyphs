
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
          d="M5 10L40 70L75 10H61.25L40 46.25L18.75 10H5Z"
          fill="#41B883"
        />
        <path
          d="M18.75 10L40 46.25L61.25 10H48.75L40.1632 25.0316L31.25 10H18.75Z"
          fill="#35495E"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          d="M75 10H61.25L62.9754 11.0114L40 50.2048L17.0246 11.0114L18.75 10H5L40 70L75 10Z"
          fill="currentColor"
        />
        <path
          d="M21.0683 10L40 42.2952L58.9317 10H48.75L40.1632 25.0316L31.25 10H21.0683Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M61.25 10H75L40 70L5 10H18.75M61.25 10L40 46.25L18.75 10M61.25 10H48.75L40.1632 25.0316L31.25 10H18.75"
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
