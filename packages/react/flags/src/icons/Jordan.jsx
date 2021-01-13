
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0zJ3S)"><path d="M120 0H0V80H120V0Z" fill="#F2F2F2"/><path d="M120 0H0V26.6667H120V0Z" fill="#333333"/><path d="M120 53.3401H0V80.0101H120V53.3401Z" fill="#219653"/><path d="M56 40L0 0V80L56 40Z" fill="#EB5757"/><path d="M18 32L19.9438 35.9637L24.2547 35.0121L22.3677 39.0031L25.7994 41.7802L21.5026 42.7932L21.4711 47.2078L18 44.48L14.5289 47.2078L14.4974 42.7932L10.2006 41.7802L13.6323 39.0031L11.7453 35.0121L16.0562 35.9637L18 32Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0zJ3S"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0yxMO)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#333333"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#219653"/><path d="M56 40L0 0V80L56 40Z" fill="#EB5757"/><path d="M18 32L19.9438 35.9637L24.2547 35.0121L22.3677 39.0031L25.7994 41.7802L21.5026 42.7932L21.4711 47.2078L18 44.48L14.5289 47.2078L14.4974 42.7932L10.2006 41.7802L13.6323 39.0031L11.7453 35.0121L16.0562 35.9637L18 32Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0yxMO"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0tN6S" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0tN6S)"><g clip-path="url(#clip0tN6S)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#333333"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#219653"/><path d="M56 40L0 0V80L56 40Z" fill="#EB5757"/><path d="M18 32L19.9438 35.9637L24.2547 35.0121L22.3677 39.0031L25.7994 41.7802L21.5026 42.7932L21.4711 47.2078L18 44.48L14.5289 47.2078L14.4974 42.7932L10.2006 41.7802L13.6323 39.0031L11.7453 35.0121L16.0562 35.9637L18 32Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0tN6S"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsJordan = forwardRef((props, ref) => {
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

FlagsJordan.displayName = 'FlagsJordan'

export default FlagsJordan
