
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M32 65H68V39.5L62.1421 26.4185L48 21L33.8579 26.4185L32 30.5674"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 65H32V25.2426C32 22.5261 30.9209 19.9209 29 18L28.8284 17.8284C27.0174 16.0174 24.5612 15 22 15C19.4388 15 16.9826 16.0174 15.1716 17.8284L15 18C13.0791 19.9209 12 22.5261 12 25.2426V65Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M54 65V54H42V65"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45 38H51V44H45V38Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12.1229 31H31.8694"
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
            d="M34.9993 30.9354C34.9997 30.9569 35 30.9784 35 31V65H42V54H54V65H68V39.5L62.1421 26.4185L48 21L35 25.9809V30.8694C35 30.8915 34.9997 30.9135 34.9993 30.9354ZM51 44V38H45V44H51Z"
            fill="currentColor"
          />
          <path
            d="M12 33V65H32V33H12Z"
            fill="currentColor"
          />
          <path
            d="M32 29V25.2426C32 22.5261 30.9209 19.9209 29 18L28.8284 17.8284C27.0174 16.0174 24.5612 15 22 15C19.4388 15 16.9826 16.0174 15.1716 17.8284L15 18C13.0791 19.9209 12 22.5261 12 25.2426V29H32Z"
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
            d="M31.8694 31H32V64.5V65H68V63V39.5L62.1421 26.4185L48 21L33.8578 26.4185L32 30.5674V30.8694C32 30.9415 31.9415 31 31.8694 31Z"
            fill="#EB5757"
          />
          <path
            d="M12 65H32V64.5V31H12V64.5V65Z"
            fill="#F2994A"
          />
          <path
            d="M31.8694 31H12.1229C12.055 31 12 30.945 12 30.8771V25.2426C12 22.5261 13.0791 19.9209 15 18L15.1716 17.8284C16.9826 16.0174 19.4388 15 22 15C24.5612 15 27.0174 16.0174 28.8284 17.8284L29 18C30.9209 19.9209 32 22.5261 32 25.2426V30.8694C32 30.9415 31.9415 31 31.8694 31Z"
            fill="#F2C94C"
          />
          <rect
            x="42"
            y="54"
            width="12"
            height="11"
            fill="#F2F2F2"
          />
          <rect
            x="45"
            y="38"
            width="6"
            height="6"
            fill="#F2F2F2"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M31.8694 31H32V65H68V39.5L62.1421 26.4185L48 21L33.8579 26.4185L32 30.5674V30.8694C32 30.9415 31.9415 31 31.8694 31Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 65H32V31H12V65Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M31.8694 31H12.1229C12.055 31 12 30.945 12 30.8771V25.2426C12 22.5261 13.0791 19.9209 15 18L15.1716 17.8284C16.9826 16.0174 19.4388 15 22 15C24.5612 15 27.0174 16.0174 28.8284 17.8284L29 18C30.9209 19.9209 32 22.5261 32 25.2426V30.8694C32 30.9415 31.9415 31 31.8694 31Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M42 54H54V65H42V54Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M45 38H51V44H45V38Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32 31H31.8694M32 31H12V65H32M32 31V65M31.8694 31C31.9415 31 32 30.9415 32 30.8694M31.8694 31H12.1229C12.055 31 12 30.945 12 30.8771V25.2426C12 22.5261 13.0791 19.9209 15 18L15.1716 17.8284C16.9826 16.0174 19.4388 15 22 15C24.5612 15 27.0174 16.0174 28.8284 17.8284L29 18C30.9209 19.9209 32 22.5261 32 25.2426V30.8694M32 65H68V39.5L62.1421 26.4185L48 21L33.8579 26.4185L32 30.5674V30.8694M42 54H54V65H42V54ZM45 38H51V44H45V38Z"
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
            d="M45 36C43.8954 36 43 36.8954 43 38V44C43 45.1046 43.8954 46 45 46H51C52.1046 46 53 45.1046 53 44V38C53 36.8954 52.1046 36 51 36H45ZM47 42V40H49V42H47Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 13C18.9084 13 15.9434 14.2281 13.7574 16.4142L13.5858 16.5858C11.2898 18.8817 10 21.9957 10 25.2426V30.8771C10 30.8979 10.0003 30.9187 10.0009 30.9394C10.0003 30.9596 10 30.9797 10 31V65C10 66.1046 10.8954 67 12 67H68C69.1046 67 70 66.1046 70 65V39.5C70 39.2183 69.9405 38.9397 69.8253 38.6826L63.9675 25.6011C63.7511 25.118 63.352 24.7403 62.8577 24.5509L48.7156 19.1324C48.2549 18.9559 47.7451 18.9559 47.2844 19.1324L33.9587 24.2381C33.7218 21.359 32.4722 18.6438 30.4142 16.5858L30.2426 16.4142C28.0566 14.2281 25.0916 13 22 13ZM52 56V63H44V56H52ZM56 54V63H66V39.9274L60.6546 27.9904L48 23.1418L35.3454 27.9904L34 30.9948L34 31V63H40V54C40 52.8954 40.8954 52 42 52H54C55.1046 52 56 52.8954 56 54ZM14 33V63H30V33H14ZM30 29V25.2426C30 23.0566 29.1316 20.96 27.5858 19.4142L27.4142 19.2426C25.9783 17.8067 24.0307 17 22 17C19.9693 17 18.0217 17.8067 16.5858 19.2426L16.4142 19.4142C14.8684 20.96 14 23.0566 14 25.2426V29H30Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreFarm = forwardRef((props, ref) => {
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

CoreFarm.displayName = 'CoreFarm'

export default CoreFarm
