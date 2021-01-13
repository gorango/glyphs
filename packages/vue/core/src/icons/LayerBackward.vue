
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
          d="M16 18C16 16.8954 16.8954 16 18 16H46C47.1046 16 48 16.8954 48 18V46C48 47.1046 47.1046 48 46 48H18C16.8954 48 16 47.1046 16 46V18Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M22 23C22 22.4477 22.4477 22 23 22H41C41.5523 22 42 22.4477 42 23V41C42 41.5523 41.5523 42 41 42H23C22.4477 42 22 41.5523 22 41V23Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M32 48V62C32 63.1046 32.8954 64 34 64H62C63.1046 64 64 63.1046 64 62V34C64 32.8954 63.1046 32 62 32H48"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M32 62V53.5C32 52.3954 32.8954 51.5 34 51.5H46C49.0376 51.5 51.5 49.0376 51.5 46V34C51.5 32.8954 52.3954 32 53.5 32H62C63.1046 32 64 32.8954 64 34V62C64 63.1046 63.1046 64 62 64H34C32.8954 64 32 63.1046 32 62Z"
          fill="currentColor"
        />
        <path
          d="M25.5 23.5C24.3954 23.5 23.5 24.3954 23.5 25.5V38.5C23.5 39.6046 24.3954 40.5 25.5 40.5H38.5C39.6046 40.5 40.5 39.6046 40.5 38.5V25.5C40.5 24.3954 39.6046 23.5 38.5 23.5H25.5Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 18C16 16.8954 16.8954 16 18 16H46C47.1046 16 48 16.8954 48 18V46C48 47.1046 47.1046 48 46 48H18C16.8954 48 16 47.1046 16 46V18ZM20.5 23C20.5 21.6193 21.6193 20.5 23 20.5H41C42.3807 20.5 43.5 21.6193 43.5 23V41C43.5 42.3807 42.3807 43.5 41 43.5H23C21.6193 43.5 20.5 42.3807 20.5 41V23Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M16 18C16 16.8954 16.8954 16 18 16L46 16C47.1046 16 48 16.8954 48 18V46C48 47.1046 47.1046 48 46 48L18 48C16.8954 48 16 47.1046 16 46L16 18Z"
          fill="#2F80ED"
        />
        <path
          d="M22 23C22 22.4477 22.4477 22 23 22L41 22C41.5523 22 42 22.4477 42 23V41C42 41.5523 41.5523 42 41 42H23C22.4477 42 22 41.5523 22 41L22 23Z"
          fill="#56CCF2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M32 48V62C32 63.1046 32.8954 64 34 64H62C63.1046 64 64 63.1046 64 62V34C64 32.8954 63.1046 32 62 32L48 32V46C48 47.1046 47.1046 48 46 48H32Z"
          fill="#9B51E0"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M16 18C16 16.8954 16.8954 16 18 16H46C47.1046 16 48 16.8954 48 18V46C48 47.1046 47.1046 48 46 48H18C16.8954 48 16 47.1046 16 46V18Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M22 23C22 22.4477 22.4477 22 23 22H41C41.5523 22 42 22.4477 42 23V41C42 41.5523 41.5523 42 41 42H23C22.4477 42 22 41.5523 22 41V23Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M32 48V62C32 63.1046 32.8954 64 34 64H62C63.1046 64 64 63.1046 64 62V34C64 32.8954 63.1046 32 62 32H48V46C48 47.1046 47.1046 48 46 48H32Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M48 46V18C48 16.8954 47.1046 16 46 16H18C16.8954 16 16 16.8954 16 18V46C16 47.1046 16.8954 48 18 48H46M48 46C48 47.1046 47.1046 48 46 48M48 46V32H62C63.1046 32 64 32.8954 64 34V62C64 63.1046 63.1046 64 62 64H34C32.8954 64 32 63.1046 32 62V48H46M23 42H41C41.5523 42 42 41.5523 42 41V23C42 22.4477 41.5523 22 41 22H23C22.4477 22 22 22.4477 22 23V41C22 41.5523 22.4477 42 23 42Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 23C20 21.3431 21.3431 20 23 20H41C42.6569 20 44 21.3431 44 23V41C44 42.6569 42.6569 44 41 44H23C21.3431 44 20 42.6569 20 41V23ZM24 24V40H40V24H24Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 18C14 15.7909 15.7909 14 18 14H46C48.2091 14 50 15.7909 50 18V30H62C64.2091 30 66 31.7909 66 34V62C66 64.2091 64.2091 66 62 66H34C31.7909 66 30 64.2091 30 62V50H18C15.7909 50 14 48.2091 14 46V18ZM46 46V18H18V46H46ZM34 50V62H62V34H50V46C50 48.2091 48.2091 50 46 50H34Z"
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
