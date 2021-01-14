
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 0H0V80H120V0Z" fill="#F2F2F2"/><path d="M120 0H0V26.6667H120V0Z" fill="#F2994A"/><path d="M120 53.34H0V80.01H120V53.34Z" fill="#6FCF97"/><path d="M60 30L60.5579 36.1199L62.8173 30.4051L61.6284 36.4342L65.4064 31.5875L62.5671 37.0375L67.5575 33.4514L63.2977 37.8807L69.0963 35.8458L63.7612 38.8956L69.8982 38.5769L63.92 40L69.8982 41.4231L63.7612 41.1044L69.0963 44.1542L63.2977 42.1193L67.5575 46.5486L62.5671 42.9625L65.4064 48.4125L61.6284 43.5658L62.8173 49.5949L60.5579 43.8801L60 50L59.4421 43.8801L57.1827 49.5949L58.3716 43.5658L54.5936 48.4125L57.4329 42.9625L52.4425 46.5486L56.7023 42.1193L50.9037 44.1542L56.2388 41.1044L50.1018 41.4231L56.08 40L50.1018 38.5769L56.2388 38.8956L50.9037 35.8458L56.7023 37.8807L52.4425 33.4514L57.4329 37.0375L54.5936 31.5875L58.3716 36.4342L57.1827 30.4051L59.4421 36.1199L60 30Z" fill="#2F80ED"/><circle cx="60" cy="40" r="10" stroke="#2F80ED" stroke-width="2"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2994A"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#6FCF97"/><path d="M40 30L40.5579 36.1199L42.8173 30.4051L41.6284 36.4342L45.4064 31.5875L42.5671 37.0375L47.5575 33.4514L43.2977 37.8807L49.0963 35.8458L43.7612 38.8956L49.8982 38.5769L43.92 40L49.8982 41.4231L43.7612 41.1044L49.0963 44.1542L43.2977 42.1193L47.5575 46.5486L42.5671 42.9625L45.4064 48.4125L41.6284 43.5658L42.8173 49.5949L40.5579 43.8801L40 50L39.4421 43.8801L37.1827 49.5949L38.3716 43.5658L34.5936 48.4125L37.4329 42.9625L32.4425 46.5486L36.7023 42.1193L30.9037 44.1542L36.2388 41.1044L30.1018 41.4231L36.08 40L30.1018 38.5769L36.2388 38.8956L30.9037 35.8458L36.7023 37.8807L32.4425 33.4514L37.4329 37.0375L34.5936 31.5875L38.3716 36.4342L37.1827 30.4051L39.4421 36.1199L40 30Z" fill="#2F80ED"/><circle cx="40" cy="40" r="10" stroke="#2F80ED" stroke-width="2"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2994A"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#6FCF97"/><path d="M40 30L40.5579 36.1199L42.8173 30.4051L41.6284 36.4342L45.4064 31.5875L42.5671 37.0375L47.5575 33.4514L43.2977 37.8807L49.0963 35.8458L43.7612 38.8956L49.8982 38.5769L43.92 40L49.8982 41.4231L43.7612 41.1044L49.0963 44.1542L43.2977 42.1193L47.5575 46.5486L42.5671 42.9625L45.4064 48.4125L41.6284 43.5658L42.8173 49.5949L40.5579 43.8801L40 50L39.4421 43.8801L37.1827 49.5949L38.3716 43.5658L34.5936 48.4125L37.4329 42.9625L32.4425 46.5486L36.7023 42.1193L30.9037 44.1542L36.2388 41.1044L30.1018 41.4231L36.08 40L30.1018 38.5769L36.2388 38.8956L30.9037 35.8458L36.7023 37.8807L32.4425 33.4514L37.4329 37.0375L34.5936 31.5875L38.3716 36.4342L37.1827 30.4051L39.4421 36.1199L40 30Z" fill="#2F80ED"/><circle cx="40" cy="40" r="10" stroke="#2F80ED" stroke-width="2"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsIndia = forwardRef((props, ref) => {
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

FlagsIndia.displayName = 'FlagsIndia'

export default FlagsIndia
