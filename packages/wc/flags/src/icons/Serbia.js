
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsSerbia = {
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
          <g clip-path="url(#clip0w_S9)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 0H0V26.6667H120V0Z" fill="#EB5757"/><path opacity="0.9" d="M120 53.3333H0V79.9999H120V53.3333Z" fill="#F2F2F2"/><path d="M16 23.7896H48V45.3066C48 51.2242 44.4882 56.5775 39.0602 58.9344L32 62.0001L24.9398 58.9344C19.5118 56.5776 16 51.2242 16 45.3066V23.7896Z" fill="#EB5757"/><path d="M24 28.4211H40V21.4736L36.4444 22.5591L32 18L27.5556 22.5591L24 21.4736V28.4211Z" fill="#F2C94C"/><path d="M40 51.8717L32 41.7368L24 51.8717" stroke="#F2C94C" stroke-width="3.42857"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32.0004 34.0266C31.3862 33.0906 30.3358 32.4736 29.1432 32.4736C27.2496 32.4736 25.7146 34.0289 25.7146 35.9473C25.7146 36.2249 25.7468 36.4949 25.8075 36.7537L20.1235 35.3684C18.9198 36.2485 18.2861 37.2468 18.2861 38.2631C18.2861 39.2794 18.9198 40.2777 20.1235 41.1578C20.7214 41.595 21.4495 41.9954 22.2865 42.3499C22.3017 44.4872 23.7459 46.2803 25.6992 46.7973C26.376 48.3903 27.6242 49.6754 29.1822 50.388L27.4291 53.6086L32.0005 57.3684L36.572 53.6086L34.8188 50.3879C36.3767 49.6753 37.6247 48.3902 38.3016 46.7974C40.2551 46.2805 41.6994 44.4873 41.7146 42.3498C42.5515 41.9953 43.2795 41.595 43.8773 41.1578C45.081 40.2777 45.7147 39.2794 45.7147 38.2631C45.7147 37.2468 45.081 36.2485 43.8773 35.3684L38.1934 36.7537C38.2541 36.4949 38.2863 36.2249 38.2863 35.9473C38.2863 34.0289 36.7512 32.4736 34.8577 32.4736C33.6651 32.4736 32.6147 33.0906 32.0004 34.0266Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0w_S9"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0umMk)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path opacity="0.9" d="M80 53.3334H0V80H80V53.3334Z" fill="#F2F2F2"/><path d="M16 23.7896H48V45.3066C48 51.2242 44.4882 56.5775 39.0602 58.9344L32 62.0001L24.9398 58.9344C19.5118 56.5776 16 51.2242 16 45.3066V23.7896Z" fill="#EB5757"/><path d="M24 28.4211H40V21.4736L36.4444 22.5591L32 18L27.5556 22.5591L24 21.4736V28.4211Z" fill="#F2C94C"/><path d="M40 51.8717L32 41.7368L24 51.8717" stroke="#F2C94C" stroke-width="3.42857"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32.0004 34.0266C31.3862 33.0906 30.3358 32.4736 29.1432 32.4736C27.2496 32.4736 25.7146 34.0289 25.7146 35.9473C25.7146 36.2249 25.7468 36.4949 25.8075 36.7537L20.1235 35.3684C18.9198 36.2485 18.2861 37.2468 18.2861 38.2631C18.2861 39.2794 18.9198 40.2777 20.1235 41.1578C20.7214 41.595 21.4495 41.9954 22.2865 42.3499C22.3017 44.4872 23.7459 46.2803 25.6992 46.7973C26.376 48.3903 27.6242 49.6754 29.1822 50.388L27.4291 53.6086L32.0005 57.3684L36.572 53.6086L34.8188 50.3879C36.3767 49.6753 37.6247 48.3902 38.3016 46.7974C40.2551 46.2805 41.6994 44.4873 41.7146 42.3498C42.5515 41.9953 43.2795 41.595 43.8773 41.1578C45.081 40.2777 45.7147 39.2794 45.7147 38.2631C45.7147 37.2468 45.081 36.2485 43.8773 35.3684L38.1934 36.7537C38.2541 36.4949 38.2863 36.2249 38.2863 35.9473C38.2863 34.0289 36.7512 32.4736 34.8577 32.4736C33.6651 32.4736 32.6147 33.0906 32.0004 34.0266Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0umMk"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0PANQ" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0PANQ)"><g clip-path="url(#clip0PANQ)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path opacity="0.9" d="M80 53.3334H0V80H80V53.3334Z" fill="#F2F2F2"/><path d="M16 23.7896H48V45.3066C48 51.2242 44.4882 56.5775 39.0602 58.9344L32 62.0001L24.9398 58.9344C19.5118 56.5776 16 51.2242 16 45.3066V23.7896Z" fill="#EB5757"/><path d="M24 28.4211H40V21.4736L36.4444 22.5591L32 18L27.5556 22.5591L24 21.4736V28.4211Z" fill="#F2C94C"/><path d="M40 51.8717L32 41.7368L24 51.8717" stroke="#F2C94C" stroke-width="3.42857"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32.0004 34.0266C31.3862 33.0906 30.3358 32.4736 29.1432 32.4736C27.2496 32.4736 25.7146 34.0289 25.7146 35.9473C25.7146 36.2249 25.7468 36.4949 25.8075 36.7537L20.1235 35.3684C18.9198 36.2485 18.2861 37.2468 18.2861 38.2631C18.2861 39.2794 18.9198 40.2777 20.1235 41.1578C20.7214 41.595 21.4495 41.9954 22.2865 42.3499C22.3017 44.4872 23.7459 46.2803 25.6992 46.7973C26.376 48.3903 27.6242 49.6754 29.1822 50.388L27.4291 53.6086L32.0005 57.3684L36.572 53.6086L34.8188 50.3879C36.3767 49.6753 37.6247 48.3902 38.3016 46.7974C40.2551 46.2805 41.6994 44.4873 41.7146 42.3498C42.5515 41.9953 43.2795 41.595 43.8773 41.1578C45.081 40.2777 45.7147 39.2794 45.7147 38.2631C45.7147 37.2468 45.081 36.2485 43.8773 35.3684L38.1934 36.7537C38.2541 36.4949 38.2863 36.2249 38.2863 35.9473C38.2863 34.0289 36.7512 32.4736 34.8577 32.4736C33.6651 32.4736 32.6147 33.0906 32.0004 34.0266Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0PANQ"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-serbia', FlagsSerbia)
export default FlagsSerbia
