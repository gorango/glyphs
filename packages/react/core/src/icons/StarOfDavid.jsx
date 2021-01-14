
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M39.134 13.5C39.5189 12.8333 40.4812 12.8333 40.8661 13.5L63.3827 52.5C63.7676 53.1667 63.2865 54 62.5167 54H17.4834C16.7136 54 16.2324 53.1667 16.6173 52.5L39.134 13.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.134 66.5C39.5189 67.1667 40.4812 67.1667 40.8661 66.5L63.3827 27.5C63.7676 26.8333 63.2865 26 62.5167 26H17.4834C16.7136 26 16.2324 26.8333 16.6173 27.5L39.134 66.5Z"
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
            d="M39.134 13.5C39.5189 12.8333 40.4811 12.8333 40.866 13.5L63.3827 52.5C63.7676 53.1667 63.2865 54 62.5167 54H17.4833C16.7135 54 16.2324 53.1667 16.6173 52.5L39.134 13.5Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M39.134 66.5C39.5189 67.1667 40.4811 67.1667 40.866 66.5L63.3827 27.5C63.7676 26.8333 63.2865 26 62.5167 26H17.4833C16.7135 26 16.2324 26.8333 16.6173 27.5L39.134 66.5Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M39.134 13.5C39.5189 12.8333 40.4811 12.8333 40.866 13.5L63.3827 52.5C63.7676 53.1667 63.2865 54 62.5167 54H17.4833C16.7135 54 16.2324 53.1667 16.6173 52.5L39.134 13.5Z"
            stroke="#56CCF2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M39.134 66.5C39.5189 67.1667 40.4811 67.1667 40.866 66.5L63.3827 27.5C63.7676 26.8333 63.2865 26 62.5167 26H17.4833C16.7135 26 16.2324 26.8333 16.6173 27.5L39.134 66.5Z"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.0311 12.25C41.6839 9.91667 38.316 9.91666 36.9689 12.25L23.8343 34.9998L26.721 39.9998L40 17L43.7527 23.5H49.5262L43.0311 12.25ZM52.413 28.5H46.6395L59.9186 51.5H52.4132L49.5264 56.5H62.5166C65.2109 56.5 66.8949 53.5833 65.5477 51.25L52.413 28.5ZM43.7529 56.5L46.6397 51.5H20.0814L23.8342 44.9998L20.9475 39.9998L14.4522 51.25C13.1051 53.5833 14.789 56.5 17.4833 56.5H43.7529Z"
            fill="#56CCF2"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M39.134 13.5C39.5189 12.8333 40.4811 12.8333 40.8661 13.5L63.3827 52.5C63.7676 53.1667 63.2865 54 62.5167 54H17.4834C16.7136 54 16.2324 53.1667 16.6173 52.5L39.134 13.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M39.134 66.5C39.5189 67.1667 40.4811 67.1667 40.8661 66.5L63.3827 27.5C63.7676 26.8333 63.2865 26 62.5167 26H17.4834C16.7136 26 16.2324 26.8333 16.6173 27.5L39.134 66.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M39.134 13.5C39.5189 12.8333 40.4811 12.8333 40.8661 13.5L63.3827 52.5C63.7676 53.1667 63.2865 54 62.5167 54H17.4834C16.7136 54 16.2324 53.1667 16.6173 52.5L39.134 13.5Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.134 66.5C39.5189 67.1667 40.4811 67.1667 40.8661 66.5L63.3827 27.5C63.7676 26.8333 63.2865 26 62.5167 26H17.4834C16.7136 26 16.2324 26.8333 16.6173 27.5L39.134 66.5Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.5982 12.5C41.4435 10.5 38.5568 10.5 37.4021 12.5L30.7625 24H17.4835C15.1741 24 13.7307 26.5 14.8854 28.5L21.5249 40L14.8854 51.5C13.7307 53.5 15.1741 56 17.4835 56H30.7625L37.4021 67.5C38.5568 69.5 41.4435 69.5 42.5982 67.5L49.2377 56H62.5168C64.8262 56 66.2696 53.5 65.1149 51.5L58.4753 40L65.1149 28.5C66.2696 26.5 64.8262 24 62.5168 24H49.2377L42.5982 12.5ZM44.6189 24L40.0001 16L35.3813 24H44.6189ZM33.0719 28H46.9283L53.8565 40L46.9283 52H33.0719L26.1437 40L33.0719 28ZM28.4531 28H19.2155L23.8343 36L28.4531 28ZM23.8343 44L19.2155 52H28.4531L23.8343 44ZM35.3813 56L40.0001 64L44.6189 56H35.3813ZM51.5471 52H60.7848L56.1659 44L51.5471 52ZM56.1659 36L51.5471 28H60.7848L56.1659 36Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreStarOfDavid = forwardRef((props, ref) => {
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

CoreStarOfDavid.displayName = 'CoreStarOfDavid'

export default CoreStarOfDavid
