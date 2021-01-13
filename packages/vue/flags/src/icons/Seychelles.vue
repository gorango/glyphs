
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
        <g clip-path="url(#clip0D54h)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M40 0L0 0V80L40 0Z" fill="#2F80ED"/><path d="M40 0H88L0 80L40 0Z" fill="#F2C94C"/><path d="M120 24.5V0H88L0 80L120 24.5Z" fill="#EB5757"/><path d="M120 24.5V53.5L0 80L120 24.5Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip0D54h"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0-alS)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M40 0L0 0V80L40 0Z" fill="#2F80ED"/><path d="M40 0H88L0 80L40 0Z" fill="#F2C94C"/><path d="M120 24.5V0H88L0 80L120 24.5Z" fill="#EB5757"/><path d="M120 24.5V53.5L0 80L120 24.5Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip0-alS"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0_eAN" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0_eAN)"><g clip-path="url(#clip0_eAN)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M40 0L0 0V80L40 0Z" fill="#2F80ED"/><path d="M40 0H88L0 80L40 0Z" fill="#F2C94C"/><path d="M120 24.5V0H88L0 80L120 24.5Z" fill="#EB5757"/><path d="M120 24.5V53.5L0 80L120 24.5Z" fill="#F2F2F2"/></g></g>
        <defs><clipPath id="clip0_eAN"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
