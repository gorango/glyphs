
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
          d="M44 72.0001V10.775C44 9.40986 42.6626 8.44592 41.3675 8.8776L21.3675 15.5443C20.5509 15.8165 20 16.5808 20 17.4416V72.0001"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M12 72H68"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M60 72V18C60 16.8954 59.1046 16 58 16H44"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M34.0171 45.2609L37.9829 44.7388"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.3675 15.5443C20.5509 15.8165 20 16.5808 20 17.4416V72.0001H44V10.775C44 9.40986 42.6626 8.44592 41.3675 8.8776L21.3675 15.5443ZM33.756 43.2782C32.6609 43.4224 31.89 44.427 32.0342 45.5222C32.1784 46.6173 33.183 47.3882 34.2781 47.244L38.2439 46.7219C39.339 46.5777 40.1099 45.5731 39.9658 44.4779C39.8216 43.3828 38.8169 42.6119 37.7218 42.7561L33.756 43.2782Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M41 16.0001C41 14.3433 42.3431 13.0001 44 13.0001H58C60.7614 13.0001 63 15.2387 63 18.0001V69.0001H68C69.6569 69.0001 71 70.3433 71 72.0001C71 73.657 69.6569 75.0001 68 75.0001H12C10.3431 75.0001 9 73.657 9 72.0001C9 70.3433 10.3431 69.0001 12 69.0001H41V16.0001ZM47 69.0001H57V19.0001H47V69.0001Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42 72H60V18C60 16.8954 59.1046 16 58 16H44V70C44 71.1046 43.1046 72 42 72Z"
          fill="#F2C94C"
        />
        <path
          d="M20 17.4415C20 16.5807 20.5509 15.8164 21.3675 15.5442L41.3675 8.87748C42.6626 8.4458 44 9.40974 44 10.7749V70C44 71.1046 43.1046 72 42 72H20V17.4415Z"
          fill="#F2994A"
        />
        <path
          d="M68 72H12"
          stroke="#4F4F4F"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M34.0171 45.2607L37.9829 44.7386"
          stroke="#4F4F4F"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M42 72.0001H60V18.0001C60 16.8955 59.1046 16.0001 58 16.0001H44V70.0001C44 71.1047 43.1046 72.0001 42 72.0001Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M20 17.4416C20 16.5808 20.5509 15.8165 21.3675 15.5443L41.3675 8.8776C42.6626 8.44592 44 9.40986 44 10.775V70.0001C44 71.1047 43.1046 72.0001 42 72.0001H20V17.4416Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M42 72.0001H60V18.0001C60 16.8955 59.1046 16.0001 58 16.0001H44V70.0001M42 72.0001C43.1046 72.0001 44 71.1047 44 70.0001M42 72.0001H20V17.4416C20 16.5808 20.5509 15.8165 21.3675 15.5443L41.3675 8.8776C42.6626 8.44592 44 9.40986 44 10.775V70.0001M68 72.0001H12M34.0171 45.2611L37.9829 44.739"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M33.756 43.2783C32.6609 43.4225 31.89 44.4271 32.0342 45.5222C32.1784 46.6173 33.183 47.3882 34.2781 47.2441L38.2439 46.722C39.339 46.5778 40.1099 45.5731 39.9658 44.478C39.8216 43.3829 38.8169 42.612 37.7218 42.7562L33.756 43.2783Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40.7351 6.98031C43.3252 6.11693 46 8.04481 46 10.775V14.0002H58C60.2091 14.0002 62 15.791 62 18.0002V70.0002H68C69.1046 70.0002 70 70.8956 70 72.0002C70 73.1048 69.1046 74.0002 68 74.0002H12C10.8954 74.0002 10 73.1048 10 72.0002C10 70.8956 10.8954 70.0002 12 70.0002H18V17.4417C18 15.72 19.1017 14.1914 20.7351 13.647L40.7351 6.98031ZM46 70.0002V18.0002H58V70.0002H46ZM42 10.775V70.0002H22V17.4417L42 10.775Z"
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
