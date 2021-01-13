
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M48.0001 43.9997H53.6678C56.2835 43.9997 57.5687 40.8153 55.6859 38.9997L43.7745 27.5138C41.7408 25.5527 38.5198 25.5527 36.4861 27.5138L24.5748 38.9997C22.6919 40.8153 23.9771 43.9997 26.5928 43.9997H32.0001L32.0001 59.9997C32.0001 61.1043 32.8955 61.9997 34.0001 61.9997L46.0001 61.9997C47.1047 61.9997 48.0001 61.1043 48.0001 59.9997L48.0001 43.9997Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 16L56 16"
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
            d="M31.9999 43.9997H26.3322C23.7165 43.9997 22.4313 40.8153 24.3141 38.9997L36.2255 27.5138C38.2592 25.5527 41.4802 25.5527 43.5139 27.5138L55.4252 38.9997C57.3081 40.8153 56.0229 43.9997 53.4072 43.9997H47.9999L47.9999 53.9997V59.9997C47.9999 61.1043 47.1045 61.9997 45.9999 61.9997H33.9999C32.8953 61.9997 31.9999 61.1043 31.9999 59.9997L31.9999 53.9997V43.9997Z"
            fill="currentColor"
          />
          <path
            d="M31.9999 43.9997V41.9997C33.1045 41.9997 33.9999 42.8952 33.9999 43.9997H31.9999ZM24.3141 38.9997L25.7024 40.4394L25.7024 40.4394L24.3141 38.9997ZM36.2255 27.5138L37.6138 28.9535V28.9535L36.2255 27.5138ZM43.5139 27.5138L44.9022 26.0741L44.9022 26.0741L43.5139 27.5138ZM55.4252 38.9997L56.8135 37.56L55.4252 38.9997ZM47.9999 43.9997H45.9999C45.9999 42.8952 46.8953 41.9997 47.9999 41.9997V43.9997ZM47.9999 53.9997H45.9999H47.9999ZM31.9999 59.9997H29.9999H31.9999ZM31.9999 53.9997H33.9999H31.9999ZM26.3322 41.9997H31.9999V45.9997H26.3322V41.9997ZM25.7024 40.4394C25.1148 41.006 25.5159 41.9997 26.3322 41.9997V45.9997C21.9171 45.9997 19.7477 40.6247 22.9259 37.56L25.7024 40.4394ZM37.6138 28.9535L25.7024 40.4394L22.9259 37.56L34.8372 26.0741L37.6138 28.9535ZM42.1256 28.9535C40.8667 27.7395 38.8727 27.7395 37.6138 28.9535L34.8372 26.0741C37.6457 23.3659 42.0937 23.3659 44.9022 26.0741L42.1256 28.9535ZM54.037 40.4394L42.1256 28.9535L44.9022 26.0741L56.8135 37.56L54.037 40.4394ZM53.4072 41.9997C54.2235 41.9997 54.6245 41.006 54.037 40.4394L56.8135 37.56C59.9916 40.6247 57.8223 45.9997 53.4072 45.9997V41.9997ZM47.9999 41.9997H53.4072V45.9997H47.9999V41.9997ZM45.9999 53.9997L45.9999 43.9997H49.9999L49.9999 53.9997H45.9999ZM45.9999 59.9997V53.9997H49.9999V59.9997H45.9999ZM45.9999 59.9997H49.9999C49.9999 62.2089 48.209 63.9997 45.9999 63.9997V59.9997ZM33.9999 59.9997H45.9999V63.9997H33.9999V59.9997ZM33.9999 59.9997H33.9999V63.9997C31.7908 63.9997 29.9999 62.2089 29.9999 59.9997H33.9999ZM33.9999 53.9997L33.9999 59.9997H29.9999L29.9999 53.9997H33.9999ZM33.9999 43.9997V53.9997H29.9999V43.9997H33.9999Z"
            fill="currentColor"
          />
          <path
            d="M56 16H24"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.9999 43.9997H26.3322C23.7165 43.9997 22.4313 40.8153 24.3141 38.9997L36.2255 27.5138C38.2592 25.5527 41.4802 25.5527 43.5139 27.5138L55.4252 38.9997C57.3081 40.8153 56.0229 43.9997 53.4072 43.9997H47.9999L47.9999 53.9997V59.9997C47.9999 61.1043 47.1045 61.9997 45.9999 61.9997H33.9999C32.8953 61.9997 31.9999 61.1043 31.9999 59.9997L31.9999 53.9997V43.9997Z"
            fill="#56CCF2"
          />
          <path
            d="M31.9999 43.9997V41.9997C33.1045 41.9997 33.9999 42.8952 33.9999 43.9997H31.9999ZM24.3141 38.9997L25.7024 40.4394V40.4394L24.3141 38.9997ZM36.2255 27.5138L37.6138 28.9535V28.9535L36.2255 27.5138ZM43.5139 27.5138L44.9022 26.0741V26.0741L43.5139 27.5138ZM55.4252 38.9997L56.8135 37.56L55.4252 38.9997ZM47.9999 43.9997H45.9999C45.9999 42.8952 46.8953 41.9997 47.9999 41.9997V43.9997ZM47.9999 53.9997H45.9999H47.9999ZM31.9999 59.9997H29.9999H31.9999ZM31.9999 53.9997H33.9999H31.9999ZM26.3322 41.9997H31.9999V45.9997H26.3322V41.9997ZM25.7024 40.4394C25.1148 41.006 25.5159 41.9997 26.3322 41.9997V45.9997C21.9171 45.9997 19.7477 40.6247 22.9259 37.56L25.7024 40.4394ZM37.6138 28.9535L25.7024 40.4394L22.9259 37.56L34.8372 26.0741L37.6138 28.9535ZM42.1256 28.9535C40.8667 27.7395 38.8727 27.7395 37.6138 28.9535L34.8372 26.0741C37.6457 23.3659 42.0937 23.3659 44.9022 26.0741L42.1256 28.9535ZM54.037 40.4394L42.1256 28.9535L44.9022 26.0741L56.8135 37.56L54.037 40.4394ZM53.4072 41.9997C54.2235 41.9997 54.6245 41.006 54.037 40.4394L56.8135 37.56C59.9916 40.6247 57.8223 45.9997 53.4072 45.9997V41.9997ZM47.9999 41.9997H53.4072V45.9997H47.9999V41.9997ZM45.9999 53.9997L45.9999 43.9997H49.9999L49.9999 53.9997H45.9999ZM45.9999 59.9997V53.9997H49.9999V59.9997H45.9999ZM45.9999 59.9997H49.9999C49.9999 62.2089 48.209 63.9997 45.9999 63.9997V59.9997ZM33.9999 59.9997H45.9999V63.9997H33.9999V59.9997ZM33.9999 59.9997H33.9999V63.9997C31.7908 63.9997 29.9999 62.2089 29.9999 59.9997H33.9999ZM33.9999 53.9997L33.9999 59.9997H29.9999L29.9999 53.9997H33.9999ZM33.9999 43.9997V53.9997H29.9999V43.9997H33.9999Z"
            fill="#56CCF2"
          />
          <path
            d="M56 16H24"
            stroke="#56CCF2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M26.3323 44L53.4074 44C56.023 44 57.3083 40.8156 55.4254 39L43.5141 27.5141C41.4803 25.553 38.2594 25.553 36.2256 27.5141L24.3143 39C22.4314 40.8156 23.7167 44 26.3323 44Z"
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
            d="M48.0001 44H53.6678C56.2835 44 57.5687 40.8156 55.6859 39L43.7745 27.5141C41.7408 25.553 38.5198 25.553 36.4861 27.5141L24.5748 39C22.6919 40.8156 23.9771 44 26.5928 44H32.0001L32.0001 60C32.0001 61.1046 32.8955 62 34.0001 62L46.0001 62C47.1047 62 48.0001 61.1046 48.0001 60L48.0001 44Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24.0001 16H56.0001M53.6678 44H48.0001L48.0001 60C48.0001 61.1046 47.1047 62 46.0001 62L34.0001 62C32.8955 62 32.0001 61.1046 32.0001 60L32.0001 44H26.5928C23.9771 44 22.6919 40.8156 24.5748 39L36.4861 27.5141C38.5198 25.553 41.7408 25.553 43.7745 27.5141L55.6859 39C57.5687 40.8156 56.2835 44 53.6678 44Z"
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
            d="M56.13 14.5C57.5108 14.5 58.63 15.6193 58.63 17C58.63 18.3807 57.5108 19.5 56.13 19.5L24.13 19.5C22.7493 19.5 21.63 18.3807 21.63 17C21.63 15.6193 22.7493 14.5 24.13 14.5L56.13 14.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.6203 26.7145C37.6224 23.8195 42.3772 23.8195 45.3794 26.7144L57.2907 38.2004C60.7927 41.5773 58.4023 47.5 53.5374 47.5H50.63L50.63 61C50.63 63.4853 48.6153 65.5 46.13 65.5H34.13C31.6448 65.5 29.63 63.4853 29.63 61L29.63 47.5H26.4623C21.5974 47.5 19.207 41.5773 22.7089 38.2004L34.6203 26.7145ZM41.9087 30.3137C40.8434 29.2864 39.1563 29.2864 38.091 30.3137L26.1796 41.7996C26.0874 41.8886 26.064 41.9577 26.055 42.0061C26.0433 42.0686 26.0478 42.1538 26.0847 42.2452C26.1215 42.3365 26.1774 42.401 26.2293 42.4379C26.2694 42.4665 26.3341 42.5 26.4623 42.5H32.13C33.5108 42.5 34.63 43.6193 34.63 45L34.63 60.5L45.63 60.5L45.63 45C45.63 43.6193 46.7493 42.5 48.13 42.5H53.5374C53.6656 42.5 53.7303 42.4665 53.7704 42.4379C53.8223 42.401 53.8781 42.3365 53.915 42.2452C53.9519 42.1538 53.9564 42.0686 53.9447 42.0061C53.9357 41.9577 53.9123 41.8886 53.8201 41.7996L41.9087 30.3137Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreArrowSolidLineEnd = forwardRef((props, ref) => {
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

CoreArrowSolidLineEnd.displayName = 'CoreArrowSolidLineEnd'

export default CoreArrowSolidLineEnd
