
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M56 60.5001L54.6417 61.1484C50.7511 63.0052 46.3866 63.6312 42.131 62.9426C36.8012 62.0803 32.0017 59.2159 28.7126 54.9344L28.5366 54.7053C25.5948 50.876 24 46.1823 24 41.3534V38.8211C24 33.8792 25.6321 29.0756 28.6428 25.1566L28.7699 24.9911C32.0318 20.7451 36.7374 17.8425 41.9957 16.8329C44.8586 16.2832 47.8025 16.3112 50.6544 16.9151L52 17.2001"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56 60.5V40H38"
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
            d="M28.7699 24.9911L31.1489 26.8187L31.1489 26.8187L28.7699 24.9911ZM28.6428 25.1566L26.2638 23.3289L26.2638 23.3289L28.6428 25.1566ZM24 38.8211H21H24ZM28.5366 54.7053L30.9156 52.8777L30.9156 52.8777L28.5366 54.7053ZM28.7126 54.9344L26.3335 56.7621L26.3336 56.7621L28.7126 54.9344ZM57.2922 63.2075C58.7875 62.4939 59.4211 60.7032 58.7074 59.2079C57.9938 57.7126 56.2031 57.079 54.7078 57.7926L57.2922 63.2075ZM54.6417 61.1484L55.9339 63.8558L55.9339 63.8558L54.6417 61.1484ZM50.6544 16.9151L50.0329 19.85V19.85L50.6544 16.9151ZM51.3785 20.135C52.9994 20.4782 54.5917 19.4425 54.9349 17.8216C55.2782 16.2007 54.2424 14.6084 52.6215 14.2652L51.3785 20.135ZM42.131 62.9426L42.6101 59.9811H42.6101L42.131 62.9426ZM41.9957 16.8329L42.5613 19.7791L41.9957 16.8329ZM53 60.5001C53 62.1569 54.3431 63.5001 56 63.5001C57.6569 63.5001 59 62.1569 59 60.5001H53ZM56 40.0001L59 40.0001C59 38.3432 57.6569 37.0001 56 37.0001L56 40.0001ZM38 37.0001C36.3431 37.0001 35 38.3432 35 40.0001C35 41.6569 36.3431 43.0001 38 43.0001V37.0001ZM26.3909 23.1635L26.2638 23.3289L31.0218 26.9842L31.1489 26.8187L26.3909 23.1635ZM21 38.8211V41.3534H27V38.8211H21ZM26.1576 56.533L26.3335 56.7621L31.0916 53.1068L30.9156 52.8777L26.1576 56.533ZM54.7078 57.7926L53.3495 58.4409L55.9339 63.8558L57.2922 63.2075L54.7078 57.7926ZM50.0329 19.85L51.3785 20.135L52.6215 14.2652L51.2759 13.9802L50.0329 19.85ZM41.6518 65.9041C46.51 66.6902 51.4924 65.9756 55.9339 63.8558L53.3495 58.4409C50.0098 60.0349 46.2633 60.5722 42.6101 59.9811L41.6518 65.9041ZM26.3336 56.7621C30.0884 61.6497 35.5675 64.9197 41.6518 65.9041L42.6101 59.9811C38.035 59.2409 33.9151 56.7821 31.0916 53.1068L26.3336 56.7621ZM21 41.3534C21 46.8433 22.8131 52.1795 26.1576 56.533L30.9156 52.8777C28.3765 49.5725 27 45.5213 27 41.3534H21ZM26.2638 23.3289C22.8504 27.7721 21 33.2182 21 38.8211H27C27 34.5401 28.4138 30.379 31.0218 26.9842L26.2638 23.3289ZM31.1489 26.8187C33.9636 23.1549 38.024 20.6503 42.5613 19.7791L41.43 13.8867C35.4508 15.0347 30.1 18.3353 26.3909 23.1635L31.1489 26.8187ZM42.5613 19.7791C45.0317 19.3048 47.572 19.3289 50.0329 19.85L51.2759 13.9802C48.0329 13.2935 44.6854 13.2617 41.43 13.8867L42.5613 19.7791ZM59 60.5001V40.0001L53 40.0001L53 60.5001H59ZM56 37.0001H38V43.0001H56L56 37.0001Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M28.7699 24.9911L30.3559 26.2095L28.7699 24.9911ZM28.6428 25.1566L27.0568 23.9381L27.0568 23.9381L28.6428 25.1566ZM24 38.8211H22H24ZM28.5366 54.7053L30.1226 53.4869L30.1226 53.4869L28.5366 54.7053ZM28.7126 54.9344L27.1266 56.1528L27.1266 56.1528L28.7126 54.9344ZM56.8615 62.305C57.8583 61.8293 58.2807 60.6355 57.805 59.6386C57.3292 58.6418 56.1354 58.2193 55.1385 58.6951L56.8615 62.305ZM54.6417 61.1484L55.5032 62.9533L54.6417 61.1484ZM50.6544 16.9151L50.2401 18.8717V18.8717L50.6544 16.9151ZM51.5857 19.1567C52.6663 19.3855 53.7278 18.695 53.9566 17.6144C54.1854 16.5338 53.4949 15.4723 52.4143 15.2435L51.5857 19.1567ZM42.131 62.9426L42.4504 60.9683H42.4504L42.131 62.9426ZM41.9957 16.8329L42.3728 18.797L41.9957 16.8329ZM54 60.5001C54 61.6047 54.8954 62.5001 56 62.5001C57.1046 62.5001 58 61.6047 58 60.5001H54ZM56 40.0001L58 40.0001C58 38.8955 57.1046 38.0001 56 38.0001L56 40.0001ZM38 38.0001C36.8954 38.0001 36 38.8955 36 40.0001C36 41.1047 36.8954 42.0001 38 42.0001V38.0001ZM27.1839 23.7727L27.0568 23.9381L30.2288 26.375L30.3559 26.2095L27.1839 23.7727ZM22 38.8211V41.3534H26V38.8211H22ZM26.9506 55.9238L27.1266 56.1528L30.2986 53.716L30.1226 53.4869L26.9506 55.9238ZM55.1385 58.6951L53.7803 59.3434L55.5032 62.9533L56.8615 62.305L55.1385 58.6951ZM50.2401 18.8717L51.5857 19.1567L52.4143 15.2435L51.0687 14.9585L50.2401 18.8717ZM41.8115 64.9169C46.4689 65.6705 51.2453 64.9855 55.5032 62.9533L53.7803 59.3434C50.2569 61.025 46.3044 61.5919 42.4504 60.9683L41.8115 64.9169ZM27.1266 56.1528C30.7262 60.8385 35.9787 63.9732 41.8115 64.9169L42.4504 60.9683C37.6238 60.1874 33.2773 57.5933 30.2986 53.716L27.1266 56.1528ZM22 41.3534C22 46.623 23.7403 51.745 26.9506 55.9238L30.1226 53.4869C27.4492 50.007 26 45.7416 26 41.3534H22ZM27.0568 23.9381C23.7777 28.2066 22 33.4385 22 38.8211H26C26 34.3198 27.4866 29.9445 30.2288 26.375L27.0568 23.9381ZM30.3559 26.2095C33.3197 22.3516 37.5951 19.7143 42.3728 18.797L41.6186 14.8688C35.8797 15.9707 30.744 19.1386 27.1839 23.7727L30.3559 26.2095ZM42.3728 18.797C44.974 18.2976 47.6488 18.323 50.2401 18.8717L51.0687 14.9585C47.9561 14.2994 44.7431 14.2689 41.6186 14.8688L42.3728 18.797ZM58 60.5001V40.0001L54 40.0001L54 60.5001H58ZM56 38.0001H38V42.0001H56L56 38.0001Z"
            fill="#EB5757"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M52 17.2001L50.6544 16.9151C47.8025 16.3112 44.8586 16.2832 41.9957 16.8329C36.7374 17.8425 32.0318 20.7451 28.7699 24.9911L28.6428 25.1566C25.6321 29.0756 24 33.8792 24 38.8211V41.3534C24 46.1823 25.5948 50.876 28.5366 54.7053L28.7126 54.9344C32.0017 59.2159 36.8012 62.0803 42.131 62.9426C46.3866 63.6312 50.7511 63.0052 54.6417 61.1484L56 60.5001V40.0001H38"
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
            d="M41.6181 15.0416C44.7427 14.4417 47.9556 14.4722 51.0682 15.1314L52.4139 15.4163C53.4945 15.6452 54.185 16.7067 53.9561 17.7873C53.7273 18.8679 52.6658 19.5584 51.5852 19.3295L50.2396 19.0446C47.6483 18.4959 44.9735 18.4705 42.3723 18.9699C37.5947 19.8872 33.3192 22.5245 30.3554 26.3824L30.2283 26.5478C27.4861 30.1174 25.9995 34.4927 25.9995 38.9939V41.5263C25.9995 45.9145 27.4488 50.1799 30.1221 53.6598L30.2981 53.8889C33.2768 57.7662 37.6233 60.3602 42.4499 61.1412C46.3039 61.7647 50.2564 61.1979 53.7798 59.5162L53.9995 59.4114V42.1729H37.9995C36.8949 42.1729 35.9995 41.2775 35.9995 40.1729C35.9995 39.0684 36.8949 38.1729 37.9995 38.1729L55.9995 38.1729C57.1041 38.1729 57.9995 39.0684 57.9995 40.1729V60.6286C58.008 61.0223 57.8994 61.4096 57.6913 61.7401C57.5409 61.979 57.3386 62.1884 57.0909 62.3491C57.0052 62.4051 56.915 62.4546 56.8209 62.497L55.5027 63.1262C51.2448 65.1583 46.4684 65.8434 41.811 65.0898C35.9782 64.1461 30.7257 61.0113 27.1261 56.3257L26.9501 56.0966C23.7398 51.9178 21.9995 46.7958 21.9995 41.5263V38.9939C21.9995 33.6113 23.7772 28.3794 27.0563 24.111L27.1834 23.9455C30.7435 19.3114 35.8792 16.1435 41.6181 15.0416Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreG = forwardRef((props, ref) => {
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

CoreG.displayName = 'CoreG'

export default CoreG
