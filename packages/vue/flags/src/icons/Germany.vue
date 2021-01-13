
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
        <g clip-path="url(#clip0MA4M)"><path d="M120 0H0V80H120V0Z" fill="#EB5757"/><path d="M120 0H0V26.6667H120V0Z" fill="#333333"/><path d="M120 53.3333H0V79.9999H120V53.3333Z" fill="#F2C94C"/></g>
        <defs><clipPath id="clip0MA4M"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0h9OB)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 0H0V26.6667H80V0Z" fill="#333333"/><path d="M80 53.3334H0V80H80V53.3334Z" fill="#F2C94C"/></g>
        <defs><clipPath id="clip0h9OB"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0rCxf" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0rCxf)"><g clip-path="url(#clip0rCxf)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 0H0V26.6667H80V0Z" fill="#333333"/><path d="M80 53.3334H0V80H80V53.3334Z" fill="#F2C94C"/></g></g>
        <defs><clipPath id="clip0rCxf"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
