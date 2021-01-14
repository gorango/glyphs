
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M18 17C18 14.7909 19.7909 13 22 13H58C60.2091 13 62 14.7909 62 17V65C62 67.2091 60.2091 69 58 69H22C19.7909 69 18 67.2091 18 65V17Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 11V15M36 11V15M52 11V15M44 11V15"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 25H52"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 33H44"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 41H52"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 49H44"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 57H52"
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
            d="M29.5 11.5C29.5 10.6716 28.8284 10 28 10C27.1716 10 26.5 10.6716 26.5 11.5V13.5H22C19.7909 13.5 18 15.2909 18 17.5V65.5C18 67.7091 19.7909 69.5 22 69.5H58C60.2091 69.5 62 67.7091 62 65.5V17.5C62 15.2909 60.2091 13.5 58 13.5H53.5V11.5C53.5 10.6716 52.8284 10 52 10C51.1716 10 50.5 10.6716 50.5 11.5V13.5H45.5V11.5C45.5 10.6716 44.8284 10 44 10C43.1716 10 42.5 10.6716 42.5 11.5V13.5H37.5V11.5C37.5 10.6716 36.8284 10 36 10C35.1716 10 34.5 10.6716 34.5 11.5V13.5H29.5V11.5ZM28 23C26.6193 23 25.5 24.1193 25.5 25.5C25.5 26.8807 26.6193 28 28 28H52C53.3807 28 54.5 26.8807 54.5 25.5C54.5 24.1193 53.3807 23 52 23H28ZM25.5 41.5C25.5 40.1193 26.6193 39 28 39H52C53.3807 39 54.5 40.1193 54.5 41.5C54.5 42.8807 53.3807 44 52 44H28C26.6193 44 25.5 42.8807 25.5 41.5ZM28 55C26.6193 55 25.5 56.1193 25.5 57.5C25.5 58.8807 26.6193 60 28 60H52C53.3807 60 54.5 58.8807 54.5 57.5C54.5 56.1193 53.3807 55 52 55H28ZM25.5 33.5C25.5 32.1193 26.6193 31 28 31H44C45.3807 31 46.5 32.1193 46.5 33.5C46.5 34.8807 45.3807 36 44 36H28C26.6193 36 25.5 34.8807 25.5 33.5ZM28 47C26.6193 47 25.5 48.1193 25.5 49.5C25.5 50.8807 26.6193 52 28 52H44C45.3807 52 46.5 50.8807 46.5 49.5C46.5 48.1193 45.3807 47 44 47H28Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="18"
            y="13"
            width="44"
            height="56"
            rx="4"
            fill="#F2F2F2"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
          />
          <path
            d="M28 25L52 25"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 33H44"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 41L52 41"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 49H44"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 57L52 57"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 11V15"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 11V15"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52 11V15"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 11V15"
            stroke="#F2994A"
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
            d="M18 17C18 14.7909 19.7909 13 22 13H58C60.2091 13 62 14.7909 62 17V65C62 67.2091 60.2091 69 58 69H22C19.7909 69 18 67.2091 18 65V17Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28 25H52M28 33H44M28 41H52M28 49H44M28 57H52M28 11V15M36 11V15M52 11V15M44 11V15M22 69H58C60.2091 69 62 67.2091 62 65V17C62 14.7909 60.2091 13 58 13H22C19.7909 13 18 14.7909 18 17V65C18 67.2091 19.7909 69 22 69Z"
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
            d="M28 23C26.8954 23 26 23.8954 26 25C26 26.1046 26.8954 27 28 27H52C53.1046 27 54 26.1046 54 25C54 23.8954 53.1046 23 52 23H28Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M26 41C26 39.8954 26.8954 39 28 39H52C53.1046 39 54 39.8954 54 41C54 42.1046 53.1046 43 52 43H28C26.8954 43 26 42.1046 26 41Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 55C26.8954 55 26 55.8954 26 57C26 58.1046 26.8954 59 28 59H52C53.1046 59 54 58.1046 54 57C54 55.8954 53.1046 55 52 55H28Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M26 33C26 31.8954 26.8954 31 28 31H44C45.1046 31 46 31.8954 46 33C46 34.1046 45.1046 35 44 35H28C26.8954 35 26 34.1046 26 33Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 47C26.8954 47 26 47.8954 26 49C26 50.1046 26.8954 51 28 51H44C45.1046 51 46 50.1046 46 49C46 47.8954 45.1046 47 44 47H28Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28 9C29.1046 9 30 9.89543 30 11H34C34 9.89543 34.8954 9 36 9C37.1046 9 38 9.89543 38 11H42C42 9.89543 42.8954 9 44 9C45.1046 9 46 9.89543 46 11H50C50 9.89543 50.8954 9 52 9C53.1046 9 54 9.89543 54 11H58C61.3137 11 64 13.6863 64 17V65C64 68.3137 61.3137 71 58 71H22C18.6863 71 16 68.3137 16 65V17C16 13.6863 18.6863 11 22 11H26C26 9.89543 26.8954 9 28 9ZM42 15C42 16.1046 42.8954 17 44 17C45.1046 17 46 16.1046 46 15H50C50 16.1046 50.8954 17 52 17C53.1046 17 54 16.1046 54 15H58C59.1046 15 60 15.8954 60 17V65C60 66.1046 59.1046 67 58 67H22C20.8954 67 20 66.1046 20 65V17C20 15.8954 20.8954 15 22 15H26C26 16.1046 26.8954 17 28 17C29.1046 17 30 16.1046 30 15H34C34 16.1046 34.8954 17 36 17C37.1046 17 38 16.1046 38 15H42Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreNotePad = forwardRef((props, ref) => {
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

CoreNotePad.displayName = 'CoreNotePad'

export default CoreNotePad
