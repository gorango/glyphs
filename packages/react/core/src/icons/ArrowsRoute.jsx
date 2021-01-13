
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M20 24L20 54C20 59.5228 24.4772 64 30 64C35.5228 64 40 59.5228 40 54L40 26C40 20.4771 44.4772 16 50 16C55.5228 16 60 20.4772 60 26L60 56"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27.7575 23.9995L12.2428 23.9995C10.6772 23.9995 9.8931 22.1066 11.0002 20.9995L17.8789 14.1209C19.0504 12.9493 20.9499 12.9493 22.1215 14.1209L29.0002 20.9995C30.1073 22.1066 29.3232 23.9995 27.7575 23.9995Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52.2428 56H67.7575C69.3232 56 70.1073 57.8929 69.0002 59L62.1215 65.8787C60.9499 67.0503 59.0504 67.0503 57.8789 65.8787L51.0002 59C49.8931 57.8929 50.6772 56 52.2428 56Z"
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
            d="M23 24C23 22.3431 21.6569 21 20 21C18.3431 21 17 22.3431 17 24H23ZM57 56C57 57.6569 58.3431 59 60 59C61.6569 59 63 57.6569 63 56H57ZM23 54V24H17V54H23ZM57 26V56H63V26H57ZM43 54V26H37V54H43ZM50 13C42.8203 13 37 18.8203 37 26H43C43 22.134 46.134 19 50 19V13ZM30 67C37.1797 67 43 61.1797 43 54H37C37 57.866 33.866 61 30 61V67ZM63 26C63 18.8203 57.1797 13 50 13V19C53.866 19 57 22.134 57 26H63ZM17 54C17 61.1797 22.8203 67 30 67V61C26.134 61 23 57.866 23 54H17Z"
            fill="currentColor"
          />
          <path
            d="M27.7574 24L12.2426 24C10.677 24 9.89293 22.1071 11 21L17.8787 14.1213C19.0503 12.9497 20.9497 12.9497 22.1213 14.1213L29 21C30.1071 22.1071 29.323 24 27.7574 24Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52.2426 56L67.7574 56C69.323 56 70.1071 57.8929 69 59L62.1213 65.8787C60.9497 67.0503 59.0503 67.0503 57.8787 65.8787L51 59C49.8929 57.8929 50.677 56 52.2426 56Z"
            fill="currentColor"
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
            d="M22 24C22 22.8954 21.1046 22 20 22C18.8954 22 18 22.8954 18 24H22ZM58 56C58 57.1046 58.8954 58 60 58C61.1046 58 62 57.1046 62 56H58ZM22 54V24H18V54H22ZM58 26V56H62V26H58ZM42 54V26H38V54H42ZM50 14C43.3726 14 38 19.3726 38 26H42C42 21.5817 45.5817 18 50 18V14ZM30 66C36.6274 66 42 60.6274 42 54H38C38 58.4183 34.4183 62 30 62V66ZM62 26C62 19.3726 56.6274 14 50 14V18C54.4183 18 58 21.5817 58 26H62ZM18 54C18 60.6274 23.3726 66 30 66V62C25.5817 62 22 58.4183 22 54H18Z"
            fill="#56CCF2"
          />
          <path
            d="M27.7574 24L12.2426 24C10.677 24 9.89293 22.1071 11 21L17.8787 14.1213C19.0503 12.9497 20.9497 12.9497 22.1213 14.1213L29 21C30.1071 22.1071 29.323 24 27.7574 24Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52.2426 56L67.7574 56C69.323 56 70.1071 57.8929 69 59L62.1213 65.8787C60.9497 67.0503 59.0503 67.0503 57.8787 65.8787L51 59C49.8929 57.8929 50.677 56 52.2426 56Z"
            fill="#2F80ED"
            stroke="#2F80ED"
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
            d="M27.7575 24H12.2428C10.6772 24 9.8931 22.1071 11.0002 21L17.8789 14.1214C19.0504 12.9498 20.9499 12.9498 22.1215 14.1214L29.0002 21C30.1073 22.1071 29.3232 24 27.7575 24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M52.2428 56H67.7575C69.3232 56 70.1073 57.893 69.0002 59L62.1215 65.8787C60.9499 67.0503 59.0504 67.0503 57.8789 65.8787L51.0002 59C49.8931 57.893 50.6772 56 52.2428 56Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M20.0002 24V54C20.0002 59.5229 24.4773 64 30.0002 64C35.523 64 40.0002 59.5229 40.0002 54V26C40.0002 20.4772 44.4773 16 50.0002 16C55.523 16 60.0002 20.4772 60.0002 26V56M12.2428 24H27.7575C29.3232 24 30.1073 22.1071 29.0002 21L22.1215 14.1214C20.9499 12.9498 19.0504 12.9498 17.8789 14.1214L11.0002 21C9.8931 22.1071 10.6772 24 12.2428 24ZM67.7575 56H52.2428C50.6772 56 49.8931 57.893 51.0002 59L57.8789 65.8787C59.0504 67.0503 60.9499 67.0503 62.1215 65.8787L69.0002 59C70.1072 57.893 69.3232 56 67.7575 56Z"
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
            d="M27.7572 26.5L22.4998 26.5L22.4998 54C22.4998 58.1422 25.8577 61.5 29.9998 61.5C34.1419 61.5 37.4998 58.1422 37.4998 54L37.4998 26C37.4998 19.0965 43.0963 13.5 49.9998 13.5C56.9034 13.5 62.4998 19.0965 62.4998 26L62.4998 53.5H67.7572C71.5501 53.5 73.4496 58.0858 70.7676 60.7678L63.8889 67.6465C61.741 69.7944 58.2586 69.7944 56.1107 67.6465L49.232 60.7678C46.5501 58.0858 48.4496 53.5 52.2425 53.5H57.4998L57.4998 26C57.4998 21.8579 54.142 18.5 49.9998 18.5C45.8577 18.5 42.4998 21.8579 42.4998 26L42.4998 54C42.4998 60.9036 36.9034 66.5 29.9998 66.5C23.0963 66.5 17.4998 60.9036 17.4998 54L17.4998 26.5H12.2425C8.44955 26.5 6.55007 21.9143 9.23205 19.2323L16.1107 12.3536C18.2586 10.2057 21.741 10.2057 23.8889 12.3536L30.7676 19.2323C33.4496 21.9143 31.5501 26.5 27.7572 26.5ZM20.3534 15.8891C20.1581 15.6939 19.8415 15.6939 19.6463 15.8891L14.0354 21.5L25.9643 21.5L20.3534 15.8891ZM54.0354 58.5L59.6463 64.111C59.8415 64.3062 60.1581 64.3062 60.3534 64.111L65.9643 58.5H54.0354Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreArrowsRoute = forwardRef((props, ref) => {
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

CoreArrowsRoute.displayName = 'CoreArrowsRoute'

export default CoreArrowsRoute
