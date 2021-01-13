
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBoxingGlove = {
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
            d="M29.3286 54C29.3286 52.8954 30.224 52 31.3286 52H55.3286C56.4332 52 57.3286 52.8954 57.3286 54V66C57.3286 67.1046 56.4332 68 55.3286 68H31.3286C30.224 68 29.3286 67.1046 29.3286 66V54Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M55.7165 52.0378C56.6575 52.0378 57.4712 51.3819 57.671 50.4623L63.243 24.81C63.9437 21.584 62.6226 18.183 59.6344 16.7801C58.0971 16.0582 56.5065 15.4382 54.8721 14.9266L54.2262 14.7244C46.4799 12.2995 38.1776 12.2995 30.4312 14.7244L29.7853 14.9266C28.9212 15.1971 28.0693 15.4979 27.231 15.828C24.0093 17.0969 22.5113 20.6518 23.2463 24.0356L28.9865 50.4623C29.1863 51.3819 30 52.0378 30.9409 52.0378"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24.0102 27.5737C22.1663 27.4855 20.2719 28.0585 18.7115 29.3788C15.7117 31.9172 15.1201 36.3142 17.3425 39.5551L23.426 48.427C24.6799 50.2555 26.7545 51.3484 28.9716 51.3484C29.1163 51.3484 29.2595 51.344 29.4012 51.3353"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M63.2429 24.81C63.9436 21.584 62.6225 18.183 59.6343 16.7801C58.097 16.0582 56.5064 15.4382 54.8721 14.9266L54.2261 14.7244C46.4798 12.2995 38.1775 12.2996 30.4311 14.7244L29.7852 14.9266C28.9211 15.1971 28.0692 15.4979 27.231 15.8281C24.0092 17.0969 22.5112 20.6518 23.2462 24.0356L28.9864 50.4623C29.0281 50.6542 29.0965 50.8346 29.1873 51H57.47C57.5608 50.8346 57.6292 50.6542 57.6709 50.4623L63.2429 24.81Z"
            fill="currentColor"
          />
          <path
            d="M57.3286 55H29.3286V66.0002C29.3286 67.1047 30.224 68.0002 31.3286 68.0002H55.3286C56.4332 68.0002 57.3286 67.1047 57.3286 66.0002V55Z"
            fill="currentColor"
          />
          <path
            d="M29.1759 51H26.8344C25.4669 50.5415 24.2634 49.6484 23.426 48.4272L17.3425 39.5553C15.1201 36.3144 15.7117 31.9173 18.7115 29.379C20.2719 28.0587 22.1663 27.4857 24.0102 27.5739L28.9864 50.4833C29.0264 50.6671 29.0908 50.8404 29.1759 51Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M29.3286 54C29.3286 52.8954 30.224 52 31.3286 52H55.3286C56.4332 52 57.3286 52.8954 57.3286 54V66C57.3286 67.1046 56.4332 68 55.3286 68H31.3286C30.224 68 29.3286 67.1046 29.3286 66V54Z"
            fill="#F2994A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M59.6344 16.7801C62.6226 18.183 63.9437 21.584 63.243 24.81L57.671 50.4623C57.4712 51.3819 56.6575 52.0378 55.7165 52.0378H30.9409C30 52.0378 29.1863 51.3819 28.9865 50.4623L23.2463 24.0356C22.5113 20.6518 24.0093 17.0969 27.231 15.828C28.0693 15.4979 28.9212 15.1971 29.7853 14.9266L30.4312 14.7244C38.1776 12.2995 46.4799 12.2995 54.2262 14.7244L54.8721 14.9266C56.5065 15.4382 58.0971 16.0582 59.6344 16.7801Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.0102 27.5737C22.1663 27.4855 20.2719 28.0585 18.7115 29.3788C15.7117 31.9172 15.1201 36.3142 17.3425 39.5551L23.426 48.427C24.6799 50.2555 26.7545 51.3484 28.9716 51.3484C29.1163 51.3484 29.2595 51.344 29.4012 51.3353C29.2016 51.0948 29.0564 50.8051 28.9864 50.4832L24.0102 27.5737Z"
            fill="#F2994A"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M29.3286 54.0002C29.3286 52.8956 30.224 52.0002 31.3286 52.0002H55.3286C56.4332 52.0002 57.3286 52.8956 57.3286 54.0002V66.0002C57.3286 67.1047 56.4332 68.0002 55.3286 68.0002H31.3286C30.224 68.0002 29.3286 67.1047 29.3286 66.0002V54.0002Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M59.6343 16.7801C62.6225 18.183 63.9436 21.584 63.2429 24.81L57.6709 50.4623C57.4711 51.3819 56.6574 52.0378 55.7164 52.0378H30.9409C29.9999 52.0378 29.1862 51.3819 28.9864 50.4623L23.2462 24.0356C22.5112 20.6518 24.0092 17.0969 27.231 15.828C28.0692 15.4979 28.9211 15.1971 29.7852 14.9266L30.4311 14.7244C38.1775 12.2995 46.4798 12.2995 54.2261 14.7244L54.8721 14.9266C56.5064 15.4382 58.097 16.0582 59.6343 16.7801Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24.0102 27.5739C22.1663 27.4857 20.2719 28.0587 18.7115 29.379C15.7117 31.9173 15.1201 36.3144 17.3425 39.5553L23.426 48.4272C24.6799 50.2557 26.7545 51.3486 28.9716 51.3486C29.1163 51.3486 29.2595 51.3442 29.4012 51.3355C29.2016 51.095 29.0564 50.8053 28.9864 50.4833L24.0102 27.5739Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M29.3286 54.0002C29.3286 52.8956 30.224 52.0002 31.3286 52.0002H55.3286C56.4332 52.0002 57.3286 52.8956 57.3286 54.0002V66.0002C57.3286 67.1047 56.4332 68.0002 55.3286 68.0002H31.3286C30.224 68.0002 29.3286 67.1047 29.3286 66.0002V54.0002Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M59.6343 16.7801C62.6225 18.183 63.9436 21.584 63.2429 24.81L57.6709 50.4623C57.4711 51.3819 56.6574 52.0378 55.7164 52.0378H30.9409C29.9999 52.0378 29.1862 51.3819 28.9864 50.4623L23.2462 24.0356C22.5112 20.6518 24.0092 17.0969 27.231 15.828C28.0692 15.4979 28.9211 15.1971 29.7852 14.9266L30.4311 14.7244C38.1775 12.2995 46.4798 12.2995 54.2261 14.7244L54.8721 14.9266C56.5064 15.4382 58.097 16.0582 59.6343 16.7801Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24.0102 27.5739C22.1663 27.4857 20.2719 28.0587 18.7115 29.379C15.7117 31.9173 15.1201 36.3144 17.3425 39.5553L23.426 48.4272C24.6799 50.2557 26.7545 51.3486 28.9716 51.3486C29.1163 51.3486 29.2595 51.3442 29.4012 51.3355C29.2016 51.095 29.0564 50.8053 28.9864 50.4833L24.0102 27.5739Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.4073 53.2073C25.1401 52.7942 23.1039 51.4939 21.7766 49.5582L15.6931 40.6864C12.8903 36.599 13.6364 31.0535 17.4197 27.8522C18.6739 26.791 20.1043 26.1116 21.5803 25.7881L21.2918 24.4601C20.3906 20.3111 22.1917 15.6632 26.4981 13.9672C27.3808 13.6195 28.2779 13.3028 29.1878 13.0179L29.8337 12.8157C37.9691 10.2691 46.6883 10.2691 54.8237 12.8157L55.4696 13.0179C57.1906 13.5566 58.8655 14.2096 60.4844 14.9697C64.4714 16.8416 66.0574 21.2754 65.1974 25.2345L59.6254 50.8869C59.5075 51.4293 59.2829 51.9258 58.9764 52.3564C59.2027 52.8578 59.3287 53.4143 59.3287 54.0002V66.0002C59.3287 68.2093 57.5378 70.0002 55.3287 70.0002H31.3287C29.1196 70.0002 27.3287 68.2093 27.3287 66.0002V54.0002C27.3287 53.7287 27.3557 53.4636 27.4073 53.2073ZM53.6287 16.6331C46.2714 14.33 38.386 14.33 31.0287 16.6331L30.3828 16.8353C29.5644 17.0914 28.7577 17.3763 27.9639 17.6889C25.8268 18.5306 24.6319 20.9926 25.2007 23.611L30.9369 50.0191C31.0658 50.0066 31.1965 50.0002 31.3287 50.0002H55.3287C55.4609 50.0002 55.5916 50.0066 55.7206 50.0191L61.2886 24.3854C61.83 21.8927 60.7737 19.5245 58.7844 18.5904C57.3286 17.9069 55.8224 17.3197 54.2747 16.8353L53.6287 16.6331ZM31.3287 66.0002V54.0378H55.3287V66.0002H31.3287ZM20.0035 30.9058C20.7383 30.284 21.5683 29.8876 22.425 29.6978L26.5481 48.6795C25.9714 48.3349 25.4666 47.8664 25.0756 47.2961L18.992 38.4242C17.3501 36.0298 17.7871 32.7812 20.0035 30.9058Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-boxing-glove', CoreBoxingGlove)
export default CoreBoxingGlove
