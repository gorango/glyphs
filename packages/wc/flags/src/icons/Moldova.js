
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsMoldova = {
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
          <g clip-path="url(#clip073XA)"><path d="M120 0H0V80H120V0Z" fill="#F2C94C"/><path d="M120 0H80V80H120V0Z" fill="#EB5757"/><path d="M40 0H0V80H40V0Z" fill="#2F80ED"/><path d="M74.4889 29.6324C75.0844 30.5584 75.1606 31.5291 74.7118 32.4693C74.2629 33.4096 73.3009 34.2942 71.9003 35.0548C70.4996 35.8153 68.6979 36.4314 66.6343 36.8555C64.5708 37.2795 62.3008 37.5 60 37.5C57.6992 37.5 55.4292 37.2795 53.3657 36.8555C51.3021 36.4314 49.5003 35.8153 48.0997 35.0548C46.699 34.2942 45.7371 33.4096 45.2882 32.4693C44.8394 31.5291 44.9156 30.5584 45.5111 29.6324L60 31.25L74.4889 29.6324Z" fill="#F2994A"/><path d="M63.75 49.6911L60 55L56.25 49.6911L60 37.5L63.75 49.6911Z" fill="#F2994A"/><circle cx="53.75" cy="36.25" r="5" fill="#F2994A"/><circle cx="66.25" cy="36.25" r="5" fill="#F2994A"/><circle cx="60" cy="40" r="7.5" fill="#F2994A"/><circle cx="60" cy="31.25" r="5" fill="#F2994A"/><path d="M74.4889 29.6324C75.0844 30.5584 75.1606 31.5291 74.7118 32.4693C74.2629 33.4096 73.3009 34.2942 71.9003 35.0548C70.4996 35.8153 68.6979 36.4314 66.6343 36.8555C64.5708 37.2795 62.3008 37.5 60 37.5C57.6992 37.5 55.4292 37.2795 53.3657 36.8555C51.3021 36.4314 49.5003 35.8153 48.0997 35.0548C46.699 34.2942 45.7371 33.4096 45.2882 32.4693C44.8394 31.5291 44.9156 30.5584 45.5111 29.6324L60 31.25L74.4889 29.6324Z" fill="#F2994A"/><path d="M53.125 45.625V39.375H66.875V45.625L60 48.75L53.125 45.625Z" fill="#2F80ED"/><path d="M66.875 33.75H53.125V39.375H66.875V33.75Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip073XA"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip00iv8)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M100 0H60V80H100V0Z" fill="#EB5757"/><path d="M20 0H-20V80H20V0Z" fill="#2F80ED"/><path d="M54.4889 29.6324C55.0844 30.5584 55.1606 31.5291 54.7118 32.4693C54.2629 33.4096 53.3009 34.2942 51.9003 35.0548C50.4996 35.8153 48.6979 36.4314 46.6343 36.8555C44.5708 37.2795 42.3008 37.5 40 37.5C37.6992 37.5 35.4292 37.2795 33.3657 36.8555C31.3021 36.4314 29.5003 35.8153 28.0997 35.0548C26.699 34.2942 25.7371 33.4096 25.2882 32.4693C24.8394 31.5291 24.9156 30.5584 25.5111 29.6324L40 31.25L54.4889 29.6324Z" fill="#F2994A"/><path d="M43.75 49.6911L40 55L36.25 49.6911L40 37.5L43.75 49.6911Z" fill="#F2994A"/><circle cx="33.75" cy="36.25" r="5" fill="#F2994A"/><circle cx="46.25" cy="36.25" r="5" fill="#F2994A"/><circle cx="40" cy="40" r="7.5" fill="#F2994A"/><circle cx="40" cy="31.25" r="5" fill="#F2994A"/><path d="M54.4889 29.6324C55.0844 30.5584 55.1606 31.5291 54.7118 32.4693C54.2629 33.4096 53.3009 34.2942 51.9003 35.0548C50.4996 35.8153 48.6979 36.4314 46.6343 36.8555C44.5708 37.2795 42.3008 37.5 40 37.5C37.6992 37.5 35.4292 37.2795 33.3657 36.8555C31.3021 36.4314 29.5003 35.8153 28.0997 35.0548C26.699 34.2942 25.7371 33.4096 25.2882 32.4693C24.8394 31.5291 24.9156 30.5584 25.5111 29.6324L40 31.25L54.4889 29.6324Z" fill="#F2994A"/><path d="M33.125 45.625V39.375H46.875V45.625L40 48.75L33.125 45.625Z" fill="#2F80ED"/><path d="M46.875 33.75H33.125V39.375H46.875V33.75Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip00iv8"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask03mSa" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask03mSa)"><g clip-path="url(#clip03mSa)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M100 0H60V80H100V0Z" fill="#EB5757"/><path d="M20 0H-20V80H20V0Z" fill="#2F80ED"/><path d="M54.4889 29.6324C55.0844 30.5584 55.1606 31.5291 54.7118 32.4693C54.2629 33.4096 53.3009 34.2942 51.9003 35.0548C50.4996 35.8153 48.6979 36.4314 46.6343 36.8555C44.5708 37.2795 42.3008 37.5 40 37.5C37.6992 37.5 35.4292 37.2795 33.3657 36.8555C31.3021 36.4314 29.5003 35.8153 28.0997 35.0548C26.699 34.2942 25.7371 33.4096 25.2882 32.4693C24.8394 31.5291 24.9156 30.5584 25.5111 29.6324L40 31.25L54.4889 29.6324Z" fill="#F2994A"/><path d="M43.75 49.6911L40 55L36.25 49.6911L40 37.5L43.75 49.6911Z" fill="#F2994A"/><circle cx="33.75" cy="36.25" r="5" fill="#F2994A"/><circle cx="46.25" cy="36.25" r="5" fill="#F2994A"/><circle cx="40" cy="40" r="7.5" fill="#F2994A"/><circle cx="40" cy="31.25" r="5" fill="#F2994A"/><path d="M54.4889 29.6324C55.0844 30.5584 55.1606 31.5291 54.7118 32.4693C54.2629 33.4096 53.3009 34.2942 51.9003 35.0548C50.4996 35.8153 48.6979 36.4314 46.6343 36.8555C44.5708 37.2795 42.3008 37.5 40 37.5C37.6992 37.5 35.4292 37.2795 33.3657 36.8555C31.3021 36.4314 29.5003 35.8153 28.0997 35.0548C26.699 34.2942 25.7371 33.4096 25.2882 32.4693C24.8394 31.5291 24.9156 30.5584 25.5111 29.6324L40 31.25L54.4889 29.6324Z" fill="#F2994A"/><path d="M33.125 45.625V39.375H46.875V45.625L40 48.75L33.125 45.625Z" fill="#2F80ED"/><path d="M46.875 33.75H33.125V39.375H46.875V33.75Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip03mSa"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-moldova', FlagsMoldova)
export default FlagsMoldova
