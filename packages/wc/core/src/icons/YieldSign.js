
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreYieldSign = {
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
            d="M41.7275 61.0385C40.9557 62.3615 39.0441 62.3615 38.2724 61.0385L13.7545 19.0077C12.9767 17.6744 13.9384 16 15.482 16L64.5179 16C66.0614 16 67.0232 17.6744 66.2454 19.0077L41.7275 61.0385Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M41.7276 61.0385C40.9558 62.3615 39.0442 62.3615 38.2724 61.0385L13.7545 19.0077C12.9768 17.6744 13.9385 16 15.4821 16L64.5179 16C66.0615 16 67.0233 17.6744 66.2455 19.0077L41.7276 61.0385Z"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M41.7276 61.0385C40.9558 62.3615 39.0442 62.3615 38.2724 61.0385L13.7545 19.0077C12.9768 17.6744 13.9385 16 15.4821 16L64.5179 16C66.0615 16 67.0233 17.6744 66.2455 19.0077L41.7276 61.0385Z"
            fill="#F2C94C"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M41.7275 61.0385C40.9557 62.3615 39.0441 62.3615 38.2724 61.0385L13.7545 19.0077C12.9767 17.6744 13.9384 16 15.482 16L64.5179 16C66.0614 16 67.0232 17.6744 66.2454 19.0077L41.7275 61.0385Z"
            fill="currentColor"
            fill-opacity="0.25"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.4551 62.0462C41.9116 64.6922 38.0884 64.6922 36.5449 62.0462L12.027 20.0155C10.4714 17.3488 12.3949 14 15.4821 14L64.5179 14C67.6051 14 69.5286 17.3489 67.9731 20.0155L43.4551 62.0462ZM40 60.0307L64.518 18L15.4821 18L40 60.0307Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-yield-sign', CoreYieldSign)
export default CoreYieldSign
