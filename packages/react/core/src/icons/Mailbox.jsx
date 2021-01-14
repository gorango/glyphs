
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M8 35C8 26.7157 14.7157 20 23 20C31.2843 20 38 26.7157 38 35V59.9504C38 59.9778 37.9778 60 37.9504 60H8.05754C8.02576 60 8 59.9742 8 59.9425V35Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M23.4919 20.0079C23.6607 20.0027 23.83 20 24 20H56C64.8366 20 72 27.1634 72 36V59.9504C72 59.9778 71.9778 60 71.9505 60H37.9505C37.9778 60 38 59.9778 38 59.9504"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M26 34H18"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M57 34H64C64.5523 34 65 34.4477 65 35V42C65 44.2091 63.2091 46 61 46C58.7909 46 57 44.2091 57 42V34ZM57 34H46"
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
            d="M23 20C14.7157 20 8 26.7157 8 35V59.9425C8 59.9742 8.02576 60 8.05754 60H37.9504C37.9778 60 38 59.9778 38 59.9504V35C38 26.7157 31.2843 20 23 20ZM18 32C16.8954 32 16 32.8954 16 34C16 35.1046 16.8954 36 18 36H26C27.1046 36 28 35.1046 28 34C28 32.8954 27.1046 32 26 32H18Z"
            fill="currentColor"
          />
          <path
            d="M59 36V42C59 43.1046 59.8954 44 61 44C62.1046 44 63 43.1046 63 42V36H59Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M71.9505 60H40.9996C40.9999 59.9835 41 59.967 41 59.9504V35C41 28.7391 37.8035 23.2248 32.9534 20H56C64.8366 20 72 27.1634 72 36V59.9504C72 59.9778 71.9778 60 71.9505 60ZM44 34C44 32.8954 44.8954 32 46 32H64C65.6569 32 67 33.3431 67 35V42C67 45.3137 64.3137 48 61 48C57.6863 48 55 45.3137 55 42V36H46C44.8954 36 44 35.1046 44 34Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M8 35C8 26.7157 14.7157 20 23 20C31.2843 20 38 26.7157 38 35V36V59.9504C38 59.9778 37.9778 60 37.9504 60H8.05754C8.02576 60 8 59.9742 8 59.9425V36V35Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 20C23.83 20 23.6607 20.0027 23.4919 20.0079C31.5485 20.2675 38 26.8803 38 35V36V59.9504C38 59.9778 37.9778 60 37.9505 60H71.9505C71.9778 60 72 59.9778 72 59.9504V36C72 27.1634 64.8366 20 56 20H24Z"
            fill="#56CCF2"
          />
          <path
            d="M57 34H64C64.5523 34 65 34.4477 65 35V42C65 44.2091 63.2091 46 61 46C58.7909 46 57 44.2091 57 42V34Z"
            fill="#EB5757"
          />
          <path
            d="M57 34H64C64.5523 34 65 34.4477 65 35V35V42C65 44.2091 63.2091 46 61 46V46C58.7909 46 57 44.2091 57 42V34ZM57 34H46"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M26 34H18"
            stroke="#F2F2F2"
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
            d="M8 35C8 26.7157 14.7157 20 23 20C31.2843 20 38 26.7157 38 35V59.9504C38 59.9778 37.9778 60 37.9504 60H8.05754C8.02576 60 8 59.9742 8 59.9425V35Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24 20C23.83 20 23.6607 20.0027 23.4919 20.0079C31.5485 20.2675 38 26.8803 38 35V59.9504C38 59.9778 37.9778 60 37.9504 60H71.9505C71.9778 60 72 59.9778 72 59.9504V36C72 27.1634 64.8366 20 56 20H24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M57 34H64C64.5523 34 65 34.4477 65 35V42C65 44.2091 63.2091 46 61 46C58.7909 46 57 44.2091 57 42V34Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M37.9504 60H8.05754C8.02576 60 8 59.9742 8 59.9425V35C8 26.7157 14.7157 20 23 20C31.2843 20 38 26.7157 38 35M37.9504 60C37.9778 60 38 59.9778 38 59.9504V35M37.9504 60H71.9505C71.9778 60 72 59.9778 72 59.9504V36C72 27.1634 64.8366 20 56 20H24C23.83 20 23.6607 20.0027 23.4919 20.0079C31.5485 20.2675 38 26.8803 38 35M57 34H64C64.5523 34 65 34.4477 65 35V42C65 44.2091 63.2091 46 61 46C58.7909 46 57 44.2091 57 42V34ZM57 34H46M26 34H18"
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
            d="M42 34C42 32.8954 42.8954 32 44 32H62C63.6569 32 65 33.3431 65 35V42C65 45.3137 62.3137 48 59 48C55.6863 48 53 45.3137 53 42V36H44C42.8954 36 42 35.1046 42 34ZM57 36V42C57 43.1046 57.8954 44 59 44C60.1046 44 61 43.1046 61 42V36H57Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M18 32C16.8954 32 16 32.8954 16 34C16 35.1046 16.8954 36 18 36H26C27.1046 36 28 35.1046 28 34C28 32.8954 27.1046 32 26 32H18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23 18C13.6112 18 6 25.6112 6 35V59.9425C6 61.0788 6.92119 62 8.05754 62H71.9505C73.0824 62 74 61.0824 74 59.9504V36C74 26.0589 65.9411 18 56 18H24C23.8306 18 23.6616 18.0023 23.4931 18.007C23.3293 18.0023 23.1649 18 23 18ZM34.3596 22.3523C34.2266 22.2328 34.0917 22.1153 33.955 22H56C63.732 22 70 28.268 70 36V58H40L40 35C40 30.3056 38.0972 26.0556 35.0208 22.9792C34.806 22.7644 34.5855 22.5554 34.3596 22.3523ZM35.7359 32.38C34.5237 26.4562 29.2822 22 23 22C15.8203 22 10 27.8203 10 35V58H36V35C36 34.5553 35.9777 34.1157 35.9341 33.6825C35.8897 33.2415 35.8232 32.8069 35.7359 32.38Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreMailbox = forwardRef((props, ref) => {
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

CoreMailbox.displayName = 'CoreMailbox'

export default CoreMailbox
