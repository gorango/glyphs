
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsSierraLeone = {
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
          <g opacity="0.9"><path d="M120 0H0V26.6667H120V0Z" fill="#219653"/><path d="M120 26.6667H0V53.3334H120V26.6667Z" fill="#F2F2F2"/><path d="M120 53.3333H0V79.9999H120V53.3333Z" fill="#2F80ED"/></g>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0Ga0-)"><g opacity="0.9"><path d="M120 0H0V26.6667H120V0Z" fill="#219653"/><path d="M120 26.6667H0V53.3334H120V26.6667Z" fill="#F2F2F2"/><path d="M120 53.3333H0V79.9999H120V53.3333Z" fill="#2F80ED"/></g></g>
          <defs><clipPath id="clip0Ga0-"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0z8FF" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0z8FF)"><g clip-path="url(#clip0z8FF)"><g opacity="0.9"><path d="M120 0H0V26.6667H120V0Z" fill="#219653"/><path d="M120 26.6667H0V53.3334H120V26.6667Z" fill="#F2F2F2"/><path d="M120 53.3333H0V79.9999H120V53.3333Z" fill="#2F80ED"/></g></g></g>
          <defs><clipPath id="clip0z8FF"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-sierra-leone', FlagsSierraLeone)
export default FlagsSierraLeone
