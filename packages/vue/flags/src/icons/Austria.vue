
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
        <g clip-path="url(#clip05kIg)"><path d="M120 0H0V80H120V0Z" fill="#EB5757"/><path d="M120 26.6667H0V53.3334H120V26.6667Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip05kIg"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip01kwb)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 26.6666H0V53.3333H80V26.6666Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip01kwb"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0_Kah" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0_Kah)"><g clip-path="url(#clip0_Kah)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 26.6666H0V53.3333H80V26.6666Z" fill="#F2F2F2"/></g></g>
        <defs><clipPath id="clip0_Kah"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
