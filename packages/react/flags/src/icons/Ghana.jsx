
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 0H0V80H120V0Z" fill="#F2C94C"/><path d="M120 0H0V26.6667H120V0Z" fill="#EB5757"/><path d="M120 53.3401H0V80.0101H120V53.3401Z" fill="#219653"/><path d="M60 23.9897L63.5737 35.0709L75.2169 35.0455L65.7824 41.8686L69.4046 52.934L60 46.0697L50.5954 52.934L54.2176 41.8686L44.7831 35.0455L56.4263 35.0709L60 23.9897Z" fill="#333333"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#219653"/><path d="M40 23.9897L43.5737 35.0709L55.2169 35.0455L45.7824 41.8686L49.4046 52.934L40 46.0697L30.5954 52.934L34.2176 41.8686L24.7831 35.0455L36.4263 35.0709L40 23.9897Z" fill="#333333"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#219653"/><path d="M40 23.9897L43.5737 35.0709L55.2169 35.0455L45.7824 41.8686L49.4046 52.934L40 46.0697L30.5954 52.934L34.2176 41.8686L24.7831 35.0455L36.4263 35.0709L40 23.9897Z" fill="#333333"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsGhana = forwardRef((props, ref) => {
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

FlagsGhana.displayName = 'FlagsGhana'

export default FlagsGhana
