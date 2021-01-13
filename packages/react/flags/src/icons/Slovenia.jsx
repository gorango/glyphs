
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0qSUF)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 0H0V26.6667H120V0Z" fill="#F2F2F2"/><path opacity="0.9" d="M120 53.3333H0V79.9999H120V53.3333Z" fill="#EB5757"/><path d="M20 15H40V26.853C40 30.5656 37.7397 33.9041 34.2926 35.2829L30 37L25.7074 35.283C22.2603 33.9041 20 30.5656 20 26.853V15Z" fill="#2F80ED"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40 25.5398V26.8529C40 30.5655 37.7397 33.9041 34.2926 35.2829L30 37L25.7074 35.2829C22.2603 33.9041 20 30.5655 20 26.8529V25.5403L23.7498 28.5172L30 23.5554L36.2499 28.5169L40 25.5398Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0qSUF"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0UMcy)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2F2F2"/><path opacity="0.9" d="M80 53.3334H0V80H80V53.3334Z" fill="#EB5757"/><path d="M20 15H40V26.853C40 30.5656 37.7397 33.9041 34.2926 35.2829L30 37L25.7074 35.283C22.2603 33.9041 20 30.5656 20 26.853V15Z" fill="#2F80ED"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40 25.5397V26.8528C40 30.5654 37.7397 33.904 34.2926 35.2828L30 36.9999L25.7074 35.2828C22.2603 33.904 20 30.5654 20 26.8528V25.5402L23.7498 28.517L30 23.5553L36.2499 28.5168L40 25.5397Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0UMcy"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0lt4X" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0lt4X)"><g clip-path="url(#clip0lt4X)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2F2F2"/><path opacity="0.9" d="M80 53.3334H0V80H80V53.3334Z" fill="#EB5757"/><path d="M20 15H40V26.853C40 30.5656 37.7397 33.9041 34.2926 35.2829L30 37L25.7074 35.283C22.2603 33.9041 20 30.5656 20 26.853V15Z" fill="#2F80ED"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40 25.5397V26.8528C40 30.5654 37.7397 33.904 34.2926 35.2828L30 36.9999L25.7074 35.2828C22.2603 33.904 20 30.5654 20 26.8528V25.5402L23.7498 28.517L30 23.5553L36.2499 28.5168L40 25.5397Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0lt4X"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsSlovenia = forwardRef((props, ref) => {
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

FlagsSlovenia.displayName = 'FlagsSlovenia'

export default FlagsSlovenia
