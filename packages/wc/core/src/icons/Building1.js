
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBuilding1 = {
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
            d="M18 67H62"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M20 23H60V67H20V23Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M20 23H18"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M60 23L62 23"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M43 53H37C35.8954 53 35 53.8954 35 55V67H45V55C45 53.8954 44.1046 53 43 53Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M56 23V17H24V23"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 17L40 13"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 29V35"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M36 29V35"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M44 29V35"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M52 29V35"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 41V47"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M36 41V47"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M44 41V47"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M52 41V47"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 53V59"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M52 53V59"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 11.5C40.8284 11.5 41.5 12.1716 41.5 13V15.5H56C56.8284 15.5 57.5 16.1716 57.5 17V21.5H62C62.8284 21.5 63.5 22.1716 63.5 23C63.5 23.8284 62.8284 24.5 62 24.5H18C17.1716 24.5 16.5 23.8284 16.5 23C16.5 22.1716 17.1716 21.5 18 21.5H22.5V17C22.5 16.1716 23.1716 15.5 24 15.5H38.5V13C38.5 12.1716 39.1716 11.5 40 11.5ZM16.5 67C16.5 66.1716 17.1716 65.5 18 65.5H62C62.8284 65.5 63.5 66.1716 63.5 67C63.5 67.8284 62.8284 68.5 62 68.5H18C17.1716 68.5 16.5 67.8284 16.5 67Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60 23H20V67H35V55C35 53.8954 35.8954 53 37 53H43C44.1046 53 45 53.8954 45 55V67H60V23ZM28 27.5C28.8284 27.5 29.5 28.1716 29.5 29V35C29.5 35.8284 28.8284 36.5 28 36.5C27.1716 36.5 26.5 35.8284 26.5 35V29C26.5 28.1716 27.1716 27.5 28 27.5ZM29.5 41C29.5 40.1716 28.8284 39.5 28 39.5C27.1716 39.5 26.5 40.1716 26.5 41V47C26.5 47.8284 27.1716 48.5 28 48.5C28.8284 48.5 29.5 47.8284 29.5 47V41ZM28 51.5C28.8284 51.5 29.5 52.1716 29.5 53V59C29.5 59.8284 28.8284 60.5 28 60.5C27.1716 60.5 26.5 59.8284 26.5 59V53C26.5 52.1716 27.1716 51.5 28 51.5ZM37.5 29C37.5 28.1716 36.8284 27.5 36 27.5C35.1716 27.5 34.5 28.1716 34.5 29V35C34.5 35.8284 35.1716 36.5 36 36.5C36.8284 36.5 37.5 35.8284 37.5 35V29ZM36 39.5C36.8284 39.5 37.5 40.1716 37.5 41V47C37.5 47.8284 36.8284 48.5 36 48.5C35.1716 48.5 34.5 47.8284 34.5 47V41C34.5 40.1716 35.1716 39.5 36 39.5ZM45.5 29C45.5 28.1716 44.8284 27.5 44 27.5C43.1716 27.5 42.5 28.1716 42.5 29V35C42.5 35.8284 43.1716 36.5 44 36.5C44.8284 36.5 45.5 35.8284 45.5 35V29ZM44 39.5C44.8284 39.5 45.5 40.1716 45.5 41V47C45.5 47.8284 44.8284 48.5 44 48.5C43.1716 48.5 42.5 47.8284 42.5 47V41C42.5 40.1716 43.1716 39.5 44 39.5ZM53.5 29C53.5 28.1716 52.8284 27.5 52 27.5C51.1716 27.5 50.5 28.1716 50.5 29V35C50.5 35.8284 51.1716 36.5 52 36.5C52.8284 36.5 53.5 35.8284 53.5 35V29ZM52 39.5C52.8284 39.5 53.5 40.1716 53.5 41V47C53.5 47.8284 52.8284 48.5 52 48.5C51.1716 48.5 50.5 47.8284 50.5 47V41C50.5 40.1716 51.1716 39.5 52 39.5ZM53.5 53C53.5 52.1716 52.8284 51.5 52 51.5C51.1716 51.5 50.5 52.1716 50.5 53V59C50.5 59.8284 51.1716 60.5 52 60.5C52.8284 60.5 53.5 59.8284 53.5 59V53Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M24 17L56 17V23L24 23V17Z"
            fill="#F2994A"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 17L40 13"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 23L60 23L60 67H20L20 23Z"
            fill="#4F4F4F"
          />
          <path
            d="M60 23H62C62 21.8954 61.1046 21 60 21V23ZM20 23V21C18.8954 21 18 21.8954 18 23H20ZM60 67V69C61.1046 69 62 68.1046 62 67H60ZM20 67H18C18 68.1046 18.8954 69 20 69V67ZM18 21C16.8954 21 16 21.8954 16 23C16 24.1046 16.8954 25 18 25V21ZM62 25C63.1046 25 64 24.1046 64 23C64 21.8954 63.1046 21 62 21V25ZM18 65C16.8954 65 16 65.8954 16 67C16 68.1046 16.8954 69 18 69V65ZM20 69C21.1046 69 22 68.1046 22 67C22 65.8954 21.1046 65 20 65V69ZM60 65C58.8954 65 58 65.8954 58 67C58 68.1046 58.8954 69 60 69V65ZM62 69C63.1046 69 64 68.1046 64 67C64 65.8954 63.1046 65 62 65V69ZM60 21L20 21V25L60 25V21ZM62 67L62 23H58L58 67H62ZM20 69H60V65H20V69ZM18 23L18 67H22L22 23H18ZM18 25L62 25V21L18 21V25ZM18 69H20V65H18V69ZM60 69H62V65H60V69Z"
            fill="#4F4F4F"
          />
          <path
            d="M43 53H37C35.8954 53 35 53.8954 35 55V67H45V55C45 53.8954 44.1046 53 43 53Z"
            fill="#F2C94C"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
          />
          <path
            d="M28 29V35"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 41V47"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 53V59"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M36 29V35"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M36 41V47"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M44 29V35"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M44 41V47"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M52 29V35"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M52 41V47"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M52 53V59"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M24 17H56V23H24V17Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M20 23H60V67H20V23Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M43 53H37C35.8954 53 35 53.8954 35 55V67H45V55C45 53.8954 44.1046 53 43 53Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 17V13M60 67V23H20V67M60 67H20M60 67H62M20 67H18M18 23H62M28 35V29M28 47V41M28 59V53M36 35V29M36 47V41M44 35V29M44 47V41M52 35V29M52 47V41M52 59V53M24 17H56V23H24V17ZM37 53H43C44.1046 53 45 53.8954 45 55V67H35V55C35 53.8954 35.8954 53 37 53Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M28 27C29.1046 27 30 27.8954 30 29V35C30 36.1046 29.1046 37 28 37C26.8954 37 26 36.1046 26 35V29C26 27.8954 26.8954 27 28 27Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M30 41C30 39.8954 29.1046 39 28 39C26.8954 39 26 39.8954 26 41V47C26 48.1046 26.8954 49 28 49C29.1046 49 30 48.1046 30 47V41Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28 51C29.1046 51 30 51.8954 30 53V59C30 60.1046 29.1046 61 28 61C26.8954 61 26 60.1046 26 59V53C26 51.8954 26.8954 51 28 51Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M38 29C38 27.8954 37.1046 27 36 27C34.8954 27 34 27.8954 34 29V35C34 36.1046 34.8954 37 36 37C37.1046 37 38 36.1046 38 35V29Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M36 39C37.1046 39 38 39.8954 38 41V47C38 48.1046 37.1046 49 36 49C34.8954 49 34 48.1046 34 47V41C34 39.8954 34.8954 39 36 39Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46 29C46 27.8954 45.1046 27 44 27C42.8954 27 42 27.8954 42 29V35C42 36.1046 42.8954 37 44 37C45.1046 37 46 36.1046 46 35V29Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M44 39C45.1046 39 46 39.8954 46 41V47C46 48.1046 45.1046 49 44 49C42.8954 49 42 48.1046 42 47V41C42 39.8954 42.8954 39 44 39Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M54 29C54 27.8954 53.1046 27 52 27C50.8954 27 50 27.8954 50 29V35C50 36.1046 50.8954 37 52 37C53.1046 37 54 36.1046 54 35V29Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M52 39C53.1046 39 54 39.8954 54 41V47C54 48.1046 53.1046 49 52 49C50.8954 49 50 48.1046 50 47V41C50 39.8954 50.8954 39 52 39Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M54 53C54 51.8954 53.1046 51 52 51C50.8954 51 50 51.8954 50 53V59C50 60.1046 50.8954 61 52 61C53.1046 61 54 60.1046 54 59V53Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42 13C42 11.8954 41.1046 11 40 11C38.8954 11 38 11.8954 38 13V15H24C22.8954 15 22 15.8954 22 17V21H18C16.8954 21 16 21.8954 16 23C16 24.1046 16.8954 25 18 25V65C16.8954 65 16 65.8954 16 67C16 68.1046 16.8954 69 18 69H62C63.1046 69 64 68.1046 64 67C64 65.8954 63.1046 65 62 65V25C63.1046 25 64 24.1046 64 23C64 21.8954 63.1046 21 62 21H58V17C58 15.8954 57.1046 15 56 15H42V13ZM47 65H58V25H22V65H33V55C33 52.7909 34.7909 51 37 51H43C45.2091 51 47 52.7909 47 55V65ZM43 65V55H37V65H43ZM54 19V21H26V19H54Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-building-1', CoreBuilding1)
export default CoreBuilding1
