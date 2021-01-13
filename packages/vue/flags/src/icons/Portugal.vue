
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
          fill="#EB5757"
        />
        <path
          d="M48 0V41.3043V80H0V0H48Z"
          fill="#219653"
        />
        <path
          d="M48 58C57.9411 58 66 49.9411 66 40C66 30.0589 57.9411 22 48 22C38.0589 22 30 30.0589 30 40C30 49.9411 38.0589 58 48 58Z"
          fill="#F2C94C"
        />
        <path
          d="M38 30H58V42C58 47.5228 53.5228 52 48 52C42.4772 52 38 47.5228 38 42V30Z"
          fill="#F2F2F2"
        />
        <path
          d="M40.5 32.5H55.5V42C55.5 46.1421 52.1421 49.5 48 49.5C43.8579 49.5 40.5 46.1421 40.5 42V32.5Z"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
        />
      </template>
      <template v-if="variant === 'square'">
        <path
          d="M80 0H0V80H80V0Z"
          fill="#EB5757"
        />
        <path
          d="M32 0V41.3043V80H0V0H32Z"
          fill="#219653"
        />
        <path
          d="M32 58C41.9411 58 50 49.9411 50 40C50 30.0589 41.9411 22 32 22C22.0589 22 14 30.0589 14 40C14 49.9411 22.0589 58 32 58Z"
          fill="#F2C94C"
        />
        <path
          d="M22 30H42V42C42 47.5228 37.5228 52 32 52C26.4772 52 22 47.5228 22 42V30Z"
          fill="#F2F2F2"
        />
        <path
          d="M24.5 32.5H39.5V42C39.5 46.1421 36.1421 49.5 32 49.5C27.8579 49.5 24.5 46.1421 24.5 42V32.5Z"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
        />
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0AQ5s" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0AQ5s)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M32 0V41.3043V80H0V0H32Z" fill="#219653"/><path d="M32 58C41.9411 58 50 49.9411 50 40C50 30.0589 41.9411 22 32 22C22.0589 22 14 30.0589 14 40C14 49.9411 22.0589 58 32 58Z" fill="#F2C94C"/><path d="M22 30H42V42C42 47.5228 37.5228 52 32 52C26.4772 52 22 47.5228 22 42V30Z" fill="#F2F2F2"/><path d="M24.5 32.5H39.5V42C39.5 46.1421 36.1421 49.5 32 49.5C27.8579 49.5 24.5 46.1421 24.5 42V32.5Z" stroke="#EB5757" stroke-width="5"/></g>
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
