
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M40.0071 9.77295C21.1647 9.77295 6.41672 34.5944 5 55.5576C10.9077 66.1786 25.1741 70.2275 40.0071 70.2275C54.8401 70.2275 69.0923 66.2373 75 55.5576C73.5975 34.5944 58.8353 9.77295 40.0071 9.77295Z"
            fill="#B3DCFF"
          />
          <path
            d="M61.8103 35.8406C57.6735 30.3101 52.4033 24.4421 49.3432 24.4421C46.2831 24.4421 37.7403 40.1096 33.7593 40.1096C29.7784 40.1096 27.795 32.98 22.9781 33.0093C16.4046 33.0093 9.97266 53.0337 9.97266 53.0337C9.97266 53.0337 12.6361 65.2537 40.4887 65.2537C68.3414 65.2537 70.5656 53.2391 70.5656 53.2391C68.5437 47.0012 65.5894 41.1304 61.8103 35.8406Z"
            fill="#5ECC62"
          />
          <path
            d="M25.0742 51.3618C25.0742 50.6393 25.2811 49.9331 25.6687 49.3324C26.0564 48.7317 26.6073 48.2635 27.2519 47.987C27.8965 47.7106 28.6058 47.6382 29.2901 47.7792C29.9743 47.9201 30.6029 48.268 31.0963 48.7789C31.5896 49.2897 31.9256 49.9406 32.0617 50.6492C32.1978 51.3577 32.1279 52.0922 31.8609 52.7596C31.5939 53.4271 31.1418 53.9976 30.5617 54.399C29.9816 54.8004 29.2995 55.0146 28.6018 55.0146C27.6663 55.0146 26.769 54.6297 26.1074 53.9447C25.4459 53.2597 25.0742 52.3306 25.0742 51.3618ZM47.8692 51.3618C47.8692 52.0842 48.0761 52.7905 48.4637 53.3912C48.8513 53.9919 49.4023 54.4601 50.0469 54.7365C50.6915 55.013 51.4007 55.0853 52.085 54.9444C52.7693 54.8035 53.3979 54.4556 53.8912 53.9447C54.3846 53.4339 54.7206 52.783 54.8567 52.0744C54.9928 51.3658 54.9229 50.6314 54.6559 49.9639C54.3889 49.2965 53.9368 48.726 53.3567 48.3246C52.7766 47.9232 52.0945 47.709 51.3968 47.709C50.9336 47.709 50.4749 47.8035 50.0469 47.987C49.6189 48.1706 49.23 48.4397 48.9024 48.7789C48.5748 49.1181 48.315 49.5207 48.1377 49.9639C47.9604 50.4071 47.8692 50.8821 47.8692 51.3618ZM47.2317 56.7163C47.3365 56.4554 47.343 56.1632 47.25 55.8976C47.157 55.6319 46.9712 55.4119 46.7293 55.2812C46.4874 55.1504 46.2069 55.1183 45.9432 55.1911C45.6795 55.264 45.4518 55.4365 45.3049 55.6747C44.7473 56.5724 43.9695 57.3008 43.0511 57.7853C42.1326 58.2699 41.1064 58.4933 40.0773 58.4327C39.0194 58.4581 37.9717 58.2146 37.0257 57.7236C36.0798 57.2325 35.2645 56.5089 34.6512 55.616C34.49 55.3866 34.2512 55.2284 33.9824 55.173C33.7137 55.1175 33.4346 55.1688 33.2007 55.3167C32.9668 55.4646 32.7952 55.6983 32.7201 55.9712C32.645 56.2441 32.6719 56.5363 32.7953 56.7896C33.6038 58.0108 34.6922 59.0052 35.9631 59.6837C37.234 60.3622 38.6476 60.7035 40.0773 60.6772C41.5034 60.7431 42.9204 60.4101 44.1793 59.7132C45.4382 59.0162 46.4926 57.981 47.2317 56.7163Z"
            fill="black"
          />
          <path
            d="M34.2555 46.8284C29.9345 46.8284 27.7103 42.4274 26.5061 39.6841C25.4293 37.2343 25.231 33.3468 22.1709 33.2441C22.4449 33.1252 22.7381 33.0605 23.0351 33.0534C27.8519 33.0534 29.892 40.1536 33.8163 40.1536C37.7406 40.1536 46.2976 24.4421 49.3435 24.4421C50.0212 24.4794 50.681 24.6804 51.2703 25.0289C50.9679 24.9699 50.6563 24.9857 50.3609 25.0749C50.0655 25.1641 49.7946 25.3243 49.5702 25.5424C48.5927 26.5839 39.6107 46.8284 34.2555 46.8284Z"
            fill="#00AD45"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 55.5576C6.41672 34.5944 21.1647 9.77295 40.0071 9.77295C58.8353 9.77295 73.5975 34.5944 75 55.5576C69.0923 66.2373 54.8401 70.2275 40.0071 70.2275C25.1741 70.2275 10.9077 66.1786 5 55.5576ZM51.0139 24.8888C54.1029 26.3589 58.3528 31.2176 61.8108 35.8407C65.5899 41.1304 68.5442 47.0013 70.5661 53.2391C70.5661 53.2391 68.3419 65.2538 40.4892 65.2538C12.6366 65.2538 9.97314 53.0338 9.97314 53.0338C9.97314 53.0338 16.405 33.0094 22.9786 33.0094C24.4536 33.0004 25.6629 33.6627 26.7452 34.5859C27.5511 35.2589 28.2868 36.0766 29.0058 36.8758C29.947 37.922 30.8597 38.9364 31.864 39.5529C32.4534 39.9 33.0773 40.1096 33.7598 40.1096C35.881 40.1096 39.2974 35.6614 42.4894 31.5053C45.2839 27.8668 47.9064 24.4522 49.3374 24.4422C49.3381 24.4422 49.3388 24.4422 49.3395 24.4422C49.3409 24.4422 49.3423 24.4422 49.3437 24.4422C49.3437 24.4422 49.3436 24.4422 49.3437 24.4422C49.6826 24.4422 50.0486 24.5141 50.4372 24.6496C50.6343 24.7149 50.8271 24.7948 51.0139 24.8888Z"
            fill="currentColor"
          />
          <path
            d="M25.0742 51.3618C25.0742 50.6393 25.2811 49.9331 25.6687 49.3324C26.0564 48.7317 26.6073 48.2635 27.2519 47.987C27.8965 47.7106 28.6058 47.6382 29.2901 47.7792C29.9743 47.9201 30.6029 48.268 31.0963 48.7789C31.5896 49.2897 31.9256 49.9406 32.0617 50.6492C32.1978 51.3577 32.1279 52.0922 31.8609 52.7596C31.5939 53.4271 31.1418 53.9976 30.5617 54.399C29.9816 54.8004 29.2995 55.0146 28.6018 55.0146C27.6663 55.0146 26.769 54.6297 26.1074 53.9447C25.4459 53.2597 25.0742 52.3306 25.0742 51.3618ZM47.8692 51.3618C47.8692 52.0842 48.0761 52.7905 48.4637 53.3912C48.8513 53.9919 49.4023 54.4601 50.0469 54.7365C50.6915 55.013 51.4007 55.0853 52.085 54.9444C52.7693 54.8035 53.3979 54.4556 53.8912 53.9447C54.3846 53.4339 54.7206 52.783 54.8567 52.0744C54.9928 51.3658 54.9229 50.6314 54.6559 49.9639C54.3889 49.2965 53.9368 48.726 53.3567 48.3246C52.7766 47.9232 52.0945 47.709 51.3968 47.709C50.9336 47.709 50.4749 47.8035 50.0469 47.987C49.6189 48.1706 49.23 48.4397 48.9024 48.7789C48.5748 49.1181 48.315 49.5207 48.1377 49.9639C47.9604 50.4071 47.8692 50.8821 47.8692 51.3618ZM47.2317 56.7163C47.3365 56.4554 47.343 56.1632 47.25 55.8976C47.157 55.6319 46.9712 55.4119 46.7293 55.2812C46.4874 55.1504 46.2069 55.1183 45.9432 55.1911C45.6795 55.264 45.4518 55.4365 45.3049 55.6747C44.7473 56.5724 43.9695 57.3008 43.0511 57.7853C42.1326 58.2699 41.1064 58.4933 40.0773 58.4327C39.0194 58.4581 37.9717 58.2146 37.0257 57.7236C36.0798 57.2325 35.2645 56.5089 34.6512 55.616C34.49 55.3866 34.2512 55.2284 33.9824 55.173C33.7137 55.1175 33.4346 55.1688 33.2007 55.3167C32.9668 55.4646 32.7952 55.6983 32.7201 55.9712C32.645 56.2441 32.6719 56.5363 32.7953 56.7896C33.6038 58.0108 34.6922 59.0052 35.9631 59.6837C37.234 60.3622 38.6476 60.7035 40.0773 60.6772C41.5034 60.7431 42.9204 60.4101 44.1793 59.7132C45.4382 59.0162 46.4926 57.981 47.2317 56.7163Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M40.0071 9.77295C21.1647 9.77295 6.41672 34.5944 5 55.5576C10.9077 66.1786 25.1741 70.2275 40.0071 70.2275C54.8401 70.2275 69.0923 66.2373 75 55.5576C73.5974 34.5944 58.8353 9.77295 40.0071 9.77295Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M61.8108 35.8407C57.674 30.3101 52.4038 24.4422 49.3437 24.4422C46.2836 24.4422 37.7408 40.1096 33.7598 40.1096C29.7788 40.1096 27.7954 32.98 22.9786 33.0094C16.405 33.0094 9.97314 53.0338 9.97314 53.0338C9.97314 53.0338 12.6366 65.2538 40.4892 65.2538C68.3419 65.2538 70.5661 53.2391 70.5661 53.2391C68.5442 47.0013 65.5899 41.1304 61.8108 35.8407Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25.0742 51.362C25.0742 50.6395 25.281 49.9333 25.6687 49.3326C26.0563 48.7319 26.6072 48.2637 27.2518 47.9873C27.8964 47.7108 28.6057 47.6384 29.29 47.7794C29.9743 47.9203 30.6028 48.2682 31.0962 48.7791C31.5895 49.2899 31.9255 49.9408 32.0616 50.6494C32.1977 51.3579 32.1279 52.0924 31.8609 52.7599C31.5939 53.4273 31.1417 53.9978 30.5616 54.3992C29.9815 54.8006 29.2995 55.0148 28.6018 55.0148C27.6662 55.0148 26.7689 54.6299 26.1074 53.9449C25.4458 53.2599 25.0742 52.3308 25.0742 51.362ZM47.8691 51.362C47.8691 52.0845 48.076 52.7907 48.4636 53.3914C48.8513 53.9921 49.4022 54.4603 50.0468 54.7367C50.6914 55.0132 51.4007 55.0856 52.085 54.9446C52.7693 54.8037 53.3978 54.4558 53.8912 53.9449C54.3845 53.4341 54.7205 52.7832 54.8566 52.0746C54.9927 51.366 54.9229 50.6316 54.6559 49.9641C54.3889 49.2967 53.9367 48.7262 53.3566 48.3248C52.7765 47.9234 52.0945 47.7092 51.3968 47.7092C50.9335 47.7092 50.4748 47.8037 50.0468 47.9873C49.6188 48.1708 49.2299 48.4399 48.9024 48.7791C48.5748 49.1183 48.3149 49.521 48.1377 49.9641C47.9604 50.4073 47.8691 50.8823 47.8691 51.362ZM47.2316 56.7165C47.3364 56.4556 47.343 56.1634 47.25 55.8978C47.157 55.6321 46.9712 55.4122 46.7292 55.2814C46.4873 55.1506 46.2068 55.1185 45.9431 55.1913C45.6795 55.2642 45.4517 55.4367 45.3049 55.6749C44.7473 56.5727 43.9695 57.301 43.051 57.7855C42.1326 58.2701 41.1063 58.4935 40.0772 58.4329C39.0193 58.4583 37.9716 58.2148 37.0257 57.7238C36.0797 57.2327 35.2645 56.5091 34.6512 55.6163C34.4899 55.3868 34.2511 55.2286 33.9824 55.1732C33.7136 55.1177 33.4345 55.1691 33.2006 55.317C32.9667 55.4649 32.7952 55.6985 32.7201 55.9714C32.645 56.2443 32.6718 56.5365 32.7953 56.7898C33.6037 58.011 34.6922 59.0055 35.9631 59.6839C37.234 60.3624 38.6476 60.7037 40.0772 60.6774C41.5033 60.7433 42.9203 60.4103 44.1792 59.7134C45.4381 59.0164 46.4925 57.9812 47.2316 56.7165Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsBasecamp = forwardRef((props, ref) => {
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

BrandsBasecamp.displayName = 'BrandsBasecamp'

export default BrandsBasecamp