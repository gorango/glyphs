
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CorePlaybackSpeed = {
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
            d="M40 68C36.323 68 32.682 67.2758 29.2849 65.8686C25.8877 64.4615 22.801 62.399 20.201 59.799C17.601 57.1989 15.5385 54.1123 14.1314 50.7151C12.7242 47.318 12 43.677 12 40C12 36.323 12.7242 32.682 14.1314 29.2849C15.5385 25.8877 17.601 22.801 20.201 20.201C22.8011 17.601 25.8877 15.5385 29.2849 14.1314C32.682 12.7242 36.323 12 40 12"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
            stroke-dasharray="1 8"
          />
          <path
            d="M40 12C47.4261 12 54.548 14.95 59.799 20.201C65.05 25.452 68 32.5739 68 40C68 47.4261 65.05 54.548 59.799 59.799C54.548 65.05 47.4261 68 40 68"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M49.9969 38.2442C51.3866 39.0023 51.3866 40.9978 49.9969 41.7558L34.1735 50.3867C32.8408 51.1137 31.2158 50.149 31.2158 48.6309L31.2158 31.3691C31.2158 29.851 32.8408 28.8864 34.1735 29.6133L49.9969 38.2442Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 15C39.8181 15 39.6363 15.002 39.4546 15.0059C37.7982 15.0421 36.426 13.7286 36.3899 12.0721C36.3537 10.4156 37.6673 9.04352 39.3237 9.00738C39.549 9.00246 39.7744 9 40 9C41.6569 9 43 10.3431 43 12C43 13.6569 41.6569 15 40 15ZM32.6478 12.8165C33.2483 14.3607 32.4833 16.0993 30.9391 16.6998C30.7697 16.7657 30.601 16.8334 30.4329 16.903C30.2649 16.9726 30.0976 17.044 29.9313 17.1172C28.4148 17.7845 26.6444 17.0961 25.9771 15.5795C25.3099 14.063 25.9983 12.2926 27.5148 11.6253C27.7211 11.5346 27.9284 11.4461 28.1368 11.3597C28.3452 11.2734 28.5544 11.1894 28.7644 11.1077C30.3086 10.5072 32.0473 11.2723 32.6478 12.8165ZM22.8047 17.6993C23.9505 18.8961 23.909 20.7951 22.7122 21.9409C22.5809 22.0665 22.451 22.1937 22.3223 22.3223C22.1937 22.451 22.0666 22.5809 21.9409 22.7122C20.7952 23.909 18.8961 23.9505 17.6993 22.8047C16.5024 21.659 16.461 19.76 17.6067 18.5631C17.7625 18.4003 17.9202 18.2392 18.0797 18.0797C18.2392 17.9202 18.4003 17.7625 18.5631 17.6067C19.76 16.461 21.659 16.5024 22.8047 17.6993ZM15.5795 25.9771C17.0961 26.6444 17.7845 28.4148 17.1172 29.9313C17.044 30.0976 16.9726 30.2649 16.903 30.4329C16.8334 30.601 16.7657 30.7697 16.6998 30.9391C16.0993 32.4833 14.3607 33.2483 12.8165 32.6478C11.2723 32.0473 10.5072 30.3086 11.1078 28.7644C11.1894 28.5544 11.2734 28.3452 11.3597 28.1368C11.4461 27.9284 11.5346 27.7211 11.6254 27.5148C12.2926 25.9983 14.063 25.3098 15.5795 25.9771ZM12.0721 36.3899C13.7286 36.426 15.0421 37.7981 15.0059 39.4546C15.002 39.6363 15 39.8181 15 40C15 40.1819 15.002 40.3637 15.0059 40.5454C15.0421 42.2018 13.7286 43.574 12.0721 43.6101C10.4156 43.6463 9.04352 42.3327 9.00738 40.6763C9.00246 40.451 9 40.2256 9 40C9 39.7744 9.00246 39.549 9.00738 39.3237C9.04352 37.6673 10.4156 36.3537 12.0721 36.3899ZM12.8165 47.3522C14.3607 46.7517 16.0993 47.5167 16.6998 49.0609C16.7657 49.2303 16.8334 49.399 16.903 49.5671C16.9726 49.7351 17.044 49.9024 17.1172 50.0687C17.7845 51.5852 17.0961 53.3556 15.5795 54.0229C14.063 54.6901 12.2926 54.0017 11.6253 52.4852C11.5346 52.2789 11.4461 52.0716 11.3597 51.8632C11.2734 51.6548 11.1894 51.4456 11.1077 51.2356C10.5072 49.6914 11.2723 47.9527 12.8165 47.3522ZM17.6993 57.1953C18.8961 56.0495 20.7951 56.091 21.9409 57.2878C22.0665 57.4191 22.1937 57.549 22.3223 57.6777C22.451 57.8063 22.5809 57.9334 22.7122 58.0591C23.909 59.2048 23.9505 61.1039 22.8047 62.3007C21.659 63.4976 19.76 63.539 18.5631 62.3933C18.4003 62.2375 18.2392 62.0798 18.0797 61.9203C17.9202 61.7608 17.7625 61.5997 17.6067 61.4369C16.461 60.24 16.5024 58.341 17.6993 57.1953ZM25.9771 64.4205C26.6444 62.9039 28.4148 62.2155 29.9313 62.8828C30.0976 62.956 30.2649 63.0274 30.4329 63.097C30.601 63.1666 30.7697 63.2343 30.9391 63.3002C32.4833 63.9007 33.2483 65.6393 32.6478 67.1835C32.0473 68.7277 30.3086 69.4928 28.7644 68.8922C28.5544 68.8106 28.3452 68.7266 28.1368 68.6403C27.9284 68.5539 27.7211 68.4654 27.5148 68.3746C25.9983 67.7074 25.3098 65.937 25.9771 64.4205ZM36.3899 67.9279C36.426 66.2714 37.7981 64.9579 39.4546 64.994C39.6363 64.998 39.8181 65 40 65C41.6569 65 43 66.3431 43 68C43 69.6569 41.6569 71 40 71C39.7744 71 39.549 70.9975 39.3237 70.9926C37.6673 70.9565 36.3537 69.5844 36.3899 67.9279Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37 12C37 10.3431 38.3431 9 40 9C48.2217 9 56.1067 12.2661 61.9203 18.0797C67.7339 23.8933 71 31.7783 71 40C71 48.2217 67.7339 56.1067 61.9203 61.9203C56.1067 67.7339 48.2217 71 40 71C38.3431 71 37 69.6569 37 68C37 66.3431 38.3431 65 40 65C46.6304 65 52.9893 62.3661 57.6777 57.6777C62.3661 52.9893 65 46.6304 65 40C65 33.3696 62.3661 27.0107 57.6777 22.3223C52.9893 17.6339 46.6304 15 40 15C38.3431 15 37 13.6569 37 12Z"
            fill="currentColor"
          />
          <path
            d="M49.9969 38.2442C51.3866 39.0022 51.3866 40.9978 49.9969 41.7558L34.1735 50.3867C32.8408 51.1137 31.2158 50.149 31.2158 48.6309V31.3691C31.2158 29.851 32.8408 28.8863 34.1735 29.6133L49.9969 38.2442Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M40 68C32.5739 68 25.452 65.05 20.201 59.799C14.95 54.548 12 47.4261 12 40C12 32.5739 14.95 25.452 20.201 20.201C25.452 14.95 32.5739 12 40 12"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
            stroke-dasharray="1 8"
          />
          <path
            d="M40 12C47.4261 12 54.548 14.95 59.799 20.201C65.05 25.452 68 32.5739 68 40C68 47.4261 65.05 54.548 59.799 59.799C54.548 65.05 47.4261 68 40 68"
            stroke="#56CCF2"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M49.9969 38.2442C51.3866 39.0022 51.3866 40.9978 49.9969 41.7558L34.1735 50.3867C32.8408 51.1137 31.2158 50.149 31.2158 48.6309L31.2158 31.3691C31.2158 29.851 32.8408 28.8863 34.1735 29.6133L49.9969 38.2442Z"
            fill="#9B51E0"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M68 40C68 55.464 55.464 68 40 68C24.536 68 12 55.464 12 40C12 24.536 24.536 12 40 12C55.464 12 68 24.536 68 40Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 68C32.5739 68 25.452 65.05 20.201 59.799C14.95 54.548 12 47.4261 12 40C12 32.5739 14.95 25.452 20.201 20.201C25.452 14.95 32.5739 12 40 12"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
            stroke-dasharray="1 8"
          />
          <path
            d="M40 12C47.4261 12 54.548 14.95 59.799 20.201C65.05 25.452 68 32.5739 68 40C68 47.4261 65.05 54.548 59.799 59.799C54.548 65.05 47.4261 68 40 68"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M49.9969 38.2442C51.3866 39.0023 51.3866 40.9978 49.9969 41.7558L34.1735 50.3867C32.8408 51.1137 31.2158 50.149 31.2158 48.6309L31.2158 31.3691C31.2158 29.851 32.8408 28.8864 34.1735 29.6133L49.9969 38.2442Z"
            fill="currentColor"
            fill-opacity="0.25"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M14 40C14 39.8108 14.0021 39.6217 14.0062 39.4328C14.0303 38.3285 13.1546 37.4137 12.0503 37.3896C10.946 37.3655 10.0312 38.2412 10.0071 39.3455C10.0024 39.5635 10 39.7817 10 40C10 40.2183 10.0024 40.4364 10.0071 40.6545C10.0312 41.7588 10.946 42.6345 12.0503 42.6104C13.1546 42.5863 14.0303 41.6715 14.0062 40.5672C14.0021 40.3783 14 40.1892 14 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M13.1789 48.2842C12.1494 48.6846 11.6394 49.8437 12.0398 50.8731C12.1188 51.0764 12.2001 51.2788 12.2836 51.4805C12.3671 51.6822 12.4528 51.8828 12.5407 52.0824C12.9855 53.0934 14.1658 53.5524 15.1768 53.1075C16.1878 52.6627 16.6468 51.4825 16.2019 50.4714C16.1258 50.2984 16.0515 50.1245 15.9791 49.9498C15.9067 49.775 15.8363 49.5995 15.7678 49.4234C15.3674 48.3939 14.2084 47.8839 13.1789 48.2842Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M13.1789 31.7158C14.2084 32.1161 15.3675 31.6061 15.7678 30.5766C15.8363 30.4005 15.9067 30.225 15.9791 30.0502C16.0515 29.8754 16.1258 29.7015 16.2019 29.5286C16.6468 28.5175 16.1878 27.3373 15.1768 26.8925C14.1658 26.4476 12.9855 26.9066 12.5407 27.9176C12.4528 28.1172 12.3671 28.3178 12.2836 28.5195C12.2001 28.7212 12.1188 28.9236 12.0398 29.1269C11.6394 30.1563 12.1494 31.3154 13.1789 31.7158Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M18.3908 57.9176C17.5929 58.6815 17.5652 59.9475 18.3291 60.7454C18.4799 60.9029 18.6324 61.0589 18.7868 61.2132C18.9411 61.3676 19.0971 61.5201 19.2546 61.6709C20.0525 62.4348 21.3185 62.4071 22.0824 61.6092C22.8462 60.8113 22.8186 59.5453 22.0207 58.7815C21.8842 58.6508 21.749 58.5185 21.6152 58.3848C21.4815 58.251 21.3492 58.1158 21.2185 57.9793C20.4547 57.1814 19.1887 57.1538 18.3908 57.9176Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M18.3908 22.0824C19.1887 22.8462 20.4547 22.8186 21.2185 22.0207C21.3492 21.8842 21.4815 21.749 21.6152 21.6152C21.749 21.4815 21.8842 21.3492 22.0207 21.2185C22.8186 20.4547 22.8462 19.1887 22.0824 18.3908C21.3186 17.5929 20.0525 17.5652 19.2546 18.3291C19.0971 18.4799 18.9411 18.6324 18.7868 18.7868C18.6324 18.9411 18.4799 19.0971 18.3291 19.2546C17.5652 20.0525 17.5929 21.3185 18.3908 22.0824Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M26.8925 64.8232C26.4476 65.8342 26.9066 67.0145 27.9176 67.4593C28.1172 67.5472 28.3178 67.6329 28.5195 67.7164C28.7212 67.7999 28.9236 67.8812 29.1269 67.9602C30.1563 68.3606 31.3154 67.8506 31.7158 66.8211C32.1161 65.7916 31.6061 64.6325 30.5766 64.2322C30.4005 64.1637 30.225 64.0933 30.0502 64.0209C29.8754 63.9485 29.7016 63.8742 29.5286 63.7981C28.5175 63.3532 27.3373 63.8122 26.8925 64.8232Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M26.8925 15.1768C27.3373 16.1878 28.5175 16.6468 29.5286 16.2019C29.7016 16.1258 29.8755 16.0515 30.0502 15.9791C30.225 15.9067 30.4005 15.8363 30.5766 15.7678C31.6061 15.3674 32.1161 14.2084 31.7158 13.1789C31.3154 12.1494 30.1563 11.6394 29.1269 12.0398C28.9236 12.1188 28.7212 12.2001 28.5195 12.2836C28.3178 12.3671 28.1172 12.4528 27.9176 12.5407C26.9066 12.9855 26.4476 14.1658 26.8925 15.1768Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M37.3896 12.0503C37.4137 13.1546 38.3285 14.0303 39.4328 14.0062C39.6217 14.0021 39.8108 14 40 14C46.8956 14 53.5088 16.7393 58.3848 21.6152C63.2607 26.4912 66 33.1044 66 40C66 46.8956 63.2607 53.5088 58.3848 58.3848C53.5088 63.2607 46.8956 66 40 66C39.8108 66 39.6217 65.9979 39.4328 65.9938C38.3285 65.9697 37.4137 66.8454 37.3896 67.9497C37.3655 69.054 38.2412 69.9688 39.3455 69.9929C39.5635 69.9976 39.7817 70 40 70C47.9565 70 55.5871 66.8393 61.2132 61.2132C66.8393 55.5871 70 47.9565 70 40C70 32.0435 66.8393 24.4129 61.2132 18.7868C55.5871 13.1607 47.9565 10 40 10C39.7817 10 39.5636 10.0024 39.3455 10.0071C38.2412 10.0312 37.3656 10.946 37.3896 12.0503Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.1312 27.8575C32.4657 26.4036 29.2158 28.3328 29.2158 31.3691L29.2158 48.6309C29.2158 51.6671 32.4657 53.5964 35.1312 52.1425L50.9546 43.5116C53.734 41.9955 53.734 38.0045 50.9546 36.4884L35.1312 27.8575ZM33.2158 31.3691L49.0392 40L33.2158 48.6309L33.2158 31.3691Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-playback-speed', CorePlaybackSpeed)
export default CorePlaybackSpeed