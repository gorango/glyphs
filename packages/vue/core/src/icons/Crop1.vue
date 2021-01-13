
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
          d="M54 65C52.3431 65 51 63.6569 51 62V29H18C16.3431 29 15 27.6569 15 26C15 24.3431 16.3431 23 18 23H54C55.6569 23 57 24.3431 57 26V62C57 63.6569 55.6569 65 54 65Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M29 18C29 16.3431 27.6569 15 26 15C24.3431 15 23 16.3431 23 18V23H29V18Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M29 29V51H51V57H26C24.3431 57 23 55.6569 23 54V29H29Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M57 57V51H62C63.6569 51 65 52.3431 65 54C65 55.6569 63.6569 57 62 57H57Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M26 54L62 18"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29 18C29 16.3431 27.6569 15 26 15C24.3431 15 23 16.3431 23 18V23H29V18ZM29 29L29 51L51 51V57L26 57C24.3431 57 23 55.6569 23 54L23 29H29ZM57 57V51H62C63.6569 51 65 52.3431 65 54C65 55.6569 63.6569 57 62 57H57Z"
          fill="currentColor"
        />
        <path
          d="M23 23H21.5C21.5 23.8284 22.1716 24.5 23 24.5V23ZM29 23V24.5C29.8284 24.5 30.5 23.8284 30.5 23H29ZM29 29H30.5C30.5 28.1716 29.8284 27.5 29 27.5L29 29ZM29 51H27.5C27.5 51.8284 28.1716 52.5 29 52.5V51ZM51 51H52.5C52.5 50.1716 51.8284 49.5 51 49.5V51ZM51 57V58.5C51.8284 58.5 52.5 57.8284 52.5 57H51ZM23 29V27.5C22.1716 27.5 21.5 28.1716 21.5 29H23ZM57 51V49.5C56.1716 49.5 55.5 50.1716 55.5 51H57ZM57 57H55.5C55.5 57.8284 56.1716 58.5 57 58.5V57ZM26 16.5C26.8284 16.5 27.5 17.1716 27.5 18H30.5C30.5 15.5147 28.4853 13.5 26 13.5V16.5ZM24.5 18C24.5 17.1716 25.1716 16.5 26 16.5V13.5C23.5147 13.5 21.5 15.5147 21.5 18H24.5ZM24.5 23V18H21.5V23H24.5ZM23 24.5H29V21.5H23V24.5ZM27.5 18V23H30.5V18H27.5ZM27.5 29L27.5 51H30.5L30.5 29H27.5ZM29 52.5L51 52.5V49.5L29 49.5V52.5ZM52.5 57V51H49.5V57H52.5ZM51 55.5L26 55.5V58.5L51 58.5V55.5ZM26 55.5C25.1716 55.5 24.5 54.8284 24.5 54H21.5C21.5 56.4853 23.5147 58.5 26 58.5V55.5ZM24.5 54L24.5 29H21.5L21.5 54H24.5ZM29 27.5H23V30.5H29L29 27.5ZM55.5 51V57H58.5V51H55.5ZM57 52.5H62V49.5H57V52.5ZM62 52.5C62.8284 52.5 63.5 53.1716 63.5 54H66.5C66.5 51.5147 64.4853 49.5 62 49.5V52.5ZM63.5 54C63.5 54.8284 62.8284 55.5 62 55.5V58.5C64.4853 58.5 66.5 56.4853 66.5 54H63.5ZM62 55.5H57V58.5H62V55.5Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M54 65C52.3431 65 51 63.6569 51 62L51 29L18 29C16.3431 29 15 27.6569 15 26C15 24.3431 16.3431 23 18 23L54 23C55.6569 23 57 24.3431 57 26L57 62C57 63.6569 55.6569 65 54 65Z"
          fill="currentColor"
        />
        <path
          d="M51 29H53C53 27.8954 52.1046 27 51 27V29ZM49 62C49 64.7614 51.2386 67 54 67V63C53.4477 63 53 62.5523 53 62H49ZM49 29L49 62H53L53 29H49ZM18 31L51 31V27L18 27V31ZM13 26C13 28.7614 15.2386 31 18 31V27C17.4477 27 17 26.5523 17 26H13ZM18 21C15.2386 21 13 23.2386 13 26H17C17 25.4477 17.4477 25 18 25V21ZM54 21L18 21V25L54 25V21ZM59 26C59 23.2386 56.7614 21 54 21V25C54.5523 25 55 25.4477 55 26H59ZM59 62L59 26H55L55 62H59ZM54 67C56.7614 67 59 64.7614 59 62H55C55 62.5523 54.5523 63 54 63V67Z"
          fill="currentColor"
        />
        <path
          d="M26 54L62 18"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29 18C29 16.3431 27.6569 15 26 15C24.3431 15 23 16.3431 23 18V23H29V18ZM29 29L29 51L51 51V57L26 57C24.3431 57 23 55.6569 23 54L23 29H29ZM57 57V51H62C63.6569 51 65 52.3431 65 54C65 55.6569 63.6569 57 62 57H57Z"
          fill="#56CCF2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M54 65C52.3431 65 51 63.6569 51 62L51 29L18 29C16.3431 29 15 27.6569 15 26C15 24.3431 16.3431 23 18 23L54 23C55.6569 23 57 24.3431 57 26L57 62C57 63.6569 55.6569 65 54 65Z"
          fill="#2F80ED"
        />
        <path
          d="M26 54L62 18"
          stroke="#9B51E0"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M29 18C29 16.3431 27.6569 15 26 15C24.3431 15 23 16.3431 23 18V23H29V18Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M29 29V51H51V57H26C24.3431 57 23 55.6569 23 54V29H29Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M57 57V51H62C63.6569 51 65 52.3431 65 54C65 55.6569 63.6569 57 62 57H57Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M54 65C52.3431 65 51 63.6569 51 62V29H18C16.3431 29 15 27.6569 15 26C15 24.3431 16.3431 23 18 23H54C55.6569 23 57 24.3431 57 26V62C57 63.6569 55.6569 65 54 65Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M26 54L62 18M26 15C27.6569 15 29 16.3431 29 18V23H23V18C23 16.3431 24.3431 15 26 15ZM29 29V51H51V57H26C24.3431 57 23 55.6569 23 54V29H29ZM57 51V57H62C63.6569 57 65 55.6569 65 54C65 52.3431 63.6569 51 62 51H57ZM51 62C51 63.6569 52.3431 65 54 65C55.6569 65 57 63.6569 57 62V26C57 24.3431 55.6569 23 54 23H18C16.3431 23 15 24.3431 15 26C15 27.6569 16.3431 29 18 29H51V62Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 18V21H18C15.2386 21 13 23.2386 13 26C13 28.7614 15.2386 31 18 31H21V54C21 56.7614 23.2386 59 26 59H49V62C49 64.7614 51.2386 67 54 67C56.7614 67 59 64.7614 59 62V59H62C64.7614 59 67 56.7614 67 54C67 51.2386 64.7614 49 62 49H59V26C59 25.3551 58.8779 24.7388 58.6556 24.1728L63.4142 19.4142C64.1953 18.6332 64.1953 17.3668 63.4142 16.5858C62.6332 15.8047 61.3668 15.8047 60.5858 16.5858L55.8272 21.3444C55.2612 21.1221 54.6449 21 54 21H31V18C31 15.2386 28.7614 13 26 13C23.2386 13 21 15.2386 21 18ZM26 17C25.4477 17 25 17.4477 25 18V21H27V18C27 17.4477 26.5523 17 26 17ZM52.1716 25H18C17.4477 25 17 25.4477 17 26C17 26.5523 17.4477 27 18 27H50.1716L52.1716 25ZM46.1716 31H31V46.1716L46.1716 31ZM33.8284 49L49 33.8284V49H33.8284ZM27 50.1716V31H25V52.1716L27 50.1716ZM27.8284 55L29.8284 53H49V55H27.8284ZM53 29.8284L55 27.8284V62C55 62.5523 54.5523 63 54 63C53.4477 63 53 62.5523 53 62V29.8284ZM62 55H59V53H62C62.5523 53 63 53.4477 63 54C63 54.5523 62.5523 55 62 55Z"
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
