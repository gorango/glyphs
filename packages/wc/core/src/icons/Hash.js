
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreHash = {
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
            d="M28 64L35.6364 16"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M44.3638 64L52.0001 16"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M19.6923 31.4287L64 31.4287"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M15.9999 48.5713L60.3076 48.5713"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M28 64L35.6364 16"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M44.3635 64L51.9999 16"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M19.6923 31.4287L64 31.4287"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M15.9999 48.5713L60.3076 48.5713"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M28 64L35.6364 16"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M44.3635 64L51.9999 16"
            stroke="#56CCF2"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M19.6923 31.4287L64 31.4287"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M15.9999 48.5713L60.3076 48.5713"
            stroke="#56CCF2"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M28 64L35.6363 16M44.3635 64L51.9998 16M19.6923 31.4286L64 31.4286M15.9999 48.5714H60.3076"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.6115 16.3145C37.7851 15.2237 37.0414 14.1987 35.9506 14.0251C34.8597 13.8516 33.8347 14.5952 33.6612 15.6861L31.4748 29.4289L19.6923 29.4289C18.5877 29.4289 17.6923 30.3243 17.6923 31.4289C17.6923 32.5334 18.5877 33.4289 19.6923 33.4289H30.8385L28.7476 46.5717H16C14.8954 46.5717 14 47.4672 14 48.5717C14 49.6763 14.8954 50.5717 16 50.5717H28.1112L26.0248 63.6861C25.8513 64.7769 26.5949 65.8019 27.6858 65.9755C28.7766 66.149 29.8016 65.4054 29.9752 64.3145L32.1615 50.5717L44.4748 50.5717L42.3885 63.6861C42.2149 64.7769 42.9586 65.8019 44.0494 65.9755C45.1403 66.149 46.1653 65.4054 46.3388 64.3145L48.5252 50.5717H60.3077C61.4123 50.5717 62.3077 49.6763 62.3077 48.5717C62.3077 47.4672 61.4123 46.5717 60.3077 46.5717H49.1615L51.2524 33.4289H64C65.1046 33.4289 66 32.5334 66 31.4289C66 30.3243 65.1046 29.4289 64 29.4289L51.8888 29.4289L53.9752 16.3145C54.1487 15.2237 53.4051 14.1987 52.3142 14.0251C51.2234 13.8516 50.1984 14.5952 50.0248 15.6861L47.8385 29.4289L35.5252 29.4289L37.6115 16.3145ZM34.8888 33.4289L32.7979 46.5717L45.1112 46.5717L47.2021 33.4289L34.8888 33.4289Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-hash', CoreHash)
export default CoreHash
