
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreIndustry = {
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
            d="M6 64H38L30.6311 16H13.3689L6 64Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M37.998 64H53.998V28L33.998 36V37.9445L37.998 64Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M74 64V28L54 36V64H74Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M13 26L31 26"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 41H48"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M60 41H68"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 64H53.998V28L33.998 36V37.9317L32.4761 28.0179C32.0624 28.321 31.5521 28.5 31 28.5H13C12.4479 28.5 11.9376 28.321 11.5239 28.0179L6 64ZM37.5 41C37.5 39.6193 38.6193 38.5 40 38.5H48C49.3807 38.5 50.5 39.6193 50.5 41C50.5 42.3807 49.3807 43.5 48 43.5H40C38.6193 43.5 37.5 42.3807 37.5 41Z"
            fill="currentColor"
          />
          <path
            d="M12.1973 23.6317L13.3689 16H30.6311L31.8027 23.6317C31.5508 23.5463 31.2808 23.5 31 23.5H13C12.7192 23.5 12.4492 23.5463 12.1973 23.6317Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M74 28V64H54V36L74 28ZM60 38.5C58.6193 38.5 57.5 39.6193 57.5 41C57.5 42.3807 58.6193 43.5 60 43.5H68C69.3807 43.5 70.5 42.3807 70.5 41C70.5 39.6193 69.3807 38.5 68 38.5H60Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 64H38L30.6311 16L13.3689 16L6 64Z"
            fill="#828282"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.998 64H53.998L53.998 28L33.998 36V37.9445L37.998 64Z"
            fill="#4F4F4F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M74 64V28L54 36L54 64H74Z"
            fill="#4F4F4F"
          />
          <path
            d="M13 26L31 26"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 41H48"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M60 41H68"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M6 64H38L30.6311 16H13.3689L6 64Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M37.998 64H53.998V28L33.998 36V37.9445L37.998 64Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M74 64V28L54 36V64H74Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M13 26H31M40 41H48M60 41H68M38 64H6L13.3689 16H30.6311L38 64ZM37.998 64H53.998V28L33.998 36V37.9445L37.998 64ZM74 28V64H54V36L74 28Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M38 41C38 39.8954 38.8954 39 40 39H48C49.1046 39 50 39.8954 50 41C50 42.1046 49.1046 43 48 43H40C38.8954 43 38 42.1046 38 41Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M60 39C58.8954 39 58 39.8954 58 41C58 42.1046 58.8954 43 60 43H68C69.1046 43 70 42.1046 70 41C70 39.8954 69.1046 39 68 39H60Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.3689 14C12.3815 14 11.5419 14.7206 11.392 15.6965L4.02317 63.6965C3.93464 64.2732 4.10233 64.8598 4.48229 65.3025C4.86225 65.7452 5.41659 66 6.00001 66H74C75.1046 66 76 65.1046 76 64V28C76 27.3364 75.6708 26.7159 75.1213 26.3439C74.5717 25.9718 73.8734 25.8966 73.2572 26.143L55.9981 33.0467V28C55.9981 27.3364 55.6689 26.7159 55.1193 26.3439C54.5698 25.9718 53.8715 25.8966 53.2553 26.143L35.3135 33.3198L32.608 15.6965C32.4582 14.7206 31.6185 14 30.6311 14H13.3689ZM39.7164 62L35.9981 37.7791V37.3541L51.9981 30.9541V62H39.7164ZM29.8359 24L28.9147 18H15.0853L14.1642 24H29.8359ZM30.4499 28L32.0098 38.1608C32.013 38.1899 32.0168 38.219 32.0212 38.2479L35.6676 62H8.33048L13.5501 28H30.4499ZM56 37.3541V62H72V30.9541L56 37.3541Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-industry', CoreIndustry)
export default CoreIndustry
