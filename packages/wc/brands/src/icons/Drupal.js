
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsDrupal = {
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
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="#0678BE"
          />
          <path
            d="M40 12.5C24.8521 12.5 12.5 24.8521 12.5 40C12.5 55.1479 24.8521 67.5 40 67.5C55.1479 67.5 67.5 55.1479 67.5 40C67.5 25.0461 54.9539 12.5 40 12.5ZM40 57.5C31.7067 57.5 25 50.7933 25 42.5C25 35.4722 29.6544 31.0523 33.8023 26.9044C36.5523 24.1544 39.2157 20.4664 40 17.5C40.7868 20.469 43.4044 24.1544 46.1977 26.9044C50.3456 31.0523 55 35.4722 55 42.5C55 50.7933 48.2933 57.5 40 57.5Z"
            fill="white"
          />
        `}
        ${variant === "solid" && svg`
          <path
            d="M25 42.5C25 50.7933 31.7067 57.5 40 57.5C48.2933 57.5 55 50.7933 55 42.5C55 35.6915 50.6315 31.3306 46.5872 27.2935C46.457 27.1635 46.3271 27.0338 46.1977 26.9044C43.4044 24.1544 40.7868 20.469 40 17.5C39.2157 20.4664 36.5523 24.1544 33.8023 26.9044C33.6729 27.0338 33.543 27.1635 33.4128 27.2935C29.3685 31.3306 25 35.6915 25 42.5Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75ZM12.5 40C12.5 24.8521 24.8521 12.5 40 12.5C54.9539 12.5 67.5 25.0461 67.5 40C67.5 55.1479 55.1479 67.5 40 67.5C24.8521 67.5 12.5 55.1479 12.5 40Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 12.5C24.8521 12.5 12.5 24.8521 12.5 40C12.5 55.1479 24.8521 67.5 40 67.5C55.1479 67.5 67.5 55.1479 67.5 40C67.5 25.0461 54.9539 12.5 40 12.5ZM40 57.5C31.7067 57.5 25 50.7933 25 42.5C25 35.4722 29.6544 31.0523 33.8023 26.9044C36.5523 24.1544 39.2157 20.4664 40 17.5C40.7868 20.469 43.4044 24.1544 46.1977 26.9044C50.3456 31.0523 55 35.4722 55 42.5C55 50.7933 48.2933 57.5 40 57.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-drupal', BrandsDrupal)
export default BrandsDrupal
