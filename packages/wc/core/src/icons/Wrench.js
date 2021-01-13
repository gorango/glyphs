
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreWrench = {
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
            d="M34.0008 5.6123C33.3888 5.86758 32.7893 6.16358 32.2061 6.50029C27.383 9.2849 24.4119 14.4311 24.4119 20.0003C24.4119 25.417 27.2226 30.4336 31.8142 33.2663C31.7922 33.5079 31.781 33.7525 31.781 33.9998L31.781 65.9998C31.781 70.4181 35.3627 73.9998 39.781 73.9998C44.1993 73.9998 47.781 70.4181 47.781 65.9998L47.781 33.9998C47.781 33.8375 47.7762 33.6763 47.7666 33.5164C47.7759 33.511 47.7852 33.5057 47.7945 33.5003C52.6176 30.7157 55.5888 25.5695 55.5888 20.0003C55.5888 14.4311 52.6176 9.28489 47.7945 6.50029C47.2117 6.16376 46.6124 5.8679 46.0008 5.61271V15.9993H45.9964V20.4622L40.0007 23.9238L34.005 20.4622V15.9993H34.0008V5.6123Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.1849 10.6839L32.1849 7.7959C31.5729 8.05118 30.9734 8.34717 30.3902 8.68388C25.5671 11.4685 22.5959 16.6147 22.596 22.1839C22.596 27.6006 25.4066 32.6172 29.9983 35.4499C29.9763 35.6915 29.9651 35.9361 29.9651 36.1834L29.9651 68.1834C29.9651 72.6017 33.5468 76.1834 37.9651 76.1834C42.3834 76.1834 45.9651 72.6017 45.9651 68.1834L45.9651 36.1834C45.9651 36.0211 45.9603 35.8599 45.9507 35.7C45.96 35.6946 45.9693 35.6892 45.9786 35.6839C50.8017 32.8993 53.7729 27.7531 53.7729 22.1839C53.7729 16.6147 50.8017 11.4685 45.9786 8.68388C45.3957 8.34735 44.7965 8.05149 44.1849 7.79631L44.1849 10.6839L44.1849 11.1839L44.1849 18.1829L44.1805 18.1829L44.1805 22.6458L38.1848 26.1074L32.1891 22.6458L32.1891 18.1829L32.1849 18.1829L32.1849 11.1839L32.1849 10.6839Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.1849 10.6839L32.1849 7.7959C31.5729 8.05118 30.9734 8.34717 30.3902 8.68388C25.5671 11.4685 22.5959 16.6147 22.596 22.1839C22.596 27.6006 25.4066 32.6172 29.9983 35.4499C29.9763 35.6915 29.9651 35.9361 29.9651 36.1834L29.9651 68.1834C29.9651 72.6017 33.5468 76.1834 37.9651 76.1834C42.3834 76.1834 45.9651 72.6017 45.9651 68.1834L45.9651 36.1834C45.9651 36.0211 45.9603 35.8599 45.9507 35.7C45.96 35.6946 45.9693 35.6892 45.9786 35.6839C50.8017 32.8993 53.7729 27.7531 53.7729 22.1839C53.7729 16.6147 50.8017 11.4685 45.9786 8.68388C45.3957 8.34735 44.7965 8.05149 44.1849 7.79631L44.1849 10.6839L44.1849 11.1839L44.1849 18.1829L44.1805 18.1829L44.1805 22.6458L38.1848 26.1074L32.1891 22.6458L32.1891 18.1829L32.1849 18.1829L32.1849 11.1839L32.1849 10.6839Z"
            fill="#F2994A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.1602 8L32.1602 18.387H32.1645L32.1645 22.8499L38.1601 26.3115L44.1558 22.8499L44.1558 18.387H44.1602L44.1602 8.00041C44.7719 8.25559 45.3711 8.55145 45.954 8.88798C50.7771 11.6726 53.7482 16.8188 53.7482 22.388C53.7482 27.9572 50.7771 33.1034 45.954 35.888C41.1309 38.6726 35.1886 38.6726 30.3655 35.888C25.5424 33.1034 22.5713 27.9572 22.5713 22.388C22.5713 16.8188 25.5424 11.6726 30.3655 8.88798C30.9487 8.55127 31.5483 8.25528 32.1602 8Z"
            fill="#EB5757"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M34.0008 5.6123C33.3888 5.86758 32.7893 6.16358 32.2061 6.50029C27.383 9.2849 24.4119 14.4311 24.4119 20.0003C24.4119 25.417 27.2226 30.4336 31.8142 33.2663C31.7922 33.5079 31.781 33.7525 31.781 33.9998L31.781 65.9998C31.781 70.4181 35.3627 73.9998 39.781 73.9998C44.1993 73.9998 47.781 70.4181 47.781 65.9998L47.781 33.9998C47.781 33.8375 47.7762 33.6763 47.7666 33.5164C47.7759 33.511 47.7852 33.5057 47.7945 33.5003C52.6176 30.7157 55.5888 25.5695 55.5888 20.0003C55.5888 14.4311 52.6176 9.28489 47.7945 6.50029C47.2117 6.16376 46.6124 5.8679 46.0008 5.61271V15.9993H45.9964V20.4622L40.0007 23.9238L34.005 20.4622V15.9993H34.0008V5.6123Z"
            fill="currentColor"
            fill-opacity="0.25"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.2942 6.13158C33.8508 6.50248 34.1851 7.12705 34.1851 7.79591L34.1851 18.0517C34.1879 18.0951 34.1894 18.1388 34.1894 18.1829L34.1894 21.4911L38.185 23.798L42.1807 21.4911V18.1829C42.1807 18.1378 42.1822 18.093 42.1851 18.0486L42.1851 7.79631C42.1851 7.12744 42.5195 6.50284 43.0761 6.13195C43.6328 5.76106 44.3379 5.69297 44.9552 5.95053C45.6455 6.2385 46.3215 6.5723 46.9789 6.95184C52.4208 10.0937 55.7731 15.9001 55.7731 22.1839C55.7731 28.0786 52.823 33.5532 47.9653 36.8022L47.9653 68.1834C47.9653 73.7062 43.4882 78.1834 37.9653 78.1834C32.4425 78.1834 27.9653 73.7062 27.9653 68.1834L27.9653 36.4991C23.3692 33.2192 20.5962 27.899 20.5962 22.1839C20.5962 15.9001 23.9485 10.0937 29.3904 6.95184C30.0481 6.5721 30.7245 6.23815 31.4151 5.95007C32.0324 5.69256 32.7376 5.76068 33.2942 6.13158ZM46.1807 18.3172V22.6458C46.1807 23.3604 45.7995 24.0206 45.1807 24.3779L39.185 27.8395C38.5662 28.1967 37.8038 28.1967 37.185 27.8395L31.1894 24.3779C30.5706 24.0206 30.1894 23.3604 30.1894 22.6458L30.1894 18.3141C30.1866 18.2707 30.1851 18.227 30.1851 18.1829L30.1851 11.1994C26.6967 13.739 24.5962 17.8119 24.5962 22.1839C24.5962 26.9056 27.0463 31.2786 31.0486 33.7478C31.6943 34.1461 32.059 34.8754 31.9903 35.631C31.9738 35.8124 31.9653 35.9967 31.9653 36.1834L31.9653 68.1834C31.9653 71.4971 34.6516 74.1834 37.9653 74.1834C41.279 74.1834 43.9653 71.4971 43.9653 68.1834L43.9653 36.1834C43.9653 36.0608 43.9617 35.9393 43.9545 35.819C43.9094 35.0616 44.2967 34.3438 44.9546 33.9658L44.9788 33.9519C49.1831 31.5245 51.7731 27.0386 51.7731 22.1839C51.7731 17.8123 49.673 13.7398 46.1851 11.2001L46.1851 18.1829C46.1851 18.228 46.1836 18.2728 46.1807 18.3172Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-wrench', CoreWrench)
export default CoreWrench
