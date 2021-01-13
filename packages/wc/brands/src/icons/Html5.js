
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsHtml5 = {
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
            d="M15 70L10 7.5H70L65 70L40 77.5L15 70Z"
            fill="#E44D26"
          />
          <path
            d="M65 12.5H40V73.75L60 67.5L65 12.5Z"
            fill="#F16529"
          />
          <path
            d="M23.75 43.75L21.25 20H60L58.75 27.5H28.75L30 36.25H57.5L55 60L40 65L25 60L23.75 47.5H31.25L32.5 53.75L40 56.25L47.5 53.75L48.75 43.75H23.75Z"
            fill="white"
          />
        `}
        ${variant === "solid" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 7.5L15 70L40 77.5L65 70L70 7.5H10ZM21.25 20L23.75 43.75H48.75L47.5 53.75L40 56.25L32.5 53.75L31.25 47.5H23.75L25 60L40 65L55 60L57.5 36.25H30L28.75 27.5H58.75L60 20H21.25Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M15 70L10 7.5H70L65 70L40 77.5L15 70Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M23.75 43.75L21.25 20H60L58.75 27.5H28.75L30 36.25H57.5L55 60L40 65L25 60L23.75 47.5H31.25L32.5 53.75L40 56.25L47.5 53.75L48.75 43.75H23.75Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-html-5', BrandsHtml5)
export default BrandsHtml5
