
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M30 11H32C36.4183 11 40 14.5817 40 19V61C40 65.4183 36.4183 69 32 69H30"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50 11H48C43.5817 11 40 14.5817 40 19V61C40 65.4183 43.5817 69 48 69H50"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34 40H46"
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
            d="M30 8C28.3431 8 27 9.34315 27 11C27 12.6569 28.3431 14 30 14V8ZM30 66C28.3431 66 27 67.3431 27 69C27 70.6569 28.3431 72 30 72V66ZM50 14C51.6569 14 53 12.6569 53 11C53 9.34315 51.6569 8 50 8V14ZM50 72C51.6569 72 53 70.6569 53 69C53 67.3431 51.6569 66 50 66V72ZM30 14H32V8H30V14ZM37 19V61H43V19H37ZM32 66H30V72H32V66ZM37 61C37 63.7614 34.7614 66 32 66V72C38.0751 72 43 67.0751 43 61H37ZM32 14C34.7614 14 37 16.2386 37 19H43C43 12.9249 38.0751 8 32 8V14ZM50 8H48V14H50V8ZM37 19V61H43V19H37ZM48 72H50V66H48V72ZM37 61C37 67.0751 41.9249 72 48 72V66C45.2386 66 43 63.7614 43 61H37ZM48 8C41.9249 8 37 12.9249 37 19H43C43 16.2386 45.2386 14 48 14V8Z"
            fill="currentColor"
          />
          <path
            d="M34 40H46"
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
            d="M30 9C28.8954 9 28 9.89543 28 11C28 12.1046 28.8954 13 30 13V9ZM30 67C28.8954 67 28 67.8954 28 69C28 70.1046 28.8954 71 30 71V67ZM50 13C51.1046 13 52 12.1046 52 11C52 9.89543 51.1046 9 50 9V13ZM50 71C51.1046 71 52 70.1046 52 69C52 67.8954 51.1046 67 50 67V71ZM30 13H32V9H30V13ZM38 19V61H42V19H38ZM32 67H30V71H32V67ZM38 61C38 64.3137 35.3137 67 32 67V71C37.5228 71 42 66.5228 42 61H38ZM32 13C35.3137 13 38 15.6863 38 19H42C42 13.4772 37.5228 9 32 9V13ZM50 9H48V13H50V9ZM38 19V61H42V19H38ZM48 71H50V67H48V71ZM38 61C38 66.5228 42.4772 71 48 71V67C44.6863 67 42 64.3137 42 61H38ZM48 9C42.4772 9 38 13.4772 38 19H42C42 15.6863 44.6863 13 48 13V9Z"
            fill="#56CCF2"
          />
          <path
            d="M34 40H46"
            stroke="#9B51E0"
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
            d="M30 11H32C36.4183 11 40 14.5817 40 19M40 19V61M40 19C40 14.5817 43.5817 11 48 11H50M40 61C40 65.4183 36.4183 69 32 69H30M40 61C40 65.4183 43.5817 69 48 69H50M34 40H46"
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
            d="M40 12.999C38.1755 10.5707 35.2712 9 32 9H30C28.8954 9 28 9.89543 28 11C28 12.1046 28.8954 13 30 13H32C35.3137 13 38 15.6863 38 19V38H34C32.8954 38 32 38.8954 32 40C32 41.1046 32.8954 42 34 42H38V61C38 64.3137 35.3137 67 32 67H30C28.8954 67 28 67.8954 28 69C28 70.1046 28.8954 71 30 71H32C35.2712 71 38.1755 69.4293 40 67.001C41.8245 69.4293 44.7288 71 48 71H50C51.1046 71 52 70.1046 52 69C52 67.8954 51.1046 67 50 67H48C44.6863 67 42 64.3137 42 61V42H46C47.1046 42 48 41.1046 48 40C48 38.8954 47.1046 38 46 38H42V19C42 15.6863 44.6863 13 48 13H50C51.1046 13 52 12.1046 52 11C52 9.89543 51.1046 9 50 9H48C44.7288 9 41.8245 10.5707 40 12.999Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreCursor = forwardRef((props, ref) => {
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

CoreCursor.displayName = 'CoreCursor'

export default CoreCursor
