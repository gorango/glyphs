
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
        <g clip-path="url(#clip0LWl6)"><path d="M120 0H0V80H120V0Z" fill="#EB5757"/><path d="M120 0H0V26.6667H120V0Z" fill="#F2F2F2"/><path d="M120 53.34H0V80.01H120V53.34Z" fill="#219653"/><path d="M39.9991 0H0V80H39.9991V0Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.3137 15L27.2634 10.0504L24.435 7.22192L19.4853 12.1716L14.5356 7.22192L11.7071 10.0504L16.6568 15L11.707 19.9498L14.5355 22.7783L19.4853 17.8285L24.4351 22.7783L27.2635 19.9498L22.3137 15Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip0LWl6"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0xkXe)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2F2F2"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#219653"/><path d="M39.9991 0H0V80H39.9991V0Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.3137 15L27.2634 10.0504L24.435 7.22192L19.4853 12.1716L14.5356 7.22192L11.7071 10.0504L16.6568 15L11.707 19.9498L14.5355 22.7783L19.4853 17.8285L24.4351 22.7783L27.2635 19.9498L22.3137 15Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip0xkXe"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0VlO7" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0VlO7)"><g clip-path="url(#clip0VlO7)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2F2F2"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#219653"/><path d="M39.9991 0H0V80H39.9991V0Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.3137 15L27.2634 10.0504L24.435 7.22192L19.4853 12.1716L14.5356 7.22192L11.7071 10.0504L16.6568 15L11.707 19.9498L14.5355 22.7783L19.4853 17.8285L24.4351 22.7783L27.2635 19.9498L22.3137 15Z" fill="#F2F2F2"/></g></g>
        <defs><clipPath id="clip0VlO7"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
