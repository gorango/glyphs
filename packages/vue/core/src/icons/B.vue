
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
          d="M24.5 16C24.2239 16 24 16.2239 24 16.5V38V63.5C24 63.7761 24.2239 64 24.5 64"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M24 38H41C47.0751 38 52 33.0751 52 27C52 20.9249 47.0751 16 41 16H24.5"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M41 38H43C50.1797 38 56 43.8203 56 51C56 58.1797 50.1797 64 43 64H24.5"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M24 41H41V35H24V41ZM41 41H43V35H41V41ZM41 13L24.5 13V19L41 19V13ZM43 61H24.5V67H43V61ZM21 16.5L21 38H27L27 16.5H21ZM21 38L21 63.5H27L27 38H21ZM41 41C48.732 41 55 34.732 55 27L49 27C49 31.4183 45.4183 35 41 35V41ZM41 19C45.4183 19 49 22.5817 49 27L55 27C55 19.268 48.732 13 41 13V19ZM43 41C48.5228 41 53 45.4772 53 51H59C59 42.1634 51.8366 35 43 35V41ZM24.5 61C25.8807 61 27 62.1193 27 63.5H21C21 65.433 22.567 67 24.5 67V61ZM53 51C53 56.5229 48.5228 61 43 61V67C51.8366 67 59 59.8366 59 51H53ZM24.5 13C22.567 13 21 14.567 21 16.5H27C27 17.8807 25.8807 19 24.5 19V13Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M24 40H41V36H24V40ZM41 40H43V36H41V40ZM41 14L24.5 14V18L41 18V14ZM43 62H24.5V66H43V62ZM22 16.5L22 38H26L26 16.5H22ZM22 38L22 63.5H26L26 38H22ZM41 40C48.1797 40 54 34.1797 54 27L50 27C50 31.9706 45.9706 36 41 36V40ZM41 18C45.9706 18 50 22.0294 50 27L54 27C54 19.8203 48.1797 14 41 14V18ZM43 40C49.0751 40 54 44.9249 54 51H58C58 42.7157 51.2843 36 43 36V40ZM24.5 62C25.3284 62 26 62.6716 26 63.5H22C22 64.8807 23.1193 66 24.5 66V62ZM54 51C54 57.0751 49.0751 62 43 62V66C51.2843 66 58 59.2843 58 51H54ZM24.5 14C23.1193 14 22 15.1193 22 16.5H26C26 17.3284 25.3284 18 24.5 18V14Z"
          fill="#2F80ED"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M24 38H41M24 38V16.5C24 16.2239 24.2239 16 24.5 16H41C47.0751 16 52 20.9249 52 27C52 33.0751 47.0751 38 41 38M24 38V63.5C24 63.7761 24.2239 64 24.5 64H43C50.1797 64 56 58.1797 56 51C56 43.8203 50.1797 38 43 38H41"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 16.5C22 15.1193 23.1193 14 24.5 14L41 14C48.1797 14 54 19.8203 54 27C54 31.1628 52.0434 34.8686 48.9996 37.248C54.2975 39.5626 58 44.8489 58 51C58 59.2843 51.2843 66 43 66H24.5C23.1193 66 22 64.8807 22 63.5L22 16.5ZM26 40L26 62H43C49.0751 62 54 57.0751 54 51C54 44.9249 49.0751 40 43 40H26ZM26 36H41C45.9706 36 50 31.9706 50 27C50 22.0294 45.9706 18 41 18L26 18L26 36Z"
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
