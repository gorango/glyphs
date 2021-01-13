
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V80H120V0Z"
            fill="#2F80ED"
          />
          <path
            d="M120 10H44V18H120V10Z"
            fill="#F2F2F2"
          />
          <path
            d="M120 28H44V36H120V28Z"
            fill="#F2F2F2"
          />
          <path
            d="M120 46H0V54H120V46Z"
            fill="#F2F2F2"
          />
          <path
            d="M120 64H0V72H120V64Z"
            fill="#F2F2F2"
          />
          <path
            d="M0 23H44"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
          />
          <path
            d="M22 46V0"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
          />
        </>
      )
    case 'square':
      return (
        <>
          <path
            d="M80 0H0V80H80V0Z"
            fill="#2F80ED"
          />
          <path
            d="M80 10H44V18H80V10Z"
            fill="#F2F2F2"
          />
          <path
            d="M80 28H44V36H80V28Z"
            fill="#F2F2F2"
          />
          <path
            d="M80 46H0V54H80V46Z"
            fill="#F2F2F2"
          />
          <path
            d="M80 64H0V72H80V64Z"
            fill="#F2F2F2"
          />
          <path
            d="M0 23H44"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
          />
          <path
            d="M22 46V0"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0gOut" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0gOut)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 10H44V18H80V10Z" fill="#F2F2F2"/><path d="M80 28H44V36H80V28Z" fill="#F2F2F2"/><path d="M80 46H0V54H80V46Z" fill="#F2F2F2"/><path d="M80 64H0V72H80V64Z" fill="#F2F2F2"/><path d="M0 23H44" stroke="#F2F2F2" stroke-width="8"/><path d="M22 46V0" stroke="#F2F2F2" stroke-width="8"/></g>
        </>
      )
  }
}

const FlagsGreece = forwardRef((props, ref) => {
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

FlagsGreece.displayName = 'FlagsGreece'

export default FlagsGreece
