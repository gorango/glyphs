
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0D54h)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M40 0L0 0V80L40 0Z" fill="#2F80ED"/><path d="M40 0H88L0 80L40 0Z" fill="#F2C94C"/><path d="M120 24.5V0H88L0 80L120 24.5Z" fill="#EB5757"/><path d="M120 24.5V53.5L0 80L120 24.5Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0D54h"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0-alS)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M40 0L0 0V80L40 0Z" fill="#2F80ED"/><path d="M40 0H88L0 80L40 0Z" fill="#F2C94C"/><path d="M120 24.5V0H88L0 80L120 24.5Z" fill="#EB5757"/><path d="M120 24.5V53.5L0 80L120 24.5Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0-alS"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0_eAN" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0_eAN)"><g clip-path="url(#clip0_eAN)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M40 0L0 0V80L40 0Z" fill="#2F80ED"/><path d="M40 0H88L0 80L40 0Z" fill="#F2C94C"/><path d="M120 24.5V0H88L0 80L120 24.5Z" fill="#EB5757"/><path d="M120 24.5V53.5L0 80L120 24.5Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0_eAN"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsSeychelles = forwardRef((props, ref) => {
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

FlagsSeychelles.displayName = 'FlagsSeychelles'

export default FlagsSeychelles
