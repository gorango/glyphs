
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
      <template v-if="variant === 'rectangle'">
        <path
          d="M120 0H0V79.9983H120V0Z"
          fill="#219653"
        />
        <path
          d="M8 71.9983V8H112V71.9983H8Z"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M70.5 22.3401C62.2342 23.969 56 31.2565 56 40C56 48.7435 62.2342 56.031 70.5 57.6599C69.3679 57.883 68.1976 58 67 58C57.0589 58 49 49.9411 49 40C49 30.0589 57.0589 22 67 22C68.1976 22 69.3679 22.117 70.5 22.3401Z"
          fill="#F2F2F2"
        />
      </template>
      <template v-if="variant === 'square'">
        <path
          d="M80 0H0V79.9983H80V0Z"
          fill="#219653"
        />
        <path
          d="M6 73.9983V6H74V73.9983H6Z"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M50.5 22.3401C42.2342 23.969 36 31.2565 36 40C36 48.7435 42.2342 56.031 50.5 57.6599C49.3679 57.883 48.1976 58 47 58C37.0589 58 29 49.9411 29 40C29 30.0589 37.0589 22 47 22C48.1976 22 49.3679 22.117 50.5 22.3401Z"
          fill="#F2F2F2"
        />
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask057lo" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask057lo)"><path d="M80 0H0V79.9983H80V0Z" fill="#219653"/><path d="M40 6C58.7774 6 74 21.2221 74 39.9992C74 58.7762 58.7774 73.9983 40 73.9983C21.2226 73.9983 6 58.7762 6 39.9992C6 21.2221 21.2226 6 40 6Z" stroke="#EB5757" stroke-width="12"/><path fill-rule="evenodd" clip-rule="evenodd" d="M50.5 22.3401C42.2342 23.969 36 31.2565 36 40C36 48.7435 42.2342 56.031 50.5 57.6599C49.3679 57.883 48.1976 58 47 58C37.0589 58 29 49.9411 29 40C29 30.0589 37.0589 22 47 22C48.1976 22 49.3679 22.117 50.5 22.3401Z" fill="#F2F2F2"/></g>
      </template>
    </g>
  </svg>
</template>

<script>
import Vue from 'vue'
import { transform } from '../utils'

export default {
  name: 'node_modules/@glyphs/flags',

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
