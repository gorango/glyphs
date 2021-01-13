
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
          d="M53.1716 13.1716C52.4214 12.4214 51.404 12 50.3431 12H16C13.7909 12 12 13.7909 12 16V64C12 66.2091 13.7909 68 16 68H64C66.2091 68 68 66.2091 68 64V29.6569C68 28.596 67.5786 27.5786 66.8284 26.8284L53.1716 13.1716Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M60 68V45C60 44.4477 59.5523 44 59 44H21C20.4477 44 20 44.4477 20 45V68"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M48 12V27C48 27.5523 47.5523 28 47 28H21C20.4477 28 20 27.5523 20 27V12"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M17.5 12H16C13.7909 12 12 13.7909 12 16V64C12 66.2091 13.7909 68 16 68H17.5V45C17.5 43.067 19.067 41.5 21 41.5H59C60.933 41.5 62.5 43.067 62.5 45V68H64C66.2091 68 68 66.2091 68 64V29.6569C68 28.596 67.5786 27.5786 66.8284 26.8284L53.1716 13.1716C52.4585 12.4585 51.5039 12.0424 50.5 12.0031V27C50.5 28.933 48.933 30.5 47 30.5H21C19.067 30.5 17.5 28.933 17.5 27V12Z"
          fill="currentColor"
        />
        <path
          d="M45.5 12H22.5V25.5H45.5V12Z"
          fill="currentColor"
        />
        <path
          d="M57.5 68H22.5V46.5H57.5V68Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M53.1716 13.1716C52.4214 12.4214 51.404 12 50.3431 12H16C13.7909 12 12 13.7909 12 16V64C12 66.2091 13.7909 68 16 68H64C66.2091 68 68 66.2091 68 64V29.6569C68 28.596 67.5786 27.5786 66.8284 26.8284L53.1716 13.1716Z"
          fill="#2F80ED"
        />
        <path
          d="M66.8284 26.8284L68.2426 25.4142L66.8284 26.8284ZM53.1716 13.1716L51.7574 14.5858L53.1716 13.1716ZM16 14H50.3431V10H16V14ZM14 64V16H10V64H14ZM64 66H16V70H64V66ZM66 29.6569V64H70V29.6569H66ZM51.7574 14.5858L65.4142 28.2426L68.2426 25.4142L54.5858 11.7574L51.7574 14.5858ZM70 29.6569C70 28.0656 69.3679 26.5394 68.2426 25.4142L65.4142 28.2426C65.7893 28.6177 66 29.1264 66 29.6569H70ZM64 70C67.3137 70 70 67.3137 70 64H66C66 65.1046 65.1046 66 64 66V70ZM10 64C10 67.3137 12.6863 70 16 70V66C14.8954 66 14 65.1046 14 64H10ZM50.3431 14C50.8736 14 51.3823 14.2107 51.7574 14.5858L54.5858 11.7574C53.4606 10.6321 51.9344 10 50.3431 10V14ZM16 10C12.6863 10 10 12.6863 10 16H14C14 14.8954 14.8954 14 16 14V10Z"
          fill="#2F80ED"
        />
        <path
          d="M59 44H21C20.4477 44 20 44.4477 20 45V67C20 67.5523 20.4477 68 21 68H59C59.5523 68 60 67.5523 60 67V45C60 44.4477 59.5523 44 59 44Z"
          fill="#F2F2F2"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M28 52H52"
          stroke="#56CCF2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M28 60H52"
          stroke="#56CCF2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M48 27V13C48 12.4477 47.5523 12 47 12H21C20.4477 12 20 12.4477 20 13V27C20 27.5523 20.4477 28 21 28H47C47.5523 28 48 27.5523 48 27Z"
          fill="#56CCF2"
          stroke="#56CCF2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M53.1716 13.1716C52.4214 12.4214 51.404 12 50.3431 12H16C13.7909 12 12 13.7909 12 16V64C12 66.2091 13.7909 68 16 68H64C66.2091 68 68 66.2091 68 64V29.6569C68 28.596 67.5786 27.5786 66.8284 26.8284L53.1716 13.1716Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M60 68V45C60 44.4477 59.5523 44 59 44H21C20.4477 44 20 44.4477 20 45V68M48 12V27C48 27.5523 47.5523 28 47 28H21C20.4477 28 20 27.5523 20 27V12M68 29.6569V64C68 66.2091 66.2091 68 64 68H16C13.7909 68 12 66.2091 12 64V16C12 13.7909 13.7909 12 16 12H50.3431C51.404 12 52.4214 12.4214 53.1716 13.1716L66.8284 26.8284C67.5786 27.5786 68 28.596 68 29.6569Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 16C10 12.6863 12.6863 10 16 10H50.3431C51.9344 10 53.4606 10.6321 54.5858 11.7574L68.2426 25.4142C69.3679 26.5394 70 28.0656 70 29.6569V64C70 67.3137 67.3137 70 64 70H16C12.6863 70 10 67.3137 10 64V16ZM46 14H22V26H46V14ZM18 14V27C18 28.6569 19.3431 30 21 30H47C48.6569 30 50 28.6569 50 27V14H50.3431C50.8736 14 51.3823 14.2107 51.7574 14.5858L65.4142 28.2426C65.7893 28.6177 66 29.1264 66 29.6569V64C66 65.1046 65.1046 66 64 66H62V45C62 43.3431 60.6569 42 59 42H21C19.3431 42 18 43.3431 18 45V66H16C14.8954 66 14 65.1046 14 64V16C14 14.8954 14.8954 14 16 14H18ZM22 46V66H58V46H22Z"
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
