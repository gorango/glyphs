
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M7.27175 7.50019C6.60919 7.49137 5.97675 7.78554 5.5441 8.30381C5.11145 8.82207 4.92287 9.51137 5.02894 10.1868L14.5497 69.8711C14.7945 71.3787 16.0523 72.4871 17.5326 72.4998H63.2075C64.3186 72.5146 65.2726 71.687 65.4503 70.5543L74.9711 10.1984C75.0771 9.52295 74.8885 8.83365 74.4559 8.31539C74.0232 7.79712 73.3908 7.50295 72.7282 7.51177L7.27175 7.50019ZM47.362 50.6364H32.7837L28.8364 29.3404H50.8945L47.362 50.6364Z"
            fill="#2684FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M71.9434 29.3411H50.8946L47.3622 50.637H32.7839L15.5703 71.7361C16.1159 72.2233 16.8115 72.4942 17.5328 72.5004H63.2189C64.3299 72.5152 65.284 71.6876 65.4617 70.555L71.9434 29.3411Z"
            fill="url(#paint0_linear)"
          />
          <defs><linearGradient id="paint0_linear" x1="76.8103" y1="35.3049" x2="51.44" y2="70.1884" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052CC"/><stop offset="1" stop-color="#2684FF"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M7.27175 7.50019C6.60919 7.49137 5.97675 7.78554 5.5441 8.30381C5.11145 8.82207 4.92287 9.51137 5.02894 10.1868L14.5497 69.8711C14.7945 71.3787 16.0523 72.4871 17.5326 72.4998H63.2075C64.3186 72.5146 65.2726 71.687 65.4503 70.5543L74.9711 10.1984C75.0771 9.52295 74.8885 8.83365 74.4559 8.31539C74.0232 7.79712 73.3908 7.50295 72.7282 7.51177L7.27175 7.50019ZM47.362 50.6364H32.7837L28.8364 29.3404H50.8945L47.362 50.6364Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M47.3623 50.637H32.7279L28.8366 29.341M47.3623 50.637L50.8947 29.341M47.3623 50.637L32.7837 50.6364M50.8947 29.341H28.8366M50.8947 29.341H71.9432L65.4615 70.5549C65.2838 71.6876 64.3297 72.5152 63.2186 72.5004L17.5326 72.4998M28.8366 29.341L32.7837 50.6364M17.5326 72.4998C16.0523 72.4871 14.7945 71.3787 14.5497 69.8711L5.02894 10.1868C4.92287 9.51137 5.11145 8.82207 5.5441 8.30381C5.97675 7.78554 6.60919 7.49137 7.27175 7.50019L72.7282 7.51177C73.3908 7.50295 74.0232 7.79712 74.4559 8.31539C74.8885 8.83365 75.0771 9.52295 74.9711 10.1984L65.4503 70.5543C65.2726 71.687 64.3186 72.5146 63.2075 72.4998H17.5326ZM17.5326 72.4998C16.8114 72.4936 16.1157 72.2233 15.5701 71.7361L32.7837 50.6364"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsBitbucket = forwardRef((props, ref) => {
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

BrandsBitbucket.displayName = 'BrandsBitbucket'

export default BrandsBitbucket
