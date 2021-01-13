
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0G6XT)"><path d="M0 0H120L0 80V0Z" fill="#219653"/><path d="M120 80H0L120 0V80Z" fill="#2F80ED"/><path d="M119.6 -0.010009L-0.400391 79.99" stroke="#F2C94C" stroke-width="32"/><path d="M119.6 -0.010009L-0.400391 79.99" stroke="#333333" stroke-width="24"/></g>
          <defs><clipPath id="clip0G6XT"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0eRHJ)"><path d="M0 0H80L0 80V0Z" fill="#219653"/><path d="M80 80H0L80 0V80Z" fill="#2F80ED"/><path d="M79.7334 -0.0100087L-0.266602 79.99" stroke="#F2C94C" stroke-width="32"/><path d="M79.7334 -0.0100087L-0.266602 79.99" stroke="#333333" stroke-width="24"/></g>
          <defs><clipPath id="clip0eRHJ"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0j9RS" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0j9RS)"><g clip-path="url(#clip0j9RS)"><path d="M0 0H80L0 80V0Z" fill="#219653"/><path d="M80 80H0L80 0V80Z" fill="#2F80ED"/><path d="M79.7334 -0.0100087L-0.266602 79.99" stroke="#F2C94C" stroke-width="32"/><path d="M79.7334 -0.0100087L-0.266602 79.99" stroke="#333333" stroke-width="24"/></g></g>
          <defs><clipPath id="clip0j9RS"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsTanzania = forwardRef((props, ref) => {
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

FlagsTanzania.displayName = 'FlagsTanzania'

export default FlagsTanzania
