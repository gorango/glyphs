
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0_mpq)"><path d="M120 0H0V40H120V0Z" fill="#219653"/><path d="M120 40H0V80H120V40Z" fill="#F2C94C"/><path d="M120 40H0" stroke="#F2F2F2" stroke-width="28"/><path d="M120 40H0" stroke="#333333" stroke-width="22"/><path d="M56 40L0 0V80L56 40Z" fill="#EB5757"/><path d="M19.8989 24L23.4727 35.0812L35.1158 35.0557L25.6813 41.8788L29.3035 52.9443L19.8989 46.08L10.4944 52.9443L14.1165 41.8788L4.68202 35.0557L16.3252 35.0812L19.8989 24Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0_mpq"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0GfHp)"><path d="M120 0H0V40H120V0Z" fill="#219653"/><path d="M120 40H0V80H120V40Z" fill="#F2C94C"/><path d="M120 40H0" stroke="#F2F2F2" stroke-width="28"/><path d="M120 40H0" stroke="#333333" stroke-width="22"/><path d="M56 40L0 0V80L56 40Z" fill="#EB5757"/><path d="M19.8989 24L23.4727 35.0812L35.1158 35.0557L25.6813 41.8788L29.3035 52.9443L19.8989 46.08L10.4944 52.9443L14.1165 41.8788L4.68202 35.0557L16.3252 35.0812L19.8989 24Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0GfHp"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0orRN" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0orRN)"><g clip-path="url(#clip0orRN)"><path d="M120 0H0V40H120V0Z" fill="#219653"/><path d="M120 40H0V80H120V40Z" fill="#F2C94C"/><path d="M120 40H0" stroke="#F2F2F2" stroke-width="28"/><path d="M120 40H0" stroke="#333333" stroke-width="22"/><path d="M56 40L0 0V80L56 40Z" fill="#EB5757"/><path d="M19.8989 24L23.4727 35.0812L35.1158 35.0557L25.6813 41.8788L29.3035 52.9443L19.8989 46.08L10.4944 52.9443L14.1165 41.8788L4.68202 35.0557L16.3252 35.0812L19.8989 24Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip0orRN"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsMozambique = forwardRef((props, ref) => {
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

FlagsMozambique.displayName = 'FlagsMozambique'

export default FlagsMozambique
