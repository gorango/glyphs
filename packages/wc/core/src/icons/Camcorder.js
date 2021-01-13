
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreCamcorder = {
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
            d="M8 32C8 29.7909 9.79086 28 12 28H50C52.2091 28 54 29.7909 54 32V60C54 62.2091 52.2091 64 50 64H12C9.79086 64 8 62.2091 8 60V32Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M54 54.5789L69.2068 61.1487C70.5272 61.7191 72 60.7511 72 59.3127V33.3982C72 31.9598 70.5272 30.9917 69.2068 31.5622L54 38.132"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M42 38C42 39.1046 42.8954 40 44 40C45.1046 40 46 39.1046 46 38C46 36.8954 45.1046 36 44 36C42.8954 36 42 36.8954 42 38Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M48 16H24C21.7909 16 20 17.7909 20 20V28"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <rect
            x="8"
            y="28"
            width="46"
            height="36"
            rx="4"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M57 54.8875L69.2752 59.6604C70.5862 60.1702 72 59.203 72 57.7963V34.8434C72 33.4367 70.5862 32.4696 69.2752 32.9793L57 37.7523V54.8875ZM51 52.5545L39.7596 48.1839C38.0593 47.5228 38.0593 45.1169 39.7596 44.4558L51 40.0852V52.5545Z"
            fill="currentColor"
          />
          <path
            d="M48 19C49.6569 19 51 17.6569 51 16C51 14.3431 49.6569 13 48 13V19ZM17 28C17 29.6569 18.3431 31 20 31C21.6569 31 23 29.6569 23 28H17ZM24 19H48V13H24V19ZM23 28V20H17V28H23ZM24 13C20.134 13 17 16.134 17 20H23C23 19.4477 23.4477 19 24 19V13Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <rect
            x="8"
            y="28"
            width="46"
            height="36"
            rx="4"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M54 53.721L69.2752 59.6604C70.5863 60.1702 72 59.203 72 57.7963V34.8434C72 33.4367 70.5863 32.4696 69.2752 32.9793L54 38.9188V53.721Z"
            fill="#EB5757"
          />
          <path
            d="M42 38C42 39.1046 42.8954 40 44 40C45.1046 40 46 39.1046 46 38C46 36.8954 45.1046 36 44 36C42.8954 36 42 36.8954 42 38Z"
            fill="#EB5757"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 14C20.6863 14 18 16.6863 18 20V28H22V20C22 18.8954 22.8954 18 24 18H48C49.1046 18 50 17.1046 50 16C50 14.8954 49.1046 14 48 14H24Z"
            fill="#EB5757"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M8 32C8 29.7909 9.79086 28 12 28H50C52.2091 28 54 29.7909 54 32V60C54 62.2091 52.2091 64 50 64H12C9.79086 64 8 62.2091 8 60V32Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M54 53.721L69.2752 59.6604C70.5863 60.1702 72 59.203 72 57.7964V34.8434C72 33.4367 70.5863 32.4696 69.2752 32.9794L54 38.9188V53.721Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M42 38C42 39.1046 42.8954 40 44 40C45.1046 40 46 39.1046 46 38C46 36.8954 45.1046 36 44 36C42.8954 36 42 36.8954 42 38Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M48 16H24C21.7909 16 20 17.7909 20 20V28M12 64H50C52.2091 64 54 62.2091 54 60V32C54 29.7909 52.2091 28 50 28H12C9.79086 28 8 29.7909 8 32V60C8 62.2091 9.79086 64 12 64ZM69.2752 59.6604L54 53.721V38.9188L69.2752 32.9794C70.5863 32.4696 72 33.4367 72 34.8434V57.7964C72 59.2031 70.5863 60.1702 69.2752 59.6604ZM44 40C42.8954 40 42 39.1046 42 38C42 36.8954 42.8954 36 44 36C45.1046 36 46 36.8954 46 38C46 39.1046 45.1046 40 44 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M48 38C48 35.7909 46.2091 34 44 34C41.7909 34 40 35.7909 40 38C40 40.2091 41.7909 42 44 42C46.2091 42 48 40.2091 48 38Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 14C20.6863 14 18 16.6863 18 20V26H12C8.68629 26 6 28.6863 6 32V60C6 63.3137 8.68629 66 12 66H50C53.3137 66 56 63.3137 56 60V57.6216L68.4136 62.9847C71.0544 64.1256 74 62.1894 74 59.3127V33.3982C74 30.5215 71.0544 28.5853 68.4136 29.7262L56 35.0893V32C56 28.6863 53.3137 26 50 26H22V20C22 18.8954 22.8954 18 24 18H48C49.1046 18 50 17.1046 50 16C50 14.8954 49.1046 14 48 14L24 14ZM12 30C10.8954 30 10 30.8954 10 32V60C10 61.1046 10.8954 62 12 62H50C51.1046 62 52 61.1046 52 60V32C52 30.8954 51.1046 30 50 30H12ZM56 39.4466V53.2643L70 59.3127V33.3982L56 39.4466Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-camcorder', CoreCamcorder)
export default CoreCamcorder
