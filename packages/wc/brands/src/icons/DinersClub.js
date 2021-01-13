
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsDinersClub = {
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.5565 67.5882H44.2729C59.4398 67.5882 71.526 55.4846 72 40.5331V40.2958C71.763 25.107 59.4398 12.766 44.2729 13.0034H33.3716C18.9156 13.478 7.54032 25.8189 8.01429 40.5331C8.01429 55.2473 19.8635 67.3509 34.5565 67.5882ZM12.7539 40.2959C12.7539 27.955 22.9442 17.75 35.2674 17.75C47.5906 17.75 57.7809 27.955 57.7809 40.2959C57.7809 52.6369 47.5906 62.8418 35.2674 62.8418C22.9442 62.8418 12.7539 52.6369 12.7539 40.2959ZM38.8222 55.4846V25.3442C47.1166 27.4801 52.3302 35.7865 50.1974 44.0929C48.7755 49.7887 44.5098 54.0606 38.8222 55.4846ZM20.5744 36.4985C18.4416 44.8049 23.4182 53.3486 31.7127 55.4846V25.3442C26.262 26.7682 21.9963 31.04 20.5744 36.4985Z"
            fill="#145095"
          />
        `}
        ${variant === "solid" && svg`
          <path
            d="M38.8222 55.4846V25.3442C47.1166 27.4801 52.3302 35.7865 50.1974 44.0929C48.7755 49.7887 44.5098 54.0606 38.8222 55.4846Z"
            fill="currentColor"
          />
          <path
            d="M20.5744 36.4985C18.4416 44.8049 23.4182 53.3486 31.7127 55.4846V25.3442C26.262 26.7682 21.9963 31.04 20.5744 36.4985Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.5565 67.5882H44.2729C59.4398 67.5882 71.526 55.4846 72 40.5331V40.2958C71.763 25.107 59.4398 12.766 44.2729 13.0034H33.3716C18.9156 13.478 7.54032 25.8189 8.01429 40.5331C8.01429 55.2473 19.8635 67.3509 34.5565 67.5882ZM12.7539 40.2959C12.7539 27.955 22.9442 17.75 35.2674 17.75C47.5906 17.75 57.7809 27.955 57.7809 40.2959C57.7809 52.6369 47.5906 62.8418 35.2674 62.8418C22.9442 62.8418 12.7539 52.6369 12.7539 40.2959Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M38.8222 55.4846V25.3442C47.1166 27.4801 52.3302 35.7865 50.1974 44.0929C48.7755 49.7887 44.5098 54.0606 38.8222 55.4846Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M20.5744 36.4985C18.4416 44.8049 23.4182 53.3486 31.7127 55.4846V25.3442C26.262 26.7682 21.9963 31.04 20.5744 36.4985Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.5565 67.5882H44.2729C59.4398 67.5882 71.526 55.4846 72 40.5331V40.2958C71.763 25.107 59.4398 12.766 44.2729 13.0034H33.3716C18.9156 13.478 7.54032 25.8189 8.01429 40.5331C8.01429 55.2473 19.8635 67.3509 34.5565 67.5882ZM12.7539 40.2959C12.7539 27.955 22.9442 17.75 35.2674 17.75C47.5906 17.75 57.7809 27.955 57.7809 40.2959C57.7809 52.6369 47.5906 62.8418 35.2674 62.8418C22.9442 62.8418 12.7539 52.6369 12.7539 40.2959Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-diners-club', BrandsDinersClub)
export default BrandsDinersClub
