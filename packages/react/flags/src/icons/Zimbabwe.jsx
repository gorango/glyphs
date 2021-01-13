
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0YdQ1)"><g opacity="0.9"><path d="M120.4 -0.0102539H0.400391V11.4183H120.4V-0.0102539Z" fill="#219653"/><path d="M120.4 11.4182H0.400391V22.8468H120.4V11.4182Z" fill="#F2C94C"/><path d="M120.4 22.8469H0.400391V34.2755H120.4V22.8469Z" fill="#EB5757"/><path d="M120.4 34.2754H0.400391V45.704H120.4V34.2754Z" fill="#333333"/><path d="M120.4 57.1326H0.400391V45.704H120.4V57.1326Z" fill="#EB5757"/><path d="M120.4 68.5613H0.400391V57.1327H120.4V68.5613Z" fill="#F2C94C"/><path d="M120.4 79.9897H0.400391V68.5612H120.4V79.9897Z" fill="#219653"/></g><path d="M56 40L0 0V80L56 40Z" fill="#F2F2F2"/><path d="M0 0L56 40L0 80" stroke="#333333" stroke-width="3"/><path d="M19 27.9897L21.6803 36.3006L30.4127 36.2815L23.3368 41.3989L26.0534 49.698L19 44.5497L11.9466 49.698L14.6632 41.3989L7.58732 36.2815L16.3197 36.3006L19 27.9897Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0YdQ1"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0OzJR)"><g opacity="0.9"><path d="M120.4 -0.0102539H0.400391V11.4183H120.4V-0.0102539Z" fill="#219653"/><path d="M120.4 11.4182H0.400391V22.8468H120.4V11.4182Z" fill="#F2C94C"/><path d="M120.4 22.8469H0.400391V34.2755H120.4V22.8469Z" fill="#EB5757"/><path d="M120.4 34.2754H0.400391V45.704H120.4V34.2754Z" fill="#333333"/><path d="M120.4 57.1326H0.400391V45.704H120.4V57.1326Z" fill="#EB5757"/><path d="M120.4 68.5613H0.400391V57.1327H120.4V68.5613Z" fill="#F2C94C"/><path d="M120.4 79.9897H0.400391V68.5612H120.4V79.9897Z" fill="#219653"/></g><path d="M56 40L0 0V80L56 40Z" fill="#F2F2F2"/><path d="M0 0L56 40L0 80" stroke="#333333" stroke-width="3"/><path d="M19 27.9897L21.6803 36.3006L30.4127 36.2815L23.3368 41.3989L26.0534 49.698L19 44.5497L11.9466 49.698L14.6632 41.3989L7.58732 36.2815L16.3197 36.3006L19 27.9897Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0OzJR"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0kjYl" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0kjYl)"><g clip-path="url(#clip0kjYl)"><g opacity="0.9"><path d="M120.4 -0.0102539H0.400391V11.4183H120.4V-0.0102539Z" fill="#219653"/><path d="M120.4 11.4182H0.400391V22.8468H120.4V11.4182Z" fill="#F2C94C"/><path d="M120.4 22.8469H0.400391V34.2755H120.4V22.8469Z" fill="#EB5757"/><path d="M120.4 34.2754H0.400391V45.704H120.4V34.2754Z" fill="#333333"/><path d="M120.4 57.1326H0.400391V45.704H120.4V57.1326Z" fill="#EB5757"/><path d="M120.4 68.5613H0.400391V57.1327H120.4V68.5613Z" fill="#F2C94C"/><path d="M120.4 79.9897H0.400391V68.5612H120.4V79.9897Z" fill="#219653"/></g><path d="M56 40L0 0V80L56 40Z" fill="#F2F2F2"/><path d="M0 0L56 40L0 80" stroke="#333333" stroke-width="3"/><path d="M19 27.9897L21.6803 36.3006L30.4127 36.2815L23.3368 41.3989L26.0534 49.698L19 44.5497L11.9466 49.698L14.6632 41.3989L7.58732 36.2815L16.3197 36.3006L19 27.9897Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0kjYl"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsZimbabwe = forwardRef((props, ref) => {
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

FlagsZimbabwe.displayName = 'FlagsZimbabwe'

export default FlagsZimbabwe
