
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
        <g opacity="0.9"><path d="M120 0H0V26.6667H120V0Z" fill="#219653"/><path d="M120 26.6667H0V53.3334H120V26.6667Z" fill="#F2F2F2"/><path d="M120 53.3333H0V79.9999H120V53.3333Z" fill="#2F80ED"/></g>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0Ga0-)"><g opacity="0.9"><path d="M120 0H0V26.6667H120V0Z" fill="#219653"/><path d="M120 26.6667H0V53.3334H120V26.6667Z" fill="#F2F2F2"/><path d="M120 53.3333H0V79.9999H120V53.3333Z" fill="#2F80ED"/></g></g>
        <defs><clipPath id="clip0Ga0-"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0z8FF" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0z8FF)"><g clip-path="url(#clip0z8FF)"><g opacity="0.9"><path d="M120 0H0V26.6667H120V0Z" fill="#219653"/><path d="M120 26.6667H0V53.3334H120V26.6667Z" fill="#F2F2F2"/><path d="M120 53.3333H0V79.9999H120V53.3333Z" fill="#2F80ED"/></g></g></g>
        <defs><clipPath id="clip0z8FF"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
