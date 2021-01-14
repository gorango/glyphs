
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M60 32.0176C60 20.9719 51.0457 12.0176 40 12.0176C28.9543 12.0176 20 20.9719 20 32.0176V33.2222C20 37.6418 21.3809 41.9509 23.9497 45.5472L39.9605 67.9623C39.9799 67.9894 40.0201 67.9894 40.0395 67.9623L56.0503 45.5472C58.6191 41.9509 60 37.6418 60 33.2222V32.0176Z"
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
            d="M61.4483 33.1532C61.4483 21.4803 51.9856 12.0176 40.3127 12.0176H39.6871C28.0143 12.0176 18.5515 21.4803 18.5515 33.1532C18.5515 37.7689 20.0625 42.2577 22.8536 45.9339L39.9576 68.4618C39.9788 68.4898 40.021 68.4898 40.0423 68.4618L57.1463 45.9339C59.9374 42.2577 61.4483 37.7689 61.4483 33.1532Z"
            fill="currentColor"
          />
          <path
            d="M39.6871 14.0176H40.3127V10.0176H39.6871V14.0176ZM41.5505 67.2524L24.4465 44.7245L21.2607 47.1433L38.3646 69.6712L41.5505 67.2524ZM55.5534 44.7245L38.4494 67.2524L41.6352 69.6712L58.7392 47.1433L55.5534 44.7245ZM38.3646 69.6711C39.1862 70.7534 40.8136 70.7534 41.6352 69.6711L38.4494 67.2524C39.2284 66.2263 40.7714 66.2263 41.5505 67.2524L38.3646 69.6711ZM16.5515 33.1532C16.5515 38.2057 18.2054 43.1192 21.2607 47.1433L24.4465 44.7245C21.9195 41.3962 20.5515 37.3321 20.5515 33.1532H16.5515ZM58.7392 47.1433C61.7944 43.1192 63.4483 38.2057 63.4483 33.1532H59.4483C59.4483 37.3321 58.0804 41.3961 55.5534 44.7245L58.7392 47.1433ZM40.3127 14.0176C50.881 14.0176 59.4483 22.5849 59.4483 33.1532H63.4483C63.4483 20.3757 53.0902 10.0176 40.3127 10.0176V14.0176ZM39.6871 10.0176C26.9097 10.0176 16.5515 20.3757 16.5515 33.1532H20.5515C20.5515 22.5849 29.1188 14.0176 39.6871 14.0176V10.0176Z"
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
            d="M61.4485 33.1532C61.4485 21.4803 51.9857 12.0176 40.3128 12.0176H39.6873C28.0144 12.0176 18.5516 21.4803 18.5516 33.1532C18.5516 37.7689 20.0626 42.2577 22.8537 45.9339L39.9577 68.4618C39.979 68.4898 40.0211 68.4898 40.0424 68.4618L57.1464 45.9339C59.9375 42.2577 61.4485 37.7689 61.4485 33.1532Z"
            fill="#EB5757"
          />
          <path
            d="M39.6873 14.0176H40.3128V10.0176H39.6873V14.0176ZM41.5506 67.2524L24.4466 44.7245L21.2608 47.1433L38.3648 69.6712L41.5506 67.2524ZM55.5535 44.7245L38.4495 67.2524L41.6353 69.6712L58.7393 47.1433L55.5535 44.7245ZM38.3647 69.6711C39.1864 70.7534 40.8137 70.7534 41.6354 69.6711L38.4495 67.2524C39.2285 66.2263 40.7716 66.2263 41.5506 67.2524L38.3647 69.6711ZM16.5516 33.1532C16.5516 38.2057 18.2056 43.1192 21.2608 47.1433L24.4466 44.7245C21.9196 41.3962 20.5516 37.3321 20.5516 33.1532H16.5516ZM58.7393 47.1433C61.7945 43.1192 63.4485 38.2057 63.4485 33.1532H59.4485C59.4485 37.3321 58.0805 41.3961 55.5535 44.7245L58.7393 47.1433ZM40.3128 14.0176C50.8812 14.0176 59.4485 22.5849 59.4485 33.1532H63.4485C63.4485 20.3758 53.0903 10.0176 40.3128 10.0176V14.0176ZM39.6873 10.0176C26.9098 10.0176 16.5516 20.3758 16.5516 33.1532H20.5516C20.5516 22.5849 29.1189 14.0176 39.6873 14.0176V10.0176Z"
            fill="#EB5757"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M60 32.0176C60 20.9719 51.0457 12.0176 40 12.0176C28.9543 12.0176 20 20.9719 20 32.0176V33.2222C20 37.6418 21.3809 41.9509 23.9497 45.5472L39.9605 67.9623C39.9799 67.9894 40.0201 67.9894 40.0395 67.9623L56.0503 45.5472C58.6191 41.9509 60 37.6418 60 33.2222V32.0176Z"
            fill="currentColor"
            fill-opacity="0.25"
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
            d="M16.5516 32.9032C16.5516 20.1258 26.9098 9.76758 39.6873 9.76758H40.3128C53.0903 9.76758 63.4485 20.1258 63.4485 32.9032C63.4485 37.9557 61.7945 42.8692 58.7393 46.8933L41.6354 69.4211C40.8137 70.5033 39.1864 70.5033 38.3648 69.4212L21.2608 46.8933C18.2056 42.8692 16.5516 37.9557 16.5516 32.9032ZM39.6873 13.7676C29.1189 13.7676 20.5516 22.3349 20.5516 32.9032C20.5516 37.0821 21.9196 41.1462 24.4466 44.4745L40 64.9601L55.5535 44.4745C58.0805 41.1461 59.4485 37.0821 59.4485 32.9032C59.4485 22.3349 50.8812 13.7676 40.3128 13.7676H39.6873Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreMapMarker = forwardRef((props, ref) => {
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

CoreMapMarker.displayName = 'CoreMapMarker'

export default CoreMapMarker