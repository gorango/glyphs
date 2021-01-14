
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M28 64H38.0042C45.7339 64 52 57.7339 52 50.0042C52 42.3233 45.8098 36.0775 38.1292 36.0089L37.6261 36.0044C37.42 36.0026 37.3032 35.7676 37.4262 35.6022L51.4085 16.7955C51.6529 16.4668 51.4183 16 51.0087 16L28 16"
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
            d="M28 61C26.3431 61 25 62.3431 25 64C25 65.6569 26.3431 67 28 67V61ZM51.4085 16.7955L49.001 15.0056L49.001 15.0056L51.4085 16.7955ZM37.4262 35.6022L39.8337 37.3922L39.8337 37.3922L37.4262 35.6022ZM28 13C26.3431 13 25 14.3431 25 16C25 17.6569 26.3431 19 28 19V13ZM38.1292 36.0089L38.1024 39.0088H38.1024L38.1292 36.0089ZM37.6261 36.0044L37.5993 39.0043L37.6261 36.0044ZM38.0042 61H28V67H38.0042V61ZM49.001 15.0056L35.0187 33.8123L39.8337 37.3922L53.8161 18.5855L49.001 15.0056ZM28 19L51.0087 19V13L28 13V19ZM38.156 33.009L37.6529 33.0045L37.5993 39.0043L38.1024 39.0088L38.156 33.009ZM35.0187 33.8123C33.4315 35.947 34.9393 38.9805 37.5993 39.0043L37.6529 33.0045C39.9008 33.0246 41.1749 35.5882 39.8337 37.3922L35.0187 33.8123ZM55 50.0042C55 40.6769 47.4829 33.0923 38.156 33.009L38.1024 39.0088C44.1367 39.0627 49 43.9697 49 50.0042L55 50.0042ZM49 50.0042C49 56.077 44.077 61 38.0042 61V67C47.3907 67 55 59.3907 55 50.0042L49 50.0042ZM53.8161 18.5855C55.532 16.2775 53.8847 13 51.0087 13V19C48.952 19 47.7739 16.6561 49.001 15.0056L53.8161 18.5855Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M28 62C26.8954 62 26 62.8954 26 64C26 65.1046 26.8954 66 28 66V62ZM51.4085 16.7955L49.8035 15.6022L49.8035 15.6022L51.4085 16.7955ZM37.4262 35.6022L39.0312 36.7955L39.0312 36.7955L37.4262 35.6022ZM28 14C26.8954 14 26 14.8954 26 16C26 17.1046 26.8954 18 28 18V14ZM38.1292 36.0089L38.1113 38.0088L38.1292 36.0089ZM37.6261 36.0044L37.6082 38.0043H37.6082L37.6261 36.0044ZM38.0042 62H28V66H38.0042V62ZM49.8035 15.6022L35.8212 34.4089L39.0312 36.7955L53.0136 17.9888L49.8035 15.6022ZM28 18L51.0087 18V14L28 14V18ZM38.147 34.009L37.644 34.0045L37.6082 38.0043L38.1113 38.0088L38.147 34.009ZM35.8212 34.4089C34.7221 35.8872 35.7662 37.9879 37.6082 38.0043L37.644 34.0045C39.0739 34.0173 39.8844 35.648 39.0312 36.7955L35.8212 34.4089ZM54 50.0042C54 41.2257 46.9252 34.0874 38.147 34.009L38.1113 38.0088C44.6944 38.0676 50 43.4209 50 50.0042L54 50.0042ZM50 50.0042C50 56.6293 44.6293 62 38.0042 62V66C46.8384 66 54 58.8384 54 50.0042L50 50.0042ZM53.0136 17.9888C54.239 16.3406 53.0626 14 51.0087 14V18C49.7741 18 49.0669 16.593 49.8035 15.6022L53.0136 17.9888Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M28 64H38.0042C45.7339 64 52 57.7339 52 50.0042C52 42.3233 45.8098 36.0775 38.1292 36.0089L37.6261 36.0044C37.42 36.0026 37.3032 35.7676 37.4262 35.6022L51.4085 16.7955C51.6529 16.4668 51.4183 16 51.0087 16H28"
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
            d="M26 16C26 14.8954 26.8954 14 28 14L51.0087 14C53.0626 14 54.239 16.3406 53.0136 17.9888L40.9077 34.2715C48.3622 35.6384 54 42.1678 54 50.0042C54 58.8384 46.8384 66 38.0042 66H28C26.8954 66 26 65.1046 26 64C26 62.8954 26.8954 62 28 62H38.0042C44.6293 62 50 56.6293 50 50.0042C50 43.4209 44.6944 38.0676 38.1113 38.0088L37.6082 38.0043C35.7662 37.9879 34.7221 35.8872 35.8212 34.4089L48.0208 18L28 18C26.8954 18 26 17.1046 26 16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreThree = forwardRef((props, ref) => {
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

CoreThree.displayName = 'CoreThree'

export default CoreThree