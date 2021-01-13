
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBuilding2 = {
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
            d="M23 72H57"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M25 24L55 24L55 72H25L25 24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 18L56 18V24L24 24V18Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M31 12L49 12V18L31 18V12Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 12L40 8"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M34 68C34 66.8954 34.8954 66 36 66H44C45.1046 66 46 66.8954 46 68V72H34V68Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M31 30H37V36H31V30Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M31 42H37V48H31V42Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M31 54H37V60H31V54Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M43 30H49V36H43V30Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M43 42H49V48H43V42Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M43 54H49V60H43V54Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 6.5C40.8284 6.5 41.5 7.17157 41.5 8V10.5H49C49.8284 10.5 50.5 11.1716 50.5 12V16.5H56C56.8284 16.5 57.5 17.1716 57.5 18V24C57.5 24.8284 56.8284 25.5 56 25.5H55H25H24C23.1716 25.5 22.5 24.8284 22.5 24V18C22.5 17.1716 23.1716 16.5 24 16.5H29.5V12C29.5 11.1716 30.1716 10.5 31 10.5H38.5V8C38.5 7.17157 39.1716 6.5 40 6.5ZM21.5 72C21.5 71.1716 22.1716 70.5 23 70.5H25H34H46H55H57C57.8284 70.5 58.5 71.1716 58.5 72C58.5 72.8284 57.8284 73.5 57 73.5H23C22.1716 73.5 21.5 72.8284 21.5 72Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44 66C45.1046 66 46 66.8954 46 68V70.5H55V25.5H25V70.5H34V68C34 66.8954 34.8954 66 36 66H44ZM36 30C36.5523 30 37 30.4477 37 31V35C37 35.5523 36.5523 36 36 36H32C31.4477 36 31 35.5523 31 35V31C31 30.4477 31.4477 30 32 30H36ZM36 42C36.5523 42 37 42.4477 37 43V47C37 47.5523 36.5523 48 36 48H32C31.4477 48 31 47.5523 31 47V43C31 42.4477 31.4477 42 32 42H36ZM32 54C31.4477 54 31 54.4477 31 55V59C31 59.5523 31.4477 60 32 60H36C36.5523 60 37 59.5523 37 59V55C37 54.4477 36.5523 54 36 54H32ZM48 30C48.5523 30 49 30.4477 49 31V35C49 35.5523 48.5523 36 48 36H44C43.4477 36 43 35.5523 43 35V31C43 30.4477 43.4477 30 44 30H48ZM44 42C43.4477 42 43 42.4477 43 43V47C43 47.5523 43.4477 48 44 48H48C48.5523 48 49 47.5523 49 47V43C49 42.4477 48.5523 42 48 42H44ZM48 54C48.5523 54 49 54.4477 49 55V59C49 59.5523 48.5523 60 48 60H44C43.4477 60 43 59.5523 43 59V55C43 54.4477 43.4477 54 44 54H48Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M23 72H57"
            stroke="#E0E0E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M25 24L55 24L55 72H25L25 24Z"
            fill="#E0E0E0"
            stroke="#E0E0E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M34 68C34 66.8954 34.8954 66 36 66H44C45.1046 66 46 66.8954 46 68V72H34V68Z"
            fill="#4F4F4F"
            stroke="#4F4F4F"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
          />
          <path
            d="M31 12L49 12V18L31 18V12Z"
            fill="#E0E0E0"
            stroke="#E0E0E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 12L40 8"
            stroke="#E0E0E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 18L56 18V24L24 24V18Z"
            fill="#4F4F4F"
            stroke="#4F4F4F"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37 30H31V36H37V30ZM37 42H31V48H37V42ZM31 54H37V60H31V54ZM49 30H43V36H49V30ZM43 42H49V48H43V42ZM49 54H43V60H49V54Z"
            fill="#F2F2F2"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M25 24H55V72H25V24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M34 68C34 66.8954 34.8954 66 36 66H44C45.1046 66 46 66.8954 46 68V72H34V68Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M31 12H49V18H31V12Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24 18H56V24H24V18Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M37 30H31V36H37V30Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M37 42H31V48H37V42Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M31 54H37V60H31V54Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M49 30H43V36H49V30Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M43 42H49V48H43V42Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M49 54H43V60H49V54Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M23 72H57M40 12V8M25 24H55V72H25V24ZM46 72V68C46 66.8954 45.1046 66 44 66H36C34.8954 66 34 66.8954 34 68V72H46ZM31 12H49V18H31V12ZM24 18H56V24H24V18ZM31 30H37V36H31V30ZM31 42H37V48H31V42ZM37 54H31V60H37V54ZM43 30H49V36H43V30ZM49 42H43V48H49V42ZM43 54H49V60H43V54Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31 28C29.8954 28 29 28.8954 29 30V36C29 37.1046 29.8954 38 31 38H37C38.1046 38 39 37.1046 39 36V30C39 28.8954 38.1046 28 37 28H31ZM33 34V32H35V34H33Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43 28C41.8954 28 41 28.8954 41 30V36C41 37.1046 41.8954 38 43 38H49C50.1046 38 51 37.1046 51 36V30C51 28.8954 50.1046 28 49 28H43ZM45 34V32H47V34H45Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31 40C29.8954 40 29 40.8954 29 42V48C29 49.1046 29.8954 50 31 50H37C38.1046 50 39 49.1046 39 48V42C39 40.8954 38.1046 40 37 40H31ZM33 46V44H35V46H33Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43 40C41.8954 40 41 40.8954 41 42V48C41 49.1046 41.8954 50 43 50H49C50.1046 50 51 49.1046 51 48V42C51 40.8954 50.1046 40 49 40H43ZM45 46V44H47V46H45Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31 52C29.8954 52 29 52.8954 29 54V60C29 61.1046 29.8954 62 31 62H37C38.1046 62 39 61.1046 39 60V54C39 52.8954 38.1046 52 37 52H31ZM33 58V56H35V58H33Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43 52C41.8954 52 41 52.8954 41 54V60C41 61.1046 41.8954 62 43 62H49C50.1046 62 51 61.1046 51 60V54C51 52.8954 50.1046 52 49 52H43ZM45 58V56H47V58H45Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42 8C42 6.89543 41.1046 6 40 6C38.8954 6 38 6.89543 38 8V10H31C29.8954 10 29 10.8954 29 12V16H24C22.8954 16 22 16.8954 22 18V24C22 24.7403 22.4022 25.3866 23 25.7324V70C21.8954 70 21 70.8954 21 72C21 73.1046 21.8954 74 23 74H57C58.1046 74 59 73.1046 59 72C59 70.8954 58.1046 70 57 70V25.7324C57.5978 25.3866 58 24.7403 58 24V18C58 16.8954 57.1046 16 56 16H51V12C51 10.8954 50.1046 10 49 10H42V8ZM47 14V16H33V14H47ZM54 20V22H26V20H54ZM27 70V26H53V70H48V68C48 65.7909 46.2091 64 44 64H36C33.7909 64 32 65.7909 32 68V70H27ZM36 68V70H44V68H36Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-building-2', CoreBuilding2)
export default CoreBuilding2
