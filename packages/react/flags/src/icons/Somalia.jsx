
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g opacity="0.9"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/></g>
          <path
            d="M60 20L64.4672 33.8515L79.0211 33.8197L67.228 42.3485L71.7557 56.1803L60 47.6L48.2443 56.1803L52.772 42.3485L40.9789 33.8197L55.5328 33.8515L60 20Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0-m1e)"><g opacity="0.9"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/></g><path d="M40 20L44.4672 33.8515L59.0211 33.8197L47.228 42.3485L51.7557 56.1803L40 47.6L28.2443 56.1803L32.772 42.3485L20.9789 33.8197L35.5328 33.8515L40 20Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0-m1e"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0gtKv" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0gtKv)"><g clip-path="url(#clip0gtKv)"><g opacity="0.9"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/></g><path d="M40 20L44.4672 33.8515L59.0211 33.8197L47.228 42.3485L51.7557 56.1803L40 47.6L28.2443 56.1803L32.772 42.3485L20.9789 33.8197L35.5328 33.8515L40 20Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0gtKv"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsSomalia = forwardRef((props, ref) => {
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

FlagsSomalia.displayName = 'FlagsSomalia'

export default FlagsSomalia
