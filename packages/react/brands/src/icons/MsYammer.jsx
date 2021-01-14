
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M67 41.125C67 54.4445 60.7795 66.4468 50.8283 74.875C15.25 41.125 15.25 41.125 15.25 41.125C47.5934 41.1249 55.6793 41.1252 67 41.125Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M67 41.125C53.2535 41.125 41.9333 41.125 15.25 41.125C15.25 41.125 15.25 41.125 50.8283 5.125C60.7795 14.115 67 26.9176 67 41.125Z"
            fill="url(#paint1_linear)"
          />
          <path
            d="M73.3751 56.875C75.0777 51.573 76 45.8987 76 40C76 34.1013 75.0777 28.427 73.3751 23.125L15.25 41.125L73.3751 56.875Z"
            fill="url(#paint2_linear)"
          />
          <path
            d="M19.75 30.625C19.75 26.4829 23.1079 23.125 27.25 23.125H41.5C45.6421 23.125 49 26.4829 49 30.625V56.4655C49 60.4196 45.7946 63.625 41.8405 63.625C39.9417 63.625 38.1207 62.8707 36.778 61.528L34.375 59.125H27.25C23.1079 59.125 19.75 55.7671 19.75 51.625V30.625Z"
            fill="black"
            fill-opacity="0.3"
          />
          <rect
            x="4"
            y="18.625"
            width="40.5"
            height="40.5"
            rx="5"
            fill="url(#paint3_linear)"
          />
          <rect
            x="4"
            y="18.625"
            width="40.5"
            height="40.5"
            rx="5"
            fill="url(#paint4_linear)"
          />
          <path
            d="M23.7473 36.6061L18.443 27.625H13L21.6325 42.1208V50.125H26.8328V42.1208L35.5 27.625H30.0223L24.718 36.6061H23.7473Z"
            fill="white"
          />
          <defs><linearGradient id="paint0_linear" x1="37.0818" y1="52.0879" x2="59.4012" y2="65.6719" gradientUnits="userSpaceOnUse"><stop stop-color="#0E51A3"/><stop offset="1" stop-color="#1464B6"/></linearGradient><linearGradient id="paint1_linear" x1="33.0389" y1="32.4903" x2="60.0834" y2="16.8607" gradientUnits="userSpaceOnUse"><stop stop-color="#2292E2"/><stop offset="1" stop-color="#2294DB"/></linearGradient><linearGradient id="paint2_linear" x1="32.26" y1="40.8068" x2="75.19" y2="40.8068" gradientUnits="userSpaceOnUse"><stop stop-color="#176FE0"/><stop offset="1" stop-color="#2F9FEF"/></linearGradient><linearGradient id="paint3_linear" x1="4" y1="38.875" x2="44.5" y2="38.875" gradientUnits="userSpaceOnUse"><stop stop-color="#084C8A"/><stop offset="1" stop-color="#1572CB"/></linearGradient><linearGradient id="paint4_linear" x1="4" y1="38.875" x2="44.5" y2="38.875" gradientUnits="userSpaceOnUse"><stop stop-color="#084C8A"/><stop offset="1" stop-color="#1572CB"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M38.4419 63.125L50.8284 74.875C57.2898 69.4025 62.1783 62.4231 64.8124 54.5548L73.3752 56.875C75.0778 51.573 76.0001 45.8987 76.0001 40C76.0001 34.1013 75.0778 28.427 73.3752 23.125L64.5102 25.8703C61.8137 17.8571 57.0502 10.7459 50.8284 5.125L41.2681 14.7986C45.3921 15.6201 48.5001 19.2596 48.5001 23.625V54.125C48.5001 59.0956 44.4707 63.125 39.5001 63.125H38.4419Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 18.625C6.23858 18.625 4 20.8636 4 23.625V54.125C4 56.8864 6.23858 59.125 9 59.125H39.5C42.2614 59.125 44.5 56.8864 44.5 54.125V23.625C44.5 20.8636 42.2614 18.625 39.5 18.625H9ZM18.443 27.625L23.7473 36.6061H24.718L30.0223 27.625H35.5L26.8328 42.1208V50.125H21.6325V42.1208L13 27.625H18.443Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M38.4419 63.125L50.8284 74.875C57.2898 69.4025 62.1783 62.4231 64.8124 54.5548L73.3752 56.875C75.0778 51.573 76.0001 45.8987 76.0001 40C76.0001 34.1013 75.0778 28.427 73.3752 23.125L64.5102 25.8703C61.8137 17.8571 57.0502 10.7459 50.8284 5.125L41.2681 14.7986C45.3921 15.6201 48.5001 19.2596 48.5001 23.625V54.125C48.5001 59.0956 44.4707 63.125 39.5001 63.125H38.4419Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 18.625C6.23858 18.625 4 20.8636 4 23.625V54.125C4 56.8864 6.23858 59.125 9 59.125H39.5C42.2614 59.125 44.5 56.8864 44.5 54.125V23.625C44.5 20.8636 42.2614 18.625 39.5 18.625H9ZM18.443 27.625L23.7473 36.6061H24.718L30.0223 27.625H35.5L26.8328 42.1208V50.125H21.6325V42.1208L13 27.625H18.443Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsMsYammer = forwardRef((props, ref) => {
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

BrandsMsYammer.displayName = 'BrandsMsYammer'

export default BrandsMsYammer
