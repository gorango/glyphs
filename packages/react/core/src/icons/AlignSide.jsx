
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M16 15.9648L64 15.9648"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 27.9648L44 27.9648"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 39.9648L64 39.9648"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 51.9648L44 51.9648"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 63.9648L64 63.9648"
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
            d="M16 51.6582L44 51.6582"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 27.6582L44 27.6582"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 39.6582L64 39.6582"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 63.6582L64 63.6582"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 15.6582L64 15.6582"
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
            d="M16 51.9648L44 51.9648"
            stroke="#56CCF2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 27.9648L44 27.9648"
            stroke="#56CCF2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 39.9648L64 39.9648"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 63.9648L64 63.9648"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 15.9648L64 15.9648"
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
            d="M16 51.9648H44M16 27.9648H44M16 39.9648H64M16 63.9648H64M16 15.9648H64"
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
            d="M16 17.9648C14.8954 17.9648 14 17.0694 14 15.9648C14 14.8603 14.8954 13.9648 16 13.9648H64C65.1046 13.9648 66 14.8603 66 15.9648C66 17.0694 65.1046 17.9648 64 17.9648H16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M14 27.9648C14 29.0694 14.8954 29.9648 16 29.9648H44C45.1046 29.9648 46 29.0694 46 27.9648C46 26.8603 45.1046 25.9648 44 25.9648H16C14.8954 25.9648 14 26.8603 14 27.9648Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M14 51.9648C14 53.0694 14.8954 53.9648 16 53.9648H44C45.1046 53.9648 46 53.0694 46 51.9648C46 50.8603 45.1046 49.9648 44 49.9648H16C14.8954 49.9648 14 50.8603 14 51.9648Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 41.9648C14.8954 41.9648 14 41.0694 14 39.9648C14 38.8603 14.8954 37.9648 16 37.9648H64C65.1046 37.9648 66 38.8603 66 39.9648C66 41.0694 65.1046 41.9648 64 41.9648H16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M14 63.9648C14 65.0694 14.8954 65.9648 16 65.9648H64C65.1046 65.9648 66 65.0694 66 63.9648C66 62.8603 65.1046 61.9648 64 61.9648H16C14.8954 61.9648 14 62.8603 14 63.9648Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreAlignSide = forwardRef((props, ref) => {
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

CoreAlignSide.displayName = 'CoreAlignSide'

export default CoreAlignSide
