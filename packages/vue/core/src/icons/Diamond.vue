
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
          d="M38.438 16.9523C39.2387 15.9515 40.7609 15.9515 41.5615 16.9523L59.0003 38.7507C59.5846 39.4811 59.5846 40.519 59.0003 41.2495L41.5615 63.0479C40.7609 64.0487 39.2387 64.0487 38.438 63.0479L20.9993 41.2495C20.4149 40.5191 20.4149 39.4811 20.9993 38.7507L38.438 16.9523Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M38.4383 16.9522C39.2389 15.9514 40.7611 15.9514 41.5617 16.9522L59.0005 38.7506C59.5848 39.481 59.5848 40.519 59.0005 41.2494L41.5617 63.0478C40.7611 64.0486 39.2389 64.0486 38.4383 63.0478L20.9995 41.2494C20.4152 40.519 20.4152 39.481 20.9995 38.7506L38.4383 16.9522Z"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M41.5617 16.9522C40.7611 15.9514 39.2389 15.9514 38.4383 16.9522L20.9995 38.7506C20.4152 39.481 20.4152 40.519 20.9995 41.2494L38.4383 63.0478C39.2389 64.0486 40.7611 64.0486 41.5617 63.0478L59.0005 41.2494C59.5848 40.519 59.5848 39.481 59.0005 38.7506L41.5617 16.9522Z"
          fill="#EB5757"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M41.5776 25.9104C40.7772 24.9253 39.2735 24.9253 38.4732 25.9104L28.0501 38.7388C27.4531 39.4736 27.4531 40.5264 28.0501 41.2612L38.4732 54.0896C39.2735 55.0747 40.7772 55.0747 41.5776 54.0896L52.0007 41.2612C52.5977 40.5264 52.5977 39.4736 52.0007 38.7388L41.5776 25.9104Z"
          fill="#F2F2F2"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M38.438 16.9523C39.2387 15.9515 40.7609 15.9515 41.5615 16.9523L59.0003 38.7507C59.5846 39.4811 59.5846 40.5191 59.0003 41.2495L41.5615 63.0479C40.7609 64.0487 39.2387 64.0487 38.438 63.0479L20.9993 41.2495C20.4149 40.5191 20.4149 39.4811 20.9993 38.7507L38.438 16.9523Z"
          fill="currentColor"
          fill-opacity="0.25"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M43.1233 15.7024C41.522 13.7008 38.4776 13.7008 36.8763 15.7024L19.4376 37.5008C18.2689 38.9617 18.2689 41.0375 19.4376 42.4984L36.8763 64.2968C38.4776 66.2985 41.522 66.2985 43.1233 64.2968L60.562 42.4984C61.7307 41.0375 61.7307 38.9617 60.562 37.5008L43.1233 15.7024ZM39.9998 18.2012L57.4385 39.9996L39.9998 61.798L22.561 39.9996L39.9998 18.2012Z"
          stroke="currentColor"
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
