
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V80H120V0Z"
            fill="#333333"
          />
          <path
            d="M120 0.0788574H0V26.7455H120V0.0788574Z"
            fill="#2F80ED"
          />
          <path
            d="M120 53H0V79.6667H120V53Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'square':
      return (
        <>
          <path
            d="M80 0H0V80H80V0Z"
            fill="#333333"
          />
          <path
            d="M80 0.0788574H0V26.7455H80V0.0788574Z"
            fill="#2F80ED"
          />
          <path
            d="M80 53H0V79.6667H80V53Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><path d="M80 0H0V80H80V0Z" fill="#333333"/><path d="M80 0.0789795H0V26.7456H80V0.0789795Z" fill="#2F80ED"/><path d="M80 53H0V79.6667H80V53Z" fill="#F2F2F2"/></g>
        </>
      )
  }
}

const FlagsEstonia = forwardRef((props, ref) => {
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

FlagsEstonia.displayName = 'FlagsEstonia'

export default FlagsEstonia
