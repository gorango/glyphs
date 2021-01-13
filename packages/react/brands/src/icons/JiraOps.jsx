
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
            d="M58.4784 26.5381L21.915 60.4763C22.4366 61.0039 22.9378 61.5107 23.5412 61.9969L37.9722 74.3061C39.0602 75.2308 40.6479 75.2308 41.7359 74.3061C44.3337 72.0718 49.4168 67.7274 55.4612 62.5761C67.0695 52.6564 68.0922 38.1025 58.4784 26.5381Z"
            fill="url(#paint0_linear-OWu)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.6293 26.5414C12.5533 36.6244 12.8841 51.2473 22.0841 60.4615L40.2465 43.791C51.3589 33.5839 52.2169 15.3415 41.2492 5C41.2492 5 30.7053 16.4584 21.6293 26.5414Z"
            fill="#2684FF"
          />
          <defs><linearGradient id="paint0_linear-OWu" x1="26.4867" y1="45.8087" x2="53.4928" y2="50.5221" gradientUnits="userSpaceOnUse"><stop stop-color="#0052CC"/><stop offset="1" stop-color="#2684FF"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58.478 26.5381L21.9147 60.4763C22.4363 61.0039 22.9374 61.5107 23.5408 61.9969L37.9718 74.3061C39.0598 75.2308 40.6476 75.2308 41.7356 74.3061C44.3334 72.0718 49.4164 67.7274 55.4609 62.5761C67.0691 52.6564 68.0918 38.1025 58.478 26.5381Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.6293 26.5414C12.5533 36.6244 12.884 51.2473 22.0841 60.4615L40.2465 43.791C51.3589 33.5839 52.2169 15.3415 41.2492 5C41.2492 5 30.7053 16.4584 21.6293 26.5414Z"
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
            d="M58.478 26.5381L21.9147 60.4763C22.4363 61.0039 22.9374 61.5107 23.5408 61.9969L37.9718 74.3061C39.0598 75.2308 40.6476 75.2308 41.7356 74.3061C44.3334 72.0718 49.4164 67.7274 55.4609 62.5761C67.0691 52.6564 68.0918 38.1025 58.478 26.5381Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.6293 26.5414C12.5533 36.6244 12.884 51.2473 22.0841 60.4615L40.2465 43.791C51.3589 33.5839 52.2169 15.3415 41.2492 5C41.2492 5 30.7053 16.4584 21.6293 26.5414Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsJiraOps = forwardRef((props, ref) => {
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

BrandsJiraOps.displayName = 'BrandsJiraOps'

export default BrandsJiraOps
