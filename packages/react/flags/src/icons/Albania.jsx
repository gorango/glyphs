
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V80H120V0Z"
            fill="#EB5757"
          />
          <path
            d="M83.1822 23.4118C84.135 24.8934 84.257 26.4465 83.5388 27.9509C82.8207 29.4553 81.2815 30.8707 79.0405 32.0876C76.7994 33.3045 73.9166 34.2903 70.6149 34.9687C67.3133 35.6471 63.6813 36 60 36C56.3187 36 52.6867 35.6471 49.3851 34.9687C46.0834 34.2903 43.2005 33.3045 40.9595 32.0876C38.7185 30.8707 37.1793 29.4553 36.4612 27.9509C35.743 26.4465 35.865 24.8934 36.8178 23.4118L60 26L83.1822 23.4118Z"
            fill="#333333"
          />
          <path
            d="M66 55.5058L60 64L54 55.5058L60 36L66 55.5058Z"
            fill="#333333"
          />
          <path
            d="M47 52L60 35L73 52"
            stroke="#333333"
            stroke-width={strokeWidth}
          />
          <circle
            cx="53.5"
            cy="20.5"
            r="5.5"
            fill="#333333"
          />
          <circle
            cx="50"
            cy="34"
            r="8"
            fill="#333333"
          />
          <circle
            cx="70"
            cy="34"
            r="8"
            fill="#333333"
          />
          <circle
            cx="60"
            cy="38"
            r="10"
            fill="#333333"
          />
          <circle
            cx="66.5"
            cy="20.5"
            r="5.5"
            fill="#333333"
          />
        </>
      )
    case 'square':
      return (
        <>
          <path
            d="M80 0H0V80H80V0Z"
            fill="#EB5757"
          />
          <path
            d="M63.1822 23.4118C64.135 24.8934 64.257 26.4465 63.5388 27.9509C62.8207 29.4553 61.2815 30.8707 59.0405 32.0876C56.7994 33.3045 53.9166 34.2903 50.6149 34.9687C47.3133 35.6471 43.6813 36 40 36C36.3187 36 32.6867 35.6471 29.3851 34.9687C26.0834 34.2903 23.2005 33.3045 20.9595 32.0876C18.7185 30.8707 17.1793 29.4553 16.4612 27.9509C15.743 26.4465 15.865 24.8934 16.8178 23.4118L40 26L63.1822 23.4118Z"
            fill="#333333"
          />
          <path
            d="M46 55.5058L40 64L34 55.5058L40 36L46 55.5058Z"
            fill="#333333"
          />
          <path
            d="M27 52L40 35L53 52"
            stroke="#333333"
            stroke-width={strokeWidth}
          />
          <circle
            cx="33.5"
            cy="20.5"
            r="5.5"
            fill="#333333"
          />
          <circle
            cx="30"
            cy="34"
            r="8"
            fill="#333333"
          />
          <circle
            cx="50"
            cy="34"
            r="8"
            fill="#333333"
          />
          <circle
            cx="40"
            cy="38"
            r="10"
            fill="#333333"
          />
          <circle
            cx="46.5"
            cy="20.5"
            r="5.5"
            fill="#333333"
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M63.1822 23.4118C64.135 24.8934 64.257 26.4465 63.5388 27.9509C62.8207 29.4553 61.2815 30.8707 59.0405 32.0876C56.7994 33.3045 53.9166 34.2903 50.6149 34.9687C47.3133 35.6471 43.6813 36 40 36C36.3187 36 32.6867 35.6471 29.3851 34.9687C26.0834 34.2903 23.2005 33.3045 20.9595 32.0876C18.7185 30.8707 17.1793 29.4553 16.4612 27.9509C15.743 26.4465 15.865 24.8934 16.8178 23.4118L40 26L63.1822 23.4118Z" fill="#333333"/><path d="M46 55.5058L40 64L34 55.5058L40 36L46 55.5058Z" fill="#333333"/><path d="M27 52L40 35L53 52" stroke="#333333" stroke-width="7"/><circle cx="33.5" cy="20.5" r="5.5" fill="#333333"/><circle cx="30" cy="34" r="8" fill="#333333"/><circle cx="50" cy="34" r="8" fill="#333333"/><circle cx="40" cy="38" r="10" fill="#333333"/><circle cx="46.5" cy="20.5" r="5.5" fill="#333333"/></g>
        </>
      )
  }
}

const FlagsAlbania = forwardRef((props, ref) => {
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

FlagsAlbania.displayName = 'FlagsAlbania'

export default FlagsAlbania
