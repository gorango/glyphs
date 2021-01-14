
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M26 48L26 58C26 65.732 32.268 72 40 72C47.732 72 54 65.732 54 58V48"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M26 32L26 22C26 14.268 32.268 8 40 8C47.732 8 54 14.268 54 22V32"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 40H44"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 43L16 49"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 37L16 31"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58 37L64 31"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58 43L64 49"
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
            d="M25.6592 48L25.6592 58C25.6592 65.732 31.9272 72 39.6592 72V72C47.3912 72 53.6592 65.732 53.6592 58L53.6592 48"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25.6592 32L25.6592 22C25.6592 14.268 31.9272 8 39.6592 8V8C47.3912 8 53.6592 14.268 53.6592 22L53.6592 32"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.6592 40L43.6592 40"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M15.6592 49L21.6592 43"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M15.6592 31L21.6592 37"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M63.6592 49L57.6592 43"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M63.6592 31L57.6592 37"
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
            d="M25.6592 48L25.6592 58C25.6592 65.732 31.9272 72 39.6592 72V72C47.3912 72 53.6592 65.732 53.6592 58L53.6592 48"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25.6592 32L25.6592 22C25.6592 14.268 31.9272 8 39.6592 8V8C47.3912 8 53.6592 14.268 53.6592 22L53.6592 32"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.6592 40L43.6592 40"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M15.6592 49L21.6592 43"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M15.6592 31L21.6592 37"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M63.6592 49L57.6592 43"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M63.6592 31L57.6592 37"
            stroke="#EB5757"
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
            d="M25.6592 48V58C25.6592 65.732 31.9272 72 39.6592 72C47.3912 72 53.6592 65.732 53.6592 58V48M25.6592 32V22C25.6592 14.268 31.9272 8 39.6592 8C47.3912 8 53.6592 14.268 53.6592 22V32M35.6592 40H43.6592M15.6592 49L21.6592 43M15.6592 31L21.6592 37M63.6592 49L57.6592 43M63.6592 31L57.6592 37"
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
            d="M39.5269 5.52698C30.6903 5.52698 23.5269 12.6904 23.5269 21.527V31.527C23.5269 32.6315 24.4223 33.527 25.5269 33.527C26.6314 33.527 27.5269 32.6315 27.5269 31.527V21.527C27.5269 14.8996 32.8994 9.52698 39.5269 9.52698C46.1543 9.52698 51.5269 14.8996 51.5269 21.527V31.527C51.5269 32.6315 52.4223 33.527 53.5269 33.527C54.6314 33.527 55.5269 32.6315 55.5269 31.527V21.527C55.5269 12.6904 48.3634 5.52698 39.5269 5.52698Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.5269 73.527C30.6903 73.527 23.5269 66.3635 23.5269 57.527V47.527C23.5269 46.4224 24.4223 45.527 25.5269 45.527C26.6314 45.527 27.5269 46.4224 27.5269 47.527L27.5269 57.527C27.5269 64.1544 32.8994 69.527 39.5269 69.527C46.1543 69.527 51.5269 64.1544 51.5269 57.527V47.527C51.5269 46.4224 52.4223 45.527 53.5269 45.527C54.6314 45.527 55.5269 46.4224 55.5269 47.527V57.527C55.5269 66.3635 48.3634 73.527 39.5269 73.527Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.5269 37.527C34.4223 37.527 33.5269 38.4224 33.5269 39.527C33.5269 40.6315 34.4223 41.527 35.5269 41.527H43.5269C44.6314 41.527 45.5269 40.6315 45.5269 39.527C45.5269 38.4224 44.6314 37.527 43.5269 37.527H35.5269Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M14.1126 49.9412C13.3316 49.1601 13.3316 47.8938 14.1126 47.1128L20.1126 41.1128C20.8937 40.3317 22.16 40.3317 22.9411 41.1128C23.7221 41.8938 23.7221 43.1601 22.9411 43.9412L16.9411 49.9412C16.16 50.7222 14.8937 50.7222 14.1126 49.9412Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16.9411 29.1128C16.16 28.3317 14.8937 28.3317 14.1126 29.1128C13.3316 29.8938 13.3316 31.1601 14.1126 31.9412L20.1126 37.9412C20.8937 38.7222 22.16 38.7222 22.9411 37.9412C23.7221 37.1601 23.7221 35.8938 22.9411 35.1128L16.9411 29.1128Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M64.9411 49.9412C65.7221 49.1601 65.7221 47.8938 64.9411 47.1128L58.9411 41.1128C58.16 40.3317 56.8937 40.3317 56.1126 41.1128C55.3316 41.8938 55.3316 43.1601 56.1126 43.9412L62.1126 49.9412C62.8937 50.7222 64.16 50.7222 64.9411 49.9412Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M62.1126 29.1128C62.8937 28.3317 64.16 28.3317 64.9411 29.1128C65.7221 29.8938 65.7221 31.1601 64.9411 31.9412L58.9411 37.9412C58.16 38.7222 56.8937 38.7222 56.1126 37.9412C55.3316 37.1601 55.3316 35.8938 56.1126 35.1128L62.1126 29.1128Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreUnlink = forwardRef((props, ref) => {
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

CoreUnlink.displayName = 'CoreUnlink'

export default CoreUnlink
