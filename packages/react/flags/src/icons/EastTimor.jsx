
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 0V80H0V0H120Z" fill="#EB5757"/><path d="M72 40L0 0V80L72 40Z" fill="#F2C94C"/><path d="M48 40L0 0V80L48 40Z" fill="#333333"/><path d="M9.73215 29.6077L16.2113 35.4415L23.7617 31.0822L20.2156 39.047L26.6947 44.8808L18.0239 43.9695L14.4778 51.9342L12.6651 43.4062L3.99438 42.4949L11.5448 38.1357L9.73215 29.6077Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M80 0V80H0V0H80Z" fill="#EB5757"/><path d="M72 40L0 0V80L72 40Z" fill="#F2C94C"/><path d="M48 40L0 0V80L48 40Z" fill="#333333"/><path d="M9.73215 29.6077L16.2113 35.4415L23.7617 31.0822L20.2156 39.047L26.6947 44.8808L18.0239 43.9695L14.4778 51.9342L12.6651 43.4062L3.99438 42.4949L11.5448 38.1357L9.73215 29.6077Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M80 0V80H0V0H80Z" fill="#EB5757"/><path d="M72 40L0 0V80L72 40Z" fill="#F2C94C"/><path d="M48 40L0 0V80L48 40Z" fill="#333333"/><path d="M9.73215 29.6077L16.2113 35.4415L23.7617 31.0822L20.2156 39.047L26.6947 44.8808L18.0239 43.9695L14.4778 51.9342L12.6651 43.4062L3.99438 42.4949L11.5448 38.1357L9.73215 29.6077Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsEastTimor = forwardRef((props, ref) => {
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

FlagsEastTimor.displayName = 'FlagsEastTimor'

export default FlagsEastTimor
