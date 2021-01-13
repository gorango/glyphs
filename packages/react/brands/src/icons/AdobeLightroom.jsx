
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <rect
            x="6.25"
            y="6.25"
            width="67.5"
            height="67.5"
            fill="#022326"
            stroke="#ADD5EC"
            stroke-width={strokeWidth}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.392 57.4683C25.0784 57.4683 25 57.3098 25 56.9928V22.9121C25 22.6585 25.0784 22.5 25.3136 22.5H29.4425C29.6516 22.5 29.7038 22.5951 29.7038 22.8804V52.2373H40.4704C40.6794 52.2373 40.7578 52.3324 40.7056 52.6178L40.0523 57.1196C40 57.3732 39.8693 57.5 39.6603 57.5L25.392 57.4683ZM44.8606 33.8496C44.8606 33.596 44.9129 33.5326 45.0697 33.4375C46.6638 32.6449 50.453 31.25 54.6864 31.25C54.8955 31.25 55 31.3134 55 31.567V36.1322C55 36.3859 54.9216 36.4493 54.6864 36.4493C53.0401 36.3542 50.6098 36.6078 49.6951 37.0833V57.0879C49.6951 57.3415 49.6167 57.4683 49.3815 57.4683H45.2787C45.0697 57.4683 44.9652 57.3732 44.9652 57.0879L44.8606 33.8496Z"
            fill="#ADD5EC"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M75 5H5V75H75V5ZM25 56.9928C25 57.3098 25.0784 57.4683 25.392 57.4683L39.6603 57.5C39.8693 57.5 40 57.3732 40.0523 57.1196L40.7056 52.6178C40.7578 52.3324 40.6794 52.2373 40.4704 52.2373H29.7038V22.8804C29.7038 22.5951 29.6516 22.5 29.4425 22.5H25.3136C25.0784 22.5 25 22.6585 25 22.9121V56.9928ZM45.0697 33.4375C44.9129 33.5326 44.8606 33.596 44.8606 33.8496L44.9652 57.0879C44.9652 57.3732 45.0697 57.4683 45.2787 57.4683H49.3815C49.6167 57.4683 49.6951 57.3415 49.6951 57.0879V37.0833C50.6098 36.6078 53.0401 36.3542 54.6864 36.4493C54.9216 36.4493 55 36.3859 55 36.1322V31.567C55 31.3134 54.8955 31.25 54.6864 31.25C50.453 31.25 46.6638 32.6449 45.0697 33.4375Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M5 5H75V75H5V5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.392 57.4683C25.0784 57.4683 25 57.3098 25 56.9928V22.9121C25 22.6585 25.0784 22.5 25.3136 22.5H29.4425C29.6516 22.5 29.7038 22.5951 29.7038 22.8804V52.2373H40.4704C40.6794 52.2373 40.7578 52.3324 40.7056 52.6178L40.0523 57.1196C40 57.3732 39.8693 57.5 39.6603 57.5L25.392 57.4683ZM44.8606 33.8496C44.8606 33.596 44.9129 33.5326 45.0697 33.4375C46.6638 32.6449 50.453 31.25 54.6864 31.25C54.8955 31.25 55 31.3134 55 31.567V36.1322C55 36.3859 54.9216 36.4493 54.6864 36.4493C53.0401 36.3542 50.6098 36.6078 49.6951 37.0833V57.0879C49.6951 57.3415 49.6167 57.4683 49.3815 57.4683H45.2787C45.0697 57.4683 44.9652 57.3732 44.9652 57.0879L44.8606 33.8496Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsAdobeLightroom = forwardRef((props, ref) => {
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

BrandsAdobeLightroom.displayName = 'BrandsAdobeLightroom'

export default BrandsAdobeLightroom
