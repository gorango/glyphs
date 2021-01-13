
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
      <template v-if="variant === 'path'">
        <path
          d="M62 54H26V18"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M18 26H54V62"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M26 54L62 18"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M26 18L26 54L62 54"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M54 62L54 26L18 26"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M26 54L62 18"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M26 18L26 54L62 54"
          stroke="#56CCF2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M54 62L54 26L18 26"
          stroke="#2F80ED"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M26 54L62 18"
          stroke="#9B51E0"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M54 54H26V26H54V54Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M62 54H26M26 54V18M26 54L62 18M18 26H54V62"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M56 26.8284L63.4142 19.4142C64.1953 18.6332 64.1953 17.3668 63.4142 16.5858C62.6332 15.8047 61.3668 15.8047 60.5858 16.5858L53.1716 24H28V18C28 16.8954 27.1046 16 26 16C24.8954 16 24 16.8954 24 18V24H18C16.8954 24 16 24.8954 16 26C16 27.1046 16.8954 28 18 28H24V54C24 54.2712 24.054 54.5298 24.1518 54.7656C24.2494 55.0015 24.394 55.2225 24.5858 55.4142C24.7775 55.606 24.9985 55.7506 25.2344 55.8482C25.4489 55.937 25.6757 55.9868 25.9041 55.9977C25.936 55.9992 25.968 56 26 56H52V62C52 63.1046 52.8954 64 54 64C55.1046 64 56 63.1046 56 62V56H62C63.1046 56 64 55.1046 64 54C64 52.8954 63.1046 52 62 52H56V26.8284ZM49.1716 28H28V49.1716L49.1716 28ZM30.8284 52L52 30.8284V52H30.8284Z"
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
  name: 'node_modules/@glyphs/core',

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
