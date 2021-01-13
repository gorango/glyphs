
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBattery25 = {
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
            d="M58 68L58 20C58 17.7909 56.2091 16 54 16L26 16C23.7909 16 22 17.7909 22 20L22 68M58 68C58 70.2091 56.2091 72 54 72H26C23.7909 72 22 70.2091 22 68M58 68L58 58M22 68L22 58"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M48 8L32 8"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M22 58L58 58"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M26 72C23.7909 72 22 70.2091 22 68L22 20C22 17.7909 23.7909 16 26 16L54 16C56.2091 16 58 17.7909 58 20L58 68C58 70.2091 56.2091 72 54 72H26Z"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 58L58 58L58 68C58 70.2091 56.2091 72 54 72L26 72C23.7909 72 22 70.2091 22 68L22 58Z"
            fill="currentColor"
          />
          <path
            d="M32 8L48 8"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M26 72C23.7909 72 22 70.2091 22 68L22 20C22 17.7909 23.7909 16 26 16L54 16C56.2091 16 58 17.7909 58 20L58 68C58 70.2091 56.2091 72 54 72H26Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 58L58 58L58 68C58 70.2091 56.2091 72 54 72L26 72C23.7909 72 22 70.2091 22 68L22 58Z"
            fill="#2F80ED"
          />
          <path
            d="M32 8L48 8"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M26 72C23.7909 72 22 70.2091 22 68L22 20C22 17.7909 23.7909 16 26 16L54 16C56.2091 16 58 17.7909 58 20L58 68C58 70.2091 56.2091 72 54 72H26Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M22 58H58L58 68C58 70.2091 56.2091 72 54 72H26C23.7909 72 22 70.2091 22 68L22 58Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58 68L58 20C58 17.7909 56.2091 16 54 16L26 16C23.7909 16 22 17.7909 22 20L22 68M58 68C58 70.2091 56.2091 72 54 72H26C23.7909 72 22 70.2091 22 68M58 68L58 58H22L22 68M48 8L32 8"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M32 6C30.8954 6 30 6.89543 30 8C30 9.10457 30.8954 10 32 10L48 10C49.1045 10 50 9.10457 50 8C50 6.89543 49.1045 6 48 6L32 6Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 20L20 68C20 71.3137 22.6863 74 26 74H54C57.3137 74 60 71.3137 60 68V20C60 16.6863 57.3137 14 54 14L26 14C22.6863 14 20 16.6863 20 20ZM54 18L26 18C24.8954 18 24 18.8954 24 20L24 56H56V20C56 18.8954 55.1046 18 54 18ZM24 68L24 60H56V68C56 69.1046 55.1046 70 54 70H26C25.931 70 25.8627 69.9965 25.7955 69.9897C24.787 69.8873 24 69.0355 24 68Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-battery-25', CoreBattery25)
export default CoreBattery25
