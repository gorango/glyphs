
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsMsOnenote = {
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
            fill="url(#paint0_linearQeIT)"
          />
          <path
            d="M22 55.75H76V66.5C76 69.2614 73.7614 71.5 71 71.5H27C24.2386 71.5 22 69.2614 22 66.5V55.75Z"
            fill="#5D29A1"
          />
          <rect
            x="22"
            y="40"
            width="54"
            height="15.75"
            fill="#7F32CC"
          />
          <rect
            x="22"
            y="24.25"
            width="54"
            height="15.75"
            fill="#9A40D6"
          />
          <path
            d="M26.5 8.5C24.0147 8.5 22 10.5147 22 13V67C22 69.4853 24.0147 71.5 26.5 71.5H58V24.25H76V13C76 10.5147 73.9853 8.5 71.5 8.5H26.5Z"
            fill="url(#paint1_linearQeIT)"
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
            fill="url(#paint2_linearQeIT)"
          />
          <rect
            x="4"
            y="19.75"
            width="40.5"
            height="40.5"
            rx="5"
            fill="url(#paint3_linearQeIT)"
          />
          <path
            d="M33.25 51.25V28.75H28.5009V41.8643L19.667 28.75H15.25V51.25H19.9327V37.6536L29.0987 51.25H33.25Z"
            fill="white"
          />
          <defs><linearGradient id="paint0_linearQeIT" x1="22" y1="40" x2="59.125" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#8C42AC"/><stop offset="1" stop-color="#C36DEF"/></linearGradient><linearGradient id="paint1_linearQeIT" x1="22" y1="40" x2="59.125" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#8C42AC"/><stop offset="1" stop-color="#C36DEF"/></linearGradient><linearGradient id="paint2_linearQeIT" x1="4" y1="40" x2="46.75" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#44176C"/><stop offset="1" stop-color="#621F9C"/></linearGradient><linearGradient id="paint3_linearQeIT" x1="4" y1="40" x2="46.75" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#44176C"/><stop offset="1" stop-color="#621F9C"/></linearGradient></defs>
        `}
        ${variant === "solid" && svg`
          <path
            d="M22 13.5C22 10.7386 24.2386 8.5 27 8.5H71C73.7614 8.5 76 10.7386 76 13.5V66.5C76 69.2614 73.7614 71.5 71 71.5H27C24.2386 71.5 22 69.2614 22 66.5V64.25H39.5C44.4706 64.25 48.5 60.2206 48.5 55.25V24.75C48.5 19.7794 44.4706 15.75 39.5 15.75H22V13.5Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 19.75C6.23858 19.75 4 21.9886 4 24.75V55.25C4 58.0114 6.23858 60.25 9 60.25H39.5C42.2614 60.25 44.5 58.0114 44.5 55.25V24.75C44.5 21.9886 42.2614 19.75 39.5 19.75H9ZM33.25 28.75V51.25H29.0987L19.9327 37.6536V51.25H15.25V28.75H19.667L28.5009 41.8643V28.75H33.25Z"
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
            d="M33.25 51.25V28.75H28.5009V41.8643L19.667 28.75H15.25V51.25H19.9327V37.6536L29.0987 51.25H33.25Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-ms-onenote', BrandsMsOnenote)
export default BrandsMsOnenote
