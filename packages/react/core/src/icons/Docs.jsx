
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M20 16H19.6667C13.2233 16 8 21.2233 8 27.6667V52.3333C8 58.7767 13.2233 64 19.6667 64H20"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 16H34.8399C30.1069 16 26.4087 20.0865 26.8796 24.796L27.4514 30.5141C27.7817 33.8172 26.0379 36.9811 23.0688 38.4656L20 40L23.0688 41.5344C26.0379 43.0189 27.7817 46.1828 27.4514 49.4859L26.8796 55.204C26.4087 59.9135 30.1069 64 34.8399 64H36"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 16H45.1601C49.8931 16 53.5913 20.0865 53.1204 24.796L52.5486 30.5141C52.2183 33.8172 53.9621 36.9811 56.9312 38.4656L60 40L56.9312 41.5344C53.9621 43.0189 52.2183 46.1828 52.5486 49.4859L53.1204 55.204C53.5913 59.9135 49.8931 64 45.1601 64H44"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M60 16H60.3333C66.7767 16 72 21.2233 72 27.6667V52.3333C72 58.7767 66.7767 64 60.3333 64H60"
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
            d="M20 16H19.6667V16C13.2233 16 8 21.2233 8 27.6667L8 52.3333C8 58.7767 13.2233 64 19.6667 64V64H20"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M60 16H60.3333V16C66.7767 16 72 21.2233 72 27.6667V52.3333C72 58.7767 66.7767 64 60.3333 64V64H60"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 16H35.8172H34.8399C30.1069 16 26.4087 20.0865 26.8796 24.796L27.4514 30.5141C27.7817 33.8172 26.0379 36.9811 23.0688 38.4656L20 40L23.0688 41.5344C26.0379 43.0189 27.7817 46.1828 27.4514 49.4859L26.8796 55.204C26.4087 59.9135 30.1069 64 34.8399 64H35.8172H36"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 16H44.1828H45.1601C49.8931 16 53.5913 20.0865 53.1204 24.796L52.5486 30.5141C52.2183 33.8172 53.9621 36.9811 56.9312 38.4656L60 40L56.9312 41.5344C53.9621 43.0189 52.2183 46.1828 52.5486 49.4859L53.1204 55.204C53.5913 59.9135 49.8931 64 45.1601 64H44.1828H44"
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
            d="M20 16H19.6667V16C13.2233 16 8 21.2233 8 27.6667L8 52.3333C8 58.7767 13.2233 64 19.6667 64V64H20"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M60 16H60.3333V16C66.7767 16 72 21.2233 72 27.6667V52.3333C72 58.7767 66.7767 64 60.3333 64V64H60"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 16H35.8172H34.8399C30.1069 16 26.4087 20.0865 26.8796 24.796L27.4514 30.5141C27.7817 33.8172 26.0379 36.9811 23.0688 38.4656L20 40L23.0688 41.5344C26.0379 43.0189 27.7817 46.1828 27.4514 49.4859L26.8796 55.204C26.4087 59.9135 30.1069 64 34.8399 64H35.8172H36"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 16H44.1828H45.1601C49.8931 16 53.5913 20.0865 53.1204 24.796L52.5486 30.5141C52.2183 33.8172 53.9621 36.9811 56.9312 38.4656L60 40L56.9312 41.5344C53.9621 43.0189 52.2183 46.1828 52.5486 49.4859L53.1204 55.204C53.5913 59.9135 49.8931 64 45.1601 64H44.1828H44"
            stroke="#9B51E0"
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
            d="M20 16H19.6667C13.2233 16 8 21.2233 8 27.6667V52.3333C8 58.7767 13.2233 64 19.6667 64H20M60 16H60.3333C66.7767 16 72 21.2233 72 27.6667V52.3333C72 58.7767 66.7767 64 60.3333 64H60M36 16H34.8399C30.1069 16 26.4087 20.0865 26.8796 24.796L27.4514 30.5141C27.7817 33.8172 26.0379 36.9811 23.0688 38.4656L20 40L23.0688 41.5344C26.0379 43.0189 27.7817 46.1828 27.4514 49.4859L26.8796 55.204C26.4087 59.9135 30.1069 64 34.8399 64H36M44 16H45.1601C49.8931 16 53.5913 20.0865 53.1204 24.796L52.5486 30.5141C52.2183 33.8172 53.9621 36.9811 56.9312 38.4656L60 40L56.9312 41.5344C53.9621 43.0189 52.2183 46.1828 52.5486 49.4859L53.1204 55.204C53.5913 59.9135 49.8931 64 45.1601 64H44"
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
            d="M10 27.6667C10 22.3279 14.3279 18 19.6667 18H20C21.1046 18 22 17.1046 22 16C22 14.8954 21.1046 14 20 14H19.6667C12.1188 14 6 20.1188 6 27.6667V52.3333C6 59.8812 12.1188 66 19.6667 66H20C21.1046 66 22 65.1046 22 64C22 62.8954 21.1046 62 20 62H19.6667C14.3279 62 10 57.6721 10 52.3333V27.6667Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34.8399 18C31.2902 18 28.5165 21.0649 28.8697 24.597L29.4415 30.3151C29.8364 34.264 27.8597 38.0537 24.4397 40C27.8597 41.9463 29.8364 45.736 29.4415 49.6849L28.8697 55.403C28.5165 58.9351 31.2902 62 34.8399 62H36C37.1046 62 38 62.8954 38 64C38 65.1046 37.1046 66 36 66H34.8399C28.9237 66 24.3008 60.8918 24.8895 55.005L25.4613 49.2869C25.7091 46.8096 24.4012 44.4367 22.1744 43.3233L19.1056 41.7889C18.428 41.4501 18 40.7575 18 40C18 39.2425 18.428 38.5499 19.1056 38.2111L22.1744 36.6767C24.4012 35.5633 25.7091 33.1904 25.4613 30.7131L24.8895 24.995C24.3008 19.1082 28.9237 14 34.8399 14H36C37.1046 14 38 14.8954 38 16C38 17.1046 37.1046 18 36 18H34.8399Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M51.1303 24.597C51.4835 21.0649 48.7098 18 45.1601 18H44C42.8954 18 42 17.1046 42 16C42 14.8954 42.8954 14 44 14H45.1601C51.0763 14 55.6992 19.1082 55.1105 24.995L54.5387 30.7131C54.2909 33.1904 55.5988 35.5633 57.8256 36.6767L60.8944 38.2111C61.572 38.5499 62 39.2425 62 40C62 40.7575 61.572 41.4501 60.8944 41.7889L57.8256 43.3233C55.5988 44.4367 54.2909 46.8096 54.5387 49.2869L55.1105 55.005C55.6992 60.8918 51.0763 66 45.1601 66H44C42.8954 66 42 65.1046 42 64C42 62.8954 42.8954 62 44 62H45.1601C48.7098 62 51.4835 58.9351 51.1303 55.403L50.5585 49.6849C50.1636 45.736 52.1403 41.9463 55.5603 40C52.1403 38.0537 50.1636 34.264 50.5585 30.3151L51.1303 24.597Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M70 27.6667C70 22.3279 65.6721 18 60.3333 18H60C58.8954 18 58 17.1046 58 16C58 14.8954 58.8954 14 60 14H60.3333C67.8812 14 74 20.1188 74 27.6667V52.3333C74 59.8812 67.8812 66 60.3333 66H60C58.8954 66 58 65.1046 58 64C58 62.8954 58.8954 62 60 62H60.3333C65.6721 62 70 57.6721 70 52.3333V27.6667Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreDocs = forwardRef((props, ref) => {
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

CoreDocs.displayName = 'CoreDocs'

export default CoreDocs
