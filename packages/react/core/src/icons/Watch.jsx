
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M32.2217 21.222C37.202 19.1591 42.7978 19.1591 47.7781 21.222C52.7584 23.2849 56.7152 27.2417 58.7781 32.222C60.841 37.2023 60.841 42.798 58.7781 47.7783C56.7152 52.7586 52.7584 56.7154 47.7781 58.7783C42.7978 60.8412 37.202 60.8412 32.2217 58.7783C27.2415 56.7154 23.2846 52.7586 21.2217 47.7783C19.1588 42.798 19.1588 37.2023 21.2217 32.222C23.2846 27.2417 27.2415 23.2849 32.2217 21.222Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 23.595V16C28 13.7909 29.7909 12 32 12H48C50.2091 12 52 13.7909 52 16V23.595"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52 56.4048V63.9998C52 66.209 50.2091 67.9998 48 67.9998H32C29.7909 67.9998 28 66.209 28 63.9998V56.4048"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.5 40C37.5 38.6193 38.6193 37.5 40 37.5C41.3807 37.5 42.5 38.6193 42.5 40C42.5 41.3807 41.3807 42.5 40 42.5C38.6193 42.5 37.5 41.3807 37.5 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M42.1636 41.2554L51.5411 46.6802"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M41.4416 37.9611L45.4425 32.3081"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28 16C28 13.7909 29.7908 12 32 12H48C50.2091 12 52 13.7909 52 16V19.9981C51.0207 19.4106 49.994 18.8925 48.9262 18.4502C43.2108 16.0828 36.7891 16.0828 31.0737 18.4502C30.006 18.8925 28.9792 19.4106 28 19.9981V16ZM31.0737 61.5498C30.006 61.1075 28.9792 60.5894 28 60.0019V64C28 66.2091 29.7908 68 32 68H48C50.2091 68 52 66.2091 52 64V60.0019C51.0207 60.5894 49.994 61.1075 48.9262 61.5498C43.2108 63.9172 36.7891 63.9172 31.0737 61.5498ZM32.2218 21.2218C37.2021 19.1589 42.7979 19.1589 47.7781 21.2218C52.7584 23.2847 56.7152 27.2415 58.7781 32.2218C60.841 37.2021 60.841 42.7979 58.7781 47.7782C56.7152 52.7585 52.7584 56.7153 47.7781 58.7782C42.7979 60.8411 37.2021 60.8411 32.2218 58.7782C27.2415 56.7153 23.2847 52.7585 21.2218 47.7782C19.1589 42.7979 19.1589 37.2021 21.2218 32.2218C23.2847 27.2415 27.2415 23.2847 32.2218 21.2218ZM47.1596 33.9361C47.8308 33.0589 47.6637 31.8036 46.7865 31.1324C45.9092 30.4613 44.6539 30.6283 43.9828 31.5056L40.8631 35.583C40.584 35.5289 40.2956 35.5005 40.0007 35.5005C37.5154 35.5005 35.5007 37.5152 35.5007 40.0005C35.5007 42.4858 37.5154 44.5005 40.0007 44.5005C40.9331 44.5005 41.7992 44.2169 42.5176 43.7313L50.6008 48.3297C51.5609 48.8759 52.782 48.5404 53.3281 47.5803C53.8743 46.6202 53.5388 45.3991 52.5787 44.8529L44.4937 40.2535C44.4983 40.1697 44.5007 40.0854 44.5007 40.0005C44.5007 39.2874 44.3348 38.6131 44.0396 38.014L47.1596 33.9361ZM39.5007 40.0005C39.5007 39.7243 39.7245 39.5005 40.0007 39.5005C40.2768 39.5005 40.5007 39.7243 40.5007 40.0005C40.5007 40.2766 40.2768 40.5005 40.0007 40.5005C39.7245 40.5005 39.5007 40.2766 39.5007 40.0005Z"
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
            d="M28 16C28 13.7909 29.7909 12 32 12H35.3846H44.6154H48C50.2091 12 52 13.7909 52 16V23.595C50.7029 22.6462 49.2875 21.847 47.7782 21.2218C42.7979 19.1589 37.2021 19.1589 32.2218 21.2218C30.7125 21.847 29.2971 22.6462 28 23.595V16ZM28 56.405V64C28 66.2091 29.7909 68 32 68H35.3846H44.6154H48C50.2091 68 52 66.2091 52 64V56.405C50.7029 57.3538 49.2875 58.153 47.7782 58.7782C42.7979 60.8411 37.2021 60.8411 32.2218 58.7782C30.7125 58.153 29.2971 57.3538 28 56.405Z"
            fill="#2F80ED"
          />
          <path
            d="M32.2218 21.2218C37.2021 19.1589 42.7979 19.1589 47.7782 21.2218C52.7585 23.2847 56.7153 27.2415 58.7782 32.2218C60.8411 37.2021 60.8411 42.7979 58.7782 47.7782C56.7153 52.7585 52.7585 56.7153 47.7782 58.7782C42.7979 60.8411 37.2021 60.8411 32.2218 58.7782C27.2415 56.7153 23.2847 52.7585 21.2218 47.7782C19.1589 42.7979 19.1589 37.2021 21.2218 32.2218C23.2847 27.2415 27.2415 23.2847 32.2218 21.2218Z"
            fill="#F2F2F2"
            stroke="#56CCF2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47.1596 33.936C47.8308 33.0587 47.6637 31.8035 46.7865 31.1323C45.9092 30.4611 44.654 30.6282 43.9828 31.5054L47.1596 33.936ZM39.932 36.7998C39.2608 37.6771 39.4279 38.9324 40.3051 39.6035C41.1824 40.2747 42.4376 40.1077 43.1088 39.2304L39.932 36.7998ZM50.6008 48.3296C51.5609 48.8757 52.782 48.5402 53.3282 47.5801C53.8743 46.62 53.5388 45.399 52.5787 44.8528L50.6008 48.3296ZM43.1638 39.4968C42.2038 38.9506 40.9827 39.2862 40.4365 40.2463C39.8903 41.2063 40.2259 42.4274 41.186 42.9736L43.1638 39.4968ZM39.5007 40.0003C39.5007 39.7242 39.7245 39.5003 40.0007 39.5003V35.5003C37.5154 35.5003 35.5007 37.515 35.5007 40.0003H39.5007ZM40.0007 40.5003C39.7245 40.5003 39.5007 40.2765 39.5007 40.0003H35.5007C35.5007 42.4856 37.5154 44.5003 40.0007 44.5003V40.5003ZM40.5007 40.0003C40.5007 40.2765 40.2768 40.5003 40.0007 40.5003V44.5003C42.486 44.5003 44.5007 42.4856 44.5007 40.0003H40.5007ZM40.0007 39.5003C40.2768 39.5003 40.5007 39.7242 40.5007 40.0003H44.5007C44.5007 37.515 42.486 35.5003 40.0007 35.5003V39.5003ZM43.9828 31.5054L39.932 36.7998L43.1088 39.2304L47.1596 33.936L43.9828 31.5054ZM52.5787 44.8528L43.1638 39.4968L41.186 42.9736L50.6008 48.3296L52.5787 44.8528Z"
            fill="#EB5757"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M28 16C28 13.7909 29.7908 12 32 12H48C50.2091 12 52 13.7909 52 16V23.595C50.7029 22.6462 49.2875 21.847 47.7781 21.2218C42.7979 19.1589 37.2021 19.1589 32.2218 21.2218C30.7124 21.847 29.2971 22.6462 28 23.595V16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28 56.405V64C28 66.2091 29.7908 68 32 68H48C50.2091 68 52 66.2091 52 64V56.405C50.7029 57.3538 49.2875 58.153 47.7781 58.7782C42.7979 60.8411 37.2021 60.8411 32.2218 58.7782C30.7124 58.153 29.2971 57.3538 28 56.405Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32.2218 21.2218C37.2021 19.1589 42.7979 19.1589 47.7781 21.2218C52.7584 23.2847 56.7152 27.2415 58.7781 32.2218C60.841 37.2021 60.841 42.7979 58.7781 47.7782C56.7152 52.7585 52.7584 56.7153 47.7781 58.7782C42.7979 60.8411 37.2021 60.8411 32.2218 58.7782C27.2415 56.7153 23.2847 52.7585 21.2218 47.7782C19.1589 42.7979 19.1589 37.2021 21.2218 32.2218C23.2847 27.2415 27.2415 23.2847 32.2218 21.2218Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40.0007 37.5005C38.6199 37.5005 37.5007 38.6198 37.5007 40.0005C37.5007 41.3812 38.6199 42.5005 40.0007 42.5005C41.3814 42.5005 42.5007 41.3812 42.5007 40.0005C42.5007 38.6198 41.3814 37.5005 40.0007 37.5005Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47.7781 21.2218C49.2875 21.847 50.7029 22.6462 52 23.595V16C52 13.7909 50.2091 12 48 12H32C29.7908 12 28 13.7909 28 16V23.595C29.2971 22.6462 30.7124 21.847 32.2218 21.2218M47.7781 21.2218C42.7979 19.1589 37.2021 19.1589 32.2218 21.2218M47.7781 21.2218C52.7584 23.2847 56.7152 27.2415 58.7781 32.2218C60.841 37.2021 60.841 42.7979 58.7781 47.7782C56.7152 52.7585 52.7584 56.7153 47.7781 58.7782M32.2218 21.2218C27.2415 23.2847 23.2847 27.2415 21.2218 32.2218C19.1589 37.2021 19.1589 42.7979 21.2218 47.7782C23.2847 52.7585 27.2415 56.7153 32.2218 58.7782M47.7781 58.7782C49.2875 58.153 50.7029 57.3538 52 56.405V64C52 66.2091 50.2091 68 48 68H32C29.7908 68 28 66.2091 28 64V56.405C29.2971 57.3538 30.7124 58.153 32.2218 58.7782M47.7781 58.7782C42.7979 60.8411 37.2021 60.8411 32.2218 58.7782M45.5712 32.7209L41.5204 38.0153M51.5898 46.5913L42.1749 41.2354M37.5007 40.0005C37.5007 38.6198 38.6199 37.5005 40.0007 37.5005C41.3814 37.5005 42.5007 38.6198 42.5007 40.0005C42.5007 41.3812 41.3814 42.5005 40.0007 42.5005C38.6199 42.5005 37.5007 41.3812 37.5007 40.0005Z"
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
            d="M47.1596 33.9361C47.8308 33.0589 47.6637 31.8036 46.7865 31.1324C45.9092 30.4613 44.6539 30.6283 43.9828 31.5056L40.8631 35.583C40.584 35.5289 40.2956 35.5005 40.0007 35.5005C37.5154 35.5005 35.5007 37.5152 35.5007 40.0005C35.5007 42.4858 37.5154 44.5005 40.0007 44.5005C40.9331 44.5005 41.7992 44.2169 42.5176 43.7313L50.6008 48.3297C51.5609 48.8759 52.782 48.5404 53.3281 47.5803C53.8743 46.6202 53.5388 45.3991 52.5787 44.8529L44.4937 40.2535C44.4983 40.1697 44.5007 40.0854 44.5007 40.0005C44.5007 39.2874 44.3348 38.6131 44.0396 38.014L47.1596 33.9361ZM39.5007 40.0005C39.5007 39.7243 39.7245 39.5005 40.0007 39.5005C40.2768 39.5005 40.5007 39.7243 40.5007 40.0005C40.5007 40.2766 40.2768 40.5005 40.0007 40.5005C39.7245 40.5005 39.5007 40.2766 39.5007 40.0005Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26 16V22.6097C23.1105 24.936 20.8192 27.9676 19.374 31.4565C17.1081 36.9268 17.1081 43.0732 19.374 48.5435C20.8192 52.0324 23.1105 55.064 26 57.3903V64C26 67.3137 28.6863 70 32 70H48C51.3137 70 54 67.3137 54 64V57.3903C56.8894 55.064 59.1808 52.0324 60.6259 48.5435C62.8918 43.0732 62.8918 36.9268 60.6259 31.4565C59.1808 27.9676 56.8894 24.936 54 22.6097V16C54 12.6863 51.3137 10 48 10H32C28.6863 10 26 12.6863 26 16ZM32 14C30.8954 14 30 14.8954 30 16V20.0395C30.4758 19.8011 30.9615 19.5791 31.4564 19.3741C36.9268 17.1082 43.0732 17.1082 48.5435 19.3741C49.0384 19.5791 49.5241 19.8011 50 20.0395V16C50 14.8954 49.1045 14 48 14H32ZM23.0696 32.9872C24.7181 29.0073 27.7081 25.7523 31.4931 23.7688C31.9784 23.5144 32.4768 23.281 32.9872 23.0696C37.4774 21.2097 42.5226 21.2097 47.0128 23.0696C48.3737 23.6333 49.6497 24.3538 50.8191 25.2092C53.5085 27.1766 55.6341 29.8578 56.9304 32.9872C58.7903 37.4774 58.7903 42.5226 56.9304 47.0128C55.6341 50.1422 53.5085 52.8234 50.8191 54.7908C49.6497 55.6462 48.3737 56.3667 47.0128 56.9304C46.4515 57.1629 45.8816 57.3663 45.3051 57.5407C41.2699 58.7613 36.9161 58.5578 32.9872 56.9304C31.6262 56.3667 30.3502 55.6462 29.1808 54.7908C26.4914 52.8234 24.3658 50.1422 23.0696 47.0128C21.2096 42.5226 21.2096 37.4774 23.0696 32.9872ZM30 64V59.9605C30.4758 60.1989 30.9615 60.4209 31.4564 60.6259C36.9268 62.8918 43.0732 62.8918 48.5435 60.6259C49.0384 60.4209 49.5241 60.1989 50 59.9605V64C50 65.1046 49.1045 66 48 66H32C30.8954 66 30 65.1046 30 64Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreWatch = forwardRef((props, ref) => {
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

CoreWatch.displayName = 'CoreWatch'

export default CoreWatch
