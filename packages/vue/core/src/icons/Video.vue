
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
          d="M8 24C8 21.7909 9.79086 20 12 20H50C52.2091 20 54 21.7909 54 24V56C54 58.2091 52.2091 60 50 60H12C9.79086 60 8 58.2091 8 56V24Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M54 46.7002C54 47.4906 54.4655 48.2069 55.1877 48.5279L69.1877 54.7501C70.5103 55.3379 72 54.3698 72 52.9225V27.0775C72 25.6302 70.5103 24.6621 69.1877 25.2499L55.1877 31.4721C54.4655 31.7931 54 32.5094 54 33.2997"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <rect
          x="8"
          y="20"
          width="46"
          height="40"
          rx="4"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M57 49.875L69.2068 55.1487C70.5272 55.7191 72 54.7511 72 53.3127V27.3982C72 25.9598 70.5272 24.9917 69.2068 25.5622L57 30.8359V49.875ZM51 47.2828L39.2152 42.1914C37.6062 41.4963 37.6062 39.2146 39.2152 38.5195L51 33.4281V47.2828Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <rect
          x="8"
          y="20"
          width="46"
          height="40"
          rx="4"
          fill="#EB5757"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M54 48.5789L69.2068 55.1487C70.5272 55.7191 72 54.7511 72 53.3127V27.3982C72 25.9598 70.5272 24.9917 69.2068 25.5622L54 32.132V48.5789Z"
          fill="#F2C94C"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M8 24C8 21.7909 9.79086 20 12 20H50C52.2091 20 54 21.7909 54 24V56C54 58.2091 52.2091 60 50 60H12C9.79086 60 8 58.2091 8 56V24Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M54 48.5789L69.2068 55.1487C70.5272 55.7191 72 54.7511 72 53.3127V27.3982C72 25.9598 70.5272 24.9917 69.2068 25.5622L54 32.132V48.5789Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M8 24C8 21.7909 9.79086 20 12 20H50C52.2091 20 54 21.7909 54 24V56C54 58.2091 52.2091 60 50 60H12C9.79086 60 8 58.2091 8 56V24Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M54 48.5789L69.2068 55.1487C70.5272 55.7191 72 54.7511 72 53.3127V27.3982C72 25.9598 70.5272 24.9917 69.2068 25.5622L54 32.132V48.5789Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 18C8.68629 18 6 20.6863 6 24V56C6 59.3137 8.68629 62 12 62H50C53.3137 62 56 59.3137 56 56V51.0775L68.3754 56.5777C71.0206 57.7533 74 55.8171 74 52.9225V27.0775C74 24.1829 71.0206 22.2467 68.3754 23.4223L56 28.9225V24C56 20.6863 53.3137 18 50 18H12ZM56 33.2997V46.7003L70 52.9225V27.0775L56 33.2997ZM52 24C52 22.8954 51.1046 22 50 22H12C10.8954 22 10 22.8954 10 24V56C10 57.1046 10.8954 58 12 58H50C51.1046 58 52 57.1046 52 56V24Z"
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
