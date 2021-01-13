
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CorePause = {
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
            d="M36 19.8596C36 17.6505 34.2091 15.8596 32 15.8596H24C21.7909 15.8596 20 17.6505 20 19.8596V60.1403C20 62.3495 21.7909 64.1403 24 64.1403H32C34.2091 64.1403 36 62.3495 36 60.1403L36 19.8596Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M60 19.8596C60 17.6505 58.2091 15.8596 56 15.8596H48C45.7909 15.8596 44 17.6505 44 19.8596L44 60.1403C44 62.3495 45.7909 64.1403 48 64.1403H56C58.2091 64.1403 60 62.3495 60 60.1403V19.8596Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36 24V20C36 17.7909 34.2091 16 32 16L24 16C21.7909 16 20 17.7909 20 20V24L20 56.2807V60.2807C20 62.4898 21.7909 64.2807 24 64.2807H32C34.2091 64.2807 36 62.4898 36 60.2807L36 56.2807L36 24ZM60 24V20C60 17.7909 58.2091 16 56 16L48 16C45.7909 16 44 17.7909 44 20V24L44 56.2807V60.2807C44 62.4898 45.7909 64.2807 48 64.2807H56C58.2091 64.2807 60 62.4898 60 60.2807V56.2807L60 24Z"
            fill="currentColor"
          />
          <path
            d="M36 24L38 24L36 24ZM36 56.2807H38H38H36ZM44 24H46H44ZM44 56.2807L42 56.2807L44 56.2807ZM34 20V24L38 24V20H34ZM24 18H32V14L24 14V18ZM22 24V20H18V24H22ZM22 56.2807L22 24H18L18 56.2807H22ZM22 60.2807V56.2807H18V60.2807H22ZM32 62.2807H24V66.2807H32V62.2807ZM34 56.2807L34 60.2807H38V56.2807H34ZM34 24L34 56.2807H38L38 24L34 24ZM58 20V24H62V20H58ZM48 18L56 18V14L48 14V18ZM46 24V20H42V24H46ZM46 56.2807L46 24H42L42 56.2807L46 56.2807ZM46 60.2807V56.2807L42 56.2807V60.2807L46 60.2807ZM56 62.2807H48V66.2807H56V62.2807ZM58 56.2807V60.2807H62V56.2807H58ZM58 24L58 56.2807H62L62 24H58ZM56 66.2807C59.3137 66.2807 62 63.5944 62 60.2807H58C58 61.3853 57.1046 62.2807 56 62.2807V66.2807ZM48 14C44.6863 14 42 16.6863 42 20H46C46 18.8954 46.8954 18 48 18V14ZM62 20C62 16.6863 59.3137 14 56 14V18C57.1046 18 58 18.8954 58 20H62ZM32 66.2807C35.3137 66.2807 38 63.5944 38 60.2807H34C34 61.3853 33.1046 62.2807 32 62.2807V66.2807ZM42 60.2807C42 63.5944 44.6863 66.2807 48 66.2807V62.2807C46.8954 62.2807 46 61.3853 46 60.2807L42 60.2807ZM24 14C20.6863 14 18 16.6863 18 20H22C22 18.8954 22.8954 18 24 18V14ZM18 60.2807C18 63.5944 20.6863 66.2807 24 66.2807V62.2807C22.8954 62.2807 22 61.3853 22 60.2807H18ZM38 20C38 16.6863 35.3137 14 32 14V18C33.1046 18 34 18.8954 34 20H38Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36 24V20C36 17.7909 34.2091 16 32 16L24 16C21.7909 16 20 17.7909 20 20V24L20 56.2807V60.2807C20 62.4898 21.7909 64.2807 24 64.2807H32C34.2091 64.2807 36 62.4898 36 60.2807L36 56.2807L36 24ZM60 24V20C60 17.7909 58.2091 16 56 16L48 16C45.7909 16 44 17.7909 44 20V24L44 56.2807V60.2807C44 62.4898 45.7909 64.2807 48 64.2807H56C58.2091 64.2807 60 62.4898 60 60.2807V56.2807L60 24Z"
            fill="#F2994A"
          />
          <path
            d="M36 24L38 24L36 24ZM36 56.2807H38H38H36ZM44 24H46H44ZM44 56.2807L42 56.2807L44 56.2807ZM34 20V24L38 24V20H34ZM24 18H32V14L24 14V18ZM22 24V20H18V24H22ZM22 56.2807L22 24H18L18 56.2807H22ZM22 60.2807V56.2807H18V60.2807H22ZM32 62.2807H24V66.2807H32V62.2807ZM34 56.2807L34 60.2807H38V56.2807H34ZM34 24L34 56.2807H38L38 24L34 24ZM58 20V24H62V20H58ZM48 18L56 18V14L48 14V18ZM46 24V20H42V24H46ZM46 56.2807L46 24H42L42 56.2807L46 56.2807ZM46 60.2807V56.2807L42 56.2807V60.2807L46 60.2807ZM56 62.2807H48V66.2807H56V62.2807ZM58 56.2807V60.2807H62V56.2807H58ZM58 24L58 56.2807H62L62 24H58ZM56 66.2807C59.3137 66.2807 62 63.5944 62 60.2807H58C58 61.3853 57.1046 62.2807 56 62.2807V66.2807ZM48 14C44.6863 14 42 16.6863 42 20H46C46 18.8954 46.8954 18 48 18V14ZM62 20C62 16.6863 59.3137 14 56 14V18C57.1046 18 58 18.8954 58 20H62ZM32 66.2807C35.3137 66.2807 38 63.5944 38 60.2807H34C34 61.3853 33.1046 62.2807 32 62.2807V66.2807ZM42 60.2807C42 63.5944 44.6863 66.2807 48 66.2807V62.2807C46.8954 62.2807 46 61.3853 46 60.2807L42 60.2807ZM24 14C20.6863 14 18 16.6863 18 20H22C22 18.8954 22.8954 18 24 18V14ZM18 60.2807C18 63.5944 20.6863 66.2807 24 66.2807V62.2807C22.8954 62.2807 22 61.3853 22 60.2807H18ZM38 20C38 16.6863 35.3137 14 32 14V18C33.1046 18 34 18.8954 34 20H38Z"
            fill="#F2994A"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M36 19.8596C36 17.6505 34.2091 15.8596 32 15.8596H24C21.7909 15.8596 20 17.6505 20 19.8596V60.1403C20 62.3495 21.7909 64.1403 24 64.1403H32C34.2091 64.1403 36 62.3495 36 60.1403L36 19.8596Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M60 19.8596C60 17.6505 58.2091 15.8596 56 15.8596H48C45.7909 15.8596 44 17.6505 44 19.8596L44 60.1403C44 62.3495 45.7909 64.1403 48 64.1403H56C58.2091 64.1403 60 62.3495 60 60.1403V19.8596Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36 19.8596C36 17.6505 34.2091 15.8596 32 15.8596H24C21.7909 15.8596 20 17.6505 20 19.8596V60.1403C20 62.3495 21.7909 64.1403 24 64.1403H32C34.2091 64.1403 36 62.3495 36 60.1403L36 19.8596Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M60 19.8596C60 17.6505 58.2091 15.8596 56 15.8596H48C45.7909 15.8596 44 17.6505 44 19.8596L44 60.1403C44 62.3495 45.7909 64.1403 48 64.1403H56C58.2091 64.1403 60 62.3495 60 60.1403V19.8596Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 20C18 16.6863 20.6863 14 24 14H32C35.3137 14 38 16.6863 38 20L38 60.2807C38 63.5944 35.3137 66.2807 32 66.2807H24C20.6863 66.2807 18 63.5944 18 60.2807V20ZM24 18C22.8954 18 22 18.8954 22 20V60.2807C22 61.3853 22.8954 62.2807 24 62.2807H32C33.1046 62.2807 34 61.3853 34 60.2807L34 20C34 18.8954 33.1046 18 32 18H24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42 20C42 16.6863 44.6863 14 48 14H56C59.3137 14 62 16.6863 62 20V60.2807C62 63.5944 59.3137 66.2807 56 66.2807H48C44.6863 66.2807 42 63.5944 42 60.2807L42 20ZM48 18C46.8954 18 46 18.8954 46 20L46 60.2807C46 61.3853 46.8954 62.2807 48 62.2807H56C57.1046 62.2807 58 61.3853 58 60.2807V20C58 18.8954 57.1046 18 56 18H48Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-pause', CorePause)
export default CorePause
