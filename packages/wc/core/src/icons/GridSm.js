
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreGridSm = {
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
            d="M30 10V70"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M50 10V70"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M70 30L10 30"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M70 50L10 50"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M10 14C10 11.7909 11.7909 10 14 10H66C68.2091 10 70 11.7909 70 14V66C70 68.2091 68.2091 70 66 70H14C11.7909 70 10 68.2091 10 66V14Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M48.0469 14C48.0469 11.7909 46.256 10 44.0469 10H36.0469C33.8377 10 32.0469 11.7909 32.0469 14V22C32.0469 24.2091 33.8377 26 36.0469 26L44.0469 26C46.256 26 48.0469 24.2091 48.0469 22V14Z"
            fill="currentColor"
          />
          <path
            d="M22.0469 10C24.256 10 26.0469 11.7909 26.0469 14V22C26.0469 24.2091 24.256 26 22.0469 26H14C11.7909 26 10 24.2091 10 22V14C10 11.7909 11.7909 10 14 10H22.0469Z"
            fill="currentColor"
          />
          <path
            d="M26.0469 36C26.0469 33.7909 24.256 32 22.0469 32H14C11.7909 32 10 33.7909 10 36V44C10 46.2091 11.7909 48 14 48H22.0469C24.256 48 26.0469 46.2091 26.0469 44V36Z"
            fill="currentColor"
          />
          <path
            d="M26.0469 58C26.0469 55.7909 24.256 54 22.0469 54H14C11.7909 54 10 55.7909 10 58V66C10 68.2091 11.7909 70 14 70H22.0469C24.256 70 26.0469 68.2091 26.0469 66V58Z"
            fill="currentColor"
          />
          <path
            d="M32.0469 58C32.0469 55.7909 33.8377 54 36.0469 54L44.0469 54C46.256 54 48.0469 55.7909 48.0469 58V66C48.0469 68.2091 46.256 70 44.0469 70H36.0469C33.8377 70 32.0469 68.2091 32.0469 66V58Z"
            fill="currentColor"
          />
          <path
            d="M48.0469 44C48.0469 46.2091 46.256 48 44.0469 48L36.0469 48C33.8377 48 32.0469 46.2091 32.0469 44V36C32.0469 33.7909 33.8377 32 36.0469 32L44.0469 32C46.256 32 48.0469 33.7909 48.0469 36V44Z"
            fill="currentColor"
          />
          <path
            d="M58.0469 54C55.8377 54 54.0469 55.7909 54.0469 58V66C54.0469 68.2091 55.8377 70 58.0469 70H66C68.2091 70 70 68.2091 70 66V58C70 55.7909 68.2091 54 66 54H58.0469Z"
            fill="currentColor"
          />
          <path
            d="M70 44C70 46.2091 68.2091 48 66 48H58.0469C55.8377 48 54.0469 46.2091 54.0469 44V36C54.0469 33.7909 55.8377 32 58.0469 32H66C68.2091 32 70 33.7909 70 36V44Z"
            fill="currentColor"
          />
          <path
            d="M70 14V22C70 24.2091 68.2091 26 66 26H58.0469C55.8377 26 54.0469 24.2091 54.0469 22V14C54.0469 11.7909 55.8377 10 58.0469 10H66C68.2091 10 70 11.7909 70 14Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M48 14C48 11.7909 46.2091 10 44 10H36C33.7909 10 32 11.7909 32 14V24C32 26.2091 33.7909 28 36 28L44 28C46.2091 28 48 26.2091 48 24V14Z"
            fill="#2F80ED"
          />
          <path
            d="M24 10C26.2091 10 28 11.7909 28 14V24C28 26.2091 26.2091 28 24 28H14C11.7909 28 10 26.2091 10 24V14C10 11.7909 11.7909 10 14 10H24Z"
            fill="#2F80ED"
          />
          <path
            d="M28 36C28 33.7909 26.2091 32 24 32H14C11.7909 32 10 33.7909 10 36V44C10 46.2091 11.7909 48 14 48H24C26.2091 48 28 46.2091 28 44V36Z"
            fill="#2F80ED"
          />
          <path
            d="M28 56C28 53.7909 26.2091 52 24 52H14C11.7909 52 10 53.7909 10 56V66C10 68.2091 11.7909 70 14 70H24C26.2091 70 28 68.2091 28 66V56Z"
            fill="#2F80ED"
          />
          <path
            d="M32 56C32 53.7909 33.7909 52 36 52L44 52C46.2091 52 48 53.7909 48 56V66C48 68.2091 46.2091 70 44 70H36C33.7909 70 32 68.2091 32 66V56Z"
            fill="#2F80ED"
          />
          <path
            d="M48 44C48 46.2091 46.2091 48 44 48L36 48C33.7909 48 32 46.2091 32 44V36C32 33.7909 33.7909 32 36 32L44 32C46.2091 32 48 33.7909 48 36V44Z"
            fill="#2F80ED"
          />
          <path
            d="M56 52C53.7909 52 52 53.7909 52 56V66C52 68.2091 53.7909 70 56 70H66C68.2091 70 70 68.2091 70 66V56C70 53.7909 68.2091 52 66 52H56Z"
            fill="#2F80ED"
          />
          <path
            d="M70 44C70 46.2091 68.2091 48 66 48H56C53.7909 48 52 46.2091 52 44V36C52 33.7909 53.7909 32 56 32H66C68.2091 32 70 33.7909 70 36V44Z"
            fill="#2F80ED"
          />
          <path
            d="M70 14V24C70 26.2091 68.2091 28 66 28H56C53.7909 28 52 26.2091 52 24V14C52 11.7909 53.7909 10 56 10H66C68.2091 10 70 11.7909 70 14Z"
            fill="#2F80ED"
          />
          <path
            d="M48 14C48 11.7909 46.2091 10 44 10H36C33.7909 10 32 11.7909 32 14V24C32 26.2091 33.7909 28 36 28L44 28C46.2091 28 48 26.2091 48 24V14Z"
            fill="#56CCF2"
          />
          <path
            d="M28 36C28 33.7909 26.2091 32 24 32H14C11.7909 32 10 33.7909 10 36V44C10 46.2091 11.7909 48 14 48H24C26.2091 48 28 46.2091 28 44V36Z"
            fill="#56CCF2"
          />
          <path
            d="M32 56C32 53.7909 33.7909 52 36 52L44 52C46.2091 52 48 53.7909 48 56V66C48 68.2091 46.2091 70 44 70H36C33.7909 70 32 68.2091 32 66V56Z"
            fill="#56CCF2"
          />
          <path
            d="M70 44C70 46.2091 68.2091 48 66 48H56C53.7909 48 52 46.2091 52 44V36C52 33.7909 53.7909 32 56 32H66C68.2091 32 70 33.7909 70 36V44Z"
            fill="#56CCF2"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M10 14C10 11.7909 11.7909 10 14 10H66C68.2091 10 70 11.7909 70 14V66C70 68.2091 68.2091 70 66 70H14C11.7909 70 10 68.2091 10 66V14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30 10V70M50 10V70M70 30L10 30M70 50L10 50M14 70H66C68.2091 70 70 68.2091 70 66V14C70 11.7909 68.2091 10 66 10H14C11.7909 10 10 11.7909 10 14V66C10 68.2091 11.7909 70 14 70Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 14C8 10.6863 10.6863 8 14 8H66C69.3137 8 72 10.6863 72 14V66C72 69.3137 69.3137 72 66 72H14C10.6863 72 8 69.3137 8 66V14ZM12 52V66C12 67.1046 12.8954 68 14 68H28V52H12ZM28 48H12V32H28V48ZM32 52V68H48V52L32 52ZM48 48L32 48V32L48 32V48ZM52 52V68H66C67.1046 68 68 67.1046 68 66V52H52ZM68 48H52V32H68V48ZM68 14V28H52V12H66C67.1046 12 68 12.8954 68 14ZM48 12V28L32 28V12H48ZM28 12V28H12V14C12 12.8954 12.8954 12 14 12H28Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-grid-sm', CoreGridSm)
export default CoreGridSm
