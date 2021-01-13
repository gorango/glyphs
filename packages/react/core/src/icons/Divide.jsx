
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M62 39.5L18 39.5"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35 26C35 23.2386 37.2386 21 40 21C42.7614 21 45 23.2386 45 26C45 28.7614 42.7614 31 40 31C37.2386 31 35 28.7614 35 26Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35 54C35 51.2386 37.2386 49 40 49C42.7614 49 45 51.2386 45 54C45 56.7614 42.7614 59 40 59C37.2386 59 35 56.7614 35 54Z"
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
            d="M18 39.5L38 39.5L42 39.5L62 39.5"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="35"
            y="21"
            width="10"
            height="10"
            rx="5"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="35"
            y="49"
            width="10"
            height="10"
            rx="5"
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
            d="M18 39.5L38 39.5L42 39.5L62 39.5"
            stroke="#219653"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="35"
            y="21"
            width="10"
            height="10"
            rx="5"
            stroke="#6FCF97"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="35"
            y="49"
            width="10"
            height="10"
            rx="5"
            stroke="#6FCF97"
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
            d="M62 39.5H18M40 31C37.2386 31 35 28.7614 35 26C35 23.2386 37.2386 21 40 21C42.7614 21 45 23.2386 45 26C45 28.7614 42.7614 31 40 31ZM40 59C37.2386 59 35 56.7614 35 54C35 51.2386 37.2386 49 40 49C42.7614 49 45 51.2386 45 54C45 56.7614 42.7614 59 40 59Z"
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
            d="M33 26C33 22.134 36.134 19 40 19C43.866 19 47 22.134 47 26C47 29.866 43.866 33 40 33C36.134 33 33 29.866 33 26ZM40 23C38.3431 23 37 24.3431 37 26C37 27.6569 38.3431 29 40 29C41.6569 29 43 27.6569 43 26C43 24.3431 41.6569 23 40 23Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 39.5C16 38.3954 16.8954 37.5 18 37.5L62 37.5C63.1046 37.5 64 38.3954 64 39.5C64 40.6046 63.1046 41.5 62 41.5L18 41.5C16.8954 41.5 16 40.6046 16 39.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 47C36.134 47 33 50.134 33 54C33 57.866 36.134 61 40 61C43.866 61 47 57.866 47 54C47 50.134 43.866 47 40 47ZM37 54C37 52.3431 38.3431 51 40 51C41.6569 51 43 52.3431 43 54C43 55.6569 41.6569 57 40 57C38.3431 57 37 55.6569 37 54Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreDivide = forwardRef((props, ref) => {
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

CoreDivide.displayName = 'CoreDivide'

export default CoreDivide
