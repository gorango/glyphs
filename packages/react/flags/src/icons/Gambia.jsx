
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0iF1r)"><path d="M120 0H0V40H120V0Z" fill="#EB5757"/><path d="M120 39.99H0V79.99H120V39.99Z" fill="#219653"/><path d="M120 40H0" stroke="#F2F2F2" stroke-width="24"/><path d="M120 40H0" stroke="#2F80ED" stroke-width="16"/></g>
          <defs><clipPath id="clip0iF1r"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip07-7t)"><path d="M80 0H0V40H80V0Z" fill="#EB5757"/><path d="M80 39.99H0V79.99H80V39.99Z" fill="#219653"/><path d="M80 40H0" stroke="#F2F2F2" stroke-width="24"/><path d="M80 40H0" stroke="#2F80ED" stroke-width="16"/></g>
          <defs><clipPath id="clip07-7t"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0KLCI" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0KLCI)"><g clip-path="url(#clip0KLCI)"><path d="M80 0H0V40H80V0Z" fill="#EB5757"/><path d="M80 39.99H0V79.99H80V39.99Z" fill="#219653"/><path d="M80 40H0" stroke="#F2F2F2" stroke-width="24"/><path d="M80 40H0" stroke="#2F80ED" stroke-width="16"/></g></g>
          <defs><clipPath id="clip0KLCI"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsGambia = forwardRef((props, ref) => {
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

FlagsGambia.displayName = 'FlagsGambia'

export default FlagsGambia
