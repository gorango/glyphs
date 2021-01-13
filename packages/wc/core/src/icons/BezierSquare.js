
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBezierSquare = {
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
            d="M10 58H22V70H10V58Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16 58V22"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M10 10H22V22H10V10Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M58 16H22"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M58 10H70V22H58V10Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M64 22V58"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M58 58H70V70H58V58Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M58 64H22"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M58 16H61V13H58V16ZM22 16V13H19V16H22ZM58 22H55V25H58V22ZM64 22H67V19H64V22ZM64 58V61H67V58H64ZM58 58V55H55V58H58ZM58 64V67H61V64H58ZM22 64H19V67H22V64ZM22 58H25V55H22V58ZM16 58H13V61H16V58ZM16 22L16 19H13V22H16ZM22 22V25H25V22H22ZM58 13L22 13V19L58 19V13ZM61 22V16H55V22H61ZM64 19H58V25H64V19ZM67 58V22H61L61 58H67ZM58 61H64V55H58V61ZM61 64V58H55V64H61ZM22 67H58V61L22 61V67ZM19 58V64H25V58H19ZM16 61H22V55H16V61ZM13 22L13 58H19L19 22H13ZM22 19H16L16 25H22V19ZM19 16V22H25V16H19Z"
            fill="currentColor"
          />
          <rect
            x="10"
            y="10"
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
            y="58"
            width="12"
            height="12"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="58"
            y="10"
            width="12"
            height="12"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="58"
            y="58"
            width="12"
            height="12"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M58 16H60V14H58V16ZM22 16V14H20V16H22ZM58 22H56V24H58V22ZM64 22H66V20H64V22ZM64 58V60H66V58H64ZM58 58V56H56V58H58ZM58 64V66H60V64H58ZM22 64H20V66H22V64ZM22 58H24V56H22V58ZM16 58H14V60H16V58ZM16 22L16 20H14V22H16ZM22 22V24H24V22H22ZM58 14L22 14V18L58 18V14ZM60 22V16H56V22H60ZM64 20H58V24H64V20ZM66 58V22H62L62 58H66ZM58 60H64V56H58V60ZM60 64V58H56V64H60ZM22 66H58V62L22 62V66ZM20 58V64H24V58H20ZM16 60H22V56H16V60ZM14 22L14 58H18L18 22H14ZM22 20H16L16 24H22V20ZM20 16V22H24V16H20Z"
            fill="#6FCF97"
          />
          <rect
            x="10"
            y="10"
            width="12"
            height="12"
            fill="#F2994A"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="10"
            y="58"
            width="12"
            height="12"
            fill="#F2994A"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="58"
            y="10"
            width="12"
            height="12"
            fill="#F2994A"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="58"
            y="58"
            width="12"
            height="12"
            fill="#F2994A"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M22 16H58V22H64V58H58V64H22V58H16V22H22V16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M10 10H22V22H10V10Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M10 58H22V70H10V58Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58 10H70V22H58V10Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58 58H70V70H58V58Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58 22V16H22V22M58 22H64V58H58M58 22H70V10H58V22ZM58 58V64H22V58M58 58H70V70H58V58ZM22 58H16V22H22M22 58H10V70H22V58ZM22 22V10H10V22H22Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 10C8 8.89543 8.89543 8 10 8H22C23.1046 8 24 8.89543 24 10V14H56V10C56 8.89543 56.8954 8 58 8H70C71.1046 8 72 8.89543 72 10V22C72 23.1046 71.1046 24 70 24H66V56H70C71.1046 56 72 56.8954 72 58V70C72 71.1046 71.1046 72 70 72H58C56.8954 72 56 71.1046 56 70V66H24V70C24 71.1046 23.1046 72 22 72H10C8.89543 72 8 71.1046 8 70V58C8 56.8954 8.89543 56 10 56H14V24H10C8.89543 24 8 23.1046 8 22V10ZM56 62V56H62V24H56V18H24V24H18V56H24V62H56ZM60 60V68H68V60H60ZM68 20H60V12H68V20ZM20 60H12V68H20V60ZM20 12V20H12V12H20Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-bezier-square', CoreBezierSquare)
export default CoreBezierSquare
