
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 0.0788574H0V79.9212H120V0.0788574Z" fill="#EB5757"/><path d="M113 93L7 -13" stroke="#F2F2F2" stroke-width="28"/><path d="M113 93L7 -13" stroke="#333333" stroke-width="18"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M80 0.0788574H0V79.9212H80V0.0788574Z" fill="#EB5757"/><path d="M93 93L-13 -13" stroke="#F2F2F2" stroke-width="28"/><path d="M93 93L-13 -13" stroke="#333333" stroke-width="18"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M80 0.0789795H0V79.9213H80V0.0789795Z" fill="#EB5757"/><path d="M93 93L-13 -13" stroke="#F2F2F2" stroke-width="28"/><path d="M93 93L-13 -13" stroke="#333333" stroke-width="18"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsTrinidadAndTobago = forwardRef((props, ref) => {
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

FlagsTrinidadAndTobago.displayName = 'FlagsTrinidadAndTobago'

export default FlagsTrinidadAndTobago
