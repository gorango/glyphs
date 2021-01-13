
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsTrinidadAndTobago = {
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
          <g clip-path="url(#clip0w3Lx)"><path d="M120 0.0788574H0V79.9212H120V0.0788574Z" fill="#EB5757"/><path d="M113 93L7 -13" stroke="#F2F2F2" stroke-width="28"/><path d="M113 93L7 -13" stroke="#333333" stroke-width="18"/></g>
          <defs><clipPath id="clip0w3Lx"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0Ep4Z)"><path d="M80 0.0788574H0V79.9212H80V0.0788574Z" fill="#EB5757"/><path d="M93 93L-13 -13" stroke="#F2F2F2" stroke-width="28"/><path d="M93 93L-13 -13" stroke="#333333" stroke-width="18"/></g>
          <defs><clipPath id="clip0Ep4Z"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0P2Gw" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0P2Gw)"><g clip-path="url(#clip0P2Gw)"><path d="M80 0.0789795H0V79.9213H80V0.0789795Z" fill="#EB5757"/><path d="M93 93L-13 -13" stroke="#F2F2F2" stroke-width="28"/><path d="M93 93L-13 -13" stroke="#333333" stroke-width="18"/></g></g>
          <defs><clipPath id="clip0P2Gw"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-trinidad-and-tobago', FlagsTrinidadAndTobago)
export default FlagsTrinidadAndTobago
