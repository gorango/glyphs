
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsMauritania = {
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
          <g clip-path="url(#clip0mEK8)"><path d="M120 0H0V80H120V0Z" fill="#EB5757"/><path d="M120 40H0" stroke="#219653" stroke-width="40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32.1802 26.0276C33.7657 39.9873 45.6162 50.8331 60 50.8331C74.3838 50.8331 86.2343 39.9873 87.8198 26.0276C87.9388 27.076 88 28.1419 88 29.2222C88 44.6861 75.464 57.2222 60 57.2222C44.536 57.2222 32 44.6861 32 29.2222C32 28.1419 32.0612 27.076 32.1802 26.0276Z" fill="#F2C94C"/><path d="M60.8032 22.7776L62.5901 28.3182L68.4117 28.3055L63.6944 31.717L65.5055 37.2497L60.8032 33.8176L56.1009 37.2497L57.912 31.717L53.1948 28.3055L59.0164 28.3182L60.8032 22.7776Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0mEK8"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0dtHa)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 40H0" stroke="#219653" stroke-width="40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1802 26.0276C13.7657 39.9873 25.6162 50.8331 40 50.8331C54.3838 50.8331 66.2343 39.9873 67.8198 26.0276C67.9388 27.076 68 28.1419 68 29.2222C68 44.6861 55.464 57.2222 40 57.2222C24.536 57.2222 12 44.6861 12 29.2222C12 28.1419 12.0612 27.076 12.1802 26.0276Z" fill="#F2C94C"/><path d="M40.8032 22.7776L42.5901 28.3182L48.4117 28.3055L43.6944 31.717L45.5055 37.2497L40.8032 33.8176L36.1009 37.2497L37.912 31.717L33.1948 28.3055L39.0164 28.3182L40.8032 22.7776Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0dtHa"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0m5OP" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0m5OP)"><g clip-path="url(#clip0m5OP)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 40H0" stroke="#219653" stroke-width="40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1802 26.0276C13.7657 39.9873 25.6162 50.8331 40 50.8331C54.3838 50.8331 66.2343 39.9873 67.8198 26.0276C67.9388 27.076 68 28.1419 68 29.2222C68 44.6861 55.464 57.2222 40 57.2222C24.536 57.2222 12 44.6861 12 29.2222C12 28.1419 12.0612 27.076 12.1802 26.0276Z" fill="#F2C94C"/><path d="M40.8032 22.7776L42.5901 28.3182L48.4117 28.3055L43.6944 31.717L45.5055 37.2497L40.8032 33.8176L36.1009 37.2497L37.912 31.717L33.1948 28.3055L39.0164 28.3182L40.8032 22.7776Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip0m5OP"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-mauritania', FlagsMauritania)
export default FlagsMauritania
