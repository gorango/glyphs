
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
          d="M52 48.3996L52 63.9996M52 48.3996H29C28.5863 48.3996 28.349 47.9285 28.5952 47.5961L51.4048 16.8032C51.5941 16.5475 52 16.6815 52 16.9996V48.3996ZM52 48.3996H55.6"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M28.5952 47.5961L31.0059 49.3817L31.0059 49.3817L28.5952 47.5961ZM51.4048 16.8032L48.9941 15.0175V15.0175L51.4048 16.8032ZM52 48.3996L52 51.3996C53.6568 51.3996 55 50.0565 55 48.3996H52ZM52 48.3996V45.3996C50.3431 45.3996 49 46.7428 49 48.3996H52ZM49 63.9996C49 65.6565 50.3431 66.9996 52 66.9996C53.6568 66.9996 55 65.6565 55 63.9996L49 63.9996ZM55.6 51.3996C57.2568 51.3996 58.6 50.0565 58.6 48.3996C58.6 46.7428 57.2568 45.3996 55.6 45.3996L55.6 51.3996ZM31.0059 49.3817L53.8154 18.5889L48.9941 15.0175L26.1846 45.8104L31.0059 49.3817ZM29 45.3996C31.0502 45.3996 32.2262 47.7343 31.0059 49.3817L26.1846 45.8104C24.4717 48.1227 26.1223 51.3996 29 51.3996L29 45.3996ZM52 45.3996H29L29 51.3996L52 51.3996L52 45.3996ZM49 16.9996V48.3996H55V16.9996H49ZM53.8154 18.5889C52.2834 20.6572 49 19.5735 49 16.9996H55C55 13.7894 50.9049 12.4379 48.9941 15.0175L53.8154 18.5889ZM49 48.3996L49 63.9996L55 63.9996L55 48.3996H49ZM55.6 45.3996H52L52 51.3996H55.6L55.6 45.3996Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M28.5952 47.5961L30.2023 48.7865L30.2023 48.7865L28.5952 47.5961ZM51.4048 16.8032L49.7977 15.6127V15.6127L51.4048 16.8032ZM52 48.3996L52 50.3996C53.1046 50.3996 54 49.5042 54 48.3996H52ZM52 48.3996V46.3996C50.8954 46.3996 50 47.295 50 48.3996H52ZM50 63.9996C50 65.1042 50.8954 65.9996 52 65.9996C53.1046 65.9996 54 65.1042 54 63.9996L50 63.9996ZM55.6 50.3996C56.7046 50.3996 57.6 49.5042 57.6 48.3996C57.6 47.295 56.7046 46.3996 55.6 46.3996L55.6 50.3996ZM30.2023 48.7865L53.0119 17.9936L49.7977 15.6127L26.9881 46.4056L30.2023 48.7865ZM29 46.3996C30.2289 46.3996 30.9338 47.799 30.2023 48.7865L26.9881 46.4056C25.7641 48.058 26.9437 50.3996 29 50.3996L29 46.3996ZM52 46.3996H29L29 50.3996L52 50.3996L52 46.3996ZM50 16.9996V48.3996H54V16.9996H50ZM53.0119 17.9936C52.0536 19.2873 50 18.6095 50 16.9996H54C54 14.7534 51.1347 13.8077 49.7977 15.6127L53.0119 17.9936ZM50 48.3996L50 63.9996L54 63.9996L54 48.3996H50ZM55.6 46.3996H52L52 50.3996H55.6L55.6 46.3996Z"
          fill="#EB5757"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M52 48.3996H29C28.5863 48.3996 28.349 47.9285 28.5952 47.5961L51.4048 16.8032C51.5941 16.5475 52 16.6815 52 16.9996V48.3996ZM52 48.3996V63.9996M52 48.3996H55.6"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M47.9545 63.6675V50.0675L26.9545 50.0675C24.8982 50.0675 23.7187 47.7259 24.9426 46.0735L47.7522 15.2806C49.0892 13.4757 51.9545 14.4213 51.9545 16.6675V46.0675H53.5545C54.6591 46.0675 55.5545 46.963 55.5545 48.0675C55.5545 49.1721 54.6591 50.0675 53.5545 50.0675H51.9545V63.6675C51.9545 64.7721 51.0591 65.6675 49.9545 65.6675C48.85 65.6675 47.9545 64.7721 47.9545 63.6675ZM29.9249 46.0675L47.9545 21.7276V46.0675H29.9249Z"
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
