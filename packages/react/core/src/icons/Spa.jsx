
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M11.1924 33.1699C15.4064 33.1981 19.6157 34.1496 23.5088 36.0244C31.4139 39.8313 37.1553 47.0308 39.1077 55.5848C39.5044 57.3229 39.7359 59.0786 39.8071 60.8304C31.1044 60.7723 22.8893 56.7853 17.4589 49.9758C13.5958 45.1316 11.4388 39.2314 11.1924 33.1699Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68.8075 33.1699C64.5935 33.1981 60.3842 34.1496 56.4911 36.0244C48.586 39.8313 42.8446 47.0308 40.8922 55.5848C40.4955 57.3229 40.264 59.0786 40.1929 60.8304C48.8955 60.7723 57.1107 56.7853 62.5411 49.9758C66.4042 45.1316 68.5611 39.2314 68.8075 33.1699Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52.4617 38.3843C52.3636 37.7776 52.2457 37.1721 52.108 36.5687C50.4562 29.3314 46.092 23.0637 39.9999 19C33.9078 23.0637 29.5436 29.3314 27.8917 36.5687C27.754 37.1721 27.6362 37.7776 27.5381 38.3843"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'bold':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.1925 33.1699C15.4065 33.1981 19.6158 34.1496 23.5089 36.0244C31.414 39.8313 37.1554 47.0308 39.1078 55.5848C39.5045 57.3229 39.736 59.0786 39.8071 60.8304C31.1045 60.7723 22.8893 56.7853 17.4589 49.9758C13.5958 45.1316 11.4389 39.2314 11.1925 33.1699Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.8075 33.1699C64.5935 33.1981 60.3842 34.1496 56.4911 36.0244C48.586 39.8313 42.8446 47.0308 40.8922 55.5848C40.4955 57.3229 40.264 59.0786 40.1929 60.8304C48.8955 60.7723 57.1107 56.7853 62.5411 49.9758C66.4042 45.1316 68.5611 39.2314 68.8075 33.1699Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.2296 55.9121C32.2142 56.723 34.3032 57.2885 36.4506 57.5863C36.3733 57.1407 36.2841 56.6959 36.1829 56.2524C34.8765 50.5288 31.6767 45.4821 27.1901 41.8728C27.0025 46.736 28.0504 51.5678 30.2296 55.9121ZM28.2297 35.2356C33.3978 38.5623 37.4798 43.3084 39.9999 48.8775C42.52 43.3083 46.602 38.5622 51.7703 35.2355C49.9091 28.5635 45.7148 22.812 40 19C34.2851 22.8121 30.0908 28.5636 28.2297 35.2356ZM52.8098 41.8727C48.3231 45.482 45.1233 50.5287 43.8169 56.2524C43.7157 56.6959 43.6265 57.1407 43.5492 57.5863C45.6966 57.2885 47.7857 56.723 49.7704 55.912C51.9496 51.5678 52.9974 46.7359 52.8098 41.8727Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.1925 33.1699C15.4065 33.1981 19.6157 34.1496 23.5089 36.0244C31.414 39.8313 37.1554 47.0308 39.1077 55.5848C39.5045 57.3229 39.736 59.0786 39.8071 60.8304C31.1045 60.7723 22.8893 56.7853 17.4589 49.9758C13.5958 45.1316 11.4389 39.2314 11.1925 33.1699Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.8075 33.1699C64.5935 33.1981 60.3842 34.1496 56.4911 36.0244C48.586 39.8313 42.8446 47.0308 40.8922 55.5848C40.4955 57.3229 40.264 59.0786 40.1929 60.8304C48.8955 60.7723 57.1107 56.7853 62.5411 49.9758C66.4042 45.1316 68.5611 39.2314 68.8075 33.1699Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.5381 38.3843C33.3486 42.4533 37.5048 48.5626 39.1076 55.5848C39.5042 57.3224 39.7356 59.0775 39.8069 60.8288C39.9274 60.8303 40.0479 60.831 40.1686 60.831C42.6082 60.831 45.0108 60.5222 47.3261 59.9287C47.3392 59.9107 47.3523 59.8926 47.3653 59.8746C45.047 60.4873 42.6391 60.8141 40.1927 60.8304C40.2638 59.0786 40.4953 57.323 40.8921 55.5848C42.4948 48.5626 46.6511 42.4532 52.4617 38.3843C52.3636 37.7776 52.2458 37.1721 52.108 36.5687C50.4562 29.3314 46.092 23.0637 39.9999 19C33.9078 23.0637 29.5436 29.3314 27.8917 36.5687C27.754 37.1721 27.6362 37.7776 27.5381 38.3843Z"
            fill="#9B51E0"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M11.1924 33.1699C15.4064 33.1981 19.6157 34.1496 23.5088 36.0244C31.4139 39.8313 37.1553 47.0308 39.1077 55.5848C39.5044 57.3229 39.7359 59.0785 39.8071 60.8303C31.1044 60.7723 22.8893 56.7853 17.4589 49.9758C13.5958 45.1316 11.4388 39.2313 11.1924 33.1699Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M68.8075 33.1699C64.5935 33.1981 60.3842 34.1496 56.491 36.0244C48.5859 39.8313 42.8446 47.0308 40.8922 55.5848C40.4955 57.3229 40.264 59.0785 40.1928 60.8303C48.8954 60.7723 57.1106 56.7853 62.541 49.9758C66.4041 45.1316 68.561 39.2313 68.8075 33.1699Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M27.538 38.3843C33.3485 42.4533 37.5049 48.5626 39.1077 55.5848C39.5043 57.3224 39.7356 59.0775 39.8068 60.8288C39.9273 60.8303 40.0479 60.831 40.1685 60.831C42.6081 60.831 45.0108 60.5222 47.326 59.9287C47.3391 59.9107 47.3522 59.8926 47.3653 59.8746C45.0469 60.4873 42.6392 60.814 40.1928 60.8303C40.264 59.0785 40.4955 57.3229 40.8922 55.5848C42.495 48.5625 46.651 42.4532 52.4616 38.3843C52.3635 37.7776 52.2457 37.1721 52.108 36.5687C50.4561 29.3314 46.0919 23.0637 39.9998 19C33.9077 23.0637 29.5435 29.3314 27.8917 36.5687C27.7539 37.1721 27.6361 37.7776 27.538 38.3843Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M39.1077 55.5848C37.1553 47.0308 31.4139 39.8313 23.5088 36.0244C19.6157 34.1496 15.4064 33.1981 11.1924 33.1699C11.4388 39.2313 13.5958 45.1316 17.4589 49.9758C22.8893 56.7853 31.1044 60.7723 39.8071 60.8303C39.7359 59.0785 39.5044 57.3229 39.1077 55.5848ZM39.1077 55.5848C37.5049 48.5626 33.3485 42.4533 27.538 38.3843C27.6361 37.7776 27.7539 37.1721 27.8917 36.5687C29.5435 29.3314 33.9077 23.0637 39.9998 19C46.0919 23.0637 50.4561 29.3314 52.108 36.5687C52.2457 37.1721 52.3635 37.7776 52.4616 38.3843C46.651 42.4532 42.495 48.5625 40.8922 55.5848M39.1077 55.5848C39.5043 57.3224 39.7356 59.0775 39.8068 60.8288C39.9273 60.8303 40.0479 60.831 40.1685 60.831C42.6081 60.831 45.0108 60.5222 47.326 59.9287C47.3391 59.9107 47.3522 59.8926 47.3653 59.8746C45.0469 60.4873 42.6392 60.814 40.1928 60.8303M40.8922 55.5848C42.8446 47.0308 48.5859 39.8313 56.491 36.0244C60.3842 34.1496 64.5935 33.1981 68.8075 33.1699C68.561 39.2313 66.4041 45.1316 62.541 49.9758C57.1106 56.7853 48.8954 60.7723 40.1928 60.8303M40.8922 55.5848C40.4955 57.3229 40.264 59.0785 40.1928 60.8303"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41.1096 17.3362C40.4376 16.8879 39.562 16.8879 38.89 17.3362C32.6461 21.5011 28.0996 27.8309 26.1771 35.1637C25.5895 34.8315 24.9891 34.5175 24.3766 34.2225C20.2134 32.2176 15.7119 31.2001 11.2058 31.1699C10.6589 31.1663 10.1344 31.3867 9.75437 31.7799C9.37431 32.1731 9.17182 32.7048 9.19404 33.2512C9.45758 39.7328 11.764 46.0424 15.8952 51.2228C21.7023 58.5047 30.4874 62.7682 39.7937 62.8303C39.8171 62.8305 39.8404 62.8302 39.8637 62.8295C39.9652 62.8305 40.0668 62.831 40.1685 62.831C42.7771 62.831 45.3466 62.5007 47.8226 61.8661C47.965 61.8296 48.1019 61.7778 48.2313 61.7121C54.4294 59.9947 60.008 56.3598 64.1047 51.2228C68.2358 46.0424 70.5423 39.7328 70.8058 33.2512C70.828 32.7048 70.6256 32.1731 70.2455 31.7799C69.8654 31.3867 69.3409 31.1663 68.7941 31.1699C64.2879 31.2001 59.7864 32.2176 55.6233 34.2225C55.0107 34.5175 54.4102 34.8316 53.8225 35.1639C51.9001 27.831 47.3536 21.5011 41.1096 17.3362ZM46.062 58.1375C46.3273 58.076 46.5914 58.0104 46.8542 57.941C52.3718 56.4828 57.3442 53.2846 60.9773 48.7288C64.1061 44.8054 66.0324 40.1376 66.6306 35.274C63.4492 35.556 60.3067 36.4067 57.3588 37.8264C50.0021 41.3692 44.659 48.0692 42.842 56.0298C42.6378 56.9248 42.4806 57.8248 42.3697 58.7263C43.6189 58.6156 44.8524 58.4181 46.062 58.1375ZM39.9998 51.5338C42.012 45.9576 45.586 41.0939 50.267 37.5128C50.2324 37.3463 50.196 37.1799 50.1581 37.0137C48.7231 30.7266 45.0887 25.2257 39.9998 21.4454C34.911 25.2257 31.2765 30.7266 29.8415 37.0137C29.8036 37.1799 29.7673 37.3462 29.7326 37.5127C34.4137 41.0939 37.9877 45.9576 39.9998 51.5338ZM26.3722 40.0094C26.3783 40.0138 26.3845 40.0182 26.3908 40.0226C31.7983 43.8093 35.6661 49.495 37.1576 56.0299C37.3619 56.9249 37.5191 57.8248 37.63 58.7263C30.3563 58.0819 23.618 54.4913 19.0225 48.7288C15.8937 44.8054 13.9675 40.1376 13.3693 35.274C16.5506 35.556 19.6931 36.4067 22.6411 37.8264C23.9515 38.4574 25.1981 39.1887 26.3722 40.0094Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreSpa = forwardRef((props, ref) => {
  const { size, variant, rotate, flip, children } = props

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      width={size || 40}
      height={size || 40}
      transform={transform(rotate, flip)}
    >
      {children}
      <g>
        {renderString({ size, variant, rotate, flip })}
      </g>
    </svg>
  )
})

CoreSpa.displayName = 'CoreSpa'

export default CoreSpa