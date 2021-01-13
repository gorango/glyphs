
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreViewCollapse = {
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
            d="M16 34H26C30.4183 34 34 30.4183 34 26V16"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M64 34H54C49.5817 34 46 30.4183 46 26V16"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M64 46H54C49.5817 46 46 49.5817 46 54V64"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16 46H26C30.4183 46 34 49.5817 34 54V64"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M16 34H26C30.4183 34 34 30.4183 34 26V16"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16 46H26C30.4183 46 34 49.5817 34 54V64"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M64 34H54C49.5817 34 46 30.4183 46 26V16"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M64 46H54C49.5817 46 46 49.5817 46 54V64"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M16 34H26C30.4183 34 34 30.4183 34 26V16"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M16 46H26C30.4183 46 34 49.5817 34 54V64"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M64 34H54C49.5817 34 46 30.4183 46 26V16"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M64 46H54C49.5817 46 46 49.5817 46 54V64"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M16 34H26C30.4183 34 34 30.4183 34 26V16M16 46H26C30.4183 46 34 49.5817 34 54V64M64 34H54C49.5817 34 46 30.4183 46 26V16M64 46H54C49.5817 46 46 49.5817 46 54V64"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M26 36C31.5228 36 36 31.5228 36 26V16C36 14.8954 35.1046 14 34 14C32.8954 14 32 14.8954 32 16V26C32 29.3137 29.3137 32 26 32H16C14.8954 32 14 32.8954 14 34C14 35.1046 14.8954 36 16 36H26Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M26 44C31.5228 44 36 48.4771 36 54V64C36 65.1046 35.1046 66 34 66C32.8954 66 32 65.1046 32 64V54C32 50.6863 29.3137 48 26 48H16C14.8954 48 14 47.1046 14 46C14 44.8954 14.8954 44 16 44H26Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M44 26C44 31.5228 48.4772 36 54 36H64C65.1046 36 66 35.1046 66 34C66 32.8954 65.1046 32 64 32H54C50.6863 32 48 29.3137 48 26V16C48 14.8954 47.1046 14 46 14C44.8954 14 44 14.8954 44 16V26Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M54 44C48.4772 44 44 48.4771 44 54V64C44 65.1046 44.8954 66 46 66C47.1046 66 48 65.1046 48 64V54C48 50.6863 50.6863 48 54 48H64C65.1046 48 66 47.1046 66 46C66 44.8954 65.1046 44 64 44H54Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-view-collapse', CoreViewCollapse)
export default CoreViewCollapse
