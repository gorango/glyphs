
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CorePhoneRemove = {
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
            d="M55.8074 62.4657C55.0938 63.8662 53.6239 64.7361 52.0613 64.5658C51.3897 64.4926 50.7188 64.403 50.0491 64.297C41.3208 62.9145 33.2542 58.8044 27.0054 52.5556C20.7566 46.3068 16.6465 38.2402 15.2641 29.5119C15.1581 28.8427 15.0685 28.1722 14.9953 27.5011C14.825 25.9384 15.6949 24.4685 17.0955 23.7549L23.2248 20.6319C25.597 19.4232 28.4673 20.8331 29.3015 23.3613C29.8075 24.8948 30.405 26.4037 31.0934 27.88C31.4384 28.6197 31.8043 29.3472 32.1904 30.0618C33.1045 31.7536 32.4879 33.9236 30.7373 34.7193C28.1948 35.875 27.5892 39.2144 29.5641 41.1892L38.3718 49.9969C40.3466 51.9718 43.686 51.3662 44.8417 48.8237C45.6813 46.9766 47.9571 46.3078 49.7642 47.2304C50.2024 47.4541 50.6451 47.6703 51.0923 47.8788C52.7867 48.6689 54.5242 49.3394 56.2924 49.889C58.8666 50.6893 60.3278 53.5938 59.1039 55.9958L55.8074 62.4657Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M64.7583 23.8467H44.7583"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <g opacity="0.9"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.0923 47.379C50.6451 47.1705 50.2023 46.9543 49.7642 46.7306C47.9571 45.8079 45.6813 46.4767 44.8417 48.3239C43.686 50.8664 40.3466 51.4719 38.3718 49.4971L38.2105 49.3359L29.7253 40.8506L29.564 40.6894C27.5892 38.7146 28.1948 35.3752 30.7373 34.2195C32.4879 33.4238 33.1045 31.2538 32.1904 29.562C31.8042 28.8474 31.4384 28.1199 31.0934 27.3801C30.405 25.9039 29.8075 24.395 29.3015 22.8615C28.4673 20.3333 25.597 18.9234 23.2248 20.132L16.9733 23.3174C15.9441 23.8417 15.3055 24.9188 15.4062 26.0694C16.2534 35.7531 20.4854 44.8287 27.359 51.7022C34.2325 58.5758 43.3081 62.8078 52.9917 63.655C54.1432 63.7557 55.221 63.1167 55.7457 62.0868L59.1039 55.4959C60.3278 53.094 58.8666 50.1894 56.2924 49.3892C54.5242 48.8395 52.7867 48.1691 51.0923 47.379Z" fill="currentColor"/><path d="M51.0923 47.379L51.9375 45.5664L51.0923 47.379ZM38.3718 49.4971L39.786 48.0829L38.3718 49.4971ZM38.2105 49.3359L36.7963 50.7501L38.2105 49.3359ZM31.0934 27.3801L29.2808 28.2254L31.0934 27.3801ZM59.1039 55.4959L57.3219 54.588L59.1039 55.4959ZM32.1904 29.562L33.9499 28.6113L32.1904 29.562ZM55.7457 62.0868L57.5277 62.9948L55.7457 62.0868ZM29.3015 22.8615L27.4023 23.4882L29.3015 22.8615ZM48.8548 48.5118C49.3141 48.7464 49.7782 48.973 50.247 49.1916L51.9375 45.5664C51.5119 45.3679 51.0906 45.1622 50.6737 44.9493L48.8548 48.5118ZM36.9576 50.9113C39.9198 53.8736 44.9289 52.9653 46.6624 49.1515L43.0209 47.4963C42.4431 48.7675 40.7734 49.0703 39.786 48.0829L36.9576 50.9113ZM36.7963 50.7501L36.9576 50.9113L39.786 48.0829L39.6248 47.9217L36.7963 50.7501ZM28.3111 42.2648L36.7963 50.7501L39.6248 47.9217L31.1395 39.4364L28.3111 42.2648ZM28.1498 42.1036L28.3111 42.2648L31.1395 39.4364L30.9783 39.2752L28.1498 42.1036ZM29.9097 32.3988C26.0959 34.1323 25.1876 39.1414 28.1498 42.1036L30.9783 39.2752C29.9908 38.2878 30.2936 36.6181 31.5649 36.0402L29.9097 32.3988ZM29.2808 28.2254C29.6424 29.0008 30.026 29.7636 30.4308 30.5127L33.9499 28.6113C33.5825 27.9312 33.2343 27.2389 32.906 26.5349L29.2808 28.2254ZM27.4023 23.4882C27.9327 25.0959 28.5591 26.6778 29.2808 28.2254L32.906 26.5349C32.2509 25.13 31.6823 23.6941 31.2008 22.2348L27.4023 23.4882ZM22.3168 18.35L16.0653 21.5353L17.8813 25.0994L24.1328 21.914L22.3168 18.35ZM28.7732 50.288C22.2321 43.7469 18.2048 35.1104 17.3986 25.8951L13.4138 26.2437C14.302 36.3958 18.7387 45.9104 25.9447 53.1164L28.7732 50.288ZM53.1661 61.6626C43.9508 60.8564 35.3142 56.8291 28.7732 50.288L25.9447 53.1164C33.1508 60.3225 42.6653 64.7592 52.8174 65.6474L53.1661 61.6626ZM57.5277 62.9948L60.8859 56.4039L57.3219 54.588L53.9637 61.1788L57.5277 62.9948ZM50.247 49.1916C52.0233 50.0199 53.8449 50.7228 55.6986 51.299L56.8861 47.4793C55.2035 46.9563 53.55 46.3183 51.9375 45.5664L50.247 49.1916ZM60.8859 56.4039C62.7531 52.7394 60.4684 48.593 56.8861 47.4793L55.6986 51.299C57.2648 51.7859 57.9025 53.4486 57.3219 54.588L60.8859 56.4039ZM50.6737 44.9493C47.9612 43.5644 44.382 44.5019 43.0209 47.4963L46.6624 49.1515C46.9805 48.4516 47.953 48.0515 48.8548 48.5118L50.6737 44.9493ZM16.0653 21.5353C14.3575 22.4055 13.2375 24.2288 13.4138 26.2437L17.3986 25.8951C17.3735 25.6087 17.5308 25.2779 17.8813 25.0994L16.0653 21.5353ZM31.5649 36.0402C34.4757 34.7171 35.3583 31.2177 33.9499 28.6113L30.4308 30.5127C30.8507 31.2899 30.5001 32.1304 29.9097 32.3988L31.5649 36.0402ZM52.8174 65.6474C54.8332 65.8237 56.6572 64.7033 57.5277 62.9948L53.9637 61.1788C53.7848 61.53 53.4532 61.6877 53.1661 61.6626L52.8174 65.6474ZM31.2008 22.2348C30.0386 18.7125 25.9347 16.5066 22.3168 18.35L24.1328 21.914C25.2593 21.3401 26.896 21.954 27.4023 23.4882L31.2008 22.2348Z" fill="currentColor"/></g>
          <path
            d="M44.7583 23.3467L53.8492 23.3467L55.6674 23.3467L64.7583 23.3467"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <g opacity="0.9"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.0923 47.379C50.6451 47.1705 50.2023 46.9543 49.7642 46.7306C47.9571 45.8079 45.6813 46.4767 44.8417 48.3239C43.686 50.8664 40.3466 51.4719 38.3718 49.4971L38.2105 49.3359L29.7253 40.8506L29.564 40.6894C27.5892 38.7146 28.1948 35.3752 30.7373 34.2195C32.4879 33.4238 33.1045 31.2538 32.1904 29.562C31.8042 28.8474 31.4384 28.1199 31.0934 27.3801C30.405 25.9039 29.8075 24.395 29.3015 22.8615C28.4673 20.3333 25.597 18.9234 23.2248 20.132L16.9733 23.3173C15.9441 23.8417 15.3055 24.9188 15.4062 26.0694C16.2534 35.7531 20.4854 44.8287 27.359 51.7022C34.2325 58.5758 43.3081 62.8078 52.9917 63.655C54.1432 63.7557 55.221 63.1167 55.7457 62.0868L59.1039 55.4959C60.3278 53.094 58.8666 50.1894 56.2924 49.3892C54.5242 48.8395 52.7867 48.1691 51.0923 47.379Z" fill="#EB5757"/></g>
        `}
        ${variant === "duo" && svg`
          <path
            d="M51.0924 47.8788C50.6452 47.6703 50.2024 47.4541 49.7643 47.2304C47.9572 46.3078 45.6814 46.9766 44.8417 48.8237C43.6861 51.3662 40.3467 51.9718 38.3718 49.9969L29.5641 41.1892C27.5893 39.2144 28.1948 35.875 30.7373 34.7193C32.488 33.9236 33.1046 31.7536 32.1904 30.0618C31.8043 29.3472 31.4384 28.6197 31.0935 27.88C30.4051 26.4037 29.8076 24.8948 29.3016 23.3613C28.4674 20.8331 25.5971 19.4232 23.2249 20.6319L16.9734 23.8172C15.9442 24.3416 15.3056 25.4186 15.4063 26.5693C16.2535 36.2529 20.4855 45.3285 27.359 52.202C34.2326 59.0756 43.3081 63.3076 52.9918 64.1548C54.1433 64.2555 55.2211 63.6165 55.7458 62.5866L59.104 55.9958C60.3279 53.5938 58.8667 50.6893 56.2924 49.889C54.5243 49.3393 52.7867 48.6689 51.0924 47.8788Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M64.7584 23.8466H44.7584M51.0924 47.8788C50.6452 47.6703 50.2024 47.4541 49.7643 47.2304C47.9572 46.3078 45.6814 46.9766 44.8417 48.8237C43.6861 51.3662 40.3467 51.9718 38.3718 49.9969L29.5641 41.1892C27.5893 39.2144 28.1948 35.875 30.7373 34.7193C32.488 33.9236 33.1046 31.7536 32.1904 30.0618C31.8043 29.3472 31.4384 28.6197 31.0935 27.88C30.4051 26.4037 29.8076 24.8948 29.3016 23.3613C28.4674 20.8331 25.5971 19.4232 23.2249 20.6319L16.9734 23.8172C15.9442 24.3416 15.3056 25.4186 15.4063 26.5693C16.2535 36.2529 20.4855 45.3285 27.359 52.202C34.2326 59.0756 43.3081 63.3076 52.9918 64.1548C54.1433 64.2555 55.2211 63.6165 55.7458 62.5866L59.104 55.9958C60.3279 53.5938 58.8667 50.6893 56.2924 49.889C54.5243 49.3393 52.7867 48.6689 51.0924 47.8788Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.4023 23.4883C26.8961 21.9541 25.2593 21.3402 24.1328 21.9141L18.0035 25.0372C17.2783 25.4067 16.9109 26.1181 16.9836 26.7846C17.0533 27.4236 17.1385 28.0621 17.2394 28.6993C18.5558 37.0105 22.4695 44.6915 28.4196 50.6417C34.3698 56.5918 42.0508 60.5055 50.362 61.8218C50.9997 61.9229 51.6386 62.0082 52.2781 62.0779C52.9445 62.1505 53.6559 61.7832 54.0254 61.0579L57.3219 54.5881C57.9025 53.4487 57.2648 51.786 55.6987 51.2991C53.8449 50.7229 52.0234 50.02 50.2471 49.1917C49.7783 48.9731 49.3141 48.7465 48.8548 48.5119C47.9531 48.0515 46.9806 48.4517 46.6624 49.1516C44.9289 52.9654 39.9198 53.8737 36.9576 50.9114L28.1499 42.1037C25.1876 39.1415 26.0959 34.1324 29.9097 32.3989C30.5001 32.1305 30.8508 31.29 30.4308 30.5128C30.026 29.7637 29.6424 29.0009 29.2808 28.2255C28.5592 26.6779 27.9327 25.0959 27.4023 23.4883ZM22.3169 18.3501C25.9347 16.5067 30.0386 18.7126 31.2008 22.2349C31.6823 23.6942 32.251 25.1301 32.9061 26.535C33.2343 27.239 33.5825 27.9313 33.95 28.6114C35.3583 31.2178 34.4757 34.7172 31.5649 36.0403C30.2937 36.6182 29.9909 38.2879 30.9783 39.2753L39.786 48.083C40.7734 49.0704 42.4431 48.7676 43.021 47.4964C44.3821 44.502 47.9612 43.5645 50.6737 44.9494C51.0906 45.1623 51.512 45.368 51.9375 45.5665C53.55 46.3184 55.2035 46.9564 56.8861 47.4794C60.4685 48.5931 62.7531 52.7395 60.886 56.404L57.5894 62.8739C56.5317 64.9497 54.3034 66.3223 51.8446 66.0543C51.1409 65.9776 50.4379 65.8837 49.7363 65.7726C40.5908 64.3241 32.1386 60.0175 25.5912 53.4701C19.0438 46.9227 14.7372 38.4705 13.2887 29.325C13.1776 28.6239 13.0838 27.9214 13.0071 27.2181C12.739 24.7593 14.1116 22.5309 16.1875 21.4732L22.3169 18.3501Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.7583 23.3467C42.7583 22.2421 43.6537 21.3467 44.7583 21.3467H64.7583C65.8629 21.3467 66.7583 22.2421 66.7583 23.3467C66.7583 24.4512 65.8629 25.3467 64.7583 25.3467H44.7583C43.6537 25.3467 42.7583 24.4512 42.7583 23.3467Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-phone-remove', CorePhoneRemove)
export default CorePhoneRemove
