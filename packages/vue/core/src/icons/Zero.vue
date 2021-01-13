
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
          d="M52 28C52 21.3726 46.6274 16 40 16C33.3726 16 28 21.3726 28 28L28 52C28 58.6274 33.3726 64 40 64C46.6274 64 52 58.6274 52 52L52 28Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M28 49.6004L52 30.4004"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M55 30.4V28H49V30.4H55ZM55 52L55 30.4H49L49 52L55 52ZM40 67C48.2843 67 55 60.2843 55 52L49 52C49 56.9706 44.9706 61 40 61V67ZM25 52C25 60.2843 31.7157 67 40 67V61C35.0294 61 31 56.9706 31 52H25ZM25 49.6V52H31V49.6H25ZM25 28L25 49.6H31L31 28H25ZM40 13C31.7157 13 25 19.7157 25 28H31C31 23.0294 35.0294 19 40 19V13ZM55 28C55 19.7157 48.2843 13 40 13V19C44.9706 19 49 23.0294 49 28H55Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M54 30.4V28H50V30.4H54ZM54 52L54 30.4H50L50 52L54 52ZM40 66C47.732 66 54 59.732 54 52L50 52C50 57.5228 45.5228 62 40 62V66ZM26 52C26 59.732 32.268 66 40 66V62C34.4772 62 30 57.5228 30 52H26ZM26 49.6V52H30V49.6H26ZM26 28L26 49.6H30L30 28H26ZM40 14C32.268 14 26 20.268 26 28H30C30 22.4772 34.4772 18 40 18V14ZM54 28C54 20.268 47.732 14 40 14V18C45.5228 18 50 22.4772 50 28H54Z"
          fill="#EB5757"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M52 28V52C52 58.6274 46.6274 64 40 64C33.3726 64 28 58.6274 28 52V28C28 21.3726 33.3726 16 40 16C46.6274 16 52 21.3726 52 28Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26 28C26 20.268 32.268 14 40 14C47.732 14 54 20.268 54 28L54 52C54 59.732 47.732 66 40 66C32.268 66 26 59.732 26 52L26 28ZM40 18C34.4772 18 30 22.4772 30 28L30 45.4388L50 29.4388V28C50 22.4772 45.5228 18 40 18ZM50 34.5613L30 50.5613V52C30 57.5228 34.4772 62 40 62C45.5228 62 50 57.5228 50 52L50 34.5613Z"
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
