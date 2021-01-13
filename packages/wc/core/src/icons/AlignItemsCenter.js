
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreAlignItemsCenter = {
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
            d="M26 49.7507C26 47.5415 27.7909 45.7507 30 45.7507H50C52.2091 45.7507 54 47.5415 54 49.7507V55.7507C54 57.9598 52.2091 59.7507 50 59.7507H30C27.7909 59.7507 26 57.9598 26 55.7507V49.7507Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M21.334 23.0827C21.334 20.8736 23.1248 19.0827 25.334 19.0827H54.6673C56.8765 19.0827 58.6673 20.8736 58.6673 23.0827V29.0827C58.6673 31.2918 56.8765 33.0827 54.6673 33.0827H25.334C23.1248 33.0827 21.334 31.2918 21.334 29.0827V23.0827Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 67.4166V59.7493M40 45.7493V33.0833M40 19.0833V11.4166"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M37 67.4167C37 69.0735 38.3431 70.4167 40 70.4167C41.6569 70.4167 43 69.0735 43 67.4167H37ZM43 59.7494C43 58.0925 41.6569 56.7494 40 56.7494C38.3431 56.7494 37 58.0925 37 59.7494H43ZM37 45.7494C37 47.4062 38.3431 48.7494 40 48.7494C41.6569 48.7494 43 47.4062 43 45.7494H37ZM43 33.0834C43 31.4265 41.6569 30.0834 40 30.0834C38.3431 30.0834 37 31.4265 37 33.0834H43ZM37 19.0834C37 20.7402 38.3431 22.0834 40 22.0834C41.6569 22.0834 43 20.7402 43 19.0834H37ZM43 11.4167C43 9.75984 41.6569 8.41669 40 8.41669C38.3431 8.41669 37 9.75984 37 11.4167L43 11.4167ZM43 67.4167L43 59.7494H37V67.4167H43ZM43 45.7494L43 33.0834H37L37 45.7494H43ZM43 19.0834V11.4167L37 11.4167V19.0834H43Z"
            fill="currentColor"
          />
          <path
            d="M21.334 23.0827C21.334 20.8736 23.1248 19.0827 25.334 19.0827L54.6673 19.0827C56.8765 19.0827 58.6673 20.8736 58.6673 23.0827V29.0827C58.6673 31.2918 56.8765 33.0827 54.6673 33.0827L25.334 33.0827C23.1248 33.0827 21.334 31.2918 21.334 29.0827V23.0827Z"
            fill="currentColor"
          />
          <path
            d="M26 49.7507C26 47.5415 27.7909 45.7507 30 45.7507L50 45.7507C52.2091 45.7507 54 47.5415 54 49.7507V55.7507C54 57.9598 52.2091 59.7507 50 59.7507H30C27.7909 59.7507 26 57.9598 26 55.7507V49.7507Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M38 67.4167C38 68.5213 38.8954 69.4167 40 69.4167C41.1046 69.4167 42 68.5213 42 67.4167H38ZM42 59.7494C42 58.6448 41.1046 57.7494 40 57.7494C38.8954 57.7494 38 58.6448 38 59.7494H42ZM38 45.7494C38 46.8539 38.8954 47.7494 40 47.7494C41.1046 47.7494 42 46.8539 42 45.7494H38ZM42 33.0834C42 31.9788 41.1046 31.0834 40 31.0834C38.8954 31.0834 38 31.9788 38 33.0834H42ZM38 19.0834C38 20.1879 38.8954 21.0834 40 21.0834C41.1046 21.0834 42 20.1879 42 19.0834H38ZM42 11.4167C42 10.3121 41.1046 9.41669 40 9.41669C38.8954 9.41669 38 10.3121 38 11.4167H42ZM42 67.4167L42 59.7494H38L38 67.4167H42ZM42 45.7494L42 33.0834H38L38 45.7494H42ZM42 19.0834V11.4167H38V19.0834H42Z"
            fill="#F2C94C"
          />
          <path
            d="M21.334 23.0827C21.334 20.8736 23.1248 19.0827 25.334 19.0827L54.6673 19.0827C56.8765 19.0827 58.6673 20.8736 58.6673 23.0827V29.0827C58.6673 31.2918 56.8765 33.0827 54.6673 33.0827L25.334 33.0827C23.1248 33.0827 21.334 31.2918 21.334 29.0827V23.0827Z"
            fill="#219653"
          />
          <path
            d="M26 49.7507C26 47.5415 27.7909 45.7507 30 45.7507L50 45.7507C52.2091 45.7507 54 47.5415 54 49.7507V55.7507C54 57.9598 52.2091 59.7507 50 59.7507H30C27.7909 59.7507 26 57.9598 26 55.7507V49.7507Z"
            fill="#6FCF97"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M21.334 23.0827C21.334 20.8736 23.1248 19.0827 25.334 19.0827H54.6673C56.8765 19.0827 58.6673 20.8736 58.6673 23.0827V29.0827C58.6673 31.2918 56.8764 33.0827 54.6673 33.0827H25.334C23.1248 33.0827 21.334 31.2918 21.334 29.0827V23.0827Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M26 49.7507C26 47.5415 27.7909 45.7507 30 45.7507H50C52.2091 45.7507 54 47.5415 54 49.7507V55.7507C54 57.9598 52.2091 59.7507 50 59.7507H30C27.7909 59.7507 26 57.9598 26 55.7507V49.7507Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 67.4167V59.7494M40 45.7494V33.0834M40 19.0834V11.4167M25.334 33.0827H54.6673C56.8765 33.0827 58.6673 31.2918 58.6673 29.0827V23.0827C58.6673 20.8736 56.8765 19.0827 54.6673 19.0827H25.334C23.1248 19.0827 21.334 20.8736 21.334 23.0827V29.0827C21.334 31.2918 23.1248 33.0827 25.334 33.0827ZM30 59.7507H50C52.2091 59.7507 54 57.9598 54 55.7507V49.7507C54 47.5415 52.2091 45.7507 50 45.7507H30C27.7909 45.7507 26 47.5415 26 49.7507V55.7507C26 57.9598 27.7909 59.7507 30 59.7507Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 9.41663C41.1046 9.41663 42 10.3121 42 11.4166V17.0826H54.6673C57.981 17.0826 60.6673 19.7689 60.6673 23.0826V29.0826C60.6673 32.3963 57.981 35.0826 54.6673 35.0826H42V43.7506H50C53.3137 43.7506 56 46.4369 56 49.7506V55.7506C56 59.0643 53.3137 61.7506 50 61.7506H42V67.4166C42 68.5212 41.1046 69.4166 40 69.4166C38.8954 69.4166 38 68.5212 38 67.4166V61.7506H30C26.6863 61.7506 24 59.0643 24 55.7506V49.7506C24 46.4369 26.6863 43.7506 30 43.7506H38V35.0826H25.334C22.0203 35.0826 19.334 32.3963 19.334 29.0826V23.0826C19.334 19.7689 22.0203 17.0826 25.334 17.0826H38V11.4166C38 10.3121 38.8954 9.41663 40 9.41663ZM40.0727 57.7506C40.0486 57.7497 40.0243 57.7493 40 57.7493C39.9757 57.7493 39.9514 57.7497 39.9273 57.7506H30C28.8954 57.7506 28 56.8552 28 55.7506V49.7506C28 48.646 28.8954 47.7506 30 47.7506H50C51.1046 47.7506 52 48.646 52 49.7506V55.7506C52 56.8552 51.1046 57.7506 50 57.7506H40.0727ZM40 21.0833C39.9827 21.0833 39.9655 21.0831 39.9483 21.0826H25.334C24.2294 21.0826 23.334 21.9781 23.334 23.0826V29.0826C23.334 30.1872 24.2294 31.0826 25.334 31.0826H54.6673C55.7719 31.0826 56.6673 30.1872 56.6673 29.0826V23.0826C56.6673 21.9781 55.7719 21.0826 54.6673 21.0826H40.0517C40.0345 21.0831 40.0173 21.0833 40 21.0833Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-align-items-center', CoreAlignItemsCenter)
export default CoreAlignItemsCenter
