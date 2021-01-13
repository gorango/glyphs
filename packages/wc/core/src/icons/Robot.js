
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreRobot = {
  size: '40',
  color: 'currentColor',
  variant: '',
  colors: ['#000000', '#C4C4C4'],
  strokeWidth: '3',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  rotate: '0',
  flip: '',
  render: ({ size, color, variant, strokeWidth, strokeLinecap, strokeLinejoin, rotate, flip }) => html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${size}"
      height="${size}"
      viewBox="0 0 80 80"
      transform="${transform(rotate, flip)}"
    >
      <slot></slot>
      <g>        
        ${variant === "path" && svg`
          <path
            d="M31.9996 39.9999H20.0002C17.6929 39.9999 15.864 41.9466 16.0079 44.2494L17.5079 68.2494C17.6397 70.3575 19.3879 71.9999 21.5002 71.9999H57.9846C60.0968 71.9999 61.845 70.3575 61.9768 68.2494L63.4768 44.2494C63.6207 41.9466 61.7918 39.9999 59.4846 39.9999H47.9996V46C47.9996 49.3137 45.3133 52 41.9996 52H37.9996C34.6859 52 31.9996 49.3137 31.9996 46V39.9999Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16.0079 44.2495C16.0038 44.1828 16.0013 44.1163 16.0004 44.0502C11.6887 44.5324 8.47443 48.4276 8.94851 52.8523L10.2342 64.8523C10.6698 68.9174 14.1003 72.0001 18.1887 72.0001H22"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M63.4768 44.2494C63.4818 44.1689 63.4844 44.0888 63.4847 44.0092C68.0521 44.2259 71.5444 48.253 71.0516 52.8522L69.7659 64.8523C69.3303 68.9174 65.8998 72 61.8114 72L58 72"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M47.9995 32V46C47.9995 49.3137 45.3132 52 41.9995 52H37.9995C34.6858 52 31.9995 49.3137 31.9995 46V32"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M15.9995 16C15.9995 13.7909 17.7904 12 19.9995 12H59.9995C62.2087 12 63.9995 13.7909 63.9995 16V28C63.9995 30.2091 62.2087 32 59.9995 32H19.9995C17.7904 32 15.9995 30.2091 15.9995 28V16Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M32.3409 12C33.1646 9.66962 35.3871 8 37.9995 8H41.9995C44.612 8 46.8344 9.66962 47.6581 12"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M31.9995 22C31.9995 17.5817 35.5812 14 39.9995 14C44.4178 14 47.9995 17.5817 47.9995 22C47.9995 26.4183 44.4178 30 39.9995 30C35.5812 30 31.9995 26.4183 31.9995 22Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M39.9995 22V22.01"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.9996 39.9999H20.0002C17.6929 39.9999 15.864 41.9466 16.0079 44.2494L17.5079 68.2494C17.6397 70.3575 19.3879 71.9999 21.5002 71.9999H57.9846C60.0968 71.9999 61.845 70.3575 61.9768 68.2494L63.4768 44.2494C63.6207 41.9466 61.7918 39.9999 59.4845 39.9999H54.9996V46C54.9996 53.1797 49.1793 59 41.9996 59H37.9996C30.8199 59 24.9996 53.1797 24.9996 46V39.9999ZM38.9996 39.9999H40.9996V45H38.9996V39.9999Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.9999 44H19.5001C19.5002 44.0103 19.5005 44.0207 19.5011 44.0311L21.0011 68.0311C21.0176 68.2947 21.2361 68.4999 21.5002 68.4999H57.9846C58.2486 68.4999 58.4671 68.2947 58.4836 68.0311L59.9836 44.0311C59.9842 44.0207 59.9846 44.0103 59.9846 44H55.9999V46C55.9999 53.732 49.7319 60 41.9999 60H37.9999C30.2679 60 23.9999 53.732 23.9999 46V44ZM8.94851 52.8523C8.61302 49.721 10.1247 46.8548 12.5653 45.2759L14.0148 68.4678C14.0759 69.4466 14.323 70.372 14.7202 71.2102C12.2972 70.0428 10.5379 67.6863 10.2342 64.8523L8.94851 52.8523ZM69.7659 64.8523C69.4355 67.9361 67.3815 70.4545 64.6243 71.4907C65.1036 70.5802 65.4019 69.5571 65.4699 68.4678L66.938 44.9794C69.6671 46.4764 71.4093 49.5136 71.0516 52.8523L69.7659 64.8523Z"
            fill="currentColor"
          />
          <rect
            x="15.9995"
            y="12"
            width="48"
            height="20"
            rx="4"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.9995 42V46C31.9995 49.3137 34.6858 52 37.9995 52H41.9995C45.3132 52 47.9995 49.3137 47.9995 46V42H31.9995Z"
            fill="currentColor"
          />
          <path
            d="M31.9995 42V39C30.3427 39 28.9995 40.3431 28.9995 42H31.9995ZM47.9995 42H50.9995C50.9995 40.3431 49.6564 39 47.9995 39V42ZM34.9995 46V42H28.9995V46H34.9995ZM37.9995 49C36.3427 49 34.9995 47.6569 34.9995 46H28.9995C28.9995 50.9706 33.0289 55 37.9995 55V49ZM41.9995 49H37.9995V55H41.9995V49ZM44.9995 46C44.9995 47.6569 43.6564 49 41.9995 49V55C46.9701 55 50.9995 50.9706 50.9995 46H44.9995ZM44.9995 42V46H50.9995V42H44.9995ZM47.9995 39H31.9995V45H47.9995V39Z"
            fill="currentColor"
          />
          <rect
            x="31.9995"
            y="14"
            width="16"
            height="16"
            rx="8"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.9996 39.9999H20.0002C17.6929 39.9999 15.864 41.9466 16.0079 44.2494L17.5079 68.2494C17.6397 70.3575 19.3879 71.9999 21.5002 71.9999H57.9846C60.0968 71.9999 61.845 70.3575 61.9768 68.2494L63.4768 44.2494C63.6207 41.9466 61.7918 39.9999 59.4846 39.9999H47.9996V46C47.9996 49.3137 45.3133 52 41.9996 52H37.9996C34.6859 52 31.9996 49.3137 31.9996 46V39.9999Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.0079 44.2494C16.0038 44.1827 16.0013 44.1162 16.0004 44.0501C11.6887 44.5323 8.47443 48.4275 8.94851 52.8522L10.2342 64.8522C10.6698 68.9174 14.1003 72 18.1887 72H61.8114C65.8998 72 69.3303 68.9174 69.7659 64.8523L71.0516 52.8522C71.5444 48.253 68.0521 44.2259 63.4847 44.0092C63.4844 44.0888 63.4818 44.1689 63.4768 44.2494L61.9768 68.2494C61.845 70.3576 60.0968 71.9999 57.9846 71.9999H21.5002C19.3879 71.9999 17.6397 70.3576 17.5079 68.2494L16.0079 44.2494Z"
            fill="#EB5757"
          />
          <rect
            x="15.9995"
            y="12"
            width="48"
            height="20"
            rx="4"
            fill="#F2994A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.3409 12H47.6581C46.8344 9.66962 44.6119 8 41.9995 8H37.9995C35.3871 8 33.1646 9.66962 32.3409 12ZM47.9995 32H31.9995V46C31.9995 49.3137 34.6858 52 37.9995 52H41.9995C45.3132 52 47.9995 49.3137 47.9995 46V32Z"
            fill="#F2C94C"
          />
          <rect
            x="31.9995"
            y="14"
            width="16"
            height="16"
            rx="8"
            fill="#56CCF2"
          />
          <path
            d="M39.9995 22V22.01"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M31.9997 39.9999H20.0002C17.6929 39.9999 15.8641 41.9466 16.008 44.2494L17.508 68.2494C17.6398 70.3575 19.388 71.9999 21.5002 71.9999H57.9846C60.0969 71.9999 61.8451 70.3575 61.9768 68.2494L63.4768 44.2494C63.6207 41.9466 61.7919 39.9999 59.4846 39.9999H47.9997V46C47.9997 49.3137 45.3134 52 41.9997 52H37.9997C34.6859 52 31.9997 49.3137 31.9997 46V39.9999Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16.008 44.2494C16.0038 44.1826 16.0013 44.1162 16.0004 44.0501C11.6887 44.5323 8.47443 48.4275 8.94851 52.8523L10.2342 64.8523C10.6698 68.9174 14.1003 72 18.1887 72H61.8114C65.8998 72 69.3303 68.9174 69.7659 64.8523L71.0516 52.8523C71.5444 48.253 68.0521 44.2259 63.4847 44.0092C63.4844 44.0888 63.4819 44.1688 63.4768 44.2494L61.9768 68.2494C61.8451 70.3575 60.0969 71.9999 57.9846 71.9999H21.5002C19.388 71.9999 17.6398 70.3575 17.508 68.2494L16.008 44.2494Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M15.9996 16C15.9996 13.7909 17.7904 12 19.9996 12H59.9996C62.2087 12 63.9996 13.7909 63.9996 16V28C63.9996 30.2091 62.2087 32 59.9996 32H19.9996C17.7904 32 15.9996 30.2091 15.9996 28V16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32.341 12H47.6582C46.8345 9.66962 44.612 8 41.9996 8H37.9996C35.3871 8 33.1647 9.66962 32.341 12Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47.9996 32H31.9996L31.9997 46C31.9997 49.3137 34.6859 52 37.9997 52H41.9997C45.3134 52 47.9997 49.3137 47.9997 46L47.9996 32Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M31.9996 22C31.9996 17.5817 35.5813 14 39.9996 14C44.4178 14 47.9996 17.5817 47.9996 22C47.9996 26.4183 44.4178 30 39.9996 30C35.5813 30 31.9996 26.4183 31.9996 22Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16.008 44.2494C15.8641 41.9466 17.6929 39.9999 20.0002 39.9999H31.9997V46M16.008 44.2494L17.508 68.2494C17.6398 70.3575 19.388 71.9999 21.5002 71.9999H57.9846C60.0969 71.9999 61.8451 70.3575 61.9768 68.2494L63.4768 44.2494M16.008 44.2494C16.0038 44.1826 16.0013 44.1162 16.0004 44.0501C11.6887 44.5323 8.47443 48.4275 8.94851 52.8523L10.2342 64.8523C10.6698 68.9174 14.1003 72 18.1887 72H61.8114C65.8998 72 69.3303 68.9174 69.7659 64.8523L71.0516 52.8523C71.5444 48.253 68.0521 44.2259 63.4847 44.0092C63.4844 44.0888 63.4819 44.1688 63.4768 44.2494M63.4768 44.2494C63.6207 41.9466 61.7919 39.9999 59.4846 39.9999H47.9997V46M47.9997 46C47.9997 49.3137 45.3134 52 41.9997 52H37.9997C34.6859 52 31.9997 49.3137 31.9997 46M47.9997 46L47.9996 32H31.9996L31.9997 46M39.9996 22V22.01M19.9996 32H59.9996C62.2087 32 63.9996 30.2091 63.9996 28V16C63.9996 13.7909 62.2087 12 59.9996 12H19.9996C17.7904 12 15.9996 13.7909 15.9996 16V28C15.9996 30.2091 17.7904 32 19.9996 32ZM32.341 12H47.6582C46.8345 9.66962 44.612 8 41.9996 8H37.9996C35.3871 8 33.1647 9.66962 32.341 12ZM39.9996 30C35.5813 30 31.9996 26.4183 31.9996 22C31.9996 17.5817 35.5813 14 39.9996 14C44.4178 14 47.9996 17.5817 47.9996 22C47.9996 26.4183 44.4178 30 39.9996 30Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.0704 10C32.4527 7.6104 35.0362 6 37.9996 6H41.9996C44.9629 6 47.5464 7.6104 48.9287 10H59.9996C63.3133 10 65.9996 12.6863 65.9996 16V28C65.9996 31.3137 63.3133 34 59.9996 34H49.9996L49.9996 37.9999H59.4846C62.1944 37.9999 64.4642 39.7899 65.2182 42.2249C70.0995 43.2769 73.5958 47.8796 73.0402 53.0653L71.7545 65.0653C71.2101 70.1467 66.9219 74 61.8114 74H18.1887C13.0782 74 8.79005 70.1467 8.24561 65.0653L6.9599 53.0653C6.42556 48.0782 9.63799 43.6319 14.226 42.3619C14.9361 39.8574 17.2399 37.9999 20.0002 37.9999H29.9996L29.9996 34H19.9996C16.6859 34 13.9996 31.3137 13.9996 28V16C13.9996 12.6863 16.6859 10 19.9996 10H31.0704ZM19.9996 14C18.895 14 17.9996 14.8954 17.9996 16V28C17.9996 29.1046 18.895 30 19.9996 30H33.9986C31.5703 28.1755 29.9996 25.2712 29.9996 22C29.9996 18.7288 31.5703 15.8245 33.9986 14H19.9996ZM46.0005 14C48.4289 15.8245 49.9996 18.7288 49.9996 22C49.9996 25.2712 48.4289 28.1755 46.0005 30H59.9996C61.1041 30 61.9996 29.1046 61.9996 28V16C61.9996 14.8954 61.1041 14 59.9996 14H46.0005ZM33.9996 34L33.9996 39.9877C33.9996 39.9918 33.9997 39.9958 33.9997 39.9999V46C33.9997 48.2091 35.7905 50 37.9997 50H41.9997C44.2088 50 45.9997 48.2091 45.9997 46L45.9996 34H33.9996ZM29.9997 46L29.9996 41.9999H20.0002C18.8466 41.9999 17.9322 42.9732 18.0041 44.1246L19.5041 68.1246C19.57 69.1787 20.4441 69.9999 21.5002 69.9999H57.9846C59.0407 69.9999 59.9148 69.1787 59.9807 68.1246L61.4807 44.1246C61.481 44.1201 61.4813 44.1156 61.4815 44.1111C61.4835 44.0752 61.4846 44.0395 61.4847 44.0039C61.4881 42.906 60.5977 41.9999 59.4846 41.9999H49.9996L49.9997 46C49.9997 50.4183 46.4179 54 41.9997 54H37.9997C33.5814 54 29.9997 50.4183 29.9997 46ZM65.3442 46.4337L63.9729 68.3741C63.9447 68.8257 63.867 69.263 63.7454 69.6809C65.9013 68.9467 67.5225 67.0171 67.7773 64.6392L69.063 52.6392C69.358 49.8857 67.7478 47.4047 65.3442 46.4337ZM15.6772 69.45C15.5911 69.1028 15.535 68.7432 15.5119 68.3741L14.155 46.6633C12.0328 47.759 10.6632 50.0822 10.9371 52.6392L12.2229 64.6392C12.4543 66.7996 13.8137 68.59 15.6772 69.45ZM39.9996 16C36.6859 16 33.9996 18.6863 33.9996 22C33.9996 25.3137 36.6859 28 39.9996 28C43.3133 28 45.9996 25.3137 45.9996 22C45.9996 18.6863 43.3133 16 39.9996 16ZM39.9996 20C41.1041 20 41.9996 20.8954 41.9996 22V22.01C41.9996 23.1146 41.1041 24.01 39.9996 24.01C38.895 24.01 37.9996 23.1146 37.9996 22.01V22C37.9996 20.8954 38.895 20 39.9996 20Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-robot', CoreRobot)
export default CoreRobot
