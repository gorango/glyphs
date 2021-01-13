
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0Tyvw)"><path d="M120 0H0V80H120V0Z" fill="#EB5757"/><path d="M59.6001 30.877L61.2995 36.1464L61.6356 37.1884L62.7304 37.186L68.2671 37.1739L63.7807 40.4185L62.8936 41.0601L63.2341 42.1006L64.9566 47.3626L60.4844 44.0984L59.6001 43.4529L58.7158 44.0984L54.2436 47.3626L55.966 42.1006L56.3066 41.0601L55.4195 40.4185L50.9331 37.1739L56.4698 37.186L57.5646 37.1884L57.9007 36.1464L59.6001 30.877Z" stroke="#219653" stroke-width="3"/></g>
          <defs><clipPath id="clip0Tyvw"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip01kzh)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M39.6001 30.877L41.2995 36.1464L41.6356 37.1884L42.7304 37.186L48.2671 37.1739L43.7807 40.4185L42.8936 41.0601L43.2341 42.1006L44.9566 47.3626L40.4844 44.0984L39.6001 43.4529L38.7158 44.0984L34.2436 47.3626L35.966 42.1006L36.3066 41.0601L35.4195 40.4185L30.9331 37.1739L36.4698 37.186L37.5646 37.1884L37.9007 36.1464L39.6001 30.877Z" stroke="#219653" stroke-width="3"/></g>
          <defs><clipPath id="clip01kzh"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask00_Rp" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask00_Rp)"><g clip-path="url(#clip00_Rp)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M39.6001 30.877L41.2995 36.1464L41.6356 37.1884L42.7304 37.186L48.2671 37.1739L43.7807 40.4185L42.8936 41.0601L43.2341 42.1006L44.9566 47.3626L40.4844 44.0984L39.6001 43.4529L38.7158 44.0984L34.2436 47.3626L35.966 42.1006L36.3066 41.0601L35.4195 40.4185L30.9331 37.1739L36.4698 37.186L37.5646 37.1884L37.9007 36.1464L39.6001 30.877Z" stroke="#219653" stroke-width="3"/></g></g>
          <defs><clipPath id="clip00_Rp"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsMorocco = forwardRef((props, ref) => {
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

FlagsMorocco.displayName = 'FlagsMorocco'

export default FlagsMorocco
