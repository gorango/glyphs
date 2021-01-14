
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M40 -0.0102539H0V79.9897H40V-0.0102539Z" fill="#EB5757"/><path d="M80 -0.0102539H40V79.9897H80V-0.0102539Z" fill="#F2F2F2"/><path d="M120 -0.0102539H80V79.9897H120V-0.0102539Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M26.6667 -0.0102539H0V79.9897H26.6667V-0.0102539Z" fill="#EB5757"/><path d="M53.3334 -0.0102539H26.6667V79.9897H53.3334V-0.0102539Z" fill="#F2F2F2"/><path d="M79.9999 -0.0102539H53.3333V79.9897H79.9999V-0.0102539Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M26.6667 -0.0102539H0V79.9897H26.6667V-0.0102539Z" fill="#EB5757"/><path d="M53.3334 -0.0102539H26.6667V79.9897H53.3334V-0.0102539Z" fill="#F2F2F2"/><path d="M79.9999 -0.0102539H53.3333V79.9897H79.9999V-0.0102539Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsPeru = forwardRef((props, ref) => {
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

FlagsPeru.displayName = 'FlagsPeru'

export default FlagsPeru
