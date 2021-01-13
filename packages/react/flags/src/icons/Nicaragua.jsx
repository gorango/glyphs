
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V79.8423H120V0Z"
            fill="#2F80ED"
          />
          <path
            d="M120 25.9492H0V53.8946H120V25.9492Z"
            fill="#F2F2F2"
          />
          <circle
            cx="60"
            cy="40"
            r="12"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
          />
          <path
            d="M60 30L68 45H52L60 30Z"
            fill="#56CCF2"
          />
          <path
            d="M65 41C65 40.3434 64.8707 39.6932 64.6194 39.0866C64.3681 38.48 63.9998 37.9288 63.5355 37.4645C63.0712 37.0002 62.52 36.6319 61.9134 36.3806C61.3068 36.1293 60.6566 36 60 36C59.3434 36 58.6932 36.1293 58.0866 36.3806C57.48 36.6319 56.9288 37.0002 56.4645 37.4645C56.0002 37.9288 55.6319 38.48 55.3806 39.0866C55.1293 39.6932 55 40.3434 55 41"
            stroke="#2F80ED"
          />
          <path
            d="M59.0905 30.9959L60 41L60.9095 30.9959C60.9581 30.4611 60.537 30 60 30C59.463 30 59.0419 30.4611 59.0905 30.9959Z"
            fill="#2F80ED"
          />
          <path
            d="M52.9412 43.2353C55.9529 37.5882 64.0471 37.5882 67.0588 43.2353L68 45H52L52.9412 43.2353Z"
            fill="#219653"
          />
          <path
            d="M60 30L68 45H52L60 30Z"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
          />
        </>
      )
    case 'square':
      return (
        <>
          <path
            d="M80 0H0V79.9983H80V0Z"
            fill="#2F80ED"
          />
          <path
            d="M80 26H0V54H80V26Z"
            fill="#F2F2F2"
          />
          <circle
            cx="40"
            cy="40"
            r="12"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
          />
          <path
            d="M40 30L48 45H32L40 30Z"
            fill="#56CCF2"
          />
          <path
            d="M45 41C45 40.3434 44.8707 39.6932 44.6194 39.0866C44.3681 38.48 43.9998 37.9288 43.5355 37.4645C43.0712 37.0002 42.52 36.6319 41.9134 36.3806C41.3068 36.1293 40.6566 36 40 36C39.3434 36 38.6932 36.1293 38.0866 36.3806C37.48 36.6319 36.9288 37.0002 36.4645 37.4645C36.0002 37.9288 35.6319 38.48 35.3806 39.0866C35.1293 39.6932 35 40.3434 35 41"
            stroke="#2F80ED"
          />
          <path
            d="M39.0905 30.9959L40 41L40.9095 30.9959C40.9581 30.4611 40.537 30 40 30C39.463 30 39.0419 30.4611 39.0905 30.9959Z"
            fill="#2F80ED"
          />
          <path
            d="M32.9412 43.2353C35.9529 37.5882 44.0471 37.5882 47.0588 43.2353L48 45H32L32.9412 43.2353Z"
            fill="#219653"
          />
          <path
            d="M40 30L48 45H32L40 30Z"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0lCMT" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0lCMT)"><path d="M80 0H0V79.8423H80V0Z" fill="#2F80ED"/><path d="M80 25.9493H0V53.8948H80V25.9493Z" fill="#F2F2F2"/><circle cx="40" cy="40" r="12" stroke="#F2C94C" stroke-width="3"/><path d="M40 30L48 45H32L40 30Z" fill="#56CCF2"/><path d="M45 41C45 40.3434 44.8707 39.6932 44.6194 39.0866C44.3681 38.48 43.9998 37.9288 43.5355 37.4645C43.0712 37.0002 42.52 36.6319 41.9134 36.3806C41.3068 36.1293 40.6566 36 40 36C39.3434 36 38.6932 36.1293 38.0866 36.3806C37.48 36.6319 36.9288 37.0002 36.4645 37.4645C36.0002 37.9288 35.6319 38.48 35.3806 39.0866C35.1293 39.6932 35 40.3434 35 41" stroke="#2F80ED"/><path d="M39.0905 30.9959L40 41L40.9095 30.9959C40.9581 30.4611 40.537 30 40 30C39.463 30 39.0419 30.4611 39.0905 30.9959Z" fill="#2F80ED"/><path d="M32.9412 43.2353C35.9529 37.5882 44.0471 37.5882 47.0588 43.2353L48 45H32L32.9412 43.2353Z" fill="#219653"/><path d="M40 30L48 45H32L40 30Z" stroke="#F2C94C" stroke-width="2"/></g>
        </>
      )
  }
}

const FlagsNicaragua = forwardRef((props, ref) => {
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

FlagsNicaragua.displayName = 'FlagsNicaragua'

export default FlagsNicaragua
