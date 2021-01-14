
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 0H0V20H120V0Z" fill="#2F80ED"/><path d="M120 20H0V40H120V20Z" fill="#F2F2F2"/><path d="M120 40H0V60H120V40Z" fill="#219653"/><path d="M120 60H0V80H120V60Z" fill="#F2C94C"/><path d="M50 0L50 80L70 80L70 -8.74228e-07L50 0Z" fill="#EB5757"/><path d="M20 2L21.7869 7.54059L27.6085 7.52786L22.8912 10.9394L24.7023 16.4721L20 13.04L15.2977 16.4721L17.1088 10.9394L12.3915 7.52786L18.2131 7.54059L20 2Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 0H0V20H120V0Z" fill="#2F80ED"/><path d="M120 20H0V40H120V20Z" fill="#F2F2F2"/><path d="M120 40H0V60H120V40Z" fill="#219653"/><path d="M120 60H0V80H120V60Z" fill="#F2C94C"/><path d="M30 0L30 80L50 80L50 -8.74228e-07L30 0Z" fill="#EB5757"/><path d="M13.3333 2L14.5246 7.54059L18.4056 7.52786L15.2608 10.9394L16.4682 16.4721L13.3333 13.04L10.1985 16.4721L11.4059 10.9394L8.26103 7.52786L12.1421 7.54059L13.3333 2Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M120 0H0V20H120V0Z" fill="#2F80ED"/><path d="M120 20H0V40H120V20Z" fill="#F2F2F2"/><path d="M120 40H0V60H120V40Z" fill="#219653"/><path d="M120 60H0V80H120V60Z" fill="#F2C94C"/><path d="M30 0L30 80L50 80L50 -8.74228e-07L30 0Z" fill="#EB5757"/><path d="M13.3333 2L14.5246 7.54059L18.4056 7.52786L15.2608 10.9394L16.4682 16.4721L13.3333 13.04L10.1985 16.4721L11.4059 10.9394L8.26103 7.52786L12.1421 7.54059L13.3333 2Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsCentralAfrican = forwardRef((props, ref) => {
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

FlagsCentralAfrican.displayName = 'FlagsCentralAfrican'

export default FlagsCentralAfrican
