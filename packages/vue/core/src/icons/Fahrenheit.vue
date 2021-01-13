
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
          d="M62.5 20H39.5V40M39.5 60V40M39.5 40H57.4688"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M17.5 27C17.5 23.134 20.634 20 24.5 20C28.366 20 31.5 23.134 31.5 27C31.5 30.866 28.366 34 24.5 34C20.634 34 17.5 30.866 17.5 27Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M62 23C63.6569 23 65 21.6569 65 20C65 18.3431 63.6569 17 62 17V23ZM39 20V17C37.3431 17 36 18.3431 36 20H39ZM36 60C36 61.6569 37.3431 63 39 63C40.6569 63 42 61.6569 42 60H36ZM39 37C37.3431 37 36 38.3431 36 40C36 41.6569 37.3431 43 39 43L39 37ZM56.9688 43C58.6256 43 59.9688 41.6569 59.9688 40C59.9688 38.3431 58.6256 37 56.9688 37V43ZM62 17L39 17V23L62 23V17ZM36 20V20.4167H42V20H36ZM36 59.5833V60H42V59.5833H36ZM36 20.4167V40H42V20.4167H36ZM36 40L36 59.5833H42L42 40H36ZM39 43H56.9688V37H39L39 43Z"
          fill="currentColor"
        />
        <rect
          x="17"
          y="20"
          width="14"
          height="14"
          rx="7"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M62 22C63.1046 22 64 21.1046 64 20C64 18.8954 63.1046 18 62 18V22ZM39 20V18C37.8954 18 37 18.8954 37 20H39ZM37 60C37 61.1046 37.8954 62 39 62C40.1046 62 41 61.1046 41 60H37ZM39 38C37.8954 38 37 38.8954 37 40C37 41.1046 37.8954 42 39 42V38ZM56.9688 42C58.0733 42 58.9688 41.1046 58.9688 40C58.9688 38.8954 58.0733 38 56.9688 38V42ZM62 18L39 18V22L62 22V18ZM37 20V20.4167H41V20H37ZM37 59.5833V60H41V59.5833H37ZM37 20.4167V40H41V20.4167H37ZM37 40L37 59.5833H41L41 40H37ZM39 42H56.9688V38H39V42Z"
          fill="#F2C94C"
        />
        <rect
          x="17"
          y="20"
          width="14"
          height="14"
          rx="7"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M17.5 27C17.5 23.134 20.634 20 24.5 20C28.366 20 31.5 23.134 31.5 27C31.5 30.866 28.366 34 24.5 34C20.634 34 17.5 30.866 17.5 27Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M62.5 20H39.5V40M39.5 60V40M39.5 40H57.4688M24.5 34C20.634 34 17.5 30.866 17.5 27C17.5 23.134 20.634 20 24.5 20C28.366 20 31.5 23.134 31.5 27C31.5 30.866 28.366 34 24.5 34Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 18C19.0294 18 15 22.0294 15 27C15 31.9706 19.0294 36 24 36C28.9706 36 33 31.9706 33 27C33 22.0294 28.9706 18 24 18ZM19 27C19 24.2386 21.2386 22 24 22C26.7614 22 29 24.2386 29 27C29 29.7614 26.7614 32 24 32C21.2386 32 19 29.7614 19 27Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M37 20C37 18.8954 37.8954 18 39 18H62C63.1046 18 64 18.8954 64 20C64 21.1046 63.1046 22 62 22H41V38H56.9688C58.0733 38 58.9688 38.8954 58.9688 40C58.9688 41.1046 58.0733 42 56.9688 42H41V60C41 61.1046 40.1046 62 39 62C37.8954 62 37 61.1046 37 60V20Z"
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
