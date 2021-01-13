
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsBurkinaFaso = {
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
          <g clip-path="url(#clip0mWsv)"><path d="M120 0H0V40H120V0Z" fill="#EB5757"/><path d="M120 40H0V80H120V40Z" fill="#219653"/><path d="M60 24L63.5737 35.0812L75.2169 35.0557L65.7824 41.8788L69.4046 52.9443L60 46.08L50.5954 52.9443L54.2176 41.8788L44.7831 35.0557L56.4263 35.0812L60 24Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0mWsv"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0wJ9q)"><path d="M80 0H0V40H80V0Z" fill="#EB5757"/><path d="M80 40H0V80H80V40Z" fill="#219653"/><path d="M40 24L43.5737 35.0812L55.2169 35.0557L45.7824 41.8788L49.4046 52.9443L40 46.08L30.5954 52.9443L34.2176 41.8788L24.7831 35.0557L36.4263 35.0812L40 24Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0wJ9q"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask06fie" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask06fie)"><g clip-path="url(#clip06fie)"><path d="M80 0H0V40H80V0Z" fill="#EB5757"/><path d="M80 40H0V80H80V40Z" fill="#219653"/><path d="M40 24L43.5737 35.0812L55.2169 35.0557L45.7824 41.8788L49.4046 52.9443L40 46.08L30.5954 52.9443L34.2176 41.8788L24.7831 35.0557L36.4263 35.0812L40 24Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip06fie"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-burkina-faso', FlagsBurkinaFaso)
export default FlagsBurkinaFaso
