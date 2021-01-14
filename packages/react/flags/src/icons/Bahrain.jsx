
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0V80H0V0H120Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 80H31L48 72L31 64L48 56L31 48L48 40L31 32L48 24L31 16L48 8L31 0H0V80Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M80 0V80H0V0H80Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M-20 80H11L28 72L11 64L28 56L11 48L28 40L11 32L28 24L11 16L28 8L11 0H-20V80Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M80 0V80H0V0H80Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M-20 80H11L28 72L11 64L28 56L11 48L28 40L11 32L28 24L11 16L28 8L11 0H-20V80Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsBahrain = forwardRef((props, ref) => {
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

FlagsBahrain.displayName = 'FlagsBahrain'

export default FlagsBahrain
