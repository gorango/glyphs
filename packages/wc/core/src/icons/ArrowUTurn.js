
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreArrowUTurn = {
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
            d="M28 27.9998L28 48C28 59.0457 36.9543 68 48 68C59.0457 68 68 59.0457 68 48L68 20"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M38.3432 27.9995L17.6569 27.9995C15.5694 27.9995 14.524 25.4756 16.0001 23.9995L25.8787 14.1209C27.0503 12.9493 28.9498 12.9493 30.1214 14.1209L40.0001 23.9995C41.4762 25.4756 40.4307 27.9995 38.3432 27.9995Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M31 27.9998C31 26.3429 29.6569 24.9998 28 24.9998C26.3431 24.9998 25 26.3429 25 27.9998L31 27.9998ZM28 48L25 48L28 48ZM68 26L65 26L68 26ZM71 20C71 18.3431 69.6569 17 68 17C66.3431 17 65 18.3431 65 20L71 20ZM25 27.9998L25 48L31 48L31 27.9998L25 27.9998ZM71 48L71 40L65 40L65 48L71 48ZM71 40L71 26L65 26L65 40L71 40ZM71 26L71 20L65 20L65 26L71 26ZM48 71C60.7025 71 71 60.7026 71 48L65 48C65 57.3888 57.3888 65 48 65L48 71ZM25 48C25 60.7026 35.2975 71 48 71L48 65C38.6112 65 31 57.3888 31 48L25 48Z"
            fill="currentColor"
          />
          <path
            d="M38.3431 28L17.6569 28C15.5693 28 14.5239 25.4761 16 24L25.8787 14.1213C27.0503 12.9497 28.9497 12.9497 30.1213 14.1213L40 24C41.4761 25.4761 40.4307 28 38.3431 28Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M30 27.9998C30 26.8952 29.1046 25.9998 28 25.9998C26.8954 25.9998 26 26.8952 26 27.9998L30 27.9998ZM28 48L26 48L28 48ZM68 26L66 26L68 26ZM70 20C70 18.8954 69.1046 18 68 18C66.8954 18 66 18.8954 66 20L70 20ZM26 27.9998L26 48L30 48L30 27.9998L26 27.9998ZM70 48L70 40L66 40L66 48L70 48ZM70 40L70 26L66 26L66 40L70 40ZM70 26L70 20L66 20L66 26L70 26ZM48 70C60.1503 70 70 60.1503 70 48L66 48C66 57.9411 57.9411 66 48 66L48 70ZM26 48C26 60.1503 35.8497 70 48 70L48 66C38.0589 66 30 57.9411 30 48L26 48Z"
            fill="#56CCF2"
          />
          <path
            d="M38.3431 28L17.6569 28C15.5693 28 14.5239 25.4761 16 24L25.8787 14.1213C27.0503 12.9497 28.9497 12.9497 30.1213 14.1213L40 24C41.4761 25.4761 40.4307 28 38.3431 28Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M38.3432 28H17.6569C15.5694 28 14.524 25.4761 16.0001 24L25.8787 14.1214C27.0503 12.9498 28.9498 12.9498 30.1214 14.1214L40.0001 24C41.4762 25.4761 40.4307 28 38.3432 28Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28.0001 27.9998L28.0001 48C28.0001 59.0457 36.9544 68 48.0001 68C59.0458 68 68.0001 59.0457 68.0001 48L68.0001 20M17.6569 28H38.3432C40.4307 28 41.4762 25.4761 40.0001 24L30.1214 14.1214C28.9498 12.9498 27.0503 12.9498 25.8787 14.1214L16.0001 24C14.524 25.4761 15.5694 28 17.6569 28Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.0002 30L17.657 30C13.7877 30 11.8499 25.3219 14.586 22.5858L24.4646 12.7071C26.4173 10.7545 29.5831 10.7545 31.5357 12.7071L41.4144 22.5858C44.1504 25.3219 42.2126 30 38.3433 30H30.0002L30.0002 48C30.0002 57.9412 38.0591 66 48.0002 66C57.9413 66 66.0002 57.9412 66.0002 48V20C66.0002 18.8955 66.8956 18 68.0002 18C69.1047 18 70.0002 18.8955 70.0002 20V48C70.0002 60.1503 60.1504 70 48.0002 70C35.8499 70 26.0002 60.1503 26.0002 48L26.0002 30ZM27.2931 15.5356C27.6836 15.145 28.3168 15.145 28.7073 15.5356L38.586 25.4142C38.6599 25.4882 38.6796 25.5466 38.6869 25.5892C38.6962 25.6426 38.6913 25.7134 38.6603 25.7882C38.6294 25.863 38.5827 25.9165 38.5384 25.9478C38.5031 25.9726 38.4479 26 38.3433 26L28.0311 26C28.0208 25.9999 28.0105 25.9998 28.0002 25.9998C27.9898 25.9998 27.9795 25.9999 27.9692 26H17.657C17.5525 26 17.4972 25.9726 17.462 25.9478C17.4176 25.9165 17.371 25.863 17.34 25.7882C17.309 25.7134 17.3042 25.6426 17.3134 25.5891C17.3208 25.5466 17.3404 25.4882 17.4144 25.4142L27.2931 15.5356Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-arrow-u-turn', CoreArrowUTurn)
export default CoreArrowUTurn
