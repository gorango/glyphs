
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
          d="M22 28C22 19.1634 29.1634 12 38 12H42C50.8366 12 58 19.1634 58 28V52C58 60.8366 50.8366 68 42 68H38C29.1634 68 22 60.8366 22 52V28Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M58 33H22"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M40 17C41.6569 17 43 18.3431 43 20V25C43 26.6569 41.6569 28 40 28C38.3431 28 37 26.6569 37 25V20C37 18.3431 38.3431 17 40 17Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 28C22 19.1634 29.1634 12 38 12H42C50.8366 12 58 19.1634 58 28V31H22V28ZM43 20C43 18.3431 41.6569 17 40 17C38.3431 17 37 18.3431 37 20V25C37 26.6569 38.3431 28 40 28C41.6569 28 43 26.6569 43 25V20Z"
          fill="currentColor"
        />
        <path
          d="M58 35V52C58 60.8366 50.8366 68 42 68H38C29.1634 68 22 60.8366 22 52V35H58Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <rect
          x="22"
          y="12"
          width="36"
          height="56"
          rx="16"
          fill="#56CCF2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 34.5V31.5L40 31.5L58 31.5V34.5L40 34.5H22Z"
          fill="#F2F2F2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40 17C41.6569 17 43 18.3431 43 20V25C43 26.6569 41.6569 28 40 28C38.3431 28 37 26.6569 37 25V20C37 18.3431 38.3431 17 40 17Z"
          fill="#9B51E0"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M22 28C22 19.1634 29.1634 12 38 12H42C50.8366 12 58 19.1634 58 28V52C58 60.8366 50.8366 68 42 68H38C29.1634 68 22 60.8366 22 52V28Z"
          fill="currentColor"
          fill-opacity="0.25"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M58 33H22"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M40 17C41.6569 17 43 18.3431 43 20V25C43 26.6569 41.6569 28 40 28C38.3431 28 37 26.6569 37 25V20C37 18.3431 38.3431 17 40 17Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40 15C37.2386 15 35 17.2386 35 20V25C35 27.7614 37.2386 30 40 30C42.7614 30 45 27.7614 45 25V20C45 17.2386 42.7614 15 40 15ZM39 20C39 19.4477 39.4477 19 40 19C40.5523 19 41 19.4477 41 20V25C41 25.5523 40.5523 26 40 26C39.4477 26 39 25.5523 39 25V20Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 28C20 18.0589 28.0589 10 38 10H42C51.9411 10 60 18.0589 60 28V52C60 61.9411 51.9411 70 42 70H38C28.0589 70 20 61.9411 20 52V28ZM56 28V31H24V28C24 20.268 30.268 14 38 14H42C49.732 14 56 20.268 56 28ZM24 35V52C24 59.732 30.268 66 38 66H42C49.732 66 56 59.732 56 52V35H24Z"
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
