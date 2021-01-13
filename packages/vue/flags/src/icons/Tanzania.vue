
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
        <g clip-path="url(#clip0G6XT)"><path d="M0 0H120L0 80V0Z" fill="#219653"/><path d="M120 80H0L120 0V80Z" fill="#2F80ED"/><path d="M119.6 -0.010009L-0.400391 79.99" stroke="#F2C94C" stroke-width="32"/><path d="M119.6 -0.010009L-0.400391 79.99" stroke="#333333" stroke-width="24"/></g>
        <defs><clipPath id="clip0G6XT"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0eRHJ)"><path d="M0 0H80L0 80V0Z" fill="#219653"/><path d="M80 80H0L80 0V80Z" fill="#2F80ED"/><path d="M79.7334 -0.0100087L-0.266602 79.99" stroke="#F2C94C" stroke-width="32"/><path d="M79.7334 -0.0100087L-0.266602 79.99" stroke="#333333" stroke-width="24"/></g>
        <defs><clipPath id="clip0eRHJ"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0j9RS" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0j9RS)"><g clip-path="url(#clip0j9RS)"><path d="M0 0H80L0 80V0Z" fill="#219653"/><path d="M80 80H0L80 0V80Z" fill="#2F80ED"/><path d="M79.7334 -0.0100087L-0.266602 79.99" stroke="#F2C94C" stroke-width="32"/><path d="M79.7334 -0.0100087L-0.266602 79.99" stroke="#333333" stroke-width="24"/></g></g>
        <defs><clipPath id="clip0j9RS"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
