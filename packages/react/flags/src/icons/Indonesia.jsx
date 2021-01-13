
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip09nyK)"><path d="M120 0H0V80H120V0Z" fill="#F2F2F2"/><path d="M120 0H0V40H120V0Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip09nyK"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0Jr9G)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V40H80V0Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0Jr9G"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0XHWa" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0XHWa)"><g clip-path="url(#clip0XHWa)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V40H80V0Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0XHWa"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsIndonesia = forwardRef((props, ref) => {
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

FlagsIndonesia.displayName = 'FlagsIndonesia'

export default FlagsIndonesia
