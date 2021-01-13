
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreInbox1 = {
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
            d="M28.2624 44.7639C27.7269 43.1158 26.1911 42 24.4582 42H12C9.79086 42 8 43.7909 8 46V64C8 66.2091 9.79086 68 12 68H68C70.2091 68 72 66.2091 72 64V46C72 43.7909 70.2091 42 68 42H55.5418C53.8089 42 52.2731 43.1158 51.7376 44.7639L50.3026 49.1803C49.7671 50.8284 48.2313 51.9443 46.4984 51.9443H33.5016C31.7687 51.9443 30.2329 50.8284 29.6974 49.1803L28.2624 44.7639Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M72 46V16C72 13.7909 70.2091 12 68 12H12C9.79086 12 8 13.7909 8 16V46"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68 12C70.2091 12 72 13.7909 72 16V31.9793C70.8233 31.2987 69.4571 30.9091 68 30.9091L55.7428 30.9091C52.0867 30.9091 48.8958 33.3877 47.9914 36.9302L46.2974 43.5654L33.7026 43.5654L32.0086 36.9302C31.1042 33.3877 27.9133 30.9091 24.2572 30.9091L12 30.9091C10.5429 30.9091 9.17669 31.2987 8 31.9793L8 16C8 13.7909 9.79086 12 12 12L68 12ZM12 38.9091L24.2572 38.9091L25.9512 45.5443C26.8555 49.0868 30.0464 51.5654 33.7026 51.5654H46.2974C49.9535 51.5654 53.1445 49.0868 54.0488 45.5443L55.7428 38.9091L68 38.9091L68 64L12 64L12 38.9091Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.1329 37.9196C27.6807 36.1484 26.0853 34.9091 24.2572 34.9091L12 34.9091C9.79086 34.9091 8 36.6999 8 38.9091L8 64C8 66.2091 9.79086 68 12 68H68C70.2091 68 72 66.2091 72 64V38.9091C72 36.6999 70.2091 34.9091 68 34.9091H55.7428C53.9147 34.9091 52.3193 36.1484 51.8671 37.9196L50.1731 44.5549C49.721 46.3261 48.1255 47.5654 46.2974 47.5654L33.7026 47.5654C31.8745 47.5654 30.279 46.3261 29.8269 44.5549L28.1329 37.9196Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68 12C70.2091 12 72 13.7909 72 16V34.9091V38.9091C72 36.7 70.2091 34.9091 68 34.9091L55.7428 34.9091C53.9147 34.9091 52.3193 36.1484 51.8671 37.9196L50.1731 44.5549C49.721 46.3261 48.1255 47.5654 46.2974 47.5654H33.7026C31.8745 47.5654 30.279 46.3261 29.8269 44.5549L28.1329 37.9196C27.6807 36.1484 26.0853 34.9091 24.2572 34.9091H12C9.79086 34.9091 8 36.6999 8 38.9091L8 34.9091L8 16C8 13.7909 9.79086 12 12 12L68 12Z"
            fill="#F2C94C"
          />
          <path
            d="M70 38.9091C70 40.0137 70.8954 40.9091 72 40.9091C73.1046 40.9091 74 40.0137 74 38.9091H70ZM51.8671 37.9196L53.8049 38.4144V38.4144L51.8671 37.9196ZM50.1731 44.5549L52.111 45.0496V45.0496L50.1731 44.5549ZM46.2974 47.5654V45.5654V47.5654ZM33.7026 47.5654V49.5654V47.5654ZM29.8269 44.5549L27.889 45.0496L29.8269 44.5549ZM28.1329 37.9196L30.0708 37.4249V37.4249L28.1329 37.9196ZM6 38.9091C6 40.0137 6.89543 40.9091 8 40.9091C9.10457 40.9091 10 40.0137 10 38.9091H6ZM74 16C74 12.6863 71.3137 10 68 10V14C69.1046 14 70 14.8954 70 16H74ZM74 34.9091V16H70V34.9091H74ZM74 38.9091V34.9091H70V38.9091H74ZM74 38.9091C74 35.5954 71.3137 32.9091 68 32.9091V36.9091C69.1046 36.9091 70 37.8045 70 38.9091H74ZM68 32.9091L55.7428 32.9091L55.7428 36.9091L68 36.9091V32.9091ZM55.7428 32.9091C53.0007 32.9091 50.6075 34.7681 49.9292 37.4249L53.8049 38.4144C54.031 37.5287 54.8287 36.9091 55.7428 36.9091L55.7428 32.9091ZM49.9292 37.4249L48.2353 44.0602L52.111 45.0496L53.8049 38.4144L49.9292 37.4249ZM48.2353 44.0602C48.0092 44.9458 47.2115 45.5654 46.2974 45.5654V49.5654C49.0395 49.5654 51.4327 47.7065 52.111 45.0496L48.2353 44.0602ZM46.2974 45.5654H33.7026V49.5654H46.2974V45.5654ZM33.7026 45.5654C32.7885 45.5654 31.9908 44.9458 31.7647 44.0602L27.889 45.0496C28.5673 47.7065 30.9605 49.5654 33.7026 49.5654V45.5654ZM31.7647 44.0602L30.0708 37.4249L26.1951 38.4144L27.889 45.0496L31.7647 44.0602ZM30.0708 37.4249C29.3925 34.7681 26.9993 32.9091 24.2572 32.9091V36.9091C25.1713 36.9091 25.969 37.5287 26.1951 38.4144L30.0708 37.4249ZM24.2572 32.9091H12V36.9091H24.2572V32.9091ZM12 32.9091C8.68629 32.9091 6 35.5954 6 38.9091H10C10 37.8045 10.8954 36.9091 12 36.9091V32.9091ZM6 34.9091L6 38.9091H10V34.9091H6ZM6 16L6 34.9091H10L10 16H6ZM12 10C8.68629 10 6 12.6863 6 16H10C10 14.8954 10.8954 14 12 14V10ZM68 10L12 10V14L68 14V10Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.1329 37.9196C27.6807 36.1484 26.0853 34.9091 24.2572 34.9091H12C9.79086 34.9091 8 36.6999 8 38.9091L8 64C8 66.2091 9.79086 68 12 68H68C70.2091 68 72 66.2091 72 64V38.9091C72 36.6999 70.2091 34.9091 68 34.9091H55.7428C53.9147 34.9091 52.3193 36.1484 51.8671 37.9196L50.1731 44.5549C49.721 46.3261 48.1255 47.5654 46.2974 47.5654L33.7026 47.5654C31.8745 47.5654 30.279 46.3261 29.8269 44.5549L28.1329 37.9196Z"
            fill="#F2994A"
          />
          <path
            d="M50.1731 44.5549L48.2353 44.0602L50.1731 44.5549ZM46.2974 47.5654V45.5654V47.5654ZM51.8671 37.9196L53.8049 38.4144L51.8671 37.9196ZM28.1329 37.9196L26.1951 38.4144L28.1329 37.9196ZM12 36.9091H24.2572V32.9091H12V36.9091ZM10 64L10 38.9091H6L6 64H10ZM68 66L12 66V70H68V66ZM70 38.9091V64H74V38.9091L70 38.9091ZM55.7428 36.9091H68V32.9091H55.7428V36.9091ZM49.9292 37.4249L48.2353 44.0602L52.111 45.0496L53.8049 38.4144L49.9292 37.4249ZM46.2974 45.5654L33.7026 45.5654V49.5654L46.2974 49.5654V45.5654ZM31.7647 44.0602L30.0708 37.4249L26.1951 38.4144L27.889 45.0496L31.7647 44.0602ZM33.7026 45.5654C32.7885 45.5654 31.9908 44.9458 31.7647 44.0602L27.889 45.0496C28.5673 47.7065 30.9605 49.5654 33.7026 49.5654V45.5654ZM48.2353 44.0602C48.0092 44.9458 47.2115 45.5654 46.2974 45.5654V49.5654C49.0395 49.5654 51.4327 47.7065 52.111 45.0496L48.2353 44.0602ZM55.7428 32.9091C53.0007 32.9091 50.6075 34.7681 49.9292 37.4249L53.8049 38.4144C54.031 37.5287 54.8287 36.9091 55.7428 36.9091V32.9091ZM74 38.9091C74 35.5954 71.3137 32.9091 68 32.9091V36.9091C69.1046 36.9091 70 37.8045 70 38.9091L74 38.9091ZM68 70C71.3137 70 74 67.3137 74 64H70C70 65.1046 69.1046 66 68 66V70ZM6 64C6 67.3137 8.68629 70 12 70V66C10.8954 66 10 65.1046 10 64H6ZM24.2572 36.9091C25.1713 36.9091 25.969 37.5287 26.1951 38.4144L30.0708 37.4249C29.3925 34.7681 26.9993 32.9091 24.2572 32.9091V36.9091ZM12 32.9091C8.68629 32.9091 6 35.5954 6 38.9091H10C10 37.8045 10.8954 36.9091 12 36.9091V32.9091Z"
            fill="#F2994A"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M68 12C70.2091 12 72 13.7909 72 16V38.9091C72 36.7 70.2091 34.9091 68 34.9091H55.7428C53.9147 34.9091 52.3193 36.1484 51.8671 37.9196L50.1731 44.5549C49.721 46.3261 48.1255 47.5654 46.2974 47.5654H33.7026C31.8745 47.5654 30.279 46.3261 29.8269 44.5549L28.1329 37.9196C27.6807 36.1484 26.0853 34.9091 24.2572 34.9091H12C9.79086 34.9091 8 36.6999 8 38.9091V16C8 13.7909 9.79086 12 12 12H68Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28.1329 37.9196C27.6807 36.1484 26.0853 34.9091 24.2572 34.9091H12C9.79086 34.9091 8 36.6999 8 38.9091V64C8 66.2091 9.79086 68 12 68H68C70.2091 68 72 66.2091 72 64V38.9091C72 36.7 70.2091 34.9091 68 34.9091H55.7428C53.9147 34.9091 52.3193 36.1484 51.8671 37.9196L50.1731 44.5549C49.721 46.3261 48.1255 47.5654 46.2974 47.5654H33.7026C31.8745 47.5654 30.279 46.3261 29.8269 44.5549L28.1329 37.9196Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M72 38.9091C72 36.7 70.2091 34.9091 68 34.9091H55.7428C53.9147 34.9091 52.3193 36.1484 51.8671 37.9196L50.1731 44.5549C49.721 46.3261 48.1255 47.5654 46.2974 47.5654H33.7026C31.8745 47.5654 30.279 46.3261 29.8269 44.5549L28.1329 37.9196C27.6807 36.1484 26.0853 34.9091 24.2572 34.9091H12C9.79086 34.9091 8 36.6999 8 38.9091M72 38.9091V64C72 66.2091 70.2091 68 68 68H12C9.79086 68 8 66.2091 8 64V38.9091M72 38.9091V16C72 13.7909 70.2091 12 68 12H12C9.79086 12 8 13.7909 8 16V38.9091"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 10C8.68629 10 6 12.6863 6 16V64C6 67.3137 8.68629 70 12 70H68C71.3137 70 74 67.3137 74 64V16C74 12.6863 71.3137 10 68 10H12ZM70 46C70 44.8954 69.1046 44 68 44H55.5418C54.6754 44 53.9075 44.5579 53.6397 45.382L52.2047 49.7984C51.4015 52.2705 49.0978 53.9443 46.4984 53.9443H33.5016C30.9022 53.9443 28.5985 52.2705 27.7953 49.7984L26.3603 45.382C26.0925 44.5579 25.3246 44 24.4582 44H12C10.8954 44 10 44.8954 10 46V64C10 65.1046 10.8954 66 12 66H68C69.1046 66 70 65.1046 70 64V46ZM70 40.3414V16C70 14.8954 69.1046 14 68 14H12C10.8954 14 10 14.8954 10 16V40.3414C10.6256 40.1203 11.2987 40 12 40H24.4582C27.0575 40 29.3613 41.6738 30.1645 44.1459L31.5995 48.5623C31.8672 49.3864 32.6352 49.9443 33.5016 49.9443H46.4984C47.3648 49.9443 48.1328 49.3863 48.4005 48.5623L49.8355 44.1459C50.6387 41.6738 52.9425 40 55.5418 40H68C68.7013 40 69.3744 40.1203 70 40.3414Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-inbox-1', CoreInbox1)
export default CoreInbox1
