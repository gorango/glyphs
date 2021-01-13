
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
          d="M120 0H0V80H120V0Z"
          fill="#EB5757"
        />
        <path
          d="M0 40H120"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
        />
        <path
          d="M38 80V0"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
        />
      </template>
      <template v-if="variant === 'square'">
        <path
          d="M80 0H0V80H80V0Z"
          fill="#EB5757"
        />
        <path
          d="M0 40H80"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
        />
        <path
          d="M25.3333 80V0"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
        />
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0HqLJ" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0HqLJ)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M0 40H80" stroke="#F2F2F2" stroke-width="15"/><path d="M25.3333 80V0" stroke="#F2F2F2" stroke-width="15"/></g>
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
