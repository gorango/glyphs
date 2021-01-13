
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsUnitedKingdom = {
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
          <g clip-path="url(#clip0GfNo)"><rect width="120" height="80" fill="#2F80ED"/><path d="M0 0L120 80M120 0L0 80" stroke="#F2F2F2" stroke-width="16"/><path d="M0 0L120 80M120 0L0 80" stroke="#EB5757" stroke-width="6"/><path d="M60 80V0M0 40H120" stroke="#F2F2F2" stroke-width="24"/><path d="M60 80V0M0 40H120" stroke="#EB5757" stroke-width="14"/></g>
          <defs><clipPath id="clip0GfNo"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0bb_W)"><rect width="80" height="80" fill="#2F80ED"/><path d="M-20 0L100 80M100 0L-20 80" stroke="#F2F2F2" stroke-width="16"/><path d="M-20 0L100 80M100 0L-20 80" stroke="#EB5757" stroke-width="6"/><path d="M40 80V0M-20 40H100" stroke="#F2F2F2" stroke-width="24"/><path d="M40 80V0M-20 40H100" stroke="#EB5757" stroke-width="14"/></g>
          <defs><clipPath id="clip0bb_W"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0i-KR" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0i-KR)"><g clip-path="url(#clip0i-KR)"><rect width="80" height="80" fill="#2F80ED"/><path d="M-20 0L100 80M100 0L-20 80" stroke="#F2F2F2" stroke-width="16"/><path d="M-20 0L100 80M100 0L-20 80" stroke="#EB5757" stroke-width="6"/><path d="M40 80V0M-20 40H100" stroke="#F2F2F2" stroke-width="24"/><path d="M40 80V0M-20 40H100" stroke="#EB5757" stroke-width="14"/></g></g>
          <defs><clipPath id="clip0i-KR"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-united-kingdom', FlagsUnitedKingdom)
export default FlagsUnitedKingdom
