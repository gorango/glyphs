
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
          d="M20 54H60C61.1046 54 62 53.1046 62 52V50L54 42L48.7826 47.2174L33 30L18 46.3636V52C18 53.1046 18.8954 54 20 54Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M53.835 27.25C55.1747 26.4765 56.8254 26.4765 58.1651 27.25C59.5049 28.0235 60.3302 29.453 60.3302 31C60.3302 32.547 59.5049 33.9765 58.1651 34.75C56.8254 35.5235 55.1747 35.5235 53.835 34.75C52.4952 33.9765 51.6699 32.547 51.6699 31C51.6699 29.453 52.4952 28.0235 53.835 27.25Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M12 26C12 22.6863 14.6863 20 18 20H62C65.3137 20 68 22.6863 68 26V54C68 57.3137 65.3137 60 62 60H18C14.6863 60 12 57.3137 12 54V26Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M33 33.6997L20.5 47.3361V51.5H59.5V51.0355L54 45.5355L50.5504 48.9852C50.0682 49.4673 49.41 49.7316 48.7283 49.7168C48.0466 49.702 47.4005 49.4094 46.9397 48.9067L33 33.6997Z"
          fill="currentColor"
        />
        <path
          d="M55.0849 29.4151C55.6512 29.0881 56.3488 29.0881 56.9151 29.4151C57.4813 29.742 57.8301 30.3462 57.8301 31C57.8301 31.6538 57.4813 32.258 56.9151 32.5849C56.3488 32.9119 55.6512 32.9119 55.0849 32.5849C54.5187 32.258 54.1699 31.6538 54.1699 31C54.1699 30.3462 54.5187 29.742 55.0849 29.4151Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 26C12 22.6863 14.6863 20 18 20H62C65.3137 20 68 22.6863 68 26V54C68 57.3137 65.3137 60 62 60H18C14.6863 60 12 57.3137 12 54V26ZM33 27.5C33.7008 27.5 34.3694 27.7941 34.8429 28.3107L48.8611 43.6033L52.2322 40.2322C53.2085 39.2559 54.7915 39.2559 55.7678 40.2322L63.7678 48.2322C64.2366 48.7011 64.5 49.337 64.5 50V52C64.5 54.4853 62.4853 56.5 60 56.5H20C17.5147 56.5 15.5 54.4853 15.5 52V46.3636C15.5 45.7382 15.7345 45.1354 16.1571 44.6743L31.1571 28.3107C31.6306 27.7941 32.2992 27.5 33 27.5ZM59.4151 25.0849C57.3018 23.8649 54.6982 23.8649 52.5849 25.0849C50.4717 26.305 49.1699 28.5598 49.1699 31C49.1699 33.4402 50.4717 35.695 52.5849 36.9151C54.6982 38.1351 57.3018 38.1351 59.4151 36.9151C61.5283 35.695 62.8301 33.4402 62.8301 31C62.8301 28.5598 61.5283 26.305 59.4151 25.0849Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <rect
          x="12"
          y="20"
          width="56"
          height="40"
          rx="6"
          fill="#2F80ED"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 54H42L60 54C61.1046 54 62 53.1046 62 52V50L54 42L48.7826 47.2174L33 30L18 46.3636V52C18 53.1046 18.8954 54 20 54Z"
          fill="#6FCF97"
        />
        <path
          d="M53.8349 27.25C55.1747 26.4765 56.8253 26.4765 58.1651 27.25C59.5048 28.0235 60.3301 29.453 60.3301 31C60.3301 32.547 59.5048 33.9765 58.1651 34.75C56.8253 35.5235 55.1747 35.5235 53.8349 34.75C52.4952 33.9765 51.6699 32.547 51.6699 31C51.6699 29.453 52.4952 28.0235 53.8349 27.25Z"
          fill="#F2C94C"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M12 26C12 22.6863 14.6863 20 18 20H62C65.3137 20 68 22.6863 68 26V54C68 57.3137 65.3137 60 62 60H18C14.6863 60 12 57.3137 12 54V26Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M20 54H60C61.1046 54 62 53.1046 62 52V50L54 42L48.7826 47.2174L33 30L18 46.3636V52C18 53.1046 18.8954 54 20 54Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M53.8349 27.25C55.1747 26.4765 56.8253 26.4765 58.1651 27.25C59.5048 28.0235 60.3301 29.453 60.3301 31C60.3301 32.547 59.5048 33.9765 58.1651 34.75C56.8253 35.5235 55.1747 35.5235 53.8349 34.75C52.4952 33.9765 51.6699 32.547 51.6699 31C51.6699 29.453 52.4952 28.0235 53.8349 27.25Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M12 26C12 22.6863 14.6863 20 18 20H62C65.3137 20 68 22.6863 68 26V54C68 57.3137 65.3137 60 62 60H18C14.6863 60 12 57.3137 12 54V26Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M20 54H60C61.1046 54 62 53.1046 62 52V50L54 42L48.7826 47.2174L33 30L18 46.3636V52C18 53.1046 18.8954 54 20 54Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M53.8349 27.25C55.1747 26.4765 56.8253 26.4765 58.1651 27.25C59.5048 28.0235 60.3301 29.453 60.3301 31C60.3301 32.547 59.5048 33.9765 58.1651 34.75C56.8253 35.5235 55.1747 35.5235 53.8349 34.75C52.4952 33.9765 51.6699 32.547 51.6699 31C51.6699 29.453 52.4952 28.0235 53.8349 27.25Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M33 28C33.5606 28 34.0955 28.2353 34.4743 28.6486L48.8454 44.3261L52.5858 40.5858C53.3668 39.8047 54.6332 39.8047 55.4142 40.5858L63.4142 48.5858C63.7893 48.9609 64 49.4696 64 50V52C64 54.2091 62.2091 56 60 56H20C17.7909 56 16 54.2091 16 52V46.3636C16 45.8633 16.1876 45.381 16.5257 45.0122L31.5257 28.6486C31.9045 28.2353 32.4394 28 33 28ZM33 32.9598L20 47.1416V52H60V50.8284L54 44.8284L50.1968 48.6316C49.8111 49.0173 49.2845 49.2288 48.7392 49.2169C48.1938 49.2051 47.6769 48.971 47.3083 48.5688L33 32.9598Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M59.1651 25.5179C57.2065 24.3872 54.7935 24.3872 52.8349 25.5179C50.8764 26.6487 49.6699 28.7385 49.6699 31C49.6699 33.2615 50.8764 35.3513 52.8349 36.4821C54.7935 37.6128 57.2065 37.6128 59.1651 36.4821C61.1236 35.3513 62.3301 33.2615 62.3301 31C62.3301 28.7385 61.1236 26.6487 59.1651 25.5179ZM54.8349 28.9821C55.5559 28.5658 56.4441 28.5658 57.1651 28.9821C57.886 29.3983 58.3301 30.1675 58.3301 31C58.3301 31.8325 57.886 32.6017 57.1651 33.0179C56.4441 33.4342 55.5559 33.4342 54.8349 33.0179C54.114 32.6017 53.6699 31.8325 53.6699 31C53.6699 30.1675 54.114 29.3983 54.8349 28.9821Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 26C10 21.5817 13.5817 18 18 18H62C66.4183 18 70 21.5817 70 26V54C70 58.4183 66.4183 62 62 62H18C13.5817 62 10 58.4183 10 54V26ZM18 22C15.7909 22 14 23.7909 14 26V54C14 56.2091 15.7909 58 18 58H62C64.2091 58 66 56.2091 66 54V26C66 23.7909 64.2091 22 62 22H18Z"
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
