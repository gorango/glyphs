
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsTinder = {
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
            d="M40 5C20.6953 5 5 20.6953 5 40C5 59.3047 20.6953 75 40 75C59.3047 75 75 59.3047 75 40C75 20.6953 59.3047 5 40 5Z"
            fill="url(#paint0_radialv75s)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.9875 36.1499C32.9444 36.1653 32.8933 36.1512 32.8644 36.1159C31.5041 34.3252 31.1623 31.2467 31.0791 30.0643C31.062 29.8366 30.8045 29.7086 30.5983 29.823C26.3976 32.1687 22.5 37.7175 22.5 43.0749C22.5 52.2788 28.9303 60 40 60C50.3713 60 57.5 52.042 57.5 43.076C57.5 31.3441 49.0667 23.5493 41.5552 20.0256C41.3795 19.9432 41.1464 20.1129 41.1724 20.3043C42.1396 26.6267 40.8032 33.503 32.9875 36.1499Z"
            fill="white"
          />
          <defs><radialGradient id="paint0_radialv75s" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40 75) scale(74.7831)"><stop stop-color="#FF7854"/><stop offset="1" stop-color="#FD267D"/></radialGradient></defs>
        `}
        ${variant === "solid" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 40C5 20.6953 20.6953 5 40 5C59.3047 5 75 20.6953 75 40C75 59.3047 59.3047 75 40 75C20.6953 75 5 59.3047 5 40ZM32.8644 36.1159C32.8933 36.1512 32.9444 36.1653 32.9875 36.1499C40.8032 33.5029 42.1396 26.6267 41.1724 20.3043C41.1464 20.1129 41.3795 19.9432 41.5552 20.0256C49.0667 23.5493 57.5 31.3441 57.5 43.076C57.5 52.042 50.3713 60 40 60C28.9303 60 22.5 52.2788 22.5 43.0749C22.5 37.7175 26.3976 32.1687 30.5983 29.823C30.8045 29.7086 31.062 29.8366 31.0791 30.0643C31.1623 31.2467 31.5041 34.3252 32.8644 36.1159Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M40 5C20.6953 5 5 20.6953 5 40C5 59.3047 20.6953 75 40 75C59.3047 75 75 59.3047 75 40C75 20.6953 59.3047 5 40 5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.9875 36.1499C32.9444 36.1653 32.8933 36.1512 32.8644 36.1159C31.5041 34.3252 31.1623 31.2467 31.0791 30.0643C31.062 29.8366 30.8045 29.7086 30.5983 29.823C26.3976 32.1687 22.5 37.7175 22.5 43.0749C22.5 52.2788 28.9303 60 40 60C50.3713 60 57.5 52.042 57.5 43.076C57.5 31.3441 49.0667 23.5493 41.5552 20.0256C41.3795 19.9432 41.1464 20.1129 41.1724 20.3043C42.1396 26.6267 40.8032 33.5029 32.9875 36.1499Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-tinder', BrandsTinder)
export default BrandsTinder
