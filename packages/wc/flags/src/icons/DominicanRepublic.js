
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsDominicanRepublic = {
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
        ${variant === "rectangle" && svg`
          <g clip-path="url(#clip0LwRe)"><rect width="51" height="31" fill="#2F80ED"/><rect width="51" height="31" transform="matrix(-1 0 0 1 120 49)" fill="#2F80ED"/><rect x="69" width="51" height="31" fill="#EB5757"/><rect width="51" height="31" transform="matrix(-1 0 0 1 51 49)" fill="#EB5757"/><rect y="31" width="120" height="18" fill="#F2F2F2"/><rect x="69" width="80" height="18" transform="rotate(90 69 0)" fill="#F2F2F2"/><path d="M54 34.0006C55.8242 32.9659 57.8936 32.4211 60 32.4211C62.1064 32.4211 64.1758 32.9659 66 34.0006" stroke="#2F80ED" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M56.5716 46.6763C55.2644 45.9348 54.2427 44.7903 53.665 43.4201C53.0874 42.05 52.986 40.5309 53.3767 39.0984" stroke="#219653" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M66.6237 39.0984C67.0144 40.5309 66.913 42.05 66.3354 43.4201C65.7577 44.7903 64.736 45.9348 63.4288 46.6763" stroke="#219653" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M66 45.9995C64.1758 47.0342 62.1064 47.5789 60 47.5789C57.8936 47.5789 55.8242 47.0342 54 45.9995" stroke="#EB5757" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.7144 35.7896H64.2858V40.767C64.2858 43.1339 62.367 45.0527 60.0001 45.0527C57.6331 45.0527 55.7144 43.1339 55.7144 40.767V35.7896Z" fill="#2F80ED"/><path d="M64.2858 40.4211V35.7896H60.0001V40.4211H64.2858Z" fill="#EB5757"/><path d="M55.7144 40.4211V40.767C55.7144 43.1339 57.6331 45.0527 60.0001 45.0527V40.4211H55.7144Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0LwRe"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0LSoq)"><rect width="34" height="31" fill="#2F80ED"/><rect width="34" height="31" transform="matrix(-1 0 0 1 80 49)" fill="#2F80ED"/><rect x="46" width="34" height="31" fill="#EB5757"/><rect width="34" height="31" transform="matrix(-1 0 0 1 34 49)" fill="#EB5757"/><rect x="-20" y="31" width="120" height="18" fill="#F2F2F2"/><rect x="49" width="80" height="18" transform="rotate(90 49 0)" fill="#F2F2F2"/><path d="M34 34.0005C35.8242 32.9658 37.8936 32.421 40 32.421C42.1064 32.421 44.1758 32.9658 46 34.0005" stroke="#2F80ED" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M36.5716 46.6763C35.2644 45.9348 34.2427 44.7903 33.665 43.4201C33.0874 42.05 32.986 40.5309 33.3767 39.0984" stroke="#219653" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M46.6237 39.0984C47.0144 40.5309 46.913 42.05 46.3354 43.4201C45.7577 44.7903 44.736 45.9348 43.4288 46.6763" stroke="#219653" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M46 45.9995C44.1758 47.0342 42.1064 47.5789 40 47.5789C37.8936 47.5789 35.8242 47.0342 34 45.9995" stroke="#EB5757" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M35.7144 35.7894H44.2858V40.7669C44.2858 43.1338 42.367 45.0526 40.0001 45.0526C37.6331 45.0526 35.7144 43.1338 35.7144 40.7669V35.7894Z" fill="#2F80ED"/><path d="M44.2858 40.421V35.7894H40.0001V40.421H44.2858Z" fill="#EB5757"/><path d="M35.7144 40.421V40.7669C35.7144 43.1338 37.6331 45.0526 40.0001 45.0526V40.421H35.7144Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0LSoq"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0GHq2" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0GHq2)"><g clip-path="url(#clip0GHq2)"><rect width="34" height="31" fill="#2F80ED"/><rect width="34" height="31" transform="matrix(-1 0 0 1 80 49)" fill="#2F80ED"/><rect x="46" width="34" height="31" fill="#EB5757"/><rect width="34" height="31" transform="matrix(-1 0 0 1 34 49)" fill="#EB5757"/><rect x="-20" y="31" width="120" height="18" fill="#F2F2F2"/><rect x="49" width="80" height="18" transform="rotate(90 49 0)" fill="#F2F2F2"/><path d="M34 34.0005C35.8242 32.9658 37.8936 32.421 40 32.421C42.1064 32.421 44.1758 32.9658 46 34.0005" stroke="#2F80ED" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M36.5716 46.6763C35.2644 45.9348 34.2427 44.7903 33.665 43.4201C33.0874 42.05 32.986 40.5309 33.3767 39.0984" stroke="#219653" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M46.6237 39.0984C47.0144 40.5309 46.913 42.05 46.3354 43.4201C45.7577 44.7903 44.736 45.9348 43.4288 46.6763" stroke="#219653" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M46 45.9995C44.1758 47.0342 42.1064 47.5789 40 47.5789C37.8936 47.5789 35.8242 47.0342 34 45.9995" stroke="#EB5757" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M35.7144 35.7894H44.2858V40.7669C44.2858 43.1338 42.367 45.0526 40.0001 45.0526C37.6331 45.0526 35.7144 43.1338 35.7144 40.7669V35.7894Z" fill="#2F80ED"/><path d="M44.2858 40.421V35.7894H40.0001V40.421H44.2858Z" fill="#EB5757"/><path d="M35.7144 40.421V40.7669C35.7144 43.1338 37.6331 45.0526 40.0001 45.0526V40.421H35.7144Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0GHq2"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-dominican-republic', FlagsDominicanRepublic)
export default FlagsDominicanRepublic
