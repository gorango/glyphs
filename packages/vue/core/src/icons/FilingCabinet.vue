
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
        <rect
          x="12"
          y="12"
          width="56"
          height="28"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M49 22V26H31V22"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="12"
          y="40"
          width="56"
          height="28"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M49 50V54H31V50"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M68 14C68 12.8954 67.1046 12 66 12H14C12.8954 12 12 12.8954 12 14V35.5C12 36.6046 12.8954 37.5 14 37.5H66C67.1046 37.5 68 36.6046 68 35.5V14ZM31 28.5C29.6193 28.5 28.5 27.3807 28.5 26V22C28.5 20.6193 29.6193 19.5 31 19.5C32.3807 19.5 33.5 20.6193 33.5 22C33.5 22.8284 34.1716 23.5 35 23.5H45C45.8284 23.5 46.5 22.8284 46.5 22C46.5 20.6193 47.6193 19.5 49 19.5C50.3807 19.5 51.5 20.6193 51.5 22V26C51.5 27.3807 50.3807 28.5 49 28.5H31Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M68 44.5C68 43.3954 67.1046 42.5 66 42.5H14C12.8954 42.5 12 43.3954 12 44.5V66C12 67.1046 12.8954 68 14 68H66C67.1046 68 68 67.1046 68 66V44.5ZM31 56.5C29.6193 56.5 28.5 55.3807 28.5 54V50C28.5 48.6193 29.6193 47.5 31 47.5C32.3807 47.5 33.5 48.6193 33.5 50C33.5 50.8284 34.1716 51.5 35 51.5H45C45.8284 51.5 46.5 50.8284 46.5 50C46.5 48.6193 47.6193 47.5 49 47.5C50.3807 47.5 51.5 48.6193 51.5 50V54C51.5 55.3807 50.3807 56.5 49 56.5H31Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M68 12H12V40H68V12Z"
          fill="#F2C94C"
        />
        <path
          d="M12 12V10C10.8954 10 10 10.8954 10 12H12ZM68 12H70C70 10.8954 69.1046 10 68 10V12ZM12 40H10C10 41.1046 10.8954 42 12 42V40ZM68 40V42C69.1046 42 70 41.1046 70 40H68ZM31 26H29C29 27.1046 29.8954 28 31 28V26ZM49 26V28C50.1046 28 51 27.1046 51 26H49ZM51 22C51 20.8954 50.1046 20 49 20C47.8954 20 47 20.8954 47 22H51ZM33 22C33 20.8954 32.1046 20 31 20C29.8954 20 29 20.8954 29 22H33ZM12 14H68V10H12V14ZM14 40V12H10V40H14ZM68 38H12V42H68V38ZM66 12V40H70V12H66ZM31 28H49V24H31V28ZM51 26V22H47V26H51ZM29 22V26H33V22H29Z"
          fill="#F2C94C"
        />
        <path
          d="M49 22V26H31V22"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M68 40H12V68H68V40Z"
          fill="#F2994A"
        />
        <path
          d="M12 40V38C10.8954 38 10 38.8954 10 40H12ZM68 40H70C70 38.8954 69.1046 38 68 38V40ZM12 68H10C10 69.1046 10.8954 70 12 70V68ZM68 68V70C69.1046 70 70 69.1046 70 68H68ZM31 54H29C29 55.1046 29.8954 56 31 56V54ZM49 54V56C50.1046 56 51 55.1046 51 54H49ZM51 50C51 48.8954 50.1046 48 49 48C47.8954 48 47 48.8954 47 50H51ZM33 50C33 48.8954 32.1046 48 31 48C29.8954 48 29 48.8954 29 50H33ZM12 42H68V38H12V42ZM14 68V40H10V68H14ZM68 66H12V70H68V66ZM66 40V68H70V40H66ZM31 56H49V52H31V56ZM51 54V50H47V54H51ZM29 50V54H33V50H29Z"
          fill="#F2994A"
        />
        <path
          d="M49 50V54H31V50"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M68 12H12V40H68V12Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M68 40H12V68H68V40Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M12 40V12H68V40M12 40H68M12 40V68H68V40M49 22V26H31V22M49 50V54H31V50"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M33 50C33 48.8954 32.1046 48 31 48C29.8954 48 29 48.8954 29 50V54C29 55.1046 29.8954 56 31 56H49C50.1046 56 51 55.1046 51 54V50C51 48.8954 50.1046 48 49 48C47.8954 48 47 48.8954 47 50V52H33V50Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M33 22C33 20.8954 32.1046 20 31 20C29.8954 20 29 20.8954 29 22V26C29 27.1046 29.8954 28 31 28H49C50.1046 28 51 27.1046 51 26V22C51 20.8954 50.1046 20 49 20C47.8954 20 47 20.8954 47 22V24H33V22Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 10C10.8954 10 10 10.8954 10 12V68C10 69.1046 10.8954 70 12 70H68C69.1046 70 70 69.1046 70 68V12C70 10.8954 69.1046 10 68 10H12ZM66 42H14V66H66V42ZM66 38V14H14V38H66Z"
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
