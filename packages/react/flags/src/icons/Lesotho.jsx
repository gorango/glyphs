
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0Pd3H)"><path d="M120 40H0V80H120V40Z" fill="#219653"/><path d="M120 0H0V40H120V0Z" fill="#2F80ED"/><path d="M120 40H0" stroke="#F2F2F2" stroke-width="40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M59.9999 24.75C60.5522 24.75 60.9999 25.1977 60.9999 25.75V26.344C63.9501 26.9075 65.9999 29.9264 65.9999 33.25C65.9999 36.0099 64.5865 38.5596 62.4178 39.6679L72.7278 49.9779C69.3522 53.3536 64.7738 55.25 59.9999 55.25C55.226 55.25 50.6476 53.3536 47.272 49.9779L57.582 39.6679C55.4133 38.5596 53.9999 36.0099 53.9999 33.25C53.9999 29.9264 56.0497 26.9075 58.9999 26.344V25.75C58.9999 25.1977 59.4476 24.75 59.9999 24.75ZM58.9999 28.414C57.3605 28.9561 55.9999 30.7967 55.9999 33.25C55.9999 35.7033 57.3605 37.5439 58.9999 38.086V34.25C58.4476 34.25 57.9999 33.8023 57.9999 33.25C57.9999 32.6977 58.4476 32.25 58.9999 32.25V28.414ZM60.9999 38.086C62.6393 37.5439 63.9999 35.7033 63.9999 33.25C63.9999 30.7967 62.6393 28.9561 60.9999 28.414V32.25C61.5522 32.25 61.9999 32.6977 61.9999 33.25C61.9999 33.8023 61.5522 34.25 60.9999 34.25V38.086Z" fill="#333333"/></g>
          <defs><clipPath id="clip0Pd3H"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0sS8k)"><path d="M80 40H0V80H80V40Z" fill="#219653"/><path d="M80 0H0V40H80V0Z" fill="#2F80ED"/><path d="M80 40H0" stroke="#F2F2F2" stroke-width="40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39.9999 24.75C40.5522 24.75 40.9999 25.1977 40.9999 25.75V26.344C43.9501 26.9075 45.9999 29.9264 45.9999 33.25C45.9999 36.0099 44.5865 38.5596 42.4178 39.6679L52.7278 49.9779C49.3522 53.3536 44.7738 55.25 39.9999 55.25C35.226 55.25 30.6476 53.3536 27.272 49.9779L37.582 39.6679C35.4133 38.5596 33.9999 36.0099 33.9999 33.25C33.9999 29.9264 36.0497 26.9075 38.9999 26.344V25.75C38.9999 25.1977 39.4476 24.75 39.9999 24.75ZM38.9999 28.414C37.3605 28.9561 35.9999 30.7967 35.9999 33.25C35.9999 35.7033 37.3605 37.5439 38.9999 38.086V34.25C38.4476 34.25 37.9999 33.8023 37.9999 33.25C37.9999 32.6977 38.4476 32.25 38.9999 32.25V28.414ZM40.9999 38.086C42.6393 37.5439 43.9999 35.7033 43.9999 33.25C43.9999 30.7967 42.6393 28.9561 40.9999 28.414V32.25C41.5522 32.25 41.9999 32.6977 41.9999 33.25C41.9999 33.8023 41.5522 34.25 40.9999 34.25V38.086Z" fill="#333333"/></g>
          <defs><clipPath id="clip0sS8k"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask02RAj" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask02RAj)"><g clip-path="url(#clip02RAj)"><path d="M80 40H0V80H80V40Z" fill="#219653"/><path d="M80 0H0V40H80V0Z" fill="#2F80ED"/><path d="M80 40H0" stroke="#F2F2F2" stroke-width="40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39.9999 24.75C40.5522 24.75 40.9999 25.1977 40.9999 25.75V26.344C43.9501 26.9075 45.9999 29.9264 45.9999 33.25C45.9999 36.0099 44.5865 38.5596 42.4178 39.6679L52.7278 49.9779C49.3522 53.3536 44.7738 55.25 39.9999 55.25C35.226 55.25 30.6476 53.3536 27.272 49.9779L37.582 39.6679C35.4133 38.5596 33.9999 36.0099 33.9999 33.25C33.9999 29.9264 36.0497 26.9075 38.9999 26.344V25.75C38.9999 25.1977 39.4476 24.75 39.9999 24.75ZM38.9999 28.414C37.3605 28.9561 35.9999 30.7967 35.9999 33.25C35.9999 35.7033 37.3605 37.5439 38.9999 38.086V34.25C38.4476 34.25 37.9999 33.8023 37.9999 33.25C37.9999 32.6977 38.4476 32.25 38.9999 32.25V28.414ZM40.9999 38.086C42.6393 37.5439 43.9999 35.7033 43.9999 33.25C43.9999 30.7967 42.6393 28.9561 40.9999 28.414V32.25C41.5522 32.25 41.9999 32.6977 41.9999 33.25C41.9999 33.8023 41.5522 34.25 40.9999 34.25V38.086Z" fill="#333333"/></g></g>
          <defs><clipPath id="clip02RAj"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsLesotho = forwardRef((props, ref) => {
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

FlagsLesotho.displayName = 'FlagsLesotho'

export default FlagsLesotho
