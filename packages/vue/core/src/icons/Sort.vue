
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
          d="M49.1343 44H30.7911C29.0093 44 28.117 46.1543 29.3769 47.4142L38.5485 56.5858C39.3295 57.3668 40.5959 57.3668 41.3769 56.5858L50.5485 47.4142C51.8084 46.1543 50.9161 44 49.1343 44Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M49.1343 35.9999H30.7911C29.0093 35.9999 28.117 33.8457 29.3769 32.5857L38.5485 23.4142C39.3295 22.6331 40.5959 22.6331 41.3769 23.4142L50.5485 32.5857C51.8084 33.8457 50.9161 35.9999 49.1343 35.9999Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M49.0131 44L30.9126 44C29.0861 44 28.1713 46.2084 29.4629 47.5L38.1067 56.1438C39.1319 57.169 40.7939 57.169 41.819 56.1438L50.4629 47.5C51.7545 46.2084 50.8397 44 49.0131 44Z"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M49.0131 36L30.9126 36C29.0861 36 28.1713 33.7916 29.4629 32.5L38.1067 23.8562C39.1319 22.831 40.7939 22.831 41.819 23.8562L50.4629 32.5C51.7545 33.7916 50.8397 36 49.0131 36Z"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M49.0131 44L30.9126 44C29.0861 44 28.1713 46.2084 29.4629 47.5L38.1067 56.1438C39.1319 57.169 40.7939 57.169 41.819 56.1438L50.4629 47.5C51.7545 46.2084 50.8397 44 49.0131 44Z"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M49.0131 36L30.9126 36C29.0861 36 28.1713 33.7916 29.4629 32.5L38.1067 23.8562C39.1319 22.831 40.7939 22.831 41.819 23.8562L50.4629 32.5C51.7545 33.7916 50.8397 36 49.0131 36Z"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M49.0133 44.0001H30.9128C29.0862 44.0001 28.1714 46.2085 29.463 47.5001L38.1069 56.1439C39.132 57.1691 40.794 57.1691 41.8192 56.1439L50.463 47.5001C51.7546 46.2085 50.8398 44.0001 49.0133 44.0001Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M49.0133 36.0001H30.9128C29.0862 36.0001 28.1714 33.7917 29.463 32.5001L38.1069 23.8562C39.132 22.8311 40.794 22.8311 41.8192 23.8562L50.463 32.5001C51.7546 33.7917 50.8398 36.0001 49.0133 36.0001Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M49.0133 44.0001H30.9128C29.0862 44.0001 28.1714 46.2085 29.463 47.5001L38.1069 56.1439C39.132 57.1691 40.794 57.1691 41.8192 56.1439L50.463 47.5001C51.7546 46.2085 50.8398 44.0001 49.0133 44.0001Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M49.0133 36.0001H30.9128C29.0862 36.0001 28.1714 33.7917 29.463 32.5001L38.1069 23.8562C39.132 22.8311 40.794 22.8311 41.8192 23.8562L50.463 32.5001C51.7546 33.7917 50.8398 36.0001 49.0133 36.0001Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42.7912 21.9999C41.2291 20.4378 38.6965 20.4378 37.1344 21.9999L27.9628 31.1715C25.4429 33.6914 27.2276 37.9999 30.7912 37.9999H49.1344C52.698 37.9999 54.4827 33.6914 51.9628 31.1715L42.7912 21.9999ZM39.9628 24.8284L49.1344 33.9999H30.7912L39.9628 24.8284Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42.7912 57.9999C41.2291 59.562 38.6965 59.562 37.1344 57.9999L27.9628 48.8284C25.4429 46.3085 27.2276 41.9999 30.7912 41.9999H49.1344C52.698 41.9999 54.4827 46.3085 51.9628 48.8284L42.7912 57.9999ZM39.9628 55.1715L49.1344 45.9999H30.7912L39.9628 55.1715Z"
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
