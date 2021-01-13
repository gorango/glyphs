
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
        <path
          d="M5 20.7692C5 17.583 7.61167 15 10.8333 15H69.1667C72.3883 15 75 17.583 75 20.7692V59.2307C75 62.417 72.3883 65 69.1667 65H10.8333C7.61167 65 5 62.417 5 59.2307V20.7692Z"
          fill="white"
        />
        <path
          d="M75 22.9543V59.2307C75 62.4072 72.4043 64.9841 69.1962 64.9998H67.2227V28.024L75 22.9543Z"
          fill="#D24C42"
        />
        <path
          d="M5 22.1484V59.2307C5 62.3903 7.56814 64.9567 10.7526 64.9994H12.7778V27.3973L5 22.1484Z"
          fill="#D24B42"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.5393 15.0073L39.9997 35.1916L70.2965 15.1083C72.9775 15.6286 75 17.9654 75 20.7693V22.9528L39.9997 45.7685L5 22.1733V20.7693C5 17.6806 7.45425 15.1588 10.5393 15.0073Z"
          fill="#D24B42"
        />
        <path
          d="M39.9996 45.7692L12.7773 65V27.5L39.9996 45.7692Z"
          fill="url(#paint0_linearSP5i)"
          style="mix-blend-mode:multiply"
        />
        <path
          d="M48.2635 65L5 22.2119L40 45.7696L75 23.1735V59.2307C75 62.417 72.3883 65 69.1667 65H48.2635Z"
          fill="url(#paint1_linearSP5i)"
          style="mix-blend-mode:multiply"
        />
        <defs><linearGradient id="paint0_linearSP5i" x1="26.3885" y1="27.5" x2="26.3885" y2="65" gradientUnits="userSpaceOnUse"><stop stop-color="#C5C5C5"/><stop offset="1" stop-color="#E2E2E2" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linearSP5i" x1="40" y1="15.4812" x2="40" y2="65.0003" gradientUnits="userSpaceOnUse"><stop stop-color="#BEBEBE"/><stop offset="1" stop-color="#BEBEBE" stop-opacity="0"/></linearGradient></defs>
      </template>
      <template v-if="variant === 'solid'">
        <path
          d="M10.8333 13.5C6.79892 13.5 3.5 16.739 3.5 20.7692V59.2307C3.5 63.261 6.79891 66.5 10.8333 66.5H69.1667C73.2011 66.5 76.5 63.261 76.5 59.2307V20.7692C76.5 16.739 73.2011 13.5 69.1667 13.5H10.8333Z"
          stroke="currentColor"
          :stroke-width="strokeWidth"
        />
        <path
          d="M10.8333 15C7.61167 15 5 17.583 5 20.7692C5 17.6805 7.45457 15.1587 10.5396 15.0073L40 35.1915L70.2968 15.1082C69.9312 15.0372 69.5533 15 69.1667 15H10.8333Z"
          fill="currentColor"
        />
        <path
          d="M75 22.9529L40 45.7684L12.7778 27.4165V64.9994H10.7526C10.7525 64.9994 10.7526 64.9994 10.7526 64.9994C10.7795 64.9998 10.8063 65 10.8333 65H69.1667L69.1962 64.9999H67.2227V28.024L75 22.9544V22.9529Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M5 59.2307V20.7692M5 59.2307C5 62.417 7.61167 65 10.8333 65H69.1667C72.3883 65 75 62.417 75 59.2307M5 59.2307V22.1484L12.7778 27.3973V64.9994H10.7526C7.56814 64.9567 5 62.3903 5 59.2307ZM75 59.2307V20.7692M75 59.2307V22.9544L67.2227 28.024V64.9999H69.1962C72.4043 64.9841 75 62.4072 75 59.2307ZM75 20.7692C75 17.583 72.3883 15 69.1667 15H10.8333C7.61167 15 5 17.583 5 20.7692M75 20.7692C75 17.9653 72.9778 15.6286 70.2968 15.1082L40 35.1915L10.5396 15.0073C7.45457 15.1587 5 17.6805 5 20.7692M75 20.7692L75.0003 22.9527L40 45.7684L5.00032 22.1733L5 20.7692"
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
