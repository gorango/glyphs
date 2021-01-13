
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
        <circle
          cx="38.875"
          cy="29.875"
          r="21.375"
          fill="url(#paint0_linearyeAG)"
        />
        <circle
          cx="58"
          cy="42.25"
          r="18"
          fill="url(#paint1_linearyeAG)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M55.4529 59.8225C55.6477 58.8704 55.75 57.8847 55.75 56.875C55.75 56.875 55.75 56.875 55.75 56.875C55.75 48.7978 49.2022 42.25 41.125 42.25C33.0478 42.25 26.5 48.7978 26.5 56.875C26.5 64.9522 33.0478 71.5 41.125 71.5C48.1925 71.5 54.0891 66.4868 55.4529 59.8225Z"
          fill="url(#paint2_linearyeAG)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.7991 64.75C27.3437 62.4768 26.5 59.7745 26.5 56.875V24.287C26.7467 24.2625 26.9969 24.25 27.25 24.25H41.5C45.6421 24.25 49 27.6079 49 31.75V57.25C49 61.3921 45.6421 64.75 41.5 64.75H28.7991Z"
          fill="black"
          fill-opacity="0.3"
        />
        <rect
          x="4"
          y="19.75"
          width="40.5"
          height="40.5"
          rx="5"
          fill="url(#paint3_linearyeAG)"
        />
        <rect
          x="4"
          y="19.75"
          width="40.5"
          height="40.5"
          rx="5"
          fill="url(#paint4_linearyeAG)"
        />
        <path
          d="M33.25 44.7765C33.25 41.2884 30.9104 39.7486 26.0425 37.9574C22.2311 36.5433 21.3255 36.1348 21.3255 34.7835C21.3255 33.6208 22.4575 32.8352 24.3821 32.8352C26.3443 32.8352 28.1934 33.4951 30.2689 34.6264L32.3821 30.8869C30.1557 29.5042 27.5142 28.75 24.3066 28.75C19.4009 28.75 15.8915 31.264 15.8915 35.0978C15.8915 39.0258 18.684 40.2828 23.3632 41.9483C27.0991 43.2682 27.816 43.9281 27.816 45.0908C27.816 46.4735 26.4953 47.1648 24.4198 47.1648C21.967 47.1648 19.816 46.3163 17.6651 44.9337L15.25 48.5161C17.8915 50.3387 21.1745 51.25 24.533 51.25C29.5896 51.25 33.25 48.8617 33.25 44.7765Z"
          fill="white"
        />
        <defs><linearGradient id="paint0_linearyeAG" x1="17.5" y1="29.875" x2="63.8125" y2="29.875" gradientUnits="userSpaceOnUse"><stop stop-color="#103A3B"/><stop offset="1" stop-color="#116B6E"/></linearGradient><linearGradient id="paint1_linearyeAG" x1="44.5" y1="33.25" x2="76" y2="51.25" gradientUnits="userSpaceOnUse"><stop stop-color="#1D9097"/><stop offset="1" stop-color="#29BBC2"/></linearGradient><linearGradient id="paint2_linearyeAG" x1="31" y1="52.375" x2="55.75" y2="63.625" gradientUnits="userSpaceOnUse"><stop stop-color="#28A6B5"/><stop offset="1" stop-color="#31D6EC"/></linearGradient><linearGradient id="paint3_linearyeAG" x1="4" y1="40" x2="47.875" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#105557"/><stop offset="1" stop-color="#116B6E"/></linearGradient><linearGradient id="paint4_linearyeAG" x1="4" y1="40" x2="47.875" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#105557"/><stop offset="1" stop-color="#116B6E"/></linearGradient></defs>
      </template>
      <template v-if="variant === 'solid'">
        <path
          d="M22.8315 15.75H39.4998C44.4704 15.75 48.4998 19.7795 48.4998 24.75V55.25C48.4998 60.2206 44.4704 64.25 39.4998 64.25H28.4928C31.0303 68.5869 35.7374 71.5 41.1248 71.5C48.1068 71.5 53.946 66.6075 55.4012 60.0638C56.2497 60.1865 57.1173 60.25 57.9998 60.25C67.941 60.25 75.9998 52.1911 75.9998 42.25C75.9998 32.8206 68.7492 25.0846 59.5191 24.3132C57.0712 15.2049 48.756 8.5 38.8748 8.5C32.4841 8.5 26.7485 11.3046 22.8315 15.75Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 19.75C6.23858 19.75 4 21.9886 4 24.75V55.25C4 58.0114 6.23858 60.25 9 60.25H39.5C42.2614 60.25 44.5 58.0114 44.5 55.25V24.75C44.5 21.9886 42.2614 19.75 39.5 19.75H9ZM26.0425 37.9574C30.9104 39.7486 33.25 41.2884 33.25 44.7765C33.25 48.8617 29.5896 51.25 24.533 51.25C21.1745 51.25 17.8915 50.3387 15.25 48.5161L17.6651 44.9337C19.816 46.3163 21.967 47.1648 24.4198 47.1648C26.4953 47.1648 27.816 46.4735 27.816 45.0908C27.816 43.9281 27.0991 43.2682 23.3632 41.9483C18.684 40.2828 15.8915 39.0258 15.8915 35.0978C15.8915 31.264 19.4009 28.75 24.3066 28.75C27.5142 28.75 30.1557 29.5042 32.3821 30.8869L30.2689 34.6264C28.1934 33.4951 26.3443 32.8352 24.3821 32.8352C22.4575 32.8352 21.3255 33.6208 21.3255 34.7835C21.3255 36.1348 22.2311 36.5433 26.0425 37.9574Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M22.8315 15.75H39.4998C44.4704 15.75 48.4998 19.7795 48.4998 24.75V55.25C48.4998 60.2206 44.4704 64.25 39.4998 64.25H28.4928C31.0303 68.5869 35.7374 71.5 41.1248 71.5C48.1068 71.5 53.946 66.6075 55.4012 60.0638C56.2497 60.1865 57.1173 60.25 57.9998 60.25C67.941 60.25 75.9998 52.1911 75.9998 42.25C75.9998 32.8206 68.7492 25.0846 59.5191 24.3132C57.0712 15.2049 48.756 8.5 38.8748 8.5C32.4841 8.5 26.7485 11.3046 22.8315 15.75Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 19.75C6.23858 19.75 4 21.9886 4 24.75V55.25C4 58.0114 6.23858 60.25 9 60.25H39.5C42.2614 60.25 44.5 58.0114 44.5 55.25V24.75C44.5 21.9886 42.2614 19.75 39.5 19.75H9ZM26.0425 37.9574C30.9104 39.7486 33.25 41.2884 33.25 44.7765C33.25 48.8617 29.5896 51.25 24.533 51.25C21.1745 51.25 17.8915 50.3387 15.25 48.5161L17.6651 44.9337C19.816 46.3163 21.967 47.1648 24.4198 47.1648C26.4953 47.1648 27.816 46.4735 27.816 45.0908C27.816 43.9281 27.0991 43.2682 23.3632 41.9483C18.684 40.2828 15.8915 39.0258 15.8915 35.0978C15.8915 31.264 19.4009 28.75 24.3066 28.75C27.5142 28.75 30.1557 29.5042 32.3821 30.8869L30.2689 34.6264C28.1934 33.4951 26.3443 32.8352 24.3821 32.8352C22.4575 32.8352 21.3255 33.6208 21.3255 34.7835C21.3255 36.1348 22.2311 36.5433 26.0425 37.9574Z"
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
