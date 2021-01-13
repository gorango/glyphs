
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreArrowTurn = {
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
            d="M40.3432 28.9995L19.6569 28.9995C17.5694 28.9995 16.524 26.4756 18.0001 24.9995L27.8787 15.1209C29.0503 13.9493 30.9498 13.9493 32.1214 15.1209L42.0001 24.9995C43.4762 26.4756 42.4307 28.9995 40.3432 28.9995Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M30 29L30 39C30 54.464 42.536 67 58 67L66 67"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M33 29C33 27.3431 31.6569 26 30 26C28.3431 26 27 27.3431 27 29L33 29ZM58 67L58 64L58 67ZM66 70C67.6569 70 69 68.6569 69 67C69 65.3431 67.6569 64 66 64L66 70ZM27 29L27 39L33 39L33 29L27 29ZM58 70L66 70L66 64L58 64L58 70ZM27 39C27 56.1208 40.8792 70 58 70L58 64C44.1929 64 33 52.8071 33 39L27 39Z"
            fill="currentColor"
          />
          <path
            d="M40.3431 29L19.6569 29C17.5693 29 16.5239 26.4761 18 25L27.8787 15.1213C29.0503 13.9497 30.9497 13.9497 32.1213 15.1213L42 25C43.4761 26.4761 42.4307 29 40.3431 29Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M32 29C32 27.8954 31.1046 27 30 27C28.8954 27 28 27.8954 28 29L32 29ZM58 67L58 65L58 67ZM66 69C67.1046 69 68 68.1046 68 67C68 65.8954 67.1046 65 66 65L66 69ZM28 29L28 39L32 39L32 29L28 29ZM58 69L66 69L66 65L58 65L58 69ZM28 39C28 55.5685 41.4315 69 58 69L58 65C43.6406 65 32 53.3594 32 39L28 39Z"
            fill="#56CCF2"
          />
          <path
            d="M40.3431 29L19.6569 29C17.5693 29 16.5239 26.4761 18 25L27.8787 15.1213C29.0503 13.9497 30.9497 13.9497 32.1213 15.1213L42 25C43.4761 26.4761 42.4307 29 40.3431 29Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M40.3432 29H19.6569C17.5694 29 16.524 26.4761 18.0001 25L27.8787 15.1214C29.0503 13.9498 30.9498 13.9498 32.1214 15.1214L42.0001 25C43.4762 26.4761 42.4307 29 40.3432 29Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30.0001 29V39C30.0001 54.464 42.5361 67 58.0001 67H66.0001M19.6569 29H40.3432C42.4307 29 43.4762 26.4761 42.0001 25L32.1214 15.1214C30.9498 13.9498 29.0503 13.9498 27.8787 15.1214L18.0001 25C16.524 26.4761 17.5694 29 19.6569 29Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.0905 31.086H38.9337C43.2485 31.086 45.4093 25.8692 42.3583 22.8182L32.4796 12.9395C30.3317 10.7916 26.8493 10.7916 24.7014 12.9395L14.8228 22.8182C11.7718 25.8692 13.9326 31.086 18.2474 31.086L26.0905 31.086L26.0905 38.586C26.0905 55.4307 39.7458 69.086 56.5905 69.086H64.5905C65.9712 69.086 67.0905 67.9667 67.0905 66.586C67.0905 65.2053 65.9712 64.086 64.5905 64.086H56.5905C42.5073 64.086 31.0905 52.6692 31.0905 38.586V31.086ZM28.237 16.4751C28.4322 16.2798 28.7488 16.2798 28.9441 16.4751L38.555 26.086L18.6261 26.086L28.237 16.4751Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-arrow-turn', CoreArrowTurn)
export default CoreArrowTurn
