
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V40H120V0Z"
            fill="#56CCF2"
          />
          <g opacity="0.9"><path d="M120 40H0V60H120V40Z" fill="#F2C94C"/><path d="M120 60H0V80H120V60Z" fill="#219653"/></g>
          <path
            d="M99 13L100.944 16.9637L105.255 16.0121L103.368 20.0031L106.799 22.7802L102.503 23.7932L102.471 28.2078L99 25.48L95.5289 28.2078L95.4974 23.7932L91.2006 22.7802L94.6323 20.0031L92.7453 16.0121L97.0562 16.9637L99 13Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0OWCa)"><path d="M120 0H0V40H120V0Z" fill="#56CCF2"/><g opacity="0.9"><path d="M120 40H0V60H120V40Z" fill="#F2C94C"/><path d="M120 60H0V80H120V60Z" fill="#219653"/></g><path d="M59 13L60.9438 16.9637L65.2547 16.0121L63.3677 20.0031L66.7994 22.7802L62.5026 23.7932L62.4711 28.2078L59 25.48L55.5289 28.2078L55.4974 23.7932L51.2006 22.7802L54.6323 20.0031L52.7453 16.0121L57.0562 16.9637L59 13Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0OWCa"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask01ShR" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask01ShR)"><g clip-path="url(#clip01ShR)"><path d="M120 0H0V40H120V0Z" fill="#56CCF2"/><g opacity="0.9"><path d="M120 40H0V60H120V40Z" fill="#F2C94C"/><path d="M120 60H0V80H120V60Z" fill="#219653"/></g><path d="M59 13L60.9438 16.9637L65.2547 16.0121L63.3677 20.0031L66.7994 22.7802L62.5026 23.7932L62.4711 28.2078L59 25.48L55.5289 28.2078L55.4974 23.7932L51.2006 22.7802L54.6323 20.0031L52.7453 16.0121L57.0562 16.9637L59 13Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip01ShR"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsRwanda = forwardRef((props, ref) => {
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

FlagsRwanda.displayName = 'FlagsRwanda'

export default FlagsRwanda
