
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsYandex = {
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
            d="M5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40Z"
            fill="white"
          />
          <path
            d="M20.8188 19.6015L18.9471 21.9412C18.1306 22.9617 18.238 24.4388 19.1934 25.3305L36.25 41.25V65H43.75V41.25L60.8066 25.3305C61.762 24.4388 61.8694 22.9617 61.0529 21.9412L59.1812 19.6015C58.2734 18.4668 56.5928 18.3424 55.5279 19.3312L40 33.75L24.4721 19.3312C23.4072 18.3424 21.7266 18.4668 20.8188 19.6015Z"
            fill="#FF0013"
          />
        `}
        ${variant === "solid" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5ZM18.9471 21.9412L20.8188 19.6015C21.7266 18.4668 23.4072 18.3424 24.4721 19.3312L40 33.75L55.5279 19.3312C56.5928 18.3424 58.2734 18.4668 59.1812 19.6015L61.0529 21.9412C61.8694 22.9617 61.762 24.4388 60.8066 25.3305L43.75 41.25V65H36.25V41.25L19.1934 25.3305C18.238 24.4388 18.1306 22.9617 18.9471 21.9412Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M20.8188 19.6015L18.9471 21.9412C18.1306 22.9617 18.238 24.4388 19.1934 25.3305L36.25 41.25V65H43.75V41.25L60.8066 25.3305C61.762 24.4388 61.8694 22.9617 61.0529 21.9412L59.1812 19.6015C58.2734 18.4668 56.5928 18.3424 55.5279 19.3312L40 33.75L24.4721 19.3312C23.4072 18.3424 21.7266 18.4668 20.8188 19.6015Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-yandex', BrandsYandex)
export default BrandsYandex
