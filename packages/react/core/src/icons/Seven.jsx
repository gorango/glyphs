
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M40 64L51.9426 18.22C51.9807 18.0739 52 17.9236 52 17.7726C52 16.7936 51.2064 16 50.2274 16L28 16"
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
            d="M37.0971 63.2427C36.6789 64.8459 37.6395 66.4846 39.2427 66.9029C40.8459 67.3211 42.4846 66.3605 42.9029 64.7573L37.0971 63.2427ZM51.9426 18.22L54.8454 18.9773L54.8455 18.9773L51.9426 18.22ZM28 13C26.3431 13 25 14.3431 25 16C25 17.6569 26.3431 19 28 19V13ZM42.9029 64.7573L54.8454 18.9773L49.0397 17.4628L37.0971 63.2427L42.9029 64.7573ZM50.2274 13L28 13V19L50.2274 19V13ZM54.8455 18.9773C54.9481 18.584 55 18.1791 55 17.7726H49C49 17.668 49.0134 17.5639 49.0397 17.4628L54.8455 18.9773ZM55 17.7726C55 15.1368 52.8632 13 50.2274 13V19C49.5495 19 49 18.4505 49 17.7726H55Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M38.0648 63.4952C37.7859 64.564 38.4264 65.6564 39.4952 65.9352C40.564 66.2141 41.6564 65.5736 41.9352 64.5048L38.0648 63.4952ZM51.9426 18.22L53.8778 18.7249L53.8778 18.7249L51.9426 18.22ZM28 14C26.8954 14 26 14.8954 26 16C26 17.1046 26.8954 18 28 18V14ZM41.9352 64.5048L53.8778 18.7249L50.0074 17.7152L38.0648 63.4952L41.9352 64.5048ZM50.2274 14L28 14V18L50.2274 18V14ZM53.8778 18.7249C53.9589 18.414 54 18.0939 54 17.7726H50C50 17.7532 50.0025 17.7339 50.0074 17.7152L53.8778 18.7249ZM54 17.7726C54 15.689 52.311 14 50.2274 14V18C50.1018 18 50 17.8982 50 17.7726H54Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M40 64L51.9426 18.22C51.9807 18.0739 52 17.9236 52 17.7726C52 16.7936 51.2064 16 50.2274 16H28"
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
            d="M39.4952 65.9352C38.4264 65.6564 37.7859 64.564 38.0648 63.4952L49.9331 18L28 18C26.8954 18 26 17.1046 26 16C26 14.8954 26.8954 14 28 14L50.2274 14C52.311 14 54 15.689 54 17.7726C54 18.0939 53.9589 18.414 53.8778 18.7249L41.9352 64.5048C41.6564 65.5736 40.564 66.2141 39.4952 65.9352Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreSeven = forwardRef((props, ref) => {
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

CoreSeven.displayName = 'CoreSeven'

export default CoreSeven
