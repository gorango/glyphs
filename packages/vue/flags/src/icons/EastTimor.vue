
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
        <g clip-path="url(#clip07BTW)"><path d="M120 0V80H0V0H120Z" fill="#EB5757"/><path d="M72 40L0 0V80L72 40Z" fill="#F2C94C"/><path d="M48 40L0 0V80L48 40Z" fill="#333333"/><path d="M9.73215 29.6077L16.2113 35.4415L23.7617 31.0822L20.2156 39.047L26.6947 44.8808L18.0239 43.9695L14.4778 51.9342L12.6651 43.4062L3.99438 42.4949L11.5448 38.1357L9.73215 29.6077Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip07BTW"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0VZ-k)"><path d="M80 0V80H0V0H80Z" fill="#EB5757"/><path d="M72 40L0 0V80L72 40Z" fill="#F2C94C"/><path d="M48 40L0 0V80L48 40Z" fill="#333333"/><path d="M9.73215 29.6077L16.2113 35.4415L23.7617 31.0822L20.2156 39.047L26.6947 44.8808L18.0239 43.9695L14.4778 51.9342L12.6651 43.4062L3.99438 42.4949L11.5448 38.1357L9.73215 29.6077Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip0VZ-k"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask06L0d" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask06L0d)"><g clip-path="url(#clip06L0d)"><path d="M80 0V80H0V0H80Z" fill="#EB5757"/><path d="M72 40L0 0V80L72 40Z" fill="#F2C94C"/><path d="M48 40L0 0V80L48 40Z" fill="#333333"/><path d="M9.73215 29.6077L16.2113 35.4415L23.7617 31.0822L20.2156 39.047L26.6947 44.8808L18.0239 43.9695L14.4778 51.9342L12.6651 43.4062L3.99438 42.4949L11.5448 38.1357L9.73215 29.6077Z" fill="#F2F2F2"/></g></g>
        <defs><clipPath id="clip06L0d"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
