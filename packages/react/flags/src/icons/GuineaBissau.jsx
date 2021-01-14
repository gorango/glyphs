
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M119.6 -0.0102539H39.6001V39.9897H119.6V-0.0102539Z" fill="#F2C94C"/><path d="M119.6 39.9897H39.6001V79.9897H119.6V39.9897Z" fill="#219653"/><path d="M39.6001 -0.0102539H-0.399902V79.9897H39.6001V-0.0102539Z" fill="#EB5757"/><path d="M18 27.9897L20.6803 36.3006L29.4127 36.2815L22.3368 41.3989L25.0534 49.698L18 44.5497L10.9466 49.698L13.6632 41.3989L6.58732 36.2815L15.3197 36.3006L18 27.9897Z" fill="#333333"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M119.6 -0.0102539H39.6001V39.9897H119.6V-0.0102539Z" fill="#F2C94C"/><path d="M119.6 39.9897H39.6001V79.9897H119.6V39.9897Z" fill="#219653"/><path d="M39.6001 -0.0102539H-0.399902V79.9897H39.6001V-0.0102539Z" fill="#EB5757"/><path d="M18 27.9897L20.6803 36.3006L29.4127 36.2815L22.3368 41.3989L25.0534 49.698L18 44.5497L10.9466 49.698L13.6632 41.3989L6.58732 36.2815L15.3197 36.3006L18 27.9897Z" fill="#333333"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M119.6 -0.0102539H39.6001V39.9897H119.6V-0.0102539Z" fill="#F2C94C"/><path d="M119.6 39.9897H39.6001V79.9897H119.6V39.9897Z" fill="#219653"/><path d="M39.6001 -0.0102539H-0.399902V79.9897H39.6001V-0.0102539Z" fill="#EB5757"/><path d="M18 27.9897L20.6803 36.3006L29.4127 36.2815L22.3368 41.3989L25.0534 49.698L18 44.5497L10.9466 49.698L13.6632 41.3989L6.58732 36.2815L15.3197 36.3006L18 27.9897Z" fill="#333333"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsGuineaBissau = forwardRef((props, ref) => {
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

FlagsGuineaBissau.displayName = 'FlagsGuineaBissau'

export default FlagsGuineaBissau
