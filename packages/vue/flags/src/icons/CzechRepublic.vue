
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
          d="M120 40V80H0V40H120Z"
          fill="#EB5757"
        />
        <path
          d="M120 0V40H0V0H120Z"
          fill="#F2F2F2"
        />
        <path
          d="M56 40L0 0V80L56 40Z"
          fill="#2F80ED"
        />
      </template>
      <template v-if="variant === 'square'">
        <path
          d="M80 40V80H0V40H80Z"
          fill="#EB5757"
        />
        <path
          d="M80 0V40H0V0H80Z"
          fill="#F2F2F2"
        />
        <path
          d="M37.3333 40L0 0V80L37.3333 40Z"
          fill="#2F80ED"
        />
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0wQP4" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0wQP4)"><path d="M80 40V80H0V40H80Z" fill="#EB5757"/><path d="M80 0V40H0V0H80Z" fill="#F2F2F2"/><path d="M37.3333 40L0 0V80L37.3333 40Z" fill="#2F80ED"/></g>
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
