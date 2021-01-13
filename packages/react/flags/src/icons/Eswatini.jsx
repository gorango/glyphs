
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0nHJP)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 40H0" stroke="#F2C94C" stroke-width="48"/><path d="M120 40H0" stroke="#EB5757" stroke-width="36"/><path d="M12 39.99H108" stroke="#F2C94C" stroke-width="2" stroke-linecap="round"/><path d="M20 35.99H95" stroke="#F2C94C" stroke-width="2" stroke-linecap="round"/><path d="M25 31.99H100" stroke="#F2C94C" stroke-width="2" stroke-linecap="round"/><circle cx="17" cy="44.99" r="5" fill="#2F80ED"/><circle cx="103" cy="44.99" r="5" fill="#2F80ED"/><path fill-rule="evenodd" clip-rule="evenodd" d="M60.0001 22.99V56.99C47.7474 56.99 37.103 50.1036 31.7263 39.99C37.103 29.8764 47.7474 22.99 60.0001 22.99Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M60 56.99V22.99C60 22.99 60.0001 22.99 60.0001 22.99C72.2529 22.99 82.8972 29.8764 88.2739 39.99C82.8972 50.1036 72.2529 56.99 60.0001 56.99C60.0001 56.99 60 56.99 60 56.99Z" fill="#F2F2F2"/><path d="M42 36.99H54" stroke="#F2F2F2" stroke-width="3" stroke-linecap="round"/><path d="M66 36.99H78" stroke="#333333" stroke-width="3" stroke-linecap="round"/><path d="M42 42.99H54" stroke="#F2F2F2" stroke-width="3" stroke-linecap="round"/><path d="M66 42.99H78" stroke="#333333" stroke-width="3" stroke-linecap="round"/><circle cx="49" cy="30.99" r="5" fill="#2F80ED"/></g>
          <defs><clipPath id="clip0nHJP"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0a7Dy)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 40H0" stroke="#F2C94C" stroke-width="48"/><path d="M80 40H0" stroke="#EB5757" stroke-width="36"/><path d="M8 39.99H72" stroke="#F2C94C" stroke-width="2" stroke-linecap="round"/><path d="M13.3333 35.99H63.3333" stroke="#F2C94C" stroke-width="2" stroke-linecap="round"/><path d="M16.6667 31.99H66.6667" stroke="#F2C94C" stroke-width="2" stroke-linecap="round"/><ellipse cx="11.3333" cy="44.99" rx="3.33333" ry="5" fill="#2F80ED"/><ellipse cx="68.6666" cy="44.99" rx="3.33333" ry="5" fill="#2F80ED"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40.0001 22.99V56.99C31.8316 56.99 24.7353 50.1036 21.1509 39.99C24.7353 29.8764 31.8316 22.99 40.0001 22.99Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40 56.99V22.99C40 22.99 40.0001 22.99 40.0001 22.99C48.1686 22.99 55.2648 29.8764 58.8493 39.99C55.2648 50.1036 48.1686 56.99 40.0001 56.99C40.0001 56.99 40 56.99 40 56.99Z" fill="#F2F2F2"/><path d="M28 36.99H36" stroke="#F2F2F2" stroke-width="3" stroke-linecap="round"/><path d="M44 36.99H52" stroke="#333333" stroke-width="3" stroke-linecap="round"/><path d="M28 42.99H36" stroke="#F2F2F2" stroke-width="3" stroke-linecap="round"/><path d="M44 42.99H52" stroke="#333333" stroke-width="3" stroke-linecap="round"/><ellipse cx="32.6666" cy="30.99" rx="3.33333" ry="5" fill="#2F80ED"/></g>
          <defs><clipPath id="clip0a7Dy"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0M4P7" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0M4P7)"><g clip-path="url(#clip0M4P7)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 40H0" stroke="#F2C94C" stroke-width="48"/><path d="M80 40H0" stroke="#EB5757" stroke-width="36"/><path d="M8 39.99H72" stroke="#F2C94C" stroke-width="2" stroke-linecap="round"/><path d="M13.3333 35.99H63.3333" stroke="#F2C94C" stroke-width="2" stroke-linecap="round"/><path d="M16.6667 31.99H66.6667" stroke="#F2C94C" stroke-width="2" stroke-linecap="round"/><ellipse cx="11.3333" cy="44.99" rx="3.33333" ry="5" fill="#2F80ED"/><ellipse cx="68.6666" cy="44.99" rx="3.33333" ry="5" fill="#2F80ED"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40.0001 22.99V56.99C31.8316 56.99 24.7353 50.1036 21.1509 39.99C24.7353 29.8764 31.8316 22.99 40.0001 22.99Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40 56.99V22.99C40 22.99 40.0001 22.99 40.0001 22.99C48.1686 22.99 55.2648 29.8764 58.8493 39.99C55.2648 50.1036 48.1686 56.99 40.0001 56.99C40.0001 56.99 40 56.99 40 56.99Z" fill="#F2F2F2"/><path d="M28 36.99H36" stroke="#F2F2F2" stroke-width="3" stroke-linecap="round"/><path d="M44 36.99H52" stroke="#333333" stroke-width="3" stroke-linecap="round"/><path d="M28 42.99H36" stroke="#F2F2F2" stroke-width="3" stroke-linecap="round"/><path d="M44 42.99H52" stroke="#333333" stroke-width="3" stroke-linecap="round"/><ellipse cx="32.6666" cy="30.99" rx="3.33333" ry="5" fill="#2F80ED"/></g></g>
          <defs><clipPath id="clip0M4P7"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsEswatini = forwardRef((props, ref) => {
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

FlagsEswatini.displayName = 'FlagsEswatini'

export default FlagsEswatini
