
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="#0F287F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.5 20L15 27.5L27.5 35L15 42.5L27.5 50L40 42.5L52.5 50L65 42.5L52.5 35L65 27.5L52.5 20L40 27.5L27.5 20ZM40 27.5L52.5 35L40 42.5L27.5 35L40 27.5Z"
            fill="#DAF8FE"
          />
          <path
            d="M27.5 55L40 47.5L52.5 55L40 62.5L27.5 55Z"
            fill="#DAF8FE"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75ZM15 27.5L27.5 20L40 27.5L27.5 35L15 27.5ZM40 42.5L27.5 50L15 42.5L27.5 35L40 42.5ZM52.5 35L65 42.5L52.5 50L40 42.5L52.5 35ZM52.5 35L40 27.5L52.5 20L65 27.5L52.5 35ZM40 47.5L27.5 55L40 62.5L52.5 55L40 47.5Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M27.5 35L15 27.5L27.5 20L40 27.5M27.5 35L15 42.5L27.5 50L40 42.5M27.5 35L40 42.5M27.5 35L40 27.5M40 42.5L52.5 50L65 42.5L52.5 35M40 42.5L52.5 35M52.5 35L65 27.5L52.5 20L40 27.5M52.5 35L40 27.5M75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40ZM40 47.5L27.5 55L40 62.5L52.5 55L40 47.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsDropbox = forwardRef((props, ref) => {
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

BrandsDropbox.displayName = 'BrandsDropbox'

export default BrandsDropbox
