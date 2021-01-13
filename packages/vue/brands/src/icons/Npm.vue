
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
          d="M0 25V50H22.5V55H40V50H80V25H0Z"
          fill="#CB3837"
        />
        <path
          d="M13.6551 30H5V45H13.6551V34.0278H18.0586V45H22.4621V30H13.6551ZM26.8655 30V50H35.6724V45H44.3276V30H26.8655ZM39.9241 40.9722H35.6724V34.0278H39.9241V40.9722ZM57.3862 30H48.731V45H57.3862V34.0278H61.7896V45H66.1931V34.0278H70.5965V45H75V30H57.3862Z"
          fill="white"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          d="M35.6724 40.9722H39.9241V34.0278H35.6724V40.9722Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 50V25H80V50H40V55H22.5V50H0ZM5 30H22.4621V45H18.0586V34.0278H13.6551V45H5V30ZM26.8655 50V30H44.3276V45H35.6724V50H26.8655ZM48.731 30H75V45H70.5965V34.0278H66.1931V45H61.7896V34.0278H57.3862V45H48.731V30Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M0.5 25V50H23V55H40.5V50H80.5V25H0.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M5.5 30V45H14.1551V34.0278H18.5586V45H22.9621V30H5.5ZM27.3655 30V50H36.1724V45H44.8276V30H27.3655ZM40.4241 40.9722H36.1724V34.0278H40.4241V40.9722ZM49.231 30V45H57.8862V34.0278H62.2896V45H66.6931V34.0278H71.0965V45H75.5V30H49.231Z"
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
