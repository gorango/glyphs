
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M16 18C16 16.8954 16.8954 16 18 16L62 16C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64L18 64C16.8954 64 16 63.1046 16 62L16 18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46.3999 40.0002H50.9341C53.0266 40.0002 54.0548 37.4527 52.5485 36.0002L43.0195 26.8114C41.3925 25.2425 38.8157 25.2425 37.1887 26.8114L27.6597 36.0002C26.1534 37.4527 27.1816 40.0002 29.2741 40.0002H33.5999L33.5999 52.8007C33.5999 53.6844 34.3163 54.4007 35.1999 54.4007H44.7999C45.6836 54.4007 46.3999 53.6844 46.3999 52.8007V40.0002Z"
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
            d="M18 16C16.8954 16 16 16.8954 16 18L16 62C16 63.1046 16.8954 64 18 64L62 64C63.1046 64 64 63.1046 64 62V18C64 16.8954 63.1046 16 62 16L18 16ZM50.9342 39.9998L46.4 39.9998L46.4 52.8004C46.4 53.684 45.6837 54.4004 44.8 54.4004L35.2 54.4004C34.3163 54.4004 33.6 53.684 33.6 52.8004L33.6 39.9998H29.2741C27.1816 39.9998 26.1534 37.4523 27.6597 35.9998L37.1888 26.8111C38.8158 25.2422 41.3926 25.2422 43.0195 26.8111L52.5486 35.9998C54.0549 37.4523 53.0267 39.9998 50.9342 39.9998Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="16"
            y="16"
            width="48"
            height="48"
            rx="2"
            fill="#6FCF97"
            stroke="#219653"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.3999 40.0002H50.9341C53.0266 40.0002 54.0548 37.4527 52.5485 36.0002L43.0195 26.8114C41.3925 25.2425 38.8157 25.2425 37.1887 26.8114L27.6597 36.0002C26.1534 37.4527 27.1816 40.0002 29.2741 40.0002H33.5999L33.5999 48.0007L33.5999 52.8007C33.5999 53.6844 34.3163 54.4007 35.1999 54.4007H44.7999C45.6836 54.4007 46.3999 53.6844 46.3999 52.8007V48.0007L46.3999 40.0002Z"
            fill="#F2994A"
          />
          <path
            d="M46.3999 40.0002V38.0002C45.8695 38.0002 45.3608 38.2109 44.9857 38.586C44.6107 38.961 44.3999 39.4697 44.3999 40.0002H46.3999ZM52.5485 36.0002L51.1603 37.4399L52.5485 36.0002ZM43.0195 26.8114L41.6312 28.2511L41.6312 28.2511L43.0195 26.8114ZM37.1887 26.8114L38.577 28.2511V28.2511L37.1887 26.8114ZM27.6597 36.0002L26.2714 34.5605L26.2714 34.5605L27.6597 36.0002ZM33.5999 40.0002H35.5999C35.5999 38.8956 34.7045 38.0002 33.5999 38.0002V40.0002ZM33.5999 48.0007H31.5999H33.5999ZM33.5999 52.8007H35.5999H33.5999ZM46.3999 48.0007H48.3999H46.3999ZM50.9341 38.0002H46.3999V42.0002H50.9341V38.0002ZM51.1603 37.4399C51.2341 37.511 51.2528 37.5663 51.26 37.605C51.2693 37.6551 51.2657 37.7232 51.2362 37.7963C51.2067 37.8694 51.162 37.9209 51.1206 37.9505C51.0885 37.9733 51.0367 38.0002 50.9341 38.0002V42.0002C54.826 42.0002 56.7384 37.262 53.9368 34.5605L51.1603 37.4399ZM41.6312 28.2511L51.1603 37.4399L53.9368 34.5605L44.4077 25.3717L41.6312 28.2511ZM38.577 28.2511C39.4292 27.4293 40.779 27.4293 41.6312 28.2511L44.4077 25.3717C42.006 23.0558 38.2022 23.0558 35.8005 25.3717L38.577 28.2511ZM29.0479 37.4399L38.577 28.2511L35.8005 25.3717L26.2714 34.5605L29.0479 37.4399ZM29.2741 38.0002C29.1715 38.0002 29.1197 37.9733 29.0876 37.9505C29.0462 37.9209 29.0015 37.8694 28.972 37.7963C28.9425 37.7232 28.9389 37.6551 28.9482 37.605C28.9554 37.5663 28.9741 37.511 29.0479 37.4399L26.2714 34.5605C23.4698 37.262 25.3822 42.0002 29.2741 42.0002V38.0002ZM33.5999 38.0002H29.2741V42.0002H33.5999V38.0002ZM35.5999 48.0007V40.0002H31.5999L31.5999 48.0007H35.5999ZM35.5999 52.8007L35.5999 48.0007H31.5999L31.5999 52.8007H35.5999ZM35.1999 52.4007C35.4209 52.4007 35.5999 52.5798 35.5999 52.8007H31.5999C31.5999 54.7889 33.2117 56.4007 35.1999 56.4007V52.4007ZM44.7999 52.4007H35.1999V56.4007H44.7999V52.4007ZM44.3999 52.8007C44.3999 52.5798 44.579 52.4007 44.7999 52.4007V56.4007C46.7882 56.4007 48.3999 54.7889 48.3999 52.8007H44.3999ZM44.3999 48.0007V52.8007H48.3999V48.0007H44.3999ZM44.3999 40.0002L44.3999 48.0007H48.3999L48.3999 40.0002H44.3999Z"
            fill="#F2994A"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M16 18C16 16.8954 16.8954 16 18 16H62C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64H18C16.8954 64 16 63.1046 16 62V18Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46.4 39.9998H50.9342C53.0267 39.9998 54.0549 37.4523 52.5486 35.9998L43.0195 26.8111C41.3926 25.2422 38.8158 25.2422 37.1888 26.8111L27.6597 35.9998C26.1534 37.4523 27.1816 39.9998 29.2741 39.9998H33.6V52.8004C33.6 53.684 34.3163 54.4004 35.2 54.4004H44.8C45.6837 54.4004 46.4 53.684 46.4 52.8004V39.9998Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16 18C16 16.8954 16.8954 16 18 16H62C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64H18C16.8954 64 16 63.1046 16 62V18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46.4 39.9998H50.9342C53.0267 39.9998 54.0549 37.4523 52.5486 35.9998L43.0195 26.8111C41.3926 25.2422 38.8158 25.2422 37.1888 26.8111L27.6597 35.9998C26.1534 37.4523 27.1816 39.9998 29.2741 39.9998H33.6V52.8004C33.6 53.684 34.3163 54.4004 35.2 54.4004H44.8C45.6837 54.4004 46.4 53.684 46.4 52.8004V39.9998Z"
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
            d="M44.4078 25.3714C42.0061 23.0554 38.2023 23.0554 35.8005 25.3714L26.2714 34.5601C23.4699 37.2616 25.3822 41.9998 29.2741 41.9998H31.6L31.6 52.8004C31.6 54.7886 33.2118 56.4004 35.2 56.4004L44.8 56.4004C46.7882 56.4004 48.4 54.7886 48.4 52.8004V41.9998H50.9342C54.8261 41.9998 56.7384 37.2616 53.9369 34.5601L44.4078 25.3714ZM38.5771 28.2507C39.4293 27.429 40.779 27.429 41.6313 28.2507L51.1603 37.4395C51.2342 37.5107 51.2528 37.566 51.2601 37.6047C51.2694 37.6547 51.2658 37.7229 51.2363 37.7959C51.2068 37.869 51.1621 37.9206 51.1206 37.9501C51.0886 37.973 51.0367 37.9998 50.9342 37.9998L46.4 37.9998C45.2954 37.9998 44.4 38.8952 44.4 39.9998L44.4 52.4004L35.6 52.4004L35.6 39.9998C35.6 38.8952 34.7046 37.9998 33.6 37.9998H29.2741C29.1716 37.9998 29.1198 37.973 29.0877 37.9501C29.0462 37.9206 29.0015 37.869 28.972 37.7959C28.9425 37.7229 28.9389 37.6547 28.9483 37.6047C28.9555 37.566 28.9742 37.5107 29.048 37.4395L38.5771 28.2507Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 14C15.7909 14 14 15.7909 14 18L14 62C14 64.2091 15.7909 66 18 66H62C64.2091 66 66 64.2091 66 62V18C66 15.7909 64.2091 14 62 14L18 14ZM18 18L62 18L62 62L18 62L18 18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreArrowSolidSquare = forwardRef((props, ref) => {
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

CoreArrowSolidSquare.displayName = 'CoreArrowSolidSquare'

export default CoreArrowSolidSquare
