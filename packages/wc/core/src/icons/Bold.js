
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBold = {
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
            d="M24.5 16C24.2239 16 24 16.2239 24 16.5V38V63.5C24 63.7761 24.2239 64 24.5 64"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 38H41C47.0751 38 52 33.0751 52 27C52 20.9249 47.0751 16 41 16H24.5"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M41 38H43C50.1797 38 56 43.8203 56 51C56 58.1797 50.1797 64 43 64H24.5"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M24 41H41V35H24V41ZM41 41H43V35H41V41ZM41 13H24.5V19H41V13ZM43 61H24.5V67H43V61ZM21 16.5V38H27V16.5H21ZM21 38V63.5H27V38H21ZM41 41C48.732 41 55 34.732 55 27H49C49 31.4183 45.4183 35 41 35V41ZM41 19C45.4183 19 49 22.5817 49 27H55C55 19.268 48.732 13 41 13V19ZM43 41C48.5228 41 53 45.4772 53 51H59C59 42.1634 51.8366 35 43 35V41ZM24.5 61C25.8807 61 27 62.1193 27 63.5H21C21 65.433 22.567 67 24.5 67V61ZM53 51C53 56.5229 48.5228 61 43 61V67C51.8366 67 59 59.8366 59 51H53ZM24.5 13C22.567 13 21 14.567 21 16.5H27C27 17.8807 25.8807 19 24.5 19V13Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M24 40H41V36H24V40ZM41 40H43V36H41V40ZM41 14H24.5V18H41V14ZM43 62H24.5V66H43V62ZM22 16.5V38H26V16.5H22ZM22 38V63.5H26V38H22ZM41 40C48.1797 40 54 34.1797 54 27H50C50 31.9706 45.9706 36 41 36V40ZM41 18C45.9706 18 50 22.0294 50 27H54C54 19.8203 48.1797 14 41 14V18ZM43 40C49.0751 40 54 44.9249 54 51H58C58 42.7157 51.2843 36 43 36V40ZM24.5 62C25.3284 62 26 62.6716 26 63.5H22C22 64.8807 23.1193 66 24.5 66V62ZM54 51C54 57.0751 49.0751 62 43 62V66C51.2843 66 58 59.2843 58 51H54ZM24.5 14C23.1193 14 22 15.1193 22 16.5H26C26 17.3284 25.3284 18 24.5 18V14Z"
            fill="#2F80ED"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M24 38H41M24 38V16.5C24 16.2239 24.2239 16 24.5 16H41C47.0751 16 52 20.9249 52 27C52 33.0751 47.0751 38 41 38M24 38V63.5C24 63.7761 24.2239 64 24.5 64H43C50.1797 64 56 58.1797 56 51C56 43.8203 50.1797 38 43 38H41"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 16.5C22 15.1193 23.1193 14 24.5 14H41C48.1797 14 54 19.8203 54 27C54 31.1628 52.0434 34.8686 48.9996 37.248C54.2975 39.5626 58 44.8489 58 51C58 59.2843 51.2843 66 43 66H24.5C23.1193 66 22 64.8807 22 63.5V16.5ZM41 36C45.9706 36 50 31.9706 50 27C50 22.0294 45.9706 18 41 18H26V36H41ZM26 40H43C49.0751 40 54 44.9249 54 51C54 57.0751 49.0751 62 43 62H26V40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-bold', CoreBold)
export default CoreBold
