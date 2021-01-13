
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V80H120V0Z"
            fill="#219653"
          />
          <circle
            cx="50"
            cy="40"
            r="24"
            fill="#EB5757"
          />
        </>
      )
    case 'square':
      return (
        <>
          <path
            d="M80 0H0V80H80V0Z"
            fill="#219653"
          />
          <circle
            cx="30"
            cy="40"
            r="24"
            fill="#EB5757"
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask07eC3" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask07eC3)"><path d="M80 0H0V80H80V0Z" fill="#219653"/><circle cx="30" cy="40" r="24" fill="#EB5757"/></g>
        </>
      )
  }
}

const FlagsBangladesh = forwardRef((props, ref) => {
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

FlagsBangladesh.displayName = 'FlagsBangladesh'

export default FlagsBangladesh
