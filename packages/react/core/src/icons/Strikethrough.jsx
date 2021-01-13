
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M24 51.5V52C24 58.6274 29.3726 64 36 64H44.5425C50.8703 64 56 58.8703 56 52.5425C56 47.3563 52.5165 42.8169 47.5069 41.4751L41.0667 39.75L33.4675 37.8502C28.5303 36.6159 25.0667 32.1798 25.0667 27.0907C25.0667 20.9655 30.0321 16 36.1573 16H42.9333C49.5608 16 54.9333 21.3726 54.9333 28V28.5"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 40H64"
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
            d="M22.0667 27.0907C22.0667 19.3086 28.3753 13 36.1573 13H42.9333C51.2176 13 57.9333 19.7157 57.9333 28V28.5C57.9333 30.1569 56.5902 31.5 54.9333 31.5C53.2765 31.5 51.9333 30.1569 51.9333 28.5V28C51.9333 23.0294 47.9039 19 42.9333 19H36.1573C31.689 19 28.0667 22.6223 28.0667 27.0907C28.0667 29.9689 29.5854 32.5609 31.9463 34H23.8764C22.7179 31.9426 22.0667 29.578 22.0667 27.0907Z"
            fill="currentColor"
          />
          <path
            d="M53 52.5425C53 49.9464 51.8174 47.5698 49.9029 46H16C14.3431 46 13 44.6569 13 43C13 41.3431 14.3431 40 16 40H64C65.6569 40 67 41.3431 67 43C67 44.6569 65.6569 46 64 46H57.4357C58.4412 47.9798 59 50.2093 59 52.5425C59 60.5271 52.5271 67 44.5425 67H36C27.7157 67 21 60.2843 21 52V51.5C21 49.8431 22.3431 48.5 24 48.5C25.6569 48.5 27 49.8431 27 51.5V52C27 56.9706 31.0294 61 36 61H44.5425C49.2134 61 53 57.2134 53 52.5425Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M33.4675 37.8502L32.9824 39.7905L33.4675 37.8502ZM41.0667 39.75L41.5841 37.8181C41.5734 37.8152 41.5626 37.8124 41.5517 37.8097L41.0667 39.75ZM47.5069 41.4751L48.0244 39.5432L47.5069 41.4751ZM26 51.5C26 50.3954 25.1046 49.5 24 49.5C22.8954 49.5 22 50.3954 22 51.5H26ZM52.9333 28.5C52.9333 29.6046 53.8288 30.5 54.9333 30.5C56.0379 30.5 56.9333 29.6046 56.9333 28.5H52.9333ZM42.9333 14H36.1573V18H42.9333V14ZM36 66H44.5425V62H36V66ZM32.9824 39.7905L40.5816 41.6903L41.5517 37.8097L33.9525 35.9099L32.9824 39.7905ZM40.5492 41.6819L46.9895 43.407L48.0244 39.5432L41.5841 37.8181L40.5492 41.6819ZM26 52V51.5H22V52H26ZM52.9333 28V28.5H56.9333V28H52.9333ZM58 52.5425C58 46.4511 53.9084 41.1192 48.0244 39.5432L46.9895 43.407C51.1245 44.5146 54 48.2616 54 52.5425H58ZM23.0667 27.0907C23.0667 33.0976 27.1549 38.3336 32.9824 39.7905L33.9525 35.9099C29.9057 34.8982 27.0667 31.2621 27.0667 27.0907H23.0667ZM44.5425 66C51.9749 66 58 59.9749 58 52.5425H54C54 57.7657 49.7657 62 44.5425 62V66ZM36 62C30.4772 62 26 57.5229 26 52H22C22 59.732 28.268 66 36 66V62ZM42.9333 18C48.4562 18 52.9333 22.4772 52.9333 28H56.9333C56.9333 20.268 50.6653 14 42.9333 14V18ZM36.1573 14C28.9276 14 23.0667 19.8609 23.0667 27.0907H27.0667C27.0667 22.07 31.1367 18 36.1573 18V14Z"
            fill="#EB5757"
          />
          <path
            d="M16 40H64"
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
            d="M24 51.5V52C24 58.6274 29.3726 64 36 64H44.5425C50.8703 64 56 58.8703 56 52.5425C56 47.3563 52.5165 42.8169 47.5069 41.4751L41.0667 39.75L33.4675 37.8502C28.5303 36.6159 25.0667 32.1798 25.0667 27.0907C25.0667 20.9655 30.0321 16 36.1573 16H42.9333C49.5608 16 54.9333 21.3726 54.9333 28V28.5M16 40H64"
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
            d="M36.1573 14C28.9276 14 23.0667 19.8609 23.0667 27.0907C23.0667 31.5729 25.343 35.626 28.9197 38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H41.7368L46.9895 43.407C51.1245 44.5146 54 48.2616 54 52.5425C54 57.7657 49.7657 62 44.5425 62H36C30.4772 62 26 57.5229 26 52V51.5C26 50.3954 25.1046 49.5 24 49.5C22.8954 49.5 22 50.3954 22 51.5V52C22 59.732 28.268 66 36 66H44.5425C51.9749 66 58 59.9749 58 52.5425C58 48.338 56.0507 44.4955 52.9082 42H64C65.1046 42 66 41.1046 66 40C66 38.8954 65.1046 38 64 38H42.2632L41.5841 37.8181L41.5517 37.8097L33.9525 35.9099C29.9057 34.8982 27.0667 31.2621 27.0667 27.0907C27.0667 22.07 31.1367 18 36.1573 18H42.9333C48.4562 18 52.9333 22.4772 52.9333 28V28.5C52.9333 29.6046 53.8288 30.5 54.9333 30.5C56.0379 30.5 56.9333 29.6046 56.9333 28.5V28C56.9333 20.268 50.6653 14 42.9333 14H36.1573Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreStrikethrough = forwardRef((props, ref) => {
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

CoreStrikethrough.displayName = 'CoreStrikethrough'

export default CoreStrikethrough
