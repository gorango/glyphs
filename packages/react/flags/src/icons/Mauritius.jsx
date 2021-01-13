
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0Ksf9)"><path d="M120 -0.0102539H0V19.9897H120V-0.0102539Z" fill="#EB5757"/><path d="M120 19.9897H0V39.9897H120V19.9897Z" fill="#2F80ED"/><path d="M120 39.9897H0V59.9897H120V39.9897Z" fill="#F2C94C"/><path d="M120 59.9897H0V79.9897H120V59.9897Z" fill="#219653"/></g>
          <defs><clipPath id="clip0Ksf9"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0GAy1)"><path d="M120 -0.0102539H0V19.9897H120V-0.0102539Z" fill="#EB5757"/><path d="M120 19.9897H0V39.9897H120V19.9897Z" fill="#2F80ED"/><path d="M120 39.9897H0V59.9897H120V39.9897Z" fill="#F2C94C"/><path d="M120 59.9897H0V79.9897H120V59.9897Z" fill="#219653"/></g>
          <defs><clipPath id="clip0GAy1"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0r236" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0r236)"><g clip-path="url(#clip0r236)"><path d="M120 -0.0102539H0V19.9897H120V-0.0102539Z" fill="#EB5757"/><path d="M120 19.9897H0V39.9897H120V19.9897Z" fill="#2F80ED"/><path d="M120 39.9897H0V59.9897H120V39.9897Z" fill="#F2C94C"/><path d="M120 59.9897H0V79.9897H120V59.9897Z" fill="#219653"/></g></g>
          <defs><clipPath id="clip0r236"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsMauritius = forwardRef((props, ref) => {
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

FlagsMauritius.displayName = 'FlagsMauritius'

export default FlagsMauritius
