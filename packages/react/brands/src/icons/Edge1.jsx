
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M25.4589 33.59H50.245C50.245 24.7903 46.4053 18.7909 35.9359 18.7909C23.5634 18.7908 10.9815 26.8453 5 36.8882C6.85276 19.4567 19.3513 5.3833 38.1681 5.3833C54.2964 5.3833 69.5771 17.7146 69.5771 38.2132V46.0066H25.591C25.591 56.6139 34.8443 60.8167 44.5356 60.8167C56.3293 60.8167 63.633 55.517 63.633 55.517V70.3751C63.633 70.3751 55.3881 75.3833 42.2461 75.3833C25.168 75.3833 13.1129 63.144 13.1129 47.9242C13.1129 35.9779 20.3391 26.4398 30.3482 22.5041C25.4761 27.855 25.4589 33.59 25.4589 33.59H25.4589Z"
            fill="#137AD4"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M25.4589 33.59H50.245C50.245 24.7903 46.4053 18.7909 35.9359 18.7909C23.5634 18.7908 10.9815 26.8453 5 36.8882C6.85276 19.4567 19.3513 5.3833 38.1681 5.3833C54.2964 5.3833 69.5771 17.7146 69.5771 38.2132V46.0066H25.591C25.591 56.6139 34.8443 60.8167 44.5356 60.8167C56.3293 60.8167 63.633 55.517 63.633 55.517V70.3751C63.633 70.3751 55.3881 75.3833 42.2461 75.3833C25.168 75.3833 13.1129 63.144 13.1129 47.9242C13.1129 35.9779 20.3391 26.4398 30.3482 22.5041C25.4761 27.855 25.4589 33.59 25.4589 33.59Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M25.4589 33.59H50.245C50.245 24.7903 46.4053 18.7909 35.9359 18.7909C23.5634 18.7908 10.9815 26.8453 5 36.8882C6.85276 19.4567 19.3513 5.3833 38.1681 5.3833C54.2964 5.3833 69.5771 17.7146 69.5771 38.2132V46.0066H25.591C25.591 56.6139 34.8443 60.8167 44.5356 60.8167C56.3293 60.8167 63.633 55.517 63.633 55.517V70.3751C63.633 70.3751 55.3881 75.3833 42.2461 75.3833C25.168 75.3833 13.1129 63.144 13.1129 47.9242C13.1129 35.9779 20.3391 26.4398 30.3482 22.5041C25.4761 27.855 25.4589 33.59 25.4589 33.59Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsEdge1 = forwardRef((props, ref) => {
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

BrandsEdge1.displayName = 'BrandsEdge1'

export default BrandsEdge1
