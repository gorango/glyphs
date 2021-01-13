
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsTanzania = {
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
          <g clip-path="url(#clip0G6XT)"><path d="M0 0H120L0 80V0Z" fill="#219653"/><path d="M120 80H0L120 0V80Z" fill="#2F80ED"/><path d="M119.6 -0.010009L-0.400391 79.99" stroke="#F2C94C" stroke-width="32"/><path d="M119.6 -0.010009L-0.400391 79.99" stroke="#333333" stroke-width="24"/></g>
          <defs><clipPath id="clip0G6XT"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0eRHJ)"><path d="M0 0H80L0 80V0Z" fill="#219653"/><path d="M80 80H0L80 0V80Z" fill="#2F80ED"/><path d="M79.7334 -0.0100087L-0.266602 79.99" stroke="#F2C94C" stroke-width="32"/><path d="M79.7334 -0.0100087L-0.266602 79.99" stroke="#333333" stroke-width="24"/></g>
          <defs><clipPath id="clip0eRHJ"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0j9RS" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0j9RS)"><g clip-path="url(#clip0j9RS)"><path d="M0 0H80L0 80V0Z" fill="#219653"/><path d="M80 80H0L80 0V80Z" fill="#2F80ED"/><path d="M79.7334 -0.0100087L-0.266602 79.99" stroke="#F2C94C" stroke-width="32"/><path d="M79.7334 -0.0100087L-0.266602 79.99" stroke="#333333" stroke-width="24"/></g></g>
          <defs><clipPath id="clip0j9RS"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-tanzania', FlagsTanzania)
export default FlagsTanzania
