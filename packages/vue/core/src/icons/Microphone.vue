
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
          d="M50 68H30"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M40 55V68"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M56 31V39C56 47.8366 48.8366 55 40 55C31.1634 55 24 47.8366 24 39V31"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M31 21C31 16.0294 35.0294 12 40 12C44.9706 12 49 16.0294 49 21V39C49 43.9706 44.9706 48 40 48C35.0294 48 31 43.9706 31 39V21Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M50 70.5C51.3807 70.5 52.5 69.3807 52.5 68C52.5 66.6193 51.3807 65.5 50 65.5V70.5ZM30 65.5C28.6193 65.5 27.5 66.6193 27.5 68C27.5 69.3807 28.6193 70.5 30 70.5V65.5ZM42.5 55C42.5 53.6193 41.3807 52.5 40 52.5C38.6193 52.5 37.5 53.6193 37.5 55H42.5ZM37.5 68C37.5 69.3807 38.6193 70.5 40 70.5C41.3807 70.5 42.5 69.3807 42.5 68H37.5ZM58.5 31C58.5 29.6193 57.3807 28.5 56 28.5C54.6193 28.5 53.5 29.6193 53.5 31L58.5 31ZM26.5 31C26.5 29.6193 25.3807 28.5 24 28.5C22.6193 28.5 21.5 29.6193 21.5 31H26.5ZM50 65.5H30V70.5H50V65.5ZM37.5 55L37.5 68H42.5L42.5 55H37.5ZM53.5 31V39H58.5V31L53.5 31ZM26.5 39V31H21.5V39H26.5ZM21.5 39C21.5 49.2173 29.7827 57.5 40 57.5V52.5C32.5442 52.5 26.5 46.4558 26.5 39H21.5ZM53.5 39C53.5 46.4558 47.4558 52.5 40 52.5V57.5C50.2173 57.5 58.5 49.2173 58.5 39H53.5Z"
          fill="currentColor"
        />
        <path
          d="M31 21C31 16.0294 35.0294 12 40 12C44.9706 12 49 16.0294 49 21V39C49 43.9706 44.9706 48 40 48C35.0294 48 31 43.9706 31 39L31 21Z"
          fill="currentColor"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M50 70C51.1046 70 52 69.1046 52 68C52 66.8954 51.1046 66 50 66V70ZM30 66C28.8954 66 28 66.8954 28 68C28 69.1046 28.8954 70 30 70V66ZM42 55C42 53.8954 41.1046 53 40 53C38.8954 53 38 53.8954 38 55H42ZM38 68C38 69.1046 38.8954 70 40 70C41.1046 70 42 69.1046 42 68H38ZM58 31C58 29.8954 57.1046 29 56 29C54.8954 29 54 29.8954 54 31L58 31ZM26 31C26 29.8954 25.1046 29 24 29C22.8954 29 22 29.8954 22 31H26ZM50 66H30V70H50V66ZM38 55L38 68H42L42 55H38ZM54 31V39H58V31L54 31ZM26 39V31H22V39H26ZM22 39C22 48.9411 30.0589 57 40 57V53C32.268 53 26 46.732 26 39H22ZM54 39C54 46.732 47.732 53 40 53V57C49.9411 57 58 48.9411 58 39H54Z"
          fill="#2F80ED"
        />
        <path
          d="M31 21C31 16.0294 35.0294 12 40 12C44.9706 12 49 16.0294 49 21V39C49 43.9706 44.9706 48 40 48C35.0294 48 31 43.9706 31 39L31 21Z"
          fill="#9B51E0"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M31 21C31 16.0294 35.0294 12 40 12C44.9706 12 49 16.0294 49 21V39C49 43.9706 44.9706 48 40 48C35.0294 48 31 43.9706 31 39V21Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M50 68H30M40 55V68M40 55C31.1634 55 24 47.8366 24 39V31M40 55C48.8366 55 56 47.8366 56 39V31M40 48C35.0294 48 31 43.9706 31 39V21C31 16.0294 35.0294 12 40 12C44.9706 12 49 16.0294 49 21V39C49 43.9706 44.9706 48 40 48Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40 10C33.9249 10 29 14.9249 29 21V39C29 45.0751 33.9249 50 40 50C46.0751 50 51 45.0751 51 39V21C51 14.9249 46.0751 10 40 10ZM33 21C33 17.134 36.134 14 40 14C43.866 14 47 17.134 47 21V39C47 42.866 43.866 46 40 46C36.134 46 33 42.866 33 39V21Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M26 31C26 29.8954 25.1046 29 24 29C22.8954 29 22 29.8954 22 31V39C22 48.2651 29.0001 55.8953 38 56.8901V66H30C28.8954 66 28 66.8954 28 68C28 69.1046 28.8954 70 30 70H50C51.1046 70 52 69.1046 52 68C52 66.8954 51.1046 66 50 66H42V56.8901C50.9999 55.8953 58 48.2651 58 39V31C58 29.8954 57.1046 29 56 29C54.8954 29 54 29.8954 54 31V39C54 46.732 47.732 53 40 53C32.268 53 26 46.732 26 39V31Z"
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
