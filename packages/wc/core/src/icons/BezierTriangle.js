
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBezierTriangle = {
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
            d="M11 51H23V63H11V51Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M20.3701 51L36.5359 23"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M34 11H46V23H34V11Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M59.6297 51L43.4639 23"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M57 51H69V63H57V51Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M57 57.5H23"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M20.3701 51L17.772 49.5L15.174 54H20.3701V51ZM36.5359 23V20H34.8039L33.9378 21.5L36.5359 23ZM23 51H26V48H23V51ZM23 57.5H20V60.5H23V57.5ZM57 57.5V60.5H60V57.5H57ZM57 51V48H54V51H57ZM59.6299 51V54H64.8261L62.228 49.5L59.6299 51ZM43.4641 23L46.0622 21.5L45.1962 20H43.4641V23ZM22.9682 52.5L39.134 24.5L33.9378 21.5L17.772 49.5L22.9682 52.5ZM23 48H20.3701V54H23V48ZM26 57.5L26 51H20L20 57.5H26ZM57 54.5L23 54.5L23 60.5L57 60.5V54.5ZM60 57.5V51H54V57.5H60ZM57 54H59.6299V48H57V54ZM40.8661 24.5L57.0319 52.5L62.228 49.5L46.0622 21.5L40.8661 24.5ZM36.5359 26H43.4641V20H36.5359V26Z"
            fill="currentColor"
          />
          <rect
            x="34"
            y="11"
            width="12"
            height="12"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="11"
            y="51"
            width="12"
            height="12"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="57"
            y="51"
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
            d="M20.3701 51L18.6381 50L16.906 53H20.3701V51ZM36.5359 23V21H35.3812L34.8039 22L36.5359 23ZM23 51H25V49H23V51ZM23 57.5H21V59.5H23V57.5ZM57 57.5V59.5H59V57.5H57ZM57 51V49H55V51H57ZM59.6299 51V53H63.094L61.362 50L59.6299 51ZM43.4641 23L45.1962 22L44.6188 21H43.4641V23ZM22.1022 52L38.268 24L34.8039 22L18.6381 50L22.1022 52ZM23 49H20.3701V53H23V49ZM25 57.5L25 51H21L21 57.5H25ZM57 55.5L23 55.5V59.5L57 59.5V55.5ZM59 57.5V51H55V57.5H59ZM57 53H59.6299V49H57V53ZM41.7321 24L57.8979 52L61.362 50L45.1962 22L41.7321 24ZM36.5359 25H43.4641V21H36.5359V25Z"
            fill="#6FCF97"
          />
          <rect
            x="34"
            y="11"
            width="12"
            height="12"
            fill="#F2994A"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="11"
            y="51"
            width="12"
            height="12"
            fill="#F2994A"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="57"
            y="51"
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
            d="M36.5359 23L20.3701 51H23V57.5H57V51H59.6299L43.4641 23H36.5359Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M34 11H46V23H34V11Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M11 51H23V63H11V51Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M57 51H69V63H57V51Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M23 51H20.3701L36.5359 23H43.4641L59.6299 51H57M23 51V57.5H57V51M23 51H11V63H23V51ZM57 51H69V63H57V51ZM34 11H46V23H34V11Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34 9C32.8954 9 32 9.89543 32 11V23C32 23.8102 32.4818 24.5079 33.1744 24.8222L19.2154 49H11C9.89543 49 9 49.8954 9 51V63C9 64.1046 9.89543 65 11 65H23C24.1046 65 25 64.1046 25 63V59.5H55V63C55 64.1046 55.8954 65 57 65H69C70.1046 65 71 64.1046 71 63V51C71 49.8954 70.1046 49 69 49H60.7846L46.8256 24.8222C47.5182 24.5079 48 23.8102 48 23V11C48 9.89543 47.1046 9 46 9H34ZM55 49H56.1658L42.3094 25H37.6906L23.8342 49H25V55.5H55V49ZM59 61H67V53H59V61ZM21 61H13V53H21V61ZM44 21V13H36V21H44Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-bezier-triangle', CoreBezierTriangle)
export default CoreBezierTriangle
