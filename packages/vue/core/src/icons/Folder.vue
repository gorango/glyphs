
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
          d="M16 17C13.7909 17 12 18.7909 12 21V59C12 61.2091 13.7909 63 16 63H64C66.2091 63 68 61.2091 68 59V29C68 26.7909 66.2091 25 64 25H35.3992C35.0329 25 34.689 24.8233 34.4757 24.5254L30.2841 18.6713C29.533 17.6223 28.322 17 27.0318 17H16Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 17C13.7909 17 12 18.7909 12 21L12 29L12 45L12 59C12 61.2091 13.7909 63 16 63L64 63C66.2091 63 68 61.2091 68 59V29C68 26.7909 66.2091 25 64 25L35.3992 25C35.0329 25 34.689 24.8233 34.4757 24.5254L34.1359 24.0508L33.7597 23.5254L33.3835 23L30.2841 18.6713C29.533 17.6223 28.322 17 27.0318 17L16 17Z"
          fill="currentColor"
        />
        <path
          d="M34.1359 24.0508L35.7621 22.8865L34.1359 24.0508ZM33.7597 23.5254L32.1336 24.6898V24.6898L33.7597 23.5254ZM33.3835 23L35.0096 21.8357V21.8357L33.3835 23ZM30.2841 18.6713L31.9102 17.507L31.9102 17.507L30.2841 18.6713ZM14 21C14 19.8954 14.8954 19 16 19V15C12.6863 15 10 17.6863 10 21H14ZM14 29L14 21H10L10 29H14ZM14 45L14 29H10L10 45H14ZM14 59L14 45H10L10 59H14ZM16 61C14.8954 61 14 60.1046 14 59H10C10 62.3137 12.6863 65 16 65V61ZM64 61L16 61V65H64V61ZM66 59C66 60.1046 65.1046 61 64 61V65C67.3137 65 70 62.3137 70 59H66ZM66 29V59H70V29H66ZM64 27C65.1046 27 66 27.8954 66 29H70C70 25.6863 67.3137 23 64 23V27ZM35.3992 27L64 27V23L35.3992 23V27ZM32.5098 25.2152L32.8496 25.6898L36.1019 23.3611L35.7621 22.8865L32.5098 25.2152ZM32.1336 24.6898L32.5098 25.2152L35.7621 22.8865L35.3858 22.3611L32.1336 24.6898ZM31.7574 24.1643L32.1336 24.6898L35.3858 22.3611L35.0096 21.8357L31.7574 24.1643ZM28.6579 19.8357L31.7574 24.1643L35.0096 21.8357L31.9102 17.507L28.6579 19.8357ZM27.0318 19C27.6769 19 28.2824 19.3112 28.6579 19.8357L31.9102 17.507C30.7835 15.9335 28.9671 15 27.0318 15V19ZM16 19L27.0318 19V15L16 15V19ZM35.3992 23C35.678 23 35.9396 23.1344 36.1019 23.3611L32.8496 25.6898C33.4384 26.5121 34.3878 27 35.3992 27V23Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 17C13.7909 17 12 18.7909 12 21L12 29L12 45L12 59C12 61.2091 13.7909 63 16 63L64 63C66.2091 63 68 61.2091 68 59V29C68 26.7909 66.2091 25 64 25L35.3992 25C35.0329 25 34.689 24.8233 34.4757 24.5254L34.1359 24.0508L33.7597 23.5254L33.3835 23L30.2841 18.6713C29.533 17.6223 28.322 17 27.0318 17L16 17Z"
          fill="#F2994A"
        />
        <rect
          x="12"
          y="25"
          width="56"
          height="38"
          rx="4"
          fill="#F2C94C"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M16 17C13.7909 17 12 18.7909 12 21V59C12 61.2091 13.7909 63 16 63H64C66.2091 63 68 61.2091 68 59V29C68 26.7909 66.2091 25 64 25H35.3992C35.0329 25 34.689 24.8233 34.4757 24.5254L30.2841 18.6713C29.533 17.6223 28.322 17 27.0318 17H16Z"
          fill="currentColor"
          fill-opacity="0.25"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M31.9102 17.507C30.7835 15.9335 28.9671 15 27.0318 15H16C12.6863 15 10 17.6863 10 21V59C10 62.3137 12.6863 65 16 65H64C67.3137 65 70 62.3137 70 59V29C70 25.6863 67.3137 23 64 23H35.8433L31.9102 17.507ZM31.9102 17.507L30.3032 18.6576M14 21C14 19.8954 14.8954 19 16 19H27.0318C27.6769 19 28.2824 19.3112 28.6579 19.8357L32.8496 25.6898C33.4384 26.5121 34.3878 27 35.3992 27H64C65.1046 27 66 27.8954 66 29V59C66 60.1046 65.1046 61 64 61H16C14.8954 61 14 60.1046 14 59V21Z"
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
