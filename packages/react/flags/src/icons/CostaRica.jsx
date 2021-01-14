
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <rect
            width="120"
            height="80"
            fill="#F2F2F2"
          />
          <rect
            width="120"
            height="14"
            fill="#2F80ED"
          />
          <rect
            y="66"
            width="120"
            height="14"
            fill="#2F80ED"
          />
          <rect
            y="26"
            width="120"
            height="28"
            fill="#EB5757"
          />
        </>
      )
    case 'square':
      return (
        <>
          <rect
            width="80"
            height="80"
            fill="#F2F2F2"
          />
          <rect
            width="80"
            height="14"
            fill="#2F80ED"
          />
          <rect
            y="66"
            width="80"
            height="14"
            fill="#2F80ED"
          />
          <rect
            y="26"
            width="80"
            height="28"
            fill="#EB5757"
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><rect width="80" height="80" fill="#F2F2F2"/><rect width="80" height="14" fill="#2F80ED"/><rect y="66" width="80" height="14" fill="#2F80ED"/><rect y="26" width="80" height="28" fill="#EB5757"/></g>
        </>
      )
  }
}

const FlagsCostaRica = forwardRef((props, ref) => {
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

FlagsCostaRica.displayName = 'FlagsCostaRica'

export default FlagsCostaRica
