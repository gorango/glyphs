
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
          d="M64.5858 15.4143C65.8458 14.1543 68 15.0467 68 16.8285V66.0001C68 67.1046 67.1046 68.0001 66 68.0001H16.8285C15.0467 68.0001 14.1543 65.8458 15.4143 64.5858L64.5858 15.4143Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M64.5858 15.4142C65.8457 14.1543 68 15.0466 68 16.8284V66C68 67.1046 67.1046 68 66 68H16.8284C15.0466 68 14.1543 65.8457 15.4142 64.5858L64.5858 15.4142Z"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M68 16.8143V66.0137C67.9926 67.112 67.1001 68 66 68H16.8285C15.0467 68 14.1543 65.8458 15.4143 64.5858L64.5858 15.4143C65.8424 14.1577 67.9886 15.0419 68 16.8143Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M64.5858 15.4142C65.8457 14.1543 68 15.0466 68 16.8284V66C68 67.1046 67.1046 68 66 68H16.8284C15.0466 68 14.1543 65.8457 15.4142 64.5858L64.5858 15.4142Z"
          fill="#56CCF2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M68 16.8143V66.0137C67.9926 67.112 67.1001 68 66 68H16.8285C15.0467 68 14.1543 65.8458 15.4143 64.5858L64.5858 15.4143C65.8424 14.1577 67.9886 15.0419 68 16.8143Z"
          fill="#2F80ED"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M64.5858 15.4143C65.8458 14.1543 68 15.0467 68 16.8285V66.0001C68 67.1046 67.1046 68.0001 66 68.0001H16.8285C15.0467 68.0001 14.1543 65.8458 15.4143 64.5858L64.5858 15.4143Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M68 16.8142V66.0137C67.9927 67.1119 67.1001 68.0001 66 68.0001H16.8285C15.0467 68.0001 14.1543 65.8458 15.4143 64.5858L64.5858 15.4143C65.8424 14.1577 67.9886 15.0419 68 16.8142Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M66 68.0001H16.8285C15.0467 68.0001 14.1543 65.8458 15.4143 64.5858L64.5858 15.4143M66 68.0001C67.1046 68.0001 68 67.1046 68 66.0001V16.8285C68 15.0467 65.8458 14.1543 64.5858 15.4143M66 68.0001C67.1001 68.0001 67.9927 67.1119 68 66.0137V16.8142C67.9886 15.0419 65.8424 14.1577 64.5858 15.4143"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M67.9566 13.3384C66.5009 12.5292 64.5637 12.6078 63.1717 13.9998L14.0002 63.1714C11.4803 65.6912 13.2649 69.9999 16.8285 69.9999H66.0001C66.8243 69.9999 67.5902 69.7506 68.2267 69.3234C69.2488 68.6372 69.937 67.492 69.996 66.1828C69.9983 66.1334 69.9996 66.0837 70 66.0339L70.0001 66.017V66.0147C70.0001 66.0097 70.0001 66.0048 70.0001 65.9999V16.8283C70.0001 16.8232 70.0001 16.8181 70.0001 16.813V16.8104L70 16.7941C69.9872 15.2153 69.1278 13.9895 67.9566 13.3384ZM66.0001 65.9998H16.8286L66.0001 16.8283V65.9998Z"
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
