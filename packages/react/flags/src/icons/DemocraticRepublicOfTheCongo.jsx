
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip01Rua)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 -0.010009L0 79.99" stroke="#F2C94C" stroke-width="24"/><path d="M120 -0.010009L0 79.99" stroke="#EB5757" stroke-width="14"/><path d="M22 7.98999L25.127 17.686L35.3148 17.6638L27.0596 23.634L30.229 33.3162L22 27.31L13.771 33.3162L16.9404 23.634L8.68521 17.6638L18.873 17.686L22 7.98999Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip01Rua"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0QQR9)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 -0.010009L0 79.99" stroke="#F2C94C" stroke-width="24"/><path d="M120 -0.010009L0 79.99" stroke="#EB5757" stroke-width="14"/><path d="M22 7.98999L25.127 17.686L35.3148 17.6638L27.0596 23.634L30.229 33.3162L22 27.31L13.771 33.3162L16.9404 23.634L8.68521 17.6638L18.873 17.686L22 7.98999Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0QQR9"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0BgB3" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0BgB3)"><g clip-path="url(#clip0BgB3)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 -0.010009L0 79.99" stroke="#F2C94C" stroke-width="24"/><path d="M120 -0.010009L0 79.99" stroke="#EB5757" stroke-width="14"/><path d="M22 7.98999L25.127 17.686L35.3148 17.6638L27.0596 23.634L30.229 33.3162L22 27.31L13.771 33.3162L16.9404 23.634L8.68521 17.6638L18.873 17.686L22 7.98999Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip0BgB3"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsDemocraticRepublicOfTheCongo = forwardRef((props, ref) => {
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

FlagsDemocraticRepublicOfTheCongo.displayName = 'FlagsDemocraticRepublicOfTheCongo'

export default FlagsDemocraticRepublicOfTheCongo
