
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
        <g clip-path="url(#clip0mSfF)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M120 0H0V26.6667H120V0Z" fill="#F2C94C"/><path d="M120 53.34H0V80.01H120V53.34Z" fill="#EB5757"/><path d="M60 12L66.2864 31.3475H86.6296L70.1716 43.3049L76.458 62.6524L60 50.695L43.542 62.6524L49.8284 43.3049L33.3704 31.3475H53.7136L60 12Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip0mSfF"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0SlVW)"><path d="M80 0H0V80H80V0Z" fill="#219653"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2C94C"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#EB5757"/><path d="M40 12L46.2864 31.3475H66.6296L50.1716 43.3049L56.458 62.6524L40 50.695L23.542 62.6524L29.8284 43.3049L13.3704 31.3475H33.7136L40 12Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip0SlVW"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0ffir" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0ffir)"><g clip-path="url(#clip0ffir)"><path d="M80 0H0V80H80V0Z" fill="#219653"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2C94C"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#EB5757"/><path d="M40 12L46.2864 31.3475H66.6296L50.1716 43.3049L56.458 62.6524L40 50.695L23.542 62.6524L29.8284 43.3049L13.3704 31.3475H33.7136L40 12Z" fill="#F2F2F2"/></g></g>
        <defs><clipPath id="clip0ffir"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
