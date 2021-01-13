
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsTogo = {
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
          <g opacity="0.9"><path d="M120 0H0V16H120V0Z" fill="#219653"/><path d="M120 16H0V32H120V16Z" fill="#F2C94C"/><path d="M120 32H0V48H120V32Z" fill="#219653"/><path d="M120 48H0V64H120V48Z" fill="#F2C94C"/><path d="M120 64H0V80H120V64Z" fill="#219653"/></g>
          <path
            d="M48 0H0V48H48V0Z"
            fill="#EB5757"
          />
          <path
            d="M24 8L27.5737 19.0812L39.2169 19.0557L29.7824 25.8788L33.4046 36.9443L24 30.08L14.5954 36.9443L18.2176 25.8788L8.7831 19.0557L20.4263 19.0812L24 8Z"
            fill="#F2F2F2"
          />
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0RmvS)"><g opacity="0.9"><path d="M120 0H0V16H120V0Z" fill="#219653"/><path d="M120 16H0V32H120V16Z" fill="#F2C94C"/><path d="M120 32H0V48H120V32Z" fill="#219653"/><path d="M120 48H0V64H120V48Z" fill="#F2C94C"/><path d="M120 64H0V80H120V64Z" fill="#219653"/></g><path d="M48 0H0V48H48V0Z" fill="#EB5757"/><path d="M24 8L27.5737 19.0812L39.2169 19.0557L29.7824 25.8788L33.4046 36.9443L24 30.08L14.5954 36.9443L18.2176 25.8788L8.7831 19.0557L20.4263 19.0812L24 8Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0RmvS"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0O7L4" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0O7L4)"><g clip-path="url(#clip0O7L4)"><g opacity="0.9"><path d="M120 0H0V16H120V0Z" fill="#219653"/><path d="M120 16H0V32H120V16Z" fill="#F2C94C"/><path d="M120 32H0V48H120V32Z" fill="#219653"/><path d="M120 48H0V64H120V48Z" fill="#F2C94C"/><path d="M120 64H0V80H120V64Z" fill="#219653"/></g><path d="M48 0H0V48H48V0Z" fill="#EB5757"/><path d="M24 8L27.5737 19.0812L39.2169 19.0557L29.7824 25.8788L33.4046 36.9443L24 30.08L14.5954 36.9443L18.2176 25.8788L8.7831 19.0557L20.4263 19.0812L24 8Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0O7L4"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-togo', FlagsTogo)
export default FlagsTogo
