
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
          d="M5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40Z"
          fill="white"
        />
        <path
          d="M20.8188 19.6015L18.9471 21.9412C18.1306 22.9617 18.238 24.4388 19.1934 25.3305L36.25 41.25V65H43.75V41.25L60.8066 25.3305C61.762 24.4388 61.8694 22.9617 61.0529 21.9412L59.1812 19.6015C58.2734 18.4668 56.5928 18.3424 55.5279 19.3312L40 33.75L24.4721 19.3312C23.4072 18.3424 21.7266 18.4668 20.8188 19.6015Z"
          fill="#FF0013"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5ZM18.9471 21.9412L20.8188 19.6015C21.7266 18.4668 23.4072 18.3424 24.4721 19.3312L40 33.75L55.5279 19.3312C56.5928 18.3424 58.2734 18.4668 59.1812 19.6015L61.0529 21.9412C61.8694 22.9617 61.762 24.4388 60.8066 25.3305L43.75 41.25V65H36.25V41.25L19.1934 25.3305C18.238 24.4388 18.1306 22.9617 18.9471 21.9412Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M20.8188 19.6015L18.9471 21.9412C18.1306 22.9617 18.238 24.4388 19.1934 25.3305L36.25 41.25V65H43.75V41.25L60.8066 25.3305C61.762 24.4388 61.8694 22.9617 61.0529 21.9412L59.1812 19.6015C58.2734 18.4668 56.5928 18.3424 55.5279 19.3312L40 33.75L24.4721 19.3312C23.4072 18.3424 21.7266 18.4668 20.8188 19.6015Z"
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
