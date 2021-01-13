
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0ctpL)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 0H0V26.6667H120V0Z" fill="#EB5757"/><path d="M120 53.3401H0V80.0101H120V53.3401Z" fill="#F2994A"/></g>
          <defs><clipPath id="clip0ctpL"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip03H6J)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#F2994A"/></g>
          <defs><clipPath id="clip03H6J"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0-hvu" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0-hvu)"><g clip-path="url(#clip0-hvu)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#F2994A"/></g></g>
          <defs><clipPath id="clip0-hvu"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsArmenia = forwardRef((props, ref) => {
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

FlagsArmenia.displayName = 'FlagsArmenia'

export default FlagsArmenia
