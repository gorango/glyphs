
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
          d="M64.5858 15.4143C65.8458 14.1543 68 15.0467 68 16.8285V66C68 67.1046 67.1046 68 66 68H16.8285C15.0467 68 14.1543 65.8458 15.4143 64.5858L64.5858 15.4143Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M54 26V67.9999"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M64.5858 15.4142C65.8457 14.1543 68 15.0466 68 16.8284V66C68 67.1046 67.1046 68 66 68H16.8284C15.0466 68 14.1543 65.8457 15.4142 64.5858L64.5858 15.4142Z"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M54 26V68H16.8285C15.0467 68 14.1543 65.8457 15.4143 64.5857L54 26Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M64.5858 15.4142C65.8457 14.1543 68 15.0466 68 16.8284V66C68 67.1046 67.1046 68 66 68H16.8284C15.0466 68 14.1543 65.8457 15.4142 64.5858L64.5858 15.4142Z"
          fill="#56CCF2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M54 26V68H16.8285C15.0467 68 14.1543 65.8457 15.4143 64.5857L54 26Z"
          fill="#2F80ED"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M64.5858 15.4143C65.8458 14.1543 68 15.0467 68 16.8285V66C68 67.1046 67.1046 68 66 68H16.8285C15.0467 68 14.1543 65.8458 15.4143 64.5858L64.5858 15.4143Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M54 26V68L16.8285 68C15.0467 68 14.1543 65.8458 15.4143 64.5858L54 26Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M16.8285 68H66C67.1046 68 68 67.1046 68 66V16.8285C68 15.0467 65.8458 14.1543 64.5858 15.4143L15.4143 64.5858M16.8285 68C15.0467 68 14.1543 65.8458 15.4143 64.5858M16.8285 68L54 68V26L15.4143 64.5858"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M14 63.1714L52.5857 24.5857C52.5878 24.5835 52.59 24.5814 52.5922 24.5792L63.1715 13.9999C65.6913 11.48 69.9999 13.2647 69.9999 16.8283V65.9999C69.9999 68.209 68.209 69.9999 65.9999 69.9999H16.8283C13.9573 69.9999 12.241 67.2034 12.9999 64.7987C13.183 64.2186 13.5102 63.6612 14 63.1714ZM14 63.1714C14 63.1714 13.9999 63.1714 14 63.1714ZM55.9999 65.9999H65.9999V16.8283L55.9999 26.8284V65.9999ZM51.9999 30.8283L16.8284 65.9998L51.9999 65.9998V30.8283Z"
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
