
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V40H120V0Z"
            fill="#F2C94C"
          />
          <g opacity="0.9"><path d="M120 40H0V60H120V40Z" fill="#2F80ED"/><path d="M120 60H0V80H120V60Z" fill="#EB5757"/></g>
          <ellipse cx="60" cy="38.111" rx="6.93333" ry="10.6667" fill="#56CCF2"/>
          <path
            d="M52.2 32.7778V40.9778C52.2 45.2857 55.6921 48.7778 60 48.7778V48.7778C64.3078 48.7778 67.8 45.2857 67.8 40.9778V32.7778"
            stroke="#EB5757"
            stroke-width={strokeWidth}
          />
          <path
            d="M49.6001 31V41.9333C49.6001 47.6771 54.2563 52.3333 60.0001 52.3333V52.3333C65.7439 52.3333 70.4001 47.6771 70.4001 41.9333V31"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
          />
          <path
            d="M47 28.3333V41.9999C47 49.1796 52.8203 54.9999 60 54.9999V54.9999C67.1797 54.9999 73 49.1796 73 41.9999V28.3333"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.3335 22.11C51.3335 22.1104 51.3335 22.1107 51.3335 22.1111C51.3335 23.5616 52.4915 24.7416 53.9335 24.777V24.7778C53.9335 26.2505 55.1274 27.4444 56.6001 27.4444H63.4001C64.8729 27.4444 66.0668 26.2505 66.0668 24.7778V24.777C67.5088 24.7416 68.6668 23.5616 68.6668 22.1111C68.6668 22.1107 68.6668 22.1104 68.6668 22.11C70.5894 22.0628 72.1334 20.4895 72.1334 18.5556H63.4668C63.4668 16.5919 61.9147 15 60.0002 15C58.0856 15 56.5335 16.5919 56.5335 18.5556H47.8668V18.5258L47.8667 18.5556C47.8667 20.4896 49.4108 22.0629 51.3335 22.11Z"
            fill="#EB5757"
          />
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0nttn)"><path d="M120 0H0V40H120V0Z" fill="#F2C94C"/><g opacity="0.9"><path d="M120 40H0V60H120V40Z" fill="#2F80ED"/><path d="M120 60H0V80H120V60Z" fill="#EB5757"/></g><ellipse cx="40" cy="38.111" rx="6.93333" ry="10.6667" fill="#56CCF2"/><path d="M32.2 32.7778V40.9778C32.2 45.2857 35.6921 48.7778 40 48.7778V48.7778C44.3078 48.7778 47.8 45.2857 47.8 40.9778V32.7778" stroke="#EB5757" stroke-width="4"/><path d="M29.6001 31V41.9333C29.6001 47.6771 34.2563 52.3333 40.0001 52.3333V52.3333C45.7439 52.3333 50.4001 47.6771 50.4001 41.9333V31" stroke="#2F80ED" stroke-width="4"/><path d="M27 28.3333V41.9999C27 49.1796 32.8203 54.9999 40 54.9999V54.9999C47.1797 54.9999 53 49.1796 53 41.9999V28.3333" stroke="#F2C94C" stroke-width="4"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.3335 22.11C31.3335 22.1104 31.3335 22.1107 31.3335 22.1111C31.3335 23.5616 32.4915 24.7416 33.9335 24.777V24.7778C33.9335 26.2505 35.1274 27.4444 36.6001 27.4444H43.4001C44.8729 27.4444 46.0668 26.2505 46.0668 24.7778V24.777C47.5088 24.7416 48.6668 23.5616 48.6668 22.1111C48.6668 22.1107 48.6668 22.1104 48.6668 22.11C50.5894 22.0628 52.1334 20.4895 52.1334 18.5556H43.4668C43.4668 16.5919 41.9147 15 40.0002 15C38.0856 15 36.5335 16.5919 36.5335 18.5556H27.8668V18.5258L27.8667 18.5556C27.8667 20.4896 29.4108 22.0629 31.3335 22.11Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0nttn"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0lpcX" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0lpcX)"><g clip-path="url(#clip0lpcX)"><path d="M120 0H0V40H120V0Z" fill="#F2C94C"/><g opacity="0.9"><path d="M120 40H0V60H120V40Z" fill="#2F80ED"/><path d="M120 60H0V80H120V60Z" fill="#EB5757"/></g><ellipse cx="40" cy="38.111" rx="6.93333" ry="10.6667" fill="#56CCF2"/><path d="M32.2 32.7778V40.9778C32.2 45.2857 35.6921 48.7778 40 48.7778V48.7778C44.3078 48.7778 47.8 45.2857 47.8 40.9778V32.7778" stroke="#EB5757" stroke-width="4"/><path d="M29.6001 31V41.9333C29.6001 47.6771 34.2563 52.3333 40.0001 52.3333V52.3333C45.7439 52.3333 50.4001 47.6771 50.4001 41.9333V31" stroke="#2F80ED" stroke-width="4"/><path d="M27 28.3333V41.9999C27 49.1796 32.8203 54.9999 40 54.9999V54.9999C47.1797 54.9999 53 49.1796 53 41.9999V28.3333" stroke="#F2C94C" stroke-width="4"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.3335 22.11C31.3335 22.1104 31.3335 22.1107 31.3335 22.1111C31.3335 23.5616 32.4915 24.7416 33.9335 24.777V24.7778C33.9335 26.2505 35.1274 27.4444 36.6001 27.4444H43.4001C44.8729 27.4444 46.0668 26.2505 46.0668 24.7778V24.777C47.5088 24.7416 48.6668 23.5616 48.6668 22.1111C48.6668 22.1107 48.6668 22.1104 48.6668 22.11C50.5894 22.0628 52.1334 20.4895 52.1334 18.5556H43.4668C43.4668 16.5919 41.9147 15 40.0002 15C38.0856 15 36.5335 16.5919 36.5335 18.5556H27.8668V18.5258L27.8667 18.5556C27.8667 20.4896 29.4108 22.0629 31.3335 22.11Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0lpcX"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsEcuador = forwardRef((props, ref) => {
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

FlagsEcuador.displayName = 'FlagsEcuador'

export default FlagsEcuador
