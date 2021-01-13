
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsMicrosoft = {
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
          <rect
            x="42.5"
            y="42.5"
            width="25"
            height="25"
            fill="#FEBA08"
          />
          <rect
            x="12.5"
            y="42.5"
            width="25"
            height="25"
            fill="#05A6F0"
          />
          <rect
            x="42.5"
            y="12.5"
            width="25"
            height="25"
            fill="#80BC06"
          />
          <rect
            x="12.5"
            y="12.5"
            width="25"
            height="25"
            fill="#F25325"
          />
        `}
        ${variant === "solid" && svg`
          <path
            d="M42.5 42.5H67.5V67.5H42.5V42.5Z"
            fill="currentColor"
          />
          <path
            d="M12.5 42.5H37.5V67.5H12.5V42.5Z"
            fill="currentColor"
          />
          <path
            d="M42.5 12.5H67.5V37.5H42.5V12.5Z"
            fill="currentColor"
          />
          <path
            d="M12.5 12.5H37.5V37.5H12.5V12.5Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M42.5 42.5H67.5V67.5H42.5V42.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12.5 42.5H37.5V67.5H12.5V42.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M42.5 12.5H67.5V37.5H42.5V12.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12.5 12.5H37.5V37.5H12.5V12.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-microsoft', BrandsMicrosoft)
export default BrandsMicrosoft
