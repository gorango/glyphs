
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
          d="M40 5C20.6953 5 5 20.6953 5 40C5 59.3047 20.6953 75 40 75C59.3047 75 75 59.3047 75 40C75 20.6953 59.3047 5 40 5Z"
          fill="url(#paint0_radialWdlN)"
        />
        <path
          d="M51.3009 39.8528C46.496 39.8528 42.6015 43.803 42.6015 48.6761C42.6015 53.5495 46.496 57.5 51.3009 57.5C56.1052 57.5 60 53.5495 60 48.6761C60 43.803 56.1052 39.8528 51.3009 39.8528ZM28.6993 39.8534C23.8949 39.8534 20 43.803 20 48.6765C20 53.5495 23.8949 57.5 28.6993 57.5C33.5039 57.5 37.399 53.5495 37.399 48.6765C37.399 43.803 33.5039 39.8534 28.6993 39.8534ZM48.699 28.8233C48.699 33.6964 44.8046 37.6475 40.0002 37.6475C35.1954 37.6475 31.3008 33.6964 31.3008 28.8233C31.3008 23.9505 35.1954 20 40.0002 20C44.8046 20 48.699 23.9505 48.699 28.8233Z"
          fill="white"
        />
        <defs><radialGradient id="paint0_radialWdlN" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40 43.2565) scale(46.3843)"><stop stop-color="#FFB900"/><stop offset="0.6" stop-color="#F95D8F"/><stop offset="0.9991" stop-color="#F95353"/></radialGradient></defs>
      </template>
      <template v-if="variant === 'solid'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 40C5 20.6953 20.6953 5 40 5C59.3047 5 75 20.6953 75 40C75 59.3047 59.3047 75 40 75C20.6953 75 5 59.3047 5 40ZM42.6015 48.6761C42.6015 43.803 46.496 39.8528 51.3009 39.8528C56.1052 39.8528 60 43.803 60 48.6761C60 53.5495 56.1052 57.5 51.3009 57.5C46.496 57.5 42.6015 53.5495 42.6015 48.6761ZM20 48.6766C20 43.803 23.8949 39.8534 28.6993 39.8534C33.5039 39.8534 37.399 43.803 37.399 48.6766C37.399 53.5495 33.5039 57.5 28.6993 57.5C23.8949 57.5 20 53.5495 20 48.6766ZM40.0002 37.6475C44.8046 37.6475 48.699 33.6964 48.699 28.8233C48.699 23.9505 44.8046 20 40.0002 20C35.1954 20 31.3008 23.9505 31.3008 28.8233C31.3008 33.6964 35.1954 37.6475 40.0002 37.6475Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M40 5C20.6953 5 5 20.6953 5 40C5 59.3047 20.6953 75 40 75C59.3047 75 75 59.3047 75 40C75 20.6953 59.3047 5 40 5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M51.3009 39.8528C46.496 39.8528 42.6015 43.803 42.6015 48.6761C42.6015 53.5495 46.496 57.5 51.3009 57.5C56.1052 57.5 60 53.5495 60 48.6761C60 43.803 56.1052 39.8528 51.3009 39.8528ZM28.6993 39.8534C23.8949 39.8534 20 43.803 20 48.6766C20 53.5495 23.8949 57.5 28.6993 57.5C33.5039 57.5 37.399 53.5495 37.399 48.6766C37.399 43.803 33.5039 39.8534 28.6993 39.8534ZM48.699 28.8233C48.699 33.6964 44.8046 37.6475 40.0002 37.6475C35.1954 37.6475 31.3008 33.6964 31.3008 28.8233C31.3008 23.9505 35.1954 20 40.0002 20C44.8046 20 48.699 23.9505 48.699 28.8233Z"
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
