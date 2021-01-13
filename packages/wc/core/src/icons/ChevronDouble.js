
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreChevronDouble = {
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
            d="M15.9629 44.1831L37.8416 22.3045C39.0131 21.1329 40.9126 21.1329 42.0842 22.3045L63.9629 44.1831"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M15.9629 60.1831L37.8416 38.3045C39.0131 37.1329 40.9126 37.1329 42.0842 38.3045L63.9629 60.1831"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M16.0371 44.1836L36.8551 23.3656C38.6125 21.6082 41.4617 21.6082 43.2191 23.3656L64.0371 44.1836"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16.0371 60.1836L36.8551 39.3656C38.6125 37.6082 41.4617 37.6082 43.2191 39.3656L64.0371 60.1836"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M16.0371 44.1836L36.8551 23.3656C38.6125 21.6082 41.4617 21.6082 43.2191 23.3656L64.0371 44.1836"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16.0371 60.1836L36.8551 39.3656C38.6125 37.6082 41.4617 37.6082 43.2191 39.3656L64.0371 60.1836"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M15.9629 44.1834L36.7809 23.3654C38.5383 21.608 41.3875 21.608 43.1449 23.3654L63.9629 44.1834M15.9629 60.1834L36.7809 39.3654C38.5383 37.608 41.3875 37.608 43.1449 39.3654L63.9629 60.1834"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M40.7442 22.0619C40.3537 21.6714 39.7205 21.6714 39.33 22.0619L17.4513 43.9406C16.6703 44.7217 15.4039 44.7217 14.6229 43.9406C13.8418 43.1596 13.8418 41.8932 14.6229 41.1122L36.5016 19.2335C38.4542 17.2809 41.62 17.2809 43.5726 19.2335L65.4513 41.1122C66.2324 41.8932 66.2324 43.1596 65.4513 43.9406C64.6703 44.7217 63.4039 44.7217 62.6229 43.9406L40.7442 22.0619Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40.7442 38.0619C40.3537 37.6714 39.7205 37.6714 39.33 38.0619L17.4513 59.9406C16.6703 60.7217 15.4039 60.7217 14.6229 59.9406C13.8418 59.1596 13.8418 57.8932 14.6229 57.1122L36.5016 35.2335C38.4542 33.2809 41.62 33.2809 43.5726 35.2335L65.4513 57.1122C66.2324 57.8932 66.2324 59.1596 65.4513 59.9406C64.6703 60.7217 63.4039 60.7217 62.6229 59.9406L40.7442 38.0619Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-chevron-double', CoreChevronDouble)
export default CoreChevronDouble
