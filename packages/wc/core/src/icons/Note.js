
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreNote = {
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
            d="M18 16C18 13.7909 19.7909 12 22 12H58C60.2091 12 62 13.7909 62 16V64C62 66.2091 60.2091 68 58 68H22C19.7909 68 18 66.2091 18 64V16Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 24H52"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 32H44"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 40H52"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 48H44"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 56H52"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 12C19.7909 12 18 13.7909 18 16V64C18 66.2091 19.7909 68 22 68H58C60.2091 68 62 66.2091 62 64V16C62 13.7909 60.2091 12 58 12L22 12ZM28 21.5C26.6193 21.5 25.5 22.6193 25.5 24C25.5 25.3807 26.6193 26.5 28 26.5H52C53.3807 26.5 54.5 25.3807 54.5 24C54.5 22.6193 53.3807 21.5 52 21.5H28ZM25.5 40C25.5 38.6193 26.6193 37.5 28 37.5H52C53.3807 37.5 54.5 38.6193 54.5 40C54.5 41.3807 53.3807 42.5 52 42.5H28C26.6193 42.5 25.5 41.3807 25.5 40ZM28 53.5C26.6193 53.5 25.5 54.6193 25.5 56C25.5 57.3807 26.6193 58.5 28 58.5H52C53.3807 58.5 54.5 57.3807 54.5 56C54.5 54.6193 53.3807 53.5 52 53.5H28ZM25.5 32C25.5 30.6193 26.6193 29.5 28 29.5H44C45.3807 29.5 46.5 30.6193 46.5 32C46.5 33.3807 45.3807 34.5 44 34.5H28C26.6193 34.5 25.5 33.3807 25.5 32ZM28 45.5C26.6193 45.5 25.5 46.6193 25.5 48C25.5 49.3807 26.6193 50.5 28 50.5H44C45.3807 50.5 46.5 49.3807 46.5 48C46.5 46.6193 45.3807 45.5 44 45.5H28Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <rect
            x="18"
            y="12"
            width="44"
            height="56"
            rx="4"
            fill="#F2F2F2"
            stroke="#F2F2F2"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M28 24L52 24"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 32H44"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 40L52 40"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 48H44"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 56L52 56"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M18 16C18 13.7909 19.7909 12 22 12H58C60.2091 12 62 13.7909 62 16V64C62 66.2091 60.2091 68 58 68H22C19.7909 68 18 66.2091 18 64V16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28 24H52M28 32H44M28 40H52M28 48H44M28 56H52M22 68H58C60.2091 68 62 66.2091 62 64V16C62 13.7909 60.2091 12 58 12H22C19.7909 12 18 13.7909 18 16V64C18 66.2091 19.7909 68 22 68Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M28 22C26.8954 22 26 22.8954 26 24C26 25.1046 26.8954 26 28 26H52C53.1046 26 54 25.1046 54 24C54 22.8954 53.1046 22 52 22H28Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M26 40C26 38.8954 26.8954 38 28 38H52C53.1046 38 54 38.8954 54 40C54 41.1046 53.1046 42 52 42H28C26.8954 42 26 41.1046 26 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 54C26.8954 54 26 54.8954 26 56C26 57.1046 26.8954 58 28 58H52C53.1046 58 54 57.1046 54 56C54 54.8954 53.1046 54 52 54H28Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M26 32C26 30.8954 26.8954 30 28 30H44C45.1046 30 46 30.8954 46 32C46 33.1046 45.1046 34 44 34H28C26.8954 34 26 33.1046 26 32Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 46C26.8954 46 26 46.8954 26 48C26 49.1046 26.8954 50 28 50H44C45.1046 50 46 49.1046 46 48C46 46.8954 45.1046 46 44 46H28Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 10C18.6863 10 16 12.6863 16 16V64C16 67.3137 18.6863 70 22 70H58C61.3137 70 64 67.3137 64 64V16C64 12.6863 61.3137 10 58 10H22ZM20 16C20 14.8954 20.8954 14 22 14H58C59.1046 14 60 14.8954 60 16V64C60 65.1046 59.1046 66 58 66H22C20.8954 66 20 65.1046 20 64V16Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-note', CoreNote)
export default CoreNote
