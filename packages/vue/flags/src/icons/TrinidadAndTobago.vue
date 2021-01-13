
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
        <g clip-path="url(#clip0w3Lx)"><path d="M120 0.0788574H0V79.9212H120V0.0788574Z" fill="#EB5757"/><path d="M113 93L7 -13" stroke="#F2F2F2" stroke-width="28"/><path d="M113 93L7 -13" stroke="#333333" stroke-width="18"/></g>
        <defs><clipPath id="clip0w3Lx"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0Ep4Z)"><path d="M80 0.0788574H0V79.9212H80V0.0788574Z" fill="#EB5757"/><path d="M93 93L-13 -13" stroke="#F2F2F2" stroke-width="28"/><path d="M93 93L-13 -13" stroke="#333333" stroke-width="18"/></g>
        <defs><clipPath id="clip0Ep4Z"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0P2Gw" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0P2Gw)"><g clip-path="url(#clip0P2Gw)"><path d="M80 0.0789795H0V79.9213H80V0.0789795Z" fill="#EB5757"/><path d="M93 93L-13 -13" stroke="#F2F2F2" stroke-width="28"/><path d="M93 93L-13 -13" stroke="#333333" stroke-width="18"/></g></g>
        <defs><clipPath id="clip0P2Gw"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
