
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M13 52.0002L21.3857 50.1367C27.6299 48.7491 34.1547 49.4023 40 52.0002C45.8453 54.5981 52.3701 55.2513 58.6143 53.8637L67 52.0002V16.0002L58.6143 17.8637C52.3701 19.2513 45.8453 18.5981 40 16.0002C34.1547 13.4023 27.6299 12.7491 21.3857 14.1367L13 16.0002"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M13 12L13 68"
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
            d="M13 52L21.3857 50.1365C27.6299 48.7489 34.1547 49.4021 40 52C45.8453 54.5979 52.3701 55.2511 58.6143 53.8635L67 52V51.5V16.5V16L58.6143 17.8635C52.3701 19.2511 45.8453 18.5979 40 16C34.1547 13.4021 27.6299 12.7489 21.3857 14.1365L13 16V16.5L13 51.5V52Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M13 12L13 68"
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
            d="M13 52L21.3857 50.1365C27.6299 48.7489 34.1547 49.4021 40 52C45.8453 54.5979 52.3701 55.2511 58.6143 53.8635L67 52V51.5V16.5V16L58.6143 17.8635C52.3701 19.2511 45.8453 18.5979 40 16C34.1547 13.4021 27.6299 12.7489 21.3857 14.1365L13 16V16.5L13 51.5V52Z"
            fill="#F2C94C"
          />
          <path
            d="M13 12L13 68"
            stroke="#EB5757"
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
            d="M13 52L21.3857 50.1365C27.6299 48.7489 34.1547 49.4021 40 52C45.8453 54.5979 52.3701 55.2511 58.6143 53.8635L67 52V16L58.6143 17.8635C52.3701 19.2511 45.8453 18.5979 40 16C34.1547 13.4021 27.6299 12.7489 21.3857 14.1365L13 16V52Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M13 12L13 68M13 52L21.3857 50.1365C27.6299 48.7489 34.1547 49.4021 40 52C45.8453 54.5979 52.3701 55.2511 58.6143 53.8635L67 52V16L58.6143 17.8635C52.3701 19.2511 45.8453 18.5979 40 16C34.1547 13.4021 27.6299 12.7489 21.3857 14.1365L13 16V52Z"
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
            d="M11 15.9991L11 12C11 10.8954 11.8954 10 13 10C14.1046 10 15 10.8954 15 12V13.5068L20.9518 12.1841C27.6141 10.7036 34.5757 11.4006 40.8123 14.1724C46.2662 16.5964 52.3542 17.2058 58.1805 15.9111L66.5661 14.0476C67.1583 13.916 67.7783 14.0603 68.2515 14.4399C68.7247 14.8195 69 15.3934 69 16V52C69 52.9374 68.3489 53.749 67.4339 53.9524L59.0482 55.8159C52.3859 57.2964 45.4243 56.5994 39.1877 53.8276C33.7338 51.4036 27.6458 50.7942 21.8195 52.0889L15 53.6043L15 68C15 69.1046 14.1046 70 13 70C11.8954 70 11 69.1046 11 68L11 52.0027C11 52.0018 11 52.0009 11 52L11 15.9991ZM11 15.9991C11 15.9994 11 15.9989 11 15.9991ZM15 17.6043V49.5068L20.9518 48.1841C27.6141 46.7036 34.5757 47.4006 40.8123 50.1724C46.2662 52.5964 52.3542 53.2058 58.1805 51.9111L65 50.3957V18.4932L59.0482 19.8159C52.3859 21.2964 45.4243 20.5994 39.1877 17.8276C33.7338 15.4036 27.6458 14.7942 21.8195 16.0889L15 17.6043Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreFlag = forwardRef((props, ref) => {
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

CoreFlag.displayName = 'CoreFlag'

export default CoreFlag
