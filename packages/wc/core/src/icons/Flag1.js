
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreFlag1 = {
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
            d="M14 50C14 51.1046 14.8954 52 16 52H38C39.1046 52 40 52.8954 40 54C40 55.1046 40.8954 56 42 56H63.0459C64.4609 56 65.4284 54.5709 64.9029 53.2572L58.2971 36.7428C58.1064 36.266 58.1064 35.734 58.2971 35.2572L64.9029 18.7428C65.4284 17.4291 64.4609 16 63.0459 16H42C40.8954 16 40 15.1046 40 14C40 12.8954 39.1046 12 38 12H16C14.8954 12 14 12.8954 14 14"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 14V34"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M14 11L14 67"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 12.2348C14 12.1051 14.1051 12 14.2348 12H38C39.1046 12 40 12.8954 40 14C40 15.1046 40.8954 16 42 16H63.0459C64.4609 16 65.4284 17.4291 64.9029 18.7428L58.2971 35.2572C58.1064 35.734 58.1064 36.266 58.2971 36.7428L64.9029 53.2572C65.4284 54.5709 64.4609 56 63.0459 56H42C40.8954 56 40 55.1046 40 54C40 52.8954 39.1046 52 38 52H14.1394C14.0624 52 14 51.9376 14 51.8606V12.2348Z"
            fill="currentColor"
          />
          <path
            d="M64.9029 53.2572L66.2956 52.7001L64.9029 53.2572ZM58.2971 35.2572L59.6898 35.8143L58.2971 35.2572ZM58.2971 36.7428L56.9044 37.2999L58.2971 36.7428ZM64.9029 18.7428L63.5102 18.1857L64.9029 18.7428ZM38 10.5H14.2348V13.5H38V10.5ZM63.0459 14.5H42V17.5H63.0459V14.5ZM59.6898 35.8143L66.2956 19.2999L63.5102 18.1857L56.9044 34.7001L59.6898 35.8143ZM66.2956 52.7001L59.6898 36.1857L56.9044 37.2999L63.5102 53.8143L66.2956 52.7001ZM42 57.5H63.0459V54.5H42V57.5ZM14.1394 53.5H38V50.5H14.1394V53.5ZM12.5 12.2348V51.8606H15.5V12.2348H12.5ZM14.1394 50.5C14.8908 50.5 15.5 51.1092 15.5 51.8606H12.5C12.5 52.766 13.234 53.5 14.1394 53.5V50.5ZM41.5 54C41.5 52.067 39.933 50.5 38 50.5V53.5C38.2761 53.5 38.5 53.7239 38.5 54H41.5ZM42 54.5C41.7239 54.5 41.5 54.2761 41.5 54H38.5C38.5 55.933 40.067 57.5 42 57.5V54.5ZM63.5102 53.8143C63.6415 54.1427 63.3997 54.5 63.0459 54.5V57.5C65.5221 57.5 67.2152 54.9992 66.2956 52.7001L63.5102 53.8143ZM56.9044 34.7001C56.5706 35.5346 56.5706 36.4654 56.9044 37.2999L59.6898 36.1857C59.6421 36.0665 59.6421 35.9335 59.6898 35.8143L56.9044 34.7001ZM63.0459 17.5C63.3997 17.5 63.6415 17.8573 63.5102 18.1857L66.2956 19.2999C67.2152 17.0008 65.5221 14.5 63.0459 14.5V17.5ZM38.5 14C38.5 15.933 40.067 17.5 42 17.5V14.5C41.7239 14.5 41.5 14.2761 41.5 14H38.5ZM14.2348 10.5C13.2767 10.5 12.5 11.2767 12.5 12.2348H15.5C15.5 12.9335 14.9335 13.5 14.2348 13.5V10.5ZM38 13.5C38.2761 13.5 38.5 13.7239 38.5 14H41.5C41.5 12.067 39.933 10.5 38 10.5V13.5Z"
            fill="currentColor"
          />
          <path
            d="M14 11L14 67"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 14V34"
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
            d="M14.4771 12.2348C14.4771 12.1051 14.5822 12 14.7118 12H38.4771C39.5816 12 40.4771 12.8954 40.4771 14C40.4771 15.1046 41.3725 16 42.4771 16H63.523C64.9379 16 65.9054 17.4291 65.3799 18.7428L58.7742 35.2572C58.5834 35.734 58.5834 36.266 58.7742 36.7428L65.3799 53.2572C65.9054 54.5709 64.9379 56 63.523 56H42.4771C41.3725 56 40.4771 55.1046 40.4771 54C40.4771 52.8954 39.5816 52 38.4771 52H14.6165C14.5395 52 14.4771 51.9376 14.4771 51.8606V12.2348Z"
            fill="#56CCF2"
          />
          <path
            d="M14.4771 11L14.4771 67"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M14 12.2348C14 12.1051 14.1051 12 14.2348 12H38C39.1046 12 40 12.8954 40 14C40 15.1046 40.8954 16 42 16H63.0459C64.4609 16 65.4284 17.4291 64.9029 18.7428L58.2971 35.2572C58.1064 35.734 58.1064 36.266 58.2971 36.7428L64.9029 53.2572C65.4284 54.5709 64.4609 56 63.0459 56H42C40.8954 56 40 55.1046 40 54C40 52.8954 39.1046 52 38 52H14.1394C14.0624 52 14 51.9376 14 51.8606V12.2348Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 14C40 15.1046 40.8954 16 42 16H63.0459C64.4609 16 65.4284 17.4291 64.9029 18.7428L58.2971 35.2572C58.1064 35.734 58.1064 36.266 58.2971 36.7428L64.9029 53.2572C65.4284 54.5709 64.4609 56 63.0459 56H42C40.8954 56 40 55.1046 40 54C40 52.8954 39.1046 52 38 52H14.1394C14.0624 52 14 51.9376 14 51.8606V12.2348C14 12.1051 14.1051 12 14.2348 12H38C39.1046 12 40 12.8954 40 14ZM40 14V34M14 11L14 67"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 9C14.7438 9 15.3927 9.40601 15.7373 10.0085C15.8242 10.0029 15.9117 10 16 10H38C40.2091 10 42 11.7909 42 14H63.0459C65.8758 14 67.8108 16.8581 66.7598 19.4856L60.1541 36L66.7598 52.5144C67.8108 55.1419 65.8758 58 63.0459 58H42C39.7909 58 38 56.2091 38 54H16L16 67C16 68.1046 15.1046 69 14 69C12.8954 69 12 68.1046 12 67L12 11C12 9.89543 12.8954 9 14 9ZM38 14H16V50H38C40.2091 50 42 51.7909 42 54H63.0459L56.4402 37.4856C56.0587 36.5319 56.0587 35.4681 56.4402 34.5144L63.0459 18H42V34C42 35.1046 41.1046 36 40 36C38.8954 36 38 35.1046 38 34V14Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-flag-1', CoreFlag1)
export default CoreFlag1
