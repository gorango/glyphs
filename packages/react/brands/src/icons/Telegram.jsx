
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="url(#paint0_linear2uKw)"
          />
          <path
            d="M57.4664 25.522C57.7781 23.5083 55.8635 21.9189 54.0731 22.705L18.412 38.3621C17.1281 38.9258 17.222 40.8706 18.5537 41.2947L25.9079 43.6367C27.3115 44.0837 28.8313 43.8526 30.057 43.0058L46.6374 31.5507C47.1374 31.2052 47.6824 31.9162 47.2552 32.3566L35.3203 44.6616C34.1625 45.8553 34.3923 47.8779 35.7849 48.7512L49.1474 57.1307C50.6461 58.0706 52.5742 57.1264 52.8545 55.3154L57.4664 25.522Z"
            fill="white"
          />
          <defs><linearGradient id="paint0_linear2uKw" x1="40" y1="5" x2="40" y2="75" gradientUnits="userSpaceOnUse"><stop stop-color="#37BBFE"/><stop offset="1" stop-color="#007DBB"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75ZM54.0731 22.705C55.8635 21.9189 57.7781 23.5083 57.4664 25.522L52.8545 55.3154C52.5742 57.1264 50.6461 58.0706 49.1474 57.1307L35.7849 48.7512C34.3923 47.8779 34.1625 45.8553 35.3203 44.6616L47.2552 32.3566C47.6824 31.9162 47.1374 31.2052 46.6374 31.5507L30.057 43.0058C28.8313 43.8526 27.3115 44.0837 25.9079 43.6367L18.5537 41.2947C17.222 40.8707 17.1281 38.9258 18.412 38.3621L54.0731 22.705Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M57.4664 25.522C57.7781 23.5083 55.8635 21.9189 54.0731 22.705L18.412 38.3621C17.1281 38.9258 17.222 40.8707 18.5537 41.2947L25.9079 43.6367C27.3115 44.0837 28.8313 43.8526 30.057 43.0058L46.6374 31.5507C47.1374 31.2052 47.6824 31.9162 47.2552 32.3566L35.3203 44.6616C34.1625 45.8553 34.3923 47.8779 35.7849 48.7512L49.1474 57.1307C50.6461 58.0706 52.5742 57.1264 52.8545 55.3154L57.4664 25.522Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsTelegram = forwardRef((props, ref) => {
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

BrandsTelegram.displayName = 'BrandsTelegram'

export default BrandsTelegram
