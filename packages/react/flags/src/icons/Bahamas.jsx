
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <rect
            x="0.0839844"
            width="119.915"
            height="80"
            fill="#219653"
          />
          <rect
            x="0.0839844"
            y="26.561"
            width="119.915"
            height="26.878"
            fill="#F2C94C"
          />
          <path
            d="M0 0V80L51.7135 40L0 0Z"
            fill="#333333"
          />
        </>
      )
    case 'square':
      return (
        <>
          <rect
            x="0.0561523"
            width="79.9435"
            height="80"
            fill="#219653"
          />
          <rect
            x="0.0561523"
            y="26.561"
            width="79.9435"
            height="26.878"
            fill="#F2C94C"
          />
          <path
            d="M0 0V80L51.7135 40L0 0Z"
            fill="#333333"
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><rect x="0.0561523" width="79.9435" height="80" fill="#219653"/><rect x="0.0561523" y="26.561" width="79.9435" height="26.878" fill="#F2C94C"/><path d="M0 0V80L51.7135 40L0 0Z" fill="#333333"/></g>
        </>
      )
  }
}

const FlagsBahamas = forwardRef((props, ref) => {
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

FlagsBahamas.displayName = 'FlagsBahamas'

export default FlagsBahamas
