
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
        <g clip-path="url(#clip0Ksf9)"><path d="M120 -0.0102539H0V19.9897H120V-0.0102539Z" fill="#EB5757"/><path d="M120 19.9897H0V39.9897H120V19.9897Z" fill="#2F80ED"/><path d="M120 39.9897H0V59.9897H120V39.9897Z" fill="#F2C94C"/><path d="M120 59.9897H0V79.9897H120V59.9897Z" fill="#219653"/></g>
        <defs><clipPath id="clip0Ksf9"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0GAy1)"><path d="M120 -0.0102539H0V19.9897H120V-0.0102539Z" fill="#EB5757"/><path d="M120 19.9897H0V39.9897H120V19.9897Z" fill="#2F80ED"/><path d="M120 39.9897H0V59.9897H120V39.9897Z" fill="#F2C94C"/><path d="M120 59.9897H0V79.9897H120V59.9897Z" fill="#219653"/></g>
        <defs><clipPath id="clip0GAy1"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0r236" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0r236)"><g clip-path="url(#clip0r236)"><path d="M120 -0.0102539H0V19.9897H120V-0.0102539Z" fill="#EB5757"/><path d="M120 19.9897H0V39.9897H120V19.9897Z" fill="#2F80ED"/><path d="M120 39.9897H0V59.9897H120V39.9897Z" fill="#F2C94C"/><path d="M120 59.9897H0V79.9897H120V59.9897Z" fill="#219653"/></g></g>
        <defs><clipPath id="clip0r236"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
