
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsChile = {
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
          <g clip-path="url(#clip0skN0)"><g clip-path="url(#clip1skN0)"><path d="M40 -0.0102539H0V39.9897H40V-0.0102539Z" fill="#2F80ED"/><path d="M120 -0.0102539H40V39.9897H120V-0.0102539Z" fill="#F2F2F2"/></g><path d="M120 39.9897H0V79.9897H120V39.9897Z" fill="#EB5757"/><path d="M20 9L22.4569 16.6183L30.4616 16.6008L23.9754 21.2917L26.4656 28.8992L20 24.18L13.5344 28.8992L16.0246 21.2917L9.53838 16.6008L17.5431 16.6183L20 9Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0skN0"><rect width="120" height="80" fill="white"/></clipPath><clipPath id="clip1skN0"><rect width="120" height="40" fill="white" transform="translate(0 -0.0102539)"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip04BEM)"><g clip-path="url(#clip14BEM)"><path d="M40 -0.0102539H0V39.9897H40V-0.0102539Z" fill="#2F80ED"/><path d="M120 -0.0102539H40V39.9897H120V-0.0102539Z" fill="#F2F2F2"/></g><path d="M120 39.9897H0V79.9897H120V39.9897Z" fill="#EB5757"/><path d="M20 9L22.4569 16.6183L30.4616 16.6008L23.9754 21.2917L26.4656 28.8992L20 24.18L13.5344 28.8992L16.0246 21.2917L9.53838 16.6008L17.5431 16.6183L20 9Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip04BEM"><rect width="80" height="80" fill="white"/></clipPath><clipPath id="clip14BEM"><rect width="120" height="40" fill="white" transform="translate(0 -0.0102539)"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0qqEP" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0qqEP)"><g clip-path="url(#clip0qqEP)"><g clip-path="url(#clip1qqEP)"><path d="M40 -0.0102539H0V39.9897H40V-0.0102539Z" fill="#2F80ED"/><path d="M120 -0.0102539H40V39.9897H120V-0.0102539Z" fill="#F2F2F2"/></g><path d="M120 39.9897H0V79.9897H120V39.9897Z" fill="#EB5757"/><path d="M20 9L22.4569 16.6183L30.4616 16.6008L23.9754 21.2917L26.4656 28.8992L20 24.18L13.5344 28.8992L16.0246 21.2917L9.53838 16.6008L17.5431 16.6183L20 9Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0qqEP"><rect width="80" height="80" fill="white"/></clipPath><clipPath id="clip1qqEP"><rect width="120" height="40" fill="white" transform="translate(0 -0.0102539)"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-chile', FlagsChile)
export default FlagsChile
