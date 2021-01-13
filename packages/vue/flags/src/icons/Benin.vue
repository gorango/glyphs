
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
        <g clip-path="url(#clip0-X9o)"><path d="M120 0H0V80H120V0Z" fill="#EB5757"/><path d="M39.9991 0H0V80H39.9991V0Z" fill="#219653"/><path d="M120 0H39.9991V40H120V0Z" fill="#F2C94C"/></g>
        <defs><clipPath id="clip0-X9o"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0OJwn)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M19.9991 0H-20V80H19.9991V0Z" fill="#219653"/><path d="M100 0H19.9991V40H100V0Z" fill="#F2C94C"/></g>
        <defs><clipPath id="clip0OJwn"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0j4TJ" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0j4TJ)"><g clip-path="url(#clip0j4TJ)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M19.9991 0H-20V80H19.9991V0Z" fill="#219653"/><path d="M100 0H19.9991V40H100V0Z" fill="#F2C94C"/></g></g>
        <defs><clipPath id="clip0j4TJ"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
