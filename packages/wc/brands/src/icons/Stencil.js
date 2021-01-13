
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsStencil = {
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
            d="M31.6388 49.9614H56.1916L42.9194 64.5014H18.4988L31.6388 49.9614Z"
            fill="black"
          />
          <path
            d="M71.853 32.731H21.4121L8.14697 47.2707H58.588L71.853 32.731Z"
            fill="black"
          />
          <path
            d="M37.0384 15.498H61.5005L48.2896 30.0379H23.8079L37.0384 15.498Z"
            fill="black"
          />
        `}
        ${variant === "solid" && svg`
          <path
            d="M31.6388 49.9616H56.1916L42.9194 64.5015H18.4988L31.6388 49.9616Z"
            fill="currentColor"
          />
          <path
            d="M71.853 32.731H21.4121L8.14697 47.2708H58.588L71.853 32.731Z"
            fill="currentColor"
          />
          <path
            d="M37.0384 15.498H61.5005L48.2896 30.0379H23.8079L37.0384 15.498Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M31.6388 49.9616H56.1916L42.9194 64.5015H18.4988L31.6388 49.9616Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M71.853 32.731H21.4121L8.14697 47.2708H58.588L71.853 32.731Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M37.0384 15.498H61.5005L48.2896 30.0379H23.8079L37.0384 15.498Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-stencil', BrandsStencil)
export default BrandsStencil
