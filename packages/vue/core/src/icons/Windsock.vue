
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
          d="M13 64V16"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M19 16L67 22V42L19 48V16Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M13 22H19"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M13 42H19"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M27 17V47"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M43 19V45"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M59 21V43"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M13 16L13 64"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M13 22H19"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M13 42H19"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.0305 16.5038L25 16L25 48L29.0305 47.4962C29.0104 47.3336 29 47.168 29 47L29 17C29 16.832 29.0104 16.6664 29.0305 16.5038ZM37 46.5L45.0305 45.4962C45.0104 45.3336 45 45.168 45 45V19C45 18.832 45.0104 18.6664 45.0305 18.5038L37 17.5V46.5ZM53 19.5L53 44.5L61.0305 43.4962C61.0104 43.3336 61 43.168 61 43L61 21C61 20.832 61.0104 20.6664 61.0305 20.5038L53 19.5ZM69 21.5V42.5L73 42V22L69 21.5Z"
          fill="currentColor"
        />
        <path
          d="M25 16L25.2481 14.0154C24.6788 13.9443 24.1065 14.121 23.6764 14.5006C23.2463 14.8803 23 15.4263 23 16H25ZM29.0305 16.5038L31.0153 16.7494C31.1508 15.6542 30.3736 14.6561 29.2785 14.5193L29.0305 16.5038ZM25 48H23C23 48.5737 23.2463 49.1197 23.6764 49.4994C24.1065 49.879 24.6788 50.0557 25.2481 49.9846L25 48ZM29.0305 47.4962L29.2785 49.4807C30.3736 49.3439 31.1508 48.3458 31.0153 47.2506L29.0305 47.4962ZM45.0305 45.4962L45.2785 47.4807C46.3736 47.3439 47.1508 46.3458 47.0153 45.2506L45.0305 45.4962ZM37 46.5H35C35 47.0737 35.2463 47.6197 35.6764 47.9994C36.1065 48.379 36.6788 48.5557 37.2481 48.4846L37 46.5ZM45.0305 18.5038L47.0153 18.7494C47.1508 17.6542 46.3736 16.6561 45.2785 16.5193L45.0305 18.5038ZM37 17.5L37.2481 15.5154C36.6788 15.4443 36.1065 15.621 35.6764 16.0006C35.2463 16.3803 35 16.9263 35 17.5H37ZM53 19.5L53.2481 17.5154C52.6788 17.4443 52.1065 17.621 51.6764 18.0006C51.2463 18.3803 51 18.9263 51 19.5H53ZM53 44.5L51 44.5C51 45.0737 51.2463 45.6197 51.6764 45.9994C52.1065 46.379 52.6788 46.5557 53.2481 46.4846L53 44.5ZM61.0305 43.4962L61.2785 45.4807C62.3736 45.3439 63.1509 44.3458 63.0153 43.2506L61.0305 43.4962ZM61.0305 20.5038L63.0153 20.7494C63.1509 19.6542 62.3736 18.6561 61.2785 18.5193L61.0305 20.5038ZM69 21.5L69.2481 19.5154C68.6788 19.4443 68.1065 19.621 67.6764 20.0006C67.2463 20.3803 67 20.9263 67 21.5H69ZM69 42.5H67C67 43.0737 67.2463 43.6197 67.6764 43.9994C68.1065 44.379 68.6788 44.5557 69.2481 44.4846L69 42.5ZM73 42L73.2481 43.9846C74.2489 43.8594 75 43.0086 75 42L73 42ZM73 22H75C75 20.9914 74.2489 20.1406 73.2481 20.0154L73 22ZM24.7519 17.9846L28.7824 18.4884L29.2785 14.5193L25.2481 14.0154L24.7519 17.9846ZM27 48L27 16H23L23 48H27ZM28.7824 45.5116L24.7519 46.0154L25.2481 49.9846L29.2785 49.4807L28.7824 45.5116ZM31.0153 47.2506C31.0053 47.1693 31 47.0857 31 47H27C27 47.2503 27.0154 47.4979 27.0456 47.7418L31.0153 47.2506ZM31 47L31 17L27 17L27 47H31ZM31 17C31 16.9143 31.0053 16.8307 31.0153 16.7494L27.0456 16.2582C27.0154 16.5021 27 16.7497 27 17L31 17ZM44.7824 43.5116L36.7519 44.5154L37.2481 48.4846L45.2785 47.4807L44.7824 43.5116ZM47.0153 45.2506C47.0053 45.1693 47 45.0857 47 45H43C43 45.2503 43.0154 45.4979 43.0456 45.7418L47.0153 45.2506ZM47 45V19H43V45H47ZM47 19C47 18.9143 47.0053 18.8307 47.0153 18.7494L43.0456 18.2582C43.0154 18.5021 43 18.7497 43 19H47ZM36.7519 19.4846L44.7824 20.4884L45.2785 16.5193L37.2481 15.5154L36.7519 19.4846ZM35 17.5L35 46.5H39V17.5H35ZM51 19.5V44.5L55 44.5L55 19.5H51ZM60.7824 41.5116L52.7519 42.5154L53.2481 46.4846L61.2785 45.4807L60.7824 41.5116ZM63.0153 43.2506C63.0053 43.1693 63 43.0857 63 43H59C59 43.2503 59.0154 43.4979 59.0456 43.7418L63.0153 43.2506ZM63 43L63 21H59L59 43H63ZM63 21C63 20.9143 63.0053 20.8307 63.0153 20.7494L59.0456 20.2582C59.0154 20.5021 59 20.7497 59 21H63ZM52.7519 21.4846L60.7824 22.4884L61.2785 18.5193L53.2481 17.5154L52.7519 21.4846ZM67 21.5V42.5H71V21.5H67ZM72.7519 40.0154L68.7519 40.5154L69.2481 44.4846L73.2481 43.9846L72.7519 40.0154ZM71 22V42L75 42V22H71ZM68.7519 23.4846L72.7519 23.9846L73.2481 20.0154L69.2481 19.5154L68.7519 23.4846Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M19 16L67 22V42L19 48L19 16Z"
          fill="#F2F2F2"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M13 16L13 64"
          stroke="#4F4F4F"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M13 22H19"
          stroke="#4F4F4F"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M13 42H19"
          stroke="#4F4F4F"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23 47.5L23 16.5L31 17.5L31 46.5L23 47.5ZM47 44.5L39 45.5L39 18.5L47 19.5V44.5ZM63 42.5L55 43.5V20.5L63 21.5L63 42.5Z"
          fill="#EB5757"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M19 16L67 22V42L19 48V16Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M13 64V16M13 22H19M13 42H19M27 47V17M43 45V19M59 21V43M19 16L67 22V42L19 48V16Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.6764 14.5007C18.1065 14.121 18.6788 13.9443 19.2481 14.0155L27.2217 15.0122C27.241 15.0143 27.2602 15.0167 27.2794 15.0194L43.2217 17.0122C43.241 17.0143 43.2603 17.0167 43.2794 17.0194L59.2217 19.0122C59.241 19.0143 59.2602 19.0167 59.2794 19.0194L67.2481 20.0155C68.2489 20.1406 69 20.9914 69 22V42C69 43.0087 68.2489 43.8595 67.2481 43.9846L59.2794 44.9807C59.2602 44.9833 59.241 44.9857 59.2218 44.9879L43.2794 46.9806C43.2603 46.9833 43.241 46.9857 43.2217 46.9879L27.2794 48.9806C27.2603 48.9833 27.241 48.9857 27.2217 48.9879L19.2481 49.9846C18.6788 50.0557 18.1065 49.879 17.6764 49.4994C17.2463 49.1197 17 48.5737 17 48V44H15V64C15 65.1046 14.1046 66 13 66C11.8954 66 11 65.1046 11 64V16C11 14.8954 11.8954 14 13 14C14.1046 14 15 14.8954 15 16V20H17V16C17 15.4263 17.2463 14.8803 17.6764 14.5007ZM29 44.7344L41 43.2344V20.7656L29 19.2656V44.7344ZM25 18.7656V45.2344L21 45.7344V18.2656L25 18.7656ZM45 21.2656V42.7344L57 41.2344V22.7656L45 21.2656ZM61 23.2656V40.7344L65 40.2344V23.7656L61 23.2656ZM15 40H17V24H15V40Z"
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
