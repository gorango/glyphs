
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M61 66H19"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 58V66"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M5 18.0005C5 15.7912 6.79109 14.0003 9.00038 14.0005L71.0004 14.0063C73.2094 14.0065 75 15.7973 75 18.0063V54.0001C75 56.2093 73.2091 58.0001 71 58.0001H9C6.79086 58.0001 5 56.2093 5 54.0001L5 18.0005Z"
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
            d="M61 66H40H19"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M40 58V66"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M5 18.0004C5 15.7911 6.79109 14.0002 9.00038 14.0004L71.0004 14.0062C73.2094 14.0064 75 15.7972 75 18.0062V54C75 56.2091 73.2091 58 71 58L9 58C6.79086 58 5 56.2091 5 54L5 18.0004Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M61 66H40H19"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M40 58V66"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M5 18.0004C5 15.7911 6.79109 14.0002 9.00038 14.0004L71.0004 14.0062C73.2094 14.0064 75 15.7972 75 18.0062V54C75 56.2091 73.2091 58 71 58L9 58C6.79086 58 5 56.2091 5 54L5 18.0004Z"
            fill="#9B51E0"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M5 18.0004C5 15.7911 6.79109 14.0002 9.00038 14.0004L71.0004 14.0062C73.2094 14.0064 75 15.7972 75 18.0062V54C75 56.2091 73.2091 58 71 58H9C6.79086 58 5 56.2091 5 54L5 18.0004Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 66H61M40 66H19M40 66V58M5 54L5 18.0004C5 15.7911 6.79109 14.0002 9.00038 14.0004L71.0004 14.0062C73.2094 14.0064 75 15.7972 75 18.0062V54C75 56.2091 73.2091 58 71 58H9C6.79086 58 5 56.2091 5 54Z"
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
            d="M38 60.0001H9C5.68629 60.0001 3 57.3138 3 54.0001L3 18.0005C3 14.6866 5.68664 12.0002 9.00056 12.0005L71.0006 12.0063C74.314 12.0066 77 14.6928 77 18.0063V54.0001C77 57.3138 74.3137 60.0001 71 60.0001H42V64.0001H61C62.1046 64.0001 63 64.8955 63 66.0001C63 67.1047 62.1046 68.0001 61 68.0001H19C17.8954 68.0001 17 67.1047 17 66.0001C17 64.8955 17.8954 64.0001 19 64.0001H38V60.0001ZM7 18.0005C7 16.8958 7.89554 16.0004 9.00019 16.0005L71.0002 16.0063C72.1047 16.0064 73 16.9018 73 18.0063V54.0001C73 55.1047 72.1046 56.0001 71 56.0001L40 56.0001L9 56.0001C7.89543 56.0001 7 55.1047 7 54.0001V18.0005Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreMonitor = forwardRef((props, ref) => {
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

CoreMonitor.displayName = 'CoreMonitor'

export default CoreMonitor
