
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M20 20V66C20 67.1046 20.8954 68 22 68H58C59.1046 68 60 67.1046 60 66V14C60 12.8954 59.1046 12 58 12H28L20 20Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M26 28V22"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33 24V18"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 24V18"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 24V18"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M54 24V18"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'bold':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 66V20L28 12L58 12C59.1046 12 60 12.8954 60 14V66C60 67.1046 59.1046 68 58 68H22C20.8954 68 20 67.1046 20 66ZM24 28C24 29.1046 24.8954 30 26 30C27.1046 30 28 29.1046 28 28V22C28 20.8954 27.1046 20 26 20C24.8954 20 24 20.8954 24 22V28ZM33 26C31.8954 26 31 25.1046 31 24V18C31 16.8954 31.8954 16 33 16C34.1046 16 35 16.8954 35 18V24C35 25.1046 34.1046 26 33 26ZM38 24C38 25.1046 38.8954 26 40 26C41.1046 26 42 25.1046 42 24V18C42 16.8954 41.1046 16 40 16C38.8954 16 38 16.8954 38 18V24ZM47 26C45.8954 26 45 25.1046 45 24V18C45 16.8954 45.8954 16 47 16C48.1046 16 49 16.8954 49 18V24C49 25.1046 48.1046 26 47 26ZM52 24C52 25.1046 52.8954 26 54 26C55.1046 26 56 25.1046 56 24V18C56 16.8954 55.1046 16 54 16C52.8954 16 52 16.8954 52 18V24Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 20V66C20 67.1046 20.8954 68 22 68H58C59.1046 68 60 67.1046 60 66V14C60 12.8954 59.1046 12 58 12H28L20 20Z"
            fill="#828282"
          />
          <path
            d="M20 20L18.5858 18.5858C18.2107 18.9609 18 19.4696 18 20H20ZM28 12V10C27.4696 10 26.9609 10.2107 26.5858 10.5858L28 12ZM22 66V20H18V66H22ZM22 66H22H18C18 68.2091 19.7909 70 22 70V66ZM58 66H22V70H58V66ZM58 66V70C60.2091 70 62 68.2091 62 66H58ZM58 14V66H62V14H58ZM58 14H62C62 11.7909 60.2091 10 58 10V14ZM28 14H58V10H28V14ZM26.5858 10.5858L18.5858 18.5858L21.4142 21.4142L29.4142 13.4142L26.5858 10.5858Z"
            fill="#828282"
          />
          <path
            d="M26 28V22"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33 24V18"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 24V18"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 24V18"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M54 24V18"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M20 20V66C20 67.1046 20.8954 68 22 68H58C59.1046 68 60 67.1046 60 66V14C60 12.8954 59.1046 12 58 12H28L20 20Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M26 28V22M33 24V18M40 24V18M47 24V18M54 24V18M20 66V20L28 12H58C59.1046 12 60 12.8954 60 14V66C60 67.1046 59.1046 68 58 68H22C20.8954 68 20 67.1046 20 66Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            d="M31 24C31 25.1046 31.8954 26 33 26C34.1046 26 35 25.1046 35 24V18C35 16.8954 34.1046 16 33 16C31.8954 16 31 16.8954 31 18V24Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M26 30C24.8954 30 24 29.1046 24 28V22C24 20.8954 24.8954 20 26 20C27.1046 20 28 20.8954 28 22V28C28 29.1046 27.1046 30 26 30Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45 24C45 25.1046 45.8954 26 47 26C48.1046 26 49 25.1046 49 24V18C49 16.8954 48.1046 16 47 16C45.8954 16 45 16.8954 45 18V24Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M54 26C52.8954 26 52 25.1046 52 24V18C52 16.8954 52.8954 16 54 16C55.1046 16 56 16.8954 56 18V24C56 25.1046 55.1046 26 54 26Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38 24C38 25.1046 38.8954 26 40 26C41.1046 26 42 25.1046 42 24V18C42 16.8954 41.1046 16 40 16C38.8954 16 38 16.8954 38 18V24Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28 10C27.4696 10 26.9609 10.2107 26.5858 10.5858L18.5858 18.5858C18.2107 18.9609 18 19.4696 18 20V66C18 68.2091 19.7909 70 22 70H58C60.2091 70 62 68.2091 62 66V14C62 11.7909 60.2091 10 58 10H28ZM22 20.8284L28.8284 14H58V66H22V20.8284Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreSdCard = forwardRef((props, ref) => {
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

CoreSdCard.displayName = 'CoreSdCard'

export default CoreSdCard
