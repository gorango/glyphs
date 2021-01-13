
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
          d="M15 70L10 7.5H70L65 70L40 77.5L15 70Z"
          fill="#E44D26"
        />
        <path
          d="M65 12.5H40V73.75L60 67.5L65 12.5Z"
          fill="#F16529"
        />
        <path
          d="M23.75 43.75L21.25 20H60L58.75 27.5H28.75L30 36.25H57.5L55 60L40 65L25 60L23.75 47.5H31.25L32.5 53.75L40 56.25L47.5 53.75L48.75 43.75H23.75Z"
          fill="white"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 7.5L15 70L40 77.5L65 70L70 7.5H10ZM21.25 20L23.75 43.75H48.75L47.5 53.75L40 56.25L32.5 53.75L31.25 47.5H23.75L25 60L40 65L55 60L57.5 36.25H30L28.75 27.5H58.75L60 20H21.25Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M15 70L10 7.5H70L65 70L40 77.5L15 70Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M23.75 43.75L21.25 20H60L58.75 27.5H28.75L30 36.25H57.5L55 60L40 65L25 60L23.75 47.5H31.25L32.5 53.75L40 56.25L47.5 53.75L48.75 43.75H23.75Z"
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
