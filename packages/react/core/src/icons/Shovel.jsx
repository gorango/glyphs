
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M27 46C27 45.4477 27.4477 45 28 45H52C52.5523 45 53 45.4477 53 46V54.1672C53 60.9975 49.8275 67.4404 44.4136 71.6049L40.65 74.5C40.2668 74.7948 39.7332 74.7948 39.35 74.5L35.5864 71.6049C30.1725 67.4404 27 60.9975 27 54.1672V46Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 21V49"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47.5 5H32.5C32.2239 5 32 5.22386 32 5.5V12.6863C32 14.808 32.8429 16.8429 34.3431 18.3431L34.8787 18.8787C36.2369 20.2369 38.0791 21 40 21C41.9209 21 43.7631 20.2369 45.1213 18.8787L45.6569 18.3431C47.1571 16.8429 48 14.808 48 12.6863V5.5C48 5.22386 47.7761 5 47.5 5Z"
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
            d="M27 46C27 45.4477 27.4477 45 28 45H52C52.5523 45 53 45.4477 53 46V54.1672C53 60.9975 49.8275 67.4404 44.4136 71.6049L40.65 74.5C40.2668 74.7948 39.7332 74.7948 39.35 74.5L35.5864 71.6049C30.1725 67.4404 27 60.9975 27 54.1672V46Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 21V49"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47.5 5H32.5C32.2239 5 32 5.22386 32 5.5V12.6863C32 14.808 32.8429 16.8429 34.3431 18.3431L34.8787 18.8787C36.2369 20.2369 38.0791 21 40 21C41.9209 21 43.7631 20.2369 45.1213 18.8787L45.6569 18.3431C47.1571 16.8429 48 14.808 48 12.6863V5.5C48 5.22386 47.7761 5 47.5 5Z"
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
            d="M27 46C27 45.4477 27.4477 45 28 45H52C52.5523 45 53 45.4477 53 46V54.1672C53 60.9975 49.8275 67.4404 44.4136 71.6049L40.65 74.5C40.2668 74.7948 39.7332 74.7948 39.35 74.5L35.5864 71.6049C30.1725 67.4404 27 60.9975 27 54.1672V46Z"
            fill="#EB5757"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 21V49"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47.5 5H32.5C32.2239 5 32 5.22386 32 5.5V12.6863C32 14.808 32.8429 16.8429 34.3431 18.3431L34.8787 18.8787C36.2369 20.2369 38.0791 21 40 21C41.9209 21 43.7631 20.2369 45.1213 18.8787L45.6569 18.3431C47.1571 16.8429 48 14.808 48 12.6863V5.5C48 5.22386 47.7761 5 47.5 5Z"
            stroke="#F2994A"
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
            d="M27 46C27 45.4477 27.4477 45 28 45H52C52.5523 45 53 45.4477 53 46V54.1672C53 60.9975 49.8275 67.4404 44.4136 71.6049L40.65 74.5C40.2668 74.7948 39.7332 74.7948 39.35 74.5L35.5864 71.6049C30.1725 67.4404 27 60.9975 27 54.1672V46Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47.5 5H32.5C32.2239 5 32 5.22386 32 5.5V12.6863C32 14.808 32.8429 16.8429 34.3431 18.3431L34.8787 18.8787C36.2369 20.2369 38.0791 21 40 21C41.9209 21 43.7631 20.2369 45.1213 18.8787L45.6569 18.3431C47.1571 16.8429 48 14.808 48 12.6863V5.5C48 5.22386 47.7761 5 47.5 5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 21V49M40 21C41.9209 21 43.7631 20.2369 45.1213 18.8787L45.6569 18.3431C47.1571 16.8429 48 14.808 48 12.6863V5.5C48 5.22386 47.7761 5 47.5 5H32.5C32.2239 5 32 5.22386 32 5.5V12.6863C32 14.808 32.8429 16.8429 34.3431 18.3431L34.8787 18.8787C36.2369 20.2369 38.0791 21 40 21ZM27 46V54.1672C27 60.9975 30.1725 67.4404 35.5864 71.6049L39.35 74.5C39.7332 74.7948 40.2668 74.7948 40.65 74.5L44.4136 71.6049C49.8275 67.4404 53 60.9975 53 54.1672V46C53 45.4477 52.5523 45 52 45H28C27.4477 45 27 45.4477 27 46Z"
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
            d="M32.5 3C31.1193 3 30 4.11929 30 5.5V12.6863C30 15.3385 31.0536 17.882 32.9289 19.7574L33.4645 20.2929C34.7184 21.5468 36.2955 22.4032 38 22.7811V43H28C26.3431 43 25 44.3431 25 46V54.1672C25 61.6184 28.4609 68.647 34.3669 73.1901L38.1306 76.0853C39.2327 76.933 40.7673 76.933 41.8694 76.0853L45.6331 73.1901C51.5391 68.647 55 61.6184 55 54.1672V46C55 44.3431 53.6569 43 52 43H42V22.7811C43.7045 22.4032 45.2816 21.5468 46.5355 20.2929L47.0711 19.7574C48.9464 17.882 50 15.3385 50 12.6863V5.5C50 4.11929 48.8807 3 47.5 3L32.5 3ZM40 19C41.3904 19 42.7239 18.4477 43.7071 17.4645L44.2426 16.9289C45.3679 15.8037 46 14.2776 46 12.6863V7L34 7V12.6863C34 14.2776 34.6321 15.8037 35.7574 16.9289L36.2929 17.4645C37.2761 18.4477 38.6096 19 40 19ZM38 49V47H29V54.1672C29 60.3765 31.8841 66.2337 36.8058 70.0197L40 72.4767L43.1942 70.0196C48.1159 66.2337 51 60.3765 51 54.1672V47H42V49C42 50.1046 41.1046 51 40 51C38.8954 51 38 50.1046 38 49Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreShovel = forwardRef((props, ref) => {
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

CoreShovel.displayName = 'CoreShovel'

export default CoreShovel
