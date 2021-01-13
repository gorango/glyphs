
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M30 13.5H23C20.2386 13.5 18 15.7386 18 18.5V64.5C18 67.2614 20.2386 69.5 23 69.5H57C59.7614 69.5 62 67.2614 62 64.5V18.5C62 15.7386 59.7614 13.5 57 13.5H50"
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
        </>
      )
    case 'bold':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30 13L23 13C20.2386 13 18 15.2386 18 18L18 64C18 66.7614 20.2386 69 23 69H57C59.7614 69 62 66.7614 62 64L62 18C62 15.2386 59.7614 13 57 13L50 13C50 15.2091 48.2091 17 46 17H34C31.7909 17 30 15.2091 30 13Z"
            fill="currentColor"
          />
          <path
            d="M30 13H31.5V11.5H30V13ZM23 69V70.5V69ZM57 69V67.5V69ZM50 13V11.5H48.5V13H50ZM23 14.5L30 14.5V11.5L23 11.5V14.5ZM19.5 18C19.5 16.067 21.067 14.5 23 14.5V11.5C19.4101 11.5 16.5 14.4102 16.5 18H19.5ZM19.5 64L19.5 18H16.5L16.5 64H19.5ZM23 67.5C21.067 67.5 19.5 65.933 19.5 64H16.5C16.5 67.5899 19.4102 70.5 23 70.5V67.5ZM57 67.5H23V70.5H57V67.5ZM60.5 64C60.5 65.933 58.933 67.5 57 67.5V70.5C60.5899 70.5 63.5 67.5898 63.5 64H60.5ZM60.5 18L60.5 64H63.5L63.5 18H60.5ZM57 14.5C58.933 14.5 60.5 16.067 60.5 18H63.5C63.5 14.4101 60.5899 11.5 57 11.5V14.5ZM50 14.5L57 14.5V11.5L50 11.5V14.5ZM48.5 13C48.5 14.3807 47.3807 15.5 46 15.5V18.5C49.0376 18.5 51.5 16.0376 51.5 13H48.5ZM46 15.5H34V18.5H46V15.5ZM34 15.5C32.6193 15.5 31.5 14.3807 31.5 13H28.5C28.5 16.0376 30.9624 18.5 34 18.5V15.5Z"
            fill="currentColor"
          />
          <rect
            x="30"
            y="9"
            width="20"
            height="8"
            rx="4"
            stroke="currentColor"
            stroke-width={strokeWidth}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30 13L23 13C20.2386 13 18 15.2386 18 18L18 64C18 66.7614 20.2386 69 23 69H57C59.7614 69 62 66.7614 62 64L62 18C62 15.2386 59.7614 13 57 13L50 13C50 15.2091 48.2091 17 46 17H34C31.7909 17 30 15.2091 30 13Z"
            fill="#F2C94C"
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
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M30 13.5H23C20.2386 13.5 18 15.7386 18 18.5V64.5C18 67.2614 20.2386 69.5 23 69.5H57C59.7614 69.5 62 67.2614 62 64.5V18.5C62 15.7386 59.7614 13.5 57 13.5H50C50 15.7091 48.2091 17.5 46 17.5H34C31.7909 17.5 30 15.7091 30 13.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30 13.5C30 11.2909 31.7909 9.5 34 9.5H46C48.2091 9.5 50 11.2909 50 13.5C50 15.7091 48.2091 17.5 46 17.5H34C31.7909 17.5 30 15.7091 30 13.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30 13.5H23C20.2386 13.5 18 15.7386 18 18.5V64.5C18 67.2614 20.2386 69.5 23 69.5H57C59.7614 69.5 62 67.2614 62 64.5V18.5C62 15.7386 59.7614 13.5 57 13.5H50M30 13.5C30 15.7091 31.7909 17.5 34 17.5H46C48.2091 17.5 50 15.7091 50 13.5M30 13.5C30 11.2909 31.7909 9.5 34 9.5H46C48.2091 9.5 50 11.2909 50 13.5"
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
            d="M51.6586 11H57C60.866 11 64 14.134 64 18V64C64 67.866 60.866 71 57 71H23C19.134 71 16 67.866 16 64V18C16 14.134 19.134 11 23 11H28.3414C29.1651 8.66962 31.3876 7 34 7H46C48.6124 7 50.8349 8.66962 51.6586 11ZM28.3414 15H23C21.3431 15 20 16.3431 20 18V64C20 65.6569 21.3431 67 23 67H57C58.6569 67 60 65.6569 60 64V18C60 16.3431 58.6569 15 57 15H51.6586C50.8349 17.3304 48.6124 19 46 19H34C31.5147 19 29.3824 17.489 28.4715 15.3355C28.4249 15.2253 28.3815 15.1134 28.3414 15ZM48 13C48 11.8954 47.1046 11 46 11H34C32.8954 11 32 11.8954 32 13C32 14.1046 32.8954 15 34 15H46C47.1046 15 48 14.1046 48 13Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreClipboard = forwardRef((props, ref) => {
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

CoreClipboard.displayName = 'CoreClipboard'

export default CoreClipboard
