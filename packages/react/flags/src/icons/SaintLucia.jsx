
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0.0776367H0V79.9225H120V0.0776367Z"
            fill="#2F80ED"
          />
          <path
            d="M40 60H80L60 12L40 60Z"
            fill="#F2F2F2"
          />
          <path
            d="M44 60L60 20L76 60H44Z"
            fill="#333333"
          />
          <path
            d="M40 60.0001H80L60 38.6667L40 60.0001Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'square':
      return (
        <>
          <path
            d="M80 0.0776367H0V79.9225H80V0.0776367Z"
            fill="#2F80ED"
          />
          <path
            d="M20 60H60L40 12L20 60Z"
            fill="#F2F2F2"
          />
          <path
            d="M24 60L40 20L56 60H24Z"
            fill="#333333"
          />
          <path
            d="M20 60H60L40 38.6666L20 60Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0pKxb" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0pKxb)"><path d="M80 0.0776367H0V79.9225H80V0.0776367Z" fill="#2F80ED"/><path d="M20 60H60L40 12L20 60Z" fill="#F2F2F2"/><path d="M24 60L40 20L56 60H24Z" fill="#333333"/><path d="M20 60H60L40 38.6666L20 60Z" fill="#F2C94C"/></g>
        </>
      )
  }
}

const FlagsSaintLucia = forwardRef((props, ref) => {
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

FlagsSaintLucia.displayName = 'FlagsSaintLucia'

export default FlagsSaintLucia
