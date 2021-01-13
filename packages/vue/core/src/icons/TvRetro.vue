
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
          d="M12 26C12 23.7909 13.7909 22 16 22H64C66.2091 22 68 23.7909 68 26V58C68 60.2091 66.2091 62 64 62H16C13.7909 62 12 60.2091 12 58V26Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M23.351 33.2254C23.4349 31.1269 25.1274 29.4507 27.2266 29.3871L40 29L52.7734 29.3871C54.8725 29.4507 56.5651 31.1269 56.649 33.2254L57 42L56.649 50.7746C56.5651 52.8731 54.8726 54.5493 52.7734 54.6129L40 55L27.2266 54.6129C25.1275 54.5493 23.4349 52.8731 23.351 50.7746L23 42L23.351 33.2254Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M52 10L40 22L28 10"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M19 70L21 62"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M60 70L58 62"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 22C13.7909 22 12 23.7909 12 26V58C12 60.2091 13.7909 62 16 62H64C66.2091 62 68 60.2091 68 58V26C68 23.7909 66.2091 22 64 22H16ZM27.2266 29.3871C25.1274 29.4507 23.4349 31.1269 23.351 33.2254L23 42L23.351 50.7746C23.4349 52.8731 25.1274 54.5493 27.2266 54.6129L40 55L52.7734 54.6129C54.8726 54.5493 56.5651 52.8731 56.649 50.7746L57 42L56.649 33.2254C56.5651 31.1269 54.8726 29.4507 52.7734 29.3871L40 29L27.2266 29.3871Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.5858 8.58579C27.3668 7.80474 28.6332 7.80474 29.4142 8.58579L40 19.1716L50.5858 8.58579C51.3668 7.80474 52.6332 7.80474 53.4142 8.58579C54.1953 9.36683 54.1953 10.6332 53.4142 11.4142L41.4142 23.4142C40.6332 24.1953 39.3668 24.1953 38.5858 23.4142L26.5858 11.4142C25.8047 10.6332 25.8047 9.36683 26.5858 8.58579ZM21.4851 60.0597C22.5567 60.3276 23.2082 61.4135 22.9403 62.4851L20.9403 70.4851C20.6724 71.5567 19.5865 72.2082 18.5149 71.9403C17.4433 71.6724 16.7918 70.5865 17.0597 69.5149L19.0597 61.5149C19.3276 60.4433 20.4135 59.7918 21.4851 60.0597ZM57.5149 60.0597C58.5865 59.7918 59.6724 60.4433 59.9403 61.5149L61.9403 69.5149C62.2082 70.5865 61.5567 71.6724 60.4851 71.9403C59.4135 72.2082 58.3276 71.5567 58.0597 70.4851L56.0597 62.4851C55.7918 61.4135 56.4433 60.3276 57.5149 60.0597Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <rect
          x="12"
          y="22"
          width="56"
          height="40"
          rx="4"
          fill="#9B51E0"
          stroke="#9B51E0"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M23.351 33.2254C23.4349 31.1269 25.1274 29.4507 27.2266 29.3871L40 29L52.7734 29.3871C54.8725 29.4507 56.5651 31.1269 56.649 33.2254L57 42L56.649 50.7746C56.5651 52.8731 54.8726 54.5493 52.7734 54.6129L40 55L27.2266 54.6129C25.1274 54.5493 23.4349 52.8731 23.351 50.7746L23 42L23.351 33.2254Z"
          fill="#56CCF2"
          stroke="#56CCF2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.4142 8.58579C28.6332 7.80474 27.3668 7.80474 26.5858 8.58579C25.8047 9.36683 25.8047 10.6332 26.5858 11.4142L35.1716 20H44.8284L53.4142 11.4142C54.1952 10.6332 54.1952 9.36683 53.4142 8.58579C52.6331 7.80474 51.3668 7.80474 50.5858 8.58579L40 19.1716L29.4142 8.58579ZM57.9581 60H58.0448C58.016 59.9994 57.9871 59.9994 57.9581 60ZM56.4384 64H60.5615L61.9403 69.5149C62.2082 70.5865 61.5566 71.6724 60.4851 71.9403C59.4135 72.2082 58.3276 71.5567 58.0597 70.4851L56.4384 64ZM20.9551 60C20.9839 59.9994 21.0128 59.9994 21.0418 60H20.9551ZM18.4384 64H22.5615L20.9403 70.4851C20.6724 71.5567 19.5865 72.2082 18.5149 71.9403C17.4433 71.6724 16.7918 70.5865 17.0597 69.5149L18.4384 64Z"
          fill="#828282"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M12 26C12 23.7909 13.7909 22 16 22H64C66.2091 22 68 23.7909 68 26V58C68 60.2091 66.2091 62 64 62H16C13.7909 62 12 60.2091 12 58V26Z"
          fill="currentColor"
          fill-opacity="0.25"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M23.351 33.2254C23.4349 31.1269 25.1274 29.4507 27.2266 29.3871L40 29L52.7734 29.3871C54.8725 29.4507 56.5651 31.1269 56.649 33.2254L57 42L56.649 50.7746C56.5651 52.8731 54.8726 54.5493 52.7734 54.6129L40 55L27.2266 54.6129C25.1275 54.5493 23.4349 52.8731 23.351 50.7746L23 42L23.351 33.2254Z"
          fill="currentColor"
          fill-opacity="0.25"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M52 10L40 22L28 10M19 70L21 62M60 70L58 62"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M39.9394 27.0009C39.9798 26.9997 40.0202 26.9997 40.0606 27.0009L52.8339 27.388C55.9827 27.4834 58.5215 29.9977 58.6474 33.1454L58.9984 41.9201C59.0005 41.9733 59.0005 42.0267 58.9984 42.0799L58.6474 50.8546C58.5215 54.0023 55.9827 56.5166 52.8339 56.612L40.0606 56.9991C40.0202 57.0003 39.9798 57.0003 39.9394 56.9991L27.1661 56.612C24.0173 56.5166 21.4785 54.0023 21.3526 50.8546L21.0016 42.0799C20.9995 42.0267 20.9995 41.9733 21.0016 41.9201L21.3526 33.1454C21.4785 29.9977 24.0173 27.4834 27.1661 27.388L39.9394 27.0009ZM40 31.0009L27.2872 31.3862C26.2376 31.418 25.3914 32.2561 25.3494 33.3053L25.0016 42L25.3494 50.6947C25.3914 51.7439 26.2376 52.582 27.2872 52.6138L40 52.9991L52.7128 52.6138C53.7624 52.582 54.6086 51.7439 54.6506 50.6947L54.9984 42L54.6506 33.3053C54.6086 32.2561 53.7624 31.418 52.7128 31.3862L40 31.0009Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.5858 8.58579C27.3668 7.80474 28.6332 7.80474 29.4142 8.58579L40 19.1716L50.5858 8.58579C51.3668 7.80474 52.6331 7.80474 53.4142 8.58579C54.1952 9.36684 54.1952 10.6332 53.4142 11.4142L44.8284 20H64C67.3137 20 70 22.6863 70 26V58C70 61.3137 67.3137 64 64 64H60.5615L61.9403 69.5149C62.2082 70.5865 61.5566 71.6724 60.4851 71.9403C59.4135 72.2082 58.3276 71.5567 58.0597 70.4851L56.4384 64H22.5615L20.9403 70.4851C20.6724 71.5567 19.5865 72.2082 18.5149 71.9403C17.4433 71.6724 16.7918 70.5865 17.0597 69.5149L18.4384 64H16C12.6863 64 10 61.3137 10 58V26C10 22.6863 12.6863 20 16 20H35.1716L26.5858 11.4142C25.8047 10.6332 25.8047 9.36684 26.5858 8.58579ZM16 24C14.8954 24 14 24.8954 14 26V58C14 59.1046 14.8954 60 16 60H64C65.1046 60 66 59.1046 66 58V26C66 24.8954 65.1046 24 64 24H16Z"
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
