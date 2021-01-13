
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M61 20V64C61 66.2091 59.2091 68 57 68H23C20.7909 68 19 66.2091 19 64V20"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33 58V30"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 58V30"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M65 20H15"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27.855 19.9986L33.9255 12.3865H46.0742L52.1447 19.9986"
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
            d="M33.9256 9.88647C33.1648 9.88647 32.4454 10.2329 31.9711 10.8277L26.6501 17.5H15C13.6193 17.5 12.5 18.6193 12.5 20C12.5 21.3807 13.6193 22.5 15 22.5H16.5V64C16.5 67.5899 19.4101 70.5 23 70.5H57C60.5898 70.5 63.5 67.5899 63.5 64V22.5H65C66.3807 22.5 67.5 21.3807 67.5 20C67.5 18.6193 66.3807 17.5 65 17.5H53.3499L48.029 10.8278C47.5546 10.2329 46.8352 9.88647 46.0744 9.88647H33.9256ZM33 27.5C34.3807 27.5 35.5 28.6193 35.5 30V58C35.5 59.3807 34.3807 60.5 33 60.5C31.6193 60.5 30.5 59.3807 30.5 58V30C30.5 28.6193 31.6193 27.5 33 27.5ZM49.5 30C49.5 28.6193 48.3807 27.5 47 27.5C45.6193 27.5 44.5 28.6193 44.5 30V58C44.5 59.3807 45.6193 60.5 47 60.5C48.3807 60.5 49.5 59.3807 49.5 58V30ZM46.9536 17.4986L44.8704 14.8865H35.1296L33.0464 17.4986H46.9536Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M23 68H57C59.2091 68 61 66.2091 61 64L61 20.5C61 20.2239 60.7761 20 60.5 20L19.5 20C19.2239 20 19 20.2239 19 20.5L19 64C19 66.2091 20.7909 68 23 68Z"
            fill="#56CCF2"
          />
          <path
            d="M33 30L33 58"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 30L47 58"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M65 20H61L19 20H15"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27.855 19.9986L26.2913 18.7517C25.8123 19.3523 25.7197 20.1742 26.053 20.8664C26.3864 21.5586 27.0867 21.9986 27.855 21.9986V19.9986ZM52.1447 19.9986V21.9986C52.913 21.9986 53.6133 21.5586 53.9467 20.8664C54.28 20.1742 54.1874 19.3523 53.7084 18.7517L52.1447 19.9986ZM33.9255 12.3865V10.3865C33.3168 10.3865 32.7413 10.6636 32.3618 11.1395L33.9255 12.3865ZM46.0742 12.3865L47.6379 11.1395C47.2584 10.6636 46.6829 10.3865 46.0742 10.3865V12.3865ZM27.855 21.9986L52.1447 21.9986V17.9986L27.855 17.9986V21.9986ZM29.4186 21.2456L35.4891 13.6335L32.3618 11.1395L26.2913 18.7517L29.4186 21.2456ZM33.9255 14.3865L46.0742 14.3865V10.3865L33.9255 10.3865V14.3865ZM44.5106 13.6335L50.5811 21.2456L53.7084 18.7517L47.6379 11.1395L44.5106 13.6335Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M23 68H57C59.2091 68 61 66.2092 61 64V20.5C61 20.2239 60.7761 20 60.5 20H19.5C19.2239 20 19 20.2239 19 20.5V64C19 66.2092 20.7909 68 23 68Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M52.1449 19.9986H27.8551L33.9256 12.3865H46.0744L52.1449 19.9986Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M19 64V20.5C19 20.2239 19.2239 20 19.5 20H60.5C60.7761 20 61 20.2239 61 20.5V64M19 64C19 66.2092 20.7909 68 23 68H57C59.2091 68 61 66.2092 61 64M19 64V20M61 64V20M61 20H19M61 20H65M19 20H15M33 58V30M47 58V30M27.8551 19.9986H52.1449L46.0744 12.3865H33.9256L27.8551 19.9986Z"
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
            d="M33 28C34.1046 28 35 28.8955 35 30V58C35 59.1046 34.1046 60 33 60C31.8954 60 31 59.1046 31 58V30C31 28.8955 31.8954 28 33 28Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M49 30C49 28.8955 48.1046 28 47 28C45.8954 28 45 28.8955 45 30V58C45 59.1046 45.8954 60 47 60C48.1046 60 49 59.1046 49 58V30Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.9256 10.3865C33.317 10.3865 32.7415 10.6636 32.362 11.1395L26.8909 18H15C13.8954 18 13 18.8955 13 20C13 21.1046 13.8954 22 15 22H17V64C17 67.3137 19.6863 70 23 70H57C60.3137 70 63 67.3137 63 64V22H65C66.1046 22 67 21.1046 67 20C67 18.8955 66.1046 18 65 18H53.1091L47.638 11.1395C47.2585 10.6636 46.683 10.3865 46.0744 10.3865H33.9256ZM32.0082 17.9986L34.8888 14.3865H45.1112L47.9918 17.9986H32.0082ZM21 64V22H59V64C59 65.1046 58.1046 66 57 66H23C21.8954 66 21 65.1046 21 64Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreTrash1 = forwardRef((props, ref) => {
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

CoreTrash1.displayName = 'CoreTrash1'

export default CoreTrash1
