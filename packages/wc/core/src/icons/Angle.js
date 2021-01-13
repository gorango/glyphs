
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreAngle = {
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
            d="M52 46.1836L41.591 35.7746C40.7123 34.8959 39.2877 34.8959 38.409 35.7746L28 46.1836"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M28 46.1836L38.409 35.7746C39.2877 34.8959 40.7123 34.8959 41.591 35.7746L52 46.1836"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M28 46.1836L38.409 35.7746C39.2877 34.8959 40.7123 34.8959 41.591 35.7746L52 46.1836"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M28 46.1837L38.409 35.7747C39.2877 34.8961 40.7123 34.8961 41.591 35.7747L52 46.1837"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M39.6464 37.061C39.8417 36.8657 40.1583 36.8657 40.3536 37.061L50.2322 46.9397C51.2085 47.916 52.7915 47.916 53.7678 46.9397C54.7441 45.9634 54.7441 44.3805 53.7678 43.4041L43.8891 33.5255C41.7412 31.3776 38.2588 31.3776 36.1109 33.5255L26.2322 43.4041C25.2559 44.3805 25.2559 45.9634 26.2322 46.9397C27.2085 47.916 28.7915 47.916 29.7678 46.9397L39.6464 37.061Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-angle', CoreAngle)
export default CoreAngle
