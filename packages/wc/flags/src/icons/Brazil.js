
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsBrazil = {
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
          <g clip-path="url(#clip01mw4)"><path d="M120 -0.0102539H0V79.9897H120V-0.0102539Z" fill="#219653"/><path d="M60 10L110 40L60 70L10 40L60 10Z" fill="#F2C94C"/><path d="M60.0554 58C69.9659 58 78 49.9411 78 40C78 30.0589 69.9659 22 60.0554 22C50.1449 22 42.1108 30.0589 42.1108 40C42.1108 49.9411 50.1449 58 60.0554 58Z" fill="#2F80ED"/></g>
          <defs><clipPath id="clip01mw4"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0bkhI)"><path d="M100 -0.0102539H-20V79.9897H100V-0.0102539Z" fill="#219653"/><path d="M40.0001 10L73.3334 40L40.0001 70L6.66675 40L40.0001 10Z" fill="#F2C94C"/><path d="M40.0554 58C49.9659 58 58 49.9411 58 40C58 30.0589 49.9659 22 40.0554 22C30.1449 22 22.1108 30.0589 22.1108 40C22.1108 49.9411 30.1449 58 40.0554 58Z" fill="#2F80ED"/></g>
          <defs><clipPath id="clip0bkhI"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0oYA3" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0oYA3)"><g clip-path="url(#clip0oYA3)"><path d="M100 -0.0102539H-20V79.9897H100V-0.0102539Z" fill="#219653"/><path d="M40.0001 10L73.3334 40L40.0001 70L6.66675 40L40.0001 10Z" fill="#F2C94C"/><path d="M40.0554 58C49.9659 58 58 49.9411 58 40C58 30.0589 49.9659 22 40.0554 22C30.1449 22 22.1108 30.0589 22.1108 40C22.1108 49.9411 30.1449 58 40.0554 58Z" fill="#2F80ED"/></g></g>
          <defs><clipPath id="clip0oYA3"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-brazil', FlagsBrazil)
export default FlagsBrazil