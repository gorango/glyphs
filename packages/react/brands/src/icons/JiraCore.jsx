
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.002 52.1692C44.002 64.7777 54.5222 74.9989 67.4997 74.9989V29.5093L44.002 45.1463V52.1692Z"
            fill="url(#paint0_linearTG-x)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.5 29.5104V8.38866C67.4977 7.13206 66.7811 5.97949 65.6373 5.39277C64.4936 4.80604 63.1098 4.88115 62.0405 5.58799L7.5 41.7633C14.7986 52.1837 29.4082 54.8858 40.1369 47.7996L67.5 29.5104Z"
            fill="#2684FF"
          />
          <defs><linearGradient id="paint0_linearTG-x" x1="48.042" y1="38.6221" x2="67.362" y2="43.3816" gradientUnits="userSpaceOnUse"><stop offset="0.17" stop-color="#0052CC"/><stop offset="1" stop-color="#2684FF"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.0021 52.1692C44.0021 64.7777 54.5224 74.9989 67.4998 74.9989V29.5093L44.0021 45.1463V52.1692Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.5 29.5104V8.38866C67.4977 7.13206 66.7811 5.97949 65.6373 5.39277C64.4936 4.80604 63.1098 4.88115 62.0405 5.58799L7.5 41.7633C14.7986 52.1837 29.4082 54.8858 40.1369 47.7996L67.5 29.5104Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.0021 52.1692C44.0021 64.7777 54.5224 74.9989 67.4998 74.9989V29.5093L44.0021 45.1463V52.1692Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.5 29.5104V8.38866C67.4977 7.13206 66.7811 5.97949 65.6373 5.39277C64.4936 4.80604 63.1098 4.88115 62.0405 5.58799L7.5 41.7633C14.7986 52.1837 29.4082 54.8858 40.1369 47.7996L67.5 29.5104Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsJiraCore = forwardRef((props, ref) => {
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

BrandsJiraCore.displayName = 'BrandsJiraCore'

export default BrandsJiraCore
