
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M16 15.9648H54.1357"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 28H42.1005"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 68L68 12"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M61.8994 28H63.9999"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 39.9648H30.1357"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M49.9346 39.9648H63.9999"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 52H18.1005"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.8994 52H63.9999"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25.9346 63.9648H63.9999"
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
            d="M42.8492 49C41.1924 49 39.8492 50.3431 39.8492 52C39.8492 53.6569 41.1924 55 42.8492 55L42.8492 49ZM64 55C65.6569 55 67 53.6569 67 52C67 50.3431 65.6569 49 64 49V55ZM16 25C14.3431 25 13 26.3431 13 28C13 29.6569 14.3431 31 16 31V25ZM37.1508 31C38.8076 31 40.1508 29.6569 40.1508 28C40.1508 26.3431 38.8076 25 37.1508 25V31ZM16 36.9648C14.3431 36.9648 13 38.308 13 39.9648C13 41.6217 14.3431 42.9648 16 42.9648V36.9648ZM25.1859 42.9648C26.8428 42.9648 28.1859 41.6217 28.1859 39.9648C28.1859 38.308 26.8428 36.9648 25.1859 36.9648V42.9648ZM54.8844 36.9648C53.2275 36.9648 51.8844 38.308 51.8844 39.9648C51.8844 41.6217 53.2275 42.9648 54.8844 42.9648L54.8844 36.9648ZM64 42.9648C65.6569 42.9648 67 41.6217 67 39.9648C67 38.308 65.6569 36.9648 64 36.9648L64 42.9648ZM30.8844 60.9648C29.2275 60.9648 27.8844 62.308 27.8844 63.9648C27.8844 65.6217 29.2275 66.9648 30.8844 66.9648V60.9648ZM64 66.9648C65.6569 66.9648 67 65.6217 67 63.9648C67 62.308 65.6569 60.9648 64 60.9648V66.9648ZM16 12.9648C14.3431 12.9648 13 14.308 13 15.9648C13 17.6217 14.3431 18.9648 16 18.9648V12.9648ZM49.1859 18.9648C50.8428 18.9648 52.1859 17.6217 52.1859 15.9648C52.1859 14.308 50.8428 12.9648 49.1859 12.9648V18.9648ZM42.8492 55H64V49H42.8492L42.8492 55ZM16 31L37.1508 31V25L16 25V31ZM16 42.9648H25.1859V36.9648H16V42.9648ZM54.8844 42.9648H64L64 36.9648H54.8844L54.8844 42.9648ZM30.8844 66.9648H64V60.9648L30.8844 60.9648V66.9648ZM16 18.9648L49.1859 18.9648V12.9648L16 12.9648V18.9648Z"
            fill="currentColor"
          />
          <path
            d="M12 68L68 12"
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
            d="M16 50C14.8954 50 14 50.8954 14 52C14 53.1046 14.8954 54 16 54V50ZM18.1005 54C19.2051 54 20.1005 53.1046 20.1005 52C20.1005 50.8954 19.2051 50 18.1005 50V54ZM37.8995 50C36.7949 50 35.8995 50.8954 35.8995 52C35.8995 53.1046 36.7949 54 37.8995 54V50ZM64 54C65.1046 54 66 53.1046 66 52C66 50.8954 65.1046 50 64 50V54ZM16 26C14.8954 26 14 26.8954 14 28C14 29.1046 14.8954 30 16 30V26ZM42.1005 30C43.2051 30 44.1005 29.1046 44.1005 28C44.1005 26.8954 43.2051 26 42.1005 26V30ZM61.8995 26C60.7949 26 59.8995 26.8954 59.8995 28C59.8995 29.1046 60.7949 30 61.8995 30V26ZM64 30C65.1046 30 66 29.1046 66 28C66 26.8954 65.1046 26 64 26V30ZM16 37.9648C14.8954 37.9648 14 38.8603 14 39.9648C14 41.0694 14.8954 41.9648 16 41.9648V37.9648ZM30.1357 41.9648C31.2402 41.9648 32.1357 41.0694 32.1357 39.9648C32.1357 38.8603 31.2402 37.9648 30.1357 37.9648V41.9648ZM49.9347 37.9648C48.8301 37.9648 47.9347 38.8603 47.9347 39.9648C47.9347 41.0694 48.8301 41.9648 49.9347 41.9648L49.9347 37.9648ZM64 41.9648C65.1046 41.9648 66 41.0694 66 39.9648C66 38.8603 65.1046 37.9648 64 37.9648L64 41.9648ZM25.9347 61.9648C24.8301 61.9648 23.9347 62.8603 23.9347 63.9648C23.9347 65.0694 24.8301 65.9648 25.9347 65.9648V61.9648ZM64 65.9648C65.1046 65.9648 66 65.0694 66 63.9648C66 62.8603 65.1046 61.9648 64 61.9648V65.9648ZM16 13.9648C14.8954 13.9648 14 14.8603 14 15.9648C14 17.0694 14.8954 17.9648 16 17.9648V13.9648ZM54.1357 17.9648C55.2402 17.9648 56.1357 17.0694 56.1357 15.9648C56.1357 14.8603 55.2402 13.9648 54.1357 13.9648V17.9648ZM16 54H18.1005V50H16V54ZM37.8995 54L64 54V50L37.8995 50V54ZM16 30L42.1005 30V26L16 26V30ZM61.8995 30H64V26H61.8995V30ZM16 41.9648H30.1357V37.9648H16V41.9648ZM49.9347 41.9648H64L64 37.9648H49.9347L49.9347 41.9648ZM25.9347 65.9648H64V61.9648L25.9347 61.9648V65.9648ZM16 17.9648L54.1357 17.9648V13.9648L16 13.9648V17.9648Z"
            fill="#56CCF2"
          />
          <path
            d="M12 68L68 12"
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
            d="M16 52H18.1005M37.8995 52H64M16 28H42.1005M61.8995 28H64M16 39.9648H30.1357M49.9347 39.9648H64M25.9347 63.9648H64M16 15.9648H54.1357M12 68L68 12"
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
            d="M69.4142 13.4142C70.1953 12.6332 70.1953 11.3668 69.4142 10.5858C68.6332 9.80474 67.3668 9.80474 66.5858 10.5858L10.5858 66.5858C9.80474 67.3668 9.80474 68.6332 10.5858 69.4142C11.3668 70.1953 12.6332 70.1953 13.4142 69.4142L69.4142 13.4142Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 13.9648C14.8954 13.9648 14 14.8603 14 15.9648C14 17.0694 14.8954 17.9648 16 17.9648H52.7215C53.826 17.9648 54.7215 17.0694 54.7215 15.9648C54.7215 14.8603 53.826 13.9648 52.7215 13.9648H16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 26C14.8954 26 14 26.8954 14 28C14 29.1046 14.8954 30 16 30H40.6863C41.7909 30 42.6863 29.1046 42.6863 28C42.6863 26.8954 41.7909 26 40.6863 26H16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M63.3137 26C62.2091 26 61.3137 26.8954 61.3137 28C61.3137 29.1046 62.2091 30 63.3137 30H64C65.1046 30 66 29.1046 66 28C66 26.8954 65.1046 26 64 26H63.3137Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 37.9648C14.8954 37.9648 14 38.8603 14 39.9648C14 41.0694 14.8954 41.9648 16 41.9648H28.7215C29.826 41.9648 30.7215 41.0694 30.7215 39.9648C30.7215 38.8603 29.826 37.9648 28.7215 37.9648H16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M51.3489 37.9648C50.2443 37.9648 49.3489 38.8603 49.3489 39.9648C49.3489 41.0694 50.2443 41.9648 51.3489 41.9648H64C65.1046 41.9648 66 41.0694 66 39.9648C66 38.8603 65.1046 37.9648 64 37.9648H51.3489Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 50C14.8954 50 14 50.8954 14 52C14 53.1046 14.8954 54 16 54H16.6863C17.7909 54 18.6863 53.1046 18.6863 52C18.6863 50.8954 17.7909 50 16.6863 50H16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.3137 50C38.2091 50 37.3137 50.8954 37.3137 52C37.3137 53.1046 38.2091 54 39.3137 54H64C65.1046 54 66 53.1046 66 52C66 50.8954 65.1046 50 64 50H39.3137Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27.3489 61.9648C26.2443 61.9648 25.3489 62.8603 25.3489 63.9648C25.3489 65.0694 26.2443 65.9648 27.3489 65.9648H64C65.1046 65.9648 66 65.0694 66 63.9648C66 62.8603 65.1046 61.9648 64 61.9648H27.3489Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreAlignSlash = forwardRef((props, ref) => {
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

CoreAlignSlash.displayName = 'CoreAlignSlash'

export default CoreAlignSlash
