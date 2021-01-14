
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M16 18C16 16.8954 16.8954 16 18 16L62 16C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64L18 64C16.8954 64 16 63.1046 16 62L16 18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 27.7421V36.9836M40 36.9995L40 53.9995M28 36.9995L37.8787 27.1209C39.0503 25.9493 40.9497 25.9493 42.1213 27.1209L52 36.9995"
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
            d="M16 18C16 16.8954 16.8954 16 18 16L62 16C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64L18 64C16.8954 64 16 63.1046 16 62L16 18ZM43 32.2426L49.8787 39.1213C51.0503 40.2929 52.9497 40.2929 54.1213 39.1213C55.2929 37.9497 55.2929 36.0503 54.1213 34.8787L44.2426 25C41.8995 22.6569 38.1005 22.6569 35.7574 25L25.8787 34.8787C24.7071 36.0503 24.7071 37.9497 25.8787 39.1213C27.0503 40.2929 28.9497 40.2929 30.1213 39.1213L37 32.2426L37 54C37 55.6569 38.3431 57 40 57C41.6569 57 43 55.6569 43 54L43 32.2426Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="16"
            y="16"
            width="48"
            height="48"
            rx="2"
            fill="#6FCF97"
            stroke="#219653"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M42 27.7426C42 26.6381 41.1046 25.7426 40 25.7426C38.8954 25.7426 38 26.6381 38 27.7426H42ZM38 36.9842C38 38.0887 38.8954 38.9842 40 38.9842C41.1046 38.9842 42 38.0887 42 36.9842H38ZM42 37.0001C42 35.8955 41.1046 35.0001 40 35.0001C38.8954 35.0001 38 35.8955 38 37.0001H42ZM38 54.0001C38 55.1046 38.8954 56.0001 40 56.0001C41.1046 56.0001 42 55.1046 42 54.0001H38ZM38 27.7426V36.9842H42V27.7426H38ZM38 37.0001V54.0001H42V37.0001H38Z"
            fill="#F2994A"
          />
          <path
            d="M52 37L42.1213 27.1213C40.9497 25.9497 39.0503 25.9497 37.8787 27.1213L28 37"
            stroke="#F2994A"
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
            d="M16 18C16 16.8954 16.8954 16 18 16H62C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64H18C16.8954 64 16 63.1046 16 62V18Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 27.7426V36.9841M40 37V54M28 37L37.8787 27.1213C39.0503 25.9497 40.9497 25.9497 42.1213 27.1213L52 37M18 64H62C63.1046 64 64 63.1046 64 62V18C64 16.8954 63.1046 16 62 16H18C16.8954 16 16 16.8954 16 18V62C16 63.1046 16.8954 64 18 64Z"
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
            d="M42 29.8284L50.5858 38.4142C51.3668 39.1953 52.6332 39.1953 53.4142 38.4142C54.1953 37.6332 54.1953 36.3668 53.4142 35.5858L43.5355 25.7071C41.5829 23.7545 38.4171 23.7545 36.4645 25.7071L26.5858 35.5858C25.8047 36.3668 25.8047 37.6332 26.5858 38.4142C27.3668 39.1953 28.6332 39.1953 29.4142 38.4142L38 29.8284V36.9841L38 36.992L38 37L38 54C38 55.1046 38.8954 56 40 56C41.1046 56 42 55.1046 42 54L42 37L42 36.992L42 36.9841V29.8284Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 18C14 15.7909 15.7909 14 18 14L62 14C64.2091 14 66 15.7909 66 18V62C66 64.2091 64.2091 66 62 66H18C15.7909 66 14 64.2091 14 62L14 18ZM62 18L18 18L18 62L62 62L62 18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreArrowSquare = forwardRef((props, ref) => {
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

CoreArrowSquare.displayName = 'CoreArrowSquare'

export default CoreArrowSquare
