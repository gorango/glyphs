
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
          d="M28 52L28 33C28 23.6112 35.6112 16 45 16H46M28 52L28.0138 47.9521C28.0364 41.3446 33.3993 36 40.0069 36C46.6305 36 52 41.3695 52 47.9931L52 52C52 58.6274 46.6274 64 40 64C33.3726 64 28 58.6274 28 52Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M46 19C47.6569 19 49 17.6569 49 16C49 14.3431 47.6569 13 46 13V19ZM28.0138 47.9521L31.0138 47.9624L28.0138 47.9521ZM31 52L31 33H25L25 52H31ZM55 52L55 47.9931H49L49 52L55 52ZM45 19H46V13H45V19ZM25.0139 47.9419L25 51.9897L31 52.0103L31.0138 47.9624L25.0139 47.9419ZM55 47.9931C55 39.7126 48.2874 33 40.0069 33V39C44.9736 39 49 43.0264 49 47.9931H55ZM40.0069 33C31.7464 33 25.0421 39.6815 25.0139 47.9419L31.0138 47.9624C31.0308 43.0076 35.0521 39 40.0069 39V33ZM31 33C31 25.268 37.268 19 45 19V13C33.9543 13 25 21.9543 25 33H31ZM40 61C35.0294 61 31 56.9706 31 52H25C25 60.2843 31.7157 67 40 67V61ZM49 52C49 56.9706 44.9706 61 40 61V67C48.2843 67 55 60.2843 55 52L49 52Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M46 18C47.1046 18 48 17.1046 48 16C48 14.8954 47.1046 14 46 14V18ZM28.0138 47.9521L30.0138 47.959L28.0138 47.9521ZM30 52L30 33H26L26 52H30ZM54 52L54 47.9931H50L50 52L54 52ZM45 18H46V14H45V18ZM26.0138 47.9453L26 51.9932L30 52.0068L30.0138 47.959L26.0138 47.9453ZM54 47.9931C54 40.2649 47.7351 34 40.0069 34V38C45.5259 38 50 42.4741 50 47.9931H54ZM40.0069 34C32.2974 34 26.0402 40.2358 26.0138 47.9453L30.0138 47.959C30.0326 42.4533 34.5012 38 40.0069 38V34ZM30 33C30 24.7157 36.7157 18 45 18V14C34.5066 14 26 22.5066 26 33H30ZM40 62C34.4772 62 30 57.5228 30 52H26C26 59.732 32.268 66 40 66V62ZM50 52C50 57.5228 45.5228 62 40 62V66C47.732 66 54 59.732 54 52L50 52Z"
          fill="#219653"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M28 52V33C28 23.6112 35.6112 16 45 16H46M28 52L28.0138 47.9521C28.0364 41.3446 33.3993 36 40.0069 36C46.6305 36 52 41.3695 52 47.9931V52C52 58.6274 46.6274 64 40 64C33.3726 64 28 58.6274 28 52Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30 38.212V33C30 24.7157 36.7157 18 45 18H46C47.1046 18 48 17.1046 48 16C48 14.8954 47.1046 14 46 14H45C34.5066 14 26 22.5066 26 33L26 52C26 59.732 32.268 66 40 66C47.732 66 54 59.732 54 52V47.9931C54 40.2649 47.7351 34 40.0069 34C36.0861 34 32.541 35.6128 30 38.212ZM40 62C45.5228 62 50 57.5228 50 52V47.9931C50 42.4741 45.5259 38 40.0069 38C34.5012 38 30.0326 42.4533 30.0138 47.959L30 52V52.0033C30.0018 57.5246 34.4783 62 40 62Z"
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
