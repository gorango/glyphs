
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
        <g clip-path="url(#clip0mb9S)"><path d="M120 0H0V80H120V0Z" fill="#F2C94C"/><path d="M120 0H0V26.6667H120V0Z" fill="#EB5757"/><path d="M120 53.3401H0V80.0101H120V53.3401Z" fill="#219653"/><path d="M60 23.9897L63.5737 35.0709L75.2169 35.0455L65.7824 41.8686L69.4046 52.934L60 46.0697L50.5954 52.934L54.2176 41.8686L44.7831 35.0455L56.4263 35.0709L60 23.9897Z" fill="#333333"/></g>
        <defs><clipPath id="clip0mb9S"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0h15x)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#219653"/><path d="M40 23.9897L43.5737 35.0709L55.2169 35.0455L45.7824 41.8686L49.4046 52.934L40 46.0697L30.5954 52.934L34.2176 41.8686L24.7831 35.0455L36.4263 35.0709L40 23.9897Z" fill="#333333"/></g>
        <defs><clipPath id="clip0h15x"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0AReE" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0AReE)"><g clip-path="url(#clip0AReE)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#219653"/><path d="M40 23.9897L43.5737 35.0709L55.2169 35.0455L45.7824 41.8686L49.4046 52.934L40 46.0697L30.5954 52.934L34.2176 41.8686L24.7831 35.0455L36.4263 35.0709L40 23.9897Z" fill="#333333"/></g></g>
        <defs><clipPath id="clip0AReE"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
