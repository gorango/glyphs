
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBezierCurve = {
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
            d="M34 18H46V30H34V18Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M34 24.7561C23.6486 27.4204 16 36.817 16 48V50"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46 24.7561C56.3514 27.4204 64 36.817 64 48V50"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M10 50H22V62H10V50Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M58 50H70V62H58V50Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M14 24H34"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M66 24H46"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M14 24C14 26.2091 12.2091 28 10 28C7.79086 28 6 26.2091 6 24C6 21.7909 7.79086 20 10 20C12.2091 20 14 21.7909 14 24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M74 24C74 26.2091 72.2091 28 70 28C67.7909 28 66 26.2091 66 24C66 21.7909 67.7909 20 70 20C72.2091 20 74 21.7909 74 24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M34.7478 27.6614L37.6531 26.9136L36.1575 21.103L33.2522 21.8508L34.7478 27.6614ZM46.7478 21.8508L43.8425 21.103L42.3469 26.9136L45.2522 27.6614L46.7478 21.8508ZM61 50V53H67V50H61ZM13 50V53H19V50H13ZM19 48C19 38.219 25.6897 29.9928 34.7478 27.6614L33.2522 21.8508C21.6076 24.8479 13 35.415 13 48H19ZM45.2522 27.6614C54.3103 29.9928 61 38.219 61 48H67C67 35.415 58.3924 24.8479 46.7478 21.8508L45.2522 27.6614ZM61 48V50H67V48H61ZM19 50V48H13V50H19Z"
            fill="currentColor"
          />
          <path
            d="M14 21H11L11 27H14L14 21ZM34 27H37V21H34V27ZM46 21H43V27H46V21ZM66 27H69V21H66V27ZM14 27L34 27V21L14 21L14 27ZM46 27L66 27V21L46 21V27Z"
            fill="currentColor"
          />
          <rect
            x="58"
            y="50"
            width="12"
            height="12"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="10"
            y="50"
            width="12"
            height="12"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="34"
            y="18"
            width="12"
            height="12"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <circle
            cx="10"
            cy="24"
            r="4"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <circle
            cx="70"
            cy="24"
            r="4"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M34.4985 26.693L36.4354 26.1945L35.4384 22.3207L33.5015 22.8192L34.4985 26.693ZM46.4985 22.8192L44.5616 22.3207L43.5646 26.1945L45.5015 26.693L46.4985 22.8192ZM62 50V52H66V50H62ZM14 50V52H18V50H14ZM18 48C18 37.7516 25.0093 29.1353 34.4985 26.693L33.5015 22.8192C22.2879 25.7054 14 35.8823 14 48H18ZM45.5015 26.693C54.9907 29.1353 62 37.7516 62 48H66C66 35.8823 57.7121 25.7054 46.4985 22.8192L45.5015 26.693ZM62 48V50H66V48H62ZM18 50V48H14V50H18Z"
            fill="#6FCF97"
          />
          <path
            d="M14 22H12V26H14V22ZM34 26H36V22H34V26ZM46 22H44V26H46V22ZM66 26H68V22H66V26ZM14 26L34 26V22L14 22V26ZM46 26L66 26V22L46 22V26Z"
            fill="#6FCF97"
          />
          <rect
            x="58"
            y="50"
            width="12"
            height="12"
            fill="#F2C94C"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="10"
            y="50"
            width="12"
            height="12"
            fill="#F2C94C"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="34"
            y="18"
            width="12"
            height="12"
            fill="#F2C94C"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <circle
            cx="10"
            cy="24"
            r="4"
            fill="#EB5757"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <circle
            cx="70"
            cy="24"
            r="4"
            fill="#EB5757"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M58 50H70V62H58V50Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M10 50H22V62H10V50Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M34 18H46V30H34V18Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M14 24C14 26.2091 12.2091 28 10 28C7.79086 28 6 26.2091 6 24C6 21.7909 7.79086 20 10 20C12.2091 20 14 21.7909 14 24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M74 24C74 26.2091 72.2091 28 70 28C67.7909 28 66 26.2091 66 24C66 21.7909 67.7909 20 70 20C72.2091 20 74 21.7909 74 24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M34 24.7561C23.6486 27.4204 16 36.817 16 48V50M46 24.7561C56.3514 27.4204 64 36.817 64 48V50M14 24H34M14 24C14 26.2091 12.2091 28 10 28C7.79086 28 6 26.2091 6 24C6 21.7909 7.79086 20 10 20C12.2091 20 14 21.7909 14 24ZM46 24H66M66 24C66 26.2091 67.7909 28 70 28C72.2091 28 74 26.2091 74 24C74 21.7909 72.2091 20 70 20C67.7909 20 66 21.7909 66 24ZM58 50H70V62H58V50ZM10 50H22V62H10V50ZM34 18H46V30H34V18Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34 16C32.8954 16 32 16.8954 32 18V22H15.6586C14.8349 19.6696 12.6124 18 10 18C6.68629 18 4 20.6863 4 24C4 27.3137 6.68629 30 10 30C12.6124 30 14.8349 28.3304 15.6586 26H26.1382C18.845 30.6046 14 38.735 14 48H10C8.89543 48 8 48.8954 8 50V62C8 63.1046 8.89543 64 10 64H22C23.1046 64 24 63.1046 24 62V50C24 48.8954 23.1046 48 22 48H18C18 38.674 23.8044 30.6995 32 27.4991V30C32 31.1046 32.8954 32 34 32H46C47.1046 32 48 31.1046 48 30V27.4991C56.1956 30.6995 62 38.674 62 48H58C56.8954 48 56 48.8954 56 50V62C56 63.1046 56.8954 64 58 64H70C71.1046 64 72 63.1046 72 62V50C72 48.8954 71.1046 48 70 48H66C66 38.735 61.155 30.6046 53.8618 26H64.3414C65.1651 28.3304 67.3876 30 70 30C73.3137 30 76 27.3137 76 24C76 20.6863 73.3137 18 70 18C67.3876 18 65.1651 19.6696 64.3414 22H48V18C48 16.8954 47.1046 16 46 16H34ZM68 24C68 25.1046 68.8954 26 70 26C71.1046 26 72 25.1046 72 24C72 22.8954 71.1046 22 70 22C68.8954 22 68 22.8954 68 24ZM10 22C11.1046 22 12 22.8954 12 24C12 25.1046 11.1046 26 10 26C8.89543 26 8 25.1046 8 24C8 22.8954 8.89543 22 10 22ZM44 20H36V24.5029L36.4354 26.1945L36 26.3065V28H44V26.3065L43.5646 26.1945L44 24.5029V20ZM12 52H20V60H12V52ZM68 52H60V60H68V52Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-bezier-curve', CoreBezierCurve)
export default CoreBezierCurve
