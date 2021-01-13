
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V40H120V0Z"
            fill="#F2C94C"
          />
          <g opacity="0.9"><path d="M120 40H0V60H120V40Z" fill="#2F80ED"/><path d="M120 60H0V80H120V60Z" fill="#EB5757"/></g>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0S4XV)"><path d="M120 0H0V40H120V0Z" fill="#F2C94C"/><g opacity="0.9"><path d="M120 40H0V60H120V40Z" fill="#2F80ED"/><path d="M120 60H0V80H120V60Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0S4XV"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0_Jv6" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0_Jv6)"><g clip-path="url(#clip0_Jv6)"><path d="M120 0H0V40H120V0Z" fill="#F2C94C"/><g opacity="0.9"><path d="M120 40H0V60H120V40Z" fill="#2F80ED"/><path d="M120 60H0V80H120V60Z" fill="#EB5757"/></g></g></g>
          <defs><clipPath id="clip0_Jv6"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsColombia = forwardRef((props, ref) => {
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

FlagsColombia.displayName = 'FlagsColombia'

export default FlagsColombia
