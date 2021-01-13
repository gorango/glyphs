
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
        <g clip-path="url(#clip0zJ3S)"><path d="M120 0H0V80H120V0Z" fill="#F2F2F2"/><path d="M120 0H0V26.6667H120V0Z" fill="#333333"/><path d="M120 53.3401H0V80.0101H120V53.3401Z" fill="#219653"/><path d="M56 40L0 0V80L56 40Z" fill="#EB5757"/><path d="M18 32L19.9438 35.9637L24.2547 35.0121L22.3677 39.0031L25.7994 41.7802L21.5026 42.7932L21.4711 47.2078L18 44.48L14.5289 47.2078L14.4974 42.7932L10.2006 41.7802L13.6323 39.0031L11.7453 35.0121L16.0562 35.9637L18 32Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip0zJ3S"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0yxMO)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#333333"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#219653"/><path d="M56 40L0 0V80L56 40Z" fill="#EB5757"/><path d="M18 32L19.9438 35.9637L24.2547 35.0121L22.3677 39.0031L25.7994 41.7802L21.5026 42.7932L21.4711 47.2078L18 44.48L14.5289 47.2078L14.4974 42.7932L10.2006 41.7802L13.6323 39.0031L11.7453 35.0121L16.0562 35.9637L18 32Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip0yxMO"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0tN6S" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0tN6S)"><g clip-path="url(#clip0tN6S)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#333333"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#219653"/><path d="M56 40L0 0V80L56 40Z" fill="#EB5757"/><path d="M18 32L19.9438 35.9637L24.2547 35.0121L22.3677 39.0031L25.7994 41.7802L21.5026 42.7932L21.4711 47.2078L18 44.48L14.5289 47.2078L14.4974 42.7932L10.2006 41.7802L13.6323 39.0031L11.7453 35.0121L16.0562 35.9637L18 32Z" fill="#F2F2F2"/></g></g>
        <defs><clipPath id="clip0tN6S"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
