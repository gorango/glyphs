
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M28 36.75C28 43.2394 33.2607 48.5 39.75 48.5C46.2393 48.5 51.5 43.2394 51.5 36.75V31.4961H67.5V36.75C67.5 52.0759 55.0759 64.5 39.75 64.5C24.4241 64.5 12 52.0759 12 36.75V31.4961H28V36.75Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 31.4961V15H12V31.4961"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M67.5 31.4961V15H51.5V31.4961"
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
            d="M28 23V15H12V23V28.9961H28V23ZM28 33.9961V36.75C28 43.2393 33.2607 48.5 39.75 48.5C46.2393 48.5 51.5 43.2393 51.5 36.75V33.9961H67.5V36.75C67.5 52.0759 55.0759 64.5 39.75 64.5C24.4241 64.5 12 52.0759 12 36.75V33.9961H28ZM67.5 28.9961H51.5V23V15H67.5V23V28.9961Z"
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
            d="M28 23V15H12V23V36.75C12 52.0759 24.4241 64.5 39.75 64.5C55.0759 64.5 67.5 52.0759 67.5 36.75V23V15H51.5V23V36.75C51.5 43.2393 46.2393 48.5 39.75 48.5C33.2607 48.5 28 43.2393 28 36.75V23Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28 15V23V23.4961V31.4961H12V23.4961V23V15H28ZM67.5 15V23V23.4961V31.4961H51.5V23.4961V23V15H67.5Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M28 15H12V36.75C12 52.0759 24.4241 64.5 39.75 64.5C55.0759 64.5 67.5 52.0759 67.5 36.75V15H51.5V36.75C51.5 43.2393 46.2393 48.5 39.75 48.5C33.2607 48.5 28 43.2393 28 36.75V15Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 31.4961H28M51.5 31.4961H67.5M28 15H12V36.75C12 52.0759 24.4241 64.5 39.75 64.5C55.0759 64.5 67.5 52.0759 67.5 36.75V15H51.5V36.75C51.5 43.2393 46.2393 48.5 39.75 48.5C33.2607 48.5 28 43.2393 28 36.75V15Z"
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
            d="M10 15C10 13.8954 10.8954 13 12 13H28C29.1046 13 30 13.8954 30 15V36.75C30 42.1348 34.3652 46.5 39.75 46.5C45.1348 46.5 49.5 42.1348 49.5 36.75V15C49.5 13.8954 50.3954 13 51.5 13H67.5C68.6046 13 69.5 13.8954 69.5 15V36.75C69.5 53.1805 56.1805 66.5 39.75 66.5C23.3195 66.5 10 53.1805 10 36.75V15ZM14 33.4961V36.75C14 50.9713 25.5287 62.5 39.75 62.5C53.9713 62.5 65.5 50.9713 65.5 36.75V33.4961H53.5V36.75C53.5 44.3439 47.3439 50.5 39.75 50.5C32.1561 50.5 26 44.3439 26 36.75V33.4961H14ZM26 29.4961H14V17H26V29.4961ZM53.5 29.4961H65.5V17H53.5V29.4961Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreMagnet = forwardRef((props, ref) => {
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

CoreMagnet.displayName = 'CoreMagnet'

export default CoreMagnet
