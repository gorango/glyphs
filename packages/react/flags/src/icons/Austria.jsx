
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip05kIg)"><path d="M120 0H0V80H120V0Z" fill="#EB5757"/><path d="M120 26.6667H0V53.3334H120V26.6667Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip05kIg"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip01kwb)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 26.6666H0V53.3333H80V26.6666Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip01kwb"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0_Kah" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0_Kah)"><g clip-path="url(#clip0_Kah)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 26.6666H0V53.3333H80V26.6666Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0_Kah"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsAustria = forwardRef((props, ref) => {
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

FlagsAustria.displayName = 'FlagsAustria'

export default FlagsAustria
