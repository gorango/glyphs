
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreCheckDouble = {
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
            d="M19.1379 40.3106L34.6943 55.867C35.4753 56.648 36.7417 56.648 37.5227 55.867L70.0496 23.3401"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M9.3291 40.3103L24.8855 55.8667C25.2187 56.1999 25.6403 56.391 26.0748 56.4398"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M35.8002 47.7805L60.2408 23.3398"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M11.6213 37.9703C10.4497 36.7988 8.55025 36.7988 7.37868 37.9703C6.20711 39.1419 6.20711 41.0414 7.37868 42.213L11.6213 37.9703ZM25.0563 55.648L27.1777 53.5267L27.1777 53.5267L25.0563 55.648ZM34.0265 45.2636C32.8549 46.4352 32.8549 48.3347 34.0265 49.5063C35.1981 50.6779 37.0976 50.6779 38.2691 49.5063L34.0265 45.2636ZM62.533 25.2424C63.7046 24.0708 63.7046 22.1713 62.533 20.9998C61.3614 19.8282 59.4619 19.8282 58.2904 20.9998L62.533 25.2424ZM24.7552 58.9309C26.3117 59.4988 28.0339 58.6975 28.6018 57.141C29.1698 55.5845 28.3684 53.8623 26.812 53.2944L24.7552 58.9309ZM7.37868 42.213L22.935 57.7693L27.1777 53.5267L11.6213 37.9703L7.37868 42.213ZM38.2691 49.5063L62.533 25.2424L58.2904 20.9998L34.0265 45.2636L38.2691 49.5063ZM22.935 57.7693C23.4634 58.2977 24.0876 58.6872 24.7552 58.9309L26.812 53.2944C26.9489 53.3443 27.0751 53.4241 27.1777 53.5267L22.935 57.7693Z"
            fill="currentColor"
          />
          <path
            d="M19.3089 40.092L34.8652 55.6484C35.6463 56.4294 36.9126 56.4294 37.6937 55.6484L70.2206 23.1214"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M10.9142 38.6774C10.1332 37.8964 8.86684 37.8964 8.08579 38.6774C7.30474 39.4585 7.30474 40.7248 8.08579 41.5059L10.9142 38.6774ZM23.6421 57.0622C24.4232 57.8433 25.6895 57.8433 26.4706 57.0622C27.2516 56.2812 27.2516 55.0148 26.4706 54.2338L23.6421 57.0622ZM34.8043 45.9C34.0233 46.6811 34.0233 47.9474 34.8043 48.7285C35.5854 49.5095 36.8517 49.5095 37.6327 48.7285L34.8043 45.9ZM61.8259 24.5353C62.6069 23.7543 62.6069 22.4879 61.8259 21.7069C61.0448 20.9258 59.7785 20.9258 58.9975 21.7069L61.8259 24.5353ZM8.08579 41.5059L23.6421 57.0622L26.4706 54.2338L10.9142 38.6774L8.08579 41.5059ZM37.6327 48.7285L61.8259 24.5353L58.9975 21.7069L34.8043 45.9L37.6327 48.7285Z"
            fill="#6FCF97"
          />
          <path
            d="M19.3089 40.092L34.8652 55.6484C35.6463 56.4294 36.9126 56.4294 37.6937 55.6484L70.2206 23.1214"
            stroke="#219653"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M9.3291 40.3104L24.8855 55.8668C25.2187 56.2 25.6403 56.3911 26.0748 56.4399M35.8001 47.7805L60.2408 23.3398M19.1379 40.3106L34.6943 55.867C35.4753 56.648 36.7416 56.648 37.5227 55.867L70.0496 23.3401"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M61.8259 24.5353C62.6069 23.7543 62.6069 22.4879 61.8259 21.7069C61.0448 20.9258 59.7785 20.9258 58.9975 21.7069L34.5568 46.1475C33.7758 46.9286 33.7758 48.1949 34.5568 48.976C35.3379 49.757 36.6042 49.757 37.3853 48.976L61.8259 24.5353Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M10.9142 38.6774C10.1332 37.8964 8.86684 37.8964 8.08579 38.6774C7.30474 39.4585 7.30474 40.7248 8.08579 41.5059L23.6421 57.0622C24.3072 57.7273 25.1535 58.111 26.0222 58.2087C27.1198 58.3321 28.1097 57.5424 28.2332 56.4447C28.3566 55.3476 27.5676 54.358 26.4707 54.2339L10.9142 38.6774Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M71.6347 24.5355C72.4158 23.7545 72.4158 22.4882 71.6347 21.7071C70.8537 20.9261 69.5873 20.9261 68.8063 21.7071L36.2794 54.234L20.723 38.6777C19.942 37.8966 18.6756 37.8966 17.8946 38.6777C17.1135 39.4587 17.1135 40.7251 17.8946 41.5061L33.4509 57.0625C35.013 58.6246 37.5457 58.6246 39.1078 57.0625L71.6347 24.5355Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-check-double', CoreCheckDouble)
export default CoreCheckDouble
