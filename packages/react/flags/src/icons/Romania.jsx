
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V80H120V0Z"
            fill="#F2C94C"
          />
          <path
            d="M120 0H80V80H120V0Z"
            fill="#EB5757"
          />
          <path
            d="M40 0H0V80H40V0Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'square':
      return (
        <>
          <path
            d="M80 0H0V80H80V0Z"
            fill="#F2C94C"
          />
          <path
            d="M80.0002 0H53.3335V80H80.0002V0Z"
            fill="#EB5757"
          />
          <path
            d="M26.6667 0H0V80H26.6667V0Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M80.0002 0H53.3335V80H80.0002V0Z" fill="#EB5757"/><path d="M26.6667 0H0V80H26.6667V0Z" fill="#2F80ED"/></g>
        </>
      )
  }
}

const FlagsRomania = forwardRef((props, ref) => {
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

FlagsRomania.displayName = 'FlagsRomania'

export default FlagsRomania
