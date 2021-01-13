
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsCambodia = {
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
          <g clip-path="url(#clip09G6S)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 40.0001H0" stroke="#EB5757" stroke-width="40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M60 26L64 32V38H68L72 32L76 38V46L80 54H40L44 46V38L48 32L52 38H56V32L60 26Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip09G6S"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0Qyo8)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 40.0001H0" stroke="#EB5757" stroke-width="40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40 26L44 32V38H48L52 32L56 38V46L60 54H20L24 46V38L28 32L32 38H36V32L40 26Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0Qyo8"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0oCHJ" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0oCHJ)"><g clip-path="url(#clip0oCHJ)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 40.0001H0" stroke="#EB5757" stroke-width="40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40 26L44 32V38H48L52 32L56 38V46L60 54H20L24 46V38L28 32L32 38H36V32L40 26Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0oCHJ"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-cambodia', FlagsCambodia)
export default FlagsCambodia
