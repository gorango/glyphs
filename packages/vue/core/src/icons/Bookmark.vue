
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
          d="M20 13C20 12.4477 20.4477 12 21 12H59C59.5523 12 60 12.4477 60 13V66.0893C60 66.9278 59.0301 67.394 58.3753 66.8702L40.6247 52.6697C40.2595 52.3775 39.7405 52.3775 39.3753 52.6697L21.6247 66.8702C20.9699 67.394 20 66.9278 20 66.0893V13Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 13C20 12.4477 20.4477 12 21 12L59 12C59.5523 12 60 12.4477 60 13L60 66.0893C60 66.9278 59.0301 67.394 58.3753 66.8702L40.6247 52.6697C40.2595 52.3775 39.7405 52.3775 39.3753 52.6697L21.6247 66.8702C20.9699 67.394 20 66.9278 20 66.0893L20 13Z"
          fill="currentColor"
        />
        <path
          d="M21.6247 66.8702L20.3753 65.3084L21.6247 66.8702ZM40.6247 52.6697L41.8741 51.1079L40.6247 52.6697ZM39.3753 52.6697L38.1259 51.1079L39.3753 52.6697ZM58.3753 66.8702L59.6247 65.3084L58.3753 66.8702ZM59 10L21 10V14L59 14V10ZM62 66.0893L62 13H58L58 66.0893H62ZM39.3753 54.2314L57.1259 68.4319L59.6247 65.3084L41.8741 51.1079L39.3753 54.2314ZM22.8741 68.4319L40.6247 54.2314L38.1259 51.1079L20.3753 65.3084L22.8741 68.4319ZM18 13L18 66.0893H22L22 13H18ZM20.3753 65.3084C21.0301 64.7846 22 65.2508 22 66.0893H18C18 68.6048 20.9098 70.0033 22.8741 68.4319L20.3753 65.3084ZM41.8741 51.1079C40.7784 50.2314 39.2216 50.2314 38.1259 51.1079L40.6247 54.2314C40.2595 54.5236 39.7405 54.5236 39.3753 54.2314L41.8741 51.1079ZM58 66.0893C58 65.2508 58.9699 64.7846 59.6247 65.3084L57.1259 68.4319C59.0902 70.0033 62 68.6048 62 66.0893H58ZM21 10C19.3431 10 18 11.3431 18 13H22C22 13.5523 21.5523 14 21 14V10ZM59 14C58.4477 14 58 13.5523 58 13H62C62 11.3431 60.6569 10 59 10V14Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 13C20 12.4477 20.4477 12 21 12L59 12C59.5523 12 60 12.4477 60 13L60 66.0893C60 66.9278 59.0301 67.394 58.3753 66.8702L40.6247 52.6697C40.2595 52.3775 39.7405 52.3775 39.3753 52.6697L21.6247 66.8702C20.9699 67.394 20 66.9278 20 66.0893L20 13Z"
          fill="#EB5757"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 12C20.4477 12 20 12.4477 20 13L20 66.0893C20 66.5172 20.2526 66.8481 20.5869 67H21.4163C21.4881 66.9665 21.558 66.9235 21.6247 66.8702L39.3753 52.6697C39.5579 52.5236 39.779 52.4505 40 52.4505L40 12L21 12Z"
          fill="#F2C94C"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M20 13C20 12.4477 20.4477 12 21 12H59C59.5523 12 60 12.4477 60 13V66.0893C60 66.9278 59.0301 67.394 58.3753 66.8702L40.6247 52.6697C40.2595 52.3775 39.7405 52.3775 39.3753 52.6697L21.6247 66.8702C20.9699 67.394 20 66.9278 20 66.0893V13Z"
          fill="currentColor"
          fill-opacity="0.25"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 13C18 11.3431 19.3431 10 21 10H59C60.6569 10 62 11.3431 62 13V66.0893C62 68.6048 59.0902 70.0033 57.1259 68.4319L40 54.7312L22.8741 68.4319C20.9098 70.0033 18 68.6048 18 66.0893L18 13ZM22 14V64.0087L38.1259 51.1079C39.2216 50.2314 40.7784 50.2314 41.8741 51.1079L58 64.0087V14H22Z"
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
