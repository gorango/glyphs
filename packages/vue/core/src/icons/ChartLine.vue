
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
          d="M72 68H10C8.89543 68 8 67.1046 8 66V12"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M8 51.6691L24.617 35.0521C26.1791 33.49 28.7118 33.49 30.2739 35.0521L38.7591 43.5373C40.3212 45.0994 42.8539 45.0994 44.416 43.5373L60.3259 27.6274"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M65.8111 33.1127L54.8405 22.1421C53.7334 21.035 54.5175 19.1421 56.0831 19.1421L65.8111 19.1421C67.4679 19.1421 68.8111 20.4852 68.8111 22.1421V31.87C68.8111 33.4357 66.9181 34.2197 65.8111 33.1127Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M5.87851 49.5478C4.70694 50.7194 4.70694 52.6189 5.87851 53.7904C7.05008 54.962 8.94958 54.962 10.1211 53.7904L5.87851 49.5478ZM62.447 29.7488C63.6186 28.5772 63.6186 26.6777 62.447 25.5062C61.2755 24.3346 59.376 24.3346 58.2044 25.5062L62.447 29.7488ZM10.1211 53.7904L26.7382 37.1734L22.4955 32.9308L5.87851 49.5478L10.1211 53.7904ZM28.1524 37.1734L36.6377 45.6587L40.8803 41.4161L32.395 32.9308L28.1524 37.1734ZM46.5371 45.6587L62.447 29.7488L58.2044 25.5062L42.2945 41.4161L46.5371 45.6587ZM36.6377 45.6587C39.3713 48.3924 43.8035 48.3924 46.5371 45.6587L42.2945 41.4161C41.904 41.8066 41.2708 41.8066 40.8803 41.4161L36.6377 45.6587ZM26.7382 37.1734C27.1287 36.7829 27.7618 36.7829 28.1524 37.1734L32.395 32.9308C29.6613 30.1971 25.2292 30.1971 22.4955 32.9308L26.7382 37.1734Z"
          fill="currentColor"
        />
        <path
          d="M65.811 33.1126L54.8404 22.142C53.7333 21.0349 54.5174 19.142 56.083 19.142L65.811 19.142C67.4678 19.142 68.811 20.4852 68.811 22.142L68.811 31.8699C68.811 33.4356 66.918 34.2197 65.811 33.1126Z"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M8 12V66C8 67.1046 8.89543 68 10 68H72"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M6.58561 50.2549C5.80457 51.036 5.80457 52.3023 6.58561 53.0833C7.36666 53.8644 8.63299 53.8644 9.41404 53.0833L6.58561 50.2549ZM61.7399 29.0417C62.521 28.2607 62.521 26.9943 61.7399 26.2133C60.9589 25.4322 59.6926 25.4322 58.9115 26.2133L61.7399 29.0417ZM9.41404 53.0833L26.0311 36.4663L23.2026 33.6379L6.58561 50.2549L9.41404 53.0833ZM28.8595 36.4663L37.3448 44.9516L40.1732 42.1232L31.6879 33.6379L28.8595 36.4663ZM45.83 44.9516L61.7399 29.0417L58.9115 26.2133L43.0016 42.1232L45.83 44.9516ZM37.3448 44.9516C39.6879 47.2947 43.4869 47.2947 45.83 44.9516L43.0016 42.1232C42.2206 42.9042 40.9542 42.9042 40.1732 42.1232L37.3448 44.9516ZM26.0311 36.4663C26.8121 35.6853 28.0784 35.6853 28.8595 36.4663L31.6879 33.6379C29.3448 31.2947 25.5458 31.2947 23.2026 33.6379L26.0311 36.4663Z"
          fill="#6FCF97"
        />
        <path
          d="M65.811 33.1126L54.8404 22.142C53.7333 21.0349 54.5174 19.142 56.083 19.142L65.811 19.142C67.4678 19.142 68.811 20.4852 68.811 22.142L68.811 31.8699C68.811 33.4356 66.918 34.2197 65.811 33.1126Z"
          fill="#219653"
          stroke="#219653"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M8 12V66C8 67.1046 8.89543 68 10 68H72"
          stroke="#4F4F4F"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M65.8112 33.1127L54.8406 22.1421C53.7335 21.0351 54.5176 19.1421 56.0833 19.1421L65.8112 19.1421C67.468 19.1421 68.8112 20.4853 68.8112 22.1421V31.8701C68.8112 33.4357 66.9183 34.2198 65.8112 33.1127Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M8 51.669L24.617 35.052C26.1791 33.4899 28.7118 33.4899 30.2739 35.052L38.7591 43.5373C40.3212 45.0994 42.8539 45.0994 44.416 43.5373L60.3259 27.6274M72.0001 68H10.0001C8.89553 68 8.0001 67.1046 8.0001 66V12M54.8406 22.1421L65.8112 33.1127C66.9183 34.2198 68.8112 33.4357 68.8112 31.8701V22.1421C68.8112 20.4853 67.468 19.1421 65.8112 19.1421L56.0833 19.1421C54.5176 19.1421 53.7335 21.0351 54.8406 22.1421Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.0001 12C10.0001 10.8954 9.10467 10 8.0001 10C6.89553 10 6.0001 10.8954 6.0001 12V51.6489C5.99997 51.6623 5.99997 51.6758 6.0001 51.6892V66C6.0001 68.2091 7.79096 70 10.0001 70H72.0001C73.1047 70 74.0001 69.1046 74.0001 68C74.0001 66.8954 73.1047 66 72.0001 66H10.0001V52.4974L26.0312 36.4663C26.8123 35.6852 28.0786 35.6852 28.8596 36.4663L37.3449 44.9515C39.6881 47.2947 43.4871 47.2947 45.8302 44.9515L60.3259 30.4558L64.397 34.5269C66.764 36.8939 70.8112 35.2175 70.8112 31.8701V22.1421C70.8112 19.3807 68.5726 17.1421 65.8112 17.1421L56.0833 17.1421C52.7358 17.1421 51.0594 21.1893 53.4264 23.5563L57.4975 27.6274L43.0018 42.1231C42.2207 42.9042 40.9544 42.9042 40.1734 42.1231L31.6881 33.6378C29.3449 31.2947 25.5459 31.2947 23.2028 33.6378L10.0001 46.8405V12ZM66.8112 22.1421C66.8112 21.5898 66.3635 21.1421 65.8112 21.1421H56.669L66.8112 31.2843V22.1421Z"
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
