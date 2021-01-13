
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M48 68C48 72.4183 44.4183 76 40 76C35.5817 76 32 72.4183 32 68V19.2617C32 15.8556 33.1592 12.551 35.287 9.89129L39.2 5C39.6101 4.48733 40.3899 4.48733 40.8 5L44.713 9.89129C46.8408 12.551 48 15.8556 48 19.2617V68Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44.7977 9.99707H35.2024"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47.9258 18.0743L44.7095 21.2924C44.3189 21.6832 43.6854 21.6832 43.2948 21.2924L40.7116 18.7078C40.3211 18.317 39.6876 18.317 39.297 18.7078L36.7138 21.2924C36.3233 21.6832 35.6898 21.6832 35.2992 21.2924L32.0748 18.0662"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40.0044 62V29"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.0088 68H48"
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
            d="M37.4975 7.68542L40.2951 4.18835L43.0928 7.68542H37.4975Z"
            fill="currentColor"
          />
          <path
            d="M32.4356 69.6883C33.1376 73.3896 36.3896 76.1884 40.2952 76.1884C44.2008 76.1884 47.4527 73.3896 48.1548 69.6883L32.4356 69.6883Z"
            fill="currentColor"
          />
          <path
            d="M45.092 10.1854C46.6072 12.1147 47.6179 14.3754 48.0527 16.7638C47.7263 16.8003 47.4096 16.9437 47.1593 17.1941L44.2886 20.0665L42.059 17.8357C41.0826 16.8587 39.4989 16.8587 38.5225 17.8357L36.293 20.0665L33.4302 17.2021C33.1798 16.9516 32.8628 16.8081 32.5362 16.7718C32.9702 14.3804 33.9814 12.1169 35.4983 10.1854H45.092Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.2952 66.6883L48.2864 66.6883L48.2952 20.3015L46.0568 22.541C45.0804 23.518 43.4967 23.518 42.5203 22.541L40.2908 20.3103L38.0612 22.541C37.0848 23.518 35.5011 23.518 34.5247 22.541L32.2952 20.3103L32.2952 66.6883ZM40.2908 63.6884C39.4623 63.6884 38.7908 63.0168 38.7908 62.1884L38.7908 29.1884C38.7908 28.3599 39.4623 27.6884 40.2908 27.6884C41.1192 27.6884 41.7908 28.3599 41.7908 29.1884L41.7908 62.1884C41.7908 63.0168 41.1192 63.6884 40.2908 63.6884Z"
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
            d="M32.1127 68.1127C32.1127 72.5309 35.6944 76.1127 40.1127 76.1127C44.5309 76.1127 48.1127 72.5309 48.1127 68.1127L48.1127 19.3744C48.1127 15.9683 46.9535 12.6637 44.8257 10.004L41.7127 6.11267L40.9127 5.11267C40.5025 4.60001 39.7228 4.60001 39.3127 5.11267L38.5127 6.11267L35.3996 10.004C33.2719 12.6637 32.1127 15.9683 32.1127 19.3744L32.1127 68.1127Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.2531 69.6127C32.1609 69.1268 32.1127 68.6254 32.1127 68.1127L32.1127 66.6127H48.1039C48.1068 66.6127 48.1097 66.6127 48.1127 66.6127V68.1127C48.1127 68.6254 48.0644 69.1268 47.9723 69.6127H32.2531ZM47.8126 16.6411C48.0111 17.6511 48.1127 18.6837 48.1127 19.7252V20.2258L45.8743 22.4654C44.8979 23.4423 43.3142 23.4423 42.3378 22.4654L40.1083 20.2346L37.8787 22.4654C36.9023 23.4423 35.3186 23.4423 34.3422 22.4654L32.1127 20.2346V19.7252C32.1127 18.6843 32.2142 17.6523 32.4124 16.6428C32.6913 16.6994 32.9573 16.8359 33.1736 17.0523L36.1105 19.9908L38.34 17.76C39.3164 16.783 40.9001 16.783 41.8765 17.76L44.1061 19.9908L47.0429 17.0523C47.2614 16.8337 47.5306 16.6966 47.8126 16.6411Z"
            fill="#F2F2F2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.315 10.1097L38.5126 6.11267L39.3126 5.11267L40.1126 4.11267L40.9126 5.11267L41.7126 6.11267L44.9103 10.1097L35.315 10.1097Z"
            fill="#333333"
          />
          <path
            d="M40.1083 62.1127L40.1083 29.1127"
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
            d="M47.8488 68C47.8488 72.4183 44.267 76 39.8488 76C35.4305 76 31.8488 72.4183 31.8488 68V19.2617C31.8488 15.8556 33.008 12.551 35.1357 9.89129L38.2488 6L39.0488 5C39.4589 4.48733 40.2386 4.48733 40.6488 5L41.4488 6L44.5618 9.89129C46.6895 12.551 47.8488 15.8556 47.8488 19.2617V68Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M44.6465 9.99707L41.4488 6L40.6488 5L39.8488 4L39.0488 5L38.2488 6L35.0511 9.99707H44.6465Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M38.2488 6L35.1357 9.89129C33.008 12.551 31.8488 15.8556 31.8488 19.2617V68C31.8488 72.4183 35.4305 76 39.8488 76C44.267 76 47.8488 72.4183 47.8488 68M38.2488 6L39.0488 5M38.2488 6L35.0511 9.99707H44.6465L41.4488 6M39.0488 5C39.4589 4.48733 40.2386 4.48733 40.6488 5M39.0488 5L39.8488 4L40.6488 5M40.6488 5L41.4488 6M41.4488 6L44.5618 9.89129C46.6895 12.551 47.8488 15.8556 47.8488 19.2617V68M47.8488 68H31.8575M47.7747 18.0742L44.5583 21.2923C44.1677 21.6831 43.5342 21.6831 43.1437 21.2923L40.5605 18.7077C40.1699 18.3169 39.5364 18.3169 39.1459 18.7077L36.5626 21.2923C36.1721 21.6831 35.5386 21.6831 35.148 21.2923L31.9236 18.0661M39.8531 62V29"
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
            d="M46.3874 8.75457L43.2744 4.86328L42.4744 3.86323L41.6743 2.86323C41.2948 2.38882 40.7201 2.11265 40.1126 2.11267C39.505 2.11269 38.9304 2.38889 38.5508 2.86333L33.7532 8.86034C33.7381 8.87928 33.7233 8.89844 33.7089 8.91782C31.3796 11.9036 30.1127 15.5836 30.1127 19.3744V68.1127C30.1127 73.6355 34.5898 78.1127 40.1127 78.1127C45.6355 78.1127 50.1127 73.6355 50.1127 68.1127V19.3744C50.1127 15.5824 48.8449 11.9014 46.5143 8.91515C46.5006 8.89669 46.4865 8.87843 46.472 8.86036L46.4099 8.78266M46.3874 8.75457C46.3949 8.76393 46.4024 8.77329 46.4099 8.78266M46.3874 8.75457L46.4099 8.78266M40.1127 7.31423L39.4763 8.10974H40.7491L40.1127 7.31423ZM36.3319 12.1097H43.8935C44.9708 13.7085 45.6771 15.5242 45.9654 17.4231L44.1061 19.2835L42.2302 17.4065C41.0585 16.2342 39.1581 16.2342 37.9864 17.4065L36.1105 19.2835L34.2588 17.4307C34.5463 15.5291 35.2531 13.7107 36.3319 12.1097ZM41.9842 22.8188C43.1182 23.9534 44.9347 23.9899 46.1127 22.9283V66.1127H34.1127V22.9362C35.2908 23.9898 37.1012 23.9506 38.2324 22.8188L40.1083 20.9419L41.9842 22.8188ZM34.4541 70.1127H45.7713C44.9476 72.4431 42.7251 74.1127 40.1127 74.1127C37.5002 74.1127 35.2778 72.4431 34.4541 70.1127ZM42.1083 29.1127C42.1083 28.0081 41.2128 27.1127 40.1083 27.1127C39.0037 27.1127 38.1083 28.0081 38.1083 29.1127V62.1127C38.1083 63.2172 39.0037 64.1127 40.1083 64.1127C41.2128 64.1127 42.1083 63.2172 42.1083 62.1127V29.1127Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CorePencil1 = forwardRef((props, ref) => {
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

CorePencil1.displayName = 'CorePencil1'

export default CorePencil1