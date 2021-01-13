
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
          d="M12 34H68V66H12V34Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M12 34L20 14H60L68 34"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M40 14V34"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M42 14H60L67.2 32H42V14Z"
          fill="currentColor"
        />
        <path
          d="M38 14H20L12.8 32H38V14Z"
          fill="currentColor"
        />
        <path
          d="M12 36V66H68V36H12Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <rect
          x="12"
          y="34"
          width="56"
          height="32"
          fill="#F2994A"
        />
        <path
          d="M12 34H68L60 14H20L12 34Z"
          fill="#F2C94C"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M12 34H68V66H12V34Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M12 34H68L60 14H20L12 34Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M12 34H68M12 34V66H68V34M12 34L20 14H60L68 34M40 14V34"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.05 34C10.05 33.9822 10.0503 33.9645 10.0508 33.9469C10.0575 33.6946 10.1122 33.4543 10.2059 33.2347L18.1895 13.2758C18.4857 12.5354 19.2027 12.05 20 12.05H60C60.7974 12.05 61.5144 12.5354 61.8106 13.2758L69.7941 33.2346C69.8839 33.4449 69.9378 33.6741 69.9482 33.9146C69.9494 33.943 69.9501 33.9715 69.9501 33.9999L69.9501 34.0051V66C69.9501 67.0769 69.077 67.95 68 67.95H12C10.9231 67.95 10.05 67.0769 10.05 66V34ZM38.05 15.95H21.3203L14.8803 32.05H38.05V15.95ZM41.9501 32.05V15.95H58.6798L65.1198 32.05H41.9501ZM13.95 35.95V64.05H66.05V35.95H13.95Z"
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
