
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsBahrain = {
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
            d="M120 0V80H0V0H120Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 80H31L48 72L31 64L48 56L31 48L48 40L31 32L48 24L31 16L48 8L31 0H0V80Z"
            fill="#F2F2F2"
          />
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0OkNQ)"><path d="M80 0V80H0V0H80Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M-20 80H11L28 72L11 64L28 56L11 48L28 40L11 32L28 24L11 16L28 8L11 0H-20V80Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0OkNQ"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0WPQO" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0WPQO)"><g clip-path="url(#clip0WPQO)"><path d="M80 0V80H0V0H80Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M-20 80H11L28 72L11 64L28 56L11 48L28 40L11 32L28 24L11 16L28 8L11 0H-20V80Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0WPQO"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-bahrain', FlagsBahrain)
export default FlagsBahrain
