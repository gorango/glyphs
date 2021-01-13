
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
          d="M33 51C33 47.134 36.134 44 40 44C43.866 44 47 47.134 47 51V74C47 75.1046 46.1046 76 45 76H35C33.8954 76 33 75.1046 33 74L33 51Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M40 44L40 28"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M36 4L44 4L46 21.7391L40 28L34 21.7391L36 4Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M39.9998 44L39.9998 28"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M35.9998 4L43.9998 4L45.9998 21.7391L39.9998 28L33.9998 21.7391L35.9998 4Z"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M32.9998 51C32.9998 47.134 36.1338 44 39.9998 44C43.8658 44 46.9998 47.134 46.9998 51L46.9998 74C46.9998 75.1046 46.1043 76 44.9998 76L34.9998 76C33.8952 76 32.9998 75.1046 32.9998 74L32.9998 51Z"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M39.9998 44L39.9998 28"
          stroke="#E0E0E0"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M35.9998 4L43.9998 4L45.9998 21.7391L39.9998 28L33.9998 21.7391L35.9998 4Z"
          fill="#E0E0E0"
        />
        <path
          d="M32.9998 51C32.9998 47.134 36.1338 44 39.9998 44C43.8658 44 46.9998 47.134 46.9998 51L46.9998 74C46.9998 75.1046 46.1043 76 44.9998 76L34.9998 76C33.8952 76 32.9998 75.1046 32.9998 74L32.9998 51Z"
          fill="#F2C94C"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M36 4L44 4L46 21.7391L40 28L34 21.7391L36 4Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M33 51C33 47.134 36.134 44 40 44C43.866 44 47 47.134 47 51V74C47 75.1046 46.1046 76 45 76H35C33.8954 76 33 75.1046 33 74L33 51Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M40 44V28M40 44C43.866 44 47 47.134 47 51V74C47 75.1046 46.1046 76 45 76H35C33.8954 76 33 75.1046 33 74L33 51C33 47.134 36.134 44 40 44ZM40 28L46 21.7391L44 4L36 4L34 21.7391L40 28Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M34.0126 3.77593C34.1266 2.76447 34.9821 2 36 2L44 2C45.0179 2 45.8734 2.76447 45.9874 3.77593L47.9874 21.5151C48.0539 22.1051 47.8548 22.6942 47.444 23.1229L42 28.8036V42.223C46.008 43.1325 49 46.7168 49 51V74C49 76.2091 47.2091 78 45 78H35C32.7909 78 31 76.2091 31 74L31 51C31 46.7168 33.992 43.1325 38 42.223L38 28.8036L32.556 23.1229C32.1452 22.6942 31.9461 22.1051 32.0126 21.5151L34.0126 3.77593ZM40 46C37.2386 46 35 48.2386 35 51L35 74H45L45 51C45 48.2386 42.7614 46 40 46ZM37.7872 6L36.0924 21.0319L40 25.1094L43.9076 21.0319L42.2128 6H37.7872Z"
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
