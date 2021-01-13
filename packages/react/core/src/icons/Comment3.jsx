
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M24 12C19.5817 12 16 15.5817 16 20V52C16 56.4183 19.5817 60 24 60H34L40 68L46 60H56C60.4183 60 64 56.4183 64 52V20C64 15.5817 60.4183 12 56 12H24Z"
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
            d="M24 12C19.5817 12 16 15.5817 16 20V52C16 56.4183 19.5817 60 24 60H34L40 68L46 60H56C60.4183 60 64 56.4183 64 52V20C64 15.5817 60.4183 12 56 12H24Z"
            fill="currentColor"
          />
          <path
            d="M34 60L35.6 58.8C35.2223 58.2964 34.6295 58 34 58V60ZM40 68L38.4 69.2C38.7777 69.7036 39.3705 70 40 70C40.6295 70 41.2223 69.7036 41.6 69.2L40 68ZM46 60V58C45.3705 58 44.7777 58.2964 44.4 58.8L46 60ZM18 20C18 16.6863 20.6863 14 24 14V10C18.4772 10 14 14.4772 14 20H18ZM18 52V20H14V52H18ZM24 58C20.6863 58 18 55.3137 18 52H14C14 57.5228 18.4772 62 24 62V58ZM34 58H24V62H34V58ZM32.4 61.2L38.4 69.2L41.6 66.8L35.6 58.8L32.4 61.2ZM41.6 69.2L47.6 61.2L44.4 58.8L38.4 66.8L41.6 69.2ZM56 58H46V62H56V58ZM62 52C62 55.3137 59.3137 58 56 58V62C61.5228 62 66 57.5228 66 52H62ZM62 20V52H66V20H62ZM56 14C59.3137 14 62 16.6863 62 20H66C66 14.4772 61.5228 10 56 10V14ZM24 14H56V10H24V14Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 12C19.5817 12 16 15.5817 16 20V52C16 56.4183 19.5817 60 24 60H34L40 68L46 60H56C60.4183 60 64 56.4183 64 52V20C64 15.5817 60.4183 12 56 12H24Z"
            fill="#EB5757"
          />
          <path
            d="M34 60L35.6 58.8C35.2223 58.2964 34.6295 58 34 58V60ZM40 68L38.4 69.2C38.7777 69.7036 39.3705 70 40 70C40.6295 70 41.2223 69.7036 41.6 69.2L40 68ZM46 60V58C45.3705 58 44.7777 58.2964 44.4 58.8L46 60ZM18 20C18 16.6863 20.6863 14 24 14V10C18.4772 10 14 14.4772 14 20H18ZM18 52V20H14V52H18ZM24 58C20.6863 58 18 55.3137 18 52H14C14 57.5228 18.4772 62 24 62V58ZM34 58H24V62H34V58ZM32.4 61.2L38.4 69.2L41.6 66.8L35.6 58.8L32.4 61.2ZM41.6 69.2L47.6 61.2L44.4 58.8L38.4 66.8L41.6 69.2ZM56 58H46V62H56V58ZM62 52C62 55.3137 59.3137 58 56 58V62C61.5228 62 66 57.5228 66 52H62ZM62 20V52H66V20H62ZM56 14C59.3137 14 62 16.6863 62 20H66C66 14.4772 61.5228 10 56 10V14ZM24 14H56V10H24V14Z"
            fill="#EB5757"
          />
          <rect
            x="23"
            y="19"
            width="34"
            height="34"
            rx="8"
            fill="#F2994A"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M24 12C19.5817 12 16 15.5817 16 20V52C16 56.4183 19.5817 60 24 60H34L40 68L46 60H56C60.4183 60 64 56.4183 64 52V20C64 15.5817 60.4183 12 56 12H24Z"
            fill="currentColor"
            fill-opacity="0.25"
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
            d="M14 20C14 14.4772 18.4772 10 24 10H56C61.5228 10 66 14.4772 66 20V52C66 57.5228 61.5228 62 56 62H47L41.6 69.2C41.2223 69.7036 40.6295 70 40 70C39.3705 70 38.7777 69.7036 38.4 69.2L33 62H24C18.4772 62 14 57.5228 14 52V20ZM24 14C20.6863 14 18 16.6863 18 20V52C18 55.3137 20.6863 58 24 58H34C34.6295 58 35.2223 58.2964 35.6 58.8L40 64.6667L44.4 58.8C44.7777 58.2964 45.3705 58 46 58H56C59.3137 58 62 55.3137 62 52V20C62 16.6863 59.3137 14 56 14H24Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreComment3 = forwardRef((props, ref) => {
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

CoreComment3.displayName = 'CoreComment3'

export default CoreComment3
