
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsBahamas = {
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
          <rect
            x="0.0839844"
            width="119.915"
            height="80"
            fill="#219653"
          />
          <rect
            x="0.0839844"
            y="26.561"
            width="119.915"
            height="26.878"
            fill="#F2C94C"
          />
          <path
            d="M0 0V80L51.7135 40L0 0Z"
            fill="#333333"
          />
        `}
        ${variant === "square" && svg`
          <rect
            x="0.0561523"
            width="79.9435"
            height="80"
            fill="#219653"
          />
          <rect
            x="0.0561523"
            y="26.561"
            width="79.9435"
            height="26.878"
            fill="#F2C94C"
          />
          <path
            d="M0 0V80L51.7135 40L0 0Z"
            fill="#333333"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask0Xakz" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0Xakz)"><rect x="0.0561523" width="79.9435" height="80" fill="#219653"/><rect x="0.0561523" y="26.561" width="79.9435" height="26.878" fill="#F2C94C"/><path d="M0 0V80L51.7135 40L0 0Z" fill="#333333"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-bahamas', FlagsBahamas)
export default FlagsBahamas
