
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
        <g clip-path="url(#clip0GREO)"><path d="M120 -0.0102539H0V26.6564H120V-0.0102539Z" fill="#EB5757"/><path d="M120 26.6565H0V53.3232H120V26.6565Z" fill="#F2C94C"/><path d="M120 53.323H0V79.9897H120V53.323Z" fill="#219653"/></g>
        <defs><clipPath id="clip0GREO"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0Xl8a)"><path d="M120 -0.0102539H0V26.6564H120V-0.0102539Z" fill="#EB5757"/><path d="M120 26.6565H0V53.3232H120V26.6565Z" fill="#F2C94C"/><path d="M120 53.323H0V79.9897H120V53.323Z" fill="#219653"/></g>
        <defs><clipPath id="clip0Xl8a"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0iYdL" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0iYdL)"><g clip-path="url(#clip0iYdL)"><path d="M120 -0.0102539H0V26.6564H120V-0.0102539Z" fill="#EB5757"/><path d="M120 26.6565H0V53.3232H120V26.6565Z" fill="#F2C94C"/><path d="M120 53.323H0V79.9897H120V53.323Z" fill="#219653"/></g></g>
        <defs><clipPath id="clip0iYdL"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
