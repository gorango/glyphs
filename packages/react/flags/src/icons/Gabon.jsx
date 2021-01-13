
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip06Uvc)"><path d="M120 0H0V80H120V0Z" fill="#F2C94C"/><path d="M120 0H0V26.6667H120V0Z" fill="#219653"/><path d="M120 53.3401H0V80.0101H120V53.3401Z" fill="#2F80ED"/></g>
          <defs><clipPath id="clip06Uvc"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0BgZK)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M80 0H0V26.6667H80V0Z" fill="#219653"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#2F80ED"/></g>
          <defs><clipPath id="clip0BgZK"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0r0jP" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0r0jP)"><g clip-path="url(#clip0r0jP)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M80 0H0V26.6667H80V0Z" fill="#219653"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#2F80ED"/></g></g>
          <defs><clipPath id="clip0r0jP"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsGabon = forwardRef((props, ref) => {
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

FlagsGabon.displayName = 'FlagsGabon'

export default FlagsGabon
