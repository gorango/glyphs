
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreAsterisk = {
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
            d="M40 12L40.0485 39.972L64.2487 54L40 40.056L15.7513 54L39.9515 39.972L40 12Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 68L40.0485 40.028L64.2487 26L40 39.944L15.7513 26L39.9515 40.028L40 68Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M40 12L40.0485 39.972L64.2487 54L40 40.056L15.7513 54L39.9515 39.972L40 12Z"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 68L40.0485 40.028L64.2487 26L40 39.944L15.7513 26L39.9515 40.028L40 68Z"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M40 12L40.0485 39.972L64.2487 54L40 40.056L15.7513 54L39.9515 39.972L40 12Z"
            stroke="#219653"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 68L40.0485 40.028L64.2487 26L40 39.944L15.7513 26L39.9515 40.028L40 68Z"
            stroke="#6FCF97"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M40 12L40.0485 39.972L64.2487 54L40 40.056L15.7513 54L39.9515 39.972L40 12Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 68L40.0485 40.028L64.2487 26L40 39.944L15.7513 26L39.9515 40.028L40 68Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M42 11.9965C41.9981 10.8933 41.1032 10 40 10C38.8968 10 38.0019 10.8933 38 11.9965V12.0035L37.9576 36.4624L16.7543 24.2697L16.7483 24.2662C15.7919 23.7163 14.5708 24.0446 14.0192 25C13.4676 25.9554 13.7938 27.1771 14.7483 27.7303L14.7543 27.7338L35.9152 40L14.7543 52.2662L14.7483 52.2697C13.7938 52.8229 13.4676 54.0446 14.0192 55C14.5708 55.9554 15.7919 56.2837 16.7483 55.7338L16.7543 55.7303L37.9576 43.5376L38 67.9965V68.0035C38.0019 69.1067 38.8968 70 40 70C41.1032 70 41.9981 69.1067 42 68.0035V67.9965L42.0424 43.5376L63.2457 55.7303L63.2517 55.7338C64.2081 56.2837 65.4291 55.9554 65.9807 55C66.5324 54.0446 66.2062 52.8229 65.2517 52.2697L65.2457 52.2662L44.0848 40L65.2457 27.7338L65.2517 27.7303C66.2062 27.1771 66.5324 25.9554 65.9807 25C65.4291 24.0446 64.2081 23.7163 63.2517 24.2662L63.2457 24.2697L42.0424 36.4624L42 12.0035V11.9965Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-asterisk', CoreAsterisk)
export default CoreAsterisk
