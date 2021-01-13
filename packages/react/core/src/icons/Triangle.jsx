
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M38.2724 18.962C39.0441 17.639 40.9557 17.639 41.7275 18.962L66.2454 60.9927C67.0232 62.326 66.0614 64.0005 64.5179 64.0005H15.482C13.9384 64.0005 12.9767 62.326 13.7545 60.9927L38.2724 18.962Z"
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
            d="M38.5059 22C39.2757 20.6667 41.2002 20.6667 41.97 22L62.7546 58C63.5244 59.3333 62.5622 61 61.0226 61L19.4534 61C17.9138 61 16.9515 59.3333 17.7213 58L38.5059 22Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M38.2724 21.9615C39.0442 20.6385 40.9558 20.6385 41.7276 21.9615L66.2455 63.9923C67.0233 65.3256 66.0615 67 64.5179 67H15.4821C13.9385 67 12.9767 65.3256 13.7545 63.9923L38.2724 21.9615Z"
            fill="#9B51E0"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <g opacity="0.5"><path d="M38.7205 36.4339C39.0942 35.7933 40.0197 35.7933 40.3934 36.4339L52.2644 56.7842C52.641 57.4297 52.1753 58.2405 51.4279 58.2405H27.6859C26.9386 58.2405 26.4729 57.4297 26.8495 56.7842L38.7205 36.4339Z" fill="#F2F2F2" stroke="#F2F2F2" stroke-width="1.93671" stroke-linecap="round" stroke-linejoin="round"/></g>
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M38.2724 18.962C39.0441 17.639 40.9557 17.639 41.7275 18.962L66.2454 60.9927C67.0232 62.326 66.0614 64.0005 64.5179 64.0005H15.482C13.9384 64.0005 12.9767 62.326 13.7545 60.9927L38.2724 18.962Z"
            fill="currentColor"
            fill-opacity="0.25"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.7742 21C38.3138 18.3333 42.1628 18.3333 43.7024 21L64.487 57C66.0266 59.6667 64.1021 63 61.0229 63H19.4537C16.3745 63 14.45 59.6667 15.9896 57L36.7742 21ZM40.2383 23L19.4537 59H61.0229L40.2383 23Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreTriangle = forwardRef((props, ref) => {
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

CoreTriangle.displayName = 'CoreTriangle'

export default CoreTriangle
