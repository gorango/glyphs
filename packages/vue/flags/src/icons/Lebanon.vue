
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
          d="M120 39.9999H0"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M74 49.5455L60 25L46 49.5455H57.2V55H62.8V49.5455H74Z"
          fill="#219653"
        />
      </template>
      <template v-if="variant === 'square'">
        <path
          d="M80 0H0V80H80V0Z"
          fill="#EB5757"
        />
        <path
          d="M80 39.9999H0"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M54 49.5455L40 25L26 49.5455H37.2V55H42.8V49.5455H54Z"
          fill="#219653"
        />
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0F-Mj" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0F-Mj)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 39.9999H0" stroke="#F2F2F2" stroke-width="35"/><path fill-rule="evenodd" clip-rule="evenodd" d="M54 49.5455L40 25L26 49.5455H37.2V55H42.8V49.5455H54Z" fill="#219653"/></g>
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
