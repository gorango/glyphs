
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsParaguay = {
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
          <g clip-path="url(#clip0IL-l)"><path d="M120 -0.0102539H0V26.6564H120V-0.0102539Z" fill="#EB5757"/><path d="M120 26.6565H0V53.3232H120V26.6565Z" fill="#F2F2F2"/><path d="M120 53.323H0V79.9897H120V53.323Z" fill="#2F80ED"/><path d="M60 28C61.5759 28 63.1363 28.3104 64.5922 28.9134C66.0481 29.5165 67.371 30.4004 68.4853 31.5147C69.5996 32.629 70.4835 33.9519 71.0866 35.4078C71.6896 36.8637 72 38.4241 72 40C72 41.5759 71.6896 43.1363 71.0866 44.5922C70.4835 46.0481 69.5996 47.371 68.4853 48.4853C67.371 49.5996 66.0481 50.4835 64.5922 51.0866C63.1363 51.6896 61.5759 52 60 52C58.4241 52 56.8637 51.6896 55.4078 51.0866C53.9519 50.4835 52.629 49.5996 51.5147 48.4853C50.4004 47.371 49.5165 46.0481 48.9134 44.5922C48.3104 43.1363 48 41.5759 48 40C48 38.4241 48.3104 36.8637 48.9134 35.4078C49.5165 33.9519 50.4004 32.629 51.5147 31.5147C52.629 30.4004 53.9519 29.5165 55.4078 28.9134C56.8637 28.3104 58.4241 28 60 28L60 28Z" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/><path d="M68.6603 45C69.5379 43.4798 70 41.7554 70 40C70 38.2446 69.5379 36.5202 68.6603 35C67.7826 33.4798 66.5202 32.2174 65 31.3397C63.4798 30.4621 61.7554 30 60 30C58.2446 30 56.5202 30.4621 55 31.3397C53.4798 32.2174 52.2174 33.4798 51.3397 35C50.4621 36.5202 50 38.2446 50 40C50 41.7554 50.4621 43.4798 51.3397 45" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 2"/><path d="M64.9497 35.0503C65.9287 36.0292 66.5954 37.2765 66.8655 38.6344C67.1356 39.9922 66.997 41.3997 66.4672 42.6788C65.9373 43.9579 65.0401 45.0511 63.889 45.8203C62.7378 46.5895 61.3845 47 60 47C58.6155 47 57.2622 46.5895 56.111 45.8203C54.9599 45.0511 54.0627 43.9579 53.5328 42.6788C53.003 41.3997 52.8644 39.9922 53.1345 38.6344C53.4046 37.2765 54.0713 36.0292 55.0503 35.0503" stroke="#219653" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M60 36L60.8981 38.7639H63.8042L61.4531 40.4721L62.3511 43.2361L60 41.5279L57.6489 43.2361L58.5469 40.4721L56.1958 38.7639H59.1019L60 36Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0IL-l"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0HI0U)"><path d="M120 -0.0102539H0V26.6564H120V-0.0102539Z" fill="#EB5757"/><path d="M120 26.6565H0V53.3232H120V26.6565Z" fill="#F2F2F2"/><path d="M120 53.323H0V79.9897H120V53.323Z" fill="#2F80ED"/><path d="M40 28C41.5759 28 43.1363 28.3104 44.5922 28.9134C46.0481 29.5165 47.371 30.4004 48.4853 31.5147C49.5996 32.629 50.4835 33.9519 51.0866 35.4078C51.6896 36.8637 52 38.4241 52 40C52 41.5759 51.6896 43.1363 51.0866 44.5922C50.4835 46.0481 49.5996 47.371 48.4853 48.4853C47.371 49.5996 46.0481 50.4835 44.5922 51.0866C43.1363 51.6896 41.5759 52 40 52C38.4241 52 36.8637 51.6896 35.4078 51.0866C33.9519 50.4835 32.629 49.5996 31.5147 48.4853C30.4004 47.371 29.5165 46.0481 28.9134 44.5922C28.3104 43.1363 28 41.5759 28 40C28 38.4241 28.3104 36.8637 28.9134 35.4078C29.5165 33.9519 30.4004 32.629 31.5147 31.5147C32.629 30.4004 33.9519 29.5165 35.4078 28.9134C36.8637 28.3104 38.4241 28 40 28L40 28Z" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/><path d="M48.6603 45C49.5379 43.4798 50 41.7554 50 40C50 38.2446 49.5379 36.5202 48.6603 35C47.7826 33.4798 46.5202 32.2174 45 31.3397C43.4798 30.4621 41.7554 30 40 30C38.2446 30 36.5202 30.4621 35 31.3397C33.4798 32.2174 32.2174 33.4798 31.3397 35C30.4621 36.5202 30 38.2446 30 40C30 41.7554 30.4621 43.4798 31.3397 45" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 2"/><path d="M44.9497 35.0503C45.9287 36.0292 46.5954 37.2765 46.8655 38.6344C47.1356 39.9922 46.997 41.3997 46.4672 42.6788C45.9373 43.9579 45.0401 45.0511 43.889 45.8203C42.7378 46.5895 41.3845 47 40 47C38.6155 47 37.2622 46.5895 36.111 45.8203C34.9599 45.0511 34.0627 43.9579 33.5328 42.6788C33.003 41.3997 32.8644 39.9922 33.1345 38.6344C33.4046 37.2765 34.0713 36.0292 35.0503 35.0503" stroke="#219653" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 36L40.8981 38.7639H43.8042L41.4531 40.4721L42.3511 43.2361L40 41.5279L37.6489 43.2361L38.5469 40.4721L36.1958 38.7639H39.1019L40 36Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0HI0U"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0Szus" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0Szus)"><g clip-path="url(#clip0Szus)"><path d="M120 -0.0102539H0V26.6564H120V-0.0102539Z" fill="#EB5757"/><path d="M120 26.6565H0V53.3232H120V26.6565Z" fill="#F2F2F2"/><path d="M120 53.323H0V79.9897H120V53.323Z" fill="#2F80ED"/><path d="M40 28C41.5759 28 43.1363 28.3104 44.5922 28.9134C46.0481 29.5165 47.371 30.4004 48.4853 31.5147C49.5996 32.629 50.4835 33.9519 51.0866 35.4078C51.6896 36.8637 52 38.4241 52 40C52 41.5759 51.6896 43.1363 51.0866 44.5922C50.4835 46.0481 49.5996 47.371 48.4853 48.4853C47.371 49.5996 46.0481 50.4835 44.5922 51.0866C43.1363 51.6896 41.5759 52 40 52C38.4241 52 36.8637 51.6896 35.4078 51.0866C33.9519 50.4835 32.629 49.5996 31.5147 48.4853C30.4004 47.371 29.5165 46.0481 28.9134 44.5922C28.3104 43.1363 28 41.5759 28 40C28 38.4241 28.3104 36.8637 28.9134 35.4078C29.5165 33.9519 30.4004 32.629 31.5147 31.5147C32.629 30.4004 33.9519 29.5165 35.4078 28.9134C36.8637 28.3104 38.4241 28 40 28L40 28Z" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/><path d="M48.6603 45C49.5379 43.4798 50 41.7554 50 40C50 38.2446 49.5379 36.5202 48.6603 35C47.7826 33.4798 46.5202 32.2174 45 31.3397C43.4798 30.4621 41.7554 30 40 30C38.2446 30 36.5202 30.4621 35 31.3397C33.4798 32.2174 32.2174 33.4798 31.3397 35C30.4621 36.5202 30 38.2446 30 40C30 41.7554 30.4621 43.4798 31.3397 45" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 2"/><path d="M44.9497 35.0503C45.9287 36.0292 46.5954 37.2765 46.8655 38.6344C47.1356 39.9922 46.997 41.3997 46.4672 42.6788C45.9373 43.9579 45.0401 45.0511 43.889 45.8203C42.7378 46.5895 41.3845 47 40 47C38.6155 47 37.2622 46.5895 36.111 45.8203C34.9599 45.0511 34.0627 43.9579 33.5328 42.6788C33.003 41.3997 32.8644 39.9922 33.1345 38.6344C33.4046 37.2765 34.0713 36.0292 35.0503 35.0503" stroke="#219653" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 36L40.8981 38.7639H43.8042L41.4531 40.4721L42.3511 43.2361L40 41.5279L37.6489 43.2361L38.5469 40.4721L36.1958 38.7639H39.1019L40 36Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip0Szus"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-paraguay', FlagsParaguay)
export default FlagsParaguay
