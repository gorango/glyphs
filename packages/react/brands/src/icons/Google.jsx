
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
            d="M71.0004 40.7273C71.0004 38.4739 70.8115 36.3006 70.4556 34.2207H40.6279V46.5449H57.712C56.9783 50.5623 54.76 53.9804 51.3948 56.2694L61.5909 64.2737C67.5606 58.7005 71.0004 50.4649 71.0004 40.7273Z"
            fill="#4285F4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.6295 72.0002C49.165 72.0002 56.3516 69.1647 61.5924 64.2758L51.3966 56.2715C48.5586 58.2047 44.9038 59.3337 40.6295 59.3337C32.3798 59.3337 25.3775 53.7071 22.8736 46.125L12.3701 54.3693C17.5757 64.8225 28.2723 72.0002 40.6295 72.0002Z"
            fill="#34A853"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.8727 46.1242C22.2314 44.1909 21.8798 42.1286 21.8798 39.9998C21.8798 37.871 22.2314 35.8087 22.8727 33.8754L12.3693 25.6311C10.2168 29.951 9 34.8311 9 39.9998C9 45.1686 10.2168 50.0491 12.3693 54.3685L22.8727 46.1242Z"
            fill="#FABB05"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.6295 20.6666C45.2904 20.6666 49.468 22.2886 52.7626 25.4665V25.471L61.79 16.3377C56.3078 11.1733 49.1605 8 40.6295 8C28.2723 8 17.5757 15.1777 12.3701 25.6309L22.8736 33.8752C25.3775 26.2931 32.3798 20.6666 40.6295 20.6666Z"
            fill="#E94235"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M71.0001 40.7273C71.0001 38.4739 70.8112 36.3006 70.4553 34.2207H40.6277V46.5449H57.7117C56.978 50.5623 54.7597 53.9804 51.3946 56.2694L61.5906 64.2737C67.5604 58.7005 71.0001 50.4649 71.0001 40.7273Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.6299 72.0002C49.1654 72.0002 56.352 69.1647 61.5928 64.2758L51.3969 56.2715C48.559 58.2047 44.9041 59.3337 40.6299 59.3337C32.3802 59.3337 25.3779 53.7071 22.8739 46.125L12.3705 54.3693C17.576 64.8225 28.2727 72.0002 40.6299 72.0002Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.8727 46.1242C22.2314 44.1909 21.8798 42.1286 21.8798 39.9998C21.8798 37.871 22.2314 35.8087 22.8727 33.8754L12.3693 25.631C10.2168 29.951 9 34.831 9 39.9998C9 45.1685 10.2168 50.049 12.3693 54.3685L22.8727 46.1242Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.6299 20.6666C45.2908 20.6666 49.4683 22.2886 52.763 25.4665V25.471L61.7904 16.3377C56.3082 11.1733 49.1608 8 40.6299 8C28.2727 8 17.576 15.1777 12.3705 25.6309L22.874 33.8752C25.3779 26.2931 32.3802 20.6666 40.6299 20.6666Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M70.5 40.725C70.5 58.4125 58.3875 71 40.5 71C23.35 71 9.5 57.15 9.5 40C9.5 22.85 23.35 9 40.5 9C48.85 9 55.875 12.0625 61.2875 17.1125L52.85 25.225C41.8125 14.575 21.2875 22.575 21.2875 40C21.2875 50.8125 29.925 59.575 40.5 59.575C52.775 59.575 57.375 50.775 58.1 46.2125H40.5V35.55H70.0125C70.3 37.1375 70.5 38.6625 70.5 40.725Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsGoogle = forwardRef((props, ref) => {
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

BrandsGoogle.displayName = 'BrandsGoogle'

export default BrandsGoogle
