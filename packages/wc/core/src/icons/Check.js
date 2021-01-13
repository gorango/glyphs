
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreCheck = {
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
            d="M14.5442 40.3106L30.1005 55.867C30.8816 56.648 32.1479 56.648 32.929 55.867L65.4559 23.3401"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M14.1214 40.092L29.6777 55.6484C30.4588 56.4294 31.7251 56.4294 32.5062 55.6484L65.0331 23.1214"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M14.1214 40.092L29.6777 55.6484C30.4588 56.4294 31.7251 56.4294 32.5062 55.6484L65.0331 23.1214"
            stroke="#219653"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M14.5442 40.3106L30.1005 55.867C30.8816 56.648 32.1479 56.648 32.929 55.867L65.4559 23.3401"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M66.4472 21.7071C67.2283 22.4882 67.2283 23.7545 66.4472 24.5356L33.9203 57.0625C32.3582 58.6246 29.8256 58.6246 28.2635 57.0625L12.7071 41.5061C11.9261 40.7251 11.9261 39.4587 12.7071 38.6777C13.4882 37.8966 14.7545 37.8966 15.5356 38.6777L31.0919 54.234L63.6188 21.7071C64.3999 20.9261 65.6662 20.9261 66.4472 21.7071Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-check', CoreCheck)
export default CoreCheck
