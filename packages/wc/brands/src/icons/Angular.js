
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsAngular = {
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
            d="M40 5L7.5 17.5L12.5 60L40 75L67.5 60L72.5 17.5L40 5Z"
            fill="#DD0031"
          />
          <path
            d="M40 5V75L67.5 60L72.5 17.5L40 5Z"
            fill="#C3002F"
          />
          <path
            d="M40.0001 12.7344L19.6832 58.4094H27.2584L31.3427 48.1894H48.5876L52.6719 58.4094H60.2471L40.0001 12.7344ZM45.9346 41.8894H34.0656L40.0001 27.5744L45.9346 41.8894Z"
            fill="white"
          />
        `}
        ${variant === "solid" && svg`
          <path
            d="M40 27.5744L34.0656 41.8894H45.9345L40 27.5744Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.5 17.5L40 5L72.5 17.5L67.5 60L40 75L12.5 60L7.5 17.5ZM19.6832 58.4094L40 12.7344L60.2471 58.4094H52.6719L48.5876 48.1894H31.3427L27.2584 58.4094H19.6832Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M40 5L7.5 17.5L12.5 60L40 75M40 5L72.5 17.5L67.5 60L40 75M40 5V75M40 12.7344L19.6832 58.4094H27.2584L31.3427 48.1894H48.5876L52.6719 58.4094H60.2471L40 12.7344ZM45.9345 41.8894H34.0656L40 27.5744L45.9345 41.8894Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-angular', BrandsAngular)
export default BrandsAngular
