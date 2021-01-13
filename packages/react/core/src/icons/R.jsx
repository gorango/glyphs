
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M24 16L24 64"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56.001 63.9994L45.8669 40.499"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 39.5L24 16.5C24 16.2239 24.2239 16 24.5 16L44 16C50.6274 16 56 21.3726 56 28C56 34.6274 50.6274 40 44 40H24.5C24.2239 40 24 39.7761 24 39.5Z"
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
            d="M27 16C27 14.3431 25.6569 13 24 13C22.3431 13 21 14.3431 21 16H27ZM21 64C21 65.6569 22.3431 67 24 67C25.6569 67 27 65.6569 27 64H21ZM53.2462 65.1882C53.9023 66.7096 55.6675 67.4111 57.1889 66.755C58.7103 66.0989 59.4118 64.3337 58.7558 62.8123L53.2462 65.1882ZM48.6217 39.3119C47.9657 37.7905 46.2004 37.089 44.679 37.7451C43.1576 38.4012 42.4561 40.1664 43.1122 41.6878L48.6217 39.3119ZM27 39.5L27 16.5H21L21 39.5H27ZM24.5 37C25.8807 37 27 38.1193 27 39.5H21C21 41.433 22.567 43 24.5 43V37ZM44 37H24.5V43H44V37ZM53 28C53 32.9706 48.9706 37 44 37V43C52.2843 43 59 36.2843 59 28H53ZM44 19C48.9706 19 53 23.0294 53 28H59C59 19.7157 52.2843 13 44 13V19ZM24.5 19L44 19V13L24.5 13V19ZM27 16.5C27 17.8807 25.8807 19 24.5 19V13C22.567 13 21 14.567 21 16.5H27ZM21 16L21 64H27L27 16H21ZM58.7558 62.8123L48.6217 39.3119L43.1122 41.6878L53.2462 65.1882L58.7558 62.8123Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16H26ZM22 64C22 65.1046 22.8954 66 24 66C25.1046 66 26 65.1046 26 64H22ZM54.1645 64.7922C54.6018 65.8065 55.7787 66.2742 56.7929 65.8368C57.8072 65.3994 58.2749 64.2226 57.8375 63.2083L54.1645 64.7922ZM47.7035 39.7079C47.2661 38.6936 46.0893 38.226 45.075 38.6633C44.0607 39.1007 43.5931 40.2775 44.0304 41.2918L47.7035 39.7079ZM26 39.5L26 16.5H22L22 39.5H26ZM24.5 38C25.3284 38 26 38.6716 26 39.5H22C22 40.8807 23.1193 42 24.5 42V38ZM44 38H24.5V42H44V38ZM54 28C54 33.5228 49.5228 38 44 38V42C51.732 42 58 35.732 58 28H54ZM44 18C49.5228 18 54 22.4772 54 28H58C58 20.268 51.732 14 44 14V18ZM24.5 18L44 18V14L24.5 14V18ZM26 16.5C26 17.3284 25.3284 18 24.5 18V14C23.1193 14 22 15.1193 22 16.5H26ZM22 16L22 64H26L26 16H22ZM57.8375 63.2083L47.7035 39.7079L44.0304 41.2918L54.1645 64.7922L57.8375 63.2083Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M24 16V64M56.001 64.0003L45.867 40.4999M24 39.5V16.5C24 16.2239 24.2239 16 24.5 16H44C50.6274 16 56 21.3726 56 28C56 34.6274 50.6274 40 44 40H24.5C24.2239 40 24 39.7761 24 39.5Z"
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
            d="M21.979 16C21.979 14.8954 22.8744 14 23.979 14C24.0588 14 24.1376 14.0047 24.215 14.0138C24.3017 14.0047 24.3898 14 24.479 14L43.979 14C51.711 14 57.979 20.268 57.979 28C57.979 34.1993 53.9497 39.4574 48.3672 41.2985L57.8518 63.2929C58.289 64.3066 57.8053 65.4452 56.7715 65.8358C55.7378 66.2265 54.5453 65.7214 54.1082 64.7076L44.3143 41.9961C44.2029 41.9987 44.0911 42 43.979 42H25.979L25.979 64C25.979 65.1046 25.0836 66 23.979 66C22.8744 66 21.979 65.1046 21.979 64L21.979 16ZM25.979 18L25.979 38H43.979C49.5019 38 53.979 33.5228 53.979 28C53.979 22.4772 49.5019 18 43.979 18L25.979 18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreR = forwardRef((props, ref) => {
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

CoreR.displayName = 'CoreR'

export default CoreR
