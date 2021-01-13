
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreAlarmMinus = {
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
            d="M31.2638 23.6087C36.6968 21.3583 42.8013 21.3583 48.2343 23.6087C53.6674 25.8592 57.9839 30.1757 60.2343 35.6087C62.4848 41.0418 62.4848 47.1463 60.2343 52.5793C57.9839 58.0123 53.6674 62.3288 48.2343 64.5793C42.8013 66.8297 36.6968 66.8297 31.2638 64.5793C25.8307 62.3289 21.5142 58.0123 19.2638 52.5793C17.0133 47.1463 17.0133 41.0418 19.2638 35.6087C21.5142 30.1757 25.8307 25.8592 31.2638 23.6087Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M15.749 67.916L23.9816 59.6831"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M63.749 67.9153L55.5168 59.6831"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M62.6963 13.2126C59.527 11.8998 55.9661 11.8998 52.7968 13.2126C51.5274 13.7384 50.3626 14.4575 49.3378 15.3343C48.2754 16.2434 48.8051 17.8605 50.1021 18.3829C50.1862 18.4167 50.2702 18.451 50.354 18.4858C57.1453 21.2988 62.541 26.6945 65.354 33.4858C65.681 34.2752 66.6816 34.5533 67.2605 33.9248C68.2806 32.8173 69.109 31.5299 69.6963 30.1121C71.009 26.9428 71.009 23.3819 69.6963 20.2126C68.3835 17.0433 65.8656 14.5253 62.6963 13.2126Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M30.3995 15.2247C31.4868 16.1305 30.9494 17.7713 29.6318 18.2878C29.4677 18.3522 29.304 18.4182 29.1408 18.4858C22.3495 21.2988 16.9539 26.6945 14.1408 33.4858C13.8643 34.1534 13.0113 34.3731 12.5266 33.8371C11.5433 32.7495 10.7429 31.4927 10.1711 30.1122C8.85833 26.943 8.85833 23.382 10.1711 20.2128C11.4838 17.0435 14.0018 14.5255 17.1711 13.2128C20.3404 11.9 23.9013 11.9 27.0706 13.2128C28.2865 13.7164 29.4066 14.3975 30.3995 15.2247Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M50 44.5H30"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M62.7598 13.2126C59.5905 11.8998 56.0295 11.8998 52.8603 13.2126C51.5909 13.7384 50.4261 14.4575 49.4013 15.3343C48.3389 16.2434 48.8686 17.8605 50.1656 18.3829C50.2497 18.4167 50.3337 18.451 50.4175 18.4858C57.2088 21.2988 62.6044 26.6945 65.4175 33.4858C65.7445 34.2752 66.7451 34.5533 67.324 33.9248C68.344 32.8173 69.1725 31.5299 69.7598 30.1121C71.0725 26.9428 71.0725 23.3819 69.7598 20.2126C68.447 17.0433 65.929 14.5253 62.7598 13.2126Z"
            fill="currentColor"
          />
          <path
            d="M30.463 15.2247C31.5503 16.1305 31.0128 17.7713 29.6953 18.2878C29.5312 18.3522 29.3675 18.4182 29.2043 18.4858C22.413 21.2988 17.0173 26.6945 14.2043 33.4858C13.9277 34.1534 13.0748 34.3731 12.5901 33.8371C11.6068 32.7495 10.8064 31.4927 10.2346 30.1123C8.92181 26.943 8.92181 23.382 10.2346 20.2128C11.5473 17.0435 14.0653 14.5255 17.2346 13.2128C20.4038 11.9 23.9648 11.9 27.1341 13.2128C28.35 13.7164 29.4701 14.3975 30.463 15.2247Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.0798 57.4055L13.6911 65.7945C12.5196 66.9661 12.5196 68.8656 13.6912 70.0371C14.8628 71.2087 16.7623 71.2086 17.9339 70.037L26.2981 61.6725C27.8267 62.8479 29.5149 63.8285 31.3274 64.5793C36.7604 66.8297 42.8649 66.8297 48.2979 64.5793C50.1104 63.8285 51.7987 62.8478 53.3274 61.6724L61.6912 70.0362C62.8628 71.2078 64.7623 71.2078 65.9338 70.0362C67.1054 68.8646 67.1054 66.9651 65.9338 65.7935L57.5456 57.4053C58.6526 55.9307 59.5803 54.3117 60.2979 52.5793C62.5484 47.1462 62.5484 41.0417 60.2979 35.6087C58.0475 30.1757 53.731 25.8591 48.2979 23.6087C42.8649 21.3583 36.7604 21.3583 31.3274 23.6087C25.8943 25.8591 21.5778 30.1757 19.3274 35.6087C17.0769 41.0417 17.0769 47.1462 19.3274 52.5793C20.045 54.3118 20.9728 55.9308 22.0798 57.4055ZM30 42.5C28.8954 42.5 28 43.3954 28 44.5C28 45.6046 28.8954 46.5 30 46.5H50C51.1046 46.5 52 45.6046 52 44.5C52 43.3954 51.1046 42.5 50 42.5H30Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62.7598 13.2126C59.5905 11.8998 56.0295 11.8998 52.8603 13.2126C51.5909 13.7384 50.4261 14.4575 49.4013 15.3343C48.3389 16.2434 48.8686 17.8605 50.1656 18.3829C50.2497 18.4167 50.3336 18.451 50.4175 18.4858C57.2088 21.2988 62.6044 26.6945 65.4175 33.4858C65.7445 34.2752 66.7451 34.5533 67.324 33.9248C68.344 32.8173 69.1725 31.5299 69.7598 30.1121C71.0725 26.9428 71.0725 23.3819 69.7598 20.2126C68.447 17.0433 65.929 14.5253 62.7598 13.2126ZM30.463 15.2247C31.5503 16.1305 31.0128 17.7713 29.6953 18.2879C29.5312 18.3522 29.3675 18.4182 29.2043 18.4858C22.413 21.2988 17.0173 26.6945 14.2043 33.4858C13.9277 34.1534 13.0748 34.3731 12.5901 33.8371C11.6068 32.7495 10.8064 31.4927 10.2346 30.1122C8.92181 26.943 8.92181 23.382 10.2346 20.2128C11.5473 17.0435 14.0653 14.5255 17.2346 13.2128C20.4038 11.9 23.9648 11.9 27.1341 13.2128C28.35 13.7164 29.4701 14.3975 30.463 15.2247Z"
            fill="#4F4F4F"
          />
          <path
            d="M62.3983 69.3295C63.1793 70.1105 64.4457 70.1105 65.2267 69.3295C66.0078 68.5484 66.0078 67.2821 65.2267 66.501L62.3983 69.3295ZM56.9946 58.2689C56.2135 57.4878 54.9472 57.4878 54.1661 58.2689C53.3851 59.0499 53.3851 60.3163 54.1661 61.0973L56.9946 58.2689ZM14.3983 66.502C13.6172 67.283 13.6172 68.5494 14.3983 69.3304C15.1794 70.1114 16.4457 70.1114 17.2267 69.3303L14.3983 66.502ZM25.4594 61.0974C26.2404 60.3163 26.2404 59.05 25.4593 58.269C24.6782 57.4879 23.4119 57.488 22.6309 58.269L25.4594 61.0974ZM65.2267 66.501L56.9946 58.2689L54.1661 61.0973L62.3983 69.3295L65.2267 66.501ZM17.2267 69.3303L25.4594 61.0974L22.6309 58.269L14.3983 66.502L17.2267 69.3303Z"
            fill="#4F4F4F"
          />
          <path
            d="M31.3272 23.609C36.7603 21.3585 42.8647 21.3585 48.2978 23.609C53.7308 25.8594 58.0473 30.1759 60.2978 35.609C62.5482 41.042 62.5482 47.1465 60.2978 52.5795C58.0473 58.0126 53.7308 62.3291 48.2978 64.5795C42.8647 66.83 36.7603 66.83 31.3272 64.5795C25.8942 62.3291 21.5777 58.0126 19.3272 52.5795C17.0768 47.1465 17.0768 41.042 19.3272 35.609C21.5777 30.1759 25.8942 25.8594 31.3272 23.609Z"
            fill="#F2F2F2"
            stroke="#BDBDBD"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M30 44.5L39.0909 44.5L40.9091 44.5L50 44.5"
            stroke="#219653"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M62.7598 13.2126C59.5905 11.8998 56.0295 11.8998 52.8603 13.2126C51.5909 13.7384 50.4261 14.4575 49.4013 15.3343C48.3389 16.2434 48.8686 17.8605 50.1656 18.3829C50.2497 18.4167 50.3337 18.451 50.4175 18.4858C57.2088 21.2988 62.6044 26.6945 65.4175 33.4858C65.7445 34.2752 66.7451 34.5533 67.324 33.9248C68.344 32.8173 69.1725 31.5299 69.7598 30.1121C71.0725 26.9428 71.0725 23.3819 69.7598 20.2126C68.447 17.0433 65.929 14.5253 62.7598 13.2126Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30.463 15.2247C31.5503 16.1305 31.0128 17.7713 29.6953 18.2878C29.5312 18.3522 29.3675 18.4182 29.2043 18.4858C22.413 21.2988 17.0173 26.6945 14.2043 33.4858C13.9277 34.1534 13.0748 34.3731 12.5901 33.8371C11.6068 32.7495 10.8064 31.4927 10.2346 30.1122C8.92181 26.943 8.92181 23.382 10.2346 20.2128C11.5473 17.0435 14.0653 14.5255 17.2346 13.2128C20.4038 11.9 23.9648 11.9 27.1341 13.2128C28.35 13.7164 29.4701 14.3975 30.463 15.2247Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M31.3274 23.6087C36.7604 21.3583 42.8649 21.3583 48.2979 23.6087C53.731 25.8591 58.0475 30.1757 60.2979 35.6087C62.5484 41.0417 62.5484 47.1462 60.2979 52.5793C58.0475 58.0123 53.731 62.3288 48.2979 64.5793C42.8649 66.8297 36.7604 66.8297 31.3274 64.5793C25.8943 62.3288 21.5778 58.0123 19.3274 52.5793C17.0769 47.1462 17.0769 41.0417 19.3274 35.6087C21.5778 30.1757 25.8943 25.8591 31.3274 23.6087Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M63.8125 67.9149L55.5804 59.6827M15.8125 67.9158L24.0451 59.6828M50 44.4998H30.0001M52.8603 13.2126C56.0295 11.8998 59.5905 11.8998 62.7598 13.2126C65.929 14.5253 68.447 17.0433 69.7598 20.2126C71.0725 23.3819 71.0725 26.9428 69.7598 30.1121C69.1725 31.5299 68.344 32.8173 67.324 33.9248C66.7451 34.5533 65.7445 34.2752 65.4175 33.4858C62.6044 26.6945 57.2088 21.2988 50.4175 18.4858C50.3337 18.451 50.2497 18.4167 50.1656 18.3829C48.8686 17.8605 48.3389 16.2434 49.4013 15.3343C50.4261 14.4575 51.5909 13.7384 52.8603 13.2126ZM29.2043 18.4858C29.3675 18.4182 29.5312 18.3522 29.6953 18.2878C31.0128 17.7713 31.5503 16.1305 30.463 15.2247C29.4701 14.3975 28.35 13.7164 27.1341 13.2128C23.9648 11.9 20.4038 11.9 17.2346 13.2128C14.0653 14.5255 11.5473 17.0435 10.2346 20.2128C8.92181 23.382 8.92181 26.943 10.2346 30.1122C10.8064 31.4927 11.6068 32.7495 12.5901 33.8371C13.0748 34.3731 13.9277 34.1534 14.2043 33.4858C17.0173 26.6945 22.413 21.2988 29.2043 18.4858ZM19.3274 35.6087C21.5778 30.1757 25.8943 25.8591 31.3274 23.6087C36.7604 21.3583 42.8649 21.3583 48.2979 23.6087C53.731 25.8591 58.0475 30.1757 60.2979 35.6087C62.5484 41.0417 62.5484 47.1462 60.2979 52.5793C58.0475 58.0123 53.731 62.3288 48.2979 64.5793C42.8649 66.8297 36.7604 66.8297 31.3274 64.5793C25.8943 62.3288 21.5778 58.0123 19.3274 52.5793C17.0769 47.1462 17.0769 41.0417 19.3274 35.6087Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M63.5251 11.3648C59.8658 9.84909 55.7542 9.84909 52.0949 11.3648C50.6294 11.9719 49.2843 12.8022 48.101 13.8147C46.9171 14.8277 46.6251 16.2894 46.9714 17.5381C47.3026 18.7322 48.2031 19.7486 49.4184 20.238C49.4964 20.2695 49.5743 20.3013 49.6521 20.3335C55.9534 22.9436 60.9597 27.9499 63.5697 34.2511C63.9795 35.2403 64.824 35.9387 65.7972 36.1788C66.8018 36.4266 67.9661 36.1798 68.7951 35.2798C69.9728 34.001 70.9295 32.5144 71.6075 30.8775C73.1233 27.2181 73.1233 23.1066 71.6075 19.4472C70.0918 15.7879 67.1845 12.8806 63.5251 11.3648ZM53.6256 15.0604C56.3048 13.9506 59.3152 13.9506 61.9944 15.0604C64.6736 16.1701 66.8022 18.2987 67.912 20.978C69.0218 23.6572 69.0218 26.6675 67.912 29.3467C67.5954 30.1109 67.196 30.8303 66.7246 31.494C63.587 24.7906 58.0505 19.4827 51.1829 16.638C51.1343 16.6179 51.0858 16.5979 51.0372 16.5781C51.8193 15.961 52.6888 15.4484 53.6256 15.0604Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.8994 11.365C24.2401 9.84925 20.1285 9.84925 16.4692 11.365C12.8099 12.8807 9.90255 15.7881 8.38681 19.4474C6.87106 23.1067 6.87106 27.2183 8.38681 30.8776C9.04699 32.4714 9.97126 33.9227 11.1066 35.1784C12.761 37.0082 15.3226 36.0121 16.052 34.2511C18.6621 27.9499 23.6684 22.9436 29.9697 20.3335C30.1211 20.2708 30.273 20.2096 30.4253 20.1499C31.6592 19.6661 32.5739 18.6418 32.9082 17.437C33.2583 16.175 32.9549 14.6975 31.7432 13.6881C30.5967 12.7329 29.3033 11.9465 27.8994 11.365ZM17.9999 15.0605C20.6791 13.9507 23.6895 13.9507 26.3687 15.0605C27.255 15.4277 28.081 15.9062 28.8298 16.4793C28.6992 16.5313 28.5689 16.5842 28.4389 16.638C21.6814 19.4371 16.2126 24.6211 13.0499 31.1728C12.6731 30.6001 12.3484 29.9893 12.0823 29.3469C10.9726 26.6677 10.9726 23.6573 12.0823 20.9781C13.1921 18.2989 15.3207 16.1703 17.9999 15.0605Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M30.0001 42.4998C28.8955 42.4998 28.0001 43.3952 28.0001 44.4998C28.0001 45.6044 28.8955 46.4998 30.0001 46.4998H50C51.1046 46.4998 52 45.6044 52 44.4998C52 43.3952 51.1046 42.4998 50 42.4998H30.0001Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62.1457 53.3446C61.1958 55.6379 59.9082 57.7487 58.3431 59.617L65.2267 66.5006C66.0078 67.2817 66.0078 68.548 65.2267 69.3291C64.4457 70.1101 63.1793 70.1101 62.3983 69.3291L55.5295 62.4603C53.6138 64.0997 51.4362 65.4441 49.0633 66.427C43.1402 68.8804 36.4851 68.8804 30.562 66.427C28.1891 65.4441 26.0116 64.0998 24.096 62.4604L17.2267 69.3299C16.4457 70.111 15.1794 70.111 14.3983 69.33C13.6173 68.549 13.6172 67.2826 14.3983 66.5016L21.2824 59.6172C19.7172 57.7489 18.4295 55.638 17.4796 53.3446C15.0262 47.4215 15.0262 40.7664 17.4796 34.8433C19.933 28.9202 24.6389 24.2144 30.562 21.7609C36.4851 19.3075 43.1402 19.3075 49.0633 21.7609C54.9864 24.2144 59.6923 28.9202 62.1457 34.8433C64.5991 40.7664 64.5991 47.4215 62.1457 53.3446ZM54.1661 58.2685L54.1849 58.25C55.9906 56.4167 57.4463 54.2374 58.4502 51.8139C60.4976 46.8709 60.4976 41.317 58.4502 36.3741C56.4027 31.4311 52.4755 27.5039 47.5326 25.4565C42.5896 23.409 37.0357 23.409 32.0927 25.4565C27.1497 27.5039 23.2226 31.4311 21.1751 36.3741C19.1277 41.317 19.1277 46.8709 21.1751 51.8139C22.1786 54.2365 23.6336 56.4151 25.4384 58.2479L25.4593 58.2686C25.4718 58.281 25.484 58.2936 25.4961 58.3063C27.3622 60.1861 29.5981 61.6982 32.0927 62.7315C37.0357 64.7789 42.5896 64.7789 47.5326 62.7315C50.0282 61.6978 52.2649 60.1849 54.1315 58.304C54.1371 58.2981 54.1427 58.2923 54.1483 58.2866C54.1542 58.2805 54.1602 58.2745 54.1661 58.2685Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-alarm-minus', CoreAlarmMinus)
export default CoreAlarmMinus
