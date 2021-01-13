
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreGarage = {
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
            d="M71 64L9 64"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 34L12 64"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M72.1788 36.6863L40 16L7.82129 36.6863"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M68 34V64"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M43.8471 30.2502C44.3886 28.5835 43.7953 26.7577 42.3776 25.7276C40.9598 24.6976 39.0401 24.6976 37.6223 25.7276C36.2046 26.7577 35.6113 28.5835 36.1528 30.2502C36.6944 31.9168 38.2475 33.0452 40 33.0452C41.7524 33.0452 43.3055 31.9168 43.8471 30.2502Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M22 64V40H58V64"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M58 56H22"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M58 48H22"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68 34L40 16L12 34L12 64H22L22 40L58 40V64H68V34ZM43.8471 30.25C44.3886 28.5833 43.7954 26.7575 42.3776 25.7275C40.9599 24.6974 39.0401 24.6974 37.6224 25.7275C36.2046 26.7575 35.6114 28.5833 36.1529 30.25C36.6944 31.9167 38.2476 33.0451 40 33.0451C41.7524 33.0451 43.3056 31.9167 43.8471 30.25Z"
            fill="currentColor"
          />
          <path
            d="M40 16L41.0815 14.3176C40.4227 13.8941 39.5773 13.8941 38.9185 14.3176L40 16ZM68 34H70C70 33.3195 69.654 32.6856 69.0815 32.3176L68 34ZM12 34L10.9185 32.3176C10.346 32.6856 10 33.3195 10 34H12ZM12 64H10C10 65.1046 10.8954 66 12 66V64ZM22 64V66C23.1046 66 24 65.1046 24 64H22ZM22 40V38C20.8954 38 20 38.8954 20 40H22ZM58 40H60C60 38.8954 59.1046 38 58 38L58 40ZM58 64H56C56 65.1046 56.8954 66 58 66V64ZM68 64V66C69.1046 66 70 65.1046 70 64H68ZM42.3776 25.7275L43.5532 24.1094L43.5532 24.1094L42.3776 25.7275ZM43.8471 30.25L41.945 29.632V29.632L43.8471 30.25ZM36.1529 30.25L34.2508 30.868V30.868L36.1529 30.25ZM38.9185 17.6824L66.9185 35.6824L69.0815 32.3176L41.0815 14.3176L38.9185 17.6824ZM13.0815 35.6824L41.0815 17.6824L38.9185 14.3176L10.9185 32.3176L13.0815 35.6824ZM14 64L14 34H10L10 64H14ZM22 62H12L12 66H22V62ZM20 40L20 64H24L24 40H20ZM58 38L22 38V42L58 42L58 38ZM60 64V40H56V64H60ZM68 62H58V66H68V62ZM66 34V64H70V34L66 34ZM41.2021 27.3455C41.9188 27.8663 42.2188 28.7893 41.945 29.632L45.7492 30.868C46.5585 28.3773 45.6719 25.6488 43.5532 24.1094L41.2021 27.3455ZM38.7979 27.3455C39.5147 26.8247 40.4853 26.8247 41.2021 27.3455L43.5532 24.1094C41.4345 22.5701 38.5655 22.5701 36.4468 24.1094L38.7979 27.3455ZM38.055 29.632C37.7812 28.7893 38.0812 27.8663 38.7979 27.3455L36.4468 24.1094C34.3281 25.6488 33.4415 28.3773 34.2508 30.868L38.055 29.632ZM40 31.0451C39.114 31.0451 38.3288 30.4746 38.055 29.632L34.2508 30.868C35.0601 33.3587 37.3811 35.0451 40 35.0451V31.0451ZM41.945 29.632C41.6712 30.4746 40.886 31.0451 40 31.0451V35.0451C42.6189 35.0451 44.9399 33.3587 45.7492 30.868L41.945 29.632Z"
            fill="currentColor"
          />
          <path
            d="M71 64L9 64"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="22"
            y="40"
            width="36"
            height="8"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="22"
            y="48"
            width="36"
            height="8"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="22"
            y="56"
            width="36"
            height="8"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M72.1788 36.6863L40 16L7.82129 36.6863"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68 34L40 16L12 34L12 64H22L22 40L58 40V64H68V34ZM43.8471 30.25C44.3886 28.5833 43.7954 26.7575 42.3776 25.7275C40.9599 24.6974 39.0401 24.6974 37.6224 25.7275C36.2046 26.7575 35.6114 28.5833 36.1529 30.25C36.6944 31.9167 38.2476 33.0451 40 33.0451C41.7524 33.0451 43.3056 31.9167 43.8471 30.25Z"
            fill="#F2994A"
          />
          <path
            d="M71 64L9 64"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="22"
            y="40"
            width="36"
            height="8"
            fill="#F2C94C"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="22"
            y="48"
            width="36"
            height="8"
            fill="#F2C94C"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="22"
            y="56"
            width="36"
            height="8"
            fill="#F2C94C"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M72.1788 36.6863L40 16L7.82129 36.6863"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68 34L40 16L12 34V64H22V40H58V64H68V34ZM43.8471 30.25C44.3887 28.5833 43.7954 26.7575 42.3777 25.7275C40.9599 24.6974 39.0401 24.6974 37.6224 25.7275C36.2046 26.7575 35.6114 28.5833 36.1529 30.25C36.6945 31.9167 38.2476 33.0451 40 33.0451C41.7525 33.0451 43.3056 31.9167 43.8471 30.25Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M22 40H58V48H22V40Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M22 48H58V56H22V48Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M22 56H58V64H22V56Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 16L68 34V64H58M40 16L12 34V64H22M40 16L72.1788 36.6863M40 16L7.82129 36.6863M22 64V40M22 64H58M22 64V56M22 40H58M22 40V48M58 40V64M58 40V48M58 64V56M71 64L9.00003 64M58 48H22M58 48V56M22 48V56M58 56H22M42.3777 25.7275C43.7954 26.7575 44.3887 28.5833 43.8471 30.25C43.3056 31.9167 41.7525 33.0451 40 33.0451C38.2476 33.0451 36.6945 31.9167 36.1529 30.25C35.6114 28.5833 36.2046 26.7575 37.6224 25.7275C39.0401 24.6974 40.9599 24.6974 42.3777 25.7275Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.5532 24.1094C41.4345 22.5701 38.5655 22.5701 36.4468 24.1094C34.3281 25.6488 33.4415 28.3773 34.2508 30.868C35.0601 33.3587 37.3811 35.0451 40 35.0451C42.6189 35.0451 44.94 33.3587 45.7493 30.868C46.5585 28.3773 45.672 25.6488 43.5532 24.1094ZM38.055 29.632C37.7813 28.7893 38.0812 27.8663 38.798 27.3455C39.5147 26.8247 40.4853 26.8247 41.2021 27.3455C41.9189 27.8663 42.2188 28.7893 41.945 29.632C41.6712 30.4746 40.886 31.0451 40 31.0451C39.1141 31.0451 38.3288 30.4746 38.055 29.632Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.8265 14.1787C40.2143 13.9007 39.495 13.9471 38.9185 14.3176L6.73977 35.004C5.81063 35.6013 5.54163 36.8387 6.13893 37.7678C6.73624 38.697 7.97366 38.966 8.9028 38.3687L10 37.6633V62H9.00003C7.89546 62 7.00003 62.8954 7.00003 64C7.00003 65.1046 7.89546 66 9.00003 66L71 66C72.1046 66 73 65.1046 73 64C73 62.8954 72.1046 62 71 62H70V37.6633L71.0973 38.3687C72.0264 38.966 73.2638 38.697 73.8611 37.7678C74.4584 36.8387 74.1894 35.6013 73.2603 35.004L41.0816 14.3176C40.9992 14.2647 40.9139 14.2184 40.8265 14.1787ZM66 35.0919L40 18.3776L14 35.0919V62H20V40C20 38.8954 20.8955 38 22 38H58C59.1046 38 60 38.8954 60 40V62H66V35.0919ZM56 50V54H24V50H56ZM56 46V42H24V46H56ZM56 58V62L24 62V58H56Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-garage', CoreGarage)
export default CoreGarage
