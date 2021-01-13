
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsAlgeria = {
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
          <g clip-path="url(#clip0XYLL)"><path d="M60 0H0V80H60V0Z" fill="#219653"/><path d="M120 0H60V80H120V0Z" fill="#F2F2F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M73.7805 25.0455C71.1266 23.4255 68.0079 22.492 64.6712 22.492C55.0019 22.492 47.1633 30.3306 47.1633 40C47.1633 49.6693 55.0019 57.5079 64.6712 57.5079C68.0081 57.5079 71.1269 56.5744 73.7808 54.9543C70.2487 58.0933 65.597 60 60.5 60C49.4543 60 40.5 51.0457 40.5 40C40.5 28.9543 49.4543 20 60.5 20C65.5969 20 70.2485 21.9066 73.7805 25.0455Z" fill="#EB5757"/><path d="M71.0518 31.9483L69.6307 38.5631L75.4973 41.9331L68.7671 42.6256L67.3749 49.2466L64.6366 43.0598L57.9095 43.7817L62.9473 39.2655L60.1819 33.0907L66.0338 36.4864L71.0518 31.9483Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0XYLL"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0F49X)"><path d="M40 0H-20V80H40V0Z" fill="#219653"/><path d="M100 0H40V80H100V0Z" fill="#F2F2F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M73.7805 25.0455C71.1266 23.4255 68.0079 22.492 64.6712 22.492C55.0019 22.492 47.1633 30.3306 47.1633 40C47.1633 49.6693 55.0019 57.5079 64.6712 57.5079C68.0081 57.5079 71.1269 56.5744 73.7808 54.9543C70.2487 58.0933 65.597 60 60.5 60C49.4543 60 40.5 51.0457 40.5 40C40.5 28.9543 49.4543 20 60.5 20C65.5969 20 70.2485 21.9066 73.7805 25.0455Z" fill="#EB5757"/><path d="M71.0518 31.9483L69.6307 38.5631L75.4973 41.9331L68.7671 42.6256L67.3749 49.2466L64.6366 43.0598L57.9095 43.7817L62.9473 39.2655L60.1819 33.0907L66.0338 36.4864L71.0518 31.9483Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0F49X"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask07OAU" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask07OAU)"><g clip-path="url(#clip07OAU)"><path d="M40 0H-20V80H40V0Z" fill="#219653"/><path d="M100 0H40V80H100V0Z" fill="#F2F2F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M73.7805 25.0455C71.1266 23.4255 68.0079 22.492 64.6712 22.492C55.0019 22.492 47.1633 30.3306 47.1633 40C47.1633 49.6693 55.0019 57.5079 64.6712 57.5079C68.0081 57.5079 71.1269 56.5744 73.7808 54.9543C70.2487 58.0933 65.597 60 60.5 60C49.4543 60 40.5 51.0457 40.5 40C40.5 28.9543 49.4543 20 60.5 20C65.5969 20 70.2485 21.9066 73.7805 25.0455Z" fill="#EB5757"/><path d="M71.0518 31.9483L69.6307 38.5631L75.4973 41.9331L68.7671 42.6256L67.3749 49.2466L64.6366 43.0598L57.9095 43.7817L62.9473 39.2655L60.1819 33.0907L66.0338 36.4864L71.0518 31.9483Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip07OAU"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-algeria', FlagsAlgeria)
export default FlagsAlgeria
