
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
          d="M120 0V80H0V0H120Z"
          fill="#EB5757"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 80H31L48 72L31 64L48 56L31 48L48 40L31 32L48 24L31 16L48 8L31 0H0V80Z"
          fill="#F2F2F2"
        />
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0OkNQ)"><path d="M80 0V80H0V0H80Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M-20 80H11L28 72L11 64L28 56L11 48L28 40L11 32L28 24L11 16L28 8L11 0H-20V80Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip0OkNQ"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0WPQO" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0WPQO)"><g clip-path="url(#clip0WPQO)"><path d="M80 0V80H0V0H80Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M-20 80H11L28 72L11 64L28 56L11 48L28 40L11 32L28 24L11 16L28 8L11 0H-20V80Z" fill="#F2F2F2"/></g></g>
        <defs><clipPath id="clip0WPQO"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
