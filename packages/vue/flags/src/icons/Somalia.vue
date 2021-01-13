
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
        <g opacity="0.9"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/></g>
        <path
          d="M60 20L64.4672 33.8515L79.0211 33.8197L67.228 42.3485L71.7557 56.1803L60 47.6L48.2443 56.1803L52.772 42.3485L40.9789 33.8197L55.5328 33.8515L60 20Z"
          fill="#F2F2F2"
        />
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0-m1e)"><g opacity="0.9"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/></g><path d="M40 20L44.4672 33.8515L59.0211 33.8197L47.228 42.3485L51.7557 56.1803L40 47.6L28.2443 56.1803L32.772 42.3485L20.9789 33.8197L35.5328 33.8515L40 20Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip0-m1e"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0gtKv" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0gtKv)"><g clip-path="url(#clip0gtKv)"><g opacity="0.9"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/></g><path d="M40 20L44.4672 33.8515L59.0211 33.8197L47.228 42.3485L51.7557 56.1803L40 47.6L28.2443 56.1803L32.772 42.3485L20.9789 33.8197L35.5328 33.8515L40 20Z" fill="#F2F2F2"/></g></g>
        <defs><clipPath id="clip0gtKv"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
