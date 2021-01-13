
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreCli = {
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
        ${variant === "path" && svg`
          <path
            d="M15 24L32.1592 39.2526C32.6067 39.6504 32.6067 40.3496 32.1592 40.7474L15 56"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M41 56H65"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M15 24L32.1592 39.2526C32.6067 39.6504 32.6067 40.3496 32.1592 40.7474L15 56"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M65 56L54.0909 56L51.9091 56L41 56"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M15 24L32.1592 39.2526C32.6067 39.6504 32.6067 40.3496 32.1592 40.7474L15 56"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M65 56L54.0909 56L51.9091 56L41 56"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M15 24L32.1592 39.2526C32.6067 39.6504 32.6067 40.3496 32.1592 40.7474L15 56M41 56H65"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M13.6713 25.4948C12.8457 24.761 12.7714 23.4969 13.5052 22.6713C14.239 21.8457 15.5032 21.7714 16.3287 22.5052L33.4879 37.7578C34.8305 38.9512 34.8305 41.0489 33.4879 42.2422L16.3287 57.4948C15.5032 58.2287 14.239 58.1543 13.5052 57.3288C12.7714 56.5032 12.8457 55.239 13.6713 54.5052L29.9896 40L13.6713 25.4948Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M65 54C66.1046 54 67 54.8954 67 56C67 57.1046 66.1046 58 65 58H41C39.8954 58 39 57.1046 39 56C39 54.8954 39.8954 54 41 54H65Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-cli', CoreCli)
export default CoreCli
