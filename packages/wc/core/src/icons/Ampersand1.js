
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreAmpersand1 = {
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
            d="M60 44L52 52L60 60"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M29.9999 17.9999C33.3136 14.6862 38.6862 14.6862 41.9999 17.9999C45.3136 21.3136 45.3136 26.6862 41.9999 29.9999L36.0136 35.9863C36.0061 35.9938 35.9938 35.9938 35.9863 35.9863L29.9999 29.9999C26.6862 26.6862 26.6862 21.3136 29.9999 17.9999Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M35.9805 36.0198C35.9912 36.009 36.0087 36.009 36.0195 36.0198L51.9785 51.9788C51.9904 51.9907 51.9904 52.0099 51.9785 52.0218L44 60.0003C39.5817 64.4186 32.4183 64.4186 28 60.0003C23.5817 55.582 23.5817 48.4186 28 44.0003L35.9805 36.0198Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M60 44L52 52L60 60"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M30 18C33.3137 14.6863 38.6863 14.6863 42 18V18C45.3137 21.3137 45.3137 26.6863 42 30L36.0137 35.9863V35.9863C36.0061 35.9939 35.9939 35.9939 35.9863 35.9863V35.9863L30 30C26.6863 26.6863 26.6863 21.3137 30 18V18Z"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M35.9805 36.0195C35.9913 36.0087 36.0087 36.0087 36.0195 36.0195V36.0195L51.9785 51.9785V51.9785C51.9904 51.9904 51.9904 52.0096 51.9785 52.0215V52.0215L44 60C39.5817 64.4183 32.4183 64.4183 28 60V60C23.5817 55.5817 23.5817 48.4183 28 44L35.9805 36.0195V36.0195Z"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M60 44L52 52L60 60"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M30 18C33.3137 14.6863 38.6863 14.6863 42 18V18C45.3137 21.3137 45.3137 26.6863 42 30L36.0137 35.9863V35.9863C36.0061 35.9939 35.9939 35.9939 35.9863 35.9863V35.9863L30 30C26.6863 26.6863 26.6863 21.3137 30 18V18Z"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M35.9805 36.0195C35.9913 36.0087 36.0087 36.0087 36.0195 36.0195V36.0195L51.9785 51.9785V51.9785C51.9904 51.9904 51.9904 52.0096 51.9785 52.0215V52.0215L44 60C39.5817 64.4183 32.4183 64.4183 28 60V60C23.5817 55.5817 23.5817 48.4183 28 44L35.9805 36.0195V36.0195Z"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M60 43.9999L52 51.9999L60 59.9999M36.0137 35.9863L42 29.9999C45.3137 26.6862 45.3137 21.3136 42 17.9999C38.6863 14.6862 33.3137 14.6862 30 17.9999C26.6863 21.3136 26.6863 26.6862 30 29.9999L35.9863 35.9863C35.9939 35.9938 36.0061 35.9938 36.0137 35.9863ZM35.9805 36.0195L28 43.9999C23.5817 48.4182 23.5817 55.5816 28 59.9999C32.4183 64.4182 39.5817 64.4182 44 59.9999L51.9785 52.0214C51.9904 52.0095 51.9904 51.9903 51.9785 51.9784L36.0195 36.0195C36.0087 36.0087 35.9912 36.0087 35.9805 36.0195Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.2428 17.1717C30.3375 13.0769 36.9764 13.0769 41.0712 17.1717C45.1659 21.2664 45.1659 27.9053 41.0712 32.0001L36.4854 36.5859L49.657 49.7574L56.2428 43.1717C57.0238 42.3906 58.2901 42.3906 59.0712 43.1717C59.8522 43.9527 59.8522 45.219 59.0712 46.0001L52.4854 52.5859L59.0712 59.1717C59.8522 59.9527 59.8522 61.219 59.0712 62.0001C58.2901 62.7811 57.0238 62.7811 56.2428 62.0001L49.657 55.4143L43.0712 62.0001C37.8719 67.1994 29.4421 67.1994 24.2428 62.0001C19.0434 56.8008 19.0434 48.371 24.2428 43.1717L30.8285 36.5859L26.2428 32.0001C22.148 27.9053 22.148 21.2664 26.2428 17.1717ZM38.2428 20.0001C35.7101 17.4674 31.6038 17.4674 29.0712 20.0001C26.5385 22.5327 26.5385 26.639 29.0712 29.1716L33.657 33.7574L38.2428 29.1717C40.7754 26.639 40.7754 22.5327 38.2428 20.0001ZM27.0712 46.0001L33.657 39.4143L46.8285 52.5859L40.2428 59.1717C36.6055 62.8089 30.7084 62.8089 27.0712 59.1717C23.434 55.5344 23.434 49.6373 27.0712 46.0001Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-ampersand-1', CoreAmpersand1)
export default CoreAmpersand1
