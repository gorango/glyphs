
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M33.3124 15.6843C36.0475 13.4763 39.9527 13.4763 42.6878 15.6843C45.0323 17.577 46.0087 20.6938 45.163 23.5858L44.7749 24.9128C43.8949 27.9221 41.1354 29.9902 38.0001 29.9902C34.8648 29.9902 32.1052 27.9221 31.2252 24.9128L30.8372 23.5858C29.9915 20.6938 30.9679 17.577 33.3124 15.6843Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M19.8181 21.3179C21.5756 19.5606 24.4248 19.5607 26.1821 21.3181L32.6467 27.7833C34.0665 29.2031 35.9921 30.0008 38 30.0008C40.0079 30.0008 41.9335 29.2031 43.3533 27.7833L49.8179 21.3181C51.5752 19.5607 54.4244 19.5606 56.1819 21.3179C57.9393 23.0752 57.9394 25.9244 56.1821 27.6819L48.4919 35.3727C47.8568 36.0078 47.5 36.8692 47.5 37.7674V63.5C47.5 65.9853 45.4853 68 43 68C40.5147 68 38.5 65.9853 38.5 63.5V51.5C38.5 51.2239 38.2761 51 38 51C37.7239 51 37.5 51.2239 37.5 51.5V63.5C37.5 65.9853 35.4853 68 33 68C30.5147 68 28.5 65.9853 28.5 63.5V37.7674C28.5 36.8692 28.1432 36.0078 27.5081 35.3727L19.8179 27.6819C18.0606 25.9244 18.0607 23.0752 19.8181 21.3179Z"
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
            d="M28.8803 23.5166L26.1821 20.8181C24.4248 19.0607 21.5756 19.0606 19.8181 20.8179C18.0607 22.5752 18.0606 25.4244 19.8179 27.1819L27.5081 34.8727C28.1432 35.5078 28.5 36.3692 28.5 37.2674V46L28.5 63C28.5 65.4853 30.5147 67.5 33 67.5C35.4853 67.5 37.5 65.4853 37.5 63L37.5 51C37.5 50.7239 37.7239 50.5 38 50.5C38.2761 50.5 38.5 50.7239 38.5 51L38.5 63C38.5 65.4853 40.5147 67.5 43 67.5C45.4853 67.5 47.5 65.4853 47.5 63L47.5 46V37.2674C47.5 36.3692 47.8568 35.5078 48.4919 34.8727L56.1821 27.1819C57.9394 25.4244 57.9393 22.5752 56.1819 20.8179C54.4244 19.0606 51.5752 19.0607 49.8179 20.8181L47.1197 23.5166C47.1076 23.5601 47.0952 23.6036 47.0825 23.6471L46.6945 24.9741C45.5651 28.836 42.0237 31.4902 38 31.4902C33.9763 31.4902 30.4349 28.836 29.3055 24.9741L28.9175 23.6471C28.9048 23.6036 28.8924 23.5601 28.8803 23.5166Z"
            fill="currentColor"
          />
          <path
            d="M33.3123 15.1842C36.0474 12.9762 39.9526 12.9762 42.6877 15.1842C45.0322 17.0768 46.0086 20.1937 45.1629 23.0857L44.7748 24.4126C43.8949 27.4219 41.1353 29.4901 38 29.4901C34.8647 29.4901 32.1052 27.4219 31.2252 24.4126L30.8371 23.0857C29.9914 20.1937 30.9678 17.0768 33.3123 15.1842Z"
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
            d="M19.8181 20.8179C21.5756 19.0606 24.4248 19.0607 26.1821 20.8181L32.6467 27.2833C34.0665 28.7031 35.9921 29.5008 38 29.5008C40.0079 29.5008 41.9335 28.7031 43.3533 27.2833L49.8179 20.8181C51.5752 19.0607 54.4244 19.0606 56.1819 20.8179C57.9393 22.5752 57.9394 25.4244 56.1821 27.1819L48.4919 34.8727C47.8568 35.5078 47.5 36.3692 47.5 37.2674V46L47.5 63C47.5 65.4853 45.4853 67.5 43 67.5C40.5147 67.5 38.5 65.4853 38.5 63L38.5 51C38.5 50.7239 38.2761 50.5 38 50.5C37.7239 50.5 37.5 50.7239 37.5 51L37.5 63C37.5 65.4853 35.4853 67.5 33 67.5C30.5147 67.5 28.5 65.4853 28.5 63L28.5 46V37.2674C28.5 36.3692 28.1432 35.5078 27.5081 34.8727L19.8179 27.1819C18.0606 25.4244 18.0607 22.5752 19.8181 20.8179Z"
            fill="#F2C94C"
          />
          <path
            d="M33.3123 15.1842C36.0474 12.9762 39.9526 12.9762 42.6877 15.1842C45.0322 17.0768 46.0086 20.1937 45.1629 23.0857L44.7748 24.4126C43.8949 27.4219 41.1353 29.4901 38 29.4901C34.8647 29.4901 32.1052 27.4219 31.2252 24.4126L30.8371 23.0857C29.9914 20.1937 30.9678 17.0768 33.3123 15.1842Z"
            fill="#F2994A"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M19.8181 21.318C21.5756 19.5607 24.4248 19.5608 26.1821 21.3182L32.6467 27.7833C34.0665 29.2032 35.9921 30.0008 38 30.0008C40.0079 30.0008 41.9335 29.2032 43.3533 27.7833L49.8179 21.3182C51.5752 19.5608 54.4244 19.5607 56.1819 21.318C57.9393 23.0753 57.9394 25.9245 56.1821 27.6819L48.4919 35.3727C47.8568 36.0079 47.5 36.8693 47.5 37.7675V63.5001C47.5 65.9854 45.4853 68.0001 43 68.0001C40.5147 68.0001 38.5 65.9854 38.5 63.5001V51.5001C38.5 51.2239 38.2761 51.0001 38 51.0001C37.7239 51.0001 37.5 51.2239 37.5 51.5001V63.5001C37.5 65.9854 35.4853 68.0001 33 68.0001C30.5147 68.0001 28.5 65.9854 28.5 63.5001V37.7675C28.5 36.8693 28.1432 36.0079 27.5081 35.3727L19.8179 27.6819C18.0606 25.9245 18.0607 23.0753 19.8181 21.318Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M33.3123 15.6843C36.0474 13.4763 39.9526 13.4763 42.6877 15.6843C45.0322 17.577 46.0086 20.6938 45.1629 23.5858L44.7748 24.9128C43.8949 27.9221 41.1353 29.9902 38 29.9902C34.8647 29.9902 32.1052 27.9221 31.2252 24.9128L30.8371 23.5858C29.9914 20.6938 30.9678 17.577 33.3123 15.6843Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M19.8181 21.318C21.5756 19.5607 24.4248 19.5608 26.1821 21.3182L32.6467 27.7833C34.0665 29.2032 35.9921 30.0008 38 30.0008C40.0079 30.0008 41.9335 29.2032 43.3533 27.7833L49.8179 21.3182C51.5752 19.5608 54.4244 19.5607 56.1819 21.318C57.9393 23.0753 57.9394 25.9245 56.1821 27.6819L48.4919 35.3727C47.8568 36.0079 47.5 36.8693 47.5 37.7675V63.5001C47.5 65.9854 45.4853 68.0001 43 68.0001C40.5147 68.0001 38.5 65.9854 38.5 63.5001V51.5001C38.5 51.2239 38.2761 51.0001 38 51.0001C37.7239 51.0001 37.5 51.2239 37.5 51.5001V63.5001C37.5 65.9854 35.4853 68.0001 33 68.0001C30.5147 68.0001 28.5 65.9854 28.5 63.5001V37.7675C28.5 36.8693 28.1432 36.0079 27.5081 35.3727L19.8179 27.6819C18.0606 25.9245 18.0607 23.0753 19.8181 21.318Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33.3123 15.6843C36.0474 13.4763 39.9526 13.4763 42.6877 15.6843C45.0322 17.577 46.0086 20.6938 45.1629 23.5858L44.7748 24.9128C43.8949 27.9221 41.1353 29.9902 38 29.9902C34.8647 29.9902 32.1052 27.9221 31.2252 24.9128L30.8371 23.5858C29.9914 20.6938 30.9678 17.577 33.3123 15.6843Z"
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
            d="M43.944 13.6281C40.4758 10.8284 35.5241 10.8284 32.056 13.6281C29.9627 15.318 28.7295 17.7775 28.5575 20.3653L27.5964 19.4041C25.0581 16.8655 20.9425 16.8654 18.404 19.4037C15.8655 21.942 15.8653 26.0576 18.4036 28.5961L26.0938 36.2869C26.3539 36.547 26.5 36.8997 26.5 37.2675V63.0001C26.5 66.5899 29.4101 69.5001 33 69.5001C35.0104 69.5001 36.8077 68.5873 38 67.1536C39.1923 68.5873 40.9896 69.5001 43 69.5001C46.5898 69.5001 49.5 66.5899 49.5 63.0001V37.2675C49.5 36.8997 49.6461 36.547 49.9062 36.2869L57.5964 28.5961C60.1347 26.0576 60.1345 21.942 57.596 19.4037C55.0575 16.8654 50.9419 16.8655 48.4036 19.4041L47.4425 20.3652C47.2705 17.7775 46.0373 15.318 43.944 13.6281ZM34.5686 16.7405C36.5707 15.1243 39.4293 15.1243 41.4314 16.7405C43.1476 18.126 43.8623 20.4075 43.2433 22.5245L42.8552 23.8515C42.2246 26.0081 40.2469 27.4902 38 27.4902C35.7531 27.4902 33.7754 26.0081 33.1448 23.8515L32.7567 22.5245C32.1377 20.4075 32.8524 18.126 34.5686 16.7405ZM21.2323 22.2322C22.2087 21.256 23.7916 21.256 24.7678 22.2324L31.2324 28.6975C33.0273 30.4924 35.4616 31.5009 38 31.5009C40.5384 31.5009 42.9727 30.4924 44.7676 28.6975L51.2322 22.2324C52.2084 21.256 53.7914 21.256 54.7677 22.2322C55.744 23.2085 55.7441 24.7914 54.7678 25.7678L47.0776 33.4586C46.0675 34.4688 45.5 35.8389 45.5 37.2675V63.0001C45.5 64.3808 44.3807 65.5001 43 65.5001C41.6193 65.5001 40.5 64.3808 40.5 63.0001V51.0001C40.5 49.6194 39.3807 48.5001 38 48.5001C36.6193 48.5001 35.5 49.6194 35.5 51.0001V63.0001C35.5 64.3808 34.3807 65.5001 33 65.5001C31.6193 65.5001 30.5 64.3808 30.5 63.0001V37.2675C30.5 35.8389 29.9325 34.4688 28.9224 33.4586L21.2322 25.7678C20.2559 24.7914 20.256 23.2085 21.2323 22.2322Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreChild = forwardRef((props, ref) => {
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

CoreChild.displayName = 'CoreChild'

export default CoreChild
