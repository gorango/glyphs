
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <circle
            cx="43.4839"
            cy="40"
            r="32.5161"
            fill="url(#paint0_linear)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M75.9184 42.3226H45.8066V7.56567C62.6808 8.75665 76 22.8229 76 40.0001C76 40.781 75.9725 41.5555 75.9184 42.3226Z"
            fill="url(#paint1_linear)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.8066 7.56557V42.3225H11.0494C10.9953 41.5554 10.9678 40.7809 10.9678 40C10.9678 22.0419 25.5257 7.48389 43.4839 7.48389C44.2649 7.48389 45.0394 7.51142 45.8066 7.56557Z"
            fill="#EB6C4D"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.3676 65.5484C21.3503 63.9579 19.5261 62.1336 17.9355 60.1164V31.242C17.9355 27.0998 21.2934 23.7419 25.4355 23.7419H42.9517C47.0938 23.7419 50.4517 27.0998 50.4517 31.2419V58.0484C50.4517 62.1905 47.0938 65.5484 42.9517 65.5484H23.3676Z"
            fill="black"
            fill-opacity="0.3"
          />
          <rect
            x="4"
            y="19.0967"
            width="41.8064"
            height="41.8064"
            rx="5"
            fill="url(#paint2_linear)"
          />
          <rect
            x="4"
            y="19.0967"
            width="41.8064"
            height="41.8064"
            rx="5"
            fill="url(#paint3_linear)"
          />
          <path
            d="M34.1936 36.4167C34.1936 31.4066 30.8954 28.3872 25.6648 28.3872H17.9355V51.613H22.733V44.5457H25.4649C30.3623 44.5457 34.1936 41.7586 34.1936 36.4167ZM29.3295 36.5162C29.3295 38.7725 27.8969 40.2324 25.5648 40.2324H22.733V32.7338H25.5315C27.8636 32.7338 29.3295 33.9614 29.3295 36.5162Z"
            fill="white"
          />
          <defs><linearGradient id="paint0_linear" x1="10.9678" y1="44.485" x2="76" y2="44.485" gradientUnits="userSpaceOnUse"><stop stop-color="#A73A24"/><stop offset="1" stop-color="#F75936"/></linearGradient><linearGradient id="paint1_linear" x1="77.1615" y1="26.0644" x2="45.8066" y2="26.0644" gradientUnits="userSpaceOnUse"><stop stop-color="#FDB8A3"/><stop offset="1" stop-color="#F1876D"/></linearGradient><linearGradient id="paint2_linear" x1="4" y1="42.8831" x2="45.8065" y2="42.8831" gradientUnits="userSpaceOnUse"><stop stop-color="#A73A24"/><stop offset="1" stop-color="#F75936"/></linearGradient><linearGradient id="paint3_linear" x1="4" y1="42.8831" x2="45.8065" y2="42.8831" gradientUnits="userSpaceOnUse"><stop stop-color="#A73A24"/><stop offset="1" stop-color="#F75936"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M76.0002 40C76.0002 57.9582 61.4422 72.5161 43.4841 72.5161C35.5219 72.5161 28.2281 69.6543 22.5752 64.9031H40.8067C45.7772 64.9031 49.8067 60.8737 49.8067 55.9031V24.0967C49.8067 19.1261 45.7772 15.0967 40.8067 15.0967H22.5754C28.2283 10.3456 35.522 7.48389 43.4841 7.48389C61.4422 7.48389 76.0002 22.0419 76.0002 40Z"
            fill="currentColor"
          />
          <path
            d="M25.5648 40.2324C27.8969 40.2324 29.3295 38.7725 29.3295 36.5162C29.3295 33.9614 27.8636 32.7338 25.5315 32.7338H22.733V40.2324H25.5648Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 19.0967C6.23858 19.0967 4 21.3353 4 24.0967V55.9031C4 58.6646 6.23858 60.9031 9.00001 60.9031H40.8064C43.5679 60.9031 45.8064 58.6645 45.8064 55.9031V24.0967C45.8064 21.3353 43.5679 19.0967 40.8064 19.0967H9ZM25.6648 28.3872C30.8954 28.3872 34.1936 31.4066 34.1936 36.4167C34.1936 41.7586 30.3623 44.5457 25.4649 44.5457H22.733V51.613H17.9355V28.3872H25.6648Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M76.0002 40C76.0002 57.9582 61.4422 72.5161 43.4841 72.5161C35.5219 72.5161 28.2281 69.6543 22.5752 64.9031H40.8067C45.7772 64.9031 49.8067 60.8737 49.8067 55.9031V24.0967C49.8067 19.1261 45.7772 15.0967 40.8067 15.0967H22.5754C28.2283 10.3456 35.522 7.48389 43.4841 7.48389C61.4422 7.48389 76.0002 22.0419 76.0002 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25.5648 40.2324C27.8969 40.2324 29.3295 38.7725 29.3295 36.5162C29.3295 33.9614 27.8636 32.7338 25.5315 32.7338H22.733V40.2324H25.5648Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 19.0967C6.23858 19.0967 4 21.3353 4 24.0967V55.9031C4 58.6646 6.23858 60.9031 9.00001 60.9031H40.8064C43.5679 60.9031 45.8064 58.6645 45.8064 55.9031V24.0967C45.8064 21.3353 43.5679 19.0967 40.8064 19.0967H9ZM25.6648 28.3872C30.8954 28.3872 34.1936 31.4066 34.1936 36.4167C34.1936 41.7586 30.3623 44.5457 25.4649 44.5457H22.733V51.613H17.9355V28.3872H25.6648Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsMsPowerpoint = forwardRef((props, ref) => {
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

BrandsMsPowerpoint.displayName = 'BrandsMsPowerpoint'

export default BrandsMsPowerpoint
