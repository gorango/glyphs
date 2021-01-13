
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsSomalia = {
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
          <g opacity="0.9"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/></g>
          <path
            d="M60 20L64.4672 33.8515L79.0211 33.8197L67.228 42.3485L71.7557 56.1803L60 47.6L48.2443 56.1803L52.772 42.3485L40.9789 33.8197L55.5328 33.8515L60 20Z"
            fill="#F2F2F2"
          />
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0-m1e)"><g opacity="0.9"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/></g><path d="M40 20L44.4672 33.8515L59.0211 33.8197L47.228 42.3485L51.7557 56.1803L40 47.6L28.2443 56.1803L32.772 42.3485L20.9789 33.8197L35.5328 33.8515L40 20Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0-m1e"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0gtKv" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0gtKv)"><g clip-path="url(#clip0gtKv)"><g opacity="0.9"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/></g><path d="M40 20L44.4672 33.8515L59.0211 33.8197L47.228 42.3485L51.7557 56.1803L40 47.6L28.2443 56.1803L32.772 42.3485L20.9789 33.8197L35.5328 33.8515L40 20Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0gtKv"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-somalia', FlagsSomalia)
export default FlagsSomalia
