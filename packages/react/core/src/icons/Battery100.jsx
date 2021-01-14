
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M58 68L58 20C58 17.7909 56.2091 16 54 16L26 16C23.7909 16 22 17.7909 22 20L22 68C22 70.2091 23.7909 72 26 72H54C56.2091 72 58 70.2091 58 68Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48 8L32 8"
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
            d="M26 72C23.7909 72 22 70.2091 22 68L22 20C22 17.7909 23.7909 16 26 16L54 16C56.2091 16 58 17.7909 58 20L58 68C58 70.2091 56.2091 72 54 72H26Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M54.0056 16C54.0037 16 54.0019 16 54 16L26 16C25.9981 16 25.9963 16 25.9944 16C23.7878 16.003 22 17.7927 22 20L22 68C22 70.2091 23.7909 72 26 72L54 72C56.2091 72 58 70.2091 58 68L58 20C58 17.7927 56.2122 16.003 54.0056 16Z"
            fill="currentColor"
          />
          <path
            d="M32 8L48 8"
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
            d="M26 72C23.7909 72 22 70.2091 22 68L22 20C22 17.7909 23.7909 16 26 16L54 16C56.2091 16 58 17.7909 58 20L58 68C58 70.2091 56.2091 72 54 72H26Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M54.0056 16C54.0037 16 54.0019 16 54 16L26 16C25.9981 16 25.9963 16 25.9944 16C23.7878 16.003 22 17.7927 22 20L22 68C22 70.2091 23.7909 72 26 72L54 72C56.2091 72 58 70.2091 58 68L58 20C58 17.7927 56.2122 16.003 54.0056 16Z"
            fill="#2F80ED"
          />
          <path
            d="M32 8L48 8"
            stroke="#F2C94C"
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
            d="M26 72C23.7909 72 22 70.2091 22 68L22 20C22 17.7909 23.7909 16 26 16L54 16C56.2091 16 58 17.7909 58 20L58 68C58 70.2091 56.2091 72 54 72H26Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M54.0056 16C54.0037 16 54.0019 16 54 16L26 16C25.9981 16 25.9963 16 25.9944 16C23.7878 16.003 22 17.7927 22 20L22 68C22 70.2091 23.7909 72 26 72H54C56.2091 72 58 70.2091 58 68L58 20C58 17.7927 56.2122 16.003 54.0056 16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M54 16L26 16M54 16C56.2091 16 58 17.7909 58 20M54 16C54.0019 16 54.0037 16 54.0056 16C56.2122 16.003 58 17.7927 58 20M58 20L58 68C58 70.2091 56.2091 72 54 72H26C23.7909 72 22 70.2091 22 68L22 20M22 20C22 17.7909 23.7909 16 26 16M22 20C22 17.7927 23.7878 16.003 25.9944 16C25.9963 16 25.9981 16 26 16M48 8L32 8"
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
            d="M32 6C30.8954 6 30 6.89543 30 8C30 9.10457 30.8954 10 32 10L48 10C49.1045 10 50 9.10457 50 8C50 6.89543 49.1045 6 48 6L32 6Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26 14L54 14C57.3137 14 60 16.6863 60 20V68C60 71.3137 57.3137 74 54 74H26C22.6863 74 20 71.3137 20 68L20 20C20 16.8934 22.361 14.3382 25.3865 14.031C25.5882 14.0105 25.7929 14 26 14ZM54 18L26 18C24.9645 18 24.1127 18.787 24.0103 19.7955C24.0035 19.8628 24 19.931 24 20L24 68C24 69.0355 24.787 69.8873 25.7955 69.9897C25.8627 69.9965 25.931 70 26 70H54C55.1046 70 56 69.1046 56 68V20C56 18.8954 55.1046 18 54 18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBattery100 = forwardRef((props, ref) => {
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

CoreBattery100.displayName = 'CoreBattery100'

export default CoreBattery100
