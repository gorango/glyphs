
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
          d="M120 0H0V80H120V0Z"
          fill="#333333"
        />
        <path
          d="M120 0.0788574H0V26.7455H120V0.0788574Z"
          fill="#2F80ED"
        />
        <path
          d="M120 53H0V79.6667H120V53Z"
          fill="#F2F2F2"
        />
      </template>
      <template v-if="variant === 'square'">
        <path
          d="M80 0H0V80H80V0Z"
          fill="#333333"
        />
        <path
          d="M80 0.0788574H0V26.7455H80V0.0788574Z"
          fill="#2F80ED"
        />
        <path
          d="M80 53H0V79.6667H80V53Z"
          fill="#F2F2F2"
        />
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask03cOB" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask03cOB)"><path d="M80 0H0V80H80V0Z" fill="#333333"/><path d="M80 0.0789795H0V26.7456H80V0.0789795Z" fill="#2F80ED"/><path d="M80 53H0V79.6667H80V53Z" fill="#F2F2F2"/></g>
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
