
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreFolder1 = {
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
            d="M12 34C12 31.7909 13.7909 30 16 30H64C66.2091 30 68 31.7909 68 34V62C68 64.2091 66.2091 66 64 66H16C13.7909 66 12 64.2091 12 62V34Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M68 34V24.2609C68 22.0517 66.2091 20.2609 64 20.2609H35.3189C34.9982 20.2609 34.6922 20.1261 34.4757 19.8895L30.2767 15.2999C29.5189 14.4717 28.448 14 27.3255 14H16C13.7909 14 12 15.7909 12 18V34"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16 30V28C16 26.3431 17.3431 25 19 25H61C62.6569 25 64 26.3431 64 28L64 30H16ZM16 30C16 30 16 30 16 30Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 17C12 14.7909 13.7909 13 16 13L27.3255 13C28.448 13 29.5189 13.4717 30.2767 14.2999L33.3835 17.6957L33.7597 18.1069L34.1359 18.5181L34.4757 18.8895C34.6922 19.1261 34.9982 19.2609 35.3189 19.2609L64 19.2609C66.2091 19.2609 68 21.0517 68 23.2609V33C68 30.7909 66.2091 29 64 29V28V27C64 25.3431 62.6569 24 61 24H60L20 24H19C17.3431 24 16 25.3431 16 27V28L16 29C13.7909 29 12 30.7909 12 33L12 23.2609L12 17Z"
            fill="currentColor"
          />
          <path
            d="M12 33C12 30.7909 13.7909 29 16 29L64 29C66.2091 29 68 30.7909 68 33V61C68 63.2091 66.2091 65 64 65H16C13.7909 65 12 63.2091 12 61L12 33Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 14C13.7909 14 12 15.7909 12 18L12 24.2609L12 34C12 31.7909 13.7909 30 16 30L16 29C16 26.7909 17.7909 25 20 25L60 25C62.2091 25 64 26.7909 64 29V30C66.2091 30 68 31.7909 68 34V24.2609C68 22.0517 66.2091 20.2609 64 20.2609L35.3189 20.2609C34.9982 20.2609 34.6922 20.1261 34.4757 19.8895L34.1359 19.5181L33.7597 19.1069L33.3835 18.6957L30.2767 15.2999C29.5189 14.4717 28.448 14 27.3255 14L16 14Z"
            fill="#F2994A"
          />
          <path
            d="M12 34C12 31.7909 13.7909 30 16 30L64 30C66.2091 30 68 31.7909 68 34V62C68 64.2091 66.2091 66 64 66H16C13.7909 66 12 64.2091 12 62L12 34Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 25C17.7909 25 16 26.7909 16 29V30C16 30 16 30 16 30L64 30V29C64 26.7909 62.2091 25 60 25L20 25Z"
            fill="#F2F2F2"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M16 14C13.7909 14 12 15.7909 12 18V34C12 31.7909 13.7909 30 16 30V29C16 26.7909 17.7909 25 20 25H60C62.2091 25 64 26.7909 64 29V30C66.2091 30 68 31.7909 68 34V24.2609C68 22.0517 66.2091 20.2609 64 20.2609H35.3189C34.9982 20.2609 34.6922 20.1261 34.4757 19.8895L30.2767 15.2999C29.5189 14.4717 28.448 14 27.3255 14H16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 34C12 31.7909 13.7909 30 16 30H64C66.2091 30 68 31.7909 68 34V62C68 64.2091 66.2091 66 64 66H16C13.7909 66 12 64.2091 12 62V34Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M20 25C17.7909 25 16 26.7909 16 29V30C16 30 16 30 16 30H64V29C64 26.7909 62.2091 25 60 25H20Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 34C12 31.7909 13.7909 30 16 30M12 34V62C12 64.2091 13.7909 66 16 66H64C66.2091 66 68 64.2091 68 62V34M12 34V18C12 15.7909 13.7909 14 16 14H27.3255C28.448 14 29.5189 14.4717 30.2767 15.2999L34.4757 19.8895C34.6922 20.1261 34.9982 20.2609 35.3189 20.2609H64C66.2091 20.2609 68 22.0517 68 24.2609V34M16 30V29C16 26.7909 17.7909 25 20 25H60C62.2091 25 64 26.7909 64 29V30M16 30H64M16 30C16 30 16 30 16 30ZM64 30C66.2091 30 68 31.7909 68 34"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 17C10 13.6863 12.6863 11 16 11H27.3255C29.0093 11 30.6157 11.7075 31.7523 12.9499L34.8591 16.3456L35.6965 17.2609H64C67.3137 17.2609 70 19.9472 70 23.2609V61C70 64.3137 67.3137 67 64 67H16C12.6863 67 10 64.3137 10 61V17ZM64 31C65.1046 31 66 31.8954 66 33V61C66 62.1046 65.1046 63 64 63H16C14.8954 63 14 62.1046 14 61V33C14 31.8954 14.8954 31 16 31M66 23.2609V27.3414L66 27C66 24.2386 63.7614 22 61 22H19C16.2443 22 14.0094 24.2292 14 26.9826V17C14 15.8954 14.8954 15 16 15H27.3255C27.8868 15 28.4222 15.2358 28.8011 15.65L33.0001 20.2395C33.5955 20.8902 34.4369 21.2609 35.3189 21.2609H64C65.1046 21.2609 66 22.1563 66 23.2609ZM18 27C18 26.4477 18.4477 26 19 26H61C61.5523 26 62 26.4477 62 27H18ZM16 31H64Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-folder-1', CoreFolder1)
export default CoreFolder1
