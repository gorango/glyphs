
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.0197 12.503C16.3548 12.3022 5 22.0992 5 33.6536C5 40.3233 8.21522 46.1094 14.439 50.3575C14.439 50.3575 12.158 57.7019 12.1904 57.8491C12.2229 57.9967 12.7193 58.2861 12.8921 58.1915C13.0648 58.0969 21.1377 53.3999 21.1377 53.3999C26.9232 55.3375 30.4524 54.8607 31.0547 54.7793C31.0965 54.7737 31.1243 54.77 31.1376 54.7691C30.5202 53.0052 30.1156 50.2586 30.5763 47.6699C32.9882 34.1219 47.2054 29.9076 54.9972 30.6276C52.8456 20.8434 43.4995 12.7011 30.0197 12.503ZM20.5217 23.623C18.7291 23.623 17.2762 25.0409 17.2762 26.7902C17.2762 28.5395 18.7291 29.9574 20.5217 29.9574C22.3143 29.9574 23.7676 28.5395 23.7676 26.7902C23.7676 25.0409 22.3143 23.623 20.5217 23.623ZM40.1706 23.623C38.3784 23.623 36.9251 25.0409 36.9251 26.7902C36.9251 28.5395 38.3784 29.9574 40.1706 29.9574C41.9632 29.9574 43.4164 28.5395 43.4164 26.7902C43.4164 25.0409 41.9636 23.623 40.1706 23.623Z"
            fill="#31CE6F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M75 49.7314C75 39.8326 65.1885 32.2507 53.806 32.2507C41.754 32.2507 32.1415 40.004 32.1415 49.902C32.1415 59.8181 41.2845 68.0273 53.8199 68.0945C56.3429 68.1084 60.1009 67.4755 62.6348 66.4426C62.6348 66.4426 68.6924 70.0262 69.0317 69.9999C69.3707 69.9732 69.5446 69.7112 69.5581 69.4865C69.5716 69.2617 67.6281 63.6683 67.6281 63.6683C72.8294 59.6941 75 55.3148 75 49.7314ZM45.8735 40.4638C44.2876 40.4638 43.002 41.7202 43.002 43.2708C43.002 44.8206 44.2876 46.0774 45.8735 46.0774C47.4594 46.0774 48.745 44.8209 48.745 43.2708C48.745 41.7202 47.4594 40.4638 45.8735 40.4638ZM61.2283 40.4638C59.6423 40.4638 58.3568 41.7202 58.3568 43.2708C58.3568 44.8206 59.6423 46.0774 61.2283 46.0774C62.8145 46.0774 64.1001 44.8209 64.1001 43.2708C64.1001 41.7202 62.8145 40.4638 61.2283 40.4638Z"
            fill="#31CE6F"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.0197 12.503C16.3548 12.3022 5 22.0992 5 33.6536C5 40.3233 8.21522 46.1094 14.439 50.3575C14.439 50.3575 12.158 57.7019 12.1904 57.8491C12.2229 57.9967 12.7193 58.2861 12.8921 58.1915C13.0648 58.0969 21.1377 53.3999 21.1377 53.3999C26.9232 55.3375 30.4524 54.8607 31.0547 54.7793C31.0965 54.7737 31.1243 54.77 31.1376 54.7691C30.5202 53.0052 30.1156 50.2586 30.5763 47.6699C32.9882 34.1219 47.2054 29.9076 54.9972 30.6276C52.8456 20.8434 43.4995 12.7011 30.0197 12.503ZM20.5217 23.623C18.7291 23.623 17.2762 25.0409 17.2762 26.7902C17.2762 28.5395 18.7291 29.9574 20.5217 29.9574C22.3143 29.9574 23.7676 28.5395 23.7676 26.7902C23.7676 25.0409 22.3143 23.623 20.5217 23.623ZM40.1706 23.623C38.3784 23.623 36.9251 25.0409 36.9251 26.7902C36.9251 28.5395 38.3784 29.9574 40.1706 29.9574C41.9632 29.9574 43.4164 28.5395 43.4164 26.7902C43.4164 25.0409 41.9636 23.623 40.1706 23.623Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M75 49.7314C75 39.8326 65.1885 32.2507 53.806 32.2507C41.754 32.2507 32.1415 40.004 32.1415 49.902C32.1415 59.8181 41.2845 68.0273 53.8199 68.0945C56.3429 68.1084 60.1009 67.4755 62.6348 66.4426C62.6348 66.4426 68.6924 70.0262 69.0317 69.9999C69.3707 69.9732 69.5446 69.7112 69.5581 69.4865C69.5716 69.2617 67.6281 63.6683 67.6281 63.6683C72.8294 59.6941 75 55.3148 75 49.7314ZM45.8735 40.4638C44.2876 40.4638 43.002 41.7202 43.002 43.2708C43.002 44.8206 44.2876 46.0774 45.8735 46.0774C47.4594 46.0774 48.745 44.8209 48.745 43.2708C48.745 41.7202 47.4594 40.4638 45.8735 40.4638ZM61.2283 40.4638C59.6423 40.4638 58.3568 41.7202 58.3568 43.2708C58.3568 44.8206 59.6423 46.0774 61.2283 46.0774C62.8145 46.0774 64.1001 44.8209 64.1001 43.2708C64.1001 41.7202 62.8145 40.4638 61.2283 40.4638Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.0197 12.503C16.3548 12.3022 5 22.0992 5 33.6536C5 40.3233 8.21522 46.1094 14.439 50.3575C14.439 50.3575 12.158 57.7019 12.1904 57.8491C12.2229 57.9967 12.7193 58.2861 12.8921 58.1915C13.0648 58.0969 21.1377 53.3999 21.1377 53.3999C26.9232 55.3375 30.4524 54.8607 31.0547 54.7793C31.0965 54.7737 31.1243 54.77 31.1376 54.7691C30.5202 53.0052 30.1156 50.2586 30.5763 47.6699C32.9882 34.1219 47.2054 29.9076 54.9972 30.6276C52.8456 20.8434 43.4995 12.7011 30.0197 12.503ZM20.5217 23.623C18.7291 23.623 17.2762 25.0409 17.2762 26.7902C17.2762 28.5395 18.7291 29.9574 20.5217 29.9574C22.3143 29.9574 23.7676 28.5395 23.7676 26.7902C23.7676 25.0409 22.3143 23.623 20.5217 23.623ZM40.1706 23.623C38.3784 23.623 36.9251 25.0409 36.9251 26.7902C36.9251 28.5395 38.3784 29.9574 40.1706 29.9574C41.9632 29.9574 43.4164 28.5395 43.4164 26.7902C43.4164 25.0409 41.9636 23.623 40.1706 23.623Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M75 49.7314C75 39.8326 65.1885 32.2507 53.806 32.2507C41.754 32.2507 32.1415 40.004 32.1415 49.902C32.1415 59.8181 41.2845 68.0273 53.8199 68.0945C56.3429 68.1084 60.1009 67.4755 62.6348 66.4426C62.6348 66.4426 68.6924 70.0262 69.0317 69.9999C69.3707 69.9732 69.5446 69.7112 69.5581 69.4865C69.5716 69.2617 67.6281 63.6683 67.6281 63.6683C72.8294 59.6941 75 55.3148 75 49.7314ZM45.8735 40.4638C44.2876 40.4638 43.002 41.7202 43.002 43.2708C43.002 44.8206 44.2876 46.0774 45.8735 46.0774C47.4594 46.0774 48.745 44.8209 48.745 43.2708C48.745 41.7202 47.4594 40.4638 45.8735 40.4638ZM61.2283 40.4638C59.6423 40.4638 58.3568 41.7202 58.3568 43.2708C58.3568 44.8206 59.6423 46.0774 61.2283 46.0774C62.8145 46.0774 64.1001 44.8209 64.1001 43.2708C64.1001 41.7202 62.8145 40.4638 61.2283 40.4638Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsWechat = forwardRef((props, ref) => {
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

BrandsWechat.displayName = 'BrandsWechat'

export default BrandsWechat