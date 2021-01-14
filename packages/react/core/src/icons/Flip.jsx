
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M32 12V68H12L32 12Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48 12V68H68L48 12Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 12V68.1"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
            stroke-dasharray="0.01 8"
          />
        </>
      )
    case 'bold':
      return (
        <>
          <path
            d="M32 12V68H12L32 12Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48 12V68H68L48 12Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 12V68.1"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
            stroke-dasharray="0.01 8"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M32 12V68H12L32 12Z"
            fill="#2F80ED"
          />
          <path
            d="M48 12V68H68L48 12Z"
            fill="#219653"
          />
          <path
            d="M40 12V68.1"
            stroke="#BB6BD9"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
            stroke-dasharray="0.01 8"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M32 12V68H12L32 12Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M48 12V68H68L48 12Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32 12V68H12L32 12Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48 12V68H68L48 12Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 12V68.1"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
            stroke-dasharray="0.01 8"
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.3414 10.0293C33.3 10.1953 34 11.0271 34 11.9999V67.9999C34 69.1045 33.1046 69.9999 32 69.9999H12C11.3496 69.9999 10.7398 69.6837 10.3652 69.152C9.99052 68.6204 9.89778 67.9398 10.1165 67.3273L30.1165 11.3273C30.4437 10.4111 31.3828 9.86325 32.3414 10.0293ZM14.838 65.9999H30V23.5464L14.838 65.9999Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47.6587 10.0293C46.7001 10.1953 46 11.0271 46 11.9999V67.9999C46 69.1045 46.8954 69.9999 48 69.9999H68C68.6504 69.9999 69.2602 69.6837 69.6348 69.152C70.0095 68.6204 70.1022 67.9398 69.8835 67.3273L49.8835 11.3273C49.5563 10.4111 48.6173 9.86325 47.6587 10.0293ZM65.162 65.9999H50V23.5464L65.162 65.9999Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38 11.9999C38 10.8954 38.8954 9.99994 40 9.99994C41.1046 9.99994 42 10.8954 42 11.9999V12.0049C42 13.1095 41.1046 14.0049 40 14.0049C38.8954 14.0049 38 13.1095 38 12.0049V11.9999Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38 20.0092C38 18.9047 38.8954 18.0092 40 18.0092C41.1046 18.0092 42 18.9047 42 20.0092V20.0192C42 21.1238 41.1046 22.0192 40 22.0192C38.8954 22.0192 38 21.1238 38 20.0192V20.0092Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38 28.0235C38 26.9189 38.8954 26.0235 40 26.0235C41.1046 26.0235 42 26.9189 42 28.0235V28.0335C42 29.1381 41.1046 30.0335 40 30.0335C38.8954 30.0335 38 29.1381 38 28.0335V28.0235Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38 36.0378C38 34.9332 38.8954 34.0378 40 34.0378C41.1046 34.0378 42 34.9332 42 36.0378V36.0478C42 37.1524 41.1046 38.0478 40 38.0478C38.8954 38.0478 38 37.1524 38 36.0478V36.0378Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38 44.0521C38 42.9475 38.8954 42.0521 40 42.0521C41.1046 42.0521 42 42.9475 42 44.0521V44.0621C42 45.1667 41.1046 46.0621 40 46.0621C38.8954 46.0621 38 45.1667 38 44.0621V44.0521Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38 52.0664C38 50.9618 38.8954 50.0664 40 50.0664C41.1046 50.0664 42 50.9618 42 52.0664V52.0764C42 53.1809 41.1046 54.0764 40 54.0764C38.8954 54.0764 38 53.1809 38 52.0764V52.0664Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38 60.0807C38 58.9761 38.8954 58.0807 40 58.0807C41.1046 58.0807 42 58.9761 42 60.0807V60.0907C42 61.1952 41.1046 62.0907 40 62.0907C38.8954 62.0907 38 61.1952 38 60.0907V60.0807Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38 68.0949C38 66.9904 38.8954 66.0949 40 66.0949C41.1046 66.0949 42 66.9904 42 68.0949V68.0999C42 69.2045 41.1046 70.0999 40 70.0999C38.8954 70.0999 38 69.2045 38 68.0999V68.0949Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreFlip = forwardRef((props, ref) => {
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

CoreFlip.displayName = 'CoreFlip'

export default CoreFlip
