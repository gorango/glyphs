
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsPanama = {
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
          <g clip-path="url(#clip0i-7l)"><path d="M120 0.0791016H0V80.0774H120V0.0791016Z" fill="#F2F2F2"/><path d="M60 40C60 40 60 59.9931 60 79.9991H0V40H20.0009C39.1252 40 60 40 60 40Z" fill="#2F80ED"/><path d="M120 0V39.9991H99.9991C78.7931 39.9991 60 39.9991 60 39.9991C60 39.9991 60 18.8297 60 0H120Z" fill="#EB5757"/><path opacity="0.9" d="M30 11L32.0206 17.2188H38.5595L33.2694 21.0623L35.2901 27.2812L30 23.4377L24.7099 27.2812L26.7306 21.0623L21.4405 17.2188H27.9794L30 11Z" fill="#2F80ED"/><path opacity="0.9" d="M90 51L92.0206 57.2188H98.5595L93.2694 61.0623L95.2901 67.2812L90 63.4377L84.7099 67.2812L86.7306 61.0623L81.4405 57.2188H87.9794L90 51Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0i-7l"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0R-sY)"><path d="M100 0.0791016H-20V80.0774H100V0.0791016Z" fill="#F2F2F2"/><path d="M40 40C40 40 40 59.9931 40 79.9991H-20V40H0.000858307C19.1252 40 40 40 40 40Z" fill="#2F80ED"/><path d="M100 0V39.9991H79.9991C58.7931 39.9991 40 39.9991 40 39.9991C40 39.9991 40 18.8297 40 0H100Z" fill="#EB5757"/><path d="M20 11L22.0206 17.2188H28.5595L23.2694 21.0623L25.2901 27.2812L20 23.4377L14.7099 27.2812L16.7306 21.0623L11.4405 17.2188H17.9794L20 11Z" fill="#2F80ED"/><path d="M60 51L62.0206 57.2188H68.5595L63.2694 61.0623L65.2901 67.2812L60 63.4377L54.7099 67.2812L56.7306 61.0623L51.4405 57.2188H57.9794L60 51Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0R-sY"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0ncXI" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0ncXI)"><g clip-path="url(#clip0ncXI)"><path d="M100 0.0791016H-20V80.0774H100V0.0791016Z" fill="#F2F2F2"/><path d="M40 40C40 40 40 59.9931 40 79.9991H-20V40H0.000858307C19.1252 40 40 40 40 40Z" fill="#2F80ED"/><path d="M100 0V39.9991H79.9991C58.7931 39.9991 40 39.9991 40 39.9991C40 39.9991 40 18.8297 40 0H100Z" fill="#EB5757"/><path d="M20 11L22.0206 17.2188H28.5595L23.2694 21.0623L25.2901 27.2812L20 23.4377L14.7099 27.2812L16.7306 21.0623L11.4405 17.2188H17.9794L20 11Z" fill="#2F80ED"/><path d="M60 51L62.0206 57.2188H68.5595L63.2694 61.0623L65.2901 67.2812L60 63.4377L54.7099 67.2812L56.7306 61.0623L51.4405 57.2188H57.9794L60 51Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0ncXI"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-panama', FlagsPanama)
export default FlagsPanama
