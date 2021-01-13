
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip05QF-)"><path d="M120 0H0V80H120V0Z" fill="#F2F2F2"/><path d="M39.9991 0H0V80H39.9991V0Z" fill="#219653"/><path d="M120 0H80.001V80H120V0Z" fill="#219653"/></g>
          <defs><clipPath id="clip05QF-"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0VEJq)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M26.6661 0H0V80H26.6661V0Z" fill="#219653"/><path d="M80.0001 0H53.334V80H80.0001V0Z" fill="#219653"/></g>
          <defs><clipPath id="clip0VEJq"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask04cCt" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask04cCt)"><g clip-path="url(#clip04cCt)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M26.6661 0H0V80H26.6661V0Z" fill="#219653"/><path d="M80.0001 0H53.334V80H80.0001V0Z" fill="#219653"/></g></g>
          <defs><clipPath id="clip04cCt"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsNigeria = forwardRef((props, ref) => {
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

FlagsNigeria.displayName = 'FlagsNigeria'

export default FlagsNigeria
