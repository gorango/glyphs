
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.5 51.667H39.9999V75.0003L15.5 51.667Z"
          fill="#0055FF"
        />
        <path
          d="M39.9999 28.333H15.5V51.6663H64.4998L39.9999 28.333Z"
          fill="#00AAFF"
        />
        <path
          d="M15.5 5L39.9999 28.3333H64.4998V5H15.5Z"
          fill="#88DDFF"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.5 51.6665H39.9999V74.9998L15.5 51.6665Z"
          fill="currentColor"
        />
        <path
          d="M39.9999 28.3333H15.5V51.6665L64.4998 51.6666L39.9999 28.3333Z"
          fill="currentColor"
        />
        <path
          d="M15.5 5L39.9999 28.3333L64.4998 28.3333V5H15.5Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M15.5 51.6665H39.9999V74.9998L15.5 51.6665ZM15.5 51.6665V28.3333H39.9999M15.5 51.6665L64.4998 51.6666L39.9999 28.3333M39.9999 28.3333L15.5 5H64.4998V28.3333L39.9999 28.3333Z"
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
