
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M62.5333 10H17.5048C13.36 10 10 13.3579 10 17.5V62.5C10 66.6421 13.36 70 17.5048 70H62.5333C66.6632 69.979 70.0001 66.6273 70 62.5V17.5C70.0001 13.3727 66.6632 10.021 62.5333 10ZM22.5 17.5H32.5C35.2614 17.5 37.5 19.7386 37.5 22.5V57.5C37.5 60.2614 35.2614 62.5 32.5 62.5H22.5C19.7386 62.5 17.5 60.2614 17.5 57.5V22.5C17.5 19.7386 19.7386 17.5 22.5 17.5ZM57.5 17.5H47.5C44.7386 17.5 42.5 19.7386 42.5 22.5V40C42.5 42.7614 44.7386 45 47.5 45H57.5C60.2614 45 62.5 42.7614 62.5 40V22.5C62.5 19.7386 60.2614 17.5 57.5 17.5Z"
          fill="url(#paint0_linearpbB9)"
        />
        <defs><linearGradient id="paint0_linearpbB9" x1="40.019" y1="70" x2="40.019" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="#0052CC"/><stop offset="0.51698" stop-color="#217EF8"/><stop offset="1" stop-color="#2684FF"/></linearGradient></defs>
      </template>
      <template v-if="variant === 'solid'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M62.5333 10H17.5048C13.36 10 10 13.3579 10 17.5V62.5C10 66.6421 13.36 70 17.5048 70H62.5333C66.6632 69.979 70.0001 66.6273 70 62.5V17.5C70.0001 13.3727 66.6632 10.021 62.5333 10ZM22.5 17.5H32.5C35.2614 17.5 37.5 19.7386 37.5 22.5V57.5C37.5 60.2614 35.2614 62.5 32.5 62.5H22.5C19.7386 62.5 17.5 60.2614 17.5 57.5V22.5C17.5 19.7386 19.7386 17.5 22.5 17.5ZM57.5 17.5H47.5C44.7386 17.5 42.5 19.7386 42.5 22.5V40C42.5 42.7614 44.7386 45 47.5 45H57.5C60.2614 45 62.5 42.7614 62.5 40V22.5C62.5 19.7386 60.2614 17.5 57.5 17.5Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M62.5333 10H17.5048C13.36 10 10 13.3579 10 17.5V62.5C10 66.6421 13.36 70 17.5048 70H62.5333C66.6632 69.979 70.0001 66.6273 70 62.5V17.5C70.0001 13.3727 66.6632 10.021 62.5333 10ZM22.5 17.5H32.5C35.2614 17.5 37.5 19.7386 37.5 22.5V57.5C37.5 60.2614 35.2614 62.5 32.5 62.5H22.5C19.7386 62.5 17.5 60.2614 17.5 57.5V22.5C17.5 19.7386 19.7386 17.5 22.5 17.5ZM57.5 17.5H47.5C44.7386 17.5 42.5 19.7386 42.5 22.5V40C42.5 42.7614 44.7386 45 47.5 45H57.5C60.2614 45 62.5 42.7614 62.5 40V22.5C62.5 19.7386 60.2614 17.5 57.5 17.5Z"
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
