
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M40 5C20.6953 5 5 20.6953 5 40C5 59.3047 20.6953 75 40 75C59.3047 75 75 59.3047 75 40C75 20.6953 59.3047 5 40 5Z"
            fill="#F48024"
          />
          <path
            d="M48.8517 45.9065L30.271 43.2208L30.9151 39.1512L49.0846 42.6453L48.8517 45.9065Z"
            fill="white"
          />
          <path
            d="M49.1805 41.5765L32.7375 33.9031L34.2448 30.6144L50.6878 38.2879L49.1805 41.5765Z"
            fill="white"
          />
          <path
            d="M51.373 37.4658L37.3964 25.8186L39.7258 23.078L53.7024 34.7253L51.373 37.4658Z"
            fill="white"
          />
          <path
            d="M43.4255 19.5154L46.303 17.323L57.128 31.8477L54.2505 34.0401L43.4255 19.5154Z"
            fill="white"
          />
          <path
            d="M48.9065 51.3053H29.7229V47.1945H48.9065V51.3053Z"
            fill="white"
          />
          <path
            d="M51.6469 43.0835V54.0455H26.9823V43.0835H22.8716V58.1563H55.7577V43.0835H51.6469Z"
            fill="white"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 40C5 20.6953 20.6953 5 40 5C59.3047 5 75 20.6953 75 40C75 59.3047 59.3047 75 40 75C20.6953 75 5 59.3047 5 40ZM46.3031 17.323L43.4256 19.5154L54.2506 34.0401L57.1282 31.8477L46.3031 17.323ZM51.3731 37.4658L37.3965 25.8186L39.7259 23.078L53.7025 34.7253L51.3731 37.4658ZM32.7376 33.9031L49.1807 41.5765L50.688 38.2879L34.2449 30.6144L32.7376 33.9031ZM30.2712 43.2208L48.8518 45.9065L49.0848 42.6453L30.9152 39.1512L30.2712 43.2208ZM48.9066 51.3053H29.7231V47.1945H48.9066V51.3053ZM51.6471 54.0455V43.0835H55.7578V58.1563H22.8717V43.0835H26.9825V54.0455H51.6471Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M40 5C20.6953 5 5 20.6953 5 40C5 59.3047 20.6953 75 40 75C59.3047 75 75 59.3047 75 40C75 20.6953 59.3047 5 40 5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48.8518 45.9065L30.2712 43.2208L30.9152 39.1512L49.0848 42.6453L48.8518 45.9065Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M49.1807 41.5765L32.7376 33.9031L34.2449 30.6144L50.688 38.2879L49.1807 41.5765Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M51.3731 37.4658L37.3965 25.8186L39.7259 23.078L53.7025 34.7253L51.3731 37.4658Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M43.4256 19.5154L46.3031 17.323L57.1282 31.8477L54.2506 34.0401L43.4256 19.5154Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48.9066 51.3053H29.7231V47.1945H48.9066V51.3053Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M51.6471 43.0835V54.0455H26.9825V43.0835H22.8717V58.1563H55.7578V43.0835H51.6471Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsStackOverflow = forwardRef((props, ref) => {
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

BrandsStackOverflow.displayName = 'BrandsStackOverflow'

export default BrandsStackOverflow
