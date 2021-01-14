
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <rect
            width="120"
            height="80"
            fill="#F2F2F2"
          />
          <rect
            width="120"
            height="23"
            fill="#2F80ED"
          />
          <rect
            y="57"
            width="120"
            height="23"
            fill="#2F80ED"
          />
          <path
            d="M52.313 41.5714L59.5712 29L66.8295 41.5714H52.313Z"
            fill="#F2C94C"
          />
          <path
            d="M68.4608 29.5388L65.1272 32.8724C66.549 34.2944 67.4286 36.2586 67.4286 38.4284C67.4286 42.7679 63.9107 46.2857 59.5712 46.2857C55.2317 46.2857 51.7139 42.7679 51.7139 38.4284C51.7139 36.2588 52.5935 34.2946 54.0153 32.8724L50.6817 29.5388C48.4068 31.8139 47 34.9567 47 38.4284C47 45.3714 52.6285 50.9998 59.5714 50.9998C66.5144 50.9998 72.1429 45.3714 72.1429 38.4284C72.1429 34.9567 70.7356 31.8139 68.4608 29.5388Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.3644 39.4365H51.7778C52.2726 43.3 55.5731 46.2859 59.5711 46.2859C63.5691 46.2859 66.8697 43.3 67.3644 39.4365Z"
            fill="#6FCF97"
          />
        </>
      )
    case 'square':
      return (
        <>
          <rect
            width="80"
            height="80"
            fill="#F2F2F2"
          />
          <rect
            width="80"
            height="23"
            fill="#2F80ED"
          />
          <rect
            y="57"
            width="80"
            height="23"
            fill="#2F80ED"
          />
          <path
            d="M32.313 41.5714L39.5712 29L46.8295 41.5714H32.313Z"
            fill="#F2C94C"
          />
          <path
            d="M48.4608 29.5388L45.1272 32.8724C46.549 34.2944 47.4286 36.2586 47.4286 38.4284C47.4286 42.7679 43.9107 46.2857 39.5712 46.2857C35.2317 46.2857 31.7139 42.7679 31.7139 38.4284C31.7139 36.2588 32.5935 34.2946 34.0153 32.8724L30.6817 29.5388C28.4068 31.8139 27 34.9567 27 38.4284C27 45.3714 32.6285 50.9998 39.5714 50.9998C46.5144 50.9998 52.1429 45.3714 52.1429 38.4284C52.1429 34.9567 50.7356 31.8139 48.4608 29.5388Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47.3644 39.4365H31.7778C32.2726 43.3 35.5731 46.2859 39.5711 46.2859C43.5691 46.2859 46.8697 43.3 47.3644 39.4365Z"
            fill="#6FCF97"
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><rect width="80" height="80" fill="#F2F2F2"/><rect width="80" height="23" fill="#2F80ED"/><rect y="57" width="80" height="23" fill="#2F80ED"/><path d="M32.313 41.5714L39.5712 29L46.8295 41.5714H32.313Z" fill="#F2C94C"/><path d="M48.4608 29.5388L45.1272 32.8724C46.549 34.2944 47.4286 36.2586 47.4286 38.4284C47.4286 42.7679 43.9107 46.2857 39.5712 46.2857C35.2317 46.2857 31.7139 42.7679 31.7139 38.4284C31.7139 36.2588 32.5935 34.2946 34.0153 32.8724L30.6817 29.5388C28.4068 31.8139 27 34.9567 27 38.4284C27 45.3714 32.6285 50.9998 39.5714 50.9998C46.5144 50.9998 52.1429 45.3714 52.1429 38.4284C52.1429 34.9567 50.7356 31.8139 48.4608 29.5388Z" fill="#F2C94C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M47.3644 39.4365H31.7778C32.2726 43.3 35.5731 46.2859 39.5711 46.2859C43.5691 46.2859 46.8697 43.3 47.3644 39.4365Z" fill="#6FCF97"/></g>
        </>
      )
  }
}

const FlagsElSalvador = forwardRef((props, ref) => {
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

FlagsElSalvador.displayName = 'FlagsElSalvador'

export default FlagsElSalvador
