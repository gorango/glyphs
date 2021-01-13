
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.1079 44.7877H53.6754C52.7341 44.777 51.9287 45.4673 51.7876 46.4059C50.9678 52.3203 45.9486 56.7195 40.0264 56.7143L43.9342 74.7136C58.0922 72.8484 68.9894 61.1871 69.9957 46.8247C70.0324 46.2971 69.8499 45.7779 69.4918 45.3916C69.1337 45.0052 68.6323 44.7864 68.1079 44.7877Z"
            fill="#2684FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.1319 44.3317L63.898 26.3324C64.3044 25.971 64.5372 25.451 64.5372 24.9046C64.5372 24.3582 64.3044 23.8382 63.898 23.4768L43.1319 5.44896C42.5715 4.97205 41.788 4.86544 41.1224 5.17555C40.4568 5.48566 40.0294 6.15637 40.0264 6.89576V42.8849C40.0294 43.6243 40.4568 44.295 41.1224 44.6051C41.788 44.9152 42.5715 44.8086 43.1319 44.3317Z"
            fill="#2684FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.2842 48.7187C12.2703 63.7551 24.9841 74.9888 40.027 74.999V56.7142C33.4904 56.7142 28.187 51.3791 28.1714 44.7876L10.2842 48.7187Z"
            fill="url(#paint0_linearkEAo)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 44.5036V44.7892H28.1704C28.186 38.1977 33.4894 32.8626 40.026 32.8626L36.1276 14.8633C21.3168 16.8094 10.1802 29.4433 10 44.5036Z"
            fill="url(#paint1_linearkEAo)"
          />
          <defs><linearGradient id="paint0_linearkEAo" x1="25.1603" y1="15.0902" x2="25.1603" y2="56.3334" gradientUnits="userSpaceOnUse"><stop stop-color="#0052CC"/><stop offset="1" stop-color="#2684FF"/></linearGradient><linearGradient id="paint1_linearkEAo" x1="25.0177" y1="15.0917" x2="25.0177" y2="56.335" gradientUnits="userSpaceOnUse"><stop stop-color="#0052CC"/><stop offset="1" stop-color="#2684FF"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.1078 44.7877H53.6753C52.7339 44.777 51.9286 45.4673 51.7875 46.4059C50.9677 52.3203 45.9485 56.7195 40.0262 56.7143L43.9341 74.7136C58.0921 72.8484 68.9893 61.1871 69.9956 46.8247C70.0323 46.2971 69.8498 45.7779 69.4917 45.3916C69.1336 45.0052 68.6322 44.7864 68.1078 44.7877Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.1317 44.3317L63.8979 26.3324C64.3043 25.971 64.5371 25.451 64.5371 24.9046C64.5371 24.3582 64.3043 23.8382 63.8979 23.4768L43.1317 5.44896C42.5714 4.97205 41.7879 4.86544 41.1223 5.17555C40.4567 5.48566 40.0293 6.15637 40.0262 6.89576V42.8849C40.0293 43.6243 40.4567 44.295 41.1223 44.6051C41.7879 44.9152 42.5714 44.8086 43.1317 44.3317Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.2844 48.7187C12.2706 63.7551 24.9844 74.9888 40.0273 74.999V56.7142C33.4906 56.7142 28.1873 51.3791 28.1717 44.7876L10.2844 48.7187Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 44.5036V44.7892H28.1704C28.186 38.1977 33.4894 32.8626 40.026 32.8626L36.1276 14.8633C21.3168 16.8094 10.1802 29.4433 10 44.5036Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.1078 44.7877H53.6753C52.7339 44.777 51.9286 45.4673 51.7875 46.4059C50.9677 52.3203 45.9485 56.7195 40.0262 56.7143L43.9341 74.7136C58.0921 72.8484 68.9893 61.1871 69.9956 46.8247C70.0323 46.2971 69.8498 45.7779 69.4917 45.3916C69.1336 45.0052 68.6322 44.7864 68.1078 44.7877Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.1317 44.3317L63.8979 26.3324C64.3043 25.971 64.5371 25.451 64.5371 24.9046C64.5371 24.3582 64.3043 23.8382 63.8979 23.4768L43.1317 5.44896C42.5714 4.97205 41.7879 4.86544 41.1223 5.17555C40.4567 5.48566 40.0293 6.15637 40.0262 6.89576V42.8849C40.0293 43.6243 40.4567 44.295 41.1223 44.6051C41.7879 44.9152 42.5714 44.8086 43.1317 44.3317Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.2844 48.7187C12.2706 63.7551 24.9844 74.9888 40.0273 74.999V56.7142C33.4906 56.7142 28.1873 51.3791 28.1717 44.7876L10.2844 48.7187Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 44.5036V44.7892H28.1704C28.186 38.1977 33.4894 32.8626 40.026 32.8626L36.1276 14.8633C21.3168 16.8094 10.1802 29.4433 10 44.5036Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsBamboo = forwardRef((props, ref) => {
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

BrandsBamboo.displayName = 'BrandsBamboo'

export default BrandsBamboo
