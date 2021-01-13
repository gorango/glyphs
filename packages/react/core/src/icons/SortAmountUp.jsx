
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M20 25L20 64"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25.818 24.9999H14.182C13.0078 24.9999 12.4197 23.5802 13.25 22.7499L18.5858 17.4142C19.3668 16.6331 20.6332 16.6331 21.4142 17.4142L26.75 22.7499C27.5803 23.5802 26.9923 24.9999 25.818 24.9999Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37 22H45"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37 34H53"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37 46L61 46"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37 58L69 58"
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
            d="M23 25C23 23.3431 21.6569 22 20 22C18.3431 22 17 23.3431 17 25L23 25ZM17 64C17 65.6569 18.3431 67 20 67C21.6569 67 23 65.6569 23 64H17ZM17 25L17 64H23L23 25L17 25Z"
            fill="currentColor"
          />
          <path
            d="M25.818 25L14.182 25C13.0078 25 12.4197 23.5803 13.25 22.75L18.5858 17.4142C19.3668 16.6332 20.6332 16.6332 21.4142 17.4142L26.75 22.75C27.5803 23.5803 26.9923 25 25.818 25Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37 22H45"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M37 34H53"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M37 46L61 46"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M37 58L69 58"
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
            d="M22 25C22 23.8954 21.1046 23 20 23C18.8954 23 18 23.8954 18 25L22 25ZM18 64C18 65.1046 18.8954 66 20 66C21.1046 66 22 65.1046 22 64H18ZM18 25L18 64H22L22 25L18 25Z"
            fill="#6FCF97"
          />
          <path
            d="M25.818 25L14.182 25C13.0078 25 12.4197 23.5803 13.25 22.75L18.5858 17.4142C19.3668 16.6332 20.6332 16.6332 21.4142 17.4142L26.75 22.75C27.5803 23.5803 26.9923 25 25.818 25Z"
            fill="#219653"
            stroke="#219653"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37 22H45"
            stroke="#219653"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M37 34H53"
            stroke="#219653"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M37 46L61 46"
            stroke="#219653"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M37 58L69 58"
            stroke="#219653"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M25.818 24.9999H14.182C13.0078 24.9999 12.4197 23.5802 13.25 22.7499L18.5858 17.4142C19.3668 16.6331 20.6332 16.6331 21.4142 17.4142L26.75 22.7499C27.5803 23.5802 26.9923 24.9999 25.818 24.9999Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M20 24.9999L20 63.9999M37 21.9999H45M37 33.9999H53M37 45.9999H61M37 57.9999H69M14.182 24.9999H25.818C26.9923 24.9999 27.5803 23.5802 26.75 22.7499L21.4142 17.4142C20.6332 16.6331 19.3668 16.6331 18.5858 17.4142L13.25 22.7499C12.4197 23.5802 13.0078 24.9999 14.182 24.9999Z"
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
            d="M22.8285 15.9999C21.2664 14.4378 18.7338 14.4378 17.1717 15.9999L11.8359 21.3357C9.74566 23.426 11.2261 26.9999 14.1821 26.9999H18.0001L18.0001 63.9999C18.0001 65.1045 18.8955 65.9999 20.0001 65.9999C21.1047 65.9999 22.0001 65.1045 22.0001 63.9999L22.0001 26.9999H25.8181C28.7742 26.9999 30.2546 23.426 28.1643 21.3357L22.8285 15.9999ZM24.1717 22.9999L20.0001 18.8284L15.8285 22.9999H24.1717Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.0001 21.9999C35.0001 20.8954 35.8955 19.9999 37.0001 19.9999H45.0001C46.1047 19.9999 47.0001 20.8954 47.0001 21.9999C47.0001 23.1045 46.1047 23.9999 45.0001 23.9999H37.0001C35.8955 23.9999 35.0001 23.1045 35.0001 21.9999Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.0001 31.9999C35.8955 31.9999 35.0001 32.8954 35.0001 33.9999C35.0001 35.1045 35.8955 35.9999 37.0001 35.9999H53.0001C54.1047 35.9999 55.0001 35.1045 55.0001 33.9999C55.0001 32.8954 54.1047 31.9999 53.0001 31.9999H37.0001Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.0001 45.9999C35.0001 44.8954 35.8955 43.9999 37.0001 43.9999H61.0001C62.1047 43.9999 63.0001 44.8954 63.0001 45.9999C63.0001 47.1045 62.1047 47.9999 61.0001 47.9999H37.0001C35.8955 47.9999 35.0001 47.1045 35.0001 45.9999Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.0001 55.9999C35.8955 55.9999 35.0001 56.8954 35.0001 57.9999C35.0001 59.1045 35.8955 59.9999 37.0001 59.9999H69.0001C70.1047 59.9999 71.0001 59.1045 71.0001 57.9999C71.0001 56.8954 70.1047 55.9999 69.0001 55.9999H37.0001Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreSortAmountUp = forwardRef((props, ref) => {
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

CoreSortAmountUp.displayName = 'CoreSortAmountUp'

export default CoreSortAmountUp
