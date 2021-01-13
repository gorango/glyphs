
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsColombia = {
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
            d="M120 0H0V40H120V0Z"
            fill="#F2C94C"
          />
          <g opacity="0.9"><path d="M120 40H0V60H120V40Z" fill="#2F80ED"/><path d="M120 60H0V80H120V60Z" fill="#EB5757"/></g>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0S4XV)"><path d="M120 0H0V40H120V0Z" fill="#F2C94C"/><g opacity="0.9"><path d="M120 40H0V60H120V40Z" fill="#2F80ED"/><path d="M120 60H0V80H120V60Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0S4XV"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0_Jv6" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0_Jv6)"><g clip-path="url(#clip0_Jv6)"><path d="M120 0H0V40H120V0Z" fill="#F2C94C"/><g opacity="0.9"><path d="M120 40H0V60H120V40Z" fill="#2F80ED"/><path d="M120 60H0V80H120V60Z" fill="#EB5757"/></g></g></g>
          <defs><clipPath id="clip0_Jv6"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-colombia', FlagsColombia)
export default FlagsColombia
