
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsUkraine = {
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
          <g clip-path="url(#clip0iKZg)"><path d="M120 40H0V80H120V40Z" fill="#F2C94C"/><path d="M120 0H0V40H120V0Z" fill="#2F80ED"/></g>
          <defs><clipPath id="clip0iKZg"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0sJx3)"><path d="M80 40H0V80H80V40Z" fill="#F2C94C"/><path d="M80 0H0V40H80V0Z" fill="#2F80ED"/></g>
          <defs><clipPath id="clip0sJx3"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask05g6r" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask05g6r)"><g clip-path="url(#clip05g6r)"><path d="M80 40H0V80H80V40Z" fill="#F2C94C"/><path d="M80 0H0V40H80V0Z" fill="#2F80ED"/></g></g>
          <defs><clipPath id="clip05g6r"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-ukraine', FlagsUkraine)
export default FlagsUkraine
