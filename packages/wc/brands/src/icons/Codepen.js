
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsCodepen = {
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
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.6133 15.4199C39.453 14.86 40.547 14.86 41.3867 15.4199L63.8868 30.4199C64.5822 30.8835 65 31.6641 65 32.5V47.5C65 48.3359 64.5822 49.1165 63.8868 49.5801L41.3867 64.5801C40.547 65.14 39.453 65.14 38.6133 64.5801L16.1132 49.5801C15.4178 49.1165 15 48.3359 15 47.5V32.5C15 31.6641 15.4178 30.8835 16.1132 30.4199L38.6133 15.4199ZM20 37.1713L24.2431 40L20 42.8287V37.1713ZM22.0069 47.5L37.5 57.8287V48.838L28.75 43.0046L22.0069 47.5ZM33.2569 40L40 44.4954L46.7431 40L40 35.5046L33.2569 40ZM42.5 31.162L51.25 36.9954L57.9931 32.5L42.5 22.1713V31.162ZM37.5 22.1713V31.162L28.75 36.9954L22.0069 32.5L37.5 22.1713ZM60 37.1713L55.7569 40L60 42.8287V37.1713ZM57.9931 47.5L51.25 43.0046L42.5 48.838V57.8287L57.9931 47.5Z"
            fill="white"
          />
        `}
        ${variant === "solid" && svg`
          <path
            d="M24.2431 40L20 37.1713V42.8287L24.2431 40Z"
            fill="currentColor"
          />
          <path
            d="M37.5 57.8287L22.0069 47.5L28.75 43.0046L37.5 48.838V57.8287Z"
            fill="currentColor"
          />
          <path
            d="M40 44.4954L33.2569 40L40 35.5046L46.7431 40L40 44.4954Z"
            fill="currentColor"
          />
          <path
            d="M51.25 36.9954L42.5 31.162V22.1713L57.9931 32.5L51.25 36.9954Z"
            fill="currentColor"
          />
          <path
            d="M37.5 31.162V22.1713L22.0069 32.5L28.75 36.9954L37.5 31.162Z"
            fill="currentColor"
          />
          <path
            d="M55.7569 40L60 37.1713V42.8287L55.7569 40Z"
            fill="currentColor"
          />
          <path
            d="M51.25 43.0046L57.9931 47.5L42.5 57.8287V48.838L51.25 43.0046Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75ZM41.3867 15.4199C40.547 14.86 39.453 14.86 38.6133 15.4199L16.1132 30.4199C15.4178 30.8835 15 31.6641 15 32.5V47.5C15 48.3359 15.4178 49.1165 16.1132 49.5801L38.6133 64.5801C39.453 65.14 40.547 65.14 41.3867 64.5801L63.8868 49.5801C64.5822 49.1165 65 48.3359 65 47.5V32.5C65 31.6641 64.5822 30.8835 63.8868 30.4199L41.3867 15.4199Z"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.6133 15.4199C39.453 14.86 40.547 14.86 41.3867 15.4199L63.8868 30.4199C64.5822 30.8835 65 31.6641 65 32.5V47.5C65 48.3359 64.5822 49.1165 63.8868 49.5801L41.3867 64.5801C40.547 65.14 39.453 65.14 38.6133 64.5801L16.1132 49.5801C15.4178 49.1165 15 48.3359 15 47.5V32.5C15 31.6641 15.4178 30.8835 16.1132 30.4199L38.6133 15.4199ZM20 37.1713L24.2431 40L20 42.8287V37.1713ZM22.0069 47.5L37.5 57.8287V48.838L28.75 43.0046L22.0069 47.5ZM33.2569 40L40 44.4954L46.7431 40L40 35.5046L33.2569 40ZM42.5 31.162L51.25 36.9954L57.9931 32.5L42.5 22.1713V31.162ZM37.5 22.1713V31.162L28.75 36.9954L22.0069 32.5L37.5 22.1713ZM60 37.1713L55.7569 40L60 42.8287V37.1713ZM57.9931 47.5L51.25 43.0046L42.5 48.838V57.8287L57.9931 47.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-codepen', BrandsCodepen)
export default BrandsCodepen
