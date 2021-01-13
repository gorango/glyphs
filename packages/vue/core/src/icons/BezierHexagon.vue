
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
          d="M10.5 47.5H22.5V59.5H10.5V47.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M16.6172 47.5V32.5"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M10.5 20.5H22.5V32.5H10.5V20.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M22.5 23.1036L34 16.4641"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M34 7H46V19H34V7Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M46 16.4641L57.5 23.1036"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M57.5 20.5H69.5V32.5H57.5V20.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M63.3823 32.5V47.5"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M57.5 47.5H69.5V59.5H57.5V47.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M57.5 56.8965L46 63.536"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M34 61H46V73H34V61Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M34 63.536L22.5 56.8965"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M21.9999 23.1036L20.4999 20.5056L18.9999 21.3716V23.1036H21.9999ZM21.9999 32.5V35.5H24.9999L24.9999 32.5H21.9999ZM33.4999 16.4641H36.4999V11.268L31.9999 13.866L33.4999 16.4641ZM33.4999 19H30.4999V22H33.4999V19ZM45.4999 19V22L48.4999 22V19L45.4999 19ZM45.4999 16.4641L46.9999 13.866L42.4999 11.268V16.4641H45.4999ZM56.9999 23.1036H59.9999V21.3716L58.4999 20.5056L56.9999 23.1036ZM56.9999 32.5H53.9999V35.5H56.9999V32.5ZM62.8826 32.5H65.8826V29.5H62.8826V32.5ZM62.8826 47.5V50.5H65.8826V47.5H62.8826ZM56.9999 47.5V44.5H53.9999V47.5H56.9999ZM56.9999 56.8964L58.4999 59.4945L59.9999 58.6284V56.8964H56.9999ZM45.4999 63.5359H42.4999V68.7321L46.9999 66.134L45.4999 63.5359ZM45.4999 61H48.4999V58H45.4999V61ZM33.4999 61V58H30.4999V61H33.4999ZM33.4999 63.5359L31.9999 66.134L36.4999 68.7321V63.5359H33.4999ZM21.9999 56.8964H18.9999V58.6284L20.4999 59.4945L21.9999 56.8964ZM21.9999 47.5H24.9999V44.5H21.9999L21.9999 47.5ZM16.1172 47.5H13.1172V50.5H16.1172L16.1172 47.5ZM16.1172 32.5V29.5H13.1172L13.1172 32.5H16.1172ZM18.9999 23.1036L18.9999 32.5H24.9999V23.1036H18.9999ZM31.9999 13.866L20.4999 20.5056L23.4999 25.7017L34.9999 19.0622L31.9999 13.866ZM36.4999 19V16.4641H30.4999V19H36.4999ZM45.4999 16H33.4999V22H45.4999V16ZM42.4999 16.4641V19L48.4999 19V16.4641H42.4999ZM58.4999 20.5056L46.9999 13.866L43.9999 19.0622L55.4999 25.7017L58.4999 20.5056ZM59.9999 32.5V23.1036H53.9999V32.5H59.9999ZM62.8826 29.5H56.9999V35.5H62.8826V29.5ZM65.8826 47.5V32.5H59.8826L59.8826 47.5H65.8826ZM56.9999 50.5H62.8826V44.5H56.9999V50.5ZM59.9999 56.8964V47.5H53.9999V56.8964H59.9999ZM46.9999 66.134L58.4999 59.4945L55.4999 54.2983L43.9999 60.9378L46.9999 66.134ZM42.4999 61V63.5359H48.4999V61H42.4999ZM33.4999 64H45.4999V58L33.4999 58V64ZM36.4999 63.5359V61H30.4999V63.5359H36.4999ZM20.4999 59.4945L31.9999 66.134L34.9999 60.9378L23.4999 54.2983L20.4999 59.4945ZM18.9999 47.5L18.9999 56.8964H24.9999V47.5H18.9999ZM16.1172 50.5H21.9999L21.9999 44.5H16.1172L16.1172 50.5ZM13.1172 32.5L13.1172 47.5H19.1172V32.5H13.1172ZM21.9999 29.5H16.1172V35.5H21.9999L21.9999 29.5Z"
          fill="currentColor"
        />
        <rect
          x="33.5"
          y="7"
          width="12"
          height="12"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="33.5"
          y="61"
          width="12"
          height="12"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="10"
          y="20.5"
          width="12"
          height="12"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="10"
          y="47.5"
          width="12"
          height="12"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="57"
          y="20.5"
          width="12"
          height="12"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="57"
          y="47.5"
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
          d="M21.9999 23.1036L20.9999 21.3716L19.9999 21.9489V23.1036H21.9999ZM21.9999 32.5V34.5H23.9999V32.5H21.9999ZM33.4999 16.4641H35.4999V13L32.4999 14.7321L33.4999 16.4641ZM33.4999 19H31.4999V21H33.4999V19ZM45.4999 19V21L47.4999 21V19H45.4999ZM45.4999 16.4641L46.4999 14.7321L43.4999 13V16.4641H45.4999ZM56.9999 23.1036H58.9999V21.9489L57.9999 21.3716L56.9999 23.1036ZM56.9999 32.5H54.9999V34.5H56.9999V32.5ZM62.8826 32.5H64.8826V30.5H62.8826V32.5ZM62.8826 47.5V49.5H64.8826V47.5H62.8826ZM56.9999 47.5V45.5H54.9999V47.5H56.9999ZM56.9999 56.8964L57.9999 58.6284L58.9999 58.0511V56.8964H56.9999ZM45.4999 63.5359H43.4999V67L46.4999 65.268L45.4999 63.5359ZM45.4999 61H47.4999V59H45.4999V61ZM33.4999 61V59H31.4999V61H33.4999ZM33.4999 63.5359L32.4999 65.268L35.4999 67V63.5359H33.4999ZM21.9999 56.8964H19.9999V58.0511L20.9999 58.6284L21.9999 56.8964ZM21.9999 47.5H23.9999L23.9999 45.5H21.9999L21.9999 47.5ZM16.1172 47.5H14.1172V49.5H16.1172V47.5ZM16.1172 32.5V30.5H14.1172L14.1172 32.5H16.1172ZM19.9999 23.1036L19.9999 32.5H23.9999L23.9999 23.1036H19.9999ZM32.4999 14.7321L20.9999 21.3716L22.9999 24.8357L34.4999 18.1962L32.4999 14.7321ZM35.4999 19V16.4641H31.4999V19H35.4999ZM45.4999 17H33.4999V21H45.4999V17ZM43.4999 16.4641V19H47.4999V16.4641H43.4999ZM57.9999 21.3716L46.4999 14.7321L44.4999 18.1962L55.9999 24.8357L57.9999 21.3716ZM58.9999 32.5V23.1036H54.9999V32.5H58.9999ZM62.8826 30.5H56.9999V34.5H62.8826V30.5ZM64.8826 47.5V32.5H60.8826L60.8826 47.5H64.8826ZM56.9999 49.5H62.8826V45.5H56.9999V49.5ZM58.9999 56.8964V47.5H54.9999V56.8964H58.9999ZM46.4999 65.268L57.9999 58.6284L55.9999 55.1643L44.4999 61.8039L46.4999 65.268ZM43.4999 61V63.5359H47.4999V61H43.4999ZM33.4999 63L45.4999 63V59L33.4999 59V63ZM35.4999 63.5359V61H31.4999V63.5359H35.4999ZM20.9999 58.6284L32.4999 65.268L34.4999 61.8039L22.9999 55.1643L20.9999 58.6284ZM19.9999 47.5L19.9999 56.8964H23.9999V47.5H19.9999ZM16.1172 49.5H21.9999L21.9999 45.5H16.1172V49.5ZM14.1172 32.5L14.1172 47.5H18.1172V32.5H14.1172ZM21.9999 30.5H16.1172V34.5H21.9999V30.5Z"
          fill="#6FCF97"
        />
        <rect
          x="33.5"
          y="7"
          width="12"
          height="12"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="33.5"
          y="61"
          width="12"
          height="12"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="10"
          y="20.5"
          width="12"
          height="12"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="10"
          y="47.5"
          width="12"
          height="12"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="57"
          y="20.5"
          width="12"
          height="12"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="57"
          y="47.5"
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
          d="M22.5 32.5V23.1036L34 16.4641V19H46V16.4641L57.5 23.1036V32.5H63.3827V47.5H57.5V56.8964L46 63.5359V61H34V63.5359L22.5 56.8964V47.5H16.6173V32.5H22.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M34 7H46V19H34V7Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M34 61H46V73H34V61Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M10.5 20.5H22.5V32.5H10.5V20.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M10.5 47.5L22.5 47.5V59.5H10.5V47.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M57.5 20.5H69.5V32.5H57.5V20.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M57.5 47.5L69.5 47.5V59.5H57.5V47.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M22.5 32.5V23.1036L34 16.4641V19M22.5 32.5H16.6173V47.5H22.5M22.5 32.5V20.5H10.5V32.5H22.5ZM34 19H46M34 19V7H46V19M46 19V16.4641L57.5 23.1036V32.5M57.5 32.5H63.3827V47.5H57.5M57.5 32.5H69.5V20.5H57.5V32.5ZM57.5 47.5V56.8964L46 63.5359V61M57.5 47.5L69.5 47.5V59.5H57.5V47.5ZM46 61H34M46 61V73H34V61M34 61V63.5359L22.5 56.8964V47.5M22.5 47.5L10.5 47.5V59.5H22.5V47.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M31.5 7C31.5 5.89543 32.3954 5 33.5 5H45.5C46.6046 5 47.5 5.89543 47.5 7V15.3094L55.1542 19.7286C55.4561 19.007 56.1689 18.5 57 18.5H69C70.1046 18.5 71 19.3954 71 20.5V32.5C71 33.6046 70.1046 34.5 69 34.5H64.8827V45.5H69C70.1046 45.5 71 46.3954 71 47.5V59.5C71 60.6046 70.1046 61.5 69 61.5H57C56.1689 61.5 55.4561 60.993 55.1542 60.2714L47.5 64.6906V73C47.5 74.1046 46.6046 75 45.5 75H33.5C32.3954 75 31.5 74.1046 31.5 73V64.6906L23.8458 60.2714C23.5439 60.993 22.8311 61.5 22 61.5H10C8.89543 61.5 8 60.6046 8 59.5V47.5C8 46.3954 8.89543 45.5 10 45.5H14.1173V34.5H10C8.89543 34.5 8 33.6046 8 32.5V20.5C8 19.3954 8.89543 18.5 10 18.5H22C22.8311 18.5 23.5439 19.007 23.8458 19.7286L31.5 15.3094V7ZM55 55.7417V45.5H60.8827V34.5H55V24.2583L47.5 19.9282V21H31.5V19.9282L24 24.2583V34.5H18.1173V45.5H24V55.7417L31.5 60.0718V59H47.5V60.0718L55 55.7417ZM59 57.5H67V49.5L59 49.5V57.5ZM59 22.5H67V30.5H59V22.5ZM20 57.5V49.5L12 49.5V57.5H20ZM12 22.5H20V30.5H12V22.5ZM43.5 63H35.5V71H43.5V63ZM43.5 9V17H35.5V9H43.5Z"
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
