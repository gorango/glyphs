
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
          d="M24 16L40 64L56 16"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M26.846 15.0513C26.3221 13.4795 24.6231 12.63 23.0513 13.154C21.4795 13.6779 20.63 15.3769 21.154 16.9487L26.846 15.0513ZM40 64L37.1539 64.9487C37.5623 66.1737 38.7087 67 40 67C41.2913 67 42.4377 66.1737 42.8461 64.9487L40 64ZM58.8461 16.9487C59.37 15.3769 58.5205 13.6779 56.9487 13.154C55.3769 12.63 53.6779 13.4795 53.1539 15.0513L58.8461 16.9487ZM21.154 16.9487L37.1539 64.9487L42.8461 63.0513L26.846 15.0513L21.154 16.9487ZM42.8461 64.9487L58.8461 16.9487L53.1539 15.0513L37.1539 63.0513L42.8461 64.9487Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M25.8974 15.3675C25.5481 14.3197 24.4154 13.7533 23.3675 14.1026C22.3197 14.4519 21.7533 15.5846 22.1026 16.6325L25.8974 15.3675ZM40 64L38.1026 64.6325C38.3749 65.4491 39.1391 66 40 66C40.8609 66 41.6251 65.4491 41.8974 64.6325L40 64ZM57.8974 16.6325C58.2467 15.5846 57.6803 14.4519 56.6325 14.1026C55.5846 13.7533 54.4519 14.3197 54.1026 15.3675L57.8974 16.6325ZM22.1026 16.6325L38.1026 64.6325L41.8974 63.3675L25.8974 15.3675L22.1026 16.6325ZM41.8974 64.6325L57.8974 16.6325L54.1026 15.3675L38.1026 63.3675L41.8974 64.6325Z"
          fill="#2F80ED"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M24 16L40 64L56 16"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M23.3676 14.1032C24.4155 13.7539 25.5481 14.3202 25.8974 15.3681L40.0001 57.676L54.1027 15.3681C54.452 14.3202 55.5846 13.7539 56.6325 14.1032C57.6804 14.4525 58.2467 15.5851 57.8974 16.633L41.8974 64.633C41.6252 65.4497 40.8609 66.0005 40.0001 66.0005C39.1392 66.0005 38.3749 65.4497 38.1027 64.633L22.1027 16.633C21.7534 15.5851 22.3197 14.4525 23.3676 14.1032Z"
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
