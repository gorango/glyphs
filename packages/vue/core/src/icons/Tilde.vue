
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
          d="M16 40L16.1446 39.783C20.4103 33.384 29.1759 31.8826 35.3281 36.497L44.7015 43.5275C50.8363 48.1289 59.5768 46.6325 63.8316 40.2525L64 40"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M64 40L63.8316 40.2526V40.2526C59.5768 46.6326 50.8362 48.1289 44.7015 43.5276L35.3281 36.4971C29.1759 31.8826 20.4103 33.3841 16.1446 39.783V39.783L16 40"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M64 40L63.8316 40.2526V40.2526C59.5768 46.6326 50.8362 48.1289 44.7015 43.5276L35.3281 36.4971C29.1759 31.8826 20.4103 33.3841 16.1446 39.783V39.783L16 40"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M64 40L63.8316 40.2526V40.2526C59.5768 46.6326 50.8362 48.1289 44.7015 43.5276L35.3281 36.4971C29.1759 31.8826 20.4103 33.3841 16.1446 39.783V39.783L16 40"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M64 40L63.8316 40.2526V40.2526C59.5768 46.6326 50.8362 48.1289 44.7015 43.5276L35.3281 36.4971C29.1759 31.8826 20.4103 33.3841 16.1446 39.783V39.783L16 40"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M16 40L16.1446 39.783C20.4103 33.384 29.1759 31.8826 35.3281 36.497L44.7015 43.5275C50.8363 48.1289 59.5768 46.6325 63.8316 40.2525L64 40"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M36.5281 34.8885C29.4574 29.585 19.383 31.3107 14.4805 38.6651L14.3358 38.882C13.7232 39.8011 13.9715 41.0428 14.8906 41.6555C15.8097 42.2682 17.0514 42.0198 17.6641 41.1007L17.8087 40.8838C21.4375 35.4402 28.8944 34.1629 34.128 38.0884L43.5014 45.1189C50.5546 50.4091 60.6037 48.6887 65.4954 41.3536L65.6639 41.101C66.2767 40.1821 66.0286 38.9403 65.1096 38.3274C64.1907 37.7146 62.9489 37.9627 62.336 38.8817L62.1676 39.1343C58.5498 44.5591 51.1178 45.8314 45.9016 41.919L36.5281 34.8885Z"
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
