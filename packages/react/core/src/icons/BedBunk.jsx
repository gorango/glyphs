
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M12 72V8"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 65.9048H68"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 33.9048H68"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 72V33.9048"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M67.6191 65.9049C67.8295 65.9049 68 65.7343 68 65.5239V60.2858C68 53.2902 62.329 47.6191 55.3334 47.6191H35.3016C34.4601 47.6191 33.7778 48.3014 33.7778 49.143V65.5239C33.7778 65.7343 33.9484 65.9049 34.1588 65.9049"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20.4306 52.1669C22.0765 51.236 24.0901 51.236 25.7361 52.1669L25.8192 52.2139C27.4584 53.1411 28.4719 54.8786 28.4719 56.7619C28.4719 58.6451 27.4584 60.3827 25.8192 61.3098L25.7361 61.3568C24.0901 62.2877 22.0765 62.2877 20.4306 61.3568L20.3474 61.3098C18.7082 60.3827 17.6947 58.6451 17.6947 56.7619C17.6947 54.8786 18.7082 53.1411 20.3474 52.2139L20.4306 52.1669Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M67.6191 33.9049C67.8295 33.9049 68 33.7343 68 33.5239V28.2858C68 21.2902 62.329 15.6191 55.3334 15.6191H35.3016C34.4601 15.6191 33.7778 16.3014 33.7778 17.143V33.5239C33.7778 33.7343 33.9484 33.9049 34.1588 33.9049"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20.4306 20.1669C22.0765 19.236 24.0901 19.236 25.7361 20.1669L25.8192 20.2139C27.4584 21.1411 28.4719 22.8786 28.4719 24.7619C28.4719 26.6451 27.4584 28.3827 25.8192 29.3098L25.7361 29.3568C24.0901 30.2877 22.0765 30.2877 20.4306 29.3568L20.3474 29.3098C18.7082 28.3827 17.6947 26.6451 17.6947 24.7619C17.6947 22.8786 18.7082 21.1411 20.3474 20.2139L20.4306 20.1669Z"
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
            d="M34.1588 65.9049H67.6191C67.8295 65.9049 68 65.7343 68 65.5239V60.2858C68 53.2902 62.329 47.6191 55.3334 47.6191H35.3016C34.4601 47.6191 33.7778 48.3014 33.7778 49.143V65.5239C33.7778 65.7343 33.9484 65.9049 34.1588 65.9049Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 40V66.0465V72"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 65.9048H12"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 65.9048V72"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20.4306 52.1668C22.0766 51.2359 24.0901 51.2359 25.7361 52.1668L25.8192 52.2138C27.4584 53.1409 28.4719 54.8785 28.4719 56.7617C28.4719 58.645 27.4584 60.3826 25.8192 61.3097L25.7361 61.3567C24.0901 62.2876 22.0766 62.2876 20.4306 61.3567L20.3475 61.3097C18.7082 60.3826 17.6947 58.645 17.6947 56.7617C17.6947 54.8785 18.7082 53.1409 20.3475 52.2138L20.4306 52.1668Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34.1588 33.9049H67.6191C67.8295 33.9049 68 33.7343 68 33.5239V28.2858C68 21.2902 62.329 15.6191 55.3334 15.6191H35.3016C34.4601 15.6191 33.7778 16.3014 33.7778 17.143V33.5239C33.7778 33.7343 33.9484 33.9049 34.1588 33.9049Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 8V34.0465V40"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 33.9048H12"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 33.9048V40"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20.4306 20.1668C22.0766 19.2359 24.0901 19.2359 25.7361 20.1668L25.8192 20.2138C27.4584 21.1409 28.4719 22.8785 28.4719 24.7617C28.4719 26.645 27.4584 28.3826 25.8192 29.3097L25.7361 29.3567C24.0901 30.2876 22.0766 30.2876 20.4306 29.3567L20.3475 29.3097C18.7082 28.3826 17.6947 26.645 17.6947 24.7617C17.6947 22.8785 18.7082 21.1409 20.3475 20.2138L20.4306 20.1668Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 40V65.9048"
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
            d="M34.1588 65.9049H67.6191C67.8295 65.9049 68 65.7343 68 65.5239V60.2858C68 53.2902 62.329 47.6191 55.3334 47.6191H35.3016C34.4601 47.6191 33.7778 48.3014 33.7778 49.143V65.5239C33.7778 65.7343 33.9484 65.9049 34.1588 65.9049Z"
            fill="#56CCF2"
          />
          <path
            d="M12 40V66.0465V72"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 65.9048H12"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 65.9048V72"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20.4306 52.1668C22.0766 51.2359 24.0901 51.2359 25.7361 52.1668L25.8192 52.2138C27.4584 53.1409 28.4719 54.8785 28.4719 56.7617C28.4719 58.645 27.4584 60.3826 25.8192 61.3097L25.7361 61.3567C24.0901 62.2876 22.0766 62.2876 20.4306 61.3567L20.3475 61.3097C18.7082 60.3826 17.6947 58.645 17.6947 56.7617C17.6947 54.8785 18.7082 53.1409 20.3475 52.2138L20.4306 52.1668Z"
            fill="#F2C94C"
          />
          <path
            d="M34.1588 33.9049H67.6191C67.8295 33.9049 68 33.7343 68 33.5239V28.2858C68 21.2902 62.329 15.6191 55.3334 15.6191H35.3016C34.4601 15.6191 33.7778 16.3014 33.7778 17.143V33.5239C33.7778 33.7343 33.9484 33.9049 34.1588 33.9049Z"
            fill="#56CCF2"
          />
          <path
            d="M12 8V34.0465V40"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 33.9048H12"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 33.9048V40"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20.4306 20.1668C22.0766 19.2359 24.0901 19.2359 25.7361 20.1668L25.8192 20.2138C27.4584 21.1409 28.4719 22.8785 28.4719 24.7617C28.4719 26.645 27.4584 28.3826 25.8192 29.3097L25.7361 29.3567C24.0901 30.2876 22.0766 30.2876 20.4306 29.3567L20.3475 29.3097C18.7082 28.3826 17.6947 26.645 17.6947 24.7617C17.6947 22.8785 18.7082 21.1409 20.3475 20.2138L20.4306 20.1668Z"
            fill="#F2C94C"
          />
          <path
            d="M68 40V65.9048"
            stroke="#4F4F4F"
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
            d="M34.1587 65.9047H67.6191C67.8294 65.9047 68 65.7342 68 65.5238V60.2857C68 53.2901 62.3289 47.619 55.3333 47.619H35.3016C34.46 47.619 33.7778 48.3013 33.7778 49.1428V65.5238C33.7778 65.7342 33.9483 65.9047 34.1587 65.9047Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M20.4306 52.1669C22.0766 51.236 24.0901 51.236 25.7361 52.1669L25.8192 52.2139C27.4585 53.141 28.472 54.8786 28.472 56.7619C28.472 58.6451 27.4585 60.3827 25.8192 61.3098L25.7361 61.3568C24.0901 62.2877 22.0766 62.2877 20.4306 61.3568L20.3475 61.3098C18.7082 60.3827 17.6948 58.6451 17.6948 56.7619C17.6948 54.8786 18.7082 53.141 20.3475 52.2139L20.4306 52.1669Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M34.1587 33.9047H67.6191C67.8294 33.9047 68 33.7342 68 33.5238V28.2857C68 21.2901 62.3289 15.619 55.3333 15.619H35.3016C34.46 15.619 33.7778 16.3013 33.7778 17.1428V33.5238C33.7778 33.7342 33.9483 33.9047 34.1587 33.9047Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M20.4306 20.1669C22.0766 19.236 24.0901 19.236 25.7361 20.1669L25.8192 20.2139C27.4585 21.141 28.472 22.8786 28.472 24.7619C28.472 26.6451 27.4585 28.3827 25.8192 29.3098L25.7361 29.3568C24.0901 30.2877 22.0766 30.2877 20.4306 29.3568L20.3475 29.3098C18.7082 28.3827 17.6948 26.6451 17.6948 24.7619C17.6948 22.8786 18.7082 21.141 20.3475 20.2139L20.4306 20.1669Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 72V8M12 65.9047H68M68 65.9047L68 71.9999M68 65.9047V33.9047H12M67.6191 65.9047H34.1587C33.9483 65.9047 33.7778 65.7342 33.7778 65.5238V49.1428C33.7778 48.3012 34.46 47.619 35.3016 47.619H55.3333C62.329 47.619 68 53.2901 68 60.2857V65.5238C68 65.7342 67.8294 65.9047 67.6191 65.9047ZM17.6948 56.7619C17.6948 54.8786 18.7082 53.141 20.3475 52.2139L20.4306 52.1669C22.0766 51.236 24.0901 51.236 25.7361 52.1669L25.8192 52.2139C27.4585 53.141 28.472 54.8786 28.472 56.7619C28.472 58.6451 27.4585 60.3827 25.8192 61.3098L25.7361 61.3568C24.0901 62.2877 22.0766 62.2877 20.4306 61.3568L20.3475 61.3098C18.7082 60.3827 17.6948 58.6451 17.6948 56.7619ZM67.6191 33.9047H34.1587C33.9483 33.9047 33.7778 33.7342 33.7778 33.5238V17.1428C33.7778 16.3013 34.46 15.619 35.3016 15.619H55.3333C62.329 15.619 68 21.2901 68 28.2857V33.5238C68 33.7342 67.8294 33.9047 67.6191 33.9047ZM17.6948 24.7619C17.6948 22.8786 18.7082 21.141 20.3475 20.2139L20.4306 20.1669C22.0766 19.236 24.0901 19.236 25.7361 20.1669L25.8192 20.2139C27.4585 21.141 28.472 22.8786 28.472 24.7619C28.472 26.6451 27.4585 28.3827 25.8192 29.3098L25.7361 29.3568C24.0901 30.2877 22.0766 30.2877 20.4306 29.3568L20.3475 29.3098C18.7082 28.3827 17.6948 26.6451 17.6948 24.7619Z"
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
            d="M70 65.9144V72.0001C70 73.1047 69.1045 74.0001 68 74.0001C66.8954 74.0001 66 73.1047 66 72.0001V67.9049H14V72C14 73.1046 13.1046 74 12 74C10.8954 74 10 73.1046 10 72V8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8V31.9049H31.7778V17.1428C31.7778 16.8429 31.8153 16.5517 31.8858 16.2737L31.9812 15.96C32.4673 14.5956 33.7704 13.619 35.3016 13.619H55.3333C63.4335 13.619 70 20.1855 70 28.2857V33.5238C70 33.6489 69.9903 33.7718 69.9717 33.8918L70 33.9049L70 33.9137V39.9903M70 65.9144C70 65.9112 70 65.908 70 65.9048M70 65.9144L70 65.9048M70 65.9048V65.5299M70 65.5299C70 65.5278 70 65.5258 70 65.5238M70 65.5299L70 65.5238M70 65.5238V60.2857M70 60.2857C70 60.2806 70 60.2756 70 60.2706M70 60.2857L70 60.2706M70 60.2706V40M70 40C70 39.9968 70 39.9936 70 39.9903M70 40L70 39.9903M66 40.0098C66 40.0065 66 40.0033 66 40.0001M66 40.0098V50.2192C63.3259 47.3867 59.5361 45.619 55.3333 45.619H35.3016C33.8812 45.619 32.657 46.4594 32.0993 47.6702C31.7996 48.3208 31.7863 48.8214 31.7833 48.9366M66 40.0098L66 40.0001M66 40.0001V35.9049H14V63.9049H31.7778V49.1428C31.7778 49.08 31.7794 49.0176 31.7827 48.9555M31.7827 48.9555C31.7829 48.9513 31.7831 48.945 31.7833 48.9366M31.7827 48.9555L31.7833 48.9366M55.3333 49.619C61.2201 49.619 65.993 54.3877 66 60.2728L66 63.9047H35.7778V49.619H55.3333ZM66 31.9047V28.2857C66 22.3946 61.2244 17.619 55.3333 17.619H35.7778V31.9047H66Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBedBunk = forwardRef((props, ref) => {
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

CoreBedBunk.displayName = 'CoreBedBunk'

export default CoreBedBunk
