
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
          d="M24 32.5C24 32.8201 23.8728 33.1272 23.6464 33.3536L20.5 36.5C20.1799 36.8201 20 37.2544 20 37.7071V42.5C20 42.7761 20.2239 43 20.5 43H23.5C23.7761 43 24 43.2239 24 43.5V47.5C24 47.8201 23.8728 48.1272 23.6464 48.3536L20.5 51.5C20.1799 51.8201 20 52.2544 20 52.7071V65C20 66.6569 21.3431 68 23 68H57C58.6569 68 60 66.6569 60 65V15C60 13.3431 58.6569 12 57 12H27C25.3431 12 24 13.3431 24 15V32.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M30 24V18"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M38 24V18"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M46 24V18"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M54 24V18"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 32.5C24 32.8201 23.8728 33.1272 23.6464 33.3536L20.5 36.5C20.1799 36.8201 20 37.2544 20 37.7071V42.5C20 42.7761 20.2239 43 20.5 43H23.5C23.7761 43 24 43.2239 24 43.5V47.5C24 47.8201 23.8728 48.1272 23.6464 48.3536L20.5 51.5C20.1799 51.8201 20 52.2544 20 52.7071V65C20 66.6569 21.3431 68 23 68H57C58.6569 68 60 66.6569 60 65V15C60 13.3431 58.6569 12 57 12L27 12C25.3431 12 24 13.3431 24 15V32.5ZM30 26C28.8954 26 28 25.1046 28 24V18C28 16.8954 28.8954 16 30 16C31.1046 16 32 16.8954 32 18V24C32 25.1046 31.1046 26 30 26ZM36 24C36 25.1046 36.8954 26 38 26C39.1046 26 40 25.1046 40 24V18C40 16.8954 39.1046 16 38 16C36.8954 16 36 16.8954 36 18V24ZM54 26C52.8954 26 52 25.1046 52 24V18C52 16.8954 52.8954 16 54 16C55.1046 16 56 16.8954 56 18V24C56 25.1046 55.1046 26 54 26ZM44 24C44 25.1046 44.8954 26 46 26C47.1046 26 48 25.1046 48 24V18C48 16.8954 47.1046 16 46 16C44.8954 16 44 16.8954 44 18V24Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 32.5C24 32.8201 23.8728 33.1272 23.6464 33.3536L20.5 36.5C20.1799 36.8201 20 37.2544 20 37.7071V42.5C20 42.7761 20.2239 43 20.5 43H23.5C23.7761 43 24 43.2239 24 43.5V47.5C24 47.8201 23.8728 48.1272 23.6464 48.3536L20.5 51.5C20.1799 51.8201 20 52.2544 20 52.7071V65C20 66.6569 21.3431 68 23 68H57C58.6569 68 60 66.6569 60 65V15C60 13.3431 58.6569 12 57 12H27C25.3431 12 24 13.3431 24 15V32.5Z"
          fill="#828282"
        />
        <path
          d="M23.6464 33.3536L25.0607 34.7678L23.6464 33.3536ZM22.2322 31.9393L19.0858 35.0858L21.9142 37.9142L25.0607 34.7678L22.2322 31.9393ZM18 37.7071V42.5H22V37.7071H18ZM20.5 45H23.5V41H20.5V45ZM22 43.5V47.5H26V43.5H22ZM22.2322 46.9393L19.0858 50.0858L21.9142 52.9142L25.0607 49.7678L22.2322 46.9393ZM18 52.7071V65H22V52.7071H18ZM23 70H57V66H23V70ZM62 65V15H58V65H62ZM57 10H27V14H57V10ZM22 15V32.5H26V15H22ZM57 70C59.7614 70 62 67.7614 62 65H58C58 65.5523 57.5523 66 57 66V70ZM19.0858 50.0858C18.3906 50.781 18 51.7239 18 52.7071H22C22 52.7848 21.9691 52.8593 21.9142 52.9142L19.0858 50.0858ZM23.5 45C22.6716 45 22 44.3284 22 43.5H26C26 42.1193 24.8807 41 23.5 41V45ZM22 47.5C22 47.2897 22.0835 47.088 22.2322 46.9393L25.0607 49.7678C25.6621 49.1663 26 48.3506 26 47.5H22ZM27 10C24.2386 10 22 12.2386 22 15H26C26 14.4477 26.4477 14 27 14V10ZM18 42.5C18 43.8807 19.1193 45 20.5 45V41C21.3284 41 22 41.6716 22 42.5H18ZM62 15C62 12.2386 59.7614 10 57 10V14C57.5523 14 58 14.4477 58 15H62ZM19.0858 35.0858C18.3906 35.781 18 36.7239 18 37.7071H22C22 37.7848 21.9691 37.8593 21.9142 37.9142L19.0858 35.0858ZM18 65C18 67.7614 20.2386 70 23 70V66C22.4477 66 22 65.5523 22 65H18ZM25.0607 34.7678C25.6621 34.1663 26 33.3506 26 32.5H22C22 32.2897 22.0835 32.088 22.2322 31.9393L25.0607 34.7678Z"
          fill="#828282"
        />
        <path
          d="M30 24V18"
          stroke="#F2C94C"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M38 24V18"
          stroke="#F2C94C"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M46 24V18"
          stroke="#F2C94C"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M54 24V18"
          stroke="#F2C94C"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M24 32.5C24 32.8201 23.8728 33.1272 23.6464 33.3536L20.5 36.5C20.1799 36.8201 20 37.2544 20 37.7071V42.5C20 42.7761 20.2239 43 20.5 43H23.5C23.7761 43 24 43.2239 24 43.5V47.5C24 47.8201 23.8728 48.1272 23.6464 48.3536L20.5 51.5C20.1799 51.8201 20 52.2544 20 52.7071V65C20 66.6569 21.3431 68 23 68H57C58.6569 68 60 66.6569 60 65V15C60 13.3431 58.6569 12 57 12H27C25.3431 12 24 13.3431 24 15V32.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M30 24V18M38 24V18M46 24V18M54 24V18M20.5 36.5L23.6464 33.3536C23.8728 33.1272 24 32.8201 24 32.5V15C24 13.3431 25.3431 12 27 12H57C58.6569 12 60 13.3431 60 15V65C60 66.6569 58.6569 68 57 68H23C21.3431 68 20 66.6569 20 65V52.7071C20 52.2544 20.1799 51.8201 20.5 51.5L23.6464 48.3536C23.8728 48.1272 24 47.8201 24 47.5V43.5C24 43.2239 23.7761 43 23.5 43H20.5C20.2239 43 20 42.7761 20 42.5V37.7071C20 37.2544 20.1799 36.8201 20.5 36.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M46 26C44.8954 26 44 25.1046 44 24V18C44 16.8954 44.8954 16 46 16C47.1046 16 48 16.8954 48 18V24C48 25.1046 47.1046 26 46 26Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M52 24C52 25.1046 52.8954 26 54 26C55.1046 26 56 25.1046 56 24V18C56 16.8954 55.1046 16 54 16C52.8954 16 52 16.8954 52 18V24Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M38 26C36.8954 26 36 25.1046 36 24V18C36 16.8954 36.8954 16 38 16C39.1046 16 40 16.8954 40 18V24C40 25.1046 39.1046 26 38 26Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M28 24C28 25.1046 28.8954 26 30 26C31.1046 26 32 25.1046 32 24V18C32 16.8954 31.1046 16 30 16C28.8954 16 28 16.8954 28 18V24Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 15C22 12.2386 24.2386 10 27 10L57 10C59.7614 10 62 12.2386 62 15V65C62 67.7614 59.7614 70 57 70H23C20.2386 70 18 67.7614 18 65V52.7071C18 51.7239 18.3906 50.781 19.0858 50.0858L22 47.1716V45H20.5C19.1193 45 18 43.8807 18 42.5V37.7071C18 36.7239 18.3906 35.781 19.0858 35.0858L22 32.1716V15ZM27 14C26.4477 14 26 14.4477 26 15V32.5C26 33.3506 25.6621 34.1663 25.0607 34.7678L22 37.8284V41H23.5C24.8807 41 26 42.1193 26 43.5V47.5C26 48.3506 25.6621 49.1663 25.0607 49.7678L22 52.8284V65C22 65.5523 22.4477 66 23 66H57C57.5523 66 58 65.5523 58 65V15C58 14.4477 57.5523 14 57 14H27Z"
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
