
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreSliders = {
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
            d="M21 17C21 15.8954 21.8954 15 23 15H27C28.1046 15 29 15.8954 29 17V29C29 30.1046 28.1046 31 27 31H23C21.8954 31 21 30.1046 21 29V17Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M51 34C51 32.8954 51.8954 32 53 32H57C58.1046 32 59 32.8954 59 34V46C59 47.1046 58.1046 48 57 48H53C51.8954 48 51 47.1046 51 46V34Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M33 51C33 49.8954 33.8954 49 35 49H39C40.1046 49 41 49.8954 41 51V63C41 64.1046 40.1046 65 39 65H35C33.8954 65 33 64.1046 33 63V51Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 23H21M29 23H68"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 40H51M59 40H68"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 57H33M41 57H68"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M12 20C10.3431 20 9 21.3431 9 23C9 24.6569 10.3431 26 12 26V20ZM12.5 26C14.1569 26 15.5 24.6569 15.5 23C15.5 21.3431 14.1569 20 12.5 20V26ZM24.4956 20C22.8387 20 21.4956 21.3431 21.4956 23C21.4956 24.6569 22.8387 26 24.4956 26V20ZM25.5044 26C27.1613 26 28.5044 24.6569 28.5044 23C28.5044 21.3431 27.1613 20 25.5044 20V26ZM37.5 20C35.8431 20 34.5 21.3431 34.5 23C34.5 24.6569 35.8431 26 37.5 26V20ZM68 26C69.6569 26 71 24.6569 71 23C71 21.3431 69.6569 20 68 20V26ZM12 37C10.3431 37 9 38.3431 9 40C9 41.6569 10.3431 43 12 43L12 37ZM42.5 43C44.1569 43 45.5 41.6569 45.5 40C45.5 38.3431 44.1569 37 42.5 37V43ZM54.4956 37C52.8387 37 51.4956 38.3431 51.4956 40C51.4956 41.6569 52.8387 43 54.4956 43V37ZM55.5044 43C57.1613 43 58.5044 41.6569 58.5044 40C58.5044 38.3431 57.1613 37 55.5044 37V43ZM67.5 37C65.8431 37 64.5 38.3431 64.5 40C64.5 41.6569 65.8431 43 67.5 43V37ZM68 43C69.6569 43 71 41.6569 71 40C71 38.3431 69.6569 37 68 37V43ZM12 54C10.3431 54 9 55.3431 9 57C9 58.6569 10.3431 60 12 60V54ZM24.5 60C26.1569 60 27.5 58.6569 27.5 57C27.5 55.3431 26.1569 54 24.5 54V60ZM36.4956 54C34.8387 54 33.4956 55.3431 33.4956 57C33.4956 58.6569 34.8387 60 36.4956 60L36.4956 54ZM37.5044 60C39.1613 60 40.5044 58.6569 40.5044 57C40.5044 55.3431 39.1613 54 37.5044 54L37.5044 60ZM49.5 54C47.8431 54 46.5 55.3431 46.5 57C46.5 58.6569 47.8431 60 49.5 60V54ZM68 60C69.6569 60 71 58.6569 71 57C71 55.3431 69.6569 54 68 54V60ZM12 26H12.5V20H12V26ZM24.4956 26H25.5044V20H24.4956V26ZM37.5 26L68 26V20L37.5 20V26ZM12 43H42.5V37L12 37L12 43ZM54.4956 43H55.5044V37H54.4956V43ZM67.5 43H68V37H67.5V43ZM12 60H24.5V54H12V60ZM36.4956 60H37.5044L37.5044 54H36.4956L36.4956 60ZM49.5 60H68V54L49.5 54V60Z"
            fill="currentColor"
          />
          <rect
            x="21"
            y="15"
            width="8"
            height="16"
            rx="2"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="51"
            y="32"
            width="8"
            height="16"
            rx="2"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="33"
            y="49"
            width="8"
            height="16"
            rx="2"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M12 21C10.8954 21 10 21.8954 10 23C10 24.1046 10.8954 25 12 25V21ZM21 25C22.1046 25 23 24.1046 23 23C23 21.8954 22.1046 21 21 21V25ZM29 21C27.8954 21 27 21.8954 27 23C27 24.1046 27.8954 25 29 25V21ZM68 25C69.1046 25 70 24.1046 70 23C70 21.8954 69.1046 21 68 21V25ZM12 38C10.8954 38 10 38.8954 10 40C10 41.1046 10.8954 42 12 42L12 38ZM51 42C52.1046 42 53 41.1046 53 40C53 38.8954 52.1046 38 51 38V42ZM59 38C57.8954 38 57 38.8954 57 40C57 41.1046 57.8954 42 59 42V38ZM68 42C69.1046 42 70 41.1046 70 40C70 38.8954 69.1046 38 68 38V42ZM12 55C10.8954 55 10 55.8954 10 57C10 58.1046 10.8954 59 12 59V55ZM33 59C34.1046 59 35 58.1046 35 57C35 55.8954 34.1046 55 33 55L33 59ZM41 55C39.8954 55 39 55.8954 39 57C39 58.1046 39.8954 59 41 59L41 55ZM68 59C69.1046 59 70 58.1046 70 57C70 55.8954 69.1046 55 68 55V59ZM12 25H21V21H12V25ZM29 25L68 25V21L29 21V25ZM12 42L51 42V38L12 38L12 42ZM59 42L68 42V38H59V42ZM12 59H33L33 55H12V59ZM41 59H68V55H41L41 59Z"
            fill="#56CCF2"
          />
          <rect
            x="21"
            y="15"
            width="8"
            height="16"
            rx="2"
            fill="#9B51E0"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="51"
            y="32"
            width="8"
            height="16"
            rx="2"
            fill="#9B51E0"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="33"
            y="49"
            width="8"
            height="16"
            rx="2"
            fill="#9B51E0"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M21 17C21 15.8954 21.8954 15 23 15H27C28.1046 15 29 15.8954 29 17V29C29 30.1046 28.1046 31 27 31H23C21.8954 31 21 30.1046 21 29V17Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M51 34C51 32.8954 51.8954 32 53 32H57C58.1046 32 59 32.8954 59 34V46C59 47.1046 58.1046 48 57 48H53C51.8954 48 51 47.1046 51 46V34Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M33 51C33 49.8954 33.8954 49 35 49H39C40.1046 49 41 49.8954 41 51V63C41 64.1046 40.1046 65 39 65H35C33.8954 65 33 64.1046 33 63V51Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 23H21M29 23H68M12 40H51M59 40H68M12 57H33M41 57H68M23 31H27C28.1046 31 29 30.1046 29 29V17C29 15.8954 28.1046 15 27 15H23C21.8954 15 21 15.8954 21 17V29C21 30.1046 21.8954 31 23 31ZM53 48H57C58.1046 48 59 47.1046 59 46V34C59 32.8954 58.1046 32 57 32H53C51.8954 32 51 32.8954 51 34V46C51 47.1046 51.8954 48 53 48ZM35 65H39C40.1046 65 41 64.1046 41 63V51C41 49.8954 40.1046 49 39 49H35C33.8954 49 33 49.8954 33 51V63C33 64.1046 33.8954 65 35 65Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23 13C20.7909 13 19 14.7909 19 17V21H12C10.8954 21 10 21.8954 10 23C10 24.1046 10.8954 25 12 25H19V29C19 31.2091 20.7909 33 23 33H27C29.2091 33 31 31.2091 31 29V25H68C69.1046 25 70 24.1046 70 23C70 21.8954 69.1046 21 68 21H31V17C31 14.7909 29.2091 13 27 13H23ZM27 17H23V29H27V17Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 38C10.8954 38 10 38.8954 10 40C10 41.1046 10.8954 42 12 42H49V46C49 48.2091 50.7909 50 53 50H57C59.2091 50 61 48.2091 61 46V42H68C69.1046 42 70 41.1046 70 40C70 38.8954 69.1046 38 68 38H61V34C61 31.7909 59.2091 30 57 30H53C50.7909 30 49 31.7909 49 34V38H12ZM57 34V46H53V34H57Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 55C10.8954 55 10 55.8954 10 57C10 58.1046 10.8954 59 12 59H31V63C31 65.2091 32.7909 67 35 67H39C41.2091 67 43 65.2091 43 63V59H68C69.1046 59 70 58.1046 70 57C70 55.8954 69.1046 55 68 55H43V51C43 48.7909 41.2091 47 39 47H35C32.7909 47 31 48.7909 31 51V55H12ZM39 51H35V63H39V51Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-sliders', CoreSliders)
export default CoreSliders
