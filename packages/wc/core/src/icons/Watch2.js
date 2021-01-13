
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreWatch2 = {
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
            d="M20 29C20 25.134 23.134 22 27 22H53C56.866 22 60 25.134 60 29V51C60 54.866 56.866 58 53 58H27C23.134 58 20 54.866 20 51V29Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 22V16C28 13.7909 29.7909 12 32 12H48C50.2091 12 52 13.7909 52 16V22"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M52 58V64C52 66.2091 50.2091 68 48 68H32C29.7909 68 28 66.2091 28 64V58"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M20 29C20 25.134 23.134 22 27 22H53C56.866 22 60 25.134 60 29V51C60 54.866 56.866 58 53 58H27C23.134 58 20 54.866 20 51V29Z"
            fill="currentColor"
          />
          <path
            d="M28 16C28 13.7909 29.7909 12 32 12H48C50.2091 12 52 13.7909 52 16V19H28V16Z"
            fill="currentColor"
          />
          <path
            d="M28 61V64C28 66.2091 29.7909 68 32 68H48C50.2091 68 52 66.2091 52 64V61H28Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32 12C29.7909 12 28 13.7909 28 16V22H52V16C52 13.7909 50.2091 12 48 12H44.6154H35.3846H32ZM52 58H28V64C28 66.2091 29.7909 68 32 68H35.3846H44.6154H48C50.2091 68 52 66.2091 52 64V58Z"
            fill="#9B51E0"
          />
          <rect
            x="20"
            y="22"
            width="40"
            height="36"
            rx="7"
            fill="#4F4F4F"
            stroke="#BB6BD9"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M32 12C29.7909 12 28 13.7909 28 16V22H52V16C52 13.7909 50.2091 12 48 12H32Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M52 58H28V64C28 66.2091 29.7909 68 32 68H48C50.2091 68 52 66.2091 52 64V58Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M20 29C20 25.134 23.134 22 27 22H53C56.866 22 60 25.134 60 29V51C60 54.866 56.866 58 53 58H27C23.134 58 20 54.866 20 51V29Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32 12C29.7909 12 28 13.7909 28 16V22H52V16C52 13.7909 50.2091 12 48 12H32Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M52 58H28V64C28 66.2091 29.7909 68 32 68H48C50.2091 68 52 66.2091 52 64V58Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M20 29C20 25.134 23.134 22 27 22H53C56.866 22 60 25.134 60 29V51C60 54.866 56.866 58 53 58H27C23.134 58 20 54.866 20 51V29Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26 20.0549V16C26 12.6863 28.6863 10 32 10H48C51.3137 10 54 12.6863 54 16V20.0549C58.5 20.5524 62 24.3674 62 29V51C62 55.6326 58.5 59.4476 54 59.9451V64C54 67.3137 51.3137 70 48 70H32C28.6863 70 26 67.3137 26 64V59.9451C21.5001 59.4476 18 55.6326 18 51V29C18 24.3674 21.5 20.5524 26 20.0549ZM30 16C30 14.8954 30.8954 14 32 14H48C49.1046 14 50 14.8954 50 16V20H30V16ZM27 24C24.2386 24 22 26.2386 22 29V51C22 53.7614 24.2386 56 27 56H53C55.7614 56 58 53.7614 58 51V29C58 26.2386 55.7614 24 53 24H27ZM30 60V64C30 65.1046 30.8954 66 32 66H48C49.1046 66 50 65.1046 50 64V60H30Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-watch-2', CoreWatch2)
export default CoreWatch2
