
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M27.9999 28L29.7603 70.2498C29.8943 73.4635 32.5386 76 35.7551 76H44.2447C47.4613 76 50.1056 73.4635 50.2395 70.2498L51.9999 28"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46.0486 14.3967C45.4117 12.9408 43.9732 12 42.384 12H37.6161C36.0269 12 34.5885 12.9408 33.9515 14.3967L28.0001 28H52.0001L46.0486 14.3967Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44.0001 12V4L36.0001 6.66667V12"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34.0001 36H46.0001"
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
            d="M50.4755 70.2498C50.3416 73.4635 47.6973 76 44.4808 76L35.9912 76C32.7746 76 30.1303 73.4635 29.9964 70.2498L28.2985 29.5L52.1735 29.5L50.4755 70.2498ZM46.2361 37.5C47.0645 37.5 47.7361 36.8284 47.7361 36C47.7361 35.1716 47.0645 34.5 46.2361 34.5L34.2361 34.5C33.4077 34.5 32.7361 35.1716 32.7361 36C32.7361 36.8284 33.4077 37.5 34.2361 37.5H46.2361Z"
            fill="currentColor"
          />
          <path
            d="M37.8521 10.5C37.295 10.5 36.7514 10.5841 36.2361 10.7425V6.66666L44.2361 4L44.2361 10.7425C43.7208 10.5841 43.1771 10.5 42.62 10.5L37.8521 10.5Z"
            fill="currentColor"
          />
          <path
            d="M49.9426 26.5L44.9104 14.9979C44.5123 14.088 43.6133 13.5 42.62 13.5L37.8521 13.5C36.8589 13.5 35.9599 14.088 35.5618 14.998L30.5296 26.5L49.9426 26.5Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M43.5651 12L35.5651 12V6.66667L43.5651 4V12Z"
            fill="#219653"
          />
          <path
            d="M45.6136 14.3967C44.9767 12.9408 43.5382 12 41.949 12H37.1811C35.5919 12 34.1535 12.9408 33.5165 14.3967L27.5651 28L51.5651 28L45.6136 14.3967Z"
            fill="#F2F2F2"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M49.8045 70.2498C49.6706 73.4635 47.0263 76 43.8097 76H35.3201C32.1036 76 29.4593 73.4635 29.3253 70.2498L27.5649 28H51.5649L49.8045 70.2498Z"
            fill="#219653"
            stroke="#219653"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33.5651 36H45.5651"
            stroke="#333333"
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
            d="M44.0001 12H36.0001V6.66667L44.0001 4V12Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46.0486 14.3967C45.4116 12.9408 43.9732 12 42.384 12H37.6161C36.0269 12 34.5885 12.9408 33.9515 14.3967L28.0001 28H52.0001L46.0486 14.3967Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M50.2395 70.2498C50.1056 73.4635 47.4613 76 44.2447 76H35.7551C32.5386 76 29.8943 73.4635 29.7603 70.2498L28.0001 28H52.0001L50.2395 70.2498Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28.0001 28L33.9515 14.3967C34.5885 12.9408 36.0269 12 37.6161 12H42.384C43.9732 12 45.4117 12.9408 46.0486 14.3967L52.0001 28M28.0001 28H52.0001M28.0001 28L29.7603 70.2498C29.8943 73.4635 32.5386 76 35.7551 76H44.2447C47.4613 76 50.1056 73.4635 50.2395 70.2498L52.0001 28M34.0001 36H46.0001M44.0001 12H36.0001V6.66667L44.0001 4V12Z"
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
            d="M46.0001 38C47.1047 38 48.0001 37.1046 48.0001 36C48.0001 34.8954 47.1047 34 46.0001 34H34.0001C32.8956 34 32.0001 34.8954 32.0001 36C32.0001 37.1046 32.8956 38 34.0001 38H46.0001Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.0001 11.2121C46.805 11.8198 47.4598 12.6324 47.881 13.5951L53.8324 27.1984C53.9593 27.4882 54.0135 27.7989 53.9973 28.1054L52.2379 70.3331C52.0593 74.6181 48.5335 78 44.2448 78H35.7552C31.4665 78 27.9407 74.6181 27.7621 70.3331L26.0017 28.0833C25.9887 27.7693 26.0498 27.46 26.1763 27.179L32.1192 13.5951C32.5404 12.6324 33.1953 11.8198 34.0001 11.2121V6.66668C34.0001 5.80582 34.551 5.04154 35.3677 4.76931L43.3677 2.10265C43.9776 1.89935 44.648 2.00163 45.1695 2.37753C45.6911 2.75343 46.0001 3.35713 46.0001 4.00001V11.2121ZM30.0851 30H49.9149L48.2413 70.1665C48.1521 72.309 46.3892 74 44.2448 74H35.7552C33.6108 74 31.8479 72.309 31.7587 70.1665L30.0851 30ZM44.2164 15.1984L48.9421 26H31.0582L35.7839 15.1984C36.1024 14.4704 36.8216 14 37.6162 14H42.3841C43.1787 14 43.8979 14.4704 44.2164 15.1984ZM42.0001 10V6.77487L38.0001 8.1082V10H42.0001Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreHighlighter = forwardRef((props, ref) => {
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

CoreHighlighter.displayName = 'CoreHighlighter'

export default CoreHighlighter
