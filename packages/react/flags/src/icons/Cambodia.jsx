
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 40.0001H0" stroke="#EB5757" stroke-width="40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M60 26L64 32V38H68L72 32L76 38V46L80 54H40L44 46V38L48 32L52 38H56V32L60 26Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 40.0001H0" stroke="#EB5757" stroke-width="40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40 26L44 32V38H48L52 32L56 38V46L60 54H20L24 46V38L28 32L32 38H36V32L40 26Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 40.0001H0" stroke="#EB5757" stroke-width="40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40 26L44 32V38H48L52 32L56 38V46L60 54H20L24 46V38L28 32L32 38H36V32L40 26Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsCambodia = forwardRef((props, ref) => {
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

FlagsCambodia.displayName = 'FlagsCambodia'

export default FlagsCambodia
