
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
          d="M20 24L20 65"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M25.818 23.9999H14.182C13.0078 23.9999 12.4197 22.5802 13.25 21.7499L18.5858 16.4142C19.3668 15.6331 20.6332 15.6331 21.4142 16.4142L26.75 21.7499C27.5803 22.5802 26.9923 23.9999 25.818 23.9999Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M37 62C37 63.1046 37.8954 64 39 64H55C56.1046 64 57 63.1046 57 62V50C57 48.8954 56.1046 48 55 48H39C37.8954 48 37 48.8954 37 50V62Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M37 38C37 39.1046 37.8954 40 39 40H67C68.1046 40 69 39.1046 69 38V18C69 16.8954 68.1046 16 67 16H39C37.8954 16 37 16.8954 37 18V38Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M23 24C23 22.3431 21.6569 21 20 21C18.3431 21 17 22.3431 17 24L23 24ZM17 65C17 66.6569 18.3431 68 20 68C21.6569 68 23 66.6569 23 65H17ZM17 24L17 65H23L23 24L17 24Z"
          fill="currentColor"
        />
        <path
          d="M25.818 24L14.182 24C13.0078 24 12.4197 22.5803 13.25 21.75L18.5858 16.4142C19.3668 15.6332 20.6332 15.6332 21.4142 16.4142L26.75 21.75C27.5803 22.5803 26.9923 24 25.818 24Z"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          width="20"
          height="16"
          rx="2"
          transform="matrix(1 0 0 -1 37 64)"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
        <rect
          width="32"
          height="24"
          rx="2"
          transform="matrix(1 0 0 -1 37 40)"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M22 24C22 22.8954 21.1046 22 20 22C18.8954 22 18 22.8954 18 24L22 24ZM18 65C18 66.1046 18.8954 67 20 67C21.1046 67 22 66.1046 22 65H18ZM18 24L18 65H22L22 24L18 24Z"
          fill="#BB6BD9"
        />
        <path
          d="M25.818 24L14.182 24C13.0078 24 12.4197 22.5803 13.25 21.75L18.5858 16.4142C19.3668 15.6332 20.6332 15.6332 21.4142 16.4142L26.75 21.75C27.5803 22.5803 26.9923 24 25.818 24Z"
          fill="#9B51E0"
          stroke="#9B51E0"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          width="20"
          height="16"
          rx="2"
          transform="matrix(1 0 0 -1 37 64)"
          fill="#BB6BD9"
          stroke="#BB6BD9"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
        <rect
          width="32"
          height="24"
          rx="2"
          transform="matrix(1 0 0 -1 37 40)"
          fill="#9B51E0"
          stroke="#9B51E0"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M25.818 23.9999H14.182C13.0078 23.9999 12.4197 22.5802 13.25 21.7499L18.5858 16.4142C19.3668 15.6331 20.6332 15.6331 21.4142 16.4142L26.75 21.7499C27.5803 22.5802 26.9923 23.9999 25.818 23.9999Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M37 61.9999C37 63.1045 37.8954 63.9999 39 63.9999H55C56.1046 63.9999 57 63.1045 57 61.9999V49.9999C57 48.8954 56.1046 47.9999 55 47.9999H39C37.8954 47.9999 37 48.8954 37 49.9999V61.9999Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M37 37.9999C37 39.1045 37.8954 39.9999 39 39.9999H67C68.1046 39.9999 69 39.1045 69 37.9999V17.9999C69 16.8954 68.1046 15.9999 67 15.9999H39C37.8954 15.9999 37 16.8954 37 17.9999V37.9999Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M20 23.9999L20 64.9999M14.182 23.9999H25.818C26.9923 23.9999 27.5803 22.5802 26.75 21.7499L21.4142 16.4142C20.6332 15.6331 19.3668 15.6331 18.5858 16.4142L13.25 21.7499C12.4197 22.5802 13.0078 23.9999 14.182 23.9999ZM39 47.9999H55C56.1046 47.9999 57 48.8954 57 49.9999V61.9999C57 63.1045 56.1046 63.9999 55 63.9999H39C37.8954 63.9999 37 63.1045 37 61.9999V49.9999C37 48.8954 37.8954 47.9999 39 47.9999ZM39 15.9999H67C68.1046 15.9999 69 16.8954 69 17.9999V37.9999C69 39.1045 68.1046 39.9999 67 39.9999H39C37.8954 39.9999 37 39.1045 37 37.9999V17.9999C37 16.8954 37.8954 15.9999 39 15.9999Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.8285 14.9999C21.2664 13.4378 18.7338 13.4378 17.1717 14.9999L11.8359 20.3357C9.74566 22.426 11.2261 25.9999 14.1821 25.9999H18.0001L18.0001 64.9999C18.0001 66.1045 18.8955 66.9999 20.0001 66.9999C21.1047 66.9999 22.0001 66.1045 22.0001 64.9999L22.0001 25.9999H25.8181C28.7742 25.9999 30.2546 22.426 28.1643 20.3357L22.8285 14.9999ZM24.1717 21.9999L20.0001 17.8284L15.8285 21.9999H24.1717Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M35.0001 61.9999C35.0001 64.2091 36.791 65.9999 39.0001 65.9999H55.0001C57.2093 65.9999 59.0001 64.2091 59.0001 61.9999V49.9999C59.0001 47.7908 57.2093 45.9999 55.0001 45.9999H39.0001C36.791 45.9999 35.0001 47.7908 35.0001 49.9999V61.9999ZM55.0001 61.9999H39.0001V49.9999H55.0001V61.9999Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M39.0001 41.9999C36.791 41.9999 35.0001 40.2091 35.0001 37.9999V17.9999C35.0001 15.7908 36.791 13.9999 39.0001 13.9999H67.0001C69.2093 13.9999 71.0001 15.7908 71.0001 17.9999V37.9999C71.0001 40.2091 69.2093 41.9999 67.0001 41.9999H39.0001ZM39.0001 37.9999H67.0001V17.9999H39.0001V37.9999Z"
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
