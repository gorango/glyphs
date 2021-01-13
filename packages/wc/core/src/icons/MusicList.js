
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreMusicList = {
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
            d="M56 54.5L56 18.5M56 54.5C56 58.366 51.9706 61.5 47 61.5C42.0294 61.5 38 58.366 38 54.5C38 50.634 42.0294 47.5 47 47.5C51.9706 47.5 56 50.634 56 54.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M56 18.5L62.4065 27.9881C65.973 33.2702 65.4044 40.3183 61.0373 44.9603L61 45"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 19.5H44"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 39.5H44"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 29.5H44"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 49.5H28"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M56 54.5L56 18.5"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <ellipse cx="47" cy="54.5" rx="9" ry="7" fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>
          <path
            d="M56 18.5L62.4065 27.9881C65.973 33.2702 65.4044 40.3183 61.0373 44.9603V44.9603L61 45"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 19.5H44"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 39.5H44"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 29.5H44"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 49.5H28"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M56 54.5L56 18.5"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <ellipse cx="47" cy="54.5" rx="9" ry="7" fill="#F2994A" stroke="#F2994A" stroke-width="4" stroke-linejoin="round"/>
          <path
            d="M56 18.5L62.4065 27.9881C65.973 33.2702 65.4044 40.3183 61.0373 44.9603V44.9603L61 45"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 19.5H44"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 39.5H44"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 29.5H44"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 49.5H28"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M56 54.5C56 58.366 51.9706 61.5 47 61.5C42.0294 61.5 38 58.366 38 54.5C38 50.634 42.0294 47.5 47 47.5C51.9706 47.5 56 50.634 56 54.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M56 54.5V18.5L62.4065 27.9881C65.973 33.2702 65.4044 40.3183 61.0373 44.9603L61 45M56 54.5C56 58.366 51.9706 61.5 47 61.5C42.0294 61.5 38 58.366 38 54.5C38 50.634 42.0294 47.5 47 47.5C51.9706 47.5 56 50.634 56 54.5ZM12 19.5H44M12 39.5H44M12 29.5H44M12 49.5H28"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M62.494 46.3307C67.5017 41.0077 68.1536 32.9258 64.064 26.8689L57.6745 17.4059C57.6426 17.3572 57.6087 17.31 57.5728 17.2644C57.2144 16.8071 56.6894 16.5446 56.1432 16.505C55.9003 16.4874 55.6532 16.5139 55.4146 16.587C55.1761 16.6599 54.9565 16.7762 54.765 16.9267C54.3074 17.2852 54.0446 17.8104 54.005 18.3568C54.0009 18.4144 53.9992 18.4723 54 18.5302V47.5491C52.026 46.2381 49.5291 45.5 47 45.5C41.4218 45.5 36 49.0908 36 54.5C36 59.9092 41.4218 63.5 47 63.5C52.5782 63.5 58 59.9092 58 54.5V25.036L60.7489 29.1073C63.7923 33.6145 63.3071 39.6287 59.5806 43.5899L59.5433 43.6295C58.7864 44.4341 58.8251 45.6998 59.6296 46.4567C60.4341 47.2135 61.6998 47.1749 62.4567 46.3704L62.494 46.3307ZM62.494 46.3307L61.0373 44.9603M54 54.5C54 52.1772 51.3629 49.5 47 49.5C42.6371 49.5 40 52.1772 40 54.5C40 56.8227 42.6371 59.5 47 59.5C51.3629 59.5 54 56.8227 54 54.5ZM12 17.5C10.8954 17.5 10 18.3954 10 19.5C10 20.6045 10.8954 21.5 12 21.5H44C45.1046 21.5 46 20.6045 46 19.5C46 18.3954 45.1046 17.5 44 17.5H12ZM10 39.5C10 38.3954 10.8954 37.5 12 37.5H44C45.1046 37.5 46 38.3954 46 39.5C46 40.6045 45.1046 41.5 44 41.5H12C10.8954 41.5 10 40.6045 10 39.5ZM12 27.5C10.8954 27.5 10 28.3954 10 29.5C10 30.6045 10.8954 31.5 12 31.5H44C45.1046 31.5 46 30.6045 46 29.5C46 28.3954 45.1046 27.5 44 27.5H12ZM10 49.5C10 48.3954 10.8954 47.5 12 47.5H28C29.1046 47.5 30 48.3954 30 49.5C30 50.6045 29.1046 51.5 28 51.5H12C10.8954 51.5 10 50.6045 10 49.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-music-list', CoreMusicList)
export default CoreMusicList
