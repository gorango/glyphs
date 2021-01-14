
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M34 26H18"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.9141 26L53.1868 26L54.6413 26L61.9141 26"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M53.9141 18L53.9141 25.2727L53.9141 26.7273L53.9141 34"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20.3433 48.384L25.4859 53.5266L26.5144 54.5551L31.657 59.6977"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31.6567 48.384L26.5141 53.5266L25.4856 54.5551L20.343 59.6977"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.8914 56.9092L53.1641 56.9092L54.6186 56.9092L61.8914 56.9092"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.8914 51.0908L53.1641 51.0908L54.6186 51.0908L61.8914 51.0908"
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
            d="M18 26L25.2727 26L26.7273 26L34 26"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.9141 26L53.1868 26L54.6413 26L61.9141 26"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M53.9141 18L53.9141 25.2727L53.9141 26.7273L53.9141 34"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20.343 48.384L25.4856 53.5266L26.5141 54.5551L31.6567 59.6977"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31.657 48.384L26.5144 53.5266L25.4859 54.5551L20.3433 59.6977"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.8914 56.9092L53.1641 56.9092L54.6186 56.9092L61.8914 56.9092"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.8914 51.0908L53.1641 51.0908L54.6186 51.0908L61.8914 51.0908"
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
            d="M18 26L25.2727 26L26.7273 26L34 26"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.9141 26L53.1868 26L54.6413 26L61.9141 26"
            stroke="#219653"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M53.9141 18L53.9141 25.2727L53.9141 26.7273L53.9141 34"
            stroke="#219653"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20.343 48.384L25.4856 53.5266L26.5141 54.5551L31.6567 59.6977"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31.657 48.384L26.5144 53.5266L25.4859 54.5551L20.3433 59.6977"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.8914 56.9092L53.1641 56.9092L54.6186 56.9092L61.8914 56.9092"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.8914 51.0908L53.1641 51.0908L54.6186 51.0908L61.8914 51.0908"
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
            d="M34 26H18M61.9141 26H45.9141M53.9141 34V18M31.6568 59.6977L20.3431 48.3839M20.3432 59.6977L31.6569 48.3839M61.8913 56.9091H45.8913M61.8913 51.0909H45.8913"
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
            d="M55.9141 18C55.9141 16.8954 55.0186 16 53.9141 16C52.8095 16 51.9141 16.8954 51.9141 18V24H45.9141C44.8095 24 43.9141 24.8954 43.9141 26C43.9141 27.1046 44.8095 28 45.9141 28H51.9141V34C51.9141 35.1046 52.8095 36 53.9141 36C55.0186 36 55.9141 35.1046 55.9141 34V28L61.9141 28C63.0186 28 63.9141 27.1046 63.9141 26C63.9141 24.8954 63.0186 24 61.9141 24L55.9141 24V18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 26C16 24.8954 16.8954 24 18 24H34C35.1046 24 36 24.8954 36 26C36 27.1046 35.1046 28 34 28H18C16.8954 28 16 27.1046 16 26Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M18.9289 46.9697C19.71 46.1887 20.9763 46.1887 21.7573 46.9697L26 51.2124L30.2426 46.9697C31.0237 46.1887 32.29 46.1887 33.0711 46.9697C33.8521 47.7508 33.8521 49.0171 33.0711 49.7982L28.8284 54.0408L33.0711 58.2834C33.8521 59.0645 33.8521 60.3308 33.0711 61.1119C32.29 61.8929 31.0237 61.8929 30.2426 61.1119L26 56.8692L21.7574 61.1119C20.9763 61.8929 19.71 61.8929 18.9289 61.1119C18.1479 60.3308 18.1479 59.0645 18.9289 58.2834L23.1716 54.0408L18.9289 49.7982C18.1479 49.0171 18.1479 47.7508 18.9289 46.9697Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M43.8913 56.9091C43.8913 55.8045 44.7868 54.9091 45.8913 54.9091H61.8913C62.9959 54.9091 63.8913 55.8045 63.8913 56.9091C63.8913 58.0137 62.9959 58.9091 61.8913 58.9091H45.8913C44.7868 58.9091 43.8913 58.0137 43.8913 56.9091Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.8913 49.0909C44.7868 49.0909 43.8913 49.9863 43.8913 51.0909C43.8913 52.1955 44.7868 53.0909 45.8913 53.0909H61.8913C62.9959 53.0909 63.8913 52.1955 63.8913 51.0909C63.8913 49.9863 62.9959 49.0909 61.8913 49.0909H45.8913Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreMath = forwardRef((props, ref) => {
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

CoreMath.displayName = 'CoreMath'

export default CoreMath
