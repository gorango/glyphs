
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreMobileTablet = {
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
            d="M16 14C16 12.8954 16.8954 12 18 12H62C63.1046 12 64 12.8954 64 14V66C64 67.1046 63.1046 68 62 68H18C16.8954 68 16 67.1046 16 66V14Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M44 62H36"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M22 21C22 19.3431 23.3431 18 25 18H55C56.6569 18 58 19.3431 58 21V53C58 54.6569 56.6569 56 55 56H25C23.3431 56 22 54.6569 22 53V21Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M24.5 21C24.5 20.7239 24.7239 20.5 25 20.5H55C55.2761 20.5 55.5 20.7239 55.5 21V53C55.5 53.2761 55.2761 53.5 55 53.5H25C24.7239 53.5 24.5 53.2761 24.5 53V21Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 14C16 12.8954 16.8954 12 18 12L62 12C63.1046 12 64 12.8954 64 14V66C64 67.1046 63.1046 68 62 68H18C16.8954 68 16 67.1046 16 66V14ZM33.5 62C33.5 60.6193 34.6193 59.5 36 59.5H44C45.3807 59.5 46.5 60.6193 46.5 62C46.5 63.3807 45.3807 64.5 44 64.5H36C34.6193 64.5 33.5 63.3807 33.5 62ZM25 15.5C21.9624 15.5 19.5 17.9624 19.5 21V53C19.5 56.0376 21.9624 58.5 25 58.5H55C58.0376 58.5 60.5 56.0376 60.5 53V21C60.5 17.9624 58.0376 15.5 55 15.5H25Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <rect
            x="16"
            y="12"
            width="48"
            height="56"
            rx="2"
            fill="#9B51E0"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46 62H34"
            stroke="#56CCF2"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="25"
            y="18"
            width="30"
            height="38"
            rx="3"
            fill="#56CCF2"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M16 14C16 12.8954 16.8954 12 18 12H62C63.1046 12 64 12.8954 64 14V66C64 67.1046 63.1046 68 62 68H18C16.8954 68 16 67.1046 16 66V14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M25 21C25 19.3431 26.3431 18 28 18H52C53.6569 18 55 19.3431 55 21V53C55 54.6569 53.6569 56 52 56H28C26.3431 56 25 54.6569 25 53V21Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46 62H34M18 68H62C63.1046 68 64 67.1046 64 66V14C64 12.8954 63.1046 12 62 12H18C16.8954 12 16 12.8954 16 14V66C16 67.1046 16.8954 68 18 68ZM28 56H52C53.6569 56 55 54.6569 55 53V21C55 19.3431 53.6569 18 52 18H28C26.3431 18 25 19.3431 25 21V53C25 54.6569 26.3431 56 28 56Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M34 62C34 60.8954 34.8954 60 36 60H44C45.1046 60 46 60.8954 46 62C46 63.1046 45.1046 64 44 64H36C34.8954 64 34 63.1046 34 62Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25 16C22.2386 16 20 18.2386 20 21V53C20 55.7614 22.2386 58 25 58H55C57.7614 58 60 55.7614 60 53V21C60 18.2386 57.7614 16 55 16H25ZM24 21C24 20.4477 24.4477 20 25 20H55C55.5523 20 56 20.4477 56 21V53C56 53.5523 55.5523 54 55 54H25C24.4477 54 24 53.5523 24 53V21Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 14C14 11.7909 15.7909 10 18 10H62C64.2091 10 66 11.7909 66 14V66C66 68.2091 64.2091 70 62 70H18C15.7909 70 14 68.2091 14 66V14ZM62 14L18 14V66H62V14Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-mobile-tablet', CoreMobileTablet)
export default CoreMobileTablet
