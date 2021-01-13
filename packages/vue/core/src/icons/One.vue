
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
          d="M35.2 25.6001L44.5348 16.2609C44.631 16.1647 44.7954 16.2328 44.7954 16.3688L44.7954 64.0001"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M33.0781 23.4793C31.9068 24.6511 31.9073 26.5506 33.0791 27.7219C34.251 28.8932 36.1505 28.8928 37.3218 27.7209L33.0781 23.4793ZM44.5348 16.2609L42.413 14.14L42.413 14.14L44.5348 16.2609ZM41.7954 64.0001C41.7954 65.657 43.1386 67.0001 44.7954 67.0001C46.4523 67.0001 47.7954 65.657 47.7954 64.0001H41.7954ZM37.3218 27.7209L46.6566 18.3817L42.413 14.14L33.0781 23.4793L37.3218 27.7209ZM41.7954 16.3688L41.7954 64.0001H47.7954L47.7954 16.3688L41.7954 16.3688ZM46.6566 18.3817C44.8631 20.176 41.7954 18.9058 41.7954 16.3688L47.7954 16.3688C47.7954 13.5597 44.3988 12.1533 42.413 14.14L46.6566 18.3817Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M33.7854 24.1862C33.0045 24.9675 33.0048 26.2338 33.7861 27.0147C34.5673 27.7955 35.8336 27.7952 36.6145 27.014L33.7854 24.1862ZM44.5348 16.2609L43.1203 14.847L43.1203 14.847L44.5348 16.2609ZM42.7954 64.0001C42.7954 65.1047 43.6909 66.0001 44.7954 66.0001C45.9 66.0001 46.7954 65.1047 46.7954 64.0001H42.7954ZM36.6145 27.014L45.9494 17.6747L43.1203 14.847L33.7854 24.1862L36.6145 27.014ZM42.7954 16.3688L42.7954 64.0001H46.7954L46.7954 16.3688L42.7954 16.3688ZM45.9494 17.6748C44.7857 18.8389 42.7954 18.0148 42.7954 16.3688L46.7954 16.3688C46.7954 14.4507 44.4762 13.4904 43.1203 14.847L45.9494 17.6748Z"
          fill="#F2994A"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M35.2 25.6001L44.5348 16.2609C44.631 16.1647 44.7954 16.2328 44.7954 16.3688V64.0001"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M42.7976 20.7248L42.7976 63.8948C42.7976 64.9993 43.6931 65.8948 44.7976 65.8948C45.9022 65.8948 46.7976 64.9993 46.7976 63.8948L46.7976 16.2634C46.7976 14.3454 44.4784 13.385 43.1225 14.7416L33.7876 24.0809C33.0067 24.8621 33.007 26.1284 33.7883 26.9093C34.5695 27.6902 35.8358 27.6899 36.6167 26.9086L42.7976 20.7248Z"
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
