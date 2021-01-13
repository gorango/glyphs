
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
          d="M40 27L40 12"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M45.818 27H34.182C33.0078 27 32.4197 28.4197 33.25 29.25L37.8787 33.8787C39.0503 35.0503 40.9498 35.0503 42.1213 33.8787L46.75 29.25C47.5803 28.4197 46.9923 27 45.818 27Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M40 53L40 68"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M45.818 52.9995H34.182C33.0078 52.9995 32.4197 51.5799 33.25 50.7495L37.8787 46.1209C39.0503 44.9493 40.9498 44.9493 42.1213 46.1209L46.75 50.7495C47.5803 51.5799 46.9923 52.9995 45.818 52.9995Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M42.7324 27C42.7324 28.6569 41.3893 30 39.7324 30C38.0756 30 36.7324 28.6569 36.7324 27H42.7324ZM36.7324 12C36.7324 10.3431 38.0756 9 39.7324 9C41.3893 9 42.7324 10.3431 42.7324 12H36.7324ZM36.7324 27L36.7324 12H42.7324L42.7324 27H36.7324Z"
          fill="currentColor"
        />
        <path
          d="M45.5504 27L33.9144 27C32.7402 27 32.1521 28.4197 32.9824 29.25L37.6111 33.8787C38.7827 35.0503 40.6822 35.0503 41.8537 33.8787L46.4824 29.25C47.3127 28.4197 46.7247 27 45.5504 27Z"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M42.7324 53C42.7324 51.3431 41.3893 50 39.7324 50C38.0756 50 36.7324 51.3431 36.7324 53H42.7324ZM36.7324 68C36.7324 69.6569 38.0756 71 39.7324 71C41.3893 71 42.7324 69.6569 42.7324 68H36.7324ZM36.7324 53L36.7324 68H42.7324L42.7324 53H36.7324Z"
          fill="currentColor"
        />
        <path
          d="M45.5504 53L33.9144 53C32.7402 53 32.1521 51.5803 32.9824 50.75L37.6111 46.1213C38.7827 44.9497 40.6822 44.9497 41.8537 46.1213L46.4824 50.75C47.3127 51.5803 46.7247 53 45.5504 53Z"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M42 27C42 28.1046 41.1046 29 40 29C38.8954 29 38 28.1046 38 27H42ZM38 12C38 10.8954 38.8954 10 40 10C41.1046 10 42 10.8954 42 12H38ZM38 27L38 12H42L42 27H38Z"
          fill="#56CCF2"
        />
        <path
          d="M45.818 27L34.182 27C33.0078 27 32.4197 28.4197 33.25 29.25L37.8787 33.8787C39.0503 35.0503 40.9497 35.0503 42.1213 33.8787L46.75 29.25C47.5803 28.4197 46.9923 27 45.818 27Z"
          fill="#2F80ED"
          stroke="#2F80ED"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M42 53C42 51.8954 41.1046 51 40 51C38.8954 51 38 51.8954 38 53H42ZM38 68C38 69.1046 38.8954 70 40 70C41.1046 70 42 69.1046 42 68H38ZM38 53L38 68H42L42 53H38Z"
          fill="#56CCF2"
        />
        <path
          d="M45.818 53L34.182 53C33.0078 53 32.4197 51.5803 33.25 50.75L37.8787 46.1213C39.0503 44.9497 40.9497 44.9497 42.1213 46.1213L46.75 50.75C47.5803 51.5803 46.9923 53 45.818 53Z"
          fill="#2F80ED"
          stroke="#2F80ED"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M45.818 27H34.182C33.0078 27 32.4197 28.4197 33.25 29.25L37.8787 33.8787C39.0503 35.0503 40.9498 35.0503 42.1213 33.8787L46.75 29.25C47.5803 28.4197 46.9923 27 45.818 27Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M45.818 53H34.182C33.0078 53 32.4197 51.5803 33.25 50.75L37.8787 46.1213C39.0503 44.9497 40.9498 44.9497 42.1213 46.1213L46.75 50.75C47.5803 51.5803 46.9923 53 45.818 53Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M40 27L40 12M40 53L40 68M34.182 27H45.818C46.9923 27 47.5803 28.4197 46.75 29.25L42.1213 33.8787C40.9498 35.0503 39.0503 35.0503 37.8787 33.8787L33.25 29.25C32.4197 28.4197 33.0078 27 34.182 27ZM34.182 53H45.818C46.9923 53 47.5803 51.5803 46.75 50.75L42.1213 46.1213C40.9498 44.9497 39.0503 44.9497 37.8787 46.1213L33.25 50.75C32.4197 51.5803 33.0078 53 34.182 53Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42.5001 24.5L42.5001 12C42.5001 10.6193 41.3809 9.5 40.0001 9.5C38.6194 9.5 37.5001 10.6193 37.5001 12L37.5001 24.5H34.1821C30.7806 24.5 29.0772 28.6125 31.4824 31.0178L36.1111 35.6464C38.2589 37.7943 41.7413 37.7943 43.8892 35.6464L48.5179 31.0178C50.9231 28.6126 49.2197 24.5 45.8182 24.5H42.5001ZM39.6466 32.1109C39.8418 32.3062 40.1584 32.3062 40.3537 32.1109L42.9646 29.5L37.0357 29.5L39.6466 32.1109Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42.5001 55.5H45.8182C49.2197 55.5 50.9231 51.3874 48.5179 48.9822L43.8892 44.3536C41.7413 42.2057 38.2589 42.2057 36.1111 44.3536L31.4824 48.9822C29.0772 51.3875 30.7806 55.5 34.1821 55.5H37.5001L37.5001 68C37.5001 69.3807 38.6194 70.5 40.0001 70.5C41.3809 70.5 42.5001 69.3807 42.5001 68L42.5001 55.5ZM39.6466 47.8891C39.8418 47.6938 40.1584 47.6938 40.3537 47.8891L42.9646 50.5H37.0357L39.6466 47.8891Z"
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
