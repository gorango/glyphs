
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M20 64H60C62.2091 64 64 62.2091 64 60V28.3195C64 28.1431 63.8569 28 63.6805 28H16.3195C16.1431 28 16 28.1431 16 28.3195V60C16 62.2091 17.7909 64 20 64Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 20C12 17.7909 13.7909 16 16 16H64C66.2091 16 68 17.7909 68 20V27C68 27.5523 67.5523 28 67 28H13C12.4477 28 12 27.5523 12 27V20Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34.7588 38.221H45.8303"
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
            d="M12 20C12 17.7909 13.7909 16 16 16L64 16C66.2091 16 68 17.7909 68 20V20.9861C68 21.2489 67.7732 21.4528 67.5104 21.4528H12.8447C12.401 21.4528 12 21.1189 12 20.6751V20Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32.4528C16 31.9005 16.4477 31.4528 17 31.4528H63C63.5523 31.4528 64 31.9005 64 32.4528V60C64 62.2091 62.2091 64 60 64H20C17.7909 64 16 62.2091 16 60V32.4528ZM34.76 33.2218C31.9985 33.2218 29.76 35.4604 29.76 38.2218C29.76 40.9832 31.9985 43.2218 34.76 43.2218H45.8315C48.5929 43.2218 50.8315 40.9832 50.8315 38.2218C50.8315 35.4604 48.5929 33.2218 45.8315 33.2218H34.76Z"
            fill="currentColor"
          />
          <path
            d="M12 20C12 17.7909 13.7909 16 16 16L64 16C66.2091 16 68 17.7909 68 20V20.9861C68 21.2489 67.7732 21.4528 67.5104 21.4528H12.8447C12.401 21.4528 12 21.1189 12 20.6751V20Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32.4528C16 31.9005 16.4477 31.4528 17 31.4528H63C63.5523 31.4528 64 31.9005 64 32.4528V60C64 62.2091 62.2091 64 60 64H20C17.7909 64 16 62.2091 16 60V32.4528ZM34.76 33.2218C31.9985 33.2218 29.76 35.4604 29.76 38.2218C29.76 40.9832 31.9985 43.2218 34.76 43.2218H45.8315C48.5929 43.2218 50.8315 40.9832 50.8315 38.2218C50.8315 35.4604 48.5929 33.2218 45.8315 33.2218H34.76Z"
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
            d="M20 64H60C62.2091 64 64 62.2091 64 60L64 28.3195C64 28.1431 63.8569 28 63.6805 28L16.3195 28C16.1431 28 16 28.1431 16 28.3195L16 60C16 62.2091 17.7909 64 20 64Z"
            fill="#F2C94C"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 20C12 17.7909 13.7909 16 16 16L64 16C66.2091 16 68 17.7909 68 20V27C68 27.5523 67.5523 28 67 28L13 28C12.4477 28 12 27.5523 12 27L12 20Z"
            fill="#F2994A"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34.7588 38.221H45.8303"
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
            d="M20 64H60C62.2091 64 64 62.2091 64 60V28.3195C64 28.1431 63.8569 28 63.6805 28H16.3195C16.1431 28 16 28.1431 16 28.3195V60C16 62.2091 17.7909 64 20 64Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 20C12 17.7909 13.7909 16 16 16H64C66.2091 16 68 17.7909 68 20V27C68 27.5523 67.5523 28 67 28H13C12.4477 28 12 27.5523 12 27V20Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M34.759 38.221H45.8305M60 64H20C17.7909 64 16 62.2091 16 60V28.3195C16 28.1431 16.1431 28 16.3195 28H63.6805C63.8569 28 64 28.1431 64 28.3195V60C64 62.2091 62.2091 64 60 64ZM12 27V20C12 17.7909 13.7909 16 16 16H64C66.2091 16 68 17.7909 68 20V27C68 27.5523 67.5523 28 67 28H13C12.4477 28 12 27.5523 12 27Z"
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
            d="M34.759 36.221C33.6544 36.221 32.759 37.1164 32.759 38.221C32.759 39.3256 33.6544 40.221 34.759 40.221H45.8305C46.9351 40.221 47.8305 39.3256 47.8305 38.221C47.8305 37.1164 46.9351 36.221 45.8305 36.221H34.759Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 20C10 16.6863 12.6863 14 16 14L64 14C67.3137 14 70 16.6863 70 20V27C70 28.6569 68.6569 30 67 30H66V60C66 63.3137 63.3137 66 60 66H20C16.6863 66 14 63.3137 14 60V30H13C11.3431 30 10 28.6569 10 27V20ZM18 30H62V60C62 61.1046 61.1046 62 60 62H20C18.8954 62 18 61.1046 18 60V30ZM66 26H14V20C14 18.8954 14.8954 18 16 18H64C65.1046 18 66 18.8954 66 20V26Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreArchive = forwardRef((props, ref) => {
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

CoreArchive.displayName = 'CoreArchive'

export default CoreArchive
