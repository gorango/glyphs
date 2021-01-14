
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M32 50.5C32 54.366 27.9706 57.5 23 57.5C18.0294 57.5 14 54.366 14 50.5C14 46.634 18.0294 43.5 23 43.5C27.9706 43.5 32 46.634 32 50.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32 50.5L32 14.5"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M66 58.5C66 62.366 61.9706 65.5 57 65.5C52.0294 65.5 48 62.366 48 58.5C48 54.634 52.0294 51.5 57 51.5C61.9706 51.5 66 54.634 66 58.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M66 58.5L66 22.5"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32 14.5L66 22.5"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32 24.5L66 32.5"
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
            d="M32 50L32 14"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <ellipse cx="23" cy="50" rx="9" ry="7" fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>
          <path
            d="M66 58L66 22"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <ellipse cx="57" cy="58" rx="9" ry="7" fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>
          <path
            d="M32 24L66 32"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32 14L66 22"
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
            d="M32 50L32 14"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <ellipse cx="23" cy="50" rx="9" ry="7" fill="#56CCF2" stroke="#56CCF2" stroke-width="4" stroke-linejoin="round"/>
          <path
            d="M66 58L66 22"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <ellipse cx="57" cy="58" rx="9" ry="7" fill="#56CCF2" stroke="#56CCF2" stroke-width="4" stroke-linejoin="round"/>
          <path
            d="M32 24L66 32"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32 14L66 22"
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
            d="M32 50.5C32 54.366 27.9706 57.5 23 57.5C18.0294 57.5 14 54.366 14 50.5C14 46.634 18.0294 43.5 23 43.5C27.9706 43.5 32 46.634 32 50.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M66 58.5C66 62.366 61.9706 65.5 57 65.5C52.0294 65.5 48 62.366 48 58.5C48 54.634 52.0294 51.5 57 51.5C61.9706 51.5 66 54.634 66 58.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32 50.5L32 14.5L66 22.5V58.5M32 50.5C32 54.366 27.9706 57.5 23 57.5C18.0294 57.5 14 54.366 14 50.5C14 46.634 18.0294 43.5 23 43.5C27.9706 43.5 32 46.634 32 50.5ZM66 58.5C66 62.366 61.9706 65.5 57 65.5C52.0294 65.5 48 62.366 48 58.5C48 54.634 52.0294 51.5 57 51.5C61.9706 51.5 66 54.634 66 58.5ZM32 24.5L66 32.5"
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
            d="M66.8859 20.2064C66.7394 20.1339 66.5827 20.0788 66.4186 20.0438L32.5009 12.0632C32.413 12.0405 32.3228 12.0237 32.2307 12.0131C31.9972 11.9857 31.7663 12.0003 31.5468 12.0515C31.2539 12.1194 30.9858 12.2515 30.7579 12.4323C30.53 12.6126 30.3402 12.8433 30.2072 13.1125C30.107 13.3145 30.04 13.5358 30.0132 13.7693C30.0023 13.8615 29.9981 13.9532 30 14.044V23.9594C29.9994 23.9877 29.9994 24.0159 30 24.044L30 43.0491C28.026 41.7381 25.5291 41 23 41C17.4218 41 12 44.5908 12 50C12 55.4092 17.4218 59 23 59C28.5782 59 34 55.4092 34 50L34 26.5252L64 33.584V51.0491C62.026 49.7381 59.5291 49 57 49C51.4218 49 46 52.5908 46 58C46 63.4092 51.4218 67 57 67C62.5782 67 68 63.4092 68 58V32.0406C68.0006 32.0123 68.0006 31.9841 68 31.9559V22.0406C68.0036 21.8722 67.9857 21.7065 67.9484 21.5467C67.8807 21.2544 67.7488 20.9866 67.5685 20.7589C67.3877 20.5301 67.1563 20.3396 66.8859 20.2064ZM34 16.5252V22.4159L64 29.4748V23.584L34 16.5252ZM30 49.9965C29.9974 47.6746 27.3607 45 23 45C18.6371 45 16 47.6772 16 50C16 52.3227 18.6371 55 23 55C27.3629 55 30 52.3227 30 50V49.9965ZM64 58C64 55.6772 61.3629 53 57 53C52.6371 53 50 55.6772 50 58C50 60.3227 52.6371 63 57 63C61.3629 63 64 60.3227 64 58Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreMusic = forwardRef((props, ref) => {
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

CoreMusic.displayName = 'CoreMusic'

export default CoreMusic
