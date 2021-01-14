
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M37.8667 38.4C38.9333 39.2 38.9333 40.8 37.8667 41.6L11.2 61.6C9.88153 62.5888 8 61.6481 8 60L8 20C8 18.3519 9.88153 17.4111 11.2 18.4L37.8667 38.4Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M69.8667 38.4C70.9333 39.2 70.9333 40.8 69.8667 41.6L43.2 61.6C41.8815 62.5888 40 61.6481 40 60L40 20C40 18.3519 41.8815 17.4111 43.2 18.4L69.8667 38.4Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M72 16L72 64"
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
            d="M37.8667 38.4C38.9333 39.2 38.9333 40.8 37.8667 41.6L11.2 61.6C9.88153 62.5889 8 61.6481 8 60L8 20C8 18.3519 9.88153 17.4111 11.2 18.4L37.8667 38.4Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M69.8667 38.4C70.9333 39.2 70.9333 40.8 69.8667 41.6L43.2 61.6C41.8815 62.5889 40 61.6481 40 60L40 20C40 18.3519 41.8815 17.4111 43.2 18.4L69.8667 38.4Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M72 16L72 64"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M37.8667 38.4C38.9333 39.2 38.9333 40.8 37.8667 41.6L11.2 61.6C9.88153 62.5889 8 61.6481 8 60L8 20C8 18.3519 9.88153 17.4111 11.2 18.4L37.8667 38.4Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M69.8667 38.4C70.9333 39.2 70.9333 40.8 69.8667 41.6L43.2 61.6C41.8815 62.5889 40 61.6481 40 60L40 20C40 18.3519 41.8815 17.4111 43.2 18.4L69.8667 38.4Z"
            fill="#9B51E0"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M72 16L72 64"
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
            d="M37.8667 38.4C38.9333 39.2 38.9333 40.8 37.8667 41.6L11.2 61.6C9.88153 62.5889 8 61.6481 8 60L8 20C8 18.3519 9.88153 17.4111 11.2 18.4L37.8667 38.4Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M69.8667 38.4C70.9333 39.2 70.9333 40.8 69.8667 41.6L43.2 61.6C41.8815 62.5889 40 61.6481 40 60V20C40 18.3519 41.8815 17.4111 43.2 18.4L69.8667 38.4Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M72 16L72 64M8 20L8 60C8 61.6481 9.88153 62.5889 11.2 61.6L37.8667 41.6C38.9333 40.8 38.9333 39.2 37.8667 38.4L11.2 18.4C9.88153 17.4111 8 18.3519 8 20ZM40 20V60C40 61.6481 41.8815 62.5889 43.2 61.6L69.8667 41.6C70.9333 40.8 70.9333 39.2 69.8667 38.4L43.2 18.4C41.8815 17.4111 40 18.3519 40 20Z"
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
            d="M70 16C70 14.8954 70.8954 14 72 14C73.1046 14 74 14.8954 74 16V64C74 65.1046 73.1046 66 72 66C70.8954 66 70 65.1046 70 64V44L44.4 63.2C41.7631 65.1777 38 63.2962 38 60V44L12.4 63.2C9.76306 65.1777 6 63.2962 6 60L6 20C6 16.7038 9.76306 14.8223 12.4 16.8L38 36V20C38 16.7038 41.7631 14.8223 44.4 16.8L70 36V16ZM36.6667 40L10 20L10 60L36.6667 40ZM68.6667 40L42 20V60L68.6667 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreSeekSkip1 = forwardRef((props, ref) => {
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

CoreSeekSkip1.displayName = 'CoreSeekSkip1'

export default CoreSeekSkip1
