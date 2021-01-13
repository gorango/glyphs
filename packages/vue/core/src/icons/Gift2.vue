
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
          d="M18 35H62V63H18V35Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M18 49H62"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M40 63V35"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M24.8565 26.2584C27.0983 22.2231 32.9018 22.2231 35.1436 26.2584L39.8168 34.6702C39.899 34.8182 39.7921 35 39.6228 35H30C25.5136 35 22.6776 30.1803 24.8565 26.2584Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M55.1435 26.2584C52.9017 22.2231 47.0982 22.2231 44.8564 26.2584L40.1832 34.6702C40.101 34.8182 40.2079 35 40.3772 35H50C54.4864 35 57.3224 30.1803 55.1435 26.2584Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M38 35H18V47H38V35Z"
          fill="currentColor"
        />
        <path
          d="M38 51H18V63H38V51Z"
          fill="currentColor"
        />
        <path
          d="M42 63V51H62V63H42Z"
          fill="currentColor"
        />
        <path
          d="M42 47V35H62V47H42Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.1081 25.2871C26.112 19.8802 33.888 19.8802 36.8919 25.2871L40 30.8818L43.1081 25.2871C46.112 19.8802 53.888 19.8802 56.8919 25.2871C58.3273 27.8708 58.1384 30.7453 56.8609 33H62C63.1046 33 64 33.8954 64 35V63C64 64.1046 63.1046 65 62 65H18C16.8954 65 16 64.1046 16 63V35C16 33.8954 16.8954 33 18 33H23.1391C21.8616 30.7453 21.6727 27.8708 23.1081 25.2871ZM30 33H36.601L33.3953 27.2297C31.9154 24.566 28.0846 24.566 26.6047 27.2297C25.1665 29.8185 27.0385 33 30 33ZM43.399 33H50C52.9615 33 54.8335 29.8185 53.3953 27.2297C51.9154 24.566 48.0846 24.566 46.6047 27.2297L43.399 33ZM20 37V61H60V37H20Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <rect
          x="18"
          y="35"
          width="44"
          height="28"
          fill="#9B51E0"
          stroke="#9B51E0"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M18 49H62"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M40 35V63"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M24.8564 26.2584C27.0983 22.2231 32.9017 22.2231 35.1436 26.2584L39.8168 34.6702C39.899 34.8182 39.792 35 39.6228 35V35H30C25.5135 35 22.6776 30.1803 24.8564 26.2584V26.2584Z"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M55.1436 26.2584C52.9017 22.2231 47.0983 22.2231 44.8564 26.2584L40.1832 34.6702C40.101 34.8182 40.208 35 40.3772 35V35H50C54.4865 35 57.3224 30.1803 55.1436 26.2584V26.2584Z"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M18 35H62V63H18V35Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M24.8564 26.2584C27.0983 22.2231 32.9017 22.2231 35.1436 26.2584L39.8168 34.6702C39.899 34.8182 39.792 35 39.6228 35H30C25.5135 35 22.6776 30.1803 24.8564 26.2584Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M55.1436 26.2584C52.9017 22.2231 47.0983 22.2231 44.8564 26.2584L40.1832 34.6702C40.101 34.8182 40.208 35 40.3772 35H50C54.4865 35 57.3224 30.1803 55.1436 26.2584Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M18 49H62M40 63V35M18 35H62V63H18V35ZM39.6228 35H30C25.5135 35 22.6776 30.1803 24.8564 26.2584C27.0983 22.2231 32.9017 22.2231 35.1436 26.2584L39.8168 34.6702C39.899 34.8182 39.792 35 39.6228 35ZM40.3772 35H50C54.4865 35 57.3224 30.1803 55.1436 26.2584C52.9017 22.2231 47.0983 22.2231 44.8564 26.2584L40.1832 34.6702C40.101 34.8182 40.208 35 40.3772 35Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.1081 25.2871C26.112 19.8802 33.888 19.8802 36.8919 25.2871L40 30.8817L43.1081 25.2871C46.112 19.8802 53.888 19.8802 56.8919 25.2871C58.3273 27.8708 58.1384 30.7453 56.8609 33H62C63.1046 33 64 33.8954 64 35V63C64 64.1046 63.1046 65 62 65H18C16.8954 65 16 64.1046 16 63V35C16 33.8954 16.8954 33 18 33H23.1391C21.8616 30.7453 21.6727 27.8708 23.1081 25.2871ZM42 61H60V51H42V61ZM38 51V61H20V51H38ZM42 47H60V37H42V47ZM38 37V47H20V37H38ZM30 33H36.601L33.3953 27.2297C31.9154 24.566 28.0846 24.566 26.6047 27.2297C25.1665 29.8185 27.0385 33 30 33ZM43.399 33H50C52.9615 33 54.8335 29.8185 53.3953 27.2297C51.9154 24.566 48.0846 24.566 46.6047 27.2297L43.399 33Z"
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
