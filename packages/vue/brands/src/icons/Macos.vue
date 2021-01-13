
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
      <template v-if="variant === 'color'">
        <path
          d="M75 40C75 59.32 59.3375 75 40 75C20.6625 75 5 59.32 5 40C5 20.6625 20.6625 5 40 5C59.3375 5 75 20.6625 75 40Z"
          fill="white"
        />
        <path
          d="M53.75 15H57.5L42.5 40L57.5 65H53.75L40 42.5L26.25 65H22.5L37.5 40L22.5 15H26.25L40 37.5L53.75 15Z"
          fill="url(#paint0_linearB9On)"
        />
        <defs><linearGradient id="paint0_linearB9On" x1="40" y1="15" x2="40" y2="65" gradientUnits="userSpaceOnUse"><stop stop-color="#5AB1DC"/><stop offset="0.256735" stop-color="#8396B0"/><stop offset="0.500792" stop-color="#A37F86"/><stop offset="1" stop-color="#EE5031"/></linearGradient></defs>
      </template>
      <template v-if="variant === 'solid'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40 75C59.3375 75 75 59.32 75 40C75 20.6625 59.3375 5 40 5C20.6625 5 5 20.6625 5 40C5 59.32 20.6625 75 40 75ZM57.5 15H53.75L40 37.5L26.25 15H22.5L37.5 40L22.5 65H26.25L40 42.5L53.75 65H57.5L42.5 40L57.5 15Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M75 40C75 59.32 59.3375 75 40 75C20.6625 75 5 59.32 5 40C5 20.6625 20.6625 5 40 5C59.3375 5 75 20.6625 75 40Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M53.75 15H57.5L42.5 40L57.5 65H53.75L40 42.5L26.25 65H22.5L37.5 40L22.5 15H26.25L40 37.5L53.75 15Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
    </g>
  </svg>
</template>

<script>
import Vue from 'vue'
import { transform } from '../utils'

export default {
  name: 'node_modules/@glyphs/brands',

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
