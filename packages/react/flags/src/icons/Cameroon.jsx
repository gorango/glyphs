
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip08op8)"><path d="M120 0H0V80H120V0Z" fill="#EB5757"/><path d="M39.9991 0H0V80H39.9991V0Z" fill="#219653"/><path d="M120 0H80.0009V80H120V0Z" fill="#F2C94C"/><path d="M60 27.9897L62.6803 36.3006L71.4127 36.2815L64.3368 41.3989L67.0534 49.698L60 44.5497L52.9466 49.698L55.6632 41.3989L48.5873 36.2815L57.3197 36.3006L60 27.9897Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip08op8"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0nsQd)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M26.6661 0H0V80H26.6661V0Z" fill="#219653"/><path d="M80 0H53.3339V80H80V0Z" fill="#F2C94C"/><path d="M40 27.9897L42.6803 36.3006L51.4127 36.2815L44.3368 41.3989L47.0534 49.698L40 44.5497L32.9466 49.698L35.6632 41.3989L28.5873 36.2815L37.3197 36.3006L40 27.9897Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0nsQd"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0lu91" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0lu91)"><g clip-path="url(#clip0lu91)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M26.6661 0H0V80H26.6661V0Z" fill="#219653"/><path d="M80 0H53.3339V80H80V0Z" fill="#F2C94C"/><path d="M40 27.9897L42.6803 36.3006L51.4127 36.2815L44.3368 41.3989L47.0534 49.698L40 44.5497L32.9466 49.698L35.6632 41.3989L28.5873 36.2815L37.3197 36.3006L40 27.9897Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip0lu91"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsCameroon = forwardRef((props, ref) => {
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

FlagsCameroon.displayName = 'FlagsCameroon'

export default FlagsCameroon
