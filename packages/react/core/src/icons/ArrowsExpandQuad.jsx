
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M40 21L40 34"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.818 20.9995H34.182C33.0078 20.9995 32.4197 19.5799 33.25 18.7495L37.8787 14.1209C39.0503 12.9493 40.9498 12.9493 42.1213 14.1209L46.75 18.7495C47.5803 19.5799 46.9923 20.9995 45.818 20.9995Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M59 40L46 40"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M59.0005 45.818L59.0005 34.182C59.0005 33.0078 60.4201 32.4197 61.2505 33.25L65.8791 37.8787C67.0507 39.0503 67.0507 40.9498 65.8791 42.1213L61.2505 46.75C60.4201 47.5803 59.0005 46.9923 59.0005 45.818Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 59L40 46"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.818 59H34.182C33.0078 59 32.4197 60.4197 33.25 61.25L37.8787 65.8787C39.0503 67.0503 40.9498 67.0503 42.1213 65.8787L46.75 61.25C47.5803 60.4197 46.9923 59 45.818 59Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21 40L34 40"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21 45.818L21 34.182C21 33.0078 19.5803 32.4197 18.75 33.25L14.1213 37.8787C12.9497 39.0503 12.9497 40.9498 14.1213 42.1213L18.75 46.75C19.5803 47.5803 21 46.9923 21 45.818Z"
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
            d="M43 21C43 19.3431 41.6569 18 40 18C38.3431 18 37 19.3431 37 21L43 21ZM37 34C37 35.6569 38.3431 37 40 37C41.6569 37 43 35.6569 43 34H37ZM37 21L37 34H43L43 21L37 21Z"
            fill="currentColor"
          />
          <path
            d="M45.818 21L34.182 21C33.0078 21 32.4197 19.5803 33.25 18.75L37.8787 14.1213C39.0503 12.9497 40.9497 12.9497 42.1213 14.1213L46.75 18.75C47.5803 19.5803 46.9923 21 45.818 21Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M43 59C43 60.6569 41.6569 62 40 62C38.3431 62 37 60.6569 37 59L43 59ZM37 46C37 44.3431 38.3431 43 40 43C41.6569 43 43 44.3431 43 46H37ZM37 59L37 46H43L43 59L37 59Z"
            fill="currentColor"
          />
          <path
            d="M45.818 59L34.182 59C33.0078 59 32.4197 60.4197 33.25 61.25L37.8787 65.8787C39.0503 67.0503 40.9497 67.0503 42.1213 65.8787L46.75 61.25C47.5803 60.4197 46.9923 59 45.818 59Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M59 43C60.6569 43 62 41.6569 62 40C62 38.3431 60.6569 37 59 37L59 43ZM46 37C44.3431 37 43 38.3431 43 40C43 41.6569 44.3431 43 46 43L46 37ZM59 37L46 37L46 43L59 43L59 37Z"
            fill="currentColor"
          />
          <path
            d="M59 45.818L59 34.182C59 33.0078 60.4197 32.4197 61.25 33.25L65.8787 37.8787C67.0503 39.0503 67.0503 40.9497 65.8787 42.1213L61.25 46.75C60.4197 47.5803 59 46.9923 59 45.818Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21 43C19.3431 43 18 41.6569 18 40C18 38.3431 19.3431 37 21 37L21 43ZM34 37C35.6569 37 37 38.3431 37 40C37 41.6569 35.6569 43 34 43L34 37ZM21 37L34 37L34 43L21 43L21 37Z"
            fill="currentColor"
          />
          <path
            d="M21 45.818L21 34.182C21 33.0078 19.5803 32.4197 18.75 33.25L14.1213 37.8787C12.9497 39.0503 12.9497 40.9497 14.1213 42.1213L18.75 46.75C19.5803 47.5803 21 46.9923 21 45.818Z"
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
            d="M42 21C42 19.8954 41.1046 19 40 19C38.8954 19 38 19.8954 38 21H42ZM38 34C38 35.1046 38.8954 36 40 36C41.1046 36 42 35.1046 42 34H38ZM38 21V34H42V21H38Z"
            fill="#56CCF2"
          />
          <path
            d="M45.818 21L34.182 21C33.0078 21 32.4197 19.5803 33.25 18.75L37.8787 14.1213C39.0503 12.9497 40.9497 12.9497 42.1213 14.1213L46.75 18.75C47.5803 19.5803 46.9923 21 45.818 21Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M42 59C42 60.1046 41.1046 61 40 61C38.8954 61 38 60.1046 38 59H42ZM38 46C38 44.8954 38.8954 44 40 44C41.1046 44 42 44.8954 42 46H38ZM38 59V46H42V59H38Z"
            fill="#56CCF2"
          />
          <path
            d="M45.818 59L34.182 59C33.0078 59 32.4197 60.4197 33.25 61.25L37.8787 65.8787C39.0503 67.0503 40.9497 67.0503 42.1213 65.8787L46.75 61.25C47.5803 60.4197 46.9923 59 45.818 59Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M59 42C60.1046 42 61 41.1046 61 40C61 38.8954 60.1046 38 59 38L59 42ZM46 38C44.8954 38 44 38.8954 44 40C44 41.1046 44.8954 42 46 42L46 38ZM59 38L46 38L46 42L59 42L59 38Z"
            fill="#56CCF2"
          />
          <path
            d="M59 45.818L59 34.182C59 33.0078 60.4197 32.4197 61.25 33.25L65.8787 37.8787C67.0503 39.0503 67.0503 40.9497 65.8787 42.1213L61.25 46.75C60.4197 47.5803 59 46.9923 59 45.818Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21 42C19.8954 42 19 41.1046 19 40C19 38.8954 19.8954 38 21 38L21 42ZM34 38C35.1046 38 36 38.8954 36 40C36 41.1046 35.1046 42 34 42L34 38ZM21 38L34 38L34 42L21 42L21 38Z"
            fill="#56CCF2"
          />
          <path
            d="M21 45.818L21 34.182C21 33.0078 19.5803 32.4197 18.75 33.25L14.1213 37.8787C12.9497 39.0503 12.9497 40.9497 14.1213 42.1213L18.75 46.75C19.5803 47.5803 21 46.9923 21 45.818Z"
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
            d="M45.8181 21H34.182C33.0078 21 32.4197 19.5803 33.25 18.75L37.8787 14.1214C39.0503 12.9498 40.9498 12.9498 42.1213 14.1214L46.75 18.75C47.5803 19.5803 46.9923 21 45.8181 21Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M45.8181 59H34.182C33.0078 59 32.4197 60.4197 33.25 61.25L37.8787 65.8787C39.0503 67.0503 40.9498 67.0503 42.1213 65.8787L46.75 61.25C47.5803 60.4197 46.9923 59 45.8181 59Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M59 45.8181V34.182C59 33.0078 60.4197 32.4197 61.25 33.25L65.8787 37.8787C67.0503 39.0503 67.0503 40.9498 65.8787 42.1214L61.25 46.75C60.4197 47.5803 59 46.9923 59 45.8181Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M21 45.8181L21 34.182C21 33.0078 19.5803 32.4197 18.75 33.25L14.1214 37.8787C12.9498 39.0503 12.9498 40.9498 14.1214 42.1214L18.75 46.75C19.5803 47.5803 21 46.9923 21 45.8181Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 21L40 34M40 59L40 46M59 40H46M21 40H34M34.182 21H45.8181C46.9923 21 47.5803 19.5803 46.75 18.75L42.1213 14.1214C40.9498 12.9498 39.0503 12.9498 37.8787 14.1214L33.25 18.75C32.4197 19.5803 33.0078 21 34.182 21ZM34.182 59H45.8181C46.9923 59 47.5803 60.4197 46.75 61.25L42.1213 65.8787C40.9498 67.0503 39.0503 67.0503 37.8787 65.8787L33.25 61.25C32.4197 60.4197 33.0078 59 34.182 59ZM59 34.182V45.8181C59 46.9923 60.4197 47.5803 61.25 46.75L65.8787 42.1214C67.0503 40.9498 67.0503 39.0503 65.8787 37.8787L61.25 33.25C60.4197 32.4197 59 33.0078 59 34.182ZM21 34.182L21 45.8181C21 46.9923 19.5803 47.5803 18.75 46.75L14.1214 42.1214C12.9498 40.9498 12.9498 39.0503 14.1214 37.8787L18.75 33.25C19.5803 32.4197 21 33.0078 21 34.182Z"
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
            d="M37.5 23.5H34.182C30.7805 23.5 29.077 19.3875 31.4823 16.9823L36.1109 12.3536C38.2588 10.2057 41.7412 10.2057 43.8891 12.3536L48.5178 16.9823C50.923 19.3875 49.2196 23.5 45.8181 23.5H42.5V34C42.5 35.3807 41.3807 36.5 40 36.5C38.6193 36.5 37.5 35.3807 37.5 34V23.5ZM39.6465 15.8891C39.8417 15.6939 40.1583 15.6939 40.3536 15.8891L42.9645 18.5L37.0356 18.5L39.6465 15.8891Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.5 56.5H45.8181C49.2196 56.5 50.923 60.6126 48.5178 63.0178L43.8891 67.6465C41.7412 69.7944 38.2588 69.7944 36.1109 67.6465L31.4823 63.0178C29.077 60.6126 30.7805 56.5 34.182 56.5H37.5V46C37.5 44.6193 38.6193 43.5 40 43.5C41.3807 43.5 42.5 44.6193 42.5 46V56.5ZM37.0356 61.5L39.6465 64.1109C39.8417 64.3062 40.1583 64.3062 40.3536 64.1109L42.9645 61.5H37.0356Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M56.5 42.5V45.8181C56.5 49.2196 60.6126 50.923 63.0178 48.5178L67.6465 43.8891C69.7944 41.7412 69.7944 38.2588 67.6465 36.1109L63.0178 31.4823C60.6126 29.077 56.5 30.7805 56.5 34.182V37.5H46C44.6193 37.5 43.5 38.6193 43.5 40C43.5 41.3807 44.6193 42.5 46 42.5H56.5ZM61.5 37.0356L64.1109 39.6465C64.3062 39.8417 64.3062 40.1583 64.1109 40.3536L61.5 42.9645V37.0356Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.5 42.5V45.8181C23.5 49.2196 19.3875 50.923 16.9823 48.5178L12.3536 43.8891C10.2057 41.7412 10.2057 38.2588 12.3536 36.1109L16.9823 31.4823C19.3875 29.077 23.5 30.7805 23.5 34.182V37.5H34C35.3807 37.5 36.5 38.6193 36.5 40C36.5 41.3807 35.3807 42.5 34 42.5H23.5ZM18.5 42.9645L15.8891 40.3536C15.6939 40.1583 15.6939 39.8417 15.8891 39.6465L18.5 37.0356L18.5 42.9645Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreArrowsExpandQuad = forwardRef((props, ref) => {
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

CoreArrowsExpandQuad.displayName = 'CoreArrowsExpandQuad'

export default CoreArrowsExpandQuad
