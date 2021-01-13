
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreEdit1 = {
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
            d="M42 12H16C13.7909 12 12 13.7909 12 16V42"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M68.0004 36.9116V63.9999C68.0004 66.209 66.2095 67.9999 64.0004 67.9999H36.9121"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M68.4002 23.139C69.9606 21.5787 69.9606 19.0488 68.4002 17.4884L62.7434 11.8316C61.1796 10.2677 58.6441 10.2677 57.0803 11.8316L18.0555 50.8563C16.771 52.1408 15.9619 53.8243 15.7613 55.6297L14.7984 64.2958C14.7259 64.9483 15.2773 65.4996 15.9298 65.4271L24.5958 64.4642C26.4013 64.2636 28.0847 63.4545 29.3692 62.17L68.4002 23.139Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M48.6035 20.3192L59.911 31.6267"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 16C9 12.134 12.134 9 16 9H42C43.6569 9 45 10.3431 45 12C45 13.6569 43.6569 15 42 15H16C15.4477 15 15 15.4477 15 16V42C15 43.6569 13.6569 45 12 45C10.3431 45 9 43.6569 9 42V16ZM68 33.9117C69.6569 33.9117 71 35.2549 71 36.9117V64C71 67.866 67.866 71 64 71H36.9117C35.2549 71 33.9117 69.6569 33.9117 68C33.9117 66.3431 35.2549 65 36.9117 65H64C64.5523 65 65 64.5523 65 64V36.9117C65 35.2549 66.3431 33.9117 68 33.9117ZM68.4001 23.139C69.9605 21.5786 69.9605 19.0488 68.4001 17.4884L62.7433 11.8315C61.1795 10.2677 58.644 10.2677 57.0802 11.8315L18.0554 50.8563C16.7709 52.1408 15.9618 53.8242 15.7612 55.6297L14.7983 64.2957C14.7258 64.9483 15.2772 65.4996 15.9297 65.4271L24.5957 64.4642C26.4012 64.2636 28.0846 63.4545 29.3691 62.17L68.4001 23.139ZM58.4968 33.0409L47.1893 21.7334L50.0178 18.905L61.3253 30.2125L58.4968 33.0409Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M42 14C43.1046 14 44 13.1046 44 12C44 10.8954 43.1046 10 42 10V14ZM70 36.9117C70 35.8071 69.1046 34.9117 68 34.9117C66.8954 34.9117 66 35.8071 66 36.9117H70ZM10 42C10 43.1046 10.8954 44 12 44C13.1046 44 14 43.1046 14 42H10ZM36.9117 66C35.8071 66 34.9117 66.8954 34.9117 68C34.9117 69.1046 35.8071 70 36.9117 70V66ZM16 14H42V10H16V14ZM66 36.9117V64H70V36.9117H66ZM14 42V16H10V42H14ZM64 66H36.9117V70H64V66ZM66 64C66 65.1046 65.1046 66 64 66V70C67.3137 70 70 67.3137 70 64H66ZM16 10C12.6863 10 10 12.6863 10 16H14C14 14.8954 14.8954 14 16 14V10Z"
            fill="#F2994A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.4005 23.139C69.9609 21.5786 69.9609 19.0488 68.4005 17.4884L62.7436 11.8315C61.1798 10.2677 58.6444 10.2677 57.0806 11.8315L18.0558 50.8563C16.7713 52.1408 15.9622 53.8242 15.7616 55.6297L14.9401 63.023L14.7987 64.2957C14.7262 64.9483 15.2776 65.4996 15.9301 65.4271L17.2029 65.2857L24.5961 64.4642C26.4016 64.2636 28.085 63.4545 29.3695 62.17L68.4005 23.139Z"
            fill="#EB5757"
          />
          <path
            d="M48.6035 20.3192L59.911 31.6267"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M68.4001 23.139C69.9605 21.5787 69.9605 19.0488 68.4001 17.4884L62.7433 11.8316C61.1795 10.2677 58.644 10.2677 57.0802 11.8316L18.0554 50.8563C16.7709 52.1408 15.9618 53.8243 15.7612 55.6297L14.7983 64.2958C14.7258 64.9483 15.2772 65.4996 15.9297 65.4271L24.5957 64.4642C26.4012 64.2636 28.0846 63.4545 29.3691 62.17L68.4001 23.139Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M42 12H16C13.7909 12 12 13.7909 12 16V42M68 36.9117V64C68 66.2092 66.2091 68 64 68H36.9117M48.6036 20.3192L59.9111 31.6267M68.4001 17.4884L62.7433 11.8316C61.1795 10.2677 58.644 10.2677 57.0802 11.8316L18.0554 50.8563C16.7709 52.1408 15.9618 53.8243 15.7612 55.6297L14.7983 64.2958C14.7258 64.9483 15.2772 65.4996 15.9297 65.4271L24.5957 64.4642C26.4012 64.2636 28.0846 63.4545 29.3691 62.17L68.4001 23.139C69.9605 21.5787 69.9605 19.0488 68.4001 17.4884Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.666 10.4173C58.0109 8.07248 61.8126 8.07247 64.1575 10.4173L69.8144 16.0742C72.1558 18.4156 72.1558 22.2118 69.8144 24.5533L30.7834 63.5842C29.1777 65.1899 27.0734 66.2013 24.8166 66.452L16.1506 67.4149C14.2242 67.6289 12.5965 66.0012 12.8106 64.0749L13.7735 55.4089C14.0242 53.152 15.0356 51.0477 16.6412 49.4421L55.666 10.4173ZM61.3291 13.2458C60.5463 12.463 59.2772 12.463 58.4944 13.2458L51.4265 20.3137L59.9117 28.799L66.9859 21.7248C67.7653 20.9455 67.7653 19.682 66.9859 18.9026L61.3291 13.2458ZM57.0833 31.6274L48.598 23.1421L19.4697 52.2705C18.5063 53.2339 17.8994 54.4965 17.749 55.8506L16.9208 63.3047L24.3749 62.4765C25.729 62.326 26.9916 61.7192 27.9549 60.7558L57.0833 31.6274Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M10 16C10 12.6863 12.6863 10 16 10H42C43.1046 10 44 10.8954 44 12C44 13.1046 43.1046 14 42 14H16C14.8954 14 14 14.8954 14 16V42C14 43.1046 13.1046 44 12 44C10.8954 44 10 43.1046 10 42V16Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M68 34.9117C69.1046 34.9117 70 35.8072 70 36.9117V64C70 67.3137 67.3137 70 64 70H36.9117C35.8071 70 34.9117 69.1046 34.9117 68C34.9117 66.8954 35.8071 66 36.9117 66H64C65.1046 66 66 65.1046 66 64V36.9117C66 35.8072 66.8954 34.9117 68 34.9117Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-edit-1', CoreEdit1)
export default CoreEdit1