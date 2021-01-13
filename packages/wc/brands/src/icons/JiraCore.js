
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsJiraCore = {
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
        ${variant === "color" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.002 52.1692C44.002 64.7777 54.5222 74.9989 67.4997 74.9989V29.5093L44.002 45.1463V52.1692Z"
            fill="url(#paint0_linearTG-x)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.5 29.5104V8.38866C67.4977 7.13206 66.7811 5.97949 65.6373 5.39277C64.4936 4.80604 63.1098 4.88115 62.0405 5.58799L7.5 41.7633C14.7986 52.1837 29.4082 54.8858 40.1369 47.7996L67.5 29.5104Z"
            fill="#2684FF"
          />
          <defs><linearGradient id="paint0_linearTG-x" x1="48.042" y1="38.6221" x2="67.362" y2="43.3816" gradientUnits="userSpaceOnUse"><stop offset="0.17" stop-color="#0052CC"/><stop offset="1" stop-color="#2684FF"/></linearGradient></defs>
        `}
        ${variant === "solid" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.0021 52.1692C44.0021 64.7777 54.5224 74.9989 67.4998 74.9989V29.5093L44.0021 45.1463V52.1692Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.5 29.5104V8.38866C67.4977 7.13206 66.7811 5.97949 65.6373 5.39277C64.4936 4.80604 63.1098 4.88115 62.0405 5.58799L7.5 41.7633C14.7986 52.1837 29.4082 54.8858 40.1369 47.7996L67.5 29.5104Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.0021 52.1692C44.0021 64.7777 54.5224 74.9989 67.4998 74.9989V29.5093L44.0021 45.1463V52.1692Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.5 29.5104V8.38866C67.4977 7.13206 66.7811 5.97949 65.6373 5.39277C64.4936 4.80604 63.1098 4.88115 62.0405 5.58799L7.5 41.7633C14.7986 52.1837 29.4082 54.8858 40.1369 47.7996L67.5 29.5104Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-jira-core', BrandsJiraCore)
export default BrandsJiraCore
