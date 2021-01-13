
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
          d="M25.2307 40.1819L33.6693 48.7006C34.4467 49.4853 35.707 49.4853 36.4844 48.7006L54.7692 30.2424"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M16 18C16 16.8954 16.8954 16 18 16H62C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64H18C16.8954 64 16 63.1046 16 62V18Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 16C16.8954 16 16 16.8954 16 18V62C16 63.1046 16.8954 64 18 64H62C63.1046 64 64 63.1046 64 62V18C64 16.8954 63.1046 16 62 16H18ZM56.8805 32.3737C58.0465 31.1966 58.0465 29.2882 56.8805 28.1111C55.7145 26.934 53.824 26.934 52.6579 28.1111L35.0769 45.8588L27.342 38.0506C26.176 36.8735 24.2855 36.8735 23.1195 38.0506C21.9534 39.2277 21.9534 41.1361 23.1195 42.3132L31.5581 50.8318C33.5015 52.7937 36.6523 52.7937 38.5957 50.8318L56.8805 32.3737Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <rect
          x="16"
          y="16"
          width="48"
          height="48"
          rx="2"
          fill="#F2F2F2"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M25.2308 40.182L33.6694 48.7006C34.4468 49.4854 35.7071 49.4854 36.4845 48.7006L54.7692 30.2425"
          stroke="#219653"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M16 18C16 16.8954 16.8954 16 18 16H62C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64H18C16.8954 64 16 63.1046 16 62V18Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M25.2307 40.1819L33.6694 48.7005C34.4467 49.4853 35.7071 49.4853 36.4844 48.7005L54.7692 30.2424M18 64H62C63.1046 64 64 63.1046 64 62V18C64 16.8954 63.1046 16 62 16H18C16.8954 16 16 16.8954 16 18V62C16 63.1046 16.8954 64 18 64Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M56.1767 31.6633C56.9541 30.8785 56.9541 29.6062 56.1767 28.8215C55.3994 28.0368 54.139 28.0368 53.3617 28.8215L35.0769 47.2797L26.6383 38.761C25.8609 37.9763 24.6006 37.9763 23.8232 38.761C23.0459 39.5458 23.0459 40.818 23.8232 41.6028L32.2619 50.1214C33.8166 51.6909 36.3372 51.6909 37.892 50.1214L56.1767 31.6633Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 14C15.7909 14 14 15.7909 14 18V62C14 64.2091 15.7909 66 18 66H62C64.2091 66 66 64.2091 66 62V18C66 15.7909 64.2091 14 62 14H18ZM18 18L62 18V62H18V18Z"
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
