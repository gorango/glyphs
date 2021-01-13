
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsSaintVincentAndTheGrenadines = {
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
          <g clip-path="url(#clip076Tn)"><path d="M120 0.0776367H0V80.0776H120V0.0776367Z" fill="#F2C94C"/><path d="M32 0.0776367H0V80.0776H32V0.0776367Z" fill="#2F80ED"/><path d="M120 0.0776367H88V80.0776H120V0.0776367Z" fill="#219653"/><path fill-rule="evenodd" clip-rule="evenodd" d="M69.0934 31.9133L62.2947 44L69.0933 56.0865L76 43.9999L69.0934 31.9133ZM66.7806 60.1339L60 48.0795L53.2193 60.1341L59.9999 72.0001L66.7806 60.1339ZM50.9066 56.0867L57.7053 44L50.9067 31.9135L44 44.0003L50.9066 56.0867Z" fill="#219653"/></g>
          <defs><clipPath id="clip076Tn"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0J-vs)"><path d="M80 0.0776367H0V80.0776H80V0.0776367Z" fill="#F2C94C"/><path d="M21.3333 0.0776367H0V80.0776H21.3333V0.0776367Z" fill="#2F80ED"/><path d="M80.0001 0.0776367H58.6667V80.0776H80.0001V0.0776367Z" fill="#219653"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.0934 31.9132L42.2947 43.9999L49.0933 56.0864L56 43.9997L49.0934 31.9132ZM46.7806 60.1337L40 48.0793L33.2193 60.1339L39.9999 71.9999L46.7806 60.1337ZM30.9066 56.0866L37.7053 43.9999L30.9067 31.9134L24 44.0001L30.9066 56.0866Z" fill="#219653"/></g>
          <defs><clipPath id="clip0J-vs"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask020J-" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask020J-)"><g clip-path="url(#clip020J-)"><path d="M80 0.0776367H0V80.0776H80V0.0776367Z" fill="#F2C94C"/><path d="M21.3333 0.0776367H0V80.0776H21.3333V0.0776367Z" fill="#2F80ED"/><path d="M80.0001 0.0776367H58.6667V80.0776H80.0001V0.0776367Z" fill="#219653"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.0934 31.9132L42.2947 43.9999L49.0933 56.0864L56 43.9997L49.0934 31.9132ZM46.7806 60.1337L40 48.0793L33.2193 60.1339L39.9999 71.9999L46.7806 60.1337ZM30.9066 56.0866L37.7053 43.9999L30.9067 31.9134L24 44.0001L30.9066 56.0866Z" fill="#219653"/></g></g>
          <defs><clipPath id="clip020J-"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-saint-vincent-and-the-grenadines', FlagsSaintVincentAndTheGrenadines)
export default FlagsSaintVincentAndTheGrenadines
