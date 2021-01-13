
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
        <g clip-path="url(#clip0xAvA)"><path d="M120.13 0.0012207H0.130371V80.0012H120.13V0.0012207Z" fill="#219653"/><path d="M0 53.3333H120V0H0" fill="#EB5757"/><rect width="24" height="80" fill="#EB5757"/><path d="M6 2L10 9L6 16L2 9L6 2Z" fill="#F2F2F2"/><path d="M6 20L10 27L6 34L2 27L6 20Z" fill="#F2F2F2"/><path d="M6 46L10 53L6 60L2 53L6 46Z" fill="#F2F2F2"/><path d="M6 64L10 71L6 78L2 71L6 64Z" fill="#F2F2F2"/><path d="M18 2L22 9L18 16L14 9L18 2Z" fill="#F2F2F2"/><path d="M18 20L22 27L18 34L14 27L18 20Z" fill="#F2F2F2"/><path d="M12 29L18 40L12 51L6 40L12 29Z" fill="#F2F2F2"/><path d="M18 46L22 53L18 60L14 53L18 46Z" fill="#F2F2F2"/><path d="M18 64L22 71L18 78L14 71L18 64Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip0xAvA"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip02wEz)"><path d="M80.0869 0.0012207H0.0869141V80.0012H80.0869V0.0012207Z" fill="#219653"/><path d="M0 53.3333H80V0H0" fill="#EB5757"/><rect width="24" height="80" fill="#EB5757"/><path d="M6 2L10 9L6 16L2 9L6 2Z" fill="#F2F2F2"/><path d="M6 20L10 27L6 34L2 27L6 20Z" fill="#F2F2F2"/><path d="M6 46L10 53L6 60L2 53L6 46Z" fill="#F2F2F2"/><path d="M6 64L10 71L6 78L2 71L6 64Z" fill="#F2F2F2"/><path d="M18 2L22 9L18 16L14 9L18 2Z" fill="#F2F2F2"/><path d="M18 20L22 27L18 34L14 27L18 20Z" fill="#F2F2F2"/><path d="M12 29L18 40L12 51L6 40L12 29Z" fill="#F2F2F2"/><path d="M18 46L22 53L18 60L14 53L18 46Z" fill="#F2F2F2"/><path d="M18 64L22 71L18 78L14 71L18 64Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip02wEz"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0fzSs" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0fzSs)"><g clip-path="url(#clip0fzSs)"><path d="M80.0869 0.0012207H0.0869141V80.0012H80.0869V0.0012207Z" fill="#219653"/><path d="M0 53.3333H80V0H0" fill="#EB5757"/><rect width="24" height="80" fill="#EB5757"/><path d="M6 2L10 9L6 16L2 9L6 2Z" fill="#F2F2F2"/><path d="M6 20L10 27L6 34L2 27L6 20Z" fill="#F2F2F2"/><path d="M6 46L10 53L6 60L2 53L6 46Z" fill="#F2F2F2"/><path d="M6 64L10 71L6 78L2 71L6 64Z" fill="#F2F2F2"/><path d="M18 2L22 9L18 16L14 9L18 2Z" fill="#F2F2F2"/><path d="M18 20L22 27L18 34L14 27L18 20Z" fill="#F2F2F2"/><path d="M12 29L18 40L12 51L6 40L12 29Z" fill="#F2F2F2"/><path d="M18 46L22 53L18 60L14 53L18 46Z" fill="#F2F2F2"/><path d="M18 64L22 71L18 78L14 71L18 64Z" fill="#F2F2F2"/></g></g>
        <defs><clipPath id="clip0fzSs"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
