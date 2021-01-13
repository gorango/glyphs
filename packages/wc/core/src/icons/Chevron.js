
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreChevron = {
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
            d="M15.9629 52.1839L36.7809 31.3659C38.5383 29.6085 41.3875 29.6085 43.1449 31.3659L63.9629 52.1839"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M16.0371 52.3672L36.8551 31.5492C38.6125 29.7918 41.4617 29.7918 43.2191 31.5492L64.0371 52.3672"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M16.0371 52.1836L36.8551 31.3656C38.6125 29.6082 41.4617 29.6082 43.2191 31.3656L64.0371 52.1836"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M15.9629 52.1834L36.7809 31.3654C38.5383 29.608 41.3875 29.608 43.1449 31.3654L63.9629 52.1834"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M39.33 30.0624C39.7205 29.6719 40.3537 29.6719 40.7442 30.0624L62.6229 51.9411C63.4039 52.7222 64.6703 52.7222 65.4513 51.9411C66.2324 51.1601 66.2324 49.8937 65.4513 49.1127L43.5726 27.234C41.62 25.2814 38.4542 25.2814 36.5016 27.234L14.6229 49.1127C13.8418 49.8937 13.8418 51.1601 14.6229 51.9411C15.4039 52.7222 16.6703 52.7222 17.4513 51.9411L39.33 30.0624Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-chevron', CoreChevron)
export default CoreChevron
