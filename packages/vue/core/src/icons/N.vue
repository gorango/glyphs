
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
          d="M24 64L24 16H25.0667L54.9333 64H56L56 16"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M24 16V13C22.3431 13 21 14.3431 21 16H24ZM21 64C21 65.6569 22.3431 67 24 67C25.6569 67 27 65.6569 27 64H21ZM59 16C59 14.3431 57.6569 13 56 13C54.3431 13 53 14.3431 53 16H59ZM56 64V67C57.6569 67 59 65.6569 59 64H56ZM25.0667 16L27.6138 14.4151C27.0662 13.535 26.1032 13 25.0667 13V16ZM54.9333 64L52.3862 65.5849C52.9338 66.465 53.8968 67 54.9333 67V64ZM21 16L21 64H27L27 16H21ZM53 16L53 64H59L59 16H53ZM24 19H25.0667V13H24V19ZM22.5195 17.5849L52.3862 65.5849L57.4805 62.4151L27.6138 14.4151L22.5195 17.5849ZM54.9333 67H56V61H54.9333V67Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M24 16V14C22.8954 14 22 14.8954 22 16H24ZM22 64C22 65.1046 22.8954 66 24 66C25.1046 66 26 65.1046 26 64H22ZM58 16C58 14.8954 57.1046 14 56 14C54.8954 14 54 14.8954 54 16H58ZM56 64V66C57.1046 66 58 65.1046 58 64H56ZM25.0667 16L26.7648 14.9434C26.3997 14.3567 25.7577 14 25.0667 14V16ZM54.9333 64L53.2352 65.0566C53.6003 65.6433 54.2423 66 54.9333 66V64ZM22 16L22 64H26L26 16H22ZM54 16L54 64H58L58 16H54ZM24 18H25.0667V14H24V18ZM23.3686 17.0566L53.2352 65.0566L56.6314 62.9434L26.7648 14.9434L23.3686 17.0566ZM54.9333 66H56V62H54.9333V66Z"
          fill="#2F80ED"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M24 64V16H25.0667L54.9333 64H56V16"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M22 16C22 14.8954 22.8954 14 24 14H25.0667C25.7577 14 26.3997 14.3567 26.7648 14.9434L54 58.7143L54 16C54 14.8954 54.8954 14 56 14C57.1046 14 58 14.8954 58 16L58 64C58 65.1046 57.1046 66 56 66H54.9333C54.2423 66 53.6003 65.6433 53.2352 65.0566L26 21.2857L26 64C26 65.1046 25.1046 66 24 66C22.8954 66 22 65.1046 22 64L22 16Z"
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
