
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 40V80H0V40H120Z"
            fill="#EB5757"
          />
          <path
            d="M120 0V40H0V0H120Z"
            fill="#F2F2F2"
          />
          <path
            d="M56 40L0 0V80L56 40Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'square':
      return (
        <>
          <path
            d="M80 40V80H0V40H80Z"
            fill="#EB5757"
          />
          <path
            d="M80 0V40H0V0H80Z"
            fill="#F2F2F2"
          />
          <path
            d="M37.3333 40L0 0V80L37.3333 40Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><path d="M80 40V80H0V40H80Z" fill="#EB5757"/><path d="M80 0V40H0V0H80Z" fill="#F2F2F2"/><path d="M37.3333 40L0 0V80L37.3333 40Z" fill="#2F80ED"/></g>
        </>
      )
  }
}

const FlagsCzechRepublic = forwardRef((props, ref) => {
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

FlagsCzechRepublic.displayName = 'FlagsCzechRepublic'

export default FlagsCzechRepublic
