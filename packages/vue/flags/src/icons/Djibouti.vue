
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
        <g clip-path="url(#clip0Lgv2)"><path d="M120 -0.0102539H0V39.9897H120V-0.0102539Z" fill="#56CCF2"/><path d="M120 39.9897H0V79.9897H120V39.9897Z" fill="#219653"/><path d="M56 40L0 0V80L56 40Z" fill="#F2F2F2"/><path d="M20 29.9897L22.2336 36.9155L29.5106 36.8996L23.614 41.164L25.8779 48.0799L20 43.7897L14.1221 48.0799L16.386 41.164L10.4894 36.8996L17.7664 36.9155L20 29.9897Z" fill="#EB5757"/></g>
        <defs><clipPath id="clip0Lgv2"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0BPqn)"><path d="M120 -0.0102539H0V39.9897H120V-0.0102539Z" fill="#56CCF2"/><path d="M120 39.9897H0V79.9897H120V39.9897Z" fill="#219653"/><path d="M56 40L0 0V80L56 40Z" fill="#F2F2F2"/><path d="M20 29.9897L22.2336 36.9155L29.5106 36.8996L23.614 41.164L25.8779 48.0799L20 43.7897L14.1221 48.0799L16.386 41.164L10.4894 36.8996L17.7664 36.9155L20 29.9897Z" fill="#EB5757"/></g>
        <defs><clipPath id="clip0BPqn"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0zlrr" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0zlrr)"><g clip-path="url(#clip0zlrr)"><path d="M120 -0.0102539H0V39.9897H120V-0.0102539Z" fill="#56CCF2"/><path d="M120 39.9897H0V79.9897H120V39.9897Z" fill="#219653"/><path d="M56 40L0 0V80L56 40Z" fill="#F2F2F2"/><path d="M20 29.9897L22.2336 36.9155L29.5106 36.8996L23.614 41.164L25.8779 48.0799L20 43.7897L14.1221 48.0799L16.386 41.164L10.4894 36.8996L17.7664 36.9155L20 29.9897Z" fill="#EB5757"/></g></g>
        <defs><clipPath id="clip0zlrr"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
