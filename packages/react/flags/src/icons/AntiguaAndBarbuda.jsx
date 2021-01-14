
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
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M83.25 49L60 80L36.75 49H83.25Z"
            fill="#F2F2F2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.75 49L23.25 31H96.75L83.25 49H36.75Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M96.75 31L120 0H0L23.25 31H96.75Z"
            fill="#333333"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M83 31H39L47.3998 27.3558L41.9474 20L51.0439 21.0439L50 11.9474L57.3558 17.3998L61 9L64.6442 17.3998L72 11.9474L70.9561 21.0439L80.0526 20L74.6002 27.3558L83 31Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><rect width="80" height="80" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M63.25 49L40 80L16.75 49H63.25Z" fill="#F2F2F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.75 49L3.25 31H76.75L63.25 49H16.75Z" fill="#2F80ED"/><path fill-rule="evenodd" clip-rule="evenodd" d="M76.75 31L100 0H-20L3.25 31H76.75Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M63 31H19L27.3998 27.3558L21.9474 20L31.0439 21.0439L30 11.9474L37.3558 17.3998L41 9L44.6442 17.3998L52 11.9474L50.9561 21.0439L60.0526 20L54.6002 27.3558L63 31Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><rect width="80" height="80" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M63.25 49L40 80L16.75 49H63.25Z" fill="#F2F2F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.75 49L3.25 31H76.75L63.25 49H16.75Z" fill="#2F80ED"/><path fill-rule="evenodd" clip-rule="evenodd" d="M76.75 31L100 0H-20L3.25 31H76.75Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M63 31H19L27.3998 27.3558L21.9474 20L31.0439 21.0439L30 11.9474L37.3558 17.3998L41 9L44.6442 17.3998L52 11.9474L50.9561 21.0439L60.0526 20L54.6002 27.3558L63 31Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsAntiguaAndBarbuda = forwardRef((props, ref) => {
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

FlagsAntiguaAndBarbuda.displayName = 'FlagsAntiguaAndBarbuda'

export default FlagsAntiguaAndBarbuda
