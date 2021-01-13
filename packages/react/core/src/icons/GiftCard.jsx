
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M8 29C8 26.7909 9.79086 25 12 25H68C70.2091 25 72 26.7909 72 29V69C72 71.2091 70.2091 73 68 73H12C9.79086 73 8 71.2091 8 69V29Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 57H23"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 57H37"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 57H51"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58 57H65"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 65H32"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M49.9999 43L39.9999 25L35.1435 16.2584C32.9016 12.2231 27.0982 12.2231 24.8563 16.2584C22.6775 20.1803 25.5134 25 29.9999 25H39.8175"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 43L40 25L44.8564 16.2584C47.0983 12.2231 52.9017 12.2231 55.1436 16.2584C57.3224 20.1803 54.4865 25 50 25H40.2803"
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
            d="M22.234 14.8015C25.6188 8.70875 34.3812 8.70874 37.766 14.8015L40 18.8226L36.5681 25H23.3399C21.001 22.3353 20.2748 18.328 22.234 14.8015ZM34.9015 28L36.5681 25H43.4319L45.0985 28H41.7652L40 31.1774L38.2348 28H34.9015ZM40 31.1774L32.6225 44.4569C31.8178 45.9053 29.9914 46.4271 28.5431 45.6225C27.0947 44.8178 26.5729 42.9914 27.3775 41.5431L34.9015 28H30C27.2603 28 24.9282 26.8096 23.3399 25H12C9.79086 25 8 26.7909 8 29V69C8 71.2091 9.79086 73 12 73H68C70.2091 73 72 71.2091 72 69V29C72 26.7909 70.2091 25 68 25H56.6601C58.999 22.3353 59.7252 18.328 57.766 14.8015C54.3812 8.70875 45.6188 8.70874 42.234 14.8015L40 18.8226L43.4319 25H56.6601C55.0718 26.8096 52.7397 28 50 28H45.0985L52.6225 41.5431C53.4271 42.9914 52.9053 44.8178 51.4569 45.6225C50.0086 46.4271 48.1822 45.9053 47.3775 44.4569L40 31.1774ZM34.9015 22L32.5211 17.7154C31.4223 15.7375 28.5777 15.7375 27.4789 17.7154C26.411 19.6377 27.801 22 30 22H34.9015ZM16 54C14.3431 54 13 55.3431 13 57C13 58.6569 14.3431 60 16 60H23C24.6569 60 26 58.6569 26 57C26 55.3431 24.6569 54 23 54H16ZM27 57C27 55.3431 28.3431 54 30 54H37C38.6569 54 40 55.3431 40 57C40 58.6569 38.6569 60 37 60H30C28.3431 60 27 58.6569 27 57ZM44 54C42.3431 54 41 55.3431 41 57C41 58.6569 42.3431 60 44 60H51C52.6569 60 54 58.6569 54 57C54 55.3431 52.6569 54 51 54H44ZM55 57C55 55.3431 56.3431 54 58 54H65C66.6569 54 68 55.3431 68 57C68 58.6569 66.6569 60 65 60H58C56.3431 60 55 58.6569 55 57ZM16 62C14.3431 62 13 63.3431 13 65C13 66.6569 14.3431 68 16 68H32C33.6569 68 35 66.6569 35 65C35 63.3431 33.6569 62 32 62H16ZM47.4789 17.7154L45.0985 22H50C52.199 22 53.589 19.6377 52.5211 17.7154C51.4223 15.7375 48.5777 15.7375 47.4789 17.7154Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="8"
            y="25"
            width="64"
            height="48"
            rx="4"
            fill="#56CCF2"
          />
          <path
            d="M16 57H23"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 57H37"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 57H51"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58 57H65"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 65H32"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 25L35.1436 16.2584C32.9017 12.2231 27.0983 12.2231 24.8564 16.2584V16.2584C22.6776 20.1803 25.5135 25 30 25H40ZM40 25L50 43"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 25L44.8564 16.2584C47.0983 12.2231 52.9017 12.2231 55.1436 16.2584V16.2584C57.3224 20.1803 54.4865 25 50 25H40ZM40 25L30 43"
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
            d="M8 29C8 26.7909 9.79086 25 12 25H68C70.2091 25 72 26.7909 72 29V69C72 71.2091 70.2091 73 68 73H12C9.79086 73 8 71.2091 8 69V29Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24.8564 16.2584C27.0983 12.2231 32.9017 12.2231 35.1436 16.2584L40 25H30C25.5135 25 22.6776 20.1803 24.8564 16.2584Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M55.1436 16.2584C52.9017 12.2231 47.0983 12.2231 44.8564 16.2584L40 25H50C54.4865 25 57.3224 20.1803 55.1436 16.2584Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16 57H23M30 57H37M44 57H51M58 57H65M16 65H32M40 25L35.1436 16.2584C32.9017 12.2231 27.0983 12.2231 24.8564 16.2584C22.6776 20.1803 25.5135 25 30 25H40ZM40 25L50 43M40 25L44.8564 16.2584C47.0983 12.2231 52.9017 12.2231 55.1436 16.2584C57.3224 20.1803 54.4865 25 50 25H40ZM40 25L30 43M12 73H68C70.2091 73 72 71.2091 72 69V29C72 26.7909 70.2091 25 68 25H12C9.79086 25 8 26.7909 8 29V69C8 71.2091 9.79086 73 12 73Z"
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
            d="M16 55C14.8954 55 14 55.8954 14 57C14 58.1046 14.8954 59 16 59H23C24.1046 59 25 58.1046 25 57C25 55.8954 24.1046 55 23 55H16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 57C28 55.8954 28.8954 55 30 55H37C38.1046 55 39 55.8954 39 57C39 58.1046 38.1046 59 37 59H30C28.8954 59 28 58.1046 28 57Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 55C42.8954 55 42 55.8954 42 57C42 58.1046 42.8954 59 44 59H51C52.1046 59 53 58.1046 53 57C53 55.8954 52.1046 55 51 55H44Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56 57C56 55.8954 56.8954 55 58 55H65C66.1046 55 67 55.8954 67 57C67 58.1046 66.1046 59 65 59H58C56.8954 59 56 58.1046 56 57Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 63C14.8954 63 14 63.8954 14 65C14 66.1046 14.8954 67 16 67H32C33.1046 67 34 66.1046 34 65C34 63.8954 33.1046 63 32 63H16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.8919 15.2871C33.888 9.8802 26.112 9.8802 23.1081 15.2871C21.6728 17.8708 21.8616 20.7453 23.1391 23H12C8.68629 23 6 25.6863 6 29V69C6 72.3137 8.68629 75 12 75H68C71.3137 75 74 72.3137 74 69V29C74 25.6863 71.3137 23 68 23H56.8609C58.1384 20.7453 58.3273 17.8708 56.8919 15.2871C53.888 9.8802 46.112 9.8802 43.1081 15.2871L40 20.8818L36.8919 15.2871ZM36.601 23H30C27.0385 23 25.1665 19.8185 26.6047 17.2297C28.0846 14.566 31.9154 14.566 33.3953 17.2297L36.601 23ZM50 23H43.399L46.6047 17.2297C48.0846 14.566 51.9154 14.566 53.3953 17.2297C54.8335 19.8185 52.9615 23 50 23ZM43.399 27H68C69.1046 27 70 27.8954 70 29V69C70 70.1046 69.1046 71 68 71H12C10.8954 71 10 70.1046 10 69V29C10 27.8954 10.8954 27 12 27H36.601L28.2517 42.0287C27.7153 42.9943 28.0631 44.2119 29.0287 44.7483C29.9943 45.2847 31.2119 44.9369 31.7483 43.9713L40 29.1183L48.2517 43.9713C48.7881 44.9369 50.0057 45.2847 50.9713 44.7483C51.9369 44.2119 52.2847 42.9943 51.7483 42.0287L43.399 27Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreGiftCard = forwardRef((props, ref) => {
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

CoreGiftCard.displayName = 'CoreGiftCard'

export default CoreGiftCard
