
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsBotswana = {
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
          <g clip-path="url(#clip0aIxa)"><path d="M120 0H0V80H120V0Z" fill="#56CCF2"/><path d="M120 40H0" stroke="#F2F2F2" stroke-width="20"/><path d="M120 40H0" stroke="#333333" stroke-width="14"/></g>
          <defs><clipPath id="clip0aIxa"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0Ffpl)"><path d="M80 0H0V80H80V0Z" fill="#56CCF2"/><path d="M80 40H0" stroke="#F2F2F2" stroke-width="20"/><path d="M80 40H0" stroke="#333333" stroke-width="14"/></g>
          <defs><clipPath id="clip0Ffpl"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0NjoP" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0NjoP)"><g clip-path="url(#clip0NjoP)"><path d="M80 0H0V80H80V0Z" fill="#56CCF2"/><path d="M80 40H0" stroke="#F2F2F2" stroke-width="20"/><path d="M80 40H0" stroke="#333333" stroke-width="14"/></g></g>
          <defs><clipPath id="clip0NjoP"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-botswana', FlagsBotswana)
export default FlagsBotswana
