
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
        <g opacity="0.9"><path d="M40 0H0V80H40V0Z" fill="#219653"/><path d="M80 0H40V80H80V0Z" fill="#F2C94C"/><path d="M120 0H80V80H120V0Z" fill="#EB5757"/></g>
        <path
          d="M60 26L63.127 35.696L73.3148 35.6738L65.0596 41.644L68.229 51.3262L60 45.32L51.771 51.3262L54.9404 41.644L46.6852 35.6738L56.873 35.696L60 26Z"
          fill="#219653"
        />
      </template>
      <template v-if="variant === 'square'">
        <g opacity="0.9"><path d="M26.6667 0H0V80H26.6667V0Z" fill="#219653"/><path d="M53.3332 0H26.6665V80H53.3332V0Z" fill="#F2C94C"/><path d="M80.0002 0H53.3335V80H80.0002V0Z" fill="#EB5757"/></g>
        <path
          d="M40 26L43.127 35.696L53.3148 35.6738L45.0596 41.644L48.229 51.3262L40 45.32L31.771 51.3262L34.9404 41.644L26.6852 35.6738L36.873 35.696L40 26Z"
          fill="#219653"
        />
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0P5tX" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0P5tX)"><g opacity="0.9"><path d="M26.6667 0H0V80H26.6667V0Z" fill="#219653"/><path d="M53.3332 0H26.6665V80H53.3332V0Z" fill="#F2C94C"/><path d="M80.0002 0H53.3335V80H80.0002V0Z" fill="#EB5757"/></g><path d="M40 26L43.127 35.696L53.3148 35.6738L45.0596 41.644L48.229 51.3262L40 45.32L31.771 51.3262L34.9404 41.644L26.6852 35.6738L36.873 35.696L40 26Z" fill="#219653"/></g>
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
