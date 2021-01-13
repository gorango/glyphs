
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M8.8125 66.375C8.8125 66.6511 9.03636 66.875 9.3125 66.875H46.3938C52.695 66.875 58.8086 64.7305 63.729 60.7941L69.6551 56.0533C71.2723 54.7595 71.5345 52.3996 70.2408 50.7824C68.947 49.1652 66.5871 48.903 64.9699 50.1967L59.0438 54.9376C58.2404 55.5804 57.2235 55.875 56.1945 55.875H34.8124C34.6744 55.875 34.5625 55.7631 34.5625 55.6251C34.5625 55.4896 34.6705 55.3787 34.806 55.3768C34.897 55.3756 34.988 55.375 35.0791 55.375H44.8125C46.8836 55.375 48.5625 53.6961 48.5625 51.625C48.5625 49.5539 46.8836 47.875 44.8125 47.875H35.0791C30.4929 47.875 25.9925 49.0114 21.974 51.1644C20.6071 51.8968 19.1042 52.375 17.5535 52.375H9.3125C9.03636 52.375 8.8125 52.5989 8.8125 52.875V66.375Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38.3275 16.2845C38.9052 15.0067 40.7198 15.0067 41.2976 16.2845L42.249 18.3889C42.9807 20.0073 43.829 21.5705 44.7872 23.0661L47.4963 27.2945C48.9481 29.5606 49.204 32.3922 48.1819 34.8819C47.3506 36.907 45.7489 38.5189 43.7291 39.363L43.364 39.5156C41.0916 40.4654 38.5335 40.4654 36.2611 39.5156L35.8959 39.363C33.8761 38.5189 32.2744 36.907 31.4431 34.8819C30.4211 32.3922 30.6769 29.5606 32.1288 27.2945L34.8378 23.0661C35.796 21.5705 36.6443 20.0073 37.3761 18.3889L38.3275 16.2845Z"
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
            d="M8.8125 66.375C8.8125 66.6511 9.03636 66.875 9.3125 66.875H46.3938C52.695 66.875 58.8086 64.7305 63.729 60.7941L69.6551 56.0533C71.2723 54.7595 71.5345 52.3996 70.2408 50.7824C68.947 49.1652 66.5871 48.903 64.9699 50.1967L59.0438 54.9376C58.2404 55.5804 57.2235 55.875 56.1945 55.875H55.3125L34.8124 55.875C34.6744 55.875 34.5625 55.7631 34.5625 55.6251C34.5625 55.4896 34.6705 55.3787 34.806 55.3768C34.897 55.3756 34.988 55.375 35.0791 55.375H44.8125C46.8836 55.375 48.5625 53.6961 48.5625 51.625C48.5625 49.5539 46.8836 47.875 44.8125 47.875H35.0791C30.4929 47.875 25.9925 49.0114 21.974 51.1644C20.6071 51.8968 19.1042 52.375 17.5535 52.375H9.3125C9.03636 52.375 8.8125 52.5989 8.8125 52.875L8.8125 66.375Z"
            fill="currentColor"
          />
          <path
            d="M38.3275 16.2846C38.9052 15.0068 40.7198 15.0068 41.2975 16.2846L42.249 18.3889C42.9807 20.0074 43.829 21.5706 44.7872 23.0662L47.4962 27.2946C48.9481 29.5607 49.204 32.3923 48.1819 34.8819C47.3506 36.907 45.7489 38.5189 43.7291 39.3631L43.3639 39.5157C41.0916 40.4654 38.5334 40.4654 36.2611 39.5157L35.8959 39.3631C33.8761 38.5189 32.2744 36.907 31.4431 34.8819C30.421 32.3923 30.6769 29.5607 32.1288 27.2946L34.8378 23.0662C35.796 21.5706 36.6443 20.0074 37.376 18.3889L38.3275 16.2846Z"
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
            d="M8.8125 66.375C8.8125 66.6511 9.03636 66.875 9.3125 66.875H46.3938C52.695 66.875 58.8086 64.7305 63.729 60.7941L69.6551 56.0533C71.2723 54.7595 71.5345 52.3996 70.2408 50.7824C68.947 49.1652 66.5871 48.903 64.9699 50.1967L59.0438 54.9376C58.2404 55.5804 57.2235 55.875 56.1945 55.875H55.3125L34.8124 55.875C34.6744 55.875 34.5625 55.7631 34.5625 55.6251C34.5625 55.4896 34.6705 55.3787 34.806 55.3768C34.897 55.3756 34.988 55.375 35.0791 55.375H44.8125C46.8836 55.375 48.5625 53.6961 48.5625 51.625C48.5625 49.5539 46.8836 47.875 44.8125 47.875H35.0791C30.4929 47.875 25.9925 49.0114 21.974 51.1644C20.6071 51.8968 19.1042 52.375 17.5535 52.375H9.3125C9.03636 52.375 8.8125 52.5989 8.8125 52.875L8.8125 66.375Z"
            fill="#F2C94C"
          />
          <path
            d="M38.3275 16.2846C38.9052 15.0068 40.7198 15.0068 41.2975 16.2846L42.249 18.3889C42.9807 20.0074 43.829 21.5706 44.7872 23.0662L47.4962 27.2946C48.9481 29.5607 49.204 32.3923 48.1819 34.8819C47.3506 36.907 45.7489 38.5189 43.7291 39.3631L43.3639 39.5157C41.0916 40.4654 38.5334 40.4654 36.2611 39.5157L35.8959 39.3631C33.8761 38.5189 32.2744 36.907 31.4431 34.8819C30.421 32.3923 30.6769 29.5607 32.1288 27.2946L34.8378 23.0662C35.796 21.5706 36.6443 20.0074 37.376 18.3889L38.3275 16.2846Z"
            fill="#2D9CDB"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M8.8125 66.375C8.8125 66.6511 9.03636 66.875 9.3125 66.875H46.3938C52.695 66.875 58.8086 64.7304 63.729 60.7941L69.6551 56.0532C71.2723 54.7594 71.5345 52.3996 70.2408 50.7823C68.947 49.1651 66.5871 48.9029 64.9699 50.1967L59.0438 54.9375C58.2404 55.5803 57.2235 55.875 56.1945 55.875H34.8124C34.6744 55.875 34.5625 55.7631 34.5625 55.6251C34.5625 55.4896 34.6705 55.3786 34.806 55.3768C34.897 55.3756 34.988 55.375 35.0791 55.375H44.8125C46.8836 55.375 48.5625 53.696 48.5625 51.625C48.5625 49.5539 46.8836 47.875 44.8125 47.875H35.0791C30.4929 47.875 25.9925 49.0114 21.974 51.1644C20.6071 51.8967 19.1042 52.375 17.5535 52.375H9.3125C9.03636 52.375 8.8125 52.5988 8.8125 52.875V66.375Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M38.3275 16.2845C38.9052 15.0067 40.7198 15.0067 41.2975 16.2845L42.249 18.3889C42.9807 20.0073 43.829 21.5705 44.7872 23.0661L47.4962 27.2945C48.9481 29.5606 49.204 32.3922 48.1819 34.8819C47.3506 36.907 45.7489 38.5189 43.7291 39.363L43.3639 39.5156C41.0916 40.4654 38.5334 40.4654 36.2611 39.5156L35.8959 39.363C33.8761 38.5189 32.2744 36.907 31.4431 34.8819C30.421 32.3922 30.6769 29.5606 32.1288 27.2945L34.8378 23.0661C35.796 21.5705 36.6443 20.0073 37.376 18.3889L38.3275 16.2845Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M8.8125 66.375C8.8125 66.6511 9.03636 66.875 9.3125 66.875H46.3938C52.695 66.875 58.8086 64.7304 63.729 60.7941L69.6551 56.0532C71.2723 54.7594 71.5345 52.3996 70.2408 50.7823C68.947 49.1651 66.5871 48.9029 64.9699 50.1967L59.0438 54.9375C58.2404 55.5803 57.2235 55.875 56.1945 55.875H34.8124C34.6744 55.875 34.5625 55.7631 34.5625 55.6251C34.5625 55.4896 34.6705 55.3786 34.806 55.3768C34.897 55.3756 34.988 55.375 35.0791 55.375H44.8125C46.8836 55.375 48.5625 53.696 48.5625 51.625C48.5625 49.5539 46.8836 47.875 44.8125 47.875H35.0791C30.4929 47.875 25.9925 49.0114 21.974 51.1644C20.6071 51.8967 19.1042 52.375 17.5535 52.375H9.3125C9.03636 52.375 8.8125 52.5988 8.8125 52.875V66.375Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38.3275 16.2845C38.9052 15.0067 40.7198 15.0067 41.2975 16.2845L42.249 18.3889C42.9807 20.0073 43.829 21.5705 44.7872 23.0661L47.4962 27.2945C48.9481 29.5606 49.204 32.3922 48.1819 34.8819C47.3506 36.907 45.7489 38.5189 43.7291 39.363L43.3639 39.5156C41.0916 40.4654 38.5334 40.4654 36.2611 39.5156L35.8959 39.363C33.8761 38.5189 32.2744 36.907 31.4431 34.8819C30.421 32.3922 30.6769 29.5606 32.1288 27.2945L34.8378 23.0661C35.796 21.5705 36.6443 20.0073 37.376 18.3889L38.3275 16.2845Z"
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
            d="M43.1199 15.4606C41.8332 12.6147 37.7918 12.6147 36.5051 15.4606L35.5537 17.5649C34.8618 19.0952 34.0597 20.5731 33.1538 21.9872L30.4447 26.2156C28.6411 29.0308 28.3232 32.5485 29.5929 35.6414C30.6257 38.1572 32.6155 40.1596 35.1246 41.2083L35.4898 41.361C38.2557 42.5169 41.3693 42.5169 44.1352 41.361L44.5004 41.2083C47.0095 40.1596 48.9993 38.1572 50.0321 35.6414C51.3018 32.5485 50.9839 29.0308 49.1803 26.2156L46.4712 21.9872C45.5653 20.5731 44.7632 19.0952 44.0713 17.5649L43.1199 15.4606ZM39.1984 19.2128L39.8125 17.8546L40.4266 19.2128C41.1982 20.9195 42.0928 22.5679 43.1032 24.145L45.8122 28.3734C46.9123 30.0905 47.1062 32.2359 46.3318 34.1224C45.7019 35.6568 44.4882 36.8781 42.9579 37.5177L42.5927 37.6703C40.8138 38.4138 38.8112 38.4138 37.0323 37.6703L36.6671 37.5177C35.1368 36.8781 33.9231 35.6568 33.2932 34.1224C32.5188 32.2359 32.7127 30.0905 33.8128 28.3734L36.5218 24.145C37.5322 22.5679 38.4268 20.9195 39.1984 19.2128Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.0791 45.875C30.1623 45.875 25.3376 47.0933 21.0295 49.4015C19.8711 50.0221 18.6928 50.375 17.5535 50.375H9.3125C7.93179 50.375 6.8125 51.4942 6.8125 52.875V66.375C6.8125 67.7557 7.93179 68.875 9.3125 68.875H46.3938C53.1491 68.875 59.7034 66.5759 64.9784 62.3558L70.9045 57.6149C73.3842 55.6311 73.7863 52.0127 71.8025 49.533C69.8187 47.0532 66.2003 46.6512 63.7205 48.635L57.7944 53.3758C57.4067 53.686 56.8543 53.875 56.1945 53.875H50.1056C50.3997 53.1839 50.5625 52.4234 50.5625 51.625C50.5625 48.4493 47.9881 45.875 44.8125 45.875H35.0791ZM22.9185 52.9273C26.6474 50.9295 30.8234 49.875 35.0791 49.875H44.8125C45.779 49.875 46.5625 50.6585 46.5625 51.625C46.5625 52.5915 45.779 53.375 44.8125 53.375H35.0791C34.979 53.375 34.879 53.3756 34.779 53.377C33.534 53.3938 32.5625 54.4112 32.5625 55.6251C32.5625 56.8677 33.5698 57.875 34.8124 57.875H56.1945C57.5927 57.875 59.074 57.4746 60.2932 56.4993L66.2193 51.7584C66.974 51.1547 68.0753 51.277 68.679 52.0317C69.2828 52.7864 69.1604 53.8877 68.4057 54.4915L62.4797 59.2323C57.9138 62.885 52.2408 64.875 46.3938 64.875H10.8125V54.375H17.5535C19.5157 54.375 21.3431 53.7714 22.9185 52.9273Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreHandHoldingWater = forwardRef((props, ref) => {
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

CoreHandHoldingWater.displayName = 'CoreHandHoldingWater'

export default CoreHandHoldingWater