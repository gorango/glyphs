
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreQuoteSingle = {
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
            d="M34 36.4141V34C34 28.4772 38.4772 24 44 24C46.2091 24 48 22.2091 48 20C48 17.7909 46.2091 16 44 16C34.0589 16 26 24.0589 26 34V53C26 58.0351 29.383 62.2801 34 63.5859"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M34 36.4141C34.9537 36.1443 35.96 36 37 36H43C49.0751 36 54 40.9249 54 47V53C54 59.0751 49.0751 64 43 64H37C35.96 64 34.9537 63.8557 34 63.5859"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34 34C34 28.4772 38.4772 24 44 24C46.2091 24 48 22.2091 48 20C48 17.7909 46.2091 16 44 16C34.0589 16 26 24.0589 26 34V47V50V53C26 59.0751 30.9249 64 37 64H43C49.0751 64 54 59.0751 54 53V47C54 40.9249 49.0751 36 43 36H37C35.96 36 34.9537 36.1443 34 36.4141V34Z"
            fill="currentColor"
          />
          <path
            d="M34 36.4141H32C32 37.0407 32.2937 37.6311 32.7935 38.0092C33.2933 38.3872 33.9413 38.5091 34.5443 38.3386L34 36.4141ZM44 22C37.3726 22 32 27.3726 32 34H36C36 29.5817 39.5817 26 44 26V22ZM46 20C46 21.1046 45.1046 22 44 22V26C47.3137 26 50 23.3137 50 20H46ZM44 18C45.1046 18 46 18.8954 46 20H50C50 16.6863 47.3137 14 44 14V18ZM28 34C28 25.1634 35.1634 18 44 18V14C32.9543 14 24 22.9543 24 34H28ZM28 47V34H24V47H28ZM24 47V50H28V47H24ZM24 50V53H28V50H24ZM24 53C24 60.1797 29.8203 66 37 66V62C32.0294 62 28 57.9706 28 53H24ZM37 66H43V62H37V66ZM43 66C50.1797 66 56 60.1797 56 53H52C52 57.9706 47.9706 62 43 62V66ZM56 53V47H52V53H56ZM56 47C56 39.8203 50.1797 34 43 34V38C47.9706 38 52 42.0294 52 47H56ZM43 34H37V38H43V34ZM37 34C35.7741 34 34.5847 34.1702 33.4557 34.4896L34.5443 38.3386C35.3226 38.1184 36.1458 38 37 38V34ZM32 34V36.4141H36V34H32Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34 34C34 28.4772 38.4772 24 44 24C46.2091 24 48 22.2091 48 20C48 17.7909 46.2091 16 44 16C34.0589 16 26 24.0589 26 34V47V50V53C26 59.0751 30.9249 64 37 64H43C49.0751 64 54 59.0751 54 53V47C54 40.9249 49.0751 36 43 36H37C35.96 36 34.9537 36.1443 34 36.4141V34Z"
            fill="#56CCF2"
          />
          <path
            d="M34 36.4141H32C32 37.0407 32.2937 37.6311 32.7935 38.0092C33.2933 38.3872 33.9413 38.5091 34.5443 38.3386L34 36.4141ZM44 22C37.3726 22 32 27.3726 32 34H36C36 29.5817 39.5817 26 44 26V22ZM46 20C46 21.1046 45.1046 22 44 22V26C47.3137 26 50 23.3137 50 20H46ZM44 18C45.1046 18 46 18.8954 46 20H50C50 16.6863 47.3137 14 44 14V18ZM28 34C28 25.1634 35.1634 18 44 18V14C32.9543 14 24 22.9543 24 34H28ZM28 47V34H24V47H28ZM24 47V50H28V47H24ZM24 50V53H28V50H24ZM24 53C24 60.1797 29.8203 66 37 66V62C32.0294 62 28 57.9706 28 53H24ZM37 66H43V62H37V66ZM43 66C50.1797 66 56 60.1797 56 53H52C52 57.9706 47.9706 62 43 62V66ZM56 53V47H52V53H56ZM56 47C56 39.8203 50.1797 34 43 34V38C47.9706 38 52 42.0294 52 47H56ZM43 34H37V38H43V34ZM37 34C35.7741 34 34.5847 34.1702 33.4557 34.4896L34.5443 38.3386C35.3226 38.1184 36.1458 38 37 38V34ZM32 34V36.4141H36V34H32Z"
            fill="#9B51E0"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M34 34C34 28.4772 38.4772 24 44 24C46.2091 24 48 22.2091 48 20C48 17.7909 46.2091 16 44 16C34.0589 16 26 24.0589 26 34V53C26 59.0751 30.9249 64 37 64H43C49.0751 64 54 59.0751 54 53V47C54 40.9249 49.0751 36 43 36H37C35.96 36 34.9537 36.1443 34 36.4141V34Z"
            fill="currentColor"
            fill-opacity="0.25"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 34C24 22.9543 32.9543 14 44 14C47.3137 14 50 16.6863 50 20C50 23.3137 47.3137 26 44 26C39.5817 26 36 29.5817 36 34V34.038C36.3303 34.0128 36.6638 34 37 34H43C50.1797 34 56 39.8203 56 47V53C56 60.1797 50.1797 66 43 66H37C29.8203 66 24 60.1797 24 53V34ZM44 18C35.1634 18 28 25.1634 28 34V53C28 57.9706 32.0294 62 37 62H43C47.9706 62 52 57.9706 52 53V47C52 42.0294 47.9706 38 43 38H37C36.1458 38 35.3226 38.1184 34.5443 38.3386C33.9413 38.5091 33.2933 38.3872 32.7935 38.0092C32.2937 37.6311 32 37.0407 32 36.4141V34C32 27.3726 37.3726 22 44 22C45.1046 22 46 21.1046 46 20C46 18.8954 45.1046 18 44 18Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-quote-single', CoreQuoteSingle)
export default CoreQuoteSingle
