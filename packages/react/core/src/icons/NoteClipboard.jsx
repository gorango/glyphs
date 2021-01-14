
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M22 13.5H30C30 15.7091 31.7909 17.5 34 17.5H46C48.2091 17.5 50 15.7091 50 13.5H58C60.2091 13.5 62 15.2909 62 17.5V65.5C62 67.7091 60.2091 69.5 58 69.5H22C19.7909 69.5 18 67.7091 18 65.5V17.5C18 15.2909 19.7909 13.5 22 13.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 13.5C30 11.2909 31.7909 9.5 34 9.5H46C48.2091 9.5 50 11.2909 50 13.5C50 15.7091 48.2091 17.5 46 17.5H34C31.7909 17.5 30 15.7091 30 13.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 25.5H52"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 33.5H44"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 41.5H52"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 49.5H44"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 57.5H52"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38 9.5C37.4477 9.5 37 9.05228 37 8.5C37 7.94772 37.4477 7.5 38 7.5H42C42.5523 7.5 43 7.94772 43 8.5C43 9.05228 42.5523 9.5 42 9.5"
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
            d="M38 5.44782C36.6193 5.44782 35.5 6.56711 35.5 7.94782C35.5 8.30338 35.5742 8.64159 35.708 8.94782H34C31.7909 8.94782 30 10.7387 30 12.9478H22C19.7909 12.9478 18 14.7387 18 16.9478V64.9478C18 67.157 19.7909 68.9478 22 68.9478H58C60.2091 68.9478 62 67.157 62 64.9478V16.9478C62 14.7387 60.2091 12.9478 58 12.9478H50C50 10.7387 48.2091 8.94782 46 8.94782H44.292C44.4258 8.64159 44.5 8.30338 44.5 7.94782C44.5 6.56711 43.3807 5.44782 42 5.44782H38ZM28 22.4478C26.6193 22.4478 25.5 23.5671 25.5 24.9478C25.5 26.3285 26.6193 27.4478 28 27.4478H52C53.3807 27.4478 54.5 26.3285 54.5 24.9478C54.5 23.5671 53.3807 22.4478 52 22.4478H28ZM25.5 40.9478C25.5 39.5671 26.6193 38.4478 28 38.4478H52C53.3807 38.4478 54.5 39.5671 54.5 40.9478C54.5 42.3285 53.3807 43.4478 52 43.4478H28C26.6193 43.4478 25.5 42.3285 25.5 40.9478ZM28 54.4478C26.6193 54.4478 25.5 55.5671 25.5 56.9478C25.5 58.3285 26.6193 59.4478 28 59.4478H52C53.3807 59.4478 54.5 58.3285 54.5 56.9478C54.5 55.5671 53.3807 54.4478 52 54.4478H28ZM25.5 32.9478C25.5 31.5671 26.6193 30.4478 28 30.4478H44C45.3807 30.4478 46.5 31.5671 46.5 32.9478C46.5 34.3285 45.3807 35.4478 44 35.4478H28C26.6193 35.4478 25.5 34.3285 25.5 32.9478ZM28 46.4478C26.6193 46.4478 25.5 47.5671 25.5 48.9478C25.5 50.3285 26.6193 51.4478 28 51.4478H44C45.3807 51.4478 46.5 50.3285 46.5 48.9478C46.5 47.5671 45.3807 46.4478 44 46.4478H28Z"
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
            d="M22 13L30 13C30 15.2091 31.7909 17 34 17H46C48.2091 17 50 15.2091 50 13L58 13C60.2091 13 62 14.7909 62 17L62 65C62 67.2091 60.2091 69 58 69H22C19.7909 69 18 67.2091 18 65L18 17C18 14.7909 19.7909 13 22 13Z"
            fill="#F2F2F2"
          />
          <path
            d="M30 13H32V11H30V13ZM50 13V11H48V13H50ZM30 11L22 11V15L30 15V11ZM34 15C32.8954 15 32 14.1046 32 13H28C28 16.3137 30.6863 19 34 19V15ZM46 15H34V19H46V15ZM48 13C48 14.1046 47.1046 15 46 15V19C49.3137 19 52 16.3137 52 13H48ZM58 11L50 11V15L58 15V11ZM64 17C64 13.6863 61.3137 11 58 11V15C59.1046 15 60 15.8954 60 17H64ZM64 65L64 17H60L60 65H64ZM58 71C61.3137 71 64 68.3137 64 65H60C60 66.1046 59.1046 67 58 67V71ZM22 71H58V67H22L22 71ZM16 65C16 68.3137 18.6863 71 22 71L22 67C20.8954 67 20 66.1046 20 65H16ZM16 17L16 65H20L20 17H16ZM22 11C18.6863 11 16 13.6863 16 17H20C20 15.8954 20.8954 15 22 15V11Z"
            fill="#F2F2F2"
          />
          <rect
            x="30"
            y="9"
            width="20"
            height="8"
            rx="4"
            fill="#F2994A"
          />
          <rect
            x="37"
            y="7"
            width="6"
            height="2"
            rx="1"
            stroke="#F2994A"
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
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M22 13.5H30C30 15.7091 31.7909 17.5 34 17.5H46C48.2091 17.5 50 15.7091 50 13.5H58C60.2091 13.5 62 15.2909 62 17.5V65.5C62 67.7091 60.2091 69.5 58 69.5H22C19.7909 69.5 18 67.7091 18 65.5V17.5C18 15.2909 19.7909 13.5 22 13.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30 13.5C30 11.2909 31.7909 9.5 34 9.5H46C48.2091 9.5 50 11.2909 50 13.5C50 15.7091 48.2091 17.5 46 17.5H34C31.7909 17.5 30 15.7091 30 13.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M37 8.5C37 7.94772 37.4477 7.5 38 7.5H42C42.5523 7.5 43 7.94772 43 8.5C43 9.05228 42.5523 9.5 42 9.5H38C37.4477 9.5 37 9.05228 37 8.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30 13.5H22C19.7909 13.5 18 15.2909 18 17.5V65.5C18 67.7091 19.7909 69.5 22 69.5H58C60.2091 69.5 62 67.7091 62 65.5V17.5C62 15.2909 60.2091 13.5 58 13.5H50M30 13.5C30 15.7091 31.7909 17.5 34 17.5H46C48.2091 17.5 50 15.7091 50 13.5M30 13.5C30 11.2909 31.7909 9.5 34 9.5H46C48.2091 9.5 50 11.2909 50 13.5M28 25.5H52M28 33.5H44M28 41.5H52M28 49.5H44M28 57.5H52M38 9.5H42C42.5523 9.5 43 9.05228 43 8.5C43 7.94772 42.5523 7.5 42 7.5H38C37.4477 7.5 37 7.94772 37 8.5C37 9.05228 37.4477 9.5 38 9.5Z"
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
            d="M46 7H44.8293C44.4175 5.83481 43.3062 5 42 5H38C36.6938 5 35.5825 5.83481 35.1707 7H34C31.3876 7 29.1651 8.66962 28.3414 11H22C18.6863 11 16 13.6863 16 17V65C16 68.3137 18.6863 71 22 71H58C61.3137 71 64 68.3137 64 65V17C64 13.6863 61.3137 11 58 11H51.6586C50.8349 8.66962 48.6124 7 46 7ZM34 11H46C47.1046 11 48 11.8954 48 13C48 14.1046 47.1046 15 46 15H34C32.8954 15 32 14.1046 32 13C32 11.8954 32.8954 11 34 11ZM28.3414 15H22C20.8954 15 20 15.8954 20 17V65C20 66.1046 20.8954 67 22 67H58C59.1046 67 60 66.1046 60 65V17C60 15.8954 59.1046 15 58 15H51.6586C50.8349 17.3304 48.6124 19 46 19H34C31.5147 19 29.3824 17.489 28.4715 15.3355C28.4249 15.2253 28.3815 15.1134 28.3414 15Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreNoteClipboard = forwardRef((props, ref) => {
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

CoreNoteClipboard.displayName = 'CoreNoteClipboard'

export default CoreNoteClipboard
