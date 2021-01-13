
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
          d="M4 28C4 25.7909 5.79086 24 8 24H72C74.2091 24 76 25.7909 76 28V52C76 54.2091 74.2091 56 72 56H8C5.79086 56 4 54.2091 4 52V28Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M24 24V56"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M56 24V56"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M36 33C36 32.4477 35.5523 32 35 32H33C32.4477 32 32 32.4477 32 33V35C32 35.5523 32.4477 36 33 36H35C35.5523 36 36 35.5523 36 35V33Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M48 33C48 32.4477 47.5523 32 47 32H45C44.4477 32 44 32.4477 44 33V35C44 35.5523 44.4477 36 45 36H47C47.5523 36 48 35.5523 48 35V33Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M44 45C44 44.4477 44.4477 44 45 44H47C47.5523 44 48 44.4477 48 45V47C48 47.5523 47.5523 48 47 48H45C44.4477 48 44 47.5523 44 47V45Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M36 45C36 44.4477 35.5523 44 35 44H33C32.4477 44 32 44.4477 32 45V47C32 47.5523 32.4477 48 33 48H35C35.5523 48 36 47.5523 36 47V45Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M8 24H22.5V56H8C5.79086 56 4 54.2091 4 52V28C4 25.7909 5.79086 24 8 24Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M54.5 56H25.5V24H54.5V56ZM35 32C35.5523 32 36 32.4477 36 33V35C36 35.5523 35.5523 36 35 36H33C32.4477 36 32 35.5523 32 35V33C32 32.4477 32.4477 32 33 32H35ZM47 32C47.5523 32 48 32.4477 48 33V35C48 35.5523 47.5523 36 47 36H45C44.4477 36 44 35.5523 44 35V33C44 32.4477 44.4477 32 45 32H47ZM45 44C44.4477 44 44 44.4477 44 45V47C44 47.5523 44.4477 48 45 48H47C47.5523 48 48 47.5523 48 47V45C48 44.4477 47.5523 44 47 44H45ZM35 44C35.5523 44 36 44.4477 36 45V47C36 47.5523 35.5523 48 35 48H33C32.4477 48 32 47.5523 32 47V45C32 44.4477 32.4477 44 33 44H35Z"
          fill="currentColor"
        />
        <path
          d="M57.5 56V24H72C74.2091 24 76 25.7909 76 28V52C76 54.2091 74.2091 56 72 56H57.5Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <rect
          x="4"
          y="24"
          width="72"
          height="32"
          rx="4"
          fill="#F2994A"
        />
        <rect
          x="24"
          y="24"
          width="32"
          height="32"
          fill="#F2C94C"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36 33C36 32.4477 35.5523 32 35 32H33C32.4477 32 32 32.4477 32 33V35C32 35.5523 32.4477 36 33 36H35C35.5523 36 36 35.5523 36 35V33ZM48 33C48 32.4477 47.5523 32 47 32H45C44.4477 32 44 32.4477 44 33V35C44 35.5523 44.4477 36 45 36H47C47.5523 36 48 35.5523 48 35V33ZM44 45C44 44.4477 44.4477 44 45 44H47C47.5523 44 48 44.4477 48 45V47C48 47.5523 47.5523 48 47 48H45C44.4477 48 44 47.5523 44 47V45ZM36 45C36 44.4477 35.5523 44 35 44H33C32.4477 44 32 44.4477 32 45V47C32 47.5523 32.4477 48 33 48H35C35.5523 48 36 47.5523 36 47V45Z"
          fill="#F2F2F2"
        />
        <path
          d="M33 34H35V30H33V34ZM34 35V33H30V35H34ZM35 34H33V38H35V34ZM34 33V35H38V33H34ZM45 34H47V30H45V34ZM46 35V33H42V35H46ZM47 34H45V38H47V34ZM46 33V35H50V33H46ZM47 42H45V46H47V42ZM50 47V45H46V47H50ZM45 50H47V46H45V50ZM42 45V47H46V45H42ZM33 46H35V42H33V46ZM34 47V45H30V47H34ZM35 46H33V50H35V46ZM34 45V47H38V45H34ZM35 50C36.6569 50 38 48.6569 38 47H34C34 46.4477 34.4477 46 35 46V50ZM30 47C30 48.6569 31.3431 50 33 50V46C33.5523 46 34 46.4477 34 47H30ZM35 46C34.4477 46 34 45.5523 34 45H38C38 43.3431 36.6569 42 35 42V46ZM33 42C31.3431 42 30 43.3431 30 45H34C34 45.5523 33.5523 46 33 46V42ZM45 46C45.5523 46 46 46.4477 46 47H42C42 48.6569 43.3431 50 45 50V46ZM46 47C46 46.4477 46.4477 46 47 46V50C48.6569 50 50 48.6569 50 47H46ZM45 42C43.3431 42 42 43.3431 42 45H46C46 45.5523 45.5523 46 45 46V42ZM47 46C46.4477 46 46 45.5523 46 45H50C50 43.3431 48.6569 42 47 42V46ZM47 38C48.6569 38 50 36.6569 50 35H46C46 34.4477 46.4477 34 47 34V38ZM42 35C42 36.6569 43.3431 38 45 38V34C45.5523 34 46 34.4477 46 35H42ZM47 34C46.4477 34 46 33.5523 46 33H50C50 31.3431 48.6569 30 47 30V34ZM45 30C43.3431 30 42 31.3431 42 33H46C46 33.5523 45.5523 34 45 34V30ZM35 38C36.6569 38 38 36.6569 38 35H34C34 34.4477 34.4477 34 35 34V38ZM30 35C30 36.6569 31.3431 38 33 38V34C33.5523 34 34 34.4477 34 35H30ZM35 34C34.4477 34 34 33.5523 34 33H38C38 31.3431 36.6569 30 35 30V34ZM33 30C31.3431 30 30 31.3431 30 33H34C34 33.5523 33.5523 34 33 34V30Z"
          fill="#F2F2F2"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M4 28C4 25.7909 5.79086 24 8 24H72C74.2091 24 76 25.7909 76 28V52C76 54.2091 74.2091 56 72 56H8C5.79086 56 4 54.2091 4 52V28Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M24 24H56V56H24V24Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M36 33C36 32.4477 35.5523 32 35 32H33C32.4477 32 32 32.4477 32 33V35C32 35.5523 32.4477 36 33 36H35C35.5523 36 36 35.5523 36 35V33Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M48 33C48 32.4477 47.5523 32 47 32H45C44.4477 32 44 32.4477 44 33V35C44 35.5523 44.4477 36 45 36H47C47.5523 36 48 35.5523 48 35V33Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M44 45C44 44.4477 44.4477 44 45 44H47C47.5523 44 48 44.4477 48 45V47C48 47.5523 47.5523 48 47 48H45C44.4477 48 44 47.5523 44 47V45Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M36 45C36 44.4477 35.5523 44 35 44H33C32.4477 44 32 44.4477 32 45V47C32 47.5523 32.4477 48 33 48H35C35.5523 48 36 47.5523 36 47V45Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M4 28C4 25.7909 5.79086 24 8 24H72C74.2091 24 76 25.7909 76 28V52C76 54.2091 74.2091 56 72 56H8C5.79086 56 4 54.2091 4 52V28Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M24 24H56V56H24V24Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M36 33C36 32.4477 35.5523 32 35 32H33C32.4477 32 32 32.4477 32 33V35C32 35.5523 32.4477 36 33 36H35C35.5523 36 36 35.5523 36 35V33Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M48 33C48 32.4477 47.5523 32 47 32H45C44.4477 32 44 32.4477 44 33V35C44 35.5523 44.4477 36 45 36H47C47.5523 36 48 35.5523 48 35V33Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M44 45C44 44.4477 44.4477 44 45 44H47C47.5523 44 48 44.4477 48 45V47C48 47.5523 47.5523 48 47 48H45C44.4477 48 44 47.5523 44 47V45Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M36 45C36 44.4477 35.5523 44 35 44H33C32.4477 44 32 44.4477 32 45V47C32 47.5523 32.4477 48 33 48H35C35.5523 48 36 47.5523 36 47V45Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M33 30C31.3431 30 30 31.3431 30 33V35C30 36.6569 31.3431 38 33 38H35C36.6569 38 38 36.6569 38 35V33C38 31.3431 36.6569 30 35 30H33Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M45 30C43.3431 30 42 31.3431 42 33V35C42 36.6569 43.3431 38 45 38H47C48.6569 38 50 36.6569 50 35V33C50 31.3431 48.6569 30 47 30H45Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M33 42C31.3431 42 30 43.3431 30 45V47C30 48.6569 31.3431 50 33 50H35C36.6569 50 38 48.6569 38 47V45C38 43.3431 36.6569 42 35 42H33Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M45 42C43.3431 42 42 43.3431 42 45V47C42 48.6569 43.3431 50 45 50H47C48.6569 50 50 48.6569 50 47V45C50 43.3431 48.6569 42 47 42H45Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 28C2 24.6863 4.68629 22 8 22H72C75.3137 22 78 24.6863 78 28V52C78 55.3137 75.3137 58 72 58H8C4.68629 58 2 55.3137 2 52V28ZM8 26H22V54H8C6.89543 54 6 53.1046 6 52V28C6 26.8954 6.89543 26 8 26ZM54 54H26V26H54V54ZM58 54V26H72C73.1046 26 74 26.8954 74 28V52C74 53.1046 73.1046 54 72 54H58Z"
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
