
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
            d="M49.0131 44.9996H30.9126C29.0861 44.9996 28.1713 42.7912 29.4629 41.4996L38.1067 32.8558C39.1319 31.8306 40.7939 31.8306 41.819 32.8558L50.4629 41.4996C51.7545 42.7912 50.8397 44.9996 49.0131 44.9996Z"
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
            d="M18 16C16.8954 16 16 16.8954 16 18L16 62C16 63.1046 16.8954 64 18 64L62 64C63.1046 64 64 63.1046 64 62V18C64 16.8954 63.1046 16 62 16L18 16ZM30.9126 45H49.0131C50.8397 45 51.7545 42.7916 50.4629 41.5L41.819 32.8562C40.7939 31.831 39.1319 31.831 38.1067 32.8562L29.4629 41.5C28.1713 42.7916 29.0861 45 30.9126 45Z"
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
            d="M49.0131 45L30.9126 45C29.0861 45 28.1713 42.7916 29.4629 41.5L38.1067 32.8562C39.1319 31.831 40.7939 31.831 41.819 32.8562L50.4629 41.5C51.7545 42.7916 50.8397 45 49.0131 45Z"
            fill="#F2994A"
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
            d="M49.0131 45H30.9126C29.0861 45 28.1713 42.7916 29.4629 41.5L38.1067 32.8562C39.1319 31.831 40.7939 31.831 41.819 32.8562L50.4629 41.5C51.7545 42.7916 50.8397 45 49.0131 45Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16 18C16 16.8954 16.8954 16 18 16H62C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64H18C16.8954 64 16 63.1046 16 62V18Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M49.0131 45H30.9126C29.0861 45 28.1713 42.7916 29.4629 41.5L38.1067 32.8562C39.1319 31.831 40.7939 31.831 41.819 32.8562L50.4629 41.5C51.7545 42.7916 50.8397 45 49.0131 45Z"
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
            d="M36.6925 31.4419C38.4987 29.6358 41.4271 29.6358 43.2333 31.4419L51.8771 40.0858C54.4286 42.6373 52.6215 47 49.0131 47L30.9126 47C27.3042 47 25.4972 42.6373 28.0487 40.0858L36.6925 31.4419ZM39.5209 34.2704C39.765 34.0263 40.1608 34.0263 40.4048 34.2704L49.0487 42.9142C49.058 42.9235 49.0633 42.9302 49.0659 42.9338L49.0675 42.9361C49.0673 42.9413 49.0662 42.9529 49.0596 42.969C49.0529 42.985 49.0455 42.994 49.0419 42.9978L49.0392 42.9983C49.0348 42.999 49.0263 43 49.0131 43L30.9126 43C30.8995 43 30.891 42.999 30.8866 42.9983L30.8839 42.9978C30.8803 42.994 30.8729 42.985 30.8662 42.969C30.8596 42.9529 30.8584 42.9413 30.8583 42.9361L30.8598 42.9338C30.8625 42.9302 30.8678 42.9235 30.8771 42.9142L39.5209 34.2704Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 18C14 15.7909 15.7909 14 18 14L62 14C64.2091 14 66 15.7909 66 18V62C66 64.2091 64.2091 66 62 66H18C15.7909 66 14 64.2091 14 62L14 18ZM18 18L62 18L62 62L18 62L18 18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreCaretSquare = forwardRef((props, ref) => {
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

CoreCaretSquare.displayName = 'CoreCaretSquare'

export default CoreCaretSquare
