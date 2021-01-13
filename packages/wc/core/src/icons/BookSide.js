
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBookSide = {
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
            d="M33 68V12"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M47 12V68"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M47 66.3976C44.8845 65.2226 42.4804 64.584 40 64.584C37.5196 64.584 35.1155 65.2226 33 66.3976"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M33 13.6013C35.1155 14.7763 37.5196 15.415 40 15.415C42.4804 15.415 44.8845 14.7763 47 13.6013"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M33 13.6013L34.2139 11.4158C33.4396 10.9857 32.4955 10.9975 31.7321 11.4467C30.9687 11.8959 30.5 12.7156 30.5 13.6013L33 13.6013ZM47 13.6013H49.5C49.5 12.7156 49.0313 11.8959 48.2679 11.4467C47.5045 10.9975 46.5604 10.9857 45.7861 11.4158L47 13.6013ZM47 66.3976L45.7861 68.5831C46.5604 69.0132 47.5045 69.0014 48.2679 68.5522C49.0313 68.103 49.5 67.2833 49.5 66.3976H47ZM33 66.3976H30.5C30.5 67.2833 30.9687 68.103 31.7321 68.5522C32.4955 69.0014 33.4396 69.0132 34.2139 68.5831L33 66.3976ZM31.7861 15.7868C34.2682 17.1654 37.0894 17.9149 40 17.9149V12.9149C37.9498 12.9149 35.9629 12.3872 34.2139 11.4158L31.7861 15.7868ZM40 17.9149C42.9106 17.9149 45.7318 17.1654 48.2139 15.7868L45.7861 11.4158C44.0371 12.3872 42.0502 12.9149 40 12.9149V17.9149ZM49.5 66.3976L49.5 13.6013H44.5L44.5 66.3976H49.5ZM40 67.084C42.0502 67.084 44.0372 67.6117 45.7861 68.5831L48.2139 64.2121C45.7318 62.8334 42.9106 62.084 40 62.084V67.084ZM34.2139 68.5831C35.9628 67.6117 37.9498 67.084 40 67.084V62.084C37.0894 62.084 34.2682 62.8334 31.7861 64.2121L34.2139 68.5831ZM30.5 13.6013L30.5 66.3976H35.5L35.5 13.6013H30.5Z"
            fill="currentColor"
          />
          <path
            d="M33 12L33 68M47 12L47 68"
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
            d="M33 13.6013C35.1155 14.7763 37.5196 15.415 40 15.415C42.4804 15.415 44.8845 14.7763 47 13.6013L47 66.3976C44.8845 65.2226 42.4804 64.584 40 64.584C37.5196 64.584 35.1155 65.2226 33 66.3976L33 13.6013Z"
            fill="#F2F2F2"
          />
          <path
            d="M33 12L33 68M47 12L47 68"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M33 13.6013C35.1155 14.7763 37.5196 15.415 40 15.415C42.4804 15.415 44.8845 14.7763 47 13.6013V66.3976C44.8845 65.2226 42.4804 64.584 40 64.584C37.5196 64.584 35.1155 65.2226 33 66.3976V13.6013Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47 12V68M33 68V12M33 13.6013C35.1155 14.7763 37.5196 15.415 40 15.415C42.4804 15.415 44.8845 14.7763 47 13.6013V66.3976C44.8845 65.2226 42.4804 64.584 40 64.584C37.5196 64.584 35.1155 65.2226 33 66.3976V13.6013Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35 12C35 10.8954 34.1046 10 33 10C31.8954 10 31 10.8954 31 12V68C31 69.1046 31.8954 70 33 70C34.1046 70 35 69.1046 35 68V67.6353C36.5567 66.9503 38.2564 66.584 40 66.584C41.7436 66.584 43.4433 66.9503 45 67.6353V68C45 69.1046 45.8954 70 47 70C48.1046 70 49 69.1046 49 68V12C49 10.8954 48.1046 10 47 10C45.8954 10 45 10.8954 45 12V12.3636C43.4433 13.0486 41.7436 13.415 40 13.415C38.2564 13.415 36.5567 13.0486 35 12.3636V12ZM35 16.635V63.3639C36.5983 62.8527 38.2831 62.584 40 62.584C41.7169 62.584 43.4017 62.8527 45 63.3639V16.635C43.4017 17.1462 41.7169 17.415 40 17.415C38.2831 17.415 36.5983 17.1462 35 16.635Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-book-side', CoreBookSide)
export default CoreBookSide
