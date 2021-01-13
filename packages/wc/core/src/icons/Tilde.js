
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreTilde = {
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
            d="M16 40L16.1446 39.783C20.4103 33.384 29.1759 31.8826 35.3281 36.497L44.7015 43.5275C50.8363 48.1289 59.5768 46.6325 63.8316 40.2525L64 40"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M64 40L63.8316 40.2526V40.2526C59.5768 46.6326 50.8362 48.1289 44.7015 43.5276L35.3281 36.4971C29.1759 31.8826 20.4103 33.3841 16.1446 39.783V39.783L16 40"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M64 40L63.8316 40.2526V40.2526C59.5768 46.6326 50.8362 48.1289 44.7015 43.5276L35.3281 36.4971C29.1759 31.8826 20.4103 33.3841 16.1446 39.783V39.783L16 40"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M64 40L63.8316 40.2526V40.2526C59.5768 46.6326 50.8362 48.1289 44.7015 43.5276L35.3281 36.4971C29.1759 31.8826 20.4103 33.3841 16.1446 39.783V39.783L16 40"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M64 40L63.8316 40.2526V40.2526C59.5768 46.6326 50.8362 48.1289 44.7015 43.5276L35.3281 36.4971C29.1759 31.8826 20.4103 33.3841 16.1446 39.783V39.783L16 40"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M16 40L16.1446 39.783C20.4103 33.384 29.1759 31.8826 35.3281 36.497L44.7015 43.5275C50.8363 48.1289 59.5768 46.6325 63.8316 40.2525L64 40"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M36.5281 34.8885C29.4574 29.585 19.383 31.3107 14.4805 38.6651L14.3358 38.882C13.7232 39.8011 13.9715 41.0428 14.8906 41.6555C15.8097 42.2682 17.0514 42.0198 17.6641 41.1007L17.8087 40.8838C21.4375 35.4402 28.8944 34.1629 34.128 38.0884L43.5014 45.1189C50.5546 50.4091 60.6037 48.6887 65.4954 41.3536L65.6639 41.101C66.2767 40.1821 66.0286 38.9403 65.1096 38.3274C64.1907 37.7146 62.9489 37.9627 62.336 38.8817L62.1676 39.1343C58.5498 44.5591 51.1178 45.8314 45.9016 41.919L36.5281 34.8885Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-tilde', CoreTilde)
export default CoreTilde
