
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
          d="M12 14C12 12.8954 12.8954 12 14 12H66C67.1046 12 68 12.8954 68 14V66C68 67.1046 67.1046 68 66 68H14C12.8954 68 12 67.1046 12 66V14Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M40 12V68"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M68 40L12 40"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M34 26H18"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M45.9141 26L53.1868 26L54.6413 26L61.9141 26"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M53.9141 18L53.9141 25.2727L53.9141 26.7273L53.9141 34"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M20.3433 48.384L25.4859 53.5266L26.5144 54.5551L31.657 59.6977"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M31.6567 48.384L26.5141 53.5266L25.4856 54.5551L20.343 59.6977"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M45.8914 56.9092L53.1641 56.9092L54.6186 56.9092L61.8914 56.9092"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M45.8914 51.0908L53.1641 51.0908L54.6186 51.0908L61.8914 51.0908"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <rect
          x="12"
          y="12"
          width="56"
          height="56"
          rx="2"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M40 12V68"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M68 40L12 40"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M18 26L25.2727 26L26.7273 26L34 26"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M45.9141 26L53.1868 26L54.6413 26L61.9141 26"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M53.9141 18L53.9141 25.2727L53.9141 26.7273L53.9141 34"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M20.343 48.384L25.4856 53.5266L26.5141 54.5551L31.6567 59.6977"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M31.657 48.384L26.5144 53.5266L25.4859 54.5551L20.3433 59.6977"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M45.8914 56.9092L53.1641 56.9092L54.6186 56.9092L61.8914 56.9092"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M45.8914 51.0908L53.1641 51.0908L54.6186 51.0908L61.8914 51.0908"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <rect
          x="12"
          y="12"
          width="56"
          height="56"
          rx="2"
          fill="#F2F2F2"
        />
        <path
          d="M40 12V68"
          stroke="#BDBDBD"
          :stroke-width="strokeWidth"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M68 40L12 40"
          stroke="#BDBDBD"
          :stroke-width="strokeWidth"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M18 26L25.2727 26L26.7273 26L34 26"
          stroke="#2F80ED"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M45.9141 26L53.1868 26L54.6413 26L61.9141 26"
          stroke="#219653"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M53.9141 18L53.9141 25.2727L53.9141 26.7273L53.9141 34"
          stroke="#219653"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M20.343 48.384L25.4856 53.5266L26.5141 54.5551L31.6567 59.6977"
          stroke="#F2C94C"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M31.657 48.384L26.5144 53.5266L25.4859 54.5551L20.3433 59.6977"
          stroke="#F2C94C"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M45.8914 56.9092L53.1641 56.9092L54.6186 56.9092L61.8914 56.9092"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M45.8914 51.0908L53.1641 51.0908L54.6186 51.0908L61.8914 51.0908"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M12 14C12 12.8954 12.8954 12 14 12H66C67.1046 12 68 12.8954 68 14V66C68 67.1046 67.1046 68 66 68H14C12.8954 68 12 67.1046 12 66V14Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M40 12V68M68 40L12 40M34 26H18M61.9141 26H45.9141M53.9141 34V18M31.6568 59.6977L20.3431 48.3839M20.3432 59.6977L31.6569 48.3839M61.8913 56.9091H45.8913M61.8913 51.0909H45.8913M14 68H66C67.1046 68 68 67.1046 68 66V14C68 12.8954 67.1046 12 66 12H14C12.8954 12 12 12.8954 12 14V66C12 67.1046 12.8954 68 14 68Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M18.9288 46.9697C19.7099 46.1887 20.9762 46.1887 21.7572 46.9697L26 51.2125L30.2428 46.9697C31.0238 46.1887 32.2901 46.1887 33.0712 46.9697C33.8522 47.7508 33.8522 49.0171 33.0712 49.7982L28.8284 54.0409L33.0709 58.2834C33.852 59.0645 33.852 60.3308 33.0709 61.1119C32.2899 61.8929 31.0236 61.8929 30.2425 61.1119L26 56.8693L21.7575 61.1119C20.9764 61.8929 19.7101 61.8929 18.9291 61.1119C18.148 60.3308 18.148 59.0645 18.9291 58.2834L23.1716 54.0409L18.9288 49.7982C18.1478 49.0171 18.1478 47.7508 18.9288 46.9697Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M18 24C16.8954 24 16 24.8954 16 26C16 27.1046 16.8954 28 18 28H34C35.1046 28 36 27.1046 36 26C36 24.8954 35.1046 24 34 24H18Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M43.8913 56.9091C43.8913 55.8045 44.7868 54.9091 45.8913 54.9091H61.8913C62.9959 54.9091 63.8913 55.8045 63.8913 56.9091C63.8913 58.0137 62.9959 58.9091 61.8913 58.9091H45.8913C44.7868 58.9091 43.8913 58.0137 43.8913 56.9091Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M45.8913 49.0909C44.7868 49.0909 43.8913 49.9863 43.8913 51.0909C43.8913 52.1955 44.7868 53.0909 45.8913 53.0909H61.8913C62.9959 53.0909 63.8913 52.1955 63.8913 51.0909C63.8913 49.9863 62.9959 49.0909 61.8913 49.0909H45.8913Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M43.9141 26C43.9141 24.8954 44.8095 24 45.9141 24H51.9141V18C51.9141 16.8954 52.8095 16 53.9141 16C55.0186 16 55.9141 16.8954 55.9141 18V24L61.9141 24C63.0186 24 63.9141 24.8954 63.9141 26C63.9141 27.1046 63.0186 28 61.9141 28L55.9141 28V34C55.9141 35.1046 55.0186 36 53.9141 36C52.8095 36 51.9141 35.1046 51.9141 34V28H45.9141C44.8095 28 43.9141 27.1046 43.9141 26Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 10C11.7909 10 10 11.7909 10 14V66C10 68.2091 11.7909 70 14 70H66C68.2091 70 70 68.2091 70 66V14C70 11.7909 68.2091 10 66 10H14ZM14 66V42H38V66H14ZM14 38H38V14L14 14V38ZM42 66V42H66V66H42ZM42 38H66V14L42 14V38Z"
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
