
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsSaintLucia = {
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
        ${variant === "rectangle" && svg`
          <path
            d="M120 0.0776367H0V79.9225H120V0.0776367Z"
            fill="#2F80ED"
          />
          <path
            d="M40 60H80L60 12L40 60Z"
            fill="#F2F2F2"
          />
          <path
            d="M44 60L60 20L76 60H44Z"
            fill="#333333"
          />
          <path
            d="M40 60.0001H80L60 38.6667L40 60.0001Z"
            fill="#F2C94C"
          />
        `}
        ${variant === "square" && svg`
          <path
            d="M80 0.0776367H0V79.9225H80V0.0776367Z"
            fill="#2F80ED"
          />
          <path
            d="M20 60H60L40 12L20 60Z"
            fill="#F2F2F2"
          />
          <path
            d="M24 60L40 20L56 60H24Z"
            fill="#333333"
          />
          <path
            d="M20 60H60L40 38.6666L20 60Z"
            fill="#F2C94C"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask0pKxb" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0pKxb)"><path d="M80 0.0776367H0V79.9225H80V0.0776367Z" fill="#2F80ED"/><path d="M20 60H60L40 12L20 60Z" fill="#F2F2F2"/><path d="M24 60L40 20L56 60H24Z" fill="#333333"/><path d="M20 60H60L40 38.6666L20 60Z" fill="#F2C94C"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-saint-lucia', FlagsSaintLucia)
export default FlagsSaintLucia
