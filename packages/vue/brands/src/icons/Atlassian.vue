
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
      <template v-if="variant === 'color'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.7964 35.2094C27.4338 34.7347 26.8497 34.4841 26.2562 34.5486C25.6626 34.6131 25.1459 34.9834 24.8937 35.525L10.1856 64.9529C9.91313 65.4982 9.94225 66.1458 10.2625 66.6644C10.5828 67.183 11.1486 67.4987 11.7578 67.4987H32.2382C32.9083 67.5143 33.5247 67.1331 33.8104 66.5262C38.2283 57.3907 35.5509 43.5002 27.7964 35.2094Z"
          fill="url(#paint0_linearjmW4)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M38.5837 8.44405C31.1279 19.9242 30.2674 34.486 36.3191 46.7655L46.1929 66.527C46.4906 67.123 47.0993 67.4995 47.7651 67.4995H68.2418C68.851 67.4995 69.4168 67.1838 69.7371 66.6652C70.0574 66.1465 70.0865 65.499 69.814 64.9537C69.814 64.9537 42.266 9.81221 41.5737 8.43301C41.2944 7.86014 40.7122 7.49766 40.0752 7.50001C39.4383 7.50236 38.8588 7.86914 38.5837 8.44405Z"
          fill="#2684FF"
        />
        <defs><linearGradient id="paint0_linearjmW4" x1="35.857" y1="39.7509" x2="15.227" y2="61.8964" gradientUnits="userSpaceOnUse"><stop stop-color="#0052CC"/><stop offset="0.923" stop-color="#2684FF"/></linearGradient></defs>
      </template>
      <template v-if="variant === 'solid'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.7964 35.2094C27.4338 34.7347 26.8497 34.4841 26.2562 34.5486C25.6626 34.6131 25.1459 34.9834 24.8937 35.525L10.1856 64.9529C9.91313 65.4982 9.94225 66.1458 10.2625 66.6644C10.5828 67.183 11.1486 67.4987 11.7578 67.4987H32.2382C32.9083 67.5143 33.5247 67.1331 33.8104 66.5262C38.2283 57.3907 35.5509 43.5002 27.7964 35.2094Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M38.584 8.44405C31.1283 19.9242 30.2678 34.486 36.3195 46.7655L46.1933 66.527C46.491 67.123 47.0997 67.4995 47.7655 67.4995H68.2422C68.8514 67.4995 69.4172 67.1838 69.7374 66.6652C70.0577 66.1465 70.0868 65.499 69.8144 64.9537C69.8144 64.9537 42.2664 9.81221 41.574 8.43301C41.2947 7.86014 40.7125 7.49766 40.0756 7.50001C39.4386 7.50236 38.8591 7.86914 38.584 8.44405Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.7964 35.2094C27.4338 34.7347 26.8497 34.4841 26.2562 34.5486C25.6626 34.6131 25.1459 34.9834 24.8937 35.525L10.1856 64.9529C9.91313 65.4982 9.94225 66.1458 10.2625 66.6644C10.5828 67.183 11.1486 67.4987 11.7578 67.4987H32.2382C32.9083 67.5143 33.5247 67.1331 33.8104 66.5262C38.2283 57.3907 35.5509 43.5002 27.7964 35.2094Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M38.584 8.44405C31.1283 19.9242 30.2678 34.486 36.3195 46.7655L46.1933 66.527C46.491 67.123 47.0997 67.4995 47.7655 67.4995H68.2422C68.8514 67.4995 69.4172 67.1838 69.7374 66.6652C70.0577 66.1465 70.0868 65.499 69.8144 64.9537C69.8144 64.9537 42.2664 9.81221 41.574 8.43301C41.2947 7.86014 40.7125 7.49766 40.0756 7.50001C39.4386 7.50236 38.8591 7.86914 38.584 8.44405Z"
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
  name: 'node_modules/@glyphs/brands',

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
