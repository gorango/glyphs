
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M72 68H10C8.89543 68 8 67.1046 8 66V12"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M8 21.6274L24.617 38.2444C26.1791 39.8065 28.7118 39.8065 30.2739 38.2444L38.7591 29.7592C40.3212 28.1971 42.8539 28.1971 44.416 29.7592L60.3259 45.6691"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M65.8111 40.1838L54.8405 51.1543C53.7334 52.2614 54.5175 54.1543 56.0831 54.1543L65.8111 54.1543C67.4679 54.1543 68.8111 52.8112 68.8111 51.1543V41.4264C68.8111 39.8608 66.9181 39.0767 65.8111 40.1838Z"
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
            d="M5.87851 24.7486C4.70694 23.577 4.70694 21.6775 5.87851 20.5059C7.05008 19.3344 8.94958 19.3344 10.1211 20.5059L5.87851 24.7486ZM62.447 44.5476C63.6186 45.7192 63.6186 47.6186 62.447 48.7902C61.2755 49.9618 59.376 49.9618 58.2044 48.7902L62.447 44.5476ZM10.1211 20.5059L26.7382 37.123L22.4955 41.3656L5.87851 24.7486L10.1211 20.5059ZM28.1524 37.123L36.6377 28.6377L40.8803 32.8803L32.395 41.3656L28.1524 37.123ZM46.5371 28.6377L62.447 44.5476L58.2044 48.7902L42.2945 32.8803L46.5371 28.6377ZM36.6377 28.6377C39.3713 25.904 43.8035 25.904 46.5371 28.6377L42.2945 32.8803C41.904 32.4898 41.2708 32.4898 40.8803 32.8803L36.6377 28.6377ZM26.7382 37.123C27.1287 37.5135 27.7618 37.5135 28.1524 37.123L32.395 41.3656C29.6613 44.0993 25.2292 44.0993 22.4955 41.3656L26.7382 37.123Z"
            fill="currentColor"
          />
          <path
            d="M65.811 41.1838L54.8404 52.1544C53.7333 53.2614 54.5174 55.1544 56.083 55.1544L65.811 55.1544C67.4678 55.1544 68.811 53.8112 68.811 52.1544L68.811 42.4264C68.811 40.8608 66.918 40.0767 65.811 41.1838Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M8 13V67C8 68.1046 8.89543 69 10 69H72"
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
            d="M6.58561 24.0415C5.80457 23.2604 5.80457 21.9941 6.58561 21.2131C7.36666 20.432 8.63299 20.432 9.41404 21.2131L6.58561 24.0415ZM61.7399 45.2547C62.521 46.0357 62.521 47.3021 61.7399 48.0831C60.9589 48.8642 59.6926 48.8642 58.9115 48.0831L61.7399 45.2547ZM9.41404 21.2131L26.0311 37.8301L23.2026 40.6585L6.58561 24.0415L9.41404 21.2131ZM28.8595 37.8301L37.3448 29.3448L40.1732 32.1732L31.6879 40.6585L28.8595 37.8301ZM45.83 29.3448L61.7399 45.2547L58.9115 48.0831L43.0016 32.1732L45.83 29.3448ZM37.3448 29.3448C39.6879 27.0016 43.4869 27.0016 45.83 29.3448L43.0016 32.1732C42.2206 31.3922 40.9542 31.3922 40.1732 32.1732L37.3448 29.3448ZM26.0311 37.8301C26.8121 38.6111 28.0784 38.6111 28.8595 37.8301L31.6879 40.6585C29.3448 43.0016 25.5458 43.0016 23.2026 40.6585L26.0311 37.8301Z"
            fill="#F2994A"
          />
          <path
            d="M65.811 41.1838L54.8404 52.1544C53.7333 53.2614 54.5174 55.1544 56.083 55.1544L65.811 55.1544C67.4678 55.1544 68.811 53.8112 68.811 52.1544L68.811 42.4264C68.811 40.8608 66.918 40.0767 65.811 41.1838Z"
            fill="#EB5757"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M8 13V67C8 68.1046 8.89543 69 10 69H72"
            stroke="#4F4F4F"
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
            d="M65.8112 40.1837L54.8406 51.1543C53.7335 52.2613 54.5176 54.1543 56.0833 54.1543H65.8112C67.468 54.1543 68.8112 52.8111 68.8112 51.1543V41.4263C68.8112 39.8607 66.9183 39.0766 65.8112 40.1837Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M8 21.6273L24.617 38.2443C26.1791 39.8064 28.7118 39.8064 30.2739 38.2443L38.7591 29.7591C40.3212 28.197 42.8539 28.197 44.416 29.7591L60.3259 45.669M72.0001 68H10.0001C8.89553 68 8.0001 67.1046 8.0001 66V12M54.8406 51.1543L65.8112 40.1837C66.9183 39.0766 68.8112 39.8607 68.8112 41.4263V51.1543C68.8112 52.8111 67.468 54.1543 65.8112 54.1543H56.0833C54.5176 54.1543 53.7335 52.2613 54.8406 51.1543Z"
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
            d="M10.0001 12C10.0001 10.8954 9.10467 10 8.0001 10C6.89553 10 6.0001 10.8954 6.0001 12V21.6072C5.99997 21.6206 5.99997 21.6341 6.0001 21.6475V66C6.0001 68.2091 7.79096 70 10.0001 70H72.0001C73.1047 70 74.0001 69.1046 74.0001 68C74.0001 66.8954 73.1047 66 72.0001 66H10.0001V26.4559L23.2028 39.6586C25.5459 42.0017 29.3449 42.0017 31.6881 39.6586L40.1734 31.1733C40.9544 30.3922 42.2207 30.3922 43.0018 31.1733L57.4975 45.669L53.4264 49.74C51.0594 52.107 52.7358 56.1543 56.0833 56.1543H65.8112C68.5726 56.1543 70.8112 53.9157 70.8112 51.1543V41.4263C70.8112 38.0789 66.764 36.4025 64.397 38.7695L60.3259 42.8405L45.8302 28.3449C43.4871 26.0017 39.6881 26.0017 37.3449 28.3449L28.8596 36.8301C28.0786 37.6112 26.8123 37.6112 26.0312 36.8301L10.0001 20.799V12ZM66.8112 42.0121V51.1543C66.8112 51.7065 66.3635 52.1543 65.8112 52.1543H56.669L66.8112 42.0121Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreChartLine1 = forwardRef((props, ref) => {
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

CoreChartLine1.displayName = 'CoreChartLine1'

export default CoreChartLine1
