
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
          d="M29.3335 48.4004H50.6668"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M24 64L39.4342 16.4113C39.5137 16.1661 39.7422 16 40 16C40.2578 16 40.4863 16.1661 40.5658 16.4113L56 64"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M29.3333 45.4C27.6765 45.4 26.3333 46.7431 26.3333 48.4C26.3333 50.0569 27.6765 51.4 29.3333 51.4L29.3333 45.4ZM50.6667 51.4C52.3235 51.4 53.6667 50.0569 53.6667 48.4C53.6667 46.7431 52.3235 45.4 50.6667 45.4L50.6667 51.4ZM39.4342 16.4113L36.5805 15.4858V15.4858L39.4342 16.4113ZM21.1463 63.0745C20.6352 64.6505 21.4984 66.3425 23.0745 66.8537C24.6505 67.3648 26.3425 66.5016 26.8537 64.9255L21.1463 63.0745ZM40.5658 16.4113L43.4195 15.4858V15.4858L40.5658 16.4113ZM53.1463 64.9255C53.6575 66.5016 55.3495 67.3648 56.9255 66.8537C58.5016 66.3425 59.3648 64.6505 58.8537 63.0745L53.1463 64.9255ZM29.3333 51.4L50.6667 51.4L50.6667 45.4H29.3333L29.3333 51.4ZM36.5805 15.4858L21.1463 63.0745L26.8537 64.9255L42.2878 17.3369L36.5805 15.4858ZM37.7122 17.3369L53.1463 64.9255L58.8537 63.0745L43.4195 15.4858L37.7122 17.3369ZM40 19C38.9575 19 38.0338 18.3285 37.7122 17.3369L43.4195 15.4858C42.9388 14.0037 41.5581 13 40 13V19ZM42.2878 17.3369C41.9662 18.3285 41.0425 19 40 19V13C38.4419 13 37.0612 14.0037 36.5805 15.4858L42.2878 17.3369Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M29.3333 46.4C28.2288 46.4 27.3333 47.2954 27.3333 48.4C27.3333 49.5046 28.2288 50.4 29.3333 50.4V46.4ZM50.6667 50.4C51.7712 50.4 52.6667 49.5046 52.6667 48.4C52.6667 47.2954 51.7712 46.4 50.6667 46.4L50.6667 50.4ZM39.4342 16.4113L37.5317 15.7943V15.7943L39.4342 16.4113ZM22.0976 63.383C21.7568 64.4337 22.3323 65.5617 23.383 65.9024C24.4337 66.2432 25.5617 65.6677 25.9024 64.617L22.0976 63.383ZM40.5658 16.4113L42.4683 15.7943V15.7943L40.5658 16.4113ZM54.0976 64.617C54.4383 65.6677 55.5663 66.2432 56.617 65.9024C57.6677 65.5617 58.2432 64.4337 57.9024 63.383L54.0976 64.617ZM29.3333 50.4L50.6667 50.4L50.6667 46.4H29.3333V50.4ZM37.5317 15.7943L22.0976 63.383L25.9024 64.617L41.3366 17.0283L37.5317 15.7943ZM38.6634 17.0283L54.0976 64.617L57.9024 63.383L42.4683 15.7943L38.6634 17.0283ZM40 18C39.391 18 38.8513 17.6077 38.6634 17.0283L42.4683 15.7943C42.1213 14.7245 41.1247 14 40 14V18ZM41.3366 17.0283C41.1487 17.6077 40.609 18 40 18V14C38.8753 14 37.8787 14.7245 37.5317 15.7943L41.3366 17.0283Z"
          fill="#219653"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M29.3333 48.4H50.6667M24 64L39.4342 16.4113C39.5137 16.1661 39.7422 16 40 16C40.2578 16 40.4863 16.1661 40.5658 16.4113L56 64"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M49.4867 50.4L54.0976 64.617C54.4384 65.6677 55.5664 66.2432 56.6171 65.9024C57.6678 65.5617 58.2433 64.4337 57.9025 63.383L42.4683 15.7943C42.1214 14.7245 41.1247 14 40.0001 14C38.8754 14 37.8787 14.7245 37.5318 15.7943L22.0976 63.383C21.7568 64.4337 22.3324 65.5617 23.383 65.9024C24.4337 66.2432 25.5617 65.6677 25.9025 64.617L30.5134 50.4L49.4867 50.4ZM48.1894 46.4L40.0001 21.1496L31.8107 46.4L48.1894 46.4Z"
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
