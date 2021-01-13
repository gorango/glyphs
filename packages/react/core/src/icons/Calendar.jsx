
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M16 24C16 21.7909 17.7909 20 20 20H60C62.2091 20 64 21.7909 64 24V64C64 66.2091 62.2091 68 60 68H20C17.7909 68 16 66.2091 16 64V24Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M53 20V12"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 20V12"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 32H64"
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
            d="M55.5 11C55.5 9.61929 54.3807 8.5 53 8.5C51.6193 8.5 50.5 9.61929 50.5 11V18.5C50.5 18.7761 50.2761 19 50 19L30 19C29.7239 19 29.5 18.7761 29.5 18.5V11C29.5 9.61929 28.3807 8.5 27 8.5C25.6193 8.5 24.5 9.61929 24.5 11V18.5C24.5 18.7761 24.2761 19 24 19H20C17.7909 19 16 20.7909 16 23L16 28.5L64 28.5V23C64 20.7909 62.2091 19 60 19H56C55.7239 19 55.5 18.7761 55.5 18.5V11ZM64 33.5L16 33.5L16 63C16 65.2091 17.7909 67 20 67H60C62.2091 67 64 65.2091 64 63V33.5Z"
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
            d="M16 24C16 21.7909 17.7909 20 20 20L60 20C62.2091 20 64 21.7909 64 24L64 64C64 66.2091 62.2091 68 60 68H20C17.7909 68 16 66.2091 16 64L16 24Z"
            fill="#F2F2F2"
          />
          <path
            d="M51 20C51 21.1046 51.8954 22 53 22C54.1046 22 55 21.1046 55 20H51ZM55 12C55 10.8954 54.1046 10 53 10C51.8954 10 51 10.8954 51 12L55 12ZM25 20C25 21.1046 25.8954 22 27 22C28.1046 22 29 21.1046 29 20H25ZM29 12C29 10.8954 28.1046 10 27 10C25.8954 10 25 10.8954 25 12H29ZM20 18C16.6863 18 14 20.6863 14 24H18C18 22.8954 18.8954 22 20 22V18ZM60 18L20 18V22L60 22V18ZM66 24C66 20.6863 63.3137 18 60 18V22C61.1046 22 62 22.8954 62 24H66ZM66 64V24H62L62 64H66ZM60 70C63.3137 70 66 67.3137 66 64H62C62 65.1046 61.1046 66 60 66V70ZM20 70H60V66H20L20 70ZM14 64C14 67.3137 16.6863 70 20 70L20 66C18.8954 66 18 65.1046 18 64H14ZM14 24L14 64H18L18 24H14ZM55 20V19.5H51V20H55ZM55 19.5V12L51 12V19.5H55ZM29 20V19.5H25V20H29ZM29 19.5V12H25V19.5H29Z"
            fill="#F2F2F2"
          />
          <path
            d="M16 32L64 32"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M53 20V19.5V12"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 20V19.5V12"
            stroke="#4F4F4F"
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
            d="M16 24C16 21.7909 17.7909 20 20 20H60C62.2091 20 64 21.7909 64 24V64C64 66.2091 62.2091 68 60 68H20C17.7909 68 16 66.2091 16 64V24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M53 20V12M27 20V12M16 32H64M20 20C17.7909 20 16 21.7909 16 24V64C16 66.2091 17.7909 68 20 68H60C62.2091 68 64 66.2091 64 64V24C64 21.7909 62.2091 20 60 20H20Z"
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
            d="M29 12C29 10.8954 28.1046 10 27 10C25.8954 10 25 10.8954 25 12V18H20C16.6863 18 14 20.6863 14 24V64C14 67.3137 16.6863 70 20 70H60C63.3137 70 66 67.3137 66 64V24C66 20.6863 63.3137 18 60 18H55V12C55 10.8954 54.1046 10 53 10C51.8954 10 51 10.8954 51 12V18H29V12ZM62 30V24C62 22.8954 61.1046 22 60 22H20C18.8954 22 18 22.8954 18 24V30H62ZM18 34H62V64C62 65.1046 61.1046 66 60 66H20C18.8954 66 18 65.1046 18 64V34Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreCalendar = forwardRef((props, ref) => {
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

CoreCalendar.displayName = 'CoreCalendar'

export default CoreCalendar
