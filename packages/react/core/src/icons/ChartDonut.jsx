
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M65.6036 25.2178C67.5265 28.5484 68.7998 32.254 69.3115 36.1409C70.3349 43.9148 68.2283 51.7768 63.4551 57.9974C58.6818 64.218 51.633 68.2876 43.8592 69.3111C36.0853 70.3345 28.2234 68.2279 22.0028 63.4547C18.8925 61.068 16.3199 58.1125 14.397 54.7819L27.5296 47.1998C29.4391 50.5073 32.5844 52.9207 36.2733 53.9091C39.9623 54.8976 43.8929 54.3801 47.2003 52.4706C50.5078 50.561 52.9212 47.4158 53.9097 43.7268C54.8981 40.0378 54.3807 36.1073 52.4711 32.7998L65.6036 25.2178Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M41.162 10.4586L40.5662 25.6111C37.9924 25.5099 35.4387 26.1009 33.171 27.3225C30.9034 28.544 29.0049 30.3515 27.6735 32.5564C26.342 34.7613 25.6264 37.2829 25.6011 39.8585C25.5758 42.4341 26.2417 44.9694 27.5296 47.2L14.397 54.7821C12.4741 51.4515 11.2008 47.7459 10.6891 43.8589C9.66563 36.0851 11.7722 28.2231 16.5455 22.0025C21.3187 15.7819 28.3676 11.7123 36.1414 10.6888C37.8166 10.4683 39.4959 10.3931 41.162 10.4586Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M41.1488 10.458C47.2188 10.6941 53.1139 12.7979 57.9975 16.5451C61.099 18.925 63.6658 21.8705 65.5869 25.1896L52.4628 32.7861C51.2454 30.6829 49.5155 28.9219 47.4342 27.6673C45.3529 26.4127 42.9879 25.7052 40.5596 25.6108L41.1488 10.458Z"
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
            d="M38.5494 12.9746C37.8557 13.0119 37.1614 13.076 36.4677 13.1673C29.3513 14.1042 22.8985 17.8297 18.5289 23.5243C14.1593 29.2189 12.2308 36.416 13.1677 43.5325C13.5251 46.2476 14.2885 48.866 15.4122 51.3091L24.2755 46.1918C23.4814 44.1751 23.0797 42.0168 23.1012 39.8338C23.1309 36.8111 23.9708 33.8516 25.5334 31.2639C27.096 28.6762 29.3241 26.555 31.9854 25.1214C33.9052 24.0872 35.9997 23.4381 38.1517 23.2013L38.5494 12.9746Z"
            fill="currentColor"
          />
          <path
            d="M43.5573 13.1704L43.1551 23.3969C45.1168 23.7697 47.0037 24.4885 48.7252 25.5262C50.4488 26.5652 51.967 27.9 53.2135 29.4632L62.0711 24.3362C60.5205 22.1513 58.6405 20.1894 56.4759 18.5285C52.6809 15.6165 48.2185 13.7885 43.5573 13.1704Z"
            fill="currentColor"
          />
          <path
            d="M17.9122 55.6392L26.7755 50.522C29.0148 53.3366 32.1101 55.3818 35.6263 56.324C39.9557 57.4841 44.5687 56.8768 48.4504 54.6357C52.332 52.3946 55.1644 48.7033 56.3245 44.3739C57.2667 40.8577 57.043 37.1545 55.7252 33.8079L64.5883 28.6907C65.7121 31.1338 66.4754 33.7522 66.8329 36.4673C67.7698 43.5838 65.8413 50.7809 61.4717 56.4755C57.1021 62.1701 50.6493 65.8956 43.5329 66.8325C36.4164 67.7694 29.2193 65.8409 23.5247 61.4713C21.3521 59.8042 19.4661 57.8339 17.9122 55.6392Z"
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
            d="M69.7714 29.1208C71.7069 32.4733 72.9886 36.2033 73.5036 40.1157C74.5338 47.9406 72.4134 55.8543 67.6088 62.1157C62.8042 68.3772 55.709 72.4736 47.8841 73.5038C40.0592 74.5339 32.1456 72.4135 25.8841 67.6089C22.7534 65.2066 20.1639 62.2317 18.2284 58.8792L31.4472 51.2473C33.3693 54.5764 36.5352 57.0057 40.2484 58.0007C43.9617 58.9956 47.9181 58.4747 51.2472 56.5526C54.5764 54.6305 57.0057 51.4646 58.0006 47.7514C58.9956 44.0382 58.4747 40.0818 56.5526 36.7526L69.7714 29.1208Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.1695 14.2645L44.5698 29.5166C41.9791 29.4147 39.4086 30.0096 37.1261 31.2391C34.8435 32.4687 32.9326 34.288 31.5924 36.5074C30.2522 38.7268 29.5318 41.265 29.5064 43.8576C29.4809 46.4501 30.1512 49.002 31.4476 51.2473L18.2287 58.8792C16.2931 55.5267 15.0115 51.7967 14.4964 47.8843C13.4662 40.0594 15.5867 32.1457 20.3913 25.8843C25.1959 19.6228 32.2911 15.5264 40.1159 14.4962C41.8022 14.2742 43.4925 14.1985 45.1695 14.2645Z"
            fill="#219653"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.1564 14.2639C51.2662 14.5015 57.2001 16.6191 62.1158 20.391C65.2376 22.7865 67.8213 25.7514 69.7551 29.0922L56.5448 36.7387C55.3193 34.6216 53.578 32.8491 51.4831 31.5862C49.3881 30.3234 47.0076 29.6112 44.5633 29.5162L45.1564 14.2639Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M65.6036 25.218C67.5265 28.5486 68.7998 32.2542 69.3115 36.1412C70.335 43.915 68.2283 51.777 63.4551 57.9976C58.6819 64.2182 51.633 68.2878 43.8592 69.3113C36.0854 70.3347 28.2234 68.2281 22.0028 63.4549C18.8925 61.0682 16.3199 58.1127 14.397 54.7821L27.5296 47.2C29.4392 50.5075 32.5844 52.9209 36.2734 53.9093C39.9624 54.8978 43.8929 54.3803 47.2004 52.4708C50.5078 50.5612 52.9212 47.416 53.9097 43.727C54.8982 40.038 54.3807 36.1075 52.4711 32.8L65.6036 25.218Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M41.162 10.4586L40.5662 25.6111C37.9924 25.5099 35.4387 26.1009 33.171 27.3225C30.9034 28.544 29.0049 30.3514 27.6735 32.5564C26.342 34.7613 25.6264 37.2829 25.6011 39.8585C25.5757 42.4341 26.2417 44.9694 27.5296 47.2L14.397 54.7821C12.4741 51.4515 11.2008 47.7459 10.6891 43.8589C9.66563 36.0851 11.7722 28.2231 16.5455 22.0025C21.3187 15.7819 28.3676 11.7123 36.1414 10.6888C37.8166 10.4683 39.4959 10.3931 41.162 10.4586Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M41.1491 10.4581C47.2191 10.6942 53.1143 12.798 57.9978 16.5452C61.0993 18.9251 63.6661 21.8706 65.5872 25.1897L52.4632 32.7862C51.2457 30.683 49.5158 28.922 47.4345 27.6674C45.3532 26.4128 42.9883 25.7053 40.5599 25.6109L41.1491 10.4581Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M14.397 54.7821C16.3199 58.1127 18.8925 61.0682 22.0028 63.4549C28.2234 68.2281 36.0854 70.3347 43.8592 69.3113C51.633 68.2878 58.6819 64.2182 63.4551 57.9976C68.2283 51.777 70.335 43.915 69.3115 36.1412C68.7998 32.2542 67.5265 28.5486 65.6036 25.218L52.4711 32.8C54.3807 36.1075 54.8982 40.038 53.9097 43.727C52.9212 47.416 50.5078 50.5612 47.2004 52.4708C43.8929 54.3803 39.9624 54.8978 36.2734 53.9093C32.5844 52.9209 29.4392 50.5075 27.5296 47.2M14.397 54.7821L27.5296 47.2M14.397 54.7821C12.4741 51.4515 11.2008 47.7459 10.6891 43.8589C9.66563 36.0851 11.7722 28.2231 16.5455 22.0025C21.3187 15.7819 28.3676 11.7123 36.1414 10.6888C37.8166 10.4683 39.4959 10.3931 41.162 10.4586L40.5662 25.6111C37.9924 25.5099 35.4387 26.1009 33.171 27.3225C30.9034 28.544 29.0049 30.3515 27.6735 32.5564C26.342 34.7613 25.6264 37.2829 25.6011 39.8585C25.5757 42.4341 26.2417 44.9694 27.5296 47.2M41.1491 10.4581C47.2191 10.6942 53.1143 12.798 57.9978 16.5452C61.0993 18.9251 63.6661 21.8706 65.5872 25.1897L52.4632 32.7862C51.2457 30.683 49.5158 28.922 47.4345 27.6674C45.3532 26.4128 42.9883 25.7053 40.5599 25.6109L41.1491 10.4581Z"
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
            d="M39.0701 12.4515C38.1817 12.4815 37.2915 12.5547 36.4025 12.6717C29.1545 13.6259 22.5825 17.4203 18.1322 23.2201C13.6819 29.0198 11.7178 36.35 12.672 43.5979C13.0603 46.5476 13.919 49.3854 15.1919 52.0138L24.9036 46.4068C24.0252 44.3369 23.5789 42.1016 23.6012 39.8389C23.63 36.9056 24.4451 34.0337 25.9614 31.5225C27.4778 29.0114 29.6399 26.9529 32.2225 25.5617C34.2125 24.4897 36.3961 23.8441 38.6344 23.657L39.0701 12.4515ZM41.2237 8.4595C39.4504 8.39071 37.6631 8.47124 35.8804 8.70594C27.5806 9.79862 20.0549 14.1436 14.9588 20.785C9.86264 27.4264 7.61352 35.8203 8.70619 44.12C9.25253 48.2698 10.612 52.2263 12.665 55.7821C14.7179 59.338 17.4646 62.4935 20.7853 65.0416C27.4267 70.1377 35.8205 72.3868 44.1203 71.2942C52.42 70.2015 59.9457 65.8565 65.0418 59.2151C70.138 52.5737 72.3871 44.1798 71.2944 35.8801C70.7481 31.7303 69.3886 27.7738 67.3357 24.218C67.3328 24.213 67.3299 24.2081 67.327 24.2031C67.3241 24.198 67.3212 24.1929 67.3182 24.1878C65.2671 20.6443 62.5266 17.4994 59.2153 14.9585C54.005 10.9605 47.7163 8.71482 41.2406 8.46016C41.236 8.45998 41.2314 8.4598 41.2269 8.45962M42.6384 23.8136L43.079 12.6083C48.0227 13.1641 52.7678 15.053 56.7803 18.1319C59.1325 19.9368 61.1548 22.0906 62.7915 24.497L53.0863 30.1147C51.8295 28.4511 50.2632 27.0372 48.4671 25.9545C46.673 24.8731 44.6938 24.1486 42.6384 23.8136ZM50.7357 33.7941C50.7345 33.7921 50.7334 33.7901 50.7322 33.7881C49.6839 31.977 48.1942 30.4606 46.402 29.3803C44.6113 28.3008 42.5768 27.6917 40.4876 27.6096C38.2713 27.5224 36.0722 28.0313 34.1196 29.0832C32.1669 30.1351 30.5321 31.6915 29.3856 33.5902C28.239 35.4889 27.6228 37.6603 27.601 39.8782C27.5792 42.0961 28.1527 44.2792 29.2617 46.2C30.906 49.0481 33.6144 51.1263 36.791 51.9775C39.9676 52.8287 43.3523 52.3831 46.2004 50.7387C49.0485 49.0944 51.1267 46.386 51.9779 43.2094C52.829 40.0327 52.3834 36.6481 50.7391 33.8C50.7379 33.798 50.7368 33.7961 50.7357 33.7941ZM55.0972 33.5932C56.5191 36.9436 56.7934 40.6924 55.8416 44.2446C54.7158 48.446 51.9672 52.028 48.2004 54.2028C44.4336 56.3776 39.9571 56.9669 35.7557 55.8412C32.2035 54.8894 29.094 52.7775 26.9035 49.8709L17.192 55.4779C18.8318 57.8944 20.8599 60.057 23.2203 61.8682C29.0201 66.3185 36.3502 68.2826 43.5981 67.3284C50.8461 66.3742 57.4181 62.5798 61.8684 56.78C66.3187 50.9803 68.2828 43.6501 67.3286 36.4022C66.9403 33.4525 66.0816 30.6147 64.8087 27.9863L55.0972 33.5932Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreChartDonut = forwardRef((props, ref) => {
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

CoreChartDonut.displayName = 'CoreChartDonut'

export default CoreChartDonut