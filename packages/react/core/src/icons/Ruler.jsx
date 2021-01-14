
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M28 14C28 12.8954 28.8954 12 30 12H50C51.1046 12 52 12.8954 52 14V66C52 67.1046 51.1046 68 50 68H30C28.8954 68 28 67.1046 28 66V14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 22H52"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 31L52 31"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 40L52 40"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 49L52 49"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 58L52 58"
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
            d="M30 12C28.8954 12 28 12.8954 28 14V66C28 67.1046 28.8954 68 30 68H50C51.1046 68 52 67.1046 52 66V60.5H40C38.6193 60.5 37.5 59.3807 37.5 58C37.5 56.6193 38.6193 55.5 40 55.5H52V51.5H44C42.6193 51.5 41.5 50.3807 41.5 49C41.5 47.6193 42.6193 46.5 44 46.5H52V42.5H40C38.6193 42.5 37.5 41.3807 37.5 40C37.5 38.6193 38.6193 37.5 40 37.5H52V33.5H44C42.6193 33.5 41.5 32.3807 41.5 31C41.5 29.6193 42.6193 28.5 44 28.5H52V24.5L40 24.5C38.6193 24.5 37.5 23.3807 37.5 22C37.5 20.6193 38.6193 19.5 40 19.5L52 19.5V14C52 12.8954 51.1046 12 50 12H30Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="28"
            y="12"
            width="24"
            height="56"
            rx="2"
            fill="#F2C94C"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 22L52 22"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 31L52 31"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 40L52 40"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 49L52 49"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 58L52 58"
            stroke="#EB5757"
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
            d="M28 14C28 12.8954 28.8954 12 30 12H50C51.1046 12 52 12.8954 52 14V66C52 67.1046 51.1046 68 50 68H30C28.8954 68 28 67.1046 28 66V14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 22L52 22M44 31H52M40 40H52M44 49H52M40 58H52M30 68H50C51.1046 68 52 67.1046 52 66V14C52 12.8954 51.1046 12 50 12H30C28.8954 12 28 12.8954 28 14V66C28 67.1046 28.8954 68 30 68Z"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30 10.272C27.7909 10.272 26 12.0628 26 14.272V66.272C26 68.4811 27.7909 70.272 30 70.272H50C52.2091 70.272 54 68.4811 54 66.272V14.272C54 12.0628 52.2091 10.272 50 10.272H30ZM50 56.272H40C38.8954 56.272 38 57.1674 38 58.272C38 59.3765 38.8954 60.272 40 60.272H50V66.272H30V14.272L50 14.272V20.272L40 20.272C38.8954 20.272 38 21.1674 38 22.272C38 23.3765 38.8954 24.272 40 24.272L50 24.272V29.272H44C42.8954 29.272 42 30.1674 42 31.272C42 32.3765 42.8954 33.272 44 33.272H50V38.272H40C38.8954 38.272 38 39.1674 38 40.272C38 41.3765 38.8954 42.272 40 42.272H50V47.272H44C42.8954 47.272 42 48.1674 42 49.272C42 50.3765 42.8954 51.272 44 51.272H50V56.272Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreRuler = forwardRef((props, ref) => {
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

CoreRuler.displayName = 'CoreRuler'

export default CoreRuler
