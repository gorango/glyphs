
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsMsExcel = {
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
          <rect
            x="22"
            y="8.5"
            width="54"
            height="63"
            rx="5"
            fill="#2FB776"
          />
          <path
            d="M22 55.75H76V66.5C76 69.2614 73.7614 71.5 71 71.5H27C24.2386 71.5 22 69.2614 22 66.5V55.75Z"
            fill="url(#paint0_linearYP3o)"
          />
          <rect
            x="49"
            y="40"
            width="27"
            height="15.75"
            fill="#229C5B"
          />
          <rect
            x="22"
            y="40"
            width="27"
            height="15.75"
            fill="#1B5B38"
          />
          <rect
            x="49"
            y="24.25"
            width="27"
            height="15.75"
            fill="#27AE68"
          />
          <rect
            x="22"
            y="24.25"
            width="27"
            height="15.75"
            fill="#197B43"
          />
          <path
            d="M22 13.5C22 10.7386 24.2386 8.5 27 8.5H49V24.25H22V13.5Z"
            fill="#1D854F"
          />
          <path
            d="M22 31.75C22 27.6079 25.3579 24.25 29.5 24.25H41.5C45.6421 24.25 49 27.6079 49 31.75V57.25C49 61.3921 45.6421 64.75 41.5 64.75H22V31.75Z"
            fill="black"
            fill-opacity="0.3"
          />
          <rect
            x="4"
            y="19.75"
            width="40.5"
            height="40.5"
            rx="5"
            fill="url(#paint1_linearYP3o)"
          />
          <rect
            x="4"
            y="19.75"
            width="40.5"
            height="40.5"
            rx="5"
            fill="url(#paint2_linearYP3o)"
          />
          <path
            d="M33.25 51.25L26.9098 39.775L32.9716 28.75H28.0232L24.2809 35.7893L20.6005 28.75H15.4974L21.5902 39.775L15.25 51.25H20.1985L24.1881 43.7929L28.1469 51.25H33.25Z"
            fill="white"
          />
          <defs><linearGradient id="paint0_linearYP3o" x1="22" y1="63.625" x2="76" y2="63.625" gradientUnits="userSpaceOnUse"><stop stop-color="#163C27"/><stop offset="1" stop-color="#2A6043"/></linearGradient><linearGradient id="paint1_linearYP3o" x1="4" y1="40" x2="44.5" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#185A30"/><stop offset="1" stop-color="#176F3D"/></linearGradient><linearGradient id="paint2_linearYP3o" x1="4" y1="40" x2="44.5" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#185A30"/><stop offset="1" stop-color="#176F3D"/></linearGradient></defs>
        `}
        ${variant === "solid" && svg`
          <path
            d="M27 8.5C24.2386 8.5 22 10.7386 22 13.5V15.75H39.5C44.4706 15.75 48.5 19.7794 48.5 24.75V55.25C48.5 60.2206 44.4706 64.25 39.5 64.25H22V66.5C22 69.2614 24.2386 71.5 27 71.5H71C73.7614 71.5 76 69.2614 76 66.5V13.5C76 10.7386 73.7614 8.5 71 8.5H27Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 19.75C6.23858 19.75 4 21.9886 4 24.75V55.25C4 58.0114 6.23858 60.25 9 60.25H39.5C42.2614 60.25 44.5 58.0114 44.5 55.25V24.75C44.5 21.9886 42.2614 19.75 39.5 19.75H9ZM26.9098 39.775L33.25 51.25H28.1469L24.1881 43.7929L20.1985 51.25H15.25L21.5902 39.775L15.4974 28.75H20.6005L24.2809 35.7893L28.0232 28.75H32.9716L26.9098 39.775Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M27 8.5C24.2386 8.5 22 10.7386 22 13.5V19.75H39.5C42.2614 19.75 44.5 21.9886 44.5 24.75V55.25C44.5 58.0114 42.2614 60.25 39.5 60.25H22V66.5C22 69.2614 24.2386 71.5 27 71.5H71C73.7614 71.5 76 69.2614 76 66.5V13.5C76 10.7386 73.7614 8.5 71 8.5H27Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M4 24.75C4 21.9886 6.23858 19.75 9 19.75H39.5C42.2614 19.75 44.5 21.9886 44.5 24.75V55.25C44.5 58.0114 42.2614 60.25 39.5 60.25H9C6.23858 60.25 4 58.0114 4 55.25V24.75Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M33.25 51.25L26.9098 39.775L32.9716 28.75H28.0232L24.2809 35.7893L20.6005 28.75H15.4974L21.5902 39.775L15.25 51.25H20.1985L24.1881 43.7929L28.1469 51.25H33.25Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-ms-excel', BrandsMsExcel)
export default BrandsMsExcel
