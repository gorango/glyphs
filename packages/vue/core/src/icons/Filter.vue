
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
          d="M46 39.1424L68 13.9995H12L34 39.1424V65.9995L46 56.1172V39.1424Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M46 39.1424L68 13.9995L12 13.9995L34 39.1424L34 65.9995L46 56.1172V39.1424Z"
          fill="currentColor"
        />
        <path
          d="M68 13.9995L69.5052 15.3165C70.0219 14.7259 70.1455 13.8877 69.8213 13.1731C69.497 12.4585 68.7848 11.9995 68 11.9995V13.9995ZM46 39.1424L44.4948 37.8254C44.1758 38.1899 44 38.6579 44 39.1424L46 39.1424ZM12 13.9995V11.9995C11.2152 11.9995 10.503 12.4585 10.1787 13.1731C9.85446 13.8877 9.97808 14.7259 10.4948 15.3165L12 13.9995ZM34 39.1424H36C36 38.6579 35.8242 38.1899 35.5052 37.8254L34 39.1424ZM34 65.9995H32C32 66.7734 32.4465 67.4779 33.1464 67.8082C33.8463 68.1385 34.674 68.0354 35.2714 67.5434L34 65.9995ZM46 56.1172L47.2714 57.661C47.7327 57.2811 48 56.7148 48 56.1172H46ZM66.4948 12.6825L44.4948 37.8254L47.5052 40.4594L69.5052 15.3165L66.4948 12.6825ZM12 15.9995L68 15.9995V11.9995L12 11.9995V15.9995ZM35.5052 37.8254L13.5052 12.6825L10.4948 15.3165L32.4948 40.4594L35.5052 37.8254ZM36 65.9995L36 39.1424H32L32 65.9995H36ZM44.7286 54.5733L32.7286 64.4557L35.2714 67.5434L47.2714 57.661L44.7286 54.5733ZM44 39.1424L44 56.1172H48V39.1424L44 39.1424Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M46 39.1424L68 13.9995L12 13.9995L34 39.1424L34 65.9995L46 56.1172V39.1424Z"
          fill="#BB6BD9"
        />
        <path
          d="M12 13.9995L68 13.9995L40 45.9995L12 13.9995Z"
          fill="#9B51E0"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M46 39.1424L68 13.9995H12L34 39.1424V65.9995L46 56.1172V39.1424Z"
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
          d="M10.1788 13.1731C10.503 12.4585 11.2153 11.9995 12 11.9995H68C68.7848 11.9995 69.497 12.4585 69.8213 13.1731C70.1456 13.8877 70.0219 14.7259 69.5052 15.3165L48 39.8938V56.1172C48 56.7148 47.7328 57.2811 47.2714 57.661L35.2714 67.5434C34.674 68.0354 33.8464 68.1385 33.1465 67.8082C32.4466 67.4779 32 66.7734 32 65.9995V39.8938L10.4949 15.3165C9.97811 14.7259 9.85449 13.8877 10.1788 13.1731ZM16.4076 15.9995L35.5052 37.8254C35.8242 38.1899 36 38.6579 36 39.1424V61.7615L44 55.1733V39.1424C44 38.6579 44.1759 38.1899 44.4949 37.8254L63.5925 15.9995H16.4076Z"
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
