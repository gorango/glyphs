
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
      <template v-if="variant === 'color'">
        <rect
          x="26.5"
          y="8.5"
          width="45"
          height="63"
          rx="5"
          fill="#1066B5"
        />
        <rect
          x="26.5"
          y="8.5"
          width="45"
          height="63"
          rx="5"
          fill="url(#paint0_linearrstS)"
        />
        <rect
          x="26.5"
          y="15.25"
          width="22.5"
          height="22.5"
          fill="#32A9E7"
        />
        <rect
          x="26.5"
          y="37.75"
          width="22.5"
          height="22.5"
          fill="#167EB4"
        />
        <rect
          x="49"
          y="37.75"
          width="22.5"
          height="22.5"
          fill="#32A9E7"
        />
        <rect
          x="49"
          y="15.25"
          width="22.5"
          height="22.5"
          fill="#58D9FD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M76 44.5V40.5C76 37.9073 74.0267 35.7755 71.5 35.5247V44.5H76Z"
          fill="#135298"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27 71.5001H71C73.7615 71.5001 76 69.2615 76 66.5001V40.5001C76 40.3358 75.9921 40.1734 75.9766 40.0132L23.0972 69.6257C24.0135 70.7684 25.4213 71.5001 27 71.5001Z"
          fill="url(#paint1_linearrstS)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 40V66.5C22 69.2614 24.2386 71.5 27 71.5H71C72.5787 71.5 73.9865 70.7683 74.9029 69.6256L22 40Z"
          fill="url(#paint2_linearrstS)"
        />
        <path
          d="M22 31.75C22 27.6079 25.3579 24.25 29.5 24.25H41.5C45.6421 24.25 49 27.6079 49 31.75V57.25C49 61.3921 45.6421 64.75 41.5 64.75H22V31.75Z"
          fill="black"
          fill-opacity="0.3"
        />
        <rect
          x="4"
          y="19.75"
          width="40.5"
          height="40.5"
          rx="5"
          fill="url(#paint3_linearrstS)"
        />
        <rect
          x="4"
          y="19.75"
          width="40.5"
          height="40.5"
          rx="5"
          fill="url(#paint4_linearrstS)"
        />
        <path
          d="M35.5 40.1558V39.7819C35.5 33.2999 30.8362 28.75 24.2856 28.75C17.6994 28.75 13 33.331 13 39.8442V40.2181C13 46.7001 17.6638 51.25 24.25 51.25C30.8006 51.25 35.5 46.669 35.5 40.1558ZM30.1954 40.2181C30.1954 44.5187 27.7745 47.1053 24.2856 47.1053C20.7967 47.1053 18.3402 44.4564 18.3402 40.1558V39.7819C18.3402 35.4813 20.7611 32.8947 24.25 32.8947C27.7033 32.8947 30.1954 35.5436 30.1954 39.8442V40.2181Z"
          fill="white"
        />
        <defs><linearGradient id="paint0_linearrstS" x1="26.5" y1="40" x2="71.5" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#064484"/><stop offset="1" stop-color="#0F65B5"/></linearGradient><linearGradient id="paint1_linearrstS" x1="76" y1="55.75" x2="22" y2="55.75" gradientUnits="userSpaceOnUse"><stop stop-color="#44DCFD"/><stop offset="0.453125" stop-color="#259ED0"/></linearGradient><linearGradient id="paint2_linearrstS" x1="22" y1="57.7188" x2="72.7868" y2="57.7188" gradientUnits="userSpaceOnUse"><stop stop-color="#259ED0"/><stop offset="1" stop-color="#44DCFD"/></linearGradient><linearGradient id="paint3_linearrstS" x1="4" y1="40" x2="44.5" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#064484"/><stop offset="1" stop-color="#0F65B5"/></linearGradient><linearGradient id="paint4_linearrstS" x1="4" y1="40" x2="44.5" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#064484"/><stop offset="1" stop-color="#0F65B5"/></linearGradient></defs>
      </template>
      <template v-if="variant === 'solid'">
        <path
          d="M26.5 13.5C26.5 10.7386 28.7386 8.5 31.5 8.5H66.5C69.2614 8.5 71.5 10.7386 71.5 13.5V66.5C71.5 69.2614 69.2614 71.5 66.5 71.5H31.5C28.7386 71.5 26.5 69.2614 26.5 66.5V64.25H39.5C44.4706 64.25 48.5 60.2206 48.5 55.25V24.75C48.5 19.7794 44.4706 15.75 39.5 15.75H26.5V13.5Z"
          fill="currentColor"
        />
        <path
          d="M24.2856 47.1053C27.7745 47.1053 30.1954 44.5187 30.1954 40.2181V39.8442C30.1954 35.5436 27.7033 32.8947 24.25 32.8947C20.7611 32.8947 18.3402 35.4813 18.3402 39.7819V40.1558C18.3402 44.4564 20.7967 47.1053 24.2856 47.1053Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 19.75C6.23858 19.75 4 21.9886 4 24.75V55.25C4 58.0114 6.23858 60.25 9 60.25H39.5C42.2614 60.25 44.5 58.0114 44.5 55.25V24.75C44.5 21.9886 42.2614 19.75 39.5 19.75H9ZM35.5 39.7819V40.1558C35.5 46.669 30.8006 51.25 24.25 51.25C17.6638 51.25 13 46.7001 13 40.2181V39.8442C13 33.331 17.6994 28.75 24.2856 28.75C30.8362 28.75 35.5 33.2999 35.5 39.7819Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M26.5 13.5C26.5 10.7386 28.7386 8.5 31.5 8.5H66.5C69.2614 8.5 71.5 10.7386 71.5 13.5V66.5C71.5 69.2614 69.2614 71.5 66.5 71.5H31.5C28.7386 71.5 26.5 69.2614 26.5 66.5V64.25H39.5C44.4706 64.25 48.5 60.2206 48.5 55.25V24.75C48.5 19.7794 44.4706 15.75 39.5 15.75H26.5V13.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M24.2856 47.1053C27.7745 47.1053 30.1954 44.5187 30.1954 40.2181V39.8442C30.1954 35.5436 27.7033 32.8947 24.25 32.8947C20.7611 32.8947 18.3402 35.4813 18.3402 39.7819V40.1558C18.3402 44.4564 20.7967 47.1053 24.2856 47.1053Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 19.75C6.23858 19.75 4 21.9886 4 24.75V55.25C4 58.0114 6.23858 60.25 9 60.25H39.5C42.2614 60.25 44.5 58.0114 44.5 55.25V24.75C44.5 21.9886 42.2614 19.75 39.5 19.75H9ZM35.5 39.7819V40.1558C35.5 46.669 30.8006 51.25 24.25 51.25C17.6638 51.25 13 46.7001 13 40.2181V39.8442C13 33.331 17.6994 28.75 24.2856 28.75C30.8362 28.75 35.5 33.2999 35.5 39.7819Z"
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
  name: 'node_modules/@glyphs/brands',

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
