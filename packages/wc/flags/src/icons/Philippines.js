
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsPhilippines = {
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
          <path
            d="M120 40V80H0V40H120Z"
            fill="#EB5757"
          />
          <path
            d="M120 0V40H0V0H120Z"
            fill="#2F80ED"
          />
          <path
            d="M56 40L0 0V80L56 40Z"
            fill="#F2F2F2"
          />
          <path
            d="M19 26L21.4227 32.5437L27.229 28.6738L25.3427 35.3918L32.3148 35.6738L26.84 40L32.3148 44.3262L25.3427 44.6082L27.229 51.3262L21.4227 47.4563L19 54L16.5773 47.4563L10.771 51.3262L12.6573 44.6082L5.68521 44.3262L11.16 40L5.68521 35.6738L12.6573 35.3918L10.771 28.6738L16.5773 32.5437L19 26Z"
            fill="#F2C94C"
          />
          <circle
            cx="5"
            cy="11"
            r="3"
            fill="#F2C94C"
          />
          <circle
            cx="5"
            cy="69"
            r="3"
            fill="#F2C94C"
          />
          <circle
            cx="45"
            cy="40"
            r="3"
            fill="#F2C94C"
          />
        `}
        ${variant === "square" && svg`
          <path
            d="M80 40V80H0V40H80Z"
            fill="#EB5757"
          />
          <path
            d="M80 0V40H0V0H80Z"
            fill="#2F80ED"
          />
          <path
            d="M56 40L0 0V80L56 40Z"
            fill="#F2F2F2"
          />
          <path
            d="M19 26L21.4227 32.5437L27.229 28.6738L25.3427 35.3918L32.3148 35.6738L26.84 40L32.3148 44.3262L25.3427 44.6082L27.229 51.3262L21.4227 47.4563L19 54L16.5773 47.4563L10.771 51.3262L12.6573 44.6082L5.68521 44.3262L11.16 40L5.68521 35.6738L12.6573 35.3918L10.771 28.6738L16.5773 32.5437L19 26Z"
            fill="#F2C94C"
          />
          <circle
            cx="5"
            cy="11"
            r="3"
            fill="#F2C94C"
          />
          <circle
            cx="5"
            cy="69"
            r="3"
            fill="#F2C94C"
          />
          <circle
            cx="45"
            cy="40"
            r="3"
            fill="#F2C94C"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask05B4L" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask05B4L)"><path d="M80 40V80H0V40H80Z" fill="#EB5757"/><path d="M80 0V40H0V0H80Z" fill="#2F80ED"/><path d="M56 40L0 0V80L56 40Z" fill="#F2F2F2"/><path d="M19 26L21.4227 32.5437L27.229 28.6738L25.3427 35.3918L32.3148 35.6738L26.84 40L32.3148 44.3262L25.3427 44.6082L27.229 51.3262L21.4227 47.4563L19 54L16.5773 47.4563L10.771 51.3262L12.6573 44.6082L5.68521 44.3262L11.16 40L5.68521 35.6738L12.6573 35.3918L10.771 28.6738L16.5773 32.5437L19 26Z" fill="#F2C94C"/><circle cx="5" cy="11" r="3" fill="#F2C94C"/><circle cx="5" cy="69" r="3" fill="#F2C94C"/><circle cx="45" cy="40" r="3" fill="#F2C94C"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-philippines', FlagsPhilippines)
export default FlagsPhilippines
