
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsZendesk = {
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
        ${variant === "color" && svg`
          <path
            d="M42.5 12.5L42.5001 51.7857L75.0001 12.5H42.5Z"
            fill="#07363D"
          />
          <path
            d="M21.2501 30C30.1405 30 37.5001 21.0395 37.5001 12.5001H5.00006C5.00006 21.0395 12.3596 30 21.2501 30Z"
            fill="#07363D"
          />
          <path
            d="M42.5001 67.5C42.5001 58.9605 49.8596 50 58.7501 50C67.6405 50 75.0001 58.9605 75.0001 67.5H42.5001Z"
            fill="#07363D"
          />
          <path
            d="M37.5001 67.5V28.2143L5 67.5H37.5001Z"
            fill="#07363D"
          />
        `}
        ${variant === "solid" && svg`
          <path
            d="M42.5 12.5L42.5001 51.7857L75.0001 12.5H42.5Z"
            fill="currentColor"
          />
          <path
            d="M21.2501 30C30.1405 30 37.5001 21.0395 37.5001 12.5001H5.00006C5.00006 21.0395 12.3596 30 21.2501 30Z"
            fill="currentColor"
          />
          <path
            d="M42.5001 67.5C42.5001 58.9605 49.8596 50 58.7501 50C67.6405 50 75.0001 58.9605 75.0001 67.5H42.5001Z"
            fill="currentColor"
          />
          <path
            d="M37.5001 67.5V28.2143L5 67.5H37.5001Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M42.5 12.5L42.5001 51.7857L75.0001 12.5H42.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M21.2501 30C30.1405 30 37.5001 21.0395 37.5001 12.5001H5.00006C5.00006 21.0395 12.3596 30 21.2501 30Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M42.5001 67.5C42.5001 58.9605 49.8596 50 58.7501 50C67.6405 50 75.0001 58.9605 75.0001 67.5H42.5001Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M37.5001 67.5V28.2143L5 67.5H37.5001Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-zendesk', BrandsZendesk)
export default BrandsZendesk
