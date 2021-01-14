
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <rect
            x="22"
            y="8.5"
            width="54"
            height="63"
            rx="5"
            fill="url(#paint0_linear)"
          />
          <path
            d="M22 55.75H76V66.5C76 69.2614 73.7614 71.5 71 71.5H27C24.2386 71.5 22 69.2614 22 66.5V55.75Z"
            fill="url(#paint1_linear)"
          />
          <rect
            x="22"
            y="40"
            width="54"
            height="15.75"
            fill="url(#paint2_linear)"
          />
          <rect
            x="22"
            y="24.25"
            width="54"
            height="15.75"
            fill="url(#paint3_linear)"
          />
          <path
            d="M22 31.75C22 27.6079 25.3579 24.25 29.5 24.25H41.5C45.6421 24.25 49 27.6079 49 31.75V57.25C49 61.3921 45.6421 64.75 41.5 64.75H22V31.75Z"
            fill="black"
            fill-opacity="0.3"
          />
          <rect
            x="4"
            y="19.75"
            width="40.5"
            height="40.5"
            rx="5"
            fill="url(#paint4_linear)"
          />
          <rect
            x="4"
            y="19.75"
            width="40.5"
            height="40.5"
            rx="5"
            fill="url(#paint5_linear)"
          />
          <path
            d="M37.75 28.7819H33.3676L29.9265 43.4628L26.1618 28.75H22.4559L18.6618 43.4628L15.25 28.7819H10.75L16.6029 51.25H20.4853L24.25 37.0479L28.0147 51.25H31.8971L37.75 28.7819Z"
            fill="white"
          />
          <defs><linearGradient id="paint0_linear" x1="22" y1="19" x2="76" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#2B78B1"/><stop offset="1" stop-color="#338ACD"/></linearGradient><linearGradient id="paint1_linear" x1="22" y1="65.5938" x2="76" y2="65.5938" gradientUnits="userSpaceOnUse"><stop stop-color="#1B366F"/><stop offset="1" stop-color="#2657B0"/></linearGradient><linearGradient id="paint2_linear" x1="45.625" y1="49" x2="76" y2="49" gradientUnits="userSpaceOnUse"><stop stop-color="#20478B"/><stop offset="1" stop-color="#2D6FD1"/></linearGradient><linearGradient id="paint3_linear" x1="45.625" y1="33.25" x2="76" y2="33.25" gradientUnits="userSpaceOnUse"><stop stop-color="#215295"/><stop offset="1" stop-color="#2E84D3"/></linearGradient><linearGradient id="paint4_linear" x1="4" y1="42.25" x2="46.75" y2="42.25" gradientUnits="userSpaceOnUse"><stop stop-color="#223E74"/><stop offset="1" stop-color="#215091"/></linearGradient><linearGradient id="paint5_linear" x1="4" y1="42.25" x2="46.75" y2="42.25" gradientUnits="userSpaceOnUse"><stop stop-color="#223E74"/><stop offset="1" stop-color="#215091"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M22 13.5C22 10.7386 24.2386 8.5 27 8.5H71C73.7614 8.5 76 10.7386 76 13.5V66.5C76 69.2614 73.7614 71.5 71 71.5H27C24.2386 71.5 22 69.2614 22 66.5V64.25H39.5C44.4706 64.25 48.5 60.2206 48.5 55.25V24.75C48.5 19.7794 44.4706 15.75 39.5 15.75H22V13.5Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 19.75C6.23858 19.75 4 21.9886 4 24.75V55.25C4 58.0114 6.23858 60.25 9 60.25H39.5C42.2614 60.25 44.5 58.0114 44.5 55.25V24.75C44.5 21.9886 42.2614 19.75 39.5 19.75H9ZM33.3676 28.7819H37.75L31.8971 51.25H28.0147L24.25 37.0479L20.4853 51.25H16.6029L10.75 28.7819H15.25L18.6618 43.4628L22.4559 28.75H26.1618L29.9265 43.4628L33.3676 28.7819Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M27 8.5C24.2386 8.5 22 10.7386 22 13.5V19.75H39.5C42.2614 19.75 44.5 21.9886 44.5 24.75V55.25C44.5 58.0114 42.2614 60.25 39.5 60.25H22V66.5C22 69.2614 24.2386 71.5 27 71.5H71C73.7614 71.5 76 69.2614 76 66.5V13.5C76 10.7386 73.7614 8.5 71 8.5H27Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M4 24.75C4 21.9886 6.23858 19.75 9 19.75H39.5C42.2614 19.75 44.5 21.9886 44.5 24.75V55.25C44.5 58.0114 42.2614 60.25 39.5 60.25H9C6.23858 60.25 4 58.0114 4 55.25V24.75Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.75 28.7819H33.3676L29.9265 43.4628L26.1618 28.75H22.4559L18.6618 43.4628L15.25 28.7819H10.75L16.6029 51.25H20.4853L24.25 37.0479L28.0147 51.25H31.8971L37.75 28.7819Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsMsWord = forwardRef((props, ref) => {
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

BrandsMsWord.displayName = 'BrandsMsWord'

export default BrandsMsWord
