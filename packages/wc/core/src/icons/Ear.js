
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreEar = {
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
            d="M22 33.5V33C22 23.0589 30.0589 15 40 15C49.9411 15 58 23.0589 58 33V34.636C58 38.7108 56.3813 42.6187 53.5 45.5L52.1066 46.8934C50.1175 48.8825 49 51.5804 49 54.3934V55C49 60.5228 44.5228 65 39 65H38.5"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46.5 41.5L47 41C48.9209 39.0791 50 36.4739 50 33.7574V33C50 27.4772 45.5228 23 40 23C34.4772 23 30 27.4772 30 33V33.5"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M22 33.5V33V33C22 23.0589 30.0589 15 40 15V15C49.9411 15 58 23.0589 58 33V33V34.636C58 38.7108 56.3813 42.6187 53.5 45.5L52.1066 46.8934C50.1175 48.8825 49 51.5804 49 54.3934V55C49 60.5228 44.5228 65 39 65V65H38.5"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46.5 41.5L47 41V41C48.9209 39.0791 50 36.4739 50 33.7574V33C50 27.4772 45.5228 23 40 23V23C34.4772 23 30 27.4772 30 33V33V33.5"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M22 33.5V33V33C22 23.0589 30.0589 15 40 15V15C49.9411 15 58 23.0589 58 33V33V34.636C58 38.7108 56.3813 42.6187 53.5 45.5L52.1066 46.8934C50.1175 48.8825 49 51.5804 49 54.3934V55C49 60.5228 44.5228 65 39 65V65H38.5"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46.5 41.5L47 41V41C48.9209 39.0791 50 36.4739 50 33.7574V33C50 27.4772 45.5228 23 40 23V23C34.4772 23 30 27.4772 30 33V33V33.5"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M22 33.5V33C22 23.0589 30.0589 15 40 15C49.9411 15 58 23.0589 58 33V34.636C58 38.7108 56.3813 42.6187 53.5 45.5L52.1066 46.8934C50.1175 48.8825 49 51.5804 49 54.3934V55C49 60.5228 44.5228 65 39 65H38.5M46.5 41.5L47 41C48.9209 39.0791 50 36.4739 50 33.7574V33C50 27.4772 45.5228 23 40 23C34.4772 23 30 27.4772 30 33V33.5"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M40 13C28.9543 13 20 21.9543 20 33V33.5C20 34.6046 20.8954 35.5 22 35.5C23.1046 35.5 24 34.6046 24 33.5V33C24 24.1634 31.1634 17 40 17C48.8366 17 56 24.1634 56 33V34.636C56 38.1804 54.592 41.5796 52.0858 44.0858L50.6924 45.4792C48.3282 47.8434 47 51.0499 47 54.3934V55C47 59.4183 43.4183 63 39 63H38.5C37.3954 63 36.5 63.8954 36.5 65C36.5 66.1046 37.3954 67 38.5 67H39C45.6274 67 51 61.6274 51 55V54.3934C51 52.1108 51.9068 49.9217 53.5208 48.3076L54.9142 46.9142C58.1706 43.6578 60 39.2412 60 34.636V33C60 21.9543 51.0457 13 40 13Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 21C33.3726 21 28 26.3726 28 33V33.5C28 34.6046 28.8954 35.5 30 35.5C31.1046 35.5 32 34.6046 32 33.5V33C32 28.5817 35.5817 25 40 25C44.4183 25 48 28.5817 48 33V33.7574C48 35.9434 47.1316 38.04 45.5858 39.5858L45.0858 40.0858C44.3047 40.8668 44.3047 42.1332 45.0858 42.9142C45.8668 43.6953 47.1332 43.6953 47.9142 42.9142L48.4142 42.4142C50.7102 40.1183 52 37.0043 52 33.7574V33C52 26.3726 46.6274 21 40 21Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-ear', CoreEar)
export default CoreEar
