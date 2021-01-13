
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreCommentAsterisk = {
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
            d="M24 12C19.5817 12 16 15.5817 16 20V52C16 56.4183 19.5817 60 24 60H34L40 68L46 60H56C60.4183 60 64 56.4183 64 52V20C64 15.5817 60.4183 12 56 12H24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 24V36M40 36L50.3923 42M40 36L29.6077 42"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 48V36.012M40 36.012L50.3923 30M40 36.012L29.6077 30"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 12C19.5817 12 16 15.5817 16 20V52C16 56.4183 19.5817 60 24 60H34L40 68L46 60H56C60.4183 60 64 56.4183 64 52V20C64 15.5817 60.4183 12 56 12H24ZM40 21.5C41.379 21.5 42.4976 22.6166 42.5 23.9957L42.5133 31.6469L49.1385 27.8371L49.1461 27.8328C50.3415 27.1453 51.8679 27.5557 52.5574 28.75C53.2469 29.9443 52.8391 31.4713 51.6461 32.1629L51.6385 32.1672L45.0265 36L51.6385 39.8328L51.6461 39.8371C52.8391 40.5287 53.2469 42.0557 52.5574 43.25C51.8679 44.4443 50.3415 44.8547 49.1461 44.1672L49.1385 44.1629L42.5133 40.3531L42.5 48.0043C42.4976 49.3834 41.379 50.5 40 50.5C38.621 50.5 37.5024 49.3834 37.5 48.0043L37.4867 40.3531L30.8614 44.1629L30.8539 44.1672C29.6585 44.8547 28.1321 44.4443 27.4426 43.25C26.7531 42.0557 27.1609 40.5287 28.3539 39.8371L34.9735 36L28.3539 32.1629C27.1609 31.4713 26.7531 29.9443 27.4426 28.75C28.1321 27.5557 29.6585 27.1453 30.8539 27.8328L30.8614 27.8371L37.4867 31.6469L37.5 23.9957C37.5024 22.6166 38.621 21.5 40 21.5Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 12C19.5817 12 16 15.5817 16 20V52C16 56.4183 19.5817 60 24 60H34L40 68L46 60H56C60.4183 60 64 56.4183 64 52V20C64 15.5817 60.4183 12 56 12H24Z"
            fill="#219653"
          />
          <path
            d="M34 60L35.6 58.8C35.2223 58.2964 34.6295 58 34 58V60ZM40 68L38.4 69.2C38.7777 69.7036 39.3705 70 40 70C40.6295 70 41.2223 69.7036 41.6 69.2L40 68ZM46 60V58C45.3705 58 44.7777 58.2964 44.4 58.8L46 60ZM18 20C18 16.6863 20.6863 14 24 14V10C18.4772 10 14 14.4772 14 20H18ZM18 52V20H14V52H18ZM24 58C20.6863 58 18 55.3137 18 52H14C14 57.5228 18.4772 62 24 62V58ZM34 58H24V62H34V58ZM32.4 61.2L38.4 69.2L41.6 66.8L35.6 58.8L32.4 61.2ZM41.6 69.2L47.6 61.2L44.4 58.8L38.4 66.8L41.6 69.2ZM56 58H46V62H56V58ZM62 52C62 55.3137 59.3137 58 56 58V62C61.5228 62 66 57.5228 66 52H62ZM62 20V52H66V20H62ZM56 14C59.3137 14 62 16.6863 62 20H66C66 14.4772 61.5228 10 56 10V14ZM24 14H56V10H24V14Z"
            fill="#219653"
          />
          <path
            d="M40 24L40.0208 35.988L50.3923 42L40 36.024L29.6077 42L39.9792 35.988L40 24Z"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 48L40.0208 36.012L50.3923 30L40 35.976L29.6077 30L39.9792 36.012L40 48Z"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M24 12C19.5817 12 16 15.5817 16 20V52C16 56.4183 19.5817 60 24 60H34L40 68L46 60H56C60.4183 60 64 56.4183 64 52V20C64 15.5817 60.4183 12 56 12H24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 24L40.0208 35.988L50.3923 42L40 36.024L29.6077 42L39.9792 35.988L40 24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 48L40.0208 36.012L50.3923 30L40 35.976L29.6077 30L39.9792 36.012L40 48Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24 12C19.5817 12 16 15.5817 16 20V52C16 56.4183 19.5817 60 24 60H34L40 68L46 60H56C60.4183 60 64 56.4183 64 52V20C64 15.5817 60.4183 12 56 12H24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 24L40.0208 35.988L50.3923 42L40 36.024L29.6077 42L39.9792 35.988L40 24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 48L40.0208 36.012L50.3923 30L40 35.976L29.6077 30L39.9792 36.012L40 48Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M40 22C41.1032 22 41.9981 22.8933 42 23.9965V24.0035L42.0148 32.5103L49.3893 28.2697L49.3953 28.2662C50.3517 27.7163 51.5727 28.0446 52.1244 29C52.676 29.9554 52.3498 31.1771 51.3953 31.7303L51.3893 31.7338L44.0295 36L51.3893 40.2662L51.3953 40.2697C52.3498 40.8229 52.676 42.0446 52.1244 43C51.5727 43.9554 50.3517 44.2837 49.3953 43.7338L49.3893 43.7303L42.0148 39.4897L42 47.9965V48.0035C41.9981 49.1067 41.1032 50 40 50C38.8968 50 38.0019 49.1067 38 48.0035V47.9965L37.9852 39.4897L30.6107 43.7303L30.6047 43.7338C29.6483 44.2837 28.4273 43.9554 27.8756 43C27.324 42.0446 27.6502 40.8229 28.6047 40.2697L28.6107 40.2662L35.9705 36L28.6107 31.7338L28.6047 31.7303C27.6502 31.1771 27.324 29.9554 27.8756 29C28.4273 28.0446 29.6483 27.7163 30.6047 28.2662L30.6107 28.2697L37.9852 32.5103L38 24.0035V23.9965C38.0019 22.8933 38.8968 22 40 22Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 20C14 14.4772 18.4772 10 24 10H56C61.5228 10 66 14.4772 66 20V52C66 57.5228 61.5228 62 56 62H47L41.6 69.2C41.2223 69.7036 40.6295 70 40 70C39.3705 70 38.7777 69.7036 38.4 69.2L33 62H24C18.4772 62 14 57.5228 14 52V20ZM24 14C20.6863 14 18 16.6863 18 20V52C18 55.3137 20.6863 58 24 58H34C34.6295 58 35.2223 58.2964 35.6 58.8L40 64.6667L44.4 58.8C44.7777 58.2964 45.3705 58 46 58H56C59.3137 58 62 55.3137 62 52V20C62 16.6863 59.3137 14 56 14H24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-comment-asterisk', CoreCommentAsterisk)
export default CoreCommentAsterisk
