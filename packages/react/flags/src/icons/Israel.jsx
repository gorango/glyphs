
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V80H120V0Z"
            fill="#F2F2F2"
          />
          <path
            d="M120 12H0"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
          />
          <path
            d="M120 68H0"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
          />
          <path
            d="M60 26L72.1244 47H47.8756L60 26Z"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M60 54L72.1244 33H47.8756L60 54Z"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
        </>
      )
    case 'square':
      return (
        <>
          <path
            d="M80 0H0V80H80V0Z"
            fill="#F2F2F2"
          />
          <path
            d="M80 12H0"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
          />
          <path
            d="M80 68H0"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
          />
          <path
            d="M40 26L52.1244 47H27.8756L40 26Z"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M40 54L52.1244 33H27.8756L40 54Z"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 12H0" stroke="#2F80ED" stroke-width="13"/><path d="M80 68H0" stroke="#2F80ED" stroke-width="13"/><path d="M40 26L52.1244 47H27.8756L40 26Z" stroke="#2F80ED" stroke-width="3" stroke-linecap="square"/><path d="M40 54L52.1244 33H27.8756L40 54Z" stroke="#2F80ED" stroke-width="3" stroke-linecap="square"/></g>
        </>
      )
  }
}

const FlagsIsrael = forwardRef((props, ref) => {
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

FlagsIsrael.displayName = 'FlagsIsrael'

export default FlagsIsrael
