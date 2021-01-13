
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
        <g clip-path="url(#clip0mo94)"><path d="M120 0.0791016H0V80.0774H120V0.0791016Z" fill="#333333"/><path d="M120 0H0L60 40L120 0Z" fill="#219653"/><path d="M120 80H0L60 40L120 80Z" fill="#219653"/><path d="M120 0.0791016L0 80.0774" stroke="#F2C94C" stroke-width="10"/><path d="M0 0.0791016L120 80.0774" stroke="#F2C94C" stroke-width="10"/></g>
        <defs><clipPath id="clip0mo94"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0gLKn)"><path d="M80 0.0791016H0V80.0774H80V0.0791016Z" fill="#333333"/><path d="M80 0H0L40 40L80 0Z" fill="#219653"/><path d="M80 80H0L40 40L80 80Z" fill="#219653"/><path d="M80 0.0791016L0 80.0774" stroke="#F2C94C" stroke-width="10"/><path d="M-2.38419e-06 0.0791016L80 80.0774" stroke="#F2C94C" stroke-width="10"/></g>
        <defs><clipPath id="clip0gLKn"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0bwFj" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0bwFj)"><g clip-path="url(#clip0bwFj)"><path d="M80 0.0791016H0V80.0774H80V0.0791016Z" fill="#333333"/><path d="M80 0H0L40 40L80 0Z" fill="#219653"/><path d="M80 80H0L40 40L80 80Z" fill="#219653"/><path d="M80 0.0791016L0 80.0774" stroke="#F2C94C" stroke-width="10"/><path d="M-2.38419e-06 0.0791016L80 80.0774" stroke="#F2C94C" stroke-width="10"/></g></g>
        <defs><clipPath id="clip0bwFj"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
