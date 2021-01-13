
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
        <path
          d="M120 0H0V79.9983H120V0Z"
          fill="#EB5757"
        />
        <path
          d="M60 16L65.3883 32.5836H82.8254L68.7185 42.8328L74.1068 59.4164L60 49.1672L45.8932 59.4164L51.2815 42.8328L37.1746 32.5836H54.6117L60 16Z"
          fill="#F2C94C"
        />
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0zrR0)"><path d="M100 0H-20V79.9983H100V0Z" fill="#EB5757"/><path d="M40 16L45.3883 32.5836H62.8254L48.7185 42.8328L54.1068 59.4164L40 49.1672L25.8932 59.4164L31.2815 42.8328L17.1746 32.5836H34.6117L40 16Z" fill="#F2C94C"/></g>
        <defs><clipPath id="clip0zrR0"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask01tI-" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask01tI-)"><g clip-path="url(#clip01tI-)"><path d="M100 0H-20V79.9983H100V0Z" fill="#EB5757"/><path d="M40 16L45.3883 32.5836H62.8254L48.7185 42.8328L54.1068 59.4164L40 49.1672L25.8932 59.4164L31.2815 42.8328L17.1746 32.5836H34.6117L40 16Z" fill="#F2C94C"/></g></g>
        <defs><clipPath id="clip01tI-"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
