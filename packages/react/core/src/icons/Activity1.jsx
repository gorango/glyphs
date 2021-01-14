
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M4.5 38.0004H20.77C21.2049 38.0004 21.5899 38.2815 21.7225 38.6956L28.4082 59.5884C28.7166 60.5524 30.0978 60.5006 30.3332 59.5162L39.6071 20.7342C39.8468 19.732 41.2624 19.7035 41.5422 20.6953L50.6887 53.1241C50.9493 54.0479 52.2353 54.1097 52.5832 53.2151L58.2521 38.638C58.4015 38.2536 58.7717 38.0004 59.1841 38.0004H75.5"
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
            d="M5 38H21.27C21.7049 38 22.0899 38.281 22.2225 38.6952L28.9082 59.588C29.2166 60.552 30.5978 60.5002 30.8332 59.5158L40.1071 20.7338C40.3468 19.7316 41.7624 19.7031 42.0422 20.6949L51.1887 53.1237C51.4493 54.0475 52.7353 54.1092 53.0832 53.2147L58.7521 38.6376C58.9015 38.2532 59.2717 38 59.6841 38L76 38"
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
            d="M5 38H21.27C21.7049 38 22.0899 38.281 22.2225 38.6952L28.9082 59.588C29.2166 60.552 30.5978 60.5002 30.8332 59.5158L40.1071 20.7338C40.3468 19.7316 41.7624 19.7031 42.0422 20.6949L51.1887 53.1237C51.4493 54.0475 52.7353 54.1092 53.0832 53.2147L58.7521 38.6376C58.9015 38.2532 59.2717 38 59.6841 38L76 38"
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
            d="M4.5 38.0004H20.77C21.2049 38.0004 21.5899 38.2815 21.7225 38.6956L28.4082 59.5884C28.7166 60.5524 30.0978 60.5006 30.3332 59.5162L39.6071 20.7342C39.8468 19.732 41.2624 19.7035 41.5422 20.6953L50.6887 53.1241C50.9493 54.0479 52.2353 54.1097 52.5832 53.2151L58.2521 38.638C58.4015 38.2536 58.7717 38.0004 59.1841 38.0004H75.5"
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
            d="M41.1594 24.9332L32.7783 59.9814C32.0722 62.9345 27.9287 63.0899 27.0033 60.198L20.5401 40.0004H5C3.89543 40.0004 3 39.105 3 38.0004C3 36.8959 3.89543 36.0004 5 36.0004H21.27C22.5747 36.0004 23.7297 36.8436 24.1273 38.0861L29.7212 55.5669L38.162 20.2691C38.881 17.2624 43.1278 17.177 43.9671 20.1524L52.3024 49.7049L56.8881 37.9131C57.3365 36.76 58.4468 36.0004 59.6841 36.0004H76C77.1046 36.0004 78 36.8959 78 38.0004C78 39.105 77.1046 40.0004 76 40.0004H60.3681L54.9472 53.94C53.9035 56.6238 50.0455 56.4384 49.2638 53.667L41.1594 24.9332Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreActivity1 = forwardRef((props, ref) => {
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

CoreActivity1.displayName = 'CoreActivity1'

export default CoreActivity1
