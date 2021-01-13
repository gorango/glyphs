
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
          d="M21.9355 12.9889L39.9355 11.0859L57.9355 12.9889L71.871 31.6961L39.9355 68.8846L8 31.6961L21.9355 12.9889Z"
          fill="#FDB300"
        />
        <path
          d="M20.9355 31.6963L39.9355 68.8848L8 31.6963H20.9355Z"
          fill="#EA6C00"
        />
        <path
          d="M58.9354 31.6963L39.9353 68.8848L71.8708 31.6963H58.9354Z"
          fill="#EA6C00"
        />
        <path
          d="M20.9355 31.6963H58.9356L39.9356 68.8848L20.9355 31.6963Z"
          fill="#FDAD00"
        />
        <path
          d="M39.9356 11.0859L21.9355 12.9889L20.9355 31.696L39.9356 11.0859Z"
          fill="#FDD231"
        />
        <path
          d="M39.9355 11.0859L57.9356 12.9889L58.9355 31.696L39.9355 11.0859Z"
          fill="#FDD231"
        />
        <path
          d="M71.8708 31.6964L57.9353 12.9893L58.9354 31.6964H71.8708Z"
          fill="#FDAD00"
        />
        <path
          d="M8 31.6964L21.9354 12.9893L20.9355 31.6964H8Z"
          fill="#FDAD00"
        />
        <path
          d="M39.9356 11.0859L20.9355 31.696H58.9356L39.9356 11.0859Z"
          fill="#FEEEB7"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          d="M37.4012 12.3604L22.8883 13.8946L22.0821 28.9776L37.4012 12.3604Z"
          fill="currentColor"
        />
        <path
          d="M57.7885 28.9776L56.9821 13.8946L42.4694 12.3604L57.7885 28.9776Z"
          fill="currentColor"
        />
        <path
          d="M39.9353 12.5622L56.6534 30.697H23.2172L39.9353 12.5622Z"
          fill="currentColor"
        />
        <path
          d="M9.9917 30.6971H19.9873L20.76 16.2416L9.9917 30.6971Z"
          fill="currentColor"
        />
        <path
          d="M59.8833 30.6971H69.8789L59.1106 16.2418L59.8833 30.6971Z"
          fill="currentColor"
        />
        <path
          d="M59.5474 32.6972L44.644 61.8674L69.6938 32.6972H59.5474Z"
          fill="currentColor"
        />
        <path
          d="M20.3232 32.6972L35.2268 61.8678L10.1767 32.6972H20.3232Z"
          fill="currentColor"
        />
        <path
          d="M22.5691 32.6972H57.3013L39.9352 66.6876L22.5691 32.6972Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M21.9355 12.9889L39.9355 11.0859M21.9355 12.9889L8 31.6961M21.9355 12.9889L20.9355 31.6963M39.9355 11.0859L57.9355 12.9889M39.9355 11.0859L20.9355 31.6963M39.9355 11.0859L58.9354 31.6963M57.9355 12.9889L71.871 31.6961M57.9355 12.9889L58.9354 31.6963M71.871 31.6961L39.9355 68.8846M71.871 31.6961L58.9354 31.6963M39.9355 68.8846L8 31.6961M39.9355 68.8846L20.9355 31.6963M39.9355 68.8846L58.9354 31.6963M8 31.6961L20.9355 31.6963M20.9355 31.6963H58.9354"
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
