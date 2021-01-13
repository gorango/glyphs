
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V80H120V0Z"
            fill="#56CCF2"
          />
          <path
            d="M9 5.5L13 10.0714L9 14.6429L5 10.0714L9 5.5Z"
            fill="#F2C94C"
          />
          <path
            d="M9 19.6428L13 24.2143L9 28.7857L5 24.2143L9 19.6428Z"
            fill="#F2C94C"
          />
          <path
            d="M9 33.7856L13 39.8809L9 45.9761L5 39.8809L9 33.7856Z"
            fill="#F2C94C"
          />
          <path
            d="M9 50.9761L13 55.5475L9 60.1189L5 55.5475L9 50.9761Z"
            fill="#F2C94C"
          />
          <path
            d="M9 65.1191L13 69.6906L9 74.262L5 69.6906L9 65.1191Z"
            fill="#F2C94C"
          />
          <path
            d="M60 24L62.7034 26.7345L66.5136 26.3957L66.8451 30.2464L69.9794 32.4618L67.784 35.6269L68.7758 39.36L65.0806 40.3585L63.4658 43.8624L60 42.2272L56.5342 43.8624L54.9194 40.3585L51.2243 39.36L52.2161 35.6269L50.0206 32.4618L53.155 30.2464L53.4865 26.3957L57.2967 26.7345L60 24Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M77.6012 34.8447C76.5285 42.4387 69.0572 48.32 60 48.32C50.9428 48.32 43.4715 42.4387 42.3988 34.8447C41.497 36.633 41 38.5896 41 40.64C41 49.1231 49.5066 56 60 56C70.4934 56 79 49.1231 79 40.64C79 38.5896 78.503 36.633 77.6012 34.8447Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'square':
      return (
        <>
          <path
            d="M80 0H0V80H80V0Z"
            fill="#56CCF2"
          />
          <path
            d="M9 5.5L13 10.0714L9 14.6429L5 10.0714L9 5.5Z"
            fill="#F2C94C"
          />
          <path
            d="M9 19.6428L13 24.2143L9 28.7857L5 24.2143L9 19.6428Z"
            fill="#F2C94C"
          />
          <path
            d="M9 33.7856L13 39.8809L9 45.9761L5 39.8809L9 33.7856Z"
            fill="#F2C94C"
          />
          <path
            d="M9 50.9762L13 55.5476L9 60.1191L5 55.5476L9 50.9762Z"
            fill="#F2C94C"
          />
          <path
            d="M9 65.119L13 69.6904L9 74.2619L5 69.6904L9 65.119Z"
            fill="#F2C94C"
          />
          <path
            d="M40 24L42.7034 26.7345L46.5136 26.3957L46.8451 30.2464L49.9794 32.4618L47.784 35.6269L48.7758 39.36L45.0806 40.3585L43.4658 43.8624L40 42.2272L36.5342 43.8624L34.9194 40.3585L31.2243 39.36L32.2161 35.6269L30.0206 32.4618L33.155 30.2464L33.4865 26.3957L37.2967 26.7345L40 24Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M57.6012 34.8447C56.5285 42.4387 49.0572 48.32 40 48.32C30.9428 48.32 23.4715 42.4387 22.3988 34.8447C21.497 36.633 21 38.5896 21 40.64C21 49.1231 29.5066 56 40 56C50.4934 56 59 49.1231 59 40.64C59 38.5896 58.503 36.633 57.6012 34.8447Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask09fQ5" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask09fQ5)"><path d="M80 0H0V80H80V0Z" fill="#56CCF2"/><path d="M9 5.5L13 10.0714L9 14.6429L5 10.0714L9 5.5Z" fill="#F2C94C"/><path d="M9 19.6428L13 24.2143L9 28.7857L5 24.2143L9 19.6428Z" fill="#F2C94C"/><path d="M9 33.7856L13 39.8809L9 45.9761L5 39.8809L9 33.7856Z" fill="#F2C94C"/><path d="M9 50.9762L13 55.5476L9 60.1191L5 55.5476L9 50.9762Z" fill="#F2C94C"/><path d="M9 65.119L13 69.6904L9 74.2619L5 69.6904L9 65.119Z" fill="#F2C94C"/><path d="M40 24L42.7034 26.7345L46.5136 26.3957L46.8451 30.2464L49.9794 32.4618L47.784 35.6269L48.7758 39.36L45.0806 40.3585L43.4658 43.8624L40 42.2272L36.5342 43.8624L34.9194 40.3585L31.2243 39.36L32.2161 35.6269L30.0206 32.4618L33.155 30.2464L33.4865 26.3957L37.2967 26.7345L40 24Z" fill="#F2C94C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M57.6012 34.8447C56.5285 42.4387 49.0572 48.32 40 48.32C30.9428 48.32 23.4715 42.4387 22.3988 34.8447C21.497 36.633 21 38.5896 21 40.64C21 49.1231 29.5066 56 40 56C50.4934 56 59 49.1231 59 40.64C59 38.5896 58.503 36.633 57.6012 34.8447Z" fill="#F2C94C"/></g>
        </>
      )
  }
}

const FlagsKazakhstan = forwardRef((props, ref) => {
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

FlagsKazakhstan.displayName = 'FlagsKazakhstan'

export default FlagsKazakhstan
