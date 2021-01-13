
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0mWsv)"><path d="M120 0H0V40H120V0Z" fill="#EB5757"/><path d="M120 40H0V80H120V40Z" fill="#219653"/><path d="M60 24L63.5737 35.0812L75.2169 35.0557L65.7824 41.8788L69.4046 52.9443L60 46.08L50.5954 52.9443L54.2176 41.8788L44.7831 35.0557L56.4263 35.0812L60 24Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0mWsv"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0wJ9q)"><path d="M80 0H0V40H80V0Z" fill="#EB5757"/><path d="M80 40H0V80H80V40Z" fill="#219653"/><path d="M40 24L43.5737 35.0812L55.2169 35.0557L45.7824 41.8788L49.4046 52.9443L40 46.08L30.5954 52.9443L34.2176 41.8788L24.7831 35.0557L36.4263 35.0812L40 24Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0wJ9q"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask06fie" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask06fie)"><g clip-path="url(#clip06fie)"><path d="M80 0H0V40H80V0Z" fill="#EB5757"/><path d="M80 40H0V80H80V40Z" fill="#219653"/><path d="M40 24L43.5737 35.0812L55.2169 35.0557L45.7824 41.8788L49.4046 52.9443L40 46.08L30.5954 52.9443L34.2176 41.8788L24.7831 35.0557L36.4263 35.0812L40 24Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip06fie"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsBurkinaFaso = forwardRef((props, ref) => {
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

FlagsBurkinaFaso.displayName = 'FlagsBurkinaFaso'

export default FlagsBurkinaFaso
