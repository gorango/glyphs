
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
          d="M12 26C12 23.7909 13.7909 22 16 22H64C66.2091 22 68 23.7909 68 26V54C68 56.2091 66.2091 58 64 58H16C13.7909 58 12 56.2091 12 54V26Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M19 44H43"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M19 50H35"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M57 29H61V33H57V29Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 22C13.7909 22 12 23.7909 12 26V54C12 56.2091 13.7909 58 16 58H64C66.2091 58 68 56.2091 68 54V26C68 23.7909 66.2091 22 64 22H16ZM19 41.5C17.6193 41.5 16.5 42.6193 16.5 44C16.5 45.3807 17.6193 46.5 19 46.5H43C44.3807 46.5 45.5 45.3807 45.5 44C45.5 42.6193 44.3807 41.5 43 41.5H19ZM16.5 50C16.5 48.6193 17.6193 47.5 19 47.5H35C36.3807 47.5 37.5 48.6193 37.5 50C37.5 51.3807 36.3807 52.5 35 52.5H19C17.6193 52.5 16.5 51.3807 16.5 50ZM57 26.5C55.6193 26.5 54.5 27.6193 54.5 29V33C54.5 34.3807 55.6193 35.5 57 35.5H61C62.3807 35.5 63.5 34.3807 63.5 33V29C63.5 27.6193 62.3807 26.5 61 26.5H57Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <rect
          x="12"
          y="22"
          width="56"
          height="36"
          rx="4"
          fill="#56CCF2"
        />
        <path
          d="M19 44L43 44"
          stroke="#4F4F4F"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M19 50H35"
          stroke="#4F4F4F"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="57"
          y="29"
          width="4"
          height="4"
          fill="#4F4F4F"
          stroke="#4F4F4F"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M12 26C12 23.7909 13.7909 22 16 22H64C66.2091 22 68 23.7909 68 26V54C68 56.2091 66.2091 58 64 58H16C13.7909 58 12 56.2091 12 54V26Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M57 29H61V33H57V29Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M19 44H43M19 50H35M16 58H64C66.2091 58 68 56.2091 68 54V26C68 23.7909 66.2091 22 64 22H16C13.7909 22 12 23.7909 12 26V54C12 56.2091 13.7909 58 16 58ZM57 29H61V33H57V29Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M19 42C17.8954 42 17 42.8954 17 44C17 45.1046 17.8954 46 19 46H43C44.1046 46 45 45.1046 45 44C45 42.8954 44.1046 42 43 42H19Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M17 50C17 48.8954 17.8954 48 19 48H35C36.1046 48 37 48.8954 37 50C37 51.1046 36.1046 52 35 52H19C17.8954 52 17 51.1046 17 50Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M57 27C55.8954 27 55 27.8954 55 29V33C55 34.1046 55.8954 35 57 35H61C62.1046 35 63 34.1046 63 33V29C63 27.8954 62.1046 27 61 27H57Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 20C12.6863 20 10 22.6863 10 26V54C10 57.3137 12.6863 60 16 60H64C67.3137 60 70 57.3137 70 54V26C70 22.6863 67.3137 20 64 20H16ZM14 26C14 24.8954 14.8954 24 16 24H64C65.1046 24 66 24.8954 66 26V54C66 55.1046 65.1046 56 64 56H16C14.8954 56 14 55.1046 14 54V26Z"
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
