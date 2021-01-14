
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V80H120V0Z"
            fill="#EB5757"
          />
          <path
            d="M120 39.9999H0"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M74 49.5455L60 25L46 49.5455H57.2V55H62.8V49.5455H74Z"
            fill="#219653"
          />
        </>
      )
    case 'square':
      return (
        <>
          <path
            d="M80 0H0V80H80V0Z"
            fill="#EB5757"
          />
          <path
            d="M80 39.9999H0"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M54 49.5455L40 25L26 49.5455H37.2V55H42.8V49.5455H54Z"
            fill="#219653"
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 39.9999H0" stroke="#F2F2F2" stroke-width="35"/><path fill-rule="evenodd" clip-rule="evenodd" d="M54 49.5455L40 25L26 49.5455H37.2V55H42.8V49.5455H54Z" fill="#219653"/></g>
        </>
      )
  }
}

const FlagsLebanon = forwardRef((props, ref) => {
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

FlagsLebanon.displayName = 'FlagsLebanon'

export default FlagsLebanon
