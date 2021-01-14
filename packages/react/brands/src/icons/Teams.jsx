
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M46.75 37.5323C46.75 36.4099 47.6599 35.5 48.7823 35.5H73.9677C75.0901 35.5 76 36.4099 76 37.5323V52.375C76 60.4522 69.4522 67 61.375 67C53.2978 67 46.75 60.4522 46.75 52.375V37.5323Z"
            fill="url(#paint0_linear)"
          />
          <circle
            cx="64.75"
            cy="24.25"
            r="6.75"
            fill="#34439E"
          />
          <circle
            cx="64.75"
            cy="24.25"
            r="6.75"
            fill="url(#paint1_linear)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.5586 62.5C28.2288 69.0966 34.6961 73.75 42.2502 73.75C52.1913 73.75 60.2502 65.6911 60.2502 55.75V33.7581C60.2502 32.2348 59.0154 31 57.4921 31H44.5002V57.5C44.5002 60.2614 42.2616 62.5 39.5002 62.5H25.5586Z"
            fill="url(#paint2_linear)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.5 28.75C49.4706 28.75 53.5 24.7206 53.5 19.75C53.5 14.7794 49.4706 10.75 44.5 10.75C39.5294 10.75 35.5 14.7794 35.5 19.75C35.5 20.5269 35.5984 21.2809 35.7835 22H39.5C42.2614 22 44.5 24.2386 44.5 27V28.75Z"
            fill="url(#paint3_linear)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.0984 28.0746C44.8978 28.5116 43.6017 28.75 42.25 28.75C39.7168 28.75 37.3792 27.9128 35.4988 26.5H41.5C43.2329 26.5 44.8284 27.0877 46.0984 28.0746ZM48.3759 31H27.0081C25.4849 31 24.25 32.2349 24.25 33.7581V55.75C24.25 60.0068 25.7276 63.9184 28.1978 67H41.5C45.6421 67 49 63.6421 49 59.5V34C49 32.9333 48.7773 31.9187 48.3759 31Z"
            fill="black"
            fill-opacity="0.3"
          />
          <rect
            x="4"
            y="22"
            width="40.5"
            height="40.5"
            rx="5"
            fill="url(#paint4_linear)"
          />
          <rect
            x="4"
            y="22"
            width="40.5"
            height="40.5"
            rx="5"
            fill="url(#paint5_linear)"
          />
          <path
            d="M33.25 31H15.25V35.1282H21.9886V53.5H26.5114V35.1282H33.25V31Z"
            fill="white"
          />
          <defs><linearGradient id="paint0_linear" x1="46.75" y1="37.1579" x2="76.3579" y2="56.5049" gradientUnits="userSpaceOnUse"><stop stop-color="#364088"/><stop offset="1" stop-color="#6E7EE1"/></linearGradient><linearGradient id="paint1_linear" x1="58" y1="18.2105" x2="71.0417" y2="27.388" gradientUnits="userSpaceOnUse"><stop stop-color="#364088"/><stop offset="1" stop-color="#6E7EE1"/></linearGradient><linearGradient id="paint2_linear" x1="25.5586" y1="49.9087" x2="60.2502" y2="49.9087" gradientUnits="userSpaceOnUse"><stop stop-color="#515FC4"/><stop offset="1" stop-color="#7084EA"/></linearGradient><linearGradient id="paint3_linear" x1="38.0714" y1="13.3214" x2="49.6429" y2="26.8214" gradientUnits="userSpaceOnUse"><stop stop-color="#4858AE"/><stop offset="1" stop-color="#4E60CE"/></linearGradient><linearGradient id="paint4_linear" x1="4" y1="42.25" x2="44.5" y2="42.25" gradientUnits="userSpaceOnUse"><stop stop-color="#2A3887"/><stop offset="1" stop-color="#4C56B9"/></linearGradient><linearGradient id="paint5_linear" x1="4" y1="42.25" x2="44.5" y2="42.25" gradientUnits="userSpaceOnUse"><stop stop-color="#2A3887"/><stop offset="1" stop-color="#4C56B9"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M35.6698 18H39.4998C44.4703 18 48.4998 22.0294 48.4998 27V27.8145C51.4632 26.3418 53.4998 23.2837 53.4998 19.75C53.4998 14.7794 49.4703 10.75 44.4998 10.75C40.128 10.75 36.4843 13.8671 35.6698 18Z"
            fill="currentColor"
          />
          <path
            d="M27.811 66.5C31.0926 70.9004 36.3384 73.75 42.2498 73.75C48.2567 73.75 53.5764 70.8075 56.8461 66.2853C58.272 66.7492 59.7941 67 61.3748 67C69.4519 67 75.9998 60.4522 75.9998 52.375V37.5323C75.9998 36.4099 75.0899 35.5 73.9675 35.5H60.2498V33.7581C60.2498 32.2348 59.0149 31 57.4917 31H48.4998V57.5C48.4998 62.4706 44.4703 66.5 39.4998 66.5H27.811Z"
            fill="currentColor"
          />
          <path
            d="M64.7498 31C68.4777 31 71.4998 27.9779 71.4998 24.25C71.4998 20.5221 68.4777 17.5 64.7498 17.5C61.0219 17.5 57.9998 20.5221 57.9998 24.25C57.9998 27.9779 61.0219 31 64.7498 31Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 22C6.23858 22 4 24.2386 4 27V57.5C4 60.2614 6.23858 62.5 9 62.5H39.5C42.2614 62.5 44.5 60.2614 44.5 57.5V27C44.5 24.2386 42.2614 22 39.5 22H9ZM15.25 31H33.25V35.1282H26.5114V53.5H21.9886V35.1282H15.25V31Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M35.6698 18H39.4998C44.4703 18 48.4998 22.0294 48.4998 27V27.8145C51.4632 26.3418 53.4998 23.2837 53.4998 19.75C53.4998 14.7794 49.4703 10.75 44.4998 10.75C40.128 10.75 36.4843 13.8671 35.6698 18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27.811 66.5C31.0926 70.9004 36.3384 73.75 42.2498 73.75C48.2567 73.75 53.5764 70.8075 56.8461 66.2853C58.272 66.7492 59.7941 67 61.3748 67C69.4519 67 75.9998 60.4522 75.9998 52.375V37.5323C75.9998 36.4099 75.0899 35.5 73.9675 35.5H60.2498V33.7581C60.2498 32.2348 59.0149 31 57.4917 31H48.4998V57.5C48.4998 62.4706 44.4703 66.5 39.4998 66.5H27.811Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M64.7498 31C68.4777 31 71.4998 27.9779 71.4998 24.25C71.4998 20.5221 68.4777 17.5 64.7498 17.5C61.0219 17.5 57.9998 20.5221 57.9998 24.25C57.9998 27.9779 61.0219 31 64.7498 31Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 22C6.23858 22 4 24.2386 4 27V57.5C4 60.2614 6.23858 62.5 9 62.5H39.5C42.2614 62.5 44.5 60.2614 44.5 57.5V27C44.5 24.2386 42.2614 22 39.5 22H9ZM15.25 31H33.25V35.1282H26.5114V53.5H21.9886V35.1282H15.25V31Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsTeams = forwardRef((props, ref) => {
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

BrandsTeams.displayName = 'BrandsTeams'

export default BrandsTeams
