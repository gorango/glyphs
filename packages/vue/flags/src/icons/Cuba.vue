
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
        <rect
          width="120"
          height="80"
          fill="#F2F2F2"
        />
        <rect
          width="120"
          height="16"
          fill="#2F80ED"
        />
        <rect
          y="64"
          width="120"
          height="16"
          fill="#2F80ED"
        />
        <rect
          y="32"
          width="120"
          height="16"
          fill="#2F80ED"
        />
        <path
          opacity="0.9"
          d="M0 0V80L69 40L0 0Z"
          fill="#EB5757"
        />
        <path
          d="M16 28L18.6942 36.2918H27.4127L20.3593 41.4164L23.0534 49.7082L16 44.5836L8.94658 49.7082L11.6407 41.4164L4.58732 36.2918H13.3058L16 28Z"
          fill="#F2F2F2"
        />
      </template>
      <template v-if="variant === 'square'">
        <rect
          width="80"
          height="80"
          fill="#F2F2F2"
        />
        <rect
          width="80"
          height="16"
          fill="#2F80ED"
        />
        <rect
          y="64"
          width="80"
          height="16"
          fill="#2F80ED"
        />
        <rect
          y="32"
          width="80"
          height="16"
          fill="#2F80ED"
        />
        <path
          opacity="0.9"
          d="M0 0V80L46 40L0 0Z"
          fill="#EB5757"
        />
        <path
          d="M15 28L17.6942 36.2918H26.4127L19.3593 41.4164L22.0534 49.7082L15 44.5836L7.94658 49.7082L10.6407 41.4164L3.58732 36.2918H12.3058L15 28Z"
          fill="#F2F2F2"
        />
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask07465" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask07465)"><rect width="80" height="80" fill="#F2F2F2"/><rect width="80" height="16" fill="#2F80ED"/><rect y="64" width="80" height="16" fill="#2F80ED"/><rect y="32" width="80" height="16" fill="#2F80ED"/><path opacity="0.9" d="M0 0V80L46 40L0 0Z" fill="#EB5757"/><path d="M15 28L17.6942 36.2918H26.4127L19.3593 41.4164L22.0534 49.7082L15 44.5836L7.94658 49.7082L10.6407 41.4164L3.58732 36.2918H12.3058L15 28Z" fill="#F2F2F2"/></g>
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
