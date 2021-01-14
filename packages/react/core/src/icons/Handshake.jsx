
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M4 27H16.3431C17.404 27 18.4214 26.5786 19.1716 25.8284L22.6569 22.3431C24.1571 20.8429 26.192 20 28.3137 20H32.6863C34.6307 20 36.5021 20.7078 37.956 21.9808C37.861 22.0639 37.7678 22.1495 37.6765 22.2374L30.8703 28.7916C28.4701 31.1029 28.4339 34.9339 30.7901 37.2901C33.1152 39.6152 36.8848 39.6152 39.2099 37.2901L41.5 35L57.4643 47.4167C58.5978 48.2983 58.8241 49.9217 57.9749 51.0796L56.3655 53.2744C54.8785 55.3021 52.5145 56.5 50 56.5L48.8866 57.6134C47.6786 58.8214 46.0403 59.5 44.332 59.5C42.8252 59.5 41.3661 58.9717 40.2085 58.0071L39 57L38.2981 57.7019C36.8267 59.1733 34.8309 60 32.75 60C30.6691 60 28.6733 59.1733 27.2019 57.7019L19.6716 50.1716C18.9214 49.4214 17.904 49 16.8431 49H4V27Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46.0001 30.5L41.5001 35M41.5001 35L39.21 37.2901C36.8849 39.6152 33.1153 39.6152 30.7902 37.2901C28.434 34.9339 28.4702 31.1029 30.8704 28.7916L37.6766 22.2374C39.1673 20.802 41.1563 20 43.2257 20H51.6864C53.8081 20 55.843 20.8429 57.3432 22.3431L60.8285 25.8284C61.5787 26.5786 62.5961 27 63.657 27H76.0001V49H59.5001L41.5001 35Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 27.0586V49.0586"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 27.0586V49.0586"
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
            d="M42.3562 29.9011L39.3787 32.8787L37.0886 35.1688C35.9351 36.3223 34.0649 36.3223 32.9114 35.1688C31.7425 33.9999 31.7604 32.0992 32.9512 30.9526L39.7574 24.3984C39.8668 24.2931 39.9804 24.1933 40.0979 24.0991C41.614 25.6598 42.4175 27.7577 42.3562 29.9011ZM57.7259 51.4192L56.3655 53.2744C54.8785 55.3021 52.5145 56.5 50 56.5L48.8866 57.6134C47.6786 58.8214 46.0403 59.5 44.332 59.5C42.8252 59.5 41.3661 58.9717 40.2085 58.0071L39 57L38.2981 57.7019C36.8267 59.1733 34.8309 60 32.75 60C30.6691 60 28.6733 59.1733 27.2019 57.7019L19.6716 50.1716C18.9214 49.4214 17.904 49 16.8431 49H4V27H16.3431C17.404 27 18.4214 26.5786 19.1716 25.8284L22.6569 22.3431C24.1571 20.8429 26.192 20 28.3137 20H32.6863C33.563 20 34.4248 20.1439 35.2403 20.4186L28.7893 26.6306C25.1797 30.1065 25.1254 35.868 28.6688 39.4114C32.1654 42.9081 37.8346 42.9081 41.3312 39.4114L41.7487 38.994L57.6582 51.3681C57.6805 51.3854 57.7031 51.4025 57.7259 51.4192Z"
            fill="currentColor"
          />
          <path
            d="M63.6569 27H76V49H60H59.5L41.5 35L39.2099 37.2901C36.8848 39.6152 33.1152 39.6152 30.7901 37.2901C28.4339 34.9339 28.4701 31.1029 30.8703 28.7916L37.6765 22.2374C39.1672 20.802 41.1562 20 43.2256 20H51.6863C53.808 20 55.8429 20.8429 57.3431 22.3431L60.8284 25.8284C61.5786 26.5786 62.596 27 63.6569 27Z"
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
            d="M4 27H16.3431C17.404 27 18.4214 26.5786 19.1716 25.8284L22.6569 22.3431C24.1571 20.8429 26.192 20 28.3137 20H32.6863C34.6307 20 36.5021 20.7078 37.956 21.9808C37.861 22.0639 37.7678 22.1495 37.6765 22.2374L30.8703 28.7916C28.4701 31.1029 28.4339 34.9339 30.7901 37.2901C33.1152 39.6152 36.8848 39.6152 39.2099 37.2901L41.5 35L57.4643 47.4167C58.5978 48.2983 58.8241 49.9217 57.9749 51.0796L56.3655 53.2744C54.8785 55.3021 52.5145 56.5 50 56.5L48.8866 57.6134C47.6786 58.8214 46.0403 59.5 44.332 59.5C42.8252 59.5 41.3661 58.9717 40.2085 58.0071L39 57L38.2981 57.7019C36.8267 59.1733 34.8309 60 32.75 60C30.6691 60 28.6733 59.1733 27.2019 57.7019L19.6716 50.1716C18.9214 49.4214 17.904 49 16.8431 49H4V27Z"
            fill="#F2994A"
          />
          <path
            d="M63.6569 27H76V49H60H59.5L41.5 35L39.2099 37.2901C36.8848 39.6152 33.1152 39.6152 30.7901 37.2901C28.4339 34.9339 28.4701 31.1029 30.8703 28.7916L37.6765 22.2374C39.1672 20.802 41.1562 20 43.2256 20H51.6863C53.808 20 55.8429 20.8429 57.3431 22.3431L60.8284 25.8284C61.5786 26.5786 62.596 27 63.6569 27Z"
            fill="#F2C94C"
          />
          <rect
            x="4"
            y="27.0586"
            width="8"
            height="22"
            fill="#F2F2F2"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="68"
            y="27.0586"
            width="8"
            height="22"
            fill="#F2F2F2"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="6"
            y="43"
            width="4"
            height="4"
            rx="2"
            fill="#4F4F4F"
          />
          <rect
            x="70"
            y="43"
            width="4"
            height="4"
            rx="2"
            fill="#4F4F4F"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M4 27H16.3431C17.404 27 18.4214 26.5786 19.1716 25.8284L22.6569 22.3431C24.1571 20.8429 26.192 20 28.3137 20H32.6863C34.6307 20 36.5021 20.7078 37.956 21.9808C37.861 22.0639 37.7678 22.1495 37.6765 22.2374L30.8703 28.7916C28.4701 31.1029 28.4339 34.9339 30.7901 37.2901C33.1152 39.6152 36.8848 39.6152 39.2099 37.2901L41.5 35L57.4643 47.4167C58.5978 48.2983 58.8241 49.9217 57.9749 51.0796L56.3655 53.2744C54.8785 55.3021 52.5145 56.5 50 56.5L48.8866 57.6134C47.6786 58.8214 46.0403 59.5 44.332 59.5C42.8252 59.5 41.3661 58.9717 40.2085 58.0071L39 57L38.2981 57.7019C36.8267 59.1733 34.8309 60 32.75 60C30.6691 60 28.6733 59.1733 27.2019 57.7019L19.6716 50.1716C18.9214 49.4214 17.904 49 16.8431 49H4V27Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M63.6569 27H76V49H59.5L41.5 35L39.2099 37.2901C36.8848 39.6152 33.1152 39.6152 30.7901 37.2901C28.4339 34.9339 28.4701 31.1029 30.8703 28.7916L37.6765 22.2374C39.1672 20.802 41.1562 20 43.2256 20H51.6863C53.808 20 55.8429 20.8429 57.3431 22.3431L60.8284 25.8284C61.5786 26.5786 62.596 27 63.6569 27Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M4 27.0586H12V49.0586H4V27.0586Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M68 27.0586H76V49.0586H68V27.0586Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M37.6765 22.2374C37.7678 22.1495 37.861 22.0639 37.956 21.9808C36.5021 20.7078 34.6307 20 32.6863 20H28.3137C26.192 20 24.1571 20.8429 22.6569 22.3431L19.1716 25.8284C18.4214 26.5786 17.404 27 16.3431 27H4V49H16.8431C17.904 49 18.9214 49.4214 19.6716 50.1716L27.2019 57.7019C28.6733 59.1733 30.6691 60 32.75 60C34.8309 60 36.8267 59.1733 38.2981 57.7019L39 57L40.2085 58.0071C41.3661 58.9717 42.8252 59.5 44.332 59.5C46.0403 59.5 47.6786 58.8214 48.8866 57.6134L50 56.5C52.5145 56.5 54.8785 55.3021 56.3655 53.2744L57.9749 51.0796C58.8241 49.9217 58.5978 48.2983 57.4643 47.4167L41.5 35M37.6765 22.2374L30.8703 28.7916C28.4701 31.1029 28.4339 34.9339 30.7901 37.2901C33.1152 39.6152 36.8848 39.6152 39.2099 37.2901L41.5 35M37.6765 22.2374C39.1672 20.802 41.1562 20 43.2256 20H51.6863C53.808 20 55.8429 20.8429 57.3431 22.3431L60.8284 25.8284C61.5786 26.5786 62.596 27 63.6569 27H76V49H59.5L41.5 35M41.5 35L46 30.5M4 27.0586H12V49.0586H4V27.0586ZM68 27.0586H76V49.0586H68V27.0586Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
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
            d="M28.3137 18C25.6615 18 23.118 19.0536 21.2426 20.9289L17.7574 24.4142C17.3823 24.7893 16.8736 25 16.3431 25H4C2.89543 25 2 25.8954 2 27V49.0586C2 50.1632 2.89543 51.0586 4 51.0586H12C12.1664 51.0586 12.328 51.0383 12.4825 51H16.8431C17.3736 51 17.8823 51.2107 18.2574 51.5858L25.7877 59.1161C27.6342 60.9626 30.1386 62 32.75 62C35.0819 62 37.3284 61.1728 39.0974 59.681C40.5862 60.8578 42.4301 61.5 44.332 61.5C46.5707 61.5 48.7178 60.6107 50.3008 59.0277L50.8664 58.4621C53.6887 58.2142 56.2864 56.7642 57.9783 54.4571L59.5878 52.2624C59.8775 51.8673 60.0958 51.4413 60.245 51H67.5175C67.672 51.0383 67.8336 51.0586 68 51.0586H76C77.1046 51.0586 78 50.1632 78 49.0586V27C78 25.8954 77.1046 25 76 25H63.6569C63.1264 25 62.6177 24.7893 62.2426 24.4142L58.7574 20.9289C56.882 19.0536 54.3385 18 51.6863 18H43.2256C41.3498 18 39.5269 18.5271 37.956 19.5011C36.3861 18.5278 34.5634 18 32.6863 18H28.3137ZM66 29H63.6569C62.0656 29 60.5394 28.3679 59.4142 27.2426L55.9289 23.7574C54.8037 22.6321 53.2776 22 51.6863 22H43.2256C41.7686 22 40.3648 22.53 39.2735 23.4855C39.2022 23.5479 39.1323 23.6121 39.0638 23.6781L32.2575 30.2322C30.6886 31.7431 30.6408 34.232 32.1321 35.8018C32.1558 35.8267 32.1799 35.8514 32.2043 35.8759C33.7242 37.3958 36.1737 37.4195 37.7226 35.9471C37.7472 35.9237 37.7716 35.9 37.7957 35.8759L44.5858 29.0858C45.3668 28.3047 46.6332 28.3047 47.4142 29.0858C48.1953 29.8668 48.1953 31.1332 47.4142 31.9142L44.5162 34.8122L60.1862 47H66V29ZM74 47V29.0586H70V47H74ZM6 47V29.0586H10V47H6ZM14 29V47H16.8431C18.4344 47 19.9606 47.6321 21.0858 48.7574L28.6161 56.2877C29.7125 57.3841 31.1995 58 32.75 58C34.3005 58 35.7875 57.3841 36.8839 56.2877L37.5858 55.5858C38.3172 54.8544 39.4857 54.8013 40.2804 55.4636L41.4889 56.4706C42.287 57.1358 43.2931 57.5 44.332 57.5C45.5099 57.5 46.6395 57.0321 47.4723 56.1992L48.5858 55.0858C48.9609 54.7107 49.4696 54.5 50 54.5C51.8774 54.5 53.6424 53.6056 54.7526 52.0917L56.3621 49.8969C56.5711 49.6119 56.5154 49.2124 56.2365 48.9954L41.6658 37.6627L40.6241 38.7043C37.518 41.8104 32.482 41.8104 29.3759 38.7043C26.2282 35.5567 26.2765 30.4387 29.483 27.351L34.6842 22.3424C34.0484 22.1179 33.3734 22 32.6863 22H28.3137C26.7224 22 25.1963 22.6321 24.0711 23.7574L20.5858 27.2426C19.4606 28.3679 17.9344 29 16.3431 29H14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreHandshake = forwardRef((props, ref) => {
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

CoreHandshake.displayName = 'CoreHandshake'

export default CoreHandshake