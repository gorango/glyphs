
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
          d="M53.8667 38.4C54.9333 39.2 54.9333 40.8 53.8667 41.6L27.2 61.6C25.8815 62.5888 24 61.6481 24 60L24 20C24 18.3519 25.8815 17.4111 27.2 18.4L53.8667 38.4Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M56 16L56 64"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M53.8667 38.4C54.9333 39.2 54.9333 40.8 53.8667 41.6L27.2 61.6C25.8815 62.5889 24 61.6481 24 60L24 20C24 18.3519 25.8815 17.4111 27.2 18.4L53.8667 38.4Z"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M56 16L56 64"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M53.8667 38.4C54.9333 39.2 54.9333 40.8 53.8667 41.6L27.2 61.6C25.8815 62.5889 24 61.6481 24 60L24 20C24 18.3519 25.8815 17.4111 27.2 18.4L53.8667 38.4Z"
          fill="#9B51E0"
          stroke="#9B51E0"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M56 16L56 64"
          stroke="#2F80ED"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M53.8667 38.4C54.9333 39.2 54.9333 40.8 53.8667 41.6L27.2 61.6C25.8815 62.5889 24 61.6481 24 60L24 20C24 18.3519 25.8815 17.4111 27.2 18.4L53.8667 38.4Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M56 16L56 64M24 20L24 60C24 61.6481 25.8815 62.5889 27.2 61.6L53.8667 41.6C54.9333 40.8 54.9333 39.2 53.8667 38.4L27.2 18.4C25.8815 17.4111 24 18.3519 24 20Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M54 16C54 14.8954 54.8954 14 56 14C57.1046 14 58 14.8954 58 16V64C58 65.1046 57.1046 66 56 66C54.8954 66 54 65.1046 54 64V44L28.4 63.2C25.7631 65.1777 22 63.2962 22 60L22 20C22 16.7038 25.7631 14.8223 28.4 16.8L54 36V16ZM26 20L52.6667 40L26 60L26 20Z"
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
