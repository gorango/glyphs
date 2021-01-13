
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
          d="M5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40Z"
          fill="#172A73"
        />
        <path
          d="M13.936 24.3616V25.8509L19.3809 26.7082C23.2389 27.3156 26.3483 30.2155 27.2472 34.0444L33.621 61.1938C33.7788 61.8657 34.3742 62.3403 35.0594 62.3403H44.0037C44.5937 62.3403 45.1272 61.9867 45.3609 61.4409L60.7897 25.4012C61.0001 24.9096 60.6424 24.3616 60.1111 24.3616H51.8703C51.2752 24.3616 50.7382 24.7211 50.5076 25.2739L40.172 50.0531L36.049 28.0024C35.6542 25.8909 33.8238 24.3616 31.6914 24.3616H13.936Z"
          fill="white"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5ZM13.9362 25.8509V24.3616H31.6916C33.8239 24.3616 35.6543 25.8909 36.0491 28.0024L40.1722 50.0531L50.5078 25.2739C50.7383 24.7211 51.2753 24.3616 51.8704 24.3616H60.1112C60.6425 24.3616 61.0003 24.9096 60.7898 25.4012L45.361 61.4409C45.1273 61.9867 44.5938 62.3403 44.0038 62.3403H35.0595C34.3743 62.3403 33.7789 61.8657 33.6211 61.1938L27.2473 34.0444C26.3484 30.2155 23.239 27.3156 19.381 26.7082L13.9362 25.8509Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5ZM13.9362 25.8509V24.3616H31.6916C33.8239 24.3616 35.6543 25.8909 36.0491 28.0024L40.1722 50.0531L50.5078 25.2739C50.7383 24.7211 51.2753 24.3616 51.8704 24.3616H60.1112C60.6425 24.3616 61.0003 24.9096 60.7898 25.4012L45.361 61.4409C45.1273 61.9867 44.5938 62.3403 44.0038 62.3403H35.0595C34.3743 62.3403 33.7789 61.8657 33.6211 61.1938L27.2473 34.0444C26.3484 30.2155 23.239 27.3156 19.381 26.7082L13.9362 25.8509Z"
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
