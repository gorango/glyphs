
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsMozambique = {
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
          <g clip-path="url(#clip0_mpq)"><path d="M120 0H0V40H120V0Z" fill="#219653"/><path d="M120 40H0V80H120V40Z" fill="#F2C94C"/><path d="M120 40H0" stroke="#F2F2F2" stroke-width="28"/><path d="M120 40H0" stroke="#333333" stroke-width="22"/><path d="M56 40L0 0V80L56 40Z" fill="#EB5757"/><path d="M19.8989 24L23.4727 35.0812L35.1158 35.0557L25.6813 41.8788L29.3035 52.9443L19.8989 46.08L10.4944 52.9443L14.1165 41.8788L4.68202 35.0557L16.3252 35.0812L19.8989 24Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0_mpq"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0GfHp)"><path d="M120 0H0V40H120V0Z" fill="#219653"/><path d="M120 40H0V80H120V40Z" fill="#F2C94C"/><path d="M120 40H0" stroke="#F2F2F2" stroke-width="28"/><path d="M120 40H0" stroke="#333333" stroke-width="22"/><path d="M56 40L0 0V80L56 40Z" fill="#EB5757"/><path d="M19.8989 24L23.4727 35.0812L35.1158 35.0557L25.6813 41.8788L29.3035 52.9443L19.8989 46.08L10.4944 52.9443L14.1165 41.8788L4.68202 35.0557L16.3252 35.0812L19.8989 24Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0GfHp"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0orRN" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0orRN)"><g clip-path="url(#clip0orRN)"><path d="M120 0H0V40H120V0Z" fill="#219653"/><path d="M120 40H0V80H120V40Z" fill="#F2C94C"/><path d="M120 40H0" stroke="#F2F2F2" stroke-width="28"/><path d="M120 40H0" stroke="#333333" stroke-width="22"/><path d="M56 40L0 0V80L56 40Z" fill="#EB5757"/><path d="M19.8989 24L23.4727 35.0812L35.1158 35.0557L25.6813 41.8788L29.3035 52.9443L19.8989 46.08L10.4944 52.9443L14.1165 41.8788L4.68202 35.0557L16.3252 35.0812L19.8989 24Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip0orRN"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-mozambique', FlagsMozambique)
export default FlagsMozambique
