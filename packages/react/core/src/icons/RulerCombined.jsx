
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M14 12C12.8954 12 12 12.8954 12 14V66C12 66.5523 12.2239 67.0523 12.5858 67.4142L36 44V14C36 12.8954 35.1046 12 34 12H14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M67.9999 66C67.9999 67.1046 67.1045 68 65.9999 68L13.9999 68C13.4476 68 12.9476 67.7761 12.5857 67.4142L35.9999 44L65.9999 44C67.1045 44 67.9999 44.8954 67.9999 46V66Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 20L36 20"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 29L36 29"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 38L36 38"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M42 52L42 44"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M51 52L51 44"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M60 52L60 44"
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
            d="M12 14C12 12.8954 12.8954 12 14 12H34C35.1046 12 36 12.8954 36 14V17.5L28 17.5C26.6193 17.5 25.5 18.6193 25.5 20C25.5 21.3807 26.6193 22.5 28 22.5L36 22.5V26.5L28 26.5C26.6193 26.5 25.5 27.6193 25.5 29C25.5 30.3807 26.6193 31.5 28 31.5H36V35.5H28C26.6193 35.5 25.5 36.6193 25.5 38C25.5 39.3807 26.6193 40.5 28 40.5H35.9645L12 64.4645V14Z"
            fill="currentColor"
          />
          <path
            d="M15.5355 68L66 68C67.1046 68 68 67.1046 68 66L68 46C68 44.8954 67.1046 44 66 44H62.5L62.5 52C62.5 53.3807 61.3807 54.5 60 54.5C58.6193 54.5 57.5 53.3807 57.5 52L57.5 44H53.5L53.5 52C53.5 53.3807 52.3807 54.5 51 54.5C49.6193 54.5 48.5 53.3807 48.5 52L48.5 44H44.5L44.5 52C44.5 53.3807 43.3807 54.5 42 54.5C40.6193 54.5 39.5 53.3807 39.5 52L39.5 44.0355L15.5355 68Z"
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
            d="M14 12C12.8954 12 12 12.8954 12 14V66C12 66.5523 12.2239 67.0523 12.5858 67.4142L36 44V14C36 12.8954 35.1046 12 34 12H14Z"
            fill="#F2C94C"
          />
          <path
            d="M12.5858 67.4142L11.1716 68.8284C11.5466 69.2035 12.0553 69.4142 12.5858 69.4142C13.1162 69.4142 13.6249 69.2035 14 68.8284L12.5858 67.4142ZM36 44L37.4142 45.4142C37.7893 45.0391 38 44.5304 38 44H36ZM14 14V14V10C11.7909 10 10 11.7909 10 14H14ZM14 66V14H10V66H14ZM14 66L14 66H10C10 67.104 10.4499 68.1068 11.1716 68.8284L14 66ZM34.5858 42.5858L11.1716 66L14 68.8284L37.4142 45.4142L34.5858 42.5858ZM34 14V44H38V14H34ZM34 14H38C38 11.7909 36.2091 10 34 10V14ZM14 14H34V10H14V14Z"
            fill="#F2994A"
          />
          <path
            d="M28 20L36 20"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 29L36 29"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 38L36 38"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68 66C68 67.1046 67.1046 68 66 68L14 68C13.4477 68 12.9477 67.7761 12.5858 67.4142L36 44L66 44C67.1046 44 68 44.8954 68 46L68 66Z"
            fill="#F2C94C"
          />
          <path
            d="M68 66L66 66L68 66ZM12.5858 67.4142L11.1716 68.8284C10.7965 68.4534 10.5858 67.9447 10.5858 67.4142C10.5858 66.8838 10.7965 66.3751 11.1716 66L12.5858 67.4142ZM36 44L34.5858 42.5858C34.9609 42.2107 35.4696 42 36 42L36 44ZM66 44L66 46L66 44ZM68 46L70 46L68 46ZM66 66L66 66L70 66C70 68.2091 68.2091 70 66 70L66 66ZM14 66L66 66L66 70L14 70L14 66ZM14 66L14 66L14 70C12.896 70 11.8932 69.5501 11.1716 68.8284L14 66ZM37.4142 45.4142L14 68.8284L11.1716 66L34.5858 42.5858L37.4142 45.4142ZM66 46L36 46L36 42L66 42L66 46ZM66 46L66 42C68.2091 42 70 43.7909 70 46L66 46ZM66 66L66 46L70 46L70 66L66 66Z"
            fill="#F2994A"
          />
          <path
            d="M60 52L60 44"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M51 52L51 44"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M42 52L42 44"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M14 12C12.8954 12 12 12.8954 12 14V66C12 66.5523 12.2239 67.0523 12.5858 67.4142L36 44V14C36 12.8954 35.1046 12 34 12H14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M68 66C68 67.1046 67.1046 68 66 68L14 68C13.4477 68 12.9477 67.7761 12.5858 67.4142L36 44H66C67.1046 44 68 44.8954 68 46L68 66Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12.5858 67.4142C12.2239 67.0523 12 66.5523 12 66V14C12 12.8954 12.8954 12 14 12H34C35.1046 12 36 12.8954 36 14V44M12.5858 67.4142L36 44M12.5858 67.4142C12.9477 67.7761 13.4477 68 14 68L66 68C67.1046 68 68 67.1046 68 66L68 46C68 44.8954 67.1046 44 66 44H36M28 20L36 20M28 29H36M28 38H36M60 52L60 44M51 52L51 44M42 52L42 44"
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
            d="M14 10.272C11.7909 10.272 10 12.0628 10 14.272V66.272C10 67.376 10.4499 68.3787 11.1716 69.1004C11.8932 69.8221 12.896 70.272 14 70.272L66 70.272C68.2091 70.272 70 68.4811 70 66.272V46.272C70 44.0628 68.2091 42.272 66 42.272H38V14.272C38 12.0628 36.2091 10.272 34 10.272H14ZM40 46.272L40 52.272C40 53.3765 40.8954 54.272 42 54.272C43.1046 54.272 44 53.3765 44 52.272L44 46.272H49V52.272C49 53.3765 49.8954 54.272 51 54.272C52.1046 54.272 53 53.3765 53 52.272V46.272H58L58 52.272C58 53.3765 58.8954 54.272 60 54.272C61.1046 54.272 62 53.3765 62 52.272L62 46.272H66V66.272L16.8284 66.272L36.8284 46.272H40ZM34 43.4435L14 63.4435V14.272L34 14.272V18.272H28C26.8954 18.272 26 19.1674 26 20.272C26 21.3765 26.8954 22.272 28 22.272L34 22.272V27.272H28C26.8954 27.272 26 28.1674 26 29.272C26 30.3765 26.8954 31.272 28 31.272H34V36.272H28C26.8954 36.272 26 37.1674 26 38.272C26 39.3765 26.8954 40.272 28 40.272H34V43.4435Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreRulerCombined = forwardRef((props, ref) => {
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

CoreRulerCombined.displayName = 'CoreRulerCombined'

export default CoreRulerCombined
