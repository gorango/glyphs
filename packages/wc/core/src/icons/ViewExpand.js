
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreViewExpand = {
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
            d="M34 64H24C19.5817 64 16 60.4183 16 56V46"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46 64H56C60.4183 64 64 60.4183 64 56V46"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46 16H56C60.4183 16 64 19.5817 64 24V34"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M34 16H24C19.5817 16 16 19.5817 16 24V34"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M34 16L24 16C19.5817 16 16 19.5817 16 24L16 34"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M34 64H24C19.5817 64 16 60.4183 16 56L16 46"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46 16L56 16C60.4183 16 64 19.5817 64 24V34"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46 64H56C60.4183 64 64 60.4183 64 56V46"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M34 16L24 16C19.5817 16 16 19.5817 16 24L16 34"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M34 64H24C19.5817 64 16 60.4183 16 56L16 46"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46 16L56 16C60.4183 16 64 19.5817 64 24V34"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46 64H56C60.4183 64 64 60.4183 64 56V46"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M34 16H24C19.5817 16 16 19.5817 16 24V34M34 64H24C19.5817 64 16 60.4183 16 56V46M46 16H56C60.4183 16 64 19.5817 64 24V34M46 64H56C60.4183 64 64 60.4183 64 56V46"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M24 14C18.4772 14 14 18.4772 14 24V34C14 35.1046 14.8954 36 16 36C17.1046 36 18 35.1046 18 34V24C18 20.6863 20.6863 18 24 18H34C35.1046 18 36 17.1046 36 16C36 14.8954 35.1046 14 34 14H24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 66C18.4772 66 14 61.5229 14 56V46C14 44.8954 14.8954 44 16 44C17.1046 44 18 44.8954 18 46V56C18 59.3137 20.6863 62 24 62H34C35.1046 62 36 62.8954 36 64C36 65.1046 35.1046 66 34 66H24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M66 24C66 18.4772 61.5228 14 56 14H46C44.8954 14 44 14.8954 44 16C44 17.1046 44.8954 18 46 18H56C59.3137 18 62 20.6863 62 24V34C62 35.1046 62.8954 36 64 36C65.1046 36 66 35.1046 66 34V24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M56 66C61.5228 66 66 61.5229 66 56V46C66 44.8954 65.1046 44 64 44C62.8954 44 62 44.8954 62 46V56C62 59.3137 59.3137 62 56 62H46C44.8954 62 44 62.8954 44 64C44 65.1046 44.8954 66 46 66H56Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-view-expand', CoreViewExpand)
export default CoreViewExpand
