
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsAfghanistan = {
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
          <g clip-path="url(#clip0ZiTJ)"><path d="M120 0H0V80H120V0Z" fill="#EB5757"/><path d="M39.9991 0H0V80H39.9991V0Z" fill="#333333"/><path d="M120 0H80.001V80H120V0Z" fill="#219653"/><path opacity="0.75" d="M72 19.2154C76.5754 21.857 80.1513 25.9345 82.1731 30.8156C84.1949 35.6967 84.5496 41.1085 83.1822 46.2117C81.8148 51.3149 78.8017 55.8243 74.6103 59.0405C70.4188 62.2567 65.2832 64 60 64C54.7168 64 49.5812 62.2567 45.3897 59.0405C41.1983 55.8243 38.1852 51.3149 36.8178 46.2117C35.4504 41.1085 35.8051 35.6967 37.8269 30.8156C39.8487 25.9345 43.4246 21.857 48 19.2154" stroke="#F2F2F2" stroke-width="8"/><circle opacity="0.75" cx="60" cy="40" r="10" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0ZiTJ"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0TsW5)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M19.9991 0H-20V80H19.9991V0Z" fill="#333333"/><path d="M100 0H60.001V80H100V0Z" fill="#219653"/><path opacity="0.75" d="M52 19.2154C56.5754 21.857 60.1513 25.9345 62.1731 30.8156C64.1949 35.6967 64.5496 41.1085 63.1822 46.2117C61.8148 51.3149 58.8017 55.8243 54.6103 59.0405C50.4188 62.2567 45.2832 64 40 64C34.7168 64 29.5812 62.2567 25.3897 59.0405C21.1983 55.8243 18.1852 51.3149 16.8178 46.2117C15.4504 41.1085 15.8051 35.6967 17.8269 30.8156C19.8487 25.9345 23.4246 21.857 28 19.2154" stroke="#F2F2F2" stroke-width="8"/><circle opacity="0.75" cx="40" cy="40" r="10" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0TsW5"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0cori" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0cori)"><g clip-path="url(#clip0cori)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M19.9991 0H-20V80H19.9991V0Z" fill="#333333"/><path d="M100 0H60.001V80H100V0Z" fill="#219653"/><path opacity="0.75" d="M52 19.2154C56.5754 21.857 60.1513 25.9345 62.1731 30.8156C64.1949 35.6967 64.5496 41.1085 63.1822 46.2117C61.8148 51.3149 58.8017 55.8243 54.6103 59.0405C50.4188 62.2567 45.2832 64 40 64C34.7168 64 29.5812 62.2567 25.3897 59.0405C21.1983 55.8243 18.1852 51.3149 16.8178 46.2117C15.4504 41.1085 15.8051 35.6967 17.8269 30.8156C19.8487 25.9345 23.4246 21.857 28 19.2154" stroke="#F2F2F2" stroke-width="8"/><circle opacity="0.75" cx="40" cy="40" r="10" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0cori"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-afghanistan', FlagsAfghanistan)
export default FlagsAfghanistan
