
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M51.3136 12.6862C44.0696 9.68565 35.9303 9.68565 28.6862 12.6862C21.4422 15.6868 15.6868 21.4422 12.6862 28.6862C9.68564 35.9303 9.68565 44.0696 12.6862 51.3136C15.6868 58.5577 21.4422 64.3131 28.6862 67.3136C35.9303 70.3142 44.0696 70.3142 51.3136 67.3136C58.5577 64.3131 64.3131 58.5577 67.3136 51.3136C70.3142 44.0696 70.3142 35.9303 67.3136 28.6862C64.3131 21.4422 58.5577 15.6868 51.3136 12.6862Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46.3639 24.636C42.2891 22.9482 37.7108 22.9482 33.636 24.636C29.5612 26.3238 26.3238 29.5612 24.636 33.636C22.9482 37.7108 22.9482 42.2891 24.636 46.3639C26.3238 50.4387 29.5612 53.6761 33.636 55.3639C37.7108 57.0517 42.2891 57.0517 46.3639 55.3639C50.4387 53.6761 53.6761 50.4387 55.3639 46.3639C57.0517 42.2891 57.0517 37.7108 55.3639 33.636C53.6761 29.5612 50.4387 26.3238 46.3639 24.636Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M11.0532 46.01L24.5017 46.0291"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33.9902 11.0532L33.9712 24.5016"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68.9473 33.9902L55.4988 33.9712"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46.0103 68.9471L46.0293 55.4985"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24.5017 33.99L11.0533 33.9709"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46.0103 24.5017L46.0293 11.0533"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M55.4985 46.0103L68.947 46.0293"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33.9902 55.4985L33.9712 68.947"
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
            d="M52.079 10.8385C44.3449 7.6349 35.655 7.6349 27.9209 10.8385C20.1868 14.042 14.042 20.1868 10.8385 27.9209C7.6349 35.655 7.6349 44.3449 10.8385 52.079C14.042 59.8131 20.1868 65.9578 27.9209 69.1614C35.655 72.365 44.3449 72.365 52.079 69.1614C59.8131 65.9578 65.9578 59.8131 69.1614 52.079C72.365 44.3449 72.365 35.655 69.1614 27.9209C65.9578 20.1868 59.8131 14.042 52.079 10.8385ZM66.9004 33.987L57.6283 33.9739C58.9636 37.8797 58.9636 42.1202 57.6283 46.0259L66.9004 46.0128C67.7853 42.0537 67.7853 37.9461 66.9004 33.987ZM34.4013 26.4836C37.986 24.9988 42.0138 24.9988 45.5985 26.4836C49.1832 27.9685 52.0313 30.8165 53.5161 34.4013C55.001 37.986 55.001 42.0137 53.5161 45.5984C52.0313 49.1832 49.1832 52.0312 45.5985 53.5161C42.0138 55.0009 37.986 55.0009 34.4013 53.5161C30.8166 52.0312 27.9686 49.1832 26.4837 45.5984C24.9989 42.0137 24.9989 37.986 26.4837 34.4013C27.9686 30.8165 30.8166 27.9685 34.4013 26.4836ZM22.3716 46.0259C21.0363 42.1202 21.0363 37.8797 22.3715 33.9739L13.0995 33.9871C12.2146 37.9461 12.2146 42.0537 13.0995 46.0128L22.3716 46.0259ZM33.9881 66.9006L33.975 57.6286C37.8808 58.9636 42.1214 58.9634 46.027 57.6278L46.0139 66.9001C42.0548 67.7852 37.9473 67.7854 33.9881 66.9006ZM46.0139 13.0997C42.0548 12.2146 37.9473 12.2145 33.9881 13.0992L33.975 22.3711C37.8808 21.0361 42.1214 21.0363 46.027 22.3719L46.0139 13.0997Z"
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
            d="M51.3136 12.6862C44.0696 9.68564 35.9303 9.68564 28.6862 12.6862C21.4422 15.6868 15.6868 21.4422 12.6862 28.6862C9.68564 35.9303 9.68565 44.0696 12.6862 51.3136C15.6868 58.5577 21.4422 64.3131 28.6862 67.3136C35.9303 70.3142 44.0696 70.3142 51.3136 67.3136C58.5577 64.3131 64.3131 58.5577 67.3136 51.3136C70.3142 44.0696 70.3142 35.9303 67.3136 28.6862C64.3131 21.4422 58.5577 15.6868 51.3136 12.6862ZM46.3639 24.6359C42.2891 22.9481 37.7107 22.9481 33.636 24.6359C29.5612 26.3237 26.3238 29.5611 24.636 33.6359C22.9481 37.7107 22.9481 42.289 24.636 46.3638C26.3238 50.4386 29.5612 53.676 33.636 55.3638C37.7107 57.0516 42.2891 57.0516 46.3639 55.3638C50.4387 53.676 53.6761 50.4386 55.3639 46.3638C57.0517 42.289 57.0517 37.7107 55.3639 33.6359C53.6761 29.5611 50.4387 26.3237 46.3639 24.6359Z"
            fill="#F2F2F2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.0532 46.0102C10.2303 42.0464 10.2303 37.954 11.0532 33.9902L24.5017 33.9711C22.9932 37.8487 22.9932 42.1517 24.5017 46.0292L11.0532 46.0102ZM46.0102 68.9471C42.0464 69.7701 37.954 69.7701 33.9902 68.9471L33.9711 55.4986C37.8487 57.0071 42.1517 57.007 46.0292 55.4986L46.0102 68.9471ZM68.9471 33.9902C69.7701 37.954 69.7701 42.0464 68.9471 46.0102L55.4986 46.0292C57.0071 42.1517 57.0071 37.8487 55.4987 33.9711L68.9471 33.9902ZM46.0102 11.0532C42.0464 10.2303 37.954 10.2303 33.9902 11.0532L33.9711 24.5016C37.8487 22.9931 42.1517 22.9931 46.0292 24.5016L46.0102 11.0532Z"
            fill="#EB5757"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.3136 12.6862C44.0696 9.68565 35.9303 9.68565 28.6862 12.6862C21.4422 15.6868 15.6868 21.4422 12.6862 28.6862C9.68564 35.9303 9.68565 44.0696 12.6862 51.3136C15.6868 58.5577 21.4422 64.3131 28.6862 67.3136C35.9303 70.3142 44.0696 70.3142 51.3136 67.3136C58.5577 64.3131 64.3131 58.5577 67.3136 51.3136C70.3142 44.0696 70.3142 35.9303 67.3136 28.6862C64.3131 21.4422 58.5577 15.6868 51.3136 12.6862ZM46.3639 24.6359C42.2891 22.9481 37.7107 22.9481 33.636 24.6359C29.5612 26.3237 26.3238 29.5611 24.636 33.6359C22.9481 37.7107 22.9481 42.289 24.636 46.3638C26.3238 50.4386 29.5612 53.676 33.636 55.3638C37.7107 57.0516 42.2891 57.0516 46.3639 55.3638C50.4387 53.676 53.6761 50.4386 55.3639 46.3638C57.0517 42.289 57.0517 37.7107 55.3639 33.6359C53.6761 29.5611 50.4387 26.3237 46.3639 24.6359Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M11.053 46.01C10.2301 42.0462 10.2301 37.9538 11.053 33.99L24.5015 33.971C22.993 37.8485 22.993 42.1515 24.5016 46.029L11.053 46.01Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46.01 68.9469C42.0462 69.7699 37.9538 69.7699 33.99 68.9469L33.971 55.4984C37.8485 57.0069 42.1515 57.0069 46.029 55.4984L46.01 68.9469Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M68.9469 33.99C69.7699 37.9538 69.7699 42.0462 68.9469 46.01L55.4984 46.029C57.0069 42.1515 57.0069 37.8485 55.4985 33.971L68.9469 33.99Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46.01 11.053C42.0462 10.2301 37.9538 10.2301 33.99 11.053L33.971 24.5014C37.8485 22.9929 42.1515 22.993 46.029 24.5015L46.01 11.053Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.3136 12.6862C44.0696 9.68565 35.9303 9.68565 28.6862 12.6862C21.4422 15.6868 15.6868 21.4422 12.6862 28.6862C9.68564 35.9303 9.68565 44.0696 12.6862 51.3136C15.6868 58.5577 21.4422 64.3131 28.6862 67.3136C35.9303 70.3142 44.0696 70.3142 51.3136 67.3136C58.5577 64.3131 64.3131 58.5577 67.3136 51.3136C70.3142 44.0696 70.3142 35.9303 67.3136 28.6862C64.3131 21.4422 58.5577 15.6868 51.3136 12.6862ZM46.3639 24.6359C42.2891 22.9481 37.7107 22.9481 33.636 24.6359C29.5612 26.3237 26.3238 29.5611 24.636 33.6359C22.9481 37.7107 22.9481 42.289 24.636 46.3638C26.3238 50.4386 29.5612 53.676 33.636 55.3638C37.7107 57.0516 42.2891 57.0516 46.3639 55.3638C50.4387 53.676 53.6761 50.4386 55.3639 46.3638C57.0517 42.289 57.0517 37.7107 55.3639 33.6359C53.6761 29.5611 50.4387 26.3237 46.3639 24.6359Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M11.053 46.01C10.2301 42.0462 10.2301 37.9538 11.053 33.99L24.5015 33.971C22.993 37.8485 22.993 42.1515 24.5016 46.029L11.053 46.01Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46.01 68.9469C42.0462 69.7699 37.9538 69.7699 33.99 68.9469L33.971 55.4984C37.8485 57.0069 42.1515 57.0069 46.029 55.4984L46.01 68.9469Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68.9469 33.99C69.7699 37.9538 69.7699 42.0462 68.9469 46.01L55.4984 46.029C57.0069 42.1515 57.0069 37.8485 55.4985 33.971L68.9469 33.99Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46.01 11.053C42.0462 10.2301 37.9538 10.2301 33.99 11.053L33.971 24.5014C37.8485 22.9929 42.1515 22.993 46.029 24.5015L46.01 11.053Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
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
            d="M33.5711 70.9026C33.5752 70.9035 33.5793 70.9043 33.5835 70.9052C37.8154 71.7838 42.1846 71.7838 46.4165 70.9052C46.4218 70.9041 46.4271 70.903 46.4323 70.9018C48.3514 70.5024 50.2422 69.9222 52.079 69.1614C59.8131 65.9578 65.9578 59.8131 69.1614 52.079C69.9222 50.2422 70.5024 48.3514 70.9018 46.4323C70.903 46.4271 70.9041 46.4218 70.9052 46.4165C71.7838 42.1846 71.7838 37.8154 70.9052 33.5835C70.9043 33.5793 70.9035 33.5752 70.9026 33.5711C70.5031 31.6508 69.9227 29.7588 69.1614 27.9209C65.9578 20.1868 59.8131 14.042 52.079 10.8385C44.3449 7.6349 35.655 7.6349 27.9209 10.8385C20.1868 14.042 14.042 20.1868 10.8385 27.9209C7.6349 35.655 7.6349 44.3449 10.8385 52.079C14.042 59.8131 20.1868 65.9578 27.9209 69.1614C29.7588 69.9227 31.6508 70.5031 33.5711 70.9026ZM48.0136 13.6263C48.8691 13.8863 49.715 14.1889 50.5483 14.534C57.3023 17.3316 62.6683 22.6976 65.4659 29.4516C65.811 30.2849 66.1136 31.1308 66.3736 31.9864L56.8118 31.9728C54.9753 28.1262 51.8738 25.0246 48.0272 23.1881L48.0136 13.6263ZM31.9864 13.6263C31.1308 13.8863 30.2849 14.1888 29.4516 14.534C22.6976 17.3316 17.3316 22.6976 14.534 29.4516C14.1888 30.2849 13.8863 31.1308 13.6263 31.9864L23.1881 31.9728C25.0245 28.1261 28.1261 25.0245 31.9728 23.188L31.9864 13.6263ZM44.0252 21.81C41.3742 21.2234 38.6258 21.2234 35.9748 21.81L35.9876 12.7294C38.648 12.338 41.352 12.338 44.0123 12.7294L44.0252 21.81ZM34.6811 26.3711C34.5875 26.4076 34.4943 26.4451 34.4013 26.4836C30.8166 27.9685 27.9686 30.8165 26.4837 34.4013C26.4452 34.4942 26.4077 34.5875 26.3712 34.6811C26.3693 34.6861 26.3673 34.6911 26.3654 34.6961C25.0384 38.1072 25.0384 41.8928 26.3655 45.3039C26.3671 45.308 26.3686 45.3121 26.3702 45.3161C26.407 45.4105 26.4449 45.5046 26.4837 45.5984C27.9686 49.1832 30.8166 52.0312 34.4013 53.5161C37.986 55.0009 42.0138 55.0009 45.5985 53.5161C49.1832 52.0312 52.0313 49.1832 53.5161 45.5984C55.001 42.0137 55.001 37.986 53.5161 34.4013C52.0313 30.8165 49.1832 27.9685 45.5985 26.4836C45.504 26.4445 45.4092 26.4064 45.314 26.3693C45.3106 26.368 45.3073 26.3667 45.3039 26.3654C41.8928 25.0383 38.1072 25.0383 34.6961 26.3654C34.6911 26.3673 34.6861 26.3692 34.6811 26.3711ZM21.81 35.9748C21.2234 38.6258 21.2234 41.3742 21.8101 44.0252L12.7294 44.0123C12.338 41.352 12.338 38.648 12.7294 35.9876L21.81 35.9748ZM23.1882 48.0272C25.0247 51.8737 28.1262 54.9752 31.9728 56.8117L31.9864 66.3736C31.1308 66.1136 30.2849 65.811 29.4516 65.4659C22.6976 62.6683 17.3316 57.3023 14.534 50.5483C14.1889 49.715 13.8863 48.8691 13.6263 48.0136L23.1882 48.0272ZM44.0123 67.2706C41.352 67.6619 38.648 67.6619 35.9876 67.2706L35.9748 58.1898C38.6258 58.7764 41.3742 58.7764 44.0252 58.1898L44.0123 67.2706ZM66.3735 48.0136C66.1136 48.8691 65.811 49.715 65.4659 50.5483C62.6683 57.3023 57.3023 62.6683 50.5483 65.4659C49.715 65.811 48.8691 66.1136 48.0136 66.3735L48.0272 56.8116C51.8737 54.9752 54.9752 51.8737 56.8116 48.0272L66.3735 48.0136ZM67.2706 35.9876C67.6619 38.648 67.6619 41.352 67.2706 44.0123L58.1898 44.0252C58.7765 41.3742 58.7765 38.6258 58.1899 35.9748L67.2706 35.9876Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreLifeRing = forwardRef((props, ref) => {
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

CoreLifeRing.displayName = 'CoreLifeRing'

export default CoreLifeRing