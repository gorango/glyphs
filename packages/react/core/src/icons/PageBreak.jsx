
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M58.6276 28.6315L58.8282 28.832C59.5785 29.5822 60 30.5997 60 31.6607V62.0025C60 64.2116 58.2091 66.0025 56 66.0025H24C21.7909 66.0025 20 64.2116 20 62.0025L20 18.0029C20 15.7936 21.7911 14.0027 24.0004 14.0029L42.3422 14.0049C43.4027 14.0051 44.4199 14.4264 45.1699 15.1763L45.3534 15.3598"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58.5858 28.586L45.4142 15.4145C44.8923 14.8926 44 15.2622 44 16.0002V26.0002C44 28.2094 45.7909 30.0002 48 30.0002H58C58.738 30.0002 59.1077 29.1079 58.5858 28.586Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 44.0002H24"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34 44.0002H46"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56 44.0002H68"
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
            d="M50.3422 14.0076C51.4027 14.0077 52.4199 14.4291 53.1699 15.1789L53.3534 15.3625C52.8261 14.9245 52 15.2935 52 16.0037V26.0037C52 28.2128 53.7909 30.0037 56 30.0037H66C66.7174 30.0037 67.0867 29.1606 66.6276 28.6342L66.8282 28.8347C67.5785 29.5849 68 30.6024 68 31.6634V38.0029H28L28 18.0056C28 15.7963 29.7911 14.0054 32.0004 14.0056L50.3422 14.0076ZM28 50.0029L28 62.0052C28 64.2143 29.7909 66.0052 32 66.0052H64C66.2091 66.0052 68 64.2143 68 62.0052V50.0029H28Z"
            fill="currentColor"
          />
          <path
            d="M12 44.0002H24"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34 44.0002H46"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56 44.0002H68"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.1699 15.1763C44.4199 14.4264 43.4027 14.0051 42.3422 14.0049L24.0004 14.0029C21.7911 14.0027 20 15.7936 20 18.0029L20 62.0025C20 64.2116 21.7909 66.0025 24 66.0025H56C58.2091 66.0025 60 64.2116 60 62.0025L60 31.6607C60 30.5997 59.5785 29.5822 58.8282 28.832L58.6276 28.6315C59.0867 29.1579 58.7174 30.001 58 30.001H48C45.7909 30.001 44 28.2101 44 26.001V16.001C44 15.2909 44.8261 14.9218 45.3534 15.3598L45.1699 15.1763Z"
            fill="#F2C94C"
          />
          <path
            d="M58.5858 28.586L45.4142 15.4145C44.8923 14.8926 44 15.2622 44 16.0002V26.0002C44 28.2094 45.7909 30.0002 48 30.0002L58 30.0002C58.738 30.0002 59.1077 29.1079 58.5858 28.586Z"
            fill="#F2F2F2"
          />
          <path
            d="M12 44.0002H24"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34 44.0002H46"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56 44.0002H68"
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
            d="M45.1699 15.1763C44.4199 14.4264 43.4027 14.0051 42.3422 14.0049L24.0004 14.0029C21.7911 14.0027 20 15.7936 20 18.0029L20 62.0025C20 64.2116 21.7909 66.0025 24 66.0025H56C58.2091 66.0025 60 64.2116 60 62.0025V31.6607C60 30.5997 59.5785 29.5822 58.8282 28.832L58.6276 28.6315C59.0867 29.1579 58.7174 30.001 58 30.001H48C45.7909 30.001 44 28.2101 44 26.001V16.001C44 15.2909 44.8261 14.9218 45.3534 15.3598L45.1699 15.1763Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58.5858 28.5861L45.4142 15.4145C44.8923 14.8926 44 15.2629 44 16.001V26.001C44 28.2101 45.7909 30.001 48 30.001H58C58.738 30.001 59.1077 29.1079 58.5858 28.5861Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58 30.001C58.7174 30.001 59.0867 29.1579 58.6276 28.6315L58.8282 28.832C59.5785 29.5822 60 30.5997 60 31.6607V62.0025C60 64.2116 58.2091 66.0025 56 66.0025H24C21.7909 66.0025 20 64.2116 20 62.0025L20 18.0029C20 15.7936 21.7911 14.0027 24.0004 14.0029L42.3422 14.0049C43.4027 14.0051 44.4199 14.4264 45.1699 15.1763L45.3534 15.3598C44.8261 14.9218 44 15.2909 44 16.001M58 30.001H48C45.7909 30.001 44 28.2101 44 26.001V16.001M58 30.001C58.738 30.001 59.1077 29.1079 58.5858 28.5861L45.4142 15.4145C44.8923 14.8926 44 15.2629 44 16.001M12 44.0003H24M34 44.0003H46M56 44.0003H68"
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
            d="M32 44.0003C32 42.8957 32.8954 42.0003 34 42.0003H46C47.1046 42.0003 48 42.8957 48 44.0003C48 45.1049 47.1046 46.0003 46 46.0003H34C32.8954 46.0003 32 45.1049 32 44.0003Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62 42.0003V31.6607C62 30.0692 61.3677 28.543 60.2423 27.4177L60.0872 27.2627C60.059 27.2321 60.0299 27.2018 60 27.1719L46.8284 14.0003C46.7897 13.9616 46.7505 13.9244 46.7106 13.8886L46.584 13.7619C45.4589 12.6371 43.9333 12.0051 42.3424 12.0049L24.0007 12.0029C20.6867 12.0026 18 14.689 18 18.0029L18 42.0003H12C10.8954 42.0003 10 42.8957 10 44.0003C10 45.1049 10.8954 46.0003 12 46.0003H18V62.0025C18 65.3162 20.6863 68.0025 24 68.0025H56C59.3137 68.0025 62 65.3162 62 62.0025V46.0003H68C69.1046 46.0003 70 45.1049 70 44.0003C70 42.8957 69.1046 42.0003 68 42.0003H62ZM24.0002 16.0029C22.8956 16.0028 22 16.8983 22 18.0029L22 42.0003H24C25.1046 42.0003 26 42.8957 26 44.0003C26 45.1049 25.1046 46.0003 24 46.0003H22L22 62.0025C22 63.1071 22.8954 64.0025 24 64.0025H56C57.1046 64.0025 58 63.1071 58 62.0025V46.0003H56C54.8954 46.0003 54 45.1049 54 44.0003C54 42.8957 54.8954 42.0003 56 42.0003H58V32.001H48C44.7346 32.001 42.0784 29.3924 42.0017 26.1454C42.0006 26.0974 42 26.0492 42 26.001V16.0049L24.0002 16.0029ZM48 28.0003C46.8954 28.0003 46 27.1048 46 26.0003V18.8287L55.1716 28.0003H48Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CorePageBreak = forwardRef((props, ref) => {
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

CorePageBreak.displayName = 'CorePageBreak'

export default CorePageBreak
