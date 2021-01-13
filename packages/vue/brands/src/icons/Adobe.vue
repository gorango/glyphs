
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
          fill="#E6001F"
        />
        <path
          d="M17.5 57.5C17.5 57.5 33.0517 20.0098 33.0148 20H33.0148C33.0148 20 33.0148 20 33.0148 20H44.8253L62.5 57.5L49.1503 57.5C49.1602 57.5198 39.1406 34.4907 39.015 34.2592C38.9931 34.46 32.371 49.8728 32.2911 49.8917H39.4275C39.3951 49.9309 42.5306 57.4284 42.5306 57.5L17.5 57.5Z"
          fill="white"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 40C5 20.6953 20.6953 5 40 5C59.3047 5 75 20.6953 75 40C75 59.3047 59.3047 75 40 75C20.6953 75 5 59.3047 5 40ZM33.0148 20C33.0517 20.0098 17.5 57.5 17.5 57.5L42.5306 57.5C42.5306 57.4686 41.9288 56.012 41.2552 54.3816C40.3913 52.2906 39.4093 49.9137 39.4275 49.8917H32.2911C32.371 49.8727 38.9931 34.46 39.015 34.2592C39.1406 34.4907 49.1602 57.5198 49.1503 57.5L62.5 57.5L44.8253 20H33.0148Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M33.0148 20C33.0517 20.0098 17.5 57.5 17.5 57.5L42.5306 57.5C42.5306 57.4284 39.3951 49.9309 39.4275 49.8917H32.2911C32.371 49.8728 38.9931 34.46 39.015 34.2592C39.1406 34.4907 49.1602 57.5198 49.1503 57.5L62.5 57.5L44.8253 20H33.0148ZM33.0148 20C33.0148 20 33.0148 20 33.0148 20ZM40 5C20.6953 5 5 20.6953 5 40C5 59.3047 20.6953 75 40 75C59.3047 75 75 59.3047 75 40C75 20.6953 59.3047 5 40 5Z"
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
