
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
        <g clip-path="url(#clip09nyK)"><path d="M120 0H0V80H120V0Z" fill="#F2F2F2"/><path d="M120 0H0V40H120V0Z" fill="#EB5757"/></g>
        <defs><clipPath id="clip09nyK"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0Jr9G)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V40H80V0Z" fill="#EB5757"/></g>
        <defs><clipPath id="clip0Jr9G"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0XHWa" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0XHWa)"><g clip-path="url(#clip0XHWa)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V40H80V0Z" fill="#EB5757"/></g></g>
        <defs><clipPath id="clip0XHWa"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
