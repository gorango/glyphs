
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M24 16H22.8399C18.1069 16 14.4087 20.0865 14.8796 24.796L15.4514 30.5141C15.7817 33.8172 14.0379 36.9811 11.0688 38.4656L8 40L11.0688 41.5344C14.0379 43.0189 15.7817 46.1828 15.4514 49.4859L14.8796 55.204C14.4087 59.9135 18.1069 64 22.8399 64H24"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56 16H57.1601C61.8931 16 65.5913 20.0865 65.1204 24.796L64.5486 30.5141C64.2183 33.8172 65.9621 36.9811 68.9312 38.4656L72 40L68.9312 41.5344C65.9621 43.0189 64.2183 46.1828 64.5486 49.4859L65.1204 55.204C65.5913 59.9135 61.8931 64 57.1601 64H56"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27.7852 40H28.2852"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.7852 40H40.2852"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M51.7852 40H52.2852"
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
            d="M24 16H23.8172H22.8399C18.1069 16 14.4087 20.0865 14.8796 24.796L15.4514 30.5141C15.7817 33.8172 14.0379 36.9811 11.0688 38.4656L8 40L11.0688 41.5344C14.0379 43.0189 15.7817 46.1828 15.4514 49.4859L14.8796 55.204C14.4087 59.9135 18.1069 64 22.8399 64H23.8172H24"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56 16H56.1828H57.1601C61.8931 16 65.5913 20.0865 65.1204 24.796L64.5486 30.5141C64.2183 33.8172 65.9621 36.9811 68.9312 38.4656L72 40L68.9312 41.5344C65.9621 43.0189 64.2183 46.1828 64.5486 49.4859L65.1204 55.204C65.5913 59.9135 61.8931 64 57.1601 64H56.1828H56"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27.7852 40H28.2852"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.7852 40H40.2852"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M51.7852 40H52.2852"
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
            d="M24 16H23.8172H22.8399C18.1069 16 14.4087 20.0865 14.8796 24.796L15.4514 30.5141C15.7817 33.8172 14.0379 36.9811 11.0688 38.4656L8 40L11.0688 41.5344C14.0379 43.0189 15.7817 46.1828 15.4514 49.4859L14.8796 55.204C14.4087 59.9135 18.1069 64 22.8399 64H23.8172H24"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56 16H56.1828H57.1601C61.8931 16 65.5913 20.0865 65.1204 24.796L64.5486 30.5141C64.2183 33.8172 65.9621 36.9811 68.9312 38.4656L72 40L68.9312 41.5344C65.9621 43.0189 64.2183 46.1828 64.5486 49.4859L65.1204 55.204C65.5913 59.9135 61.8931 64 57.1601 64H56.1828H56"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27.7852 40H28.2852"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.7852 40H40.2852"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M51.7852 40H52.2852"
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
            d="M24 16H22.8399C18.1069 16 14.4087 20.0865 14.8796 24.796L15.4514 30.5141C15.7817 33.8172 14.0379 36.9811 11.0688 38.4656L8 40L11.0688 41.5344C14.0379 43.0189 15.7817 46.1828 15.4514 49.4859L14.8796 55.204C14.4087 59.9135 18.1069 64 22.8399 64H24M56 16H57.1601C61.8931 16 65.5913 20.0865 65.1204 24.796L64.5486 30.5141C64.2183 33.8172 65.9621 36.9811 68.9312 38.4656L72 40L68.9312 41.5344C65.9621 43.0189 64.2183 46.1828 64.5486 49.4859L65.1204 55.204C65.5913 59.9135 61.8931 64 57.1601 64H56M27.7852 40H28.2852M39.7852 40H40.2852M51.7852 40H52.2852"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            d="M22.8399 18C19.2902 18 16.5165 21.0649 16.8697 24.597L17.4415 30.3151C17.8364 34.264 15.8597 38.0537 12.4397 40C15.8597 41.9463 17.8364 45.736 17.4415 49.6849L16.8697 55.403C16.5165 58.9351 19.2902 62 22.8399 62H24C25.1046 62 26 62.8954 26 64C26 65.1046 25.1046 66 24 66H22.8399C16.9237 66 12.3008 60.8918 12.8895 55.005L13.4613 49.2869C13.7091 46.8096 12.4012 44.4367 10.1744 43.3233L7.10557 41.7889C6.428 41.4501 6 40.7575 6 40C6 39.2425 6.428 38.5499 7.10557 38.2111L10.1744 36.6767C12.4012 35.5633 13.7091 33.1904 13.4613 30.7131L12.8895 24.995C12.3008 19.1082 16.9237 14 22.8399 14H24C25.1046 14 26 14.8954 26 16C26 17.1046 25.1046 18 24 18H22.8399Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M57.1601 18C60.7098 18 63.4835 21.0649 63.1303 24.597L62.5585 30.3151C62.1636 34.264 64.1403 38.0537 67.5603 40C64.1403 41.9463 62.1636 45.736 62.5585 49.6849L63.1303 55.403C63.4835 58.9351 60.7098 62 57.1601 62H56C54.8954 62 54 62.8954 54 64C54 65.1046 54.8954 66 56 66H57.1601C63.0763 66 67.6992 60.8918 67.1105 55.005L66.5387 49.2869C66.2909 46.8096 67.5988 44.4367 69.8256 43.3233L72.8944 41.7889C73.572 41.4501 74 40.7575 74 40C74 39.2425 73.572 38.5499 72.8944 38.2111L69.8256 36.6767C67.5988 35.5633 66.2909 33.1904 66.5387 30.7131L67.1105 24.995C67.6992 19.1082 63.0763 14 57.1601 14H56C54.8954 14 54 14.8954 54 16C54 17.1046 54.8954 18 56 18H57.1601Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27.7852 38C26.6806 38 25.7852 38.8954 25.7852 40C25.7852 41.1046 26.6806 42 27.7852 42H28.2852C29.3897 42 30.2852 41.1046 30.2852 40C30.2852 38.8954 29.3897 38 28.2852 38H27.7852Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.7852 40C37.7852 38.8954 38.6806 38 39.7852 38H40.2852C41.3897 38 42.2852 38.8954 42.2852 40C42.2852 41.1046 41.3897 42 40.2852 42H39.7852C38.6806 42 37.7852 41.1046 37.7852 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M51.7852 38C50.6806 38 49.7852 38.8954 49.7852 40C49.7852 41.1046 50.6806 42 51.7852 42H52.2852C53.3897 42 54.2852 41.1046 54.2852 40C54.2852 38.8954 53.3897 38 52.2852 38H51.7852Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreDocs1 = forwardRef((props, ref) => {
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

CoreDocs1.displayName = 'CoreDocs1'

export default CoreDocs1
