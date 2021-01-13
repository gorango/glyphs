
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
          d="M28 40.184L37.1716 31.0124C38.7337 29.4503 41.2663 29.4503 42.8284 31.0124L52 40.184"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M28 52.184L37.1716 43.0124C38.7337 41.4503 41.2663 41.4503 42.8284 43.0124L52 52.184"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M28 40.1836L38.409 29.7746C39.2877 28.8959 40.7123 28.8959 41.591 29.7746L52 40.1836"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M28 52.1836L38.409 41.7746C39.2877 40.8959 40.7123 40.8959 41.591 41.7746L52 52.1836"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M28 40.1836L38.409 29.7746C39.2877 28.8959 40.7123 28.8959 41.591 29.7746L52 40.1836"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M28 52.1836L38.409 41.7746C39.2877 40.8959 40.7123 40.8959 41.591 41.7746L52 52.1836"
          stroke="#F2C94C"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M28 40.1837L38.409 29.7747C39.2877 28.8961 40.7123 28.8961 41.591 29.7747L52 40.1837M28 52.1837L38.409 41.7747C39.2877 40.8961 40.7123 40.8961 41.591 41.7747L52 52.1837"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M40.3536 31.061C40.1583 30.8657 39.8417 30.8657 39.6464 31.061L29.7678 40.9397C28.7915 41.916 27.2085 41.916 26.2322 40.9397C25.2559 39.9634 25.2559 38.3805 26.2322 37.4041L36.1109 27.5255C38.2588 25.3776 41.7412 25.3776 43.8891 27.5255L53.7678 37.4041C54.7441 38.3805 54.7441 39.9634 53.7678 40.9397C52.7915 41.916 51.2085 41.916 50.2322 40.9397L40.3536 31.061Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M40.3536 43.061C40.1583 42.8657 39.8417 42.8657 39.6464 43.061L29.7678 52.9397C28.7915 53.916 27.2085 53.916 26.2322 52.9397C25.2559 51.9634 25.2559 50.3805 26.2322 49.4041L36.1109 39.5255C38.2588 37.3776 41.7412 37.3776 43.8891 39.5255L53.7678 49.4041C54.7441 50.3805 54.7441 51.9634 53.7678 52.9397C52.7915 53.916 51.2085 53.916 50.2322 52.9397L40.3536 43.061Z"
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
