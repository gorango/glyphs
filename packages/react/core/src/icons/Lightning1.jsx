
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M29.8675 51.0002H28C24.287 51.0002 20.726 49.5252 18.1005 46.8997C15.475 44.2742 14 40.7132 14 37.0002C14 33.2872 15.475 29.7262 18.1005 27.1007C19.9441 25.2571 22.2489 23.9808 24.7436 23.3841C25.456 20.5805 26.895 17.9961 28.9507 15.9068C32.0419 12.7652 36.275 11 40.7183 11C45.1616 11 49.4515 12.7652 52.6438 15.9068C55.836 19.0484 57.6698 23.3094 57.7413 27.7521L57.7671 29.3537C59.6471 29.8424 61.3812 30.8248 62.7782 32.2218C64.8411 34.2847 66 37.0826 66 40C66 42.9174 64.8411 45.7153 62.7782 47.7782C60.7153 49.8411 57.9174 51 55 51H50.0851"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36.5376 54.5814L28.59 54.5814C28.1143 54.5814 27.8307 54.0511 28.0948 53.6555L42.3243 32.3382C42.6513 31.8484 43.4149 32.0798 43.4149 32.6687V47.4182L51.3624 47.4182C51.8381 47.4182 52.1217 47.9485 51.8576 48.3442L37.6282 69.6614C37.3012 70.1512 36.5376 69.9198 36.5376 69.3309V54.5814Z"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52.6438 15.9068C49.4515 12.7652 45.1616 11 40.7183 11C36.275 11 32.0419 12.7652 28.9507 15.9068C26.895 17.9961 25.456 20.5805 24.7436 23.3841C22.2489 23.9808 19.9441 25.2571 18.1005 27.1007C15.475 29.7262 14 33.2872 14 37.0002C14 40.7132 15.475 44.2742 18.1005 46.8997C20.3287 49.1279 23.2306 50.5274 26.3275 50.9L39.8294 30.6727L39.1493 42.4987L33.4745 51.0002H33.799H38L38.0493 50.9999H38.6604L39.1493 42.4987L39.1629 42.4783L38.6819 50.9999H46.4782L46.8665 50.4183L43.4151 50.4183C41.7583 50.4183 40.4151 49.0751 40.4151 47.4183V40.6024L39.1629 42.4783L39.8294 30.6727C41.8037 27.7149 46.4151 29.1125 46.4151 32.6688V44.4183H51.3627C54.2352 44.4183 55.9478 47.6206 54.3531 50.0098L53.6921 51H55C57.9174 51 60.7153 49.8411 62.7782 47.7782C64.8411 45.7153 66 42.9174 66 40C66 37.0826 64.8411 34.2847 62.7782 32.2218C61.3812 30.8248 59.6471 29.8424 57.7671 29.3537L57.7413 27.7521C57.6698 23.3094 55.836 19.0484 52.6438 15.9068Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.5376 54.5814L28.59 54.5814C28.1143 54.5814 27.8307 54.0511 28.0948 53.6555L42.3243 32.3382C42.6513 31.8484 43.4149 32.0798 43.4149 32.6687V47.4182L51.3624 47.4182C51.8381 47.4182 52.1217 47.9485 51.8576 48.3442L37.6282 69.6614C37.3012 70.1512 36.5376 69.9198 36.5376 69.3309L36.5376 54.5814Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52.6438 15.9068C49.4515 12.7652 45.1616 11 40.7183 11C36.275 11 32.0419 12.7652 28.9507 15.9068C26.895 17.9961 25.456 20.5805 24.7436 23.3841C22.2489 23.9808 19.9441 25.2571 18.1005 27.1007C15.475 29.7262 14 33.2871 14 37.0002C14 40.7132 15.475 44.2742 18.1005 46.8997C20.726 49.5252 24.287 51.0002 28 51.0002H29.8675L42.3245 32.3382C42.6515 31.8484 43.4151 32.0799 43.4151 32.6688V47.4183L51.3627 47.4183C51.8384 47.4183 52.122 47.9486 51.8579 48.3442L50.0851 51H50.4436H51H55C57.9174 51 60.7153 49.8411 62.7782 47.7782C64.8411 45.7153 66 42.9174 66 40C66 37.0826 64.8411 34.2847 62.7782 32.2218C61.3812 30.8248 59.6471 29.8424 57.7671 29.3537L57.7413 27.7521C57.6698 23.3094 55.836 19.0484 52.6438 15.9068Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.5376 54.5814L28.59 54.5814C28.1143 54.5814 27.8307 54.0511 28.0948 53.6555L42.3243 32.3382C42.6513 31.8484 43.4149 32.0798 43.4149 32.6687V47.4182L51.3624 47.4182C51.8381 47.4182 52.1217 47.9485 51.8576 48.3442L37.6282 69.6614C37.3012 70.1512 36.5376 69.9198 36.5376 69.3309L36.5376 54.5814Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M52.6438 15.9068C49.4515 12.7652 45.1616 11 40.7183 11C36.275 11 32.0419 12.7652 28.9507 15.9068C26.895 17.9961 25.456 20.5805 24.7436 23.3841C22.2489 23.9808 19.9441 25.2571 18.1005 27.1007C15.475 29.7262 14 33.2872 14 37.0002C14 40.7132 15.475 44.2742 18.1005 46.8997C20.726 49.5252 24.287 51.0002 28 51.0002H29.8675L42.3245 32.3382C42.6515 31.8484 43.4151 32.0799 43.4151 32.6688V47.4183L51.3627 47.4183C51.8384 47.4183 52.122 47.9486 51.8579 48.3442L50.0851 51H55C57.9174 51 60.7153 49.8411 62.7782 47.7782C64.8411 45.7153 66 42.9174 66 40C66 37.0826 64.8411 34.2847 62.7782 32.2218C61.3812 30.8248 59.6471 29.8424 57.7671 29.3537L57.7413 27.7521C57.6698 23.3094 55.836 19.0484 52.6438 15.9068Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36.5378 54.5814L28.5903 54.5814C28.1146 54.5814 27.831 54.0511 28.0951 53.6555L42.3245 32.3382C42.6515 31.8484 43.4151 32.0799 43.4151 32.6688V47.4183L51.3627 47.4183C51.8384 47.4183 52.122 47.9486 51.8579 48.3442L37.6284 69.6615C37.3015 70.1513 36.5378 69.9198 36.5378 69.3309V54.5814Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M42.3245 32.3382L29.8675 51.0002H28C24.287 51.0002 20.726 49.5252 18.1005 46.8997C15.475 44.2742 14 40.7132 14 37.0002C14 33.2872 15.475 29.7262 18.1005 27.1007C19.9441 25.2571 22.2489 23.9808 24.7436 23.3841C25.456 20.5805 26.895 17.9961 28.9507 15.9068C32.0419 12.7652 36.275 11 40.7183 11C45.1616 11 49.4515 12.7652 52.6438 15.9068C55.836 19.0484 57.6698 23.3094 57.7413 27.7521L57.7671 29.3537C59.6471 29.8424 61.3812 30.8248 62.7782 32.2218C64.8411 34.2847 66 37.0826 66 40C66 42.9174 64.8411 45.7153 62.7782 47.7782C60.7153 49.8411 57.9174 51 55 51H50.0851L51.8579 48.3442M42.3245 32.3382C42.6515 31.8484 43.4151 32.0799 43.4151 32.6688V47.4183L51.3627 47.4183C51.8384 47.4183 52.122 47.9486 51.8579 48.3442M42.3245 32.3382L28.0951 53.6555C27.831 54.0511 28.1146 54.5814 28.5903 54.5814L36.5378 54.5814V69.3309C36.5378 69.9198 37.3015 70.1513 37.6284 69.6615L51.8579 48.3442"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.2304 52.9021C22.638 52.5024 19.2668 50.8944 16.6863 48.3139C13.6857 45.3133 12 41.2436 12 37.0002C12 32.7567 13.6857 28.6871 16.6863 25.6865C18.5077 23.8651 20.7229 22.5282 23.1317 21.7588C24.0056 19.0534 25.4976 16.5647 27.5251 14.5041C30.9957 10.977 35.7439 9 40.7183 9C45.6912 9 50.4837 10.9749 54.0466 14.4814C57.6096 17.9877 59.661 22.7477 59.741 27.7199L59.7439 27.8965C61.3957 28.5439 62.9135 29.5288 64.1924 30.8076C66.6304 33.2456 68 36.5522 68 40C68 43.4478 66.6304 46.7544 64.1924 49.1924C61.7544 51.6304 58.4478 53 55 53H51.1547L39.2919 70.7719C37.8666 72.907 34.5378 71.8981 34.5378 69.3309V56.5814L28.5903 56.5814C26.6568 56.5814 25.4514 54.5718 26.2304 52.9021ZM30.3763 17.3096C33.0881 14.5535 36.8062 13 40.7183 13C44.6319 13 48.4194 14.5555 51.2409 17.3323C54.0625 20.1091 55.6786 23.8711 55.7416 27.7842L55.7673 29.3859C55.7818 30.2846 56.394 31.0632 57.2639 31.2894C58.8023 31.6892 60.221 32.4931 61.364 33.636C63.0518 35.3239 64 37.6131 64 40C64 42.3869 63.0518 44.6761 61.364 46.364C59.6761 48.0518 57.3869 49 55 49H53.7657C54.4545 47.3506 53.2586 45.4183 51.3627 45.4183L45.4151 45.4183V32.6688C45.4151 32.5083 45.4021 32.354 45.3774 32.2061C45.0064 29.9878 41.9972 29.2262 40.6611 31.2279L28.7979 49.0002H28C24.8174 49.0002 21.7652 47.7359 19.5147 45.4855C17.2643 43.235 16 40.1828 16 37.0002C16 33.8176 17.2643 30.7653 19.5147 28.5149C21.0949 26.9348 23.0703 25.8408 25.2089 25.3293C25.9317 25.1564 26.499 24.5969 26.6821 23.8766C27.3083 21.4119 28.5724 19.1429 30.3763 17.3096ZM31.529 52.1136L31.2167 52.5814H36.5378C37.6424 52.5814 38.5378 53.4769 38.5378 54.5814V64.6967L48.7363 49.4183L43.4151 49.4183C42.3105 49.4183 41.4151 48.5229 41.4151 47.4183V37.3031L31.531 52.1106L31.529 52.1136Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreLightning1 = forwardRef((props, ref) => {
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

CoreLightning1.displayName = 'CoreLightning1'

export default CoreLightning1
