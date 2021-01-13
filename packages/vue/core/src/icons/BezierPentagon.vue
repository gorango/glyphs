
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
          d="M18 59H30V71H18V59Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M16.2202 39.5001L22.5561 59.0001"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M8.5 27.5H20.5V39.5H8.5V27.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M20.5 29.1677L34 19.3594"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M34 9H46V21H34V9Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M59.5 29.1677L46 19.3594"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M59.5 27.5H71.5V39.5H59.5V27.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M57.4438 59L63.7798 39.5"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M50 59H62V71H50V59Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M50 63.8435H30"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M20.0001 29.1676L18.2367 26.7405L17.0001 27.639V29.1676H20.0001ZM33.5001 19.3593H36.5001V13.4714L31.7367 16.9322L33.5001 19.3593ZM20.0001 39.5V42.5H23.0001V39.5H20.0001ZM15.7202 39.5V36.5H11.5911L12.867 40.4271L15.7202 39.5ZM22.0561 59L19.203 59.9271L19.8765 62H22.0561V59ZM29.5001 59H32.5001V56H29.5001V59ZM29.5001 63.8435H26.5001V66.8435H29.5001V63.8435ZM49.5001 63.8435V66.8435H52.5001V63.8435H49.5001ZM49.5001 59V56H46.5001V59H49.5001ZM56.944 59V62H59.1236L59.7972 59.9271L56.944 59ZM63.28 39.5L66.1331 40.4271L67.4091 36.5H63.28V39.5ZM59.0001 39.5H56.0001L56.0001 42.5H59.0001L59.0001 39.5ZM59.0001 29.1676H62.0001V27.639L60.7634 26.7405L59.0001 29.1676ZM45.5001 19.3593L47.2634 16.9322L42.5001 13.4714V19.3593H45.5001ZM45.5001 21V24L48.5001 24V21L45.5001 21ZM33.5001 21H30.5001V24H33.5001V21ZM21.7634 31.5946L35.2634 21.7863L31.7367 16.9322L18.2367 26.7405L21.7634 31.5946ZM23.0001 39.5L23.0001 29.1676H17.0001L17.0001 39.5H23.0001ZM15.7202 42.5H20.0001V36.5H15.7202V42.5ZM24.9093 58.0729L18.5734 38.5729L12.867 40.4271L19.203 59.9271L24.9093 58.0729ZM29.5001 56H22.0561V62H29.5001V56ZM32.5001 63.8435V59H26.5001V63.8435H32.5001ZM49.5001 60.8435L29.5001 60.8435V66.8435H49.5001V60.8435ZM46.5001 59V63.8435H52.5001V59H46.5001ZM56.944 56H49.5001V62H56.944V56ZM60.4268 38.5729L54.0909 58.0729L59.7972 59.9271L66.1331 40.4271L60.4268 38.5729ZM63.28 36.5H59.0001L59.0001 42.5H63.28L63.28 36.5ZM62.0001 39.5V29.1676H56.0001V39.5H62.0001ZM43.7367 21.7863L57.2367 31.5946L60.7634 26.7405L47.2634 16.9322L43.7367 21.7863ZM48.5001 21V19.3593H42.5001V21L48.5001 21ZM33.5001 24H45.5001V18H33.5001V24ZM30.5001 19.3593V21H36.5001V19.3593H30.5001Z"
          fill="currentColor"
        />
        <rect
          x="33.5"
          y="9"
          width="12"
          height="12"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="17.5"
          y="59"
          width="12"
          height="12"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="49.5"
          y="59"
          width="12"
          height="12"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="8"
          y="27.5"
          width="12"
          height="12"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="59"
          y="27.5"
          width="12"
          height="12"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M20.0001 29.1676L18.8245 27.5495L18.0001 28.1485V29.1676H20.0001ZM33.5001 19.3593H35.5001V15.434L32.3245 17.7412L33.5001 19.3593ZM20.0001 39.5V41.5H22.0001V39.5H20.0001ZM15.7202 39.5V37.5H12.9675L13.8181 40.118L15.7202 39.5ZM22.0561 59L20.154 59.618L20.6031 61H22.0561V59ZM29.5001 59H31.5001V57H29.5001V59ZM29.5001 63.8435H27.5001V65.8435H29.5001V63.8435ZM49.5001 63.8435V65.8435H51.5001V63.8435H49.5001ZM49.5001 59V57H47.5001V59H49.5001ZM56.944 59V61H58.3971L58.8461 59.618L56.944 59ZM63.28 39.5L65.1821 40.118L66.0327 37.5H63.28V39.5ZM59.0001 39.5H57.0001L57.0001 41.5H59.0001L59.0001 39.5ZM59.0001 29.1676H61.0001V28.1485L60.1757 27.5495L59.0001 29.1676ZM45.5001 19.3593L46.6757 17.7412L43.5001 15.434V19.3593H45.5001ZM45.5001 21V23L47.5001 23V21H45.5001ZM33.5001 21H31.5001V23H33.5001V21ZM21.1757 30.7856L34.6757 20.9773L32.3245 17.7412L18.8245 27.5495L21.1757 30.7856ZM22.0001 39.5L22.0001 29.1676H18.0001L18.0001 39.5H22.0001ZM15.7202 41.5H20.0001V37.5H15.7202V41.5ZM23.9583 58.382L17.6223 38.882L13.8181 40.118L20.154 59.618L23.9583 58.382ZM29.5001 57H22.0561V61H29.5001V57ZM31.5001 63.8435V59H27.5001V63.8435H31.5001ZM49.5001 61.8435L29.5001 61.8435V65.8435H49.5001V61.8435ZM47.5001 59V63.8435H51.5001V59H47.5001ZM56.944 57H49.5001V61H56.944V57ZM61.3778 38.882L55.0419 58.382L58.8461 59.618L65.1821 40.118L61.3778 38.882ZM63.28 37.5H59.0001L59.0001 41.5H63.28L63.28 37.5ZM61.0001 39.5V29.1676H57.0001V39.5H61.0001ZM44.3245 20.9773L57.8245 30.7856L60.1757 27.5495L46.6757 17.7412L44.3245 20.9773ZM47.5001 21V19.3593H43.5001V21H47.5001ZM33.5001 23H45.5001V19H33.5001V23ZM31.5001 19.3593V21H35.5001V19.3593H31.5001Z"
          fill="#6FCF97"
        />
        <rect
          x="33.5"
          y="9"
          width="12"
          height="12"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="17.5"
          y="59"
          width="12"
          height="12"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="49.5"
          y="59"
          width="12"
          height="12"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="8"
          y="27.5"
          width="12"
          height="12"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="59"
          y="27.5"
          width="12"
          height="12"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M34 19.3593L20.5 29.1676V39.5H16.2201L22.5561 59H30V63.8435H50V59H57.4439L63.7799 39.5H59.5V29.1676L46 19.3593V21H34V19.3593Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M34 9H46V21H34L34 9Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M18 59H30V71H18V59Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M50 59H62V71H50V59Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M8.5 27.5H20.5V39.5H8.5V27.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M59.5 27.5H71.5V39.5H59.5V27.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M20.5 39.5V29.1676L34 19.3593V21M20.5 39.5H16.2201L22.5561 59H30M20.5 39.5V27.5H8.5V39.5H20.5ZM30 59V63.8435H50V59M30 59H18V71H30V59ZM50 59H57.4439L63.7799 39.5H59.5M50 59H62V71H50V59ZM59.5 39.5V29.1676L46 19.3593V21M59.5 39.5H71.5V27.5H59.5V39.5ZM46 21H34M46 21V9H34L34 21"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M33.5 7C32.3954 7 31.5 7.89543 31.5 9V18.3402L21.1475 25.8617C20.8227 25.6338 20.427 25.5 20 25.5H8C6.89543 25.5 6 26.3954 6 27.5V39.5C6 40.6046 6.89543 41.5 8 41.5H14.267L19.3033 57H17.5C16.3954 57 15.5 57.8954 15.5 59V71C15.5 72.1046 16.3954 73 17.5 73H29.5C30.6046 73 31.5 72.1046 31.5 71V65.8435H47.5V71C47.5 72.1046 48.3954 73 49.5 73H61.5C62.6046 73 63.5 72.1046 63.5 71V59C63.5 57.8954 62.6046 57 61.5 57H59.6967L64.733 41.5H71C72.1046 41.5 73 40.6046 73 39.5V27.5C73 26.3954 72.1046 25.5 71 25.5H59C58.573 25.5 58.1773 25.6338 57.8525 25.8617L47.5 18.3402V9C47.5 7.89543 46.6046 7 45.5 7H33.5ZM61 29.5V37.5H69V29.5H61ZM57 30.1866L47.1085 23H31.8915L22 30.1866V41.5H18.4729L23.5091 57H31.5V61.8435H47.5V57H55.4909L60.5271 41.5H57V30.1866ZM10 29.5H18V37.5H10V29.5ZM51.5 69H59.5V61H51.5V69ZM27.5 69H19.5V61H27.5V69ZM43.5 11H35.5V19H43.5V11Z"
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
