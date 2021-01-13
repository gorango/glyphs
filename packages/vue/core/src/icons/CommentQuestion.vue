
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
          d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M40 47.2V46.8197C40 43.9901 41.4911 41.3699 43.9237 39.9246L44.9751 39.3C47.4705 37.8175 49 35.1297 49 32.2271C49 27.6834 45.3166 24 40.7729 24H40C35.0294 24 31 28.0294 31 33V33.5082"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M40 53.6001V55.2001"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66ZM40 26.5C36.4101 26.5 33.5 29.4101 33.5 33V33.5082C33.5 34.8889 32.3807 36.0082 31 36.0082C29.6193 36.0082 28.5 34.8889 28.5 33.5082V33C28.5 26.6487 33.6487 21.5 40 21.5H40.7729C46.6973 21.5 51.5 26.3027 51.5 32.2271C51.5 36.0117 49.5057 39.5163 46.252 41.4493L45.2006 42.0739C43.5263 43.0687 42.5 44.8721 42.5 46.8197V47.2C42.5 48.5807 41.3807 49.7 40 49.7C38.6193 49.7 37.5 48.5807 37.5 47.2V46.8197C37.5 43.1081 39.4558 39.6711 42.6468 37.7753L43.6981 37.1507C45.4353 36.1187 46.5 34.2476 46.5 32.2271C46.5 29.0641 43.9359 26.5 40.7729 26.5H40ZM42.5 53.5999C42.5 52.2192 41.3807 51.0999 40 51.0999C38.6193 51.0999 37.5 52.2192 37.5 53.5999V55.1999C37.5 56.5806 38.6193 57.6999 40 57.6999C41.3807 57.6999 42.5 56.5806 42.5 55.1999V53.5999Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66Z"
          fill="#56CCF2"
        />
        <path
          d="M40 66V68V66ZM20.4369 57.1261L22.2258 58.0206C22.5892 57.2938 22.4767 56.4193 21.9412 55.8082L20.4369 57.1261ZM16 66L14.2111 65.1056C13.9012 65.7255 13.9343 66.4618 14.2987 67.0515C14.6631 67.6411 15.3068 68 16 68L16 66ZM64 40C64 53.2548 53.2548 64 40 64V68C55.464 68 68 55.464 68 40H64ZM40 16C53.2548 16 64 26.7452 64 40H68C68 24.536 55.464 12 40 12V16ZM16 40C16 26.7452 26.7452 16 40 16V12C24.536 12 12 24.536 12 40H16ZM21.9412 55.8082C18.2407 51.5845 16 46.0564 16 40H12C12 47.0627 14.6176 53.519 18.9326 58.4441L21.9412 55.8082ZM17.7889 66.8944L22.2258 58.0206L18.6481 56.2317L14.2111 65.1056L17.7889 66.8944ZM40 64L16 64L16 68L40 68V64Z"
          fill="#56CCF2"
        />
        <path
          d="M40 46.4V46.0197V46.0197C40 43.6861 41.2297 41.5252 43.2359 40.3332L44.9751 39.3C47.4705 37.8175 49 35.1297 49 32.2271V32.2271C49 27.6834 45.3166 24 40.7729 24H40C35.0294 24 31 28.0294 31 33L31 33.1279V33.5082"
          stroke="#F2C94C"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M40 53.5996L40 55.1996"
          stroke="#F2C94C"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M40 46.4V46.0197C40 43.6861 41.2297 41.5252 43.2359 40.3332L44.9751 39.3C47.4705 37.8175 49 35.1297 49 32.2271C49 27.6834 45.3166 24 40.7729 24H40C35.0294 24 31 28.0294 31 33V33.5082M40 53.5999V55.1999M66 40C66 54.3594 54.3594 66 40 66L16 66L20.4369 57.1261C16.4291 52.5518 14 46.5596 14 40C14 25.6406 25.6406 14 40 14C54.3594 14 66 25.6406 66 40Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M40 26C36.134 26 33 29.134 33 33V33.5082C33 34.6128 32.1046 35.5082 31 35.5082C29.8954 35.5082 29 34.6128 29 33.5082V33C29 26.9249 33.9249 22 40 22H40.7729C46.4212 22 51 26.5788 51 32.2271C51 35.8353 49.0986 39.1765 45.9966 41.0195L44.9452 41.6441C43.1192 42.7289 42 44.6957 42 46.8197V47.2C42 48.3046 41.1046 49.2 40 49.2C38.8954 49.2 38 48.3046 38 47.2V46.8197C38 43.2845 39.8629 40.0109 42.9022 38.2052L43.9535 37.5806C45.8423 36.4584 47 34.424 47 32.2271C47 28.7879 44.2121 26 40.7729 26H40Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M42 53.5999C42 52.4953 41.1046 51.5999 40 51.5999C38.8954 51.5999 38 52.4953 38 53.5999V55.1999C38 56.3044 38.8954 57.1999 40 57.1999C41.1046 57.1999 42 56.3044 42 55.1999V53.5999Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 40C12 24.536 24.536 12 40 12C55.464 12 68 24.536 68 40C68 55.464 55.464 68 40 68L16 68C15.3068 68 14.6631 67.6411 14.2987 67.0515C13.9343 66.4618 13.9012 65.7255 14.2111 65.1056L18.063 57.4019C14.2684 52.6242 12 46.5748 12 40ZM40 16C26.7452 16 16 26.7452 16 40C16 46.0564 18.2407 51.5845 21.9412 55.8082C22.4767 56.4193 22.5892 57.2938 22.2258 58.0206L19.2361 64L40 64C53.2548 64 64 53.2548 64 40C64 26.7452 53.2548 16 40 16Z"
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
