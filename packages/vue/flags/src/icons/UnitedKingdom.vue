
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
        <g clip-path="url(#clip0GfNo)"><rect width="120" height="80" fill="#2F80ED"/><path d="M0 0L120 80M120 0L0 80" stroke="#F2F2F2" stroke-width="16"/><path d="M0 0L120 80M120 0L0 80" stroke="#EB5757" stroke-width="6"/><path d="M60 80V0M0 40H120" stroke="#F2F2F2" stroke-width="24"/><path d="M60 80V0M0 40H120" stroke="#EB5757" stroke-width="14"/></g>
        <defs><clipPath id="clip0GfNo"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0bb_W)"><rect width="80" height="80" fill="#2F80ED"/><path d="M-20 0L100 80M100 0L-20 80" stroke="#F2F2F2" stroke-width="16"/><path d="M-20 0L100 80M100 0L-20 80" stroke="#EB5757" stroke-width="6"/><path d="M40 80V0M-20 40H100" stroke="#F2F2F2" stroke-width="24"/><path d="M40 80V0M-20 40H100" stroke="#EB5757" stroke-width="14"/></g>
        <defs><clipPath id="clip0bb_W"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0i-KR" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0i-KR)"><g clip-path="url(#clip0i-KR)"><rect width="80" height="80" fill="#2F80ED"/><path d="M-20 0L100 80M100 0L-20 80" stroke="#F2F2F2" stroke-width="16"/><path d="M-20 0L100 80M100 0L-20 80" stroke="#EB5757" stroke-width="6"/><path d="M40 80V0M-20 40H100" stroke="#F2F2F2" stroke-width="24"/><path d="M40 80V0M-20 40H100" stroke="#EB5757" stroke-width="14"/></g></g>
        <defs><clipPath id="clip0i-KR"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
