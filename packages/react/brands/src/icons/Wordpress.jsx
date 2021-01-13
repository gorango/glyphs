
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="#028CB0"
          />
          <path
            d="M16.1385 40C16.1385 49.4558 21.6385 57.6 29.5923 61.4712L18.2115 30.2904C16.8449 33.345 16.1385 36.6536 16.1385 40ZM40 63.8615C42.7712 63.8615 45.4365 63.375 47.9327 62.5077L47.7635 62.1904L40.4231 42.0942L33.2731 62.8885C35.3885 63.5231 37.6519 63.8615 40 63.8615ZM43.2788 28.8096L51.9096 54.4692L54.3 46.5154C55.3154 43.2154 56.0981 40.8462 56.0981 38.7942C56.0981 35.8327 55.0404 33.8019 54.1519 32.2365C52.925 30.2481 51.8038 28.5769 51.8038 26.6308C51.8038 24.4308 53.4538 22.4 55.8231 22.4H56.1192C51.7225 18.3637 45.9685 16.1285 40 16.1385C36.0481 16.1377 32.1579 17.1194 28.6796 18.9952C25.2012 20.871 22.2437 23.5821 20.0731 26.8846L21.5962 26.9269C24.0923 26.9269 27.9423 26.6096 27.9423 26.6096C29.2538 26.5462 29.4019 28.4288 28.1115 28.5769C28.1115 28.5769 26.8212 28.7462 25.3615 28.8096L34.0769 54.6596L39.3019 39.0058L35.5788 28.8096C34.7449 28.7636 33.9125 28.6931 33.0827 28.5981C31.7923 28.5135 31.9404 26.5462 33.2308 26.6096C33.2308 26.6096 37.1654 26.9269 39.5135 26.9269C42.0096 26.9269 45.8596 26.6096 45.8596 26.6096C47.15 26.5462 47.3192 28.4288 46.0288 28.5769C46.0288 28.5769 44.7385 28.725 43.2788 28.8096ZM51.9942 60.625C55.604 58.5261 58.5998 55.5166 60.6823 51.8973C62.7648 48.278 63.861 44.1756 63.8615 40C63.8615 35.8538 62.8038 31.9615 60.9423 28.5558C61.3203 32.3027 60.7531 36.0846 59.2923 39.5558L51.9942 60.625ZM40 67.5C32.7065 67.5 25.7118 64.6027 20.5546 59.4454C15.3973 54.2882 12.5 47.2935 12.5 40C12.5 32.7065 15.3973 25.7118 20.5546 20.5546C25.7118 15.3973 32.7065 12.5 40 12.5C47.2935 12.5 54.2882 15.3973 59.4454 20.5546C64.6027 25.7118 67.5 32.7065 67.5 40C67.5 47.2935 64.6027 54.2882 59.4454 59.4454C54.2882 64.6027 47.2935 67.5 40 67.5Z"
            fill="white"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M29.5923 61.4712C21.6385 57.6 16.1385 49.4558 16.1385 40C16.1385 36.6536 16.8449 33.345 18.2115 30.2904L29.5923 61.4712Z"
            fill="currentColor"
          />
          <path
            d="M47.9327 62.5077C45.4365 63.375 42.7712 63.8615 40 63.8615C37.6519 63.8615 35.3885 63.5231 33.2731 62.8885L40.4231 42.0942L47.7635 62.1904L47.9327 62.5077Z"
            fill="currentColor"
          />
          <path
            d="M51.9096 54.4692L43.2788 28.8096C44.7385 28.725 46.0288 28.5769 46.0288 28.5769C47.3192 28.4288 47.15 26.5462 45.8596 26.6096C45.8596 26.6096 42.0096 26.9269 39.5135 26.9269C37.1654 26.9269 33.2308 26.6096 33.2308 26.6096C31.9404 26.5462 31.7923 28.5135 33.0827 28.5981C33.9125 28.6931 34.7449 28.7636 35.5788 28.8096L39.3019 39.0058L34.0769 54.6596L25.3615 28.8096C26.8212 28.7462 28.1115 28.5769 28.1115 28.5769C29.4019 28.4288 29.2538 26.5462 27.9423 26.6096C27.9423 26.6096 24.0923 26.9269 21.5962 26.9269L20.0731 26.8846C22.2437 23.5821 25.2012 20.871 28.6796 18.9952C32.1579 17.1194 36.0481 16.1377 40 16.1385C45.9685 16.1285 51.7225 18.3637 56.1192 22.4H55.8231C53.4538 22.4 51.8038 24.4308 51.8038 26.6308C51.8038 28.4489 52.7823 30.027 53.9114 31.848C53.9909 31.9762 54.0712 32.1057 54.1519 32.2365C55.0404 33.8019 56.0981 35.8327 56.0981 38.7942C56.0981 40.694 55.4272 42.8657 54.5219 45.7963C54.4493 46.031 54.3753 46.2706 54.3 46.5154L51.9096 54.4692Z"
            fill="currentColor"
          />
          <path
            d="M60.6823 51.8973C58.5998 55.5166 55.604 58.5261 51.9942 60.625L59.2923 39.5558C60.7531 36.0846 61.3203 32.3027 60.9423 28.5558C62.8038 31.9615 63.8615 35.8538 63.8615 40C63.861 44.1756 62.7648 48.278 60.6823 51.8973Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75ZM20.5546 59.4454C25.7118 64.6027 32.7065 67.5 40 67.5C47.2935 67.5 54.2882 64.6027 59.4454 59.4454C64.6027 54.2882 67.5 47.2935 67.5 40C67.5 32.7065 64.6027 25.7118 59.4454 20.5546C54.2882 15.3973 47.2935 12.5 40 12.5C32.7065 12.5 25.7118 15.3973 20.5546 20.5546C15.3973 25.7118 12.5 32.7065 12.5 40C12.5 47.2935 15.3973 54.2882 20.5546 59.4454Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16.1385 40C16.1385 49.4558 21.6385 57.6 29.5923 61.4712L18.2115 30.2904C16.8449 33.345 16.1385 36.6536 16.1385 40ZM40 63.8615C42.7712 63.8615 45.4365 63.375 47.9327 62.5077L47.7635 62.1904L40.4231 42.0942L33.2731 62.8885C35.3885 63.5231 37.6519 63.8615 40 63.8615ZM43.2788 28.8096L51.9096 54.4692L54.3 46.5154C55.3154 43.2154 56.0981 40.8462 56.0981 38.7942C56.0981 35.8327 55.0404 33.8019 54.1519 32.2365C52.925 30.2481 51.8038 28.5769 51.8038 26.6308C51.8038 24.4308 53.4538 22.4 55.8231 22.4H56.1192C51.7225 18.3637 45.9685 16.1285 40 16.1385C36.0481 16.1377 32.1579 17.1194 28.6796 18.9952C25.2012 20.871 22.2437 23.5821 20.0731 26.8846L21.5962 26.9269C24.0923 26.9269 27.9423 26.6096 27.9423 26.6096C29.2538 26.5462 29.4019 28.4288 28.1115 28.5769C28.1115 28.5769 26.8212 28.7462 25.3615 28.8096L34.0769 54.6596L39.3019 39.0058L35.5788 28.8096C34.7449 28.7636 33.9125 28.6931 33.0827 28.5981C31.7923 28.5135 31.9404 26.5462 33.2308 26.6096C33.2308 26.6096 37.1654 26.9269 39.5135 26.9269C42.0096 26.9269 45.8596 26.6096 45.8596 26.6096C47.15 26.5462 47.3192 28.4288 46.0288 28.5769C46.0288 28.5769 44.7385 28.725 43.2788 28.8096ZM51.9942 60.625C55.604 58.5261 58.5998 55.5166 60.6823 51.8973C62.7648 48.278 63.861 44.1756 63.8615 40C63.8615 35.8538 62.8038 31.9615 60.9423 28.5558C61.3203 32.3027 60.7531 36.0846 59.2923 39.5558L51.9942 60.625ZM40 67.5C32.7065 67.5 25.7118 64.6027 20.5546 59.4454C15.3973 54.2882 12.5 47.2935 12.5 40C12.5 32.7065 15.3973 25.7118 20.5546 20.5546C25.7118 15.3973 32.7065 12.5 40 12.5C47.2935 12.5 54.2882 15.3973 59.4454 20.5546C64.6027 25.7118 67.5 32.7065 67.5 40C67.5 47.2935 64.6027 54.2882 59.4454 59.4454C54.2882 64.6027 47.2935 67.5 40 67.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsWordpress = forwardRef((props, ref) => {
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

BrandsWordpress.displayName = 'BrandsWordpress'

export default BrandsWordpress
