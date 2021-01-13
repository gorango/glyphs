
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
          x="0.0839844"
          width="119.915"
          height="80"
          fill="#219653"
        />
        <rect
          x="0.0839844"
          y="26.561"
          width="119.915"
          height="26.878"
          fill="#F2C94C"
        />
        <path
          d="M0 0V80L51.7135 40L0 0Z"
          fill="#333333"
        />
      </template>
      <template v-if="variant === 'square'">
        <rect
          x="0.0561523"
          width="79.9435"
          height="80"
          fill="#219653"
        />
        <rect
          x="0.0561523"
          y="26.561"
          width="79.9435"
          height="26.878"
          fill="#F2C94C"
        />
        <path
          d="M0 0V80L51.7135 40L0 0Z"
          fill="#333333"
        />
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0Xakz" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0Xakz)"><rect x="0.0561523" width="79.9435" height="80" fill="#219653"/><rect x="0.0561523" y="26.561" width="79.9435" height="26.878" fill="#F2C94C"/><path d="M0 0V80L51.7135 40L0 0Z" fill="#333333"/></g>
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
