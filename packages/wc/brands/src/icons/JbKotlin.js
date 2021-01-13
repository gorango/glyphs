
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsJbKotlin = {
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
        ${variant === "color" && svg`
          <path
            d="M7.5 72.4994L40.1083 39.8911L72.5 72.4994H7.5Z"
            fill="url(#paint0_linear3h2S)"
          />
          <path
            d="M7.5 7.5H40.1083L7.5 41.875V7.5Z"
            fill="url(#paint1_linear3h2S)"
          />
          <path
            d="M40.1083 7.5L7.5 41.8416V72.4999L40.1083 39.8916L72.5 7.5H40.1083Z"
            fill="url(#paint2_linear3h2S)"
          />
          <defs><linearGradient id="paint0_linear3h2S" x1="24.7889" y1="87.6812" x2="55.4992" y2="56.972" gradientUnits="userSpaceOnUse"><stop offset="0.097" stop-color="#0095D5"/><stop offset="0.301" stop-color="#238AD9"/><stop offset="0.621" stop-color="#557BDE"/><stop offset="0.864" stop-color="#7472E2"/><stop offset="1" stop-color="#806EE3"/></linearGradient><linearGradient id="paint1_linear3h2S" x1="12.0598" y1="20.5639" x2="29.8957" y2="2.7279" gradientUnits="userSpaceOnUse"><stop offset="0.118" stop-color="#0095D5"/><stop offset="0.418" stop-color="#3C83DC"/><stop offset="0.696" stop-color="#6D74E1"/><stop offset="0.833" stop-color="#806EE3"/></linearGradient><linearGradient id="paint2_linear3h2S" x1="-3.44384" y1="67.2609" x2="57.0418" y2="6.77518" gradientUnits="userSpaceOnUse"><stop offset="0.107" stop-color="#C757BC"/><stop offset="0.214" stop-color="#D0609A"/><stop offset="0.425" stop-color="#E1725C"/><stop offset="0.605" stop-color="#EE7E2F"/><stop offset="0.743" stop-color="#F58613"/><stop offset="0.823" stop-color="#F88909"/></linearGradient></defs>
        `}
        ${variant === "solid" && svg`
          <path
            d="M7.5 72.4996L40.1083 39.8913L72.5 72.4996H7.5Z"
            fill="currentColor"
          />
          <path
            d="M7.5 7.5H40.1083L7.5 41.875V7.5Z"
            fill="currentColor"
          />
          <path
            d="M40.1083 7.5L7.5 41.8416V72.4996L40.1083 39.8913L72.5 7.5H40.1083Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M7.5 72.4996L40.1083 39.8913M7.5 72.4996H72.5L40.1083 39.8913M7.5 72.4996V41.8416L40.1083 7.5M40.1083 39.8913L72.5 7.5H40.1083M40.1083 7.5H7.5V41.875L40.1083 7.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-jb-kotlin', BrandsJbKotlin)
export default BrandsJbKotlin
