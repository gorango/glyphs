
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreAlignCenter = {
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
            d="M16 15.9648L64 15.9648"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M26 27.9648L54 27.9648"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16 39.9648L64 39.9648"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M26 51.9648L54 51.9648"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16 63.9648L64 63.9648"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M26 52.6497L54 52.6497"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M26 28.6497L54 28.6497"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16 40.6497L64 40.6497"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16 64.6497L64 64.6497"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16 16.6497L64 16.6497"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M26 51.9648L54 51.9648"
            stroke="#56CCF2"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M26 27.9648L54 27.9648"
            stroke="#56CCF2"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16 39.9648L64 39.9648"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16 63.9648L64 63.9648"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16 15.9648L64 15.9648"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M26 51.9648H54M26 27.9648H54M16 39.9648H64M16 63.9648H64M16 15.9648H64"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M16 17.9648C14.8954 17.9648 14 17.0694 14 15.9648C14 14.8603 14.8954 13.9648 16 13.9648H64C65.1046 13.9648 66 14.8603 66 15.9648C66 17.0694 65.1046 17.9648 64 17.9648H16Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 27.9648C24 29.0694 24.8954 29.9648 26 29.9648H54C55.1046 29.9648 56 29.0694 56 27.9648C56 26.8603 55.1046 25.9648 54 25.9648H26C24.8954 25.9648 24 26.8603 24 27.9648Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 51.9648C24 53.0694 24.8954 53.9648 26 53.9648H54C55.1046 53.9648 56 53.0694 56 51.9648C56 50.8603 55.1046 49.9648 54 49.9648H26C24.8954 49.9648 24 50.8603 24 51.9648Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16 41.9648C14.8954 41.9648 14 41.0694 14 39.9648C14 38.8603 14.8954 37.9648 16 37.9648H64C65.1046 37.9648 66 38.8603 66 39.9648C66 41.0694 65.1046 41.9648 64 41.9648H16Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M14 63.9648C14 65.0694 14.8954 65.9648 16 65.9648H64C65.1046 65.9648 66 65.0694 66 63.9648C66 62.8603 65.1046 61.9648 64 61.9648H16C14.8954 61.9648 14 62.8603 14 63.9648Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-align-center', CoreAlignCenter)
export default CoreAlignCenter
