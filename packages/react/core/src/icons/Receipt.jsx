
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M64 12V68L56 62L48 68L40 62L32 68L24 62L16 68V12L24 18L32 12L40 18L48 12L56 18L64 12Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 27.5H53"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 39.5H53"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 51.5H53"
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
            d="M62.4 66.8C63.0592 67.2944 64 66.824 64 66V14C64 13.176 63.0592 12.7056 62.4 13.2L56.6 17.55C56.2444 17.8167 55.7556 17.8167 55.4 17.55L48.6 12.45C48.2444 12.1833 47.7556 12.1833 47.4 12.45L40.6 17.55C40.2444 17.8167 39.7556 17.8167 39.4 17.55L32.6 12.45C32.2444 12.1833 31.7556 12.1833 31.4 12.45L24.6 17.55C24.2444 17.8167 23.7556 17.8167 23.4 17.55L17.6 13.2C16.9408 12.7056 16 13.176 16 14V66C16 66.824 16.9408 67.2944 17.6 66.8L23.4 62.45C23.7556 62.1833 24.2444 62.1833 24.6 62.45L31.4 67.55C31.7556 67.8167 32.2444 67.8167 32.6 67.55L39.4 62.45C39.7556 62.1833 40.2444 62.1833 40.6 62.45L47.4 67.55C47.7556 67.8167 48.2444 67.8167 48.6 67.55L55.4 62.45C55.7556 62.1833 56.2444 62.1833 56.6 62.45L62.4 66.8ZM27 24.5C25.3431 24.5 24 25.8431 24 27.5C24 29.1569 25.3431 30.5 27 30.5H53C54.6569 30.5 56 29.1569 56 27.5C56 25.8431 54.6569 24.5 53 24.5H27ZM24 39.5C24 37.8431 25.3431 36.5 27 36.5H53C54.6569 36.5 56 37.8431 56 39.5C56 41.1569 54.6569 42.5 53 42.5H27C25.3431 42.5 24 41.1569 24 39.5ZM27 48.5C25.3431 48.5 24 49.8431 24 51.5C24 53.1569 25.3431 54.5 27 54.5H53C54.6569 54.5 56 53.1569 56 51.5C56 49.8431 54.6569 48.5 53 48.5H27Z"
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
            d="M64 12V68L56 62L48 68L40 62L32 68L24 62L16 68V12L24 18L32 12L40 18L48 12L56 18L64 12Z"
            fill="#F2F2F2"
          />
          <path
            d="M64 68L62.8 69.6C63.406 70.0545 64.2169 70.1276 64.8944 69.7889C65.572 69.4501 66 68.7575 66 68H64ZM64 12H66C66 11.2425 65.572 10.5499 64.8944 10.2111C64.2169 9.87236 63.406 9.94547 62.8 10.4L64 12ZM56 62L57.2 60.4C56.4889 59.8667 55.5111 59.8667 54.8 60.4L56 62ZM48 68L46.8 69.6C47.5111 70.1333 48.4889 70.1333 49.2 69.6L48 68ZM40 62L41.2 60.4C40.4889 59.8667 39.5111 59.8667 38.8 60.4L40 62ZM32 68L30.8 69.6C31.5111 70.1333 32.4889 70.1333 33.2 69.6L32 68ZM24 62L25.2 60.4C24.4889 59.8667 23.5111 59.8667 22.8 60.4L24 62ZM16 68H14C14 68.7575 14.428 69.4501 15.1056 69.7889C15.7831 70.1276 16.594 70.0545 17.2 69.6L16 68ZM16 12L17.2 10.4C16.594 9.94547 15.7831 9.87236 15.1056 10.2111C14.428 10.5499 14 11.2425 14 12H16ZM24 18L22.8 19.6C23.5111 20.1333 24.4889 20.1333 25.2 19.6L24 18ZM32 12L33.2 10.4C32.4889 9.86667 31.5111 9.86667 30.8 10.4L32 12ZM40 18L38.8 19.6C39.5111 20.1333 40.4889 20.1333 41.2 19.6L40 18ZM48 12L49.2 10.4C48.4889 9.86667 47.5111 9.86667 46.8 10.4L48 12ZM56 18L54.8 19.6C55.5111 20.1333 56.4889 20.1333 57.2 19.6L56 18ZM66 68V12H62V68H66ZM54.8 63.6L62.8 69.6L65.2 66.4L57.2 60.4L54.8 63.6ZM49.2 69.6L57.2 63.6L54.8 60.4L46.8 66.4L49.2 69.6ZM38.8 63.6L46.8 69.6L49.2 66.4L41.2 60.4L38.8 63.6ZM33.2 69.6L41.2 63.6L38.8 60.4L30.8 66.4L33.2 69.6ZM22.8 63.6L30.8 69.6L33.2 66.4L25.2 60.4L22.8 63.6ZM17.2 69.6L25.2 63.6L22.8 60.4L14.8 66.4L17.2 69.6ZM14 12V68H18V12H14ZM25.2 16.4L17.2 10.4L14.8 13.6L22.8 19.6L25.2 16.4ZM30.8 10.4L22.8 16.4L25.2 19.6L33.2 13.6L30.8 10.4ZM41.2 16.4L33.2 10.4L30.8 13.6L38.8 19.6L41.2 16.4ZM46.8 10.4L38.8 16.4L41.2 19.6L49.2 13.6L46.8 10.4ZM57.2 16.4L49.2 10.4L46.8 13.6L54.8 19.6L57.2 16.4ZM62.8 10.4L54.8 16.4L57.2 19.6L65.2 13.6L62.8 10.4Z"
            fill="#E0E0E0"
          />
          <path
            d="M27 27.5H53"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 39.5H53"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 51.5H53"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M64 12V68L56 62L48 68L40 62L32 68L24 62L16 68V12L24 18L32 12L40 18L48 12L56 18L64 12Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M27 27.5H53M27 39.5H53M27 51.5H53M64 68V12L56 18L48 12L40 18L32 12L24 18L16 12V68L24 62L32 68L40 62L48 68L56 62L64 68Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            d="M27 25.5C25.8954 25.5 25 26.3954 25 27.5C25 28.6046 25.8954 29.5 27 29.5H53C54.1046 29.5 55 28.6046 55 27.5C55 26.3954 54.1046 25.5 53 25.5H27Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25 39.5C25 38.3954 25.8954 37.5 27 37.5H53C54.1046 37.5 55 38.3954 55 39.5C55 40.6046 54.1046 41.5 53 41.5H27C25.8954 41.5 25 40.6046 25 39.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 49.5C25.8954 49.5 25 50.3954 25 51.5C25 52.6046 25.8954 53.5 27 53.5H53C54.1046 53.5 55 52.6046 55 51.5C55 50.3954 54.1046 49.5 53 49.5H27Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.2 10.4C16.594 9.94548 15.7831 9.87237 15.1056 10.2112C14.428 10.5499 14 11.2425 14 12V68C14 68.7576 14.428 69.4501 15.1056 69.7889C15.7831 70.1277 16.594 70.0545 17.2 69.6L24 64.5L30.8 69.6C31.5111 70.1333 32.4889 70.1333 33.2 69.6L40 64.5L46.8 69.6C47.5111 70.1333 48.4889 70.1333 49.2 69.6L56 64.5L62.8 69.6C63.406 70.0545 64.2169 70.1277 64.8944 69.7889C65.572 69.4501 66 68.7576 66 68V12C66 11.2425 65.572 10.5499 64.8944 10.2112C64.2169 9.87237 63.406 9.94548 62.8 10.4L56 15.5L49.2 10.4C48.4889 9.86668 47.5111 9.86668 46.8 10.4L40 15.5L33.2 10.4C32.4889 9.86668 31.5111 9.86668 30.8 10.4L24 15.5L17.2 10.4ZM18 64V16L22.8 19.6C23.5111 20.1333 24.4889 20.1333 25.2 19.6L32 14.5L38.8 19.6C39.5111 20.1333 40.4889 20.1333 41.2 19.6L48 14.5L54.8 19.6C55.5111 20.1333 56.4889 20.1333 57.2 19.6L62 16V64L57.2 60.4C56.4889 59.8667 55.5111 59.8667 54.8 60.4L48 65.5L41.2 60.4C40.4889 59.8667 39.5111 59.8667 38.8 60.4L32 65.5L25.2 60.4C24.4889 59.8667 23.5111 59.8667 22.8 60.4L18 64Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreReceipt = forwardRef((props, ref) => {
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

CoreReceipt.displayName = 'CoreReceipt'

export default CoreReceipt
