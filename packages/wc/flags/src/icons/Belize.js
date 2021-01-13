
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsBelize = {
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
            width="120"
            height="80"
            fill="#2F80ED"
          />
          <rect
            width="120"
            height="8"
            fill="#EB5757"
          />
          <rect
            y="72"
            width="120"
            height="8"
            fill="#EB5757"
          />
          <path
            d="M59 65C72.8071 65 84 53.8071 84 40C84 26.1929 72.8071 15 59 15C45.1929 15 34 26.1929 34 40C34 53.8071 45.1929 65 59 65Z"
            fill="#F2F2F2"
          />
          <path
            d="M59 65C72.8071 65 84 53.8071 84 40C84 26.1929 72.8071 15 59 15C45.1929 15 34 26.1929 34 40C34 53.8071 45.1929 65 59 65Z"
            fill="#219653"
          />
          <path
            d="M59 59C69.4934 59 78 50.4934 78 40C78 29.5066 69.4934 21 59 21C48.5066 21 40 29.5066 40 40C40 50.4934 48.5066 59 59 59Z"
            fill="#F2F2F2"
          />
          <path
            d="M50 46.6665V40H68V46.6665L59 51.9999L50 46.6665Z"
            fill="#56CCF2"
          />
          <path
            d="M68 32H50V40H68V32Z"
            fill="#F2C94C"
          />
        `}
        ${variant === "square" && svg`
          <rect
            width="80"
            height="80"
            fill="#2F80ED"
          />
          <rect
            width="80"
            height="8"
            fill="#EB5757"
          />
          <rect
            y="72"
            width="80"
            height="8"
            fill="#EB5757"
          />
          <path
            d="M39 65C52.8071 65 64 53.8071 64 40C64 26.1929 52.8071 15 39 15C25.1929 15 14 26.1929 14 40C14 53.8071 25.1929 65 39 65Z"
            fill="#F2F2F2"
          />
          <path
            d="M39 65C52.8071 65 64 53.8071 64 40C64 26.1929 52.8071 15 39 15C25.1929 15 14 26.1929 14 40C14 53.8071 25.1929 65 39 65Z"
            fill="#219653"
          />
          <path
            d="M39 59C49.4934 59 58 50.4934 58 40C58 29.5066 49.4934 21 39 21C28.5066 21 20 29.5066 20 40C20 50.4934 28.5066 59 39 59Z"
            fill="#F2F2F2"
          />
          <path
            d="M30 46.6665V40H48V46.6665L39 51.9999L30 46.6665Z"
            fill="#56CCF2"
          />
          <path
            d="M48 32H30V40H48V32Z"
            fill="#F2C94C"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask0WyED" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0WyED)"><rect width="80" height="80" fill="#2F80ED"/><rect width="80" height="8" fill="#EB5757"/><rect y="72" width="80" height="8" fill="#EB5757"/><path d="M39 65C52.8071 65 64 53.8071 64 40C64 26.1929 52.8071 15 39 15C25.1929 15 14 26.1929 14 40C14 53.8071 25.1929 65 39 65Z" fill="#F2F2F2"/><path d="M39 65C52.8071 65 64 53.8071 64 40C64 26.1929 52.8071 15 39 15C25.1929 15 14 26.1929 14 40C14 53.8071 25.1929 65 39 65Z" fill="#219653"/><path d="M39 59C49.4934 59 58 50.4934 58 40C58 29.5066 49.4934 21 39 21C28.5066 21 20 29.5066 20 40C20 50.4934 28.5066 59 39 59Z" fill="#F2F2F2"/><path d="M30 46.6665V40H48V46.6665L39 51.9999L30 46.6665Z" fill="#56CCF2"/><path d="M48 32H30V40H48V32Z" fill="#F2C94C"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-belize', FlagsBelize)
export default FlagsBelize
