
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreGridLg = {
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
            d="M40 10V70"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M70 40L10 40"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M10 14C10 11.7909 11.7909 10 14 10H66C68.2091 10 70 11.7909 70 14V66C70 68.2091 68.2091 70 66 70H14C11.7909 70 10 68.2091 10 66V14Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M14 10H33C35.2091 10 37 11.7909 37 14V33C37 35.2091 35.2091 37 33 37H14C11.7909 37 10 35.2091 10 33V14C10 11.7909 11.7909 10 14 10Z"
            fill="currentColor"
          />
          <path
            d="M14 43C11.7909 43 10 44.7909 10 47V66C10 68.2091 11.7909 70 14 70H33C35.2091 70 37 68.2091 37 66V47C37 44.7909 35.2091 43 33 43H14Z"
            fill="currentColor"
          />
          <path
            d="M47 43C44.7909 43 43 44.7909 43 47V66C43 68.2091 44.7909 70 47 70H66C68.2091 70 70 68.2091 70 66V47C70 44.7909 68.2091 43 66 43H47Z"
            fill="currentColor"
          />
          <path
            d="M66 37C68.2091 37 70 35.2091 70 33V14C70 11.7909 68.2091 10 66 10H47C44.7909 10 43 11.7909 43 14V33C43 35.2091 44.7909 37 47 37H66Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M14 10H34C36.2091 10 38 11.7909 38 14V34C38 36.2091 36.2091 38 34 38H14C11.7909 38 10 36.2091 10 34V14C10 11.7909 11.7909 10 14 10Z"
            fill="#2F80ED"
          />
          <path
            d="M14 42C11.7909 42 10 43.7909 10 46V66C10 68.2091 11.7909 70 14 70H34C36.2091 70 38 68.2091 38 66V46C38 43.7909 36.2091 42 34 42H14Z"
            fill="#2F80ED"
          />
          <path
            d="M46 42C43.7909 42 42 43.7909 42 46V66C42 68.2091 43.7909 70 46 70H66C68.2091 70 70 68.2091 70 66V46C70 43.7909 68.2091 42 66 42H46Z"
            fill="#2F80ED"
          />
          <path
            d="M66 38C68.2091 38 70 36.2091 70 34V14C70 11.7909 68.2091 10 66 10H46C43.7909 10 42 11.7909 42 14V34C42 36.2091 43.7909 38 46 38H66Z"
            fill="#2F80ED"
          />
          <path
            d="M14 42C11.7909 42 10 43.7909 10 46V66C10 68.2091 11.7909 70 14 70H34C36.2091 70 38 68.2091 38 66V46C38 43.7909 36.2091 42 34 42H14Z"
            fill="#56CCF2"
          />
          <path
            d="M66 38C68.2091 38 70 36.2091 70 34V14C70 11.7909 68.2091 10 66 10H46C43.7909 10 42 11.7909 42 14V34C42 36.2091 43.7909 38 46 38H66Z"
            fill="#56CCF2"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M10 14C10 11.7909 11.7909 10 14 10H66C68.2091 10 70 11.7909 70 14V66C70 68.2091 68.2091 70 66 70H14C11.7909 70 10 68.2091 10 66V14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 10V70M70 40L10 40M14 70H66C68.2091 70 70 68.2091 70 66V14C70 11.7909 68.2091 10 66 10H14C11.7909 10 10 11.7909 10 14V66C10 68.2091 11.7909 70 14 70Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 14C8 10.6863 10.6863 8 14 8H66C69.3137 8 72 10.6863 72 14V66C72 69.3137 69.3137 72 66 72H14C10.6863 72 8 69.3137 8 66V14ZM12 42V66C12 67.1046 12.8954 68 14 68H38V42H12ZM38 38H12V14C12 12.8954 12.8954 12 14 12H38V38ZM42 42V68H66C67.1046 68 68 67.1046 68 66V42H42ZM68 38H42V12H66C67.1046 12 68 12.8954 68 14V38Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-grid-lg', CoreGridLg)
export default CoreGridLg
