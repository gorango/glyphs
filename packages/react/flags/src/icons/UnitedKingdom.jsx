
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><rect width="120" height="80" fill="#2F80ED"/><path d="M0 0L120 80M120 0L0 80" stroke="#F2F2F2" stroke-width="16"/><path d="M0 0L120 80M120 0L0 80" stroke="#EB5757" stroke-width="6"/><path d="M60 80V0M0 40H120" stroke="#F2F2F2" stroke-width="24"/><path d="M60 80V0M0 40H120" stroke="#EB5757" stroke-width="14"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><rect width="80" height="80" fill="#2F80ED"/><path d="M-20 0L100 80M100 0L-20 80" stroke="#F2F2F2" stroke-width="16"/><path d="M-20 0L100 80M100 0L-20 80" stroke="#EB5757" stroke-width="6"/><path d="M40 80V0M-20 40H100" stroke="#F2F2F2" stroke-width="24"/><path d="M40 80V0M-20 40H100" stroke="#EB5757" stroke-width="14"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><rect width="80" height="80" fill="#2F80ED"/><path d="M-20 0L100 80M100 0L-20 80" stroke="#F2F2F2" stroke-width="16"/><path d="M-20 0L100 80M100 0L-20 80" stroke="#EB5757" stroke-width="6"/><path d="M40 80V0M-20 40H100" stroke="#F2F2F2" stroke-width="24"/><path d="M40 80V0M-20 40H100" stroke="#EB5757" stroke-width="14"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsUnitedKingdom = forwardRef((props, ref) => {
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

FlagsUnitedKingdom.displayName = 'FlagsUnitedKingdom'

export default FlagsUnitedKingdom
