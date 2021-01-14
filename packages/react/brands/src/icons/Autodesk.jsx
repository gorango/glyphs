
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M56.2064 72.4977L29.1786 10.1012C28.7129 9.03891 27.9665 7.6682 26.0347 7.6682C24.3083 7.6682 23.486 8.48304 23.0217 9.35921C23.2617 8.72738 23.9883 7.5 26.0946 7.5H44.7485C46.4675 7.5 47.2922 8.48722 47.668 9.39106L75.0001 72.4977H56.2064Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M23.0218 9.35898L5.89862 49.2221C5.37717 50.4918 5.00024 51.2498 5.00024 52.2575C5.00024 54.0629 6.40689 55.873 9.95576 55.873H21.7055L35.3597 24.3706L29.1787 10.101C28.713 9.03868 27.9666 7.66797 26.0347 7.66797C24.3084 7.66797 23.4861 8.48285 23.0218 9.35898Z"
            fill="url(#paint1_linear)"
          />
          <path
            d="M9.95561 55.8734L48.9402 55.8734L26.3165 69.5404C25.2138 70.1765 21.0197 72.5002 18.077 72.5002C16.1801 72.5002 15.1946 71.8024 14.2483 70.1818L5.60503 54.5571C5.0096 53.4373 5 53.0643 5 52.2578C5 54.0633 6.40673 55.8734 9.95561 55.8734Z"
            fill="url(#paint2_linear)"
          />
          <defs><linearGradient id="paint0_linear" x1="35.1234" y1="8.7108" x2="40.9207" y2="22.868" gradientUnits="userSpaceOnUse"><stop stop-color="#29A5E3"/><stop offset="0.515" stop-color="#356EB9"/><stop offset="1" stop-color="#394DA5"/></linearGradient><linearGradient id="paint1_linear" x1="30.9666" y1="12.866" x2="27.0214" y2="22.367" gradientUnits="userSpaceOnUse"><stop stop-color="#236736"/><stop offset="0.493" stop-color="#6BA443"/><stop offset="1" stop-color="#86C146"/></linearGradient><linearGradient id="paint2_linear" x1="10.4325" y1="62.6508" x2="18.7133" y2="60.9589" gradientUnits="userSpaceOnUse"><stop stop-color="#2B7A77"/><stop offset="0.51" stop-color="#4EBAA9"/><stop offset="1" stop-color="#5CC2B1"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M56.2065 72.4977L29.1786 10.1012C28.713 9.03891 27.9666 7.6682 26.0347 7.6682C24.3084 7.6682 23.486 8.48304 23.0218 9.35921C23.2618 8.72738 23.9884 7.5 26.0946 7.5H44.7485C46.4676 7.5 47.2923 8.48722 47.668 9.39106L75.0001 72.4977H56.2065Z"
            fill="currentColor"
          />
          <path
            d="M23.0218 9.35921L5.89862 49.2225C5.37717 50.4922 5.00024 51.2501 5.00024 52.2578C5.00024 54.0633 6.40689 55.8733 9.95576 55.8733H21.7055L35.3597 24.3709L29.1786 10.1012C28.713 9.03891 27.9666 7.6682 26.0347 7.6682C24.3084 7.6682 23.486 8.48304 23.0218 9.35921Z"
            fill="currentColor"
          />
          <path
            d="M9.95576 55.8733L48.9403 55.8734L26.3166 69.5404C25.2139 70.1765 21.0198 72.5002 18.0771 72.5002C16.1802 72.5002 15.1947 71.8024 14.2484 70.1818L5.60512 54.5571C5.0097 53.4374 5.00024 53.0643 5.00024 52.2578C5.00024 54.0633 6.40689 55.8733 9.95576 55.8733Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M29.1786 10.1012L56.2065 72.4977H75.0001L47.668 9.39106C47.2923 8.48722 46.4676 7.5 44.7485 7.5H26.0946C23.9884 7.5 23.2618 8.72738 23.0218 9.35921M29.1786 10.1012C28.713 9.03891 27.9666 7.6682 26.0347 7.6682C24.3084 7.6682 23.486 8.48304 23.0218 9.35921M29.1786 10.1012L35.3597 24.3709L21.7055 55.8733H9.95576M23.0218 9.35921L5.89862 49.2225C5.37717 50.4922 5.00024 51.2501 5.00024 52.2578M5.00024 52.2578C5.00024 54.0633 6.40689 55.8733 9.95576 55.8733M5.00024 52.2578C5.00024 53.0643 5.0097 53.4374 5.60512 54.5571L14.2484 70.1818C15.1947 71.8024 16.1802 72.5002 18.0771 72.5002C21.0198 72.5002 25.2139 70.1765 26.3166 69.5404L48.9403 55.8734L9.95576 55.8733"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsAutodesk = forwardRef((props, ref) => {
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

BrandsAutodesk.displayName = 'BrandsAutodesk'

export default BrandsAutodesk
