
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0oy1y)"><path d="M120 40H0V80H120V40Z" fill="#219653"/><path d="M120 0H0V40H120V0Z" fill="#EB5757"/><path d="M120 40H0" stroke="#333333" stroke-width="40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M62.7144 27.2039C61.3593 26.741 59.907 26.49 58.3963 26.49C50.9838 26.49 44.9748 32.5341 44.9748 39.99C44.9748 47.4458 50.9838 53.49 58.3963 53.49C59.907 53.49 61.3593 53.239 62.7144 52.7761C60.4448 54.1802 57.7728 54.99 54.9128 54.99C46.6767 54.99 40 48.2743 40 39.99C40 31.7057 46.6767 24.99 54.9128 24.99C57.7728 24.99 60.4448 25.7998 62.7144 27.2039Z" fill="#F2F2F2"/><path d="M66.7253 28.9211L70.452 33.9175L76.5453 32.7127L72.9727 37.8217L75.9948 43.2783L70.0601 41.4395L65.8346 46.0167L65.7393 39.7712L60.1057 37.1434L65.9815 35.1223L66.7253 28.9211Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0oy1y"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0Bc_i)"><path d="M80 40H0V80H80V40Z" fill="#219653"/><path d="M80 0H0V40H80V0Z" fill="#EB5757"/><path d="M80 40H0" stroke="#333333" stroke-width="40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M42.7144 27.2039C41.3593 26.741 39.907 26.49 38.3963 26.49C30.9838 26.49 24.9748 32.5341 24.9748 39.99C24.9748 47.4458 30.9838 53.49 38.3963 53.49C39.907 53.49 41.3593 53.239 42.7144 52.7761C40.4448 54.1802 37.7728 54.99 34.9128 54.99C26.6767 54.99 20 48.2743 20 39.99C20 31.7057 26.6767 24.99 34.9128 24.99C37.7728 24.99 40.4448 25.7998 42.7144 27.2039Z" fill="#F2F2F2"/><path d="M46.7253 28.9211L50.452 33.9175L56.5453 32.7127L52.9727 37.8217L55.9948 43.2783L50.0601 41.4395L45.8346 46.0167L45.7393 39.7712L40.1057 37.1434L45.9815 35.1223L46.7253 28.9211Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0Bc_i"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0cH7m" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0cH7m)"><g clip-path="url(#clip0cH7m)"><path d="M80 40H0V80H80V40Z" fill="#219653"/><path d="M80 0H0V40H80V0Z" fill="#EB5757"/><path d="M80 40H0" stroke="#333333" stroke-width="40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M42.7144 27.2039C41.3593 26.741 39.907 26.49 38.3963 26.49C30.9838 26.49 24.9748 32.5341 24.9748 39.99C24.9748 47.4458 30.9838 53.49 38.3963 53.49C39.907 53.49 41.3593 53.239 42.7144 52.7761C40.4448 54.1802 37.7728 54.99 34.9128 54.99C26.6767 54.99 20 48.2743 20 39.99C20 31.7057 26.6767 24.99 34.9128 24.99C37.7728 24.99 40.4448 25.7998 42.7144 27.2039Z" fill="#F2F2F2"/><path d="M46.7253 28.9211L50.452 33.9175L56.5453 32.7127L52.9727 37.8217L55.9948 43.2783L50.0601 41.4395L45.8346 46.0167L45.7393 39.7712L40.1057 37.1434L45.9815 35.1223L46.7253 28.9211Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0cH7m"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsLibya = forwardRef((props, ref) => {
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

FlagsLibya.displayName = 'FlagsLibya'

export default FlagsLibya
