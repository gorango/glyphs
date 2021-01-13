
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
          d="M40 5C20.6953 5 5 20.6953 5 40C5 59.3047 20.6953 75 40 75C59.3047 75 75 59.3047 75 40C75 20.6953 59.3047 5 40 5Z"
          fill="#021B33"
        />
        <path
          d="M36.25 17.5C36.25 24.5745 27.5 30 25 30V37.5H32.5V52.5C32.5 58.0228 36.9772 62.5 42.5 62.5H52.5V52.3936C51.5126 52.3936 47.625 52.3936 44.9981 52.3936C43.6174 52.3936 42.5 51.2743 42.5 49.8936V37.5H52.5V27.5H42.5V17.5H36.25Z"
          fill="white"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 40C5 20.6953 20.6953 5 40 5C59.3047 5 75 20.6953 75 40C75 59.3047 59.3047 75 40 75C20.6953 75 5 59.3047 5 40ZM25 30C27.5 30 36.25 24.5745 36.25 17.5H42.5V27.5H52.5V37.5H42.5V49.8936C42.5 51.2743 43.6174 52.3936 44.9981 52.3936H52.5V62.5H42.5C36.9772 62.5 32.5 58.0228 32.5 52.5V37.5H25V30Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M40 5C20.6953 5 5 20.6953 5 40C5 59.3047 20.6953 75 40 75C59.3047 75 75 59.3047 75 40C75 20.6953 59.3047 5 40 5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M36.25 17.5C36.25 24.5745 27.5 30 25 30V37.5H32.5V52.5C32.5 58.0228 36.9772 62.5 42.5 62.5H52.5V52.3936C51.5126 52.3936 47.625 52.3936 44.9981 52.3936C43.6174 52.3936 42.5 51.2743 42.5 49.8936V37.5H52.5V27.5H42.5V17.5H36.25Z"
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
