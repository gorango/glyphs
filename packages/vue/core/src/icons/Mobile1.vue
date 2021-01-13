
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
          d="M24 16C24 13.7909 25.7909 12 28 12H52C54.2091 12 56 13.7909 56 16V64C56 66.2091 54.2091 68 52 68H28C25.7909 68 24 66.2091 24 64V16Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M41 64H39"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M56 60H24"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M56 20H24"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M44 16H36"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M24 16C24 13.7909 25.7909 12 28 12L52 12C54.2091 12 56 13.7909 56 16V17.5H46.0002C46.314 17.0822 46.5 16.5628 46.5 16C46.5 14.6193 45.3807 13.5 44 13.5H36C34.6193 13.5 33.5 14.6193 33.5 16C33.5 16.5628 33.686 17.0822 33.9998 17.5H24V16Z"
          fill="currentColor"
        />
        <path
          d="M24 22.5V57.5H56V22.5H24Z"
          fill="currentColor"
        />
        <path
          d="M43.0002 62.5H56V64C56 66.2091 54.2091 68 52 68H28C25.7909 68 24 66.2091 24 64V62.5H36.9998C36.686 62.9178 36.5 63.4372 36.5 64C36.5 65.3807 37.6193 66.5 39 66.5H41C42.3807 66.5 43.5 65.3807 43.5 64C43.5 63.4372 43.314 62.9178 43.0002 62.5Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <rect
          x="24"
          y="12"
          width="32"
          height="56"
          rx="4"
          fill="#56CCF2"
        />
        <path
          d="M24 60H56V20H24V60Z"
          fill="#9B51E0"
        />
        <path
          d="M44 16H36"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M41 64H39"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M24 16C24 13.7909 25.7909 12 28 12H52C54.2091 12 56 13.7909 56 16V64C56 66.2091 54.2091 68 52 68H28C25.7909 68 24 66.2091 24 64V16Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M56 60H24M56 20H24M44 16H36M41 64H39M28 68H52C54.2091 68 56 66.2091 56 64V16C56 13.7909 54.2091 12 52 12H28C25.7909 12 24 13.7909 24 16V64C24 66.2091 25.7909 68 28 68Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 16C22 12.6863 24.6863 10 28 10H52C55.3137 10 58 12.6863 58 16V64C58 67.3137 55.3137 70 52 70H28C24.6863 70 22 67.3137 22 64V16ZM26 22V58H54V22H26ZM54 18H26V16C26 14.8954 26.8954 14 28 14H52C53.1046 14 54 14.8954 54 16V18ZM54 62H26V64C26 65.1046 26.8954 66 28 66H52C53.1046 66 54 65.1046 54 64V62Z"
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
