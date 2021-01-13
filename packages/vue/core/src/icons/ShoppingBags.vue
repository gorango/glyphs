
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
          d="M56.1 44L54.2874 31.9162C54.1222 30.8148 53.176 30 52.0623 30H11.9376C10.8239 30 9.87775 30.8148 9.71254 31.9162L4.38754 67.4162C4.18348 68.7766 5.23706 70 6.61264 70H36"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M44 38V22C44 15.3726 38.6274 10 32 10C25.3726 10 20 15.3726 20 22V38"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M76 68V46C76 44.8954 75.1046 44 74 44H36C34.8954 44 34 44.8954 34 46V68C34 69.1046 34.8954 70 36 70H74C75.1046 70 76 69.1046 76 68Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M45 52V62H65V52"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.998 22C16.998 13.7157 23.7138 7 31.998 7C40.2823 7 46.998 13.7157 46.998 22V30H52.0602C53.174 30 54.1201 30.8148 54.2853 31.9162L55.6479 41H35.9979C33.2365 41 30.9979 43.2386 30.9979 46V68C30.9979 68.7111 31.1463 69.3875 31.4139 70H6.61057C5.23499 70 4.18141 68.7766 4.38546 67.4162L9.71046 31.9162C9.87568 30.8148 10.8218 30 11.9356 30H16.998V22ZM40.998 22V30H22.998V22C22.998 17.0294 27.0275 13 31.998 13C36.9686 13 40.998 17.0294 40.998 22Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M75.998 68V46C75.998 44.8954 75.1026 44 73.998 44H35.998C34.8935 44 33.998 44.8954 33.998 46V68C33.998 69.1046 34.8935 70 35.998 70H73.998C75.1026 70 75.998 69.1046 75.998 68ZM44.998 50C46.1026 50 46.998 50.8954 46.998 52V60H62.998V52C62.998 50.8954 63.8935 50 64.998 50C66.1026 50 66.998 50.8954 66.998 52V62C66.998 63.1046 66.1026 64 64.998 64H44.998C43.8935 64 42.998 63.1046 42.998 62V52C42.998 50.8954 43.8935 50 44.998 50Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.71249 31.9162C9.8777 30.8148 10.8239 30 11.9376 30H13.9999H49.9999H52.0622C53.176 30 54.1221 30.8148 54.2874 31.9162L56.0999 44H38.0975H35.9999C34.8954 44 33.9999 44.8954 33.9999 46V68C33.9999 69.1046 34.8954 70 35.9999 70H6.61259C5.23701 70 4.18343 68.7766 4.38749 67.4162L9.71249 31.9162Z"
          fill="#F2C94C"
        />
        <path
          d="M44 38V22C44 15.3726 38.6274 10 32 10V10C25.3726 10 20 15.3726 20 22V38"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M76 68V46C76 44.8954 75.1046 44 74 44H71.9024H38.0976H36C34.8954 44 34 44.8954 34 46V68C34 69.1046 34.8954 70 36 70H38.0976H71.9024H74C75.1046 70 76 69.1046 76 68Z"
          fill="#6FCF97"
        />
        <path
          d="M45 52V62H65V52"
          stroke="#9B51E0"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M9.71242 31.9162C9.87763 30.8148 10.8238 30 11.9375 30H52.0622C53.1759 30 54.1221 30.8148 54.2873 31.9162L56.0998 44H38.0974H35.9999C34.8953 44 33.9999 44.8954 33.9999 46V68C33.9999 69.1046 34.8953 70 35.9998 70H6.61252C5.23694 70 4.18336 68.7766 4.38742 67.4162L9.71242 31.9162Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M76 68V46C76 44.8954 75.1046 44 74 44H38.0974H35.9999C34.8953 44 33.9999 44.8954 33.9999 46V68C33.9999 69.1046 34.8953 70 35.9998 70H74C75.1046 70 76 69.1046 76 68Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M38.0974 44H56.0998L54.2873 31.9162C54.1221 30.8148 53.1759 30 52.0622 30H11.9375C10.8238 30 9.87763 30.8148 9.71242 31.9162L4.38742 67.4162C4.18336 68.7766 5.23694 70 6.61252 70H35.9998M38.0974 44H35.9999C34.8953 44 33.9999 44.8954 33.9999 46V68C33.9999 69.1046 34.8953 70 35.9998 70M38.0974 44H74C75.1046 44 76 44.8954 76 46V68C76 69.1046 75.1046 70 74 70H35.9998M44 38V22C44 15.3726 38.6274 10 32 10C25.3726 10 20 15.3726 20 22V38M45 52V62H65V52"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M47 52C47 50.8954 46.1046 50 45 50C43.8955 50 43 50.8954 43 52V62C43 63.1046 43.8955 64 45 64H65C66.1046 64 67 63.1046 67 62V52C67 50.8954 66.1046 50 65 50C63.8955 50 63 50.8954 63 52V60H47V52Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M32 8C24.2681 8 18 14.268 18 22V28H11.9376C9.83383 28 8.04666 29.5391 7.73459 31.6196L2.40959 67.1196C2.02415 69.6891 4.01425 72 6.61256 72H74C76.2092 72 78 70.2091 78 68V46C78 43.7909 76.2092 42 74 42H57.8223L56.2652 31.6196C55.9531 29.5391 54.166 28 52.0622 28H46V22C46 14.268 39.732 8 32 8ZM35.9999 42C35.8618 42 35.7254 42.007 35.5909 42.0207C33.5739 42.2255 31.9999 43.9289 31.9999 46V68H6.61256C6.45973 68 6.34266 67.8641 6.36533 67.7129L11.6903 32.2129C11.7087 32.0905 11.8138 32 11.9376 32H18V38C18 39.1046 18.8955 40 20 40C21.1046 40 22 39.1046 22 38V32H42V38C42 39.1046 42.8955 40 44 40C45.1046 40 46 39.1046 46 38V32H52.0622C52.186 32 52.2911 32.0905 52.3095 32.2129L53.7775 42H35.9999ZM36 68V46H74V68H36ZM42 28V22C42 16.4772 37.5229 12 32 12C26.4772 12 22 16.4772 22 22V28H42Z"
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
