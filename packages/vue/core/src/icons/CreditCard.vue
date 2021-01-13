
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
          d="M8 20C8 17.7909 9.79086 16 12 16H68C70.2091 16 72 17.7909 72 20V60C72 62.2091 70.2091 64 68 64H12C9.79086 64 8 62.2091 8 60V20Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M8 26H72"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M72 36H8"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M16 48H23"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M16 56H32"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M12 16C9.79086 16 8 17.7909 8 20V26H72V20C72 17.7909 70.2091 16 68 16H12Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M72 36H8V60C8 62.2091 9.79086 64 12 64H68C70.2091 64 72 62.2091 72 60V36ZM13 48C13 46.3431 14.3431 45 16 45H23C24.6569 45 26 46.3431 26 48C26 49.6569 24.6569 51 23 51H16C14.3431 51 13 49.6569 13 48ZM16 53C14.3431 53 13 54.3431 13 56C13 57.6569 14.3431 59 16 59H32C33.6569 59 35 57.6569 35 56C35 54.3431 33.6569 53 32 53H16Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <rect
          x="8"
          y="16"
          width="64"
          height="48"
          rx="4"
          fill="#56CCF2"
        />
        <rect
          x="8"
          y="26"
          width="64"
          height="10"
          fill="#333333"
        />
        <path
          d="M16 48H23"
          stroke="#9B51E0"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M16 56H32"
          stroke="#9B51E0"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M8 20C8 17.7909 9.79086 16 12 16H68C70.2091 16 72 17.7909 72 20V60C72 62.2091 70.2091 64 68 64H12C9.79086 64 8 62.2091 8 60V20Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M8 26H72V36H8V26Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M16 48H23M16 56H32M12 64H68C70.2091 64 72 62.2091 72 60V20C72 17.7909 70.2091 16 68 16H12C9.79086 16 8 17.7909 8 20V60C8 62.2091 9.79086 64 12 64ZM8 26H72V36H8V26Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M14 48C14 46.8954 14.8954 46 16 46H23C24.1046 46 25 46.8954 25 48C25 49.1046 24.1046 50 23 50H16C14.8954 50 14 49.1046 14 48Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M16 54C14.8954 54 14 54.8954 14 56C14 57.1046 14.8954 58 16 58H32C33.1046 58 34 57.1046 34 56C34 54.8954 33.1046 54 32 54H16Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 14C8.68629 14 6 16.6863 6 20V60C6 63.3137 8.68629 66 12 66H68C71.3137 66 74 63.3137 74 60V20C74 16.6863 71.3137 14 68 14H12ZM70 24V20C70 18.8954 69.1046 18 68 18H12C10.8954 18 10 18.8954 10 20V24H70ZM10 28V34H70V28H10ZM70 38H10V60C10 61.1046 10.8954 62 12 62H68C69.1046 62 70 61.1046 70 60V38Z"
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
