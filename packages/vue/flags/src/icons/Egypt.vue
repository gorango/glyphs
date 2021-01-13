
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
        <g clip-path="url(#clip07Rtb)"><path d="M120 0H0V80H120V0Z" fill="#F2F2F2"/><path d="M120 0H0V26.6667H120V0Z" fill="#EB5757"/><path d="M120 53.34H0V80.01H120V53.34Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M56.0001 37H46.0001V36.9684L46 37C46 39.2091 47.7909 41 50 41L50.0001 41C50.0001 42.6569 51.3432 44 53.0001 44C53.0001 45.6569 54.3432 47 56.0001 47H64.0001C65.657 47 67.0001 45.6569 67.0001 44C68.657 44 70.0001 42.6569 70.0001 41C72.2092 40.9999 74 39.2091 74 37H64.0001C64.0001 34.7909 62.2093 33 60.0001 33C57.791 33 56.0001 34.7909 56.0001 37Z" fill="#F2994A"/></g>
        <defs><clipPath id="clip07Rtb"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0oRIi)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36.0001 37H26.0001V36.9684L26 37C26 39.2091 27.7909 41 30 41L30.0001 41C30.0001 42.6569 31.3432 44 33.0001 44C33.0001 45.6569 34.3432 47 36.0001 47H44.0001C45.657 47 47.0001 45.6569 47.0001 44C48.657 44 50.0001 42.6569 50.0001 41C52.2092 40.9999 54 39.2091 54 37H44.0001C44.0001 34.7909 42.2093 33 40.0001 33C37.791 33 36.0001 34.7909 36.0001 37Z" fill="#F2994A"/></g>
        <defs><clipPath id="clip0oRIi"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0ZsQM" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0ZsQM)"><g clip-path="url(#clip0ZsQM)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36.0001 37H26.0001V36.9684L26 37C26 39.2091 27.7909 41 30 41L30.0001 41C30.0001 42.6569 31.3432 44 33.0001 44C33.0001 45.6569 34.3432 47 36.0001 47H44.0001C45.657 47 47.0001 45.6569 47.0001 44C48.657 44 50.0001 42.6569 50.0001 41C52.2092 40.9999 54 39.2091 54 37H44.0001C44.0001 34.7909 42.2093 33 40.0001 33C37.791 33 36.0001 34.7909 36.0001 37Z" fill="#F2994A"/></g></g>
        <defs><clipPath id="clip0ZsQM"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
