
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M56 16L56 48C56 56.8366 48.8366 64 40 64C31.1634 64 24 56.8366 24 48V47.5"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34.6665 16L55.9998 16"
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
            d="M59 16C59 14.3431 57.6569 13 56 13C54.3431 13 53 14.3431 53 16H59ZM27 47.5C27 45.8431 25.6569 44.5 24 44.5C22.3431 44.5 21 45.8431 21 47.5H27ZM34.6667 13C33.0098 13 31.6667 14.3431 31.6667 16C31.6667 17.6569 33.0098 19 34.6667 19V13ZM56 19C57.6569 19 59 17.6569 59 16C59 14.3431 57.6569 13 56 13V19ZM59 40L59 16H53V40L59 40ZM59 48V40L53 40V48L59 48ZM27 48L27 47.5H21L21 48H27ZM40 61C32.8203 61 27 55.1797 27 48H21C21 58.4934 29.5066 67 40 67V61ZM40 67C50.4934 67 59 58.4934 59 48L53 48C53 55.1797 47.1797 61 40 61V67ZM34.6667 19L56 19V13L34.6667 13V19Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M58 16C58 14.8954 57.1046 14 56 14C54.8954 14 54 14.8954 54 16H58ZM26 47.5C26 46.3954 25.1046 45.5 24 45.5C22.8954 45.5 22 46.3954 22 47.5H26ZM34.6667 14C33.5621 14 32.6667 14.8954 32.6667 16C32.6667 17.1046 33.5621 18 34.6667 18V14ZM56 18C57.1046 18 58 17.1046 58 16C58 14.8954 57.1046 14 56 14V18ZM58 40L58 16H54V40L58 40ZM58 48V40L54 40V48L58 48ZM26 48L26 47.5H22V48H26ZM40 62C32.268 62 26 55.732 26 48H22C22 57.9411 30.0589 66 40 66V62ZM40 66C49.9411 66 58 57.9411 58 48L54 48C54 55.732 47.732 62 40 62V66ZM34.6667 18L56 18V14L34.6667 14V18Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M24 47.5V48C24 56.8366 31.1634 64 40 64C48.8366 64 56 56.8366 56 48V16H34.6667"
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
            d="M58 16C58 14.8954 57.1046 14 56 14L34.6667 14C33.5621 14 32.6667 14.8954 32.6667 16C32.6667 17.1046 33.5621 18 34.6667 18L54 18L54 48C54 55.732 47.732 62 40 62C32.268 62 26 55.732 26 48V47.5C26 46.3954 25.1046 45.5 24 45.5C22.8954 45.5 22 46.3954 22 47.5V48C22 57.9411 30.0589 66 40 66C49.9411 66 58 57.9411 58 48L58 16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreJ = forwardRef((props, ref) => {
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

CoreJ.displayName = 'CoreJ'

export default CoreJ
