
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
          d="M120 0.0776367H0V79.9225H120V0.0776367Z"
          fill="#2F80ED"
        />
        <path
          d="M40 60H80L60 12L40 60Z"
          fill="#F2F2F2"
        />
        <path
          d="M44 60L60 20L76 60H44Z"
          fill="#333333"
        />
        <path
          d="M40 60.0001H80L60 38.6667L40 60.0001Z"
          fill="#F2C94C"
        />
      </template>
      <template v-if="variant === 'square'">
        <path
          d="M80 0.0776367H0V79.9225H80V0.0776367Z"
          fill="#2F80ED"
        />
        <path
          d="M20 60H60L40 12L20 60Z"
          fill="#F2F2F2"
        />
        <path
          d="M24 60L40 20L56 60H24Z"
          fill="#333333"
        />
        <path
          d="M20 60H60L40 38.6666L20 60Z"
          fill="#F2C94C"
        />
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0pKxb" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0pKxb)"><path d="M80 0.0776367H0V79.9225H80V0.0776367Z" fill="#2F80ED"/><path d="M20 60H60L40 12L20 60Z" fill="#F2F2F2"/><path d="M24 60L40 20L56 60H24Z" fill="#333333"/><path d="M20 60H60L40 38.6666L20 60Z" fill="#F2C94C"/></g>
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
