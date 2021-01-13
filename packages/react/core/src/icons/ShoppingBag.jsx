
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M17.7125 31.9162C17.8778 30.8148 18.8239 30 19.9376 30H60.0623C61.176 30 62.1222 30.8148 62.2874 31.9162L67.6124 67.4162C67.8165 68.7766 66.7629 70 65.3873 70H14.6126C13.2371 70 12.1835 68.7766 12.3875 67.4162L17.7125 31.9162Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52 38V22C52 15.3726 46.6274 10 40 10C33.3726 10 28 15.3726 28 22V38"
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
            d="M17.7126 31.9162C17.8778 30.8148 18.8239 30 19.9377 30H22H58H60.0623C61.1761 30 62.1222 30.8148 62.2874 31.9162L67.6124 67.4162C67.8165 68.7766 66.7629 70 65.3873 70H14.6127C13.2371 70 12.1835 68.7766 12.3876 67.4162L17.7126 31.9162Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52 38V22C52 15.3726 46.6274 10 40 10V10C33.3726 10 28 15.3726 28 22V38"
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
            d="M17.7126 31.9162C17.8778 30.8148 18.8239 30 19.9377 30H22H58H60.0623C61.1761 30 62.1222 30.8148 62.2874 31.9162L67.6124 67.4162C67.8165 68.7766 66.7629 70 65.3873 70H14.6127C13.2371 70 12.1835 68.7766 12.3876 67.4162L17.7126 31.9162Z"
            fill="#F2C94C"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52 38V22C52 15.3726 46.6274 10 40 10V10C33.3726 10 28 15.3726 28 22V38"
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
            d="M17.7125 31.9162C17.8778 30.8148 18.8239 30 19.9376 30H60.0623C61.176 30 62.1222 30.8148 62.2874 31.9162L67.6124 67.4162C67.8165 68.7766 66.7629 70 65.3873 70H14.6126C13.2371 70 12.1835 68.7766 12.3875 67.4162L17.7125 31.9162Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M52 38V22C52 15.3726 46.6274 10 40 10C33.3726 10 28 15.3726 28 22V38M12.3875 67.4162L17.7125 31.9162C17.8778 30.8148 18.8239 30 19.9376 30H60.0623C61.176 30 62.1222 30.8148 62.2874 31.9162L67.6124 67.4162C67.8165 68.7766 66.7629 70 65.3873 70H14.6126C13.2371 70 12.1835 68.7766 12.3875 67.4162Z"
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
            d="M40 8C32.268 8 26 14.268 26 22V28H19.9377C17.834 28 16.0468 29.5391 15.7347 31.6196L10.4097 67.1196C10.0243 69.6891 12.0144 72 14.6127 72H65.3873C67.9857 72 69.9758 69.6891 69.5903 67.1196L64.2653 31.6196C63.9533 29.5391 62.1661 28 60.0623 28H54V22C54 14.268 47.732 8 40 8ZM50 32V38C50 39.1046 50.8954 40 52 40C53.1046 40 54 39.1046 54 38V32H60.0623C60.1861 32 60.2912 32.0905 60.3096 32.2129L65.6346 67.7129C65.6572 67.8641 65.5402 68 65.3873 68H14.6127C14.4598 68 14.3428 67.8641 14.3655 67.7129L19.6905 32.2129C19.7088 32.0905 19.8139 32 19.9377 32H26V38C26 39.1046 26.8954 40 28 40C29.1046 40 30 39.1046 30 38V32H50ZM50 28V22C50 16.4772 45.5229 12 40 12C34.4772 12 30 16.4772 30 22V28H50Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreShoppingBag = forwardRef((props, ref) => {
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

CoreShoppingBag.displayName = 'CoreShoppingBag'

export default CoreShoppingBag
