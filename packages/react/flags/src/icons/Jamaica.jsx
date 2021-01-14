
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 0.0791016H0V80.0774H120V0.0791016Z" fill="#333333"/><path d="M120 0H0L60 40L120 0Z" fill="#219653"/><path d="M120 80H0L60 40L120 80Z" fill="#219653"/><path d="M120 0.0791016L0 80.0774" stroke="#F2C94C" stroke-width="10"/><path d="M0 0.0791016L120 80.0774" stroke="#F2C94C" stroke-width="10"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M80 0.0791016H0V80.0774H80V0.0791016Z" fill="#333333"/><path d="M80 0H0L40 40L80 0Z" fill="#219653"/><path d="M80 80H0L40 40L80 80Z" fill="#219653"/><path d="M80 0.0791016L0 80.0774" stroke="#F2C94C" stroke-width="10"/><path d="M-2.38419e-06 0.0791016L80 80.0774" stroke="#F2C94C" stroke-width="10"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M80 0.0791016H0V80.0774H80V0.0791016Z" fill="#333333"/><path d="M80 0H0L40 40L80 0Z" fill="#219653"/><path d="M80 80H0L40 40L80 80Z" fill="#219653"/><path d="M80 0.0791016L0 80.0774" stroke="#F2C94C" stroke-width="10"/><path d="M-2.38419e-06 0.0791016L80 80.0774" stroke="#F2C94C" stroke-width="10"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsJamaica = forwardRef((props, ref) => {
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

FlagsJamaica.displayName = 'FlagsJamaica'

export default FlagsJamaica
