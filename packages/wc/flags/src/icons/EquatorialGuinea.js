
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsEquatorialGuinea = {
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
          <g clip-path="url(#clip0_MVv)"><path d="M120 -0.0102539H0V26.6564H120V-0.0102539Z" fill="#219653"/><path d="M120 26.6565H0V53.3232H120V26.6565Z" fill="#F2F2F2"/><path d="M120 53.323H0V79.9897H120V53.323Z" fill="#EB5757"/><path d="M28 39.9897L0 -0.0102539V79.9897L28 39.9897Z" fill="#2F80ED"/></g>
          <defs><clipPath id="clip0_MVv"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0nzWb)"><path d="M120 -0.0102539H0V26.6564H120V-0.0102539Z" fill="#219653"/><path d="M120 26.6565H0V53.3232H120V26.6565Z" fill="#F2F2F2"/><path d="M120 53.323H0V79.9897H120V53.323Z" fill="#EB5757"/><path d="M28 39.9897L0 -0.0102539V79.9897L28 39.9897Z" fill="#2F80ED"/></g>
          <defs><clipPath id="clip0nzWb"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0JGLN" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0JGLN)"><g clip-path="url(#clip0JGLN)"><path d="M120 -0.0102539H0V26.6564H120V-0.0102539Z" fill="#219653"/><path d="M120 26.6565H0V53.3232H120V26.6565Z" fill="#F2F2F2"/><path d="M120 53.323H0V79.9897H120V53.323Z" fill="#EB5757"/><path d="M28 39.9897L0 -0.0102539V79.9897L28 39.9897Z" fill="#2F80ED"/></g></g>
          <defs><clipPath id="clip0JGLN"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-equatorial-guinea', FlagsEquatorialGuinea)
export default FlagsEquatorialGuinea
