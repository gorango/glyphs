
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M66.6932 57.5111C68.5552 51.6257 67.0891 45.4952 63.2685 41.5598C58.7453 36.9006 49.549 27.5 49.549 27.5L42.5 34.7609C42.5 34.7609 52.3103 44.6406 56.294 48.744C58.1672 50.6735 58.1672 53.802 56.294 55.7315C54.4454 57.6357 51.4633 57.6608 49.5849 55.8067L42.6098 62.9914C46.6562 67.1018 52.4456 68.2973 57.506 66.5782C57.6787 71.2586 61.5274 75 66.25 75C71.0825 75 75 71.0825 75 66.25C75 61.5662 71.3198 57.7419 66.6932 57.5111Z"
            fill="#F44321"
          />
          <path
            d="M57.5111 13.3068C51.6257 11.4448 45.4952 12.9109 41.5598 16.7315C36.9006 21.2547 27.5 30.451 27.5 30.451L34.7609 37.5C34.7609 37.5 44.6406 27.6897 48.744 23.706C50.6735 21.8328 53.802 21.8328 55.7315 23.706C57.6357 25.5546 57.6608 28.5367 55.8067 30.4151L62.9914 37.3902C67.1018 33.3438 68.2973 27.5544 66.5782 22.494C71.2586 22.3213 75 18.4726 75 13.75C75 8.91752 71.0825 5.00002 66.25 5.00002C61.5662 5.00002 57.7419 8.68025 57.5111 13.3068Z"
            fill="#FBB854"
          />
          <path
            d="M13.3068 22.4889C11.4448 28.3743 12.9109 34.5048 16.7315 38.4402C21.2547 43.0994 30.451 52.5 30.451 52.5L37.5 45.2391C37.5 45.2391 27.6897 35.3594 23.706 31.256C21.8328 29.3265 21.8327 26.198 23.706 24.2685C25.5546 22.3643 28.5367 22.3392 30.4151 24.1933L37.3902 17.0086C33.3438 12.8982 27.5544 11.7027 22.494 13.4218C22.3213 8.74138 18.4726 5 13.75 5C8.91752 5 5.00002 8.91754 5.00002 13.75C5.00002 18.4338 8.68025 22.2581 13.3068 22.4889Z"
            fill="#7AC143"
          />
          <path
            d="M22.4889 66.6932C28.3743 68.5552 34.5048 67.0891 38.4402 63.2685C43.0994 58.7453 52.5 49.549 52.5 49.549L45.2391 42.5C45.2391 42.5 35.3594 52.3103 31.256 56.294C29.3265 58.1672 26.198 58.1672 24.2685 56.294C22.3643 54.4454 22.3392 51.4633 24.1933 49.5849L17.0086 42.6098C12.8982 46.6562 11.7027 52.4456 13.4218 57.506C8.74138 57.6787 5 61.5274 5 66.25C5 71.0825 8.91754 75 13.75 75C18.4338 75 22.2581 71.3198 22.4889 66.6932Z"
            fill="#5091CD"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M66.6932 57.5111C68.5552 51.6257 67.0891 45.4952 63.2685 41.5598C58.7453 36.9006 49.549 27.5 49.549 27.5L42.5 34.7609C42.5 34.7609 52.3103 44.6406 56.294 48.744C58.1672 50.6735 58.1672 53.802 56.294 55.7315C54.4454 57.6357 51.4633 57.6607 49.5849 55.8067L42.6098 62.9914C46.6562 67.1018 52.4456 68.2973 57.506 66.5782C57.6787 71.2586 61.5274 75 66.25 75C71.0825 75 75 71.0825 75 66.25C75 61.5662 71.3197 57.7419 66.6932 57.5111Z"
            fill="currentColor"
          />
          <path
            d="M57.5111 13.3068C51.6257 11.4448 45.4952 12.9109 41.5598 16.7315C36.9006 21.2547 27.5 30.451 27.5 30.451L34.7609 37.5C34.7609 37.5 44.6406 27.6897 48.744 23.706C50.6735 21.8327 53.802 21.8327 55.7315 23.706C57.6357 25.5546 57.6608 28.5367 55.8067 30.4151L62.9914 37.3902C67.1018 33.3438 68.2973 27.5544 66.5782 22.4939C71.2586 22.3213 75 18.4726 75 13.75C75 8.91752 71.0825 5.00002 66.25 5.00002C61.5662 5.00002 57.7419 8.68024 57.5111 13.3068Z"
            fill="currentColor"
          />
          <path
            d="M13.3068 22.4889C11.4448 28.3743 12.9109 34.5048 16.7315 38.4402C21.2547 43.0994 30.451 52.5 30.451 52.5L37.5 45.2391C37.5 45.2391 27.6897 35.3594 23.706 31.256C21.8328 29.3265 21.8328 26.198 23.706 24.2685C25.5546 22.3643 28.5367 22.3392 30.4151 24.1933L37.3902 17.0086C33.3438 12.8982 27.5544 11.7027 22.494 13.4218C22.3213 8.74138 18.4726 5 13.75 5C8.91752 5 5.00002 8.91754 5.00002 13.75C5.00002 18.4338 8.68025 22.2581 13.3068 22.4889Z"
            fill="currentColor"
          />
          <path
            d="M22.4889 66.6932C28.3743 68.5552 34.5048 67.0891 38.4402 63.2685C43.0994 58.7453 52.5 49.549 52.5 49.549L45.2391 42.5C45.2391 42.5 35.3594 52.3103 31.256 56.294C29.3265 58.1672 26.198 58.1672 24.2685 56.294C22.3643 54.4454 22.3392 51.4633 24.1933 49.5849L17.0086 42.6098C12.8982 46.6562 11.7027 52.4456 13.4218 57.506C8.74138 57.6787 5 61.5274 5 66.25C5 71.0825 8.91754 75 13.75 75C18.4338 75 22.2581 71.3197 22.4889 66.6932Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M66.6932 57.5111C68.5552 51.6257 67.0891 45.4952 63.2685 41.5598C58.7453 36.9006 49.549 27.5 49.549 27.5L42.5 34.7609C42.5 34.7609 52.3103 44.6406 56.294 48.744C58.1672 50.6735 58.1672 53.802 56.294 55.7315C54.4454 57.6357 51.4633 57.6607 49.5849 55.8067L42.6098 62.9914C46.6562 67.1018 52.4456 68.2973 57.506 66.5782C57.6787 71.2586 61.5274 75 66.25 75C71.0825 75 75 71.0825 75 66.25C75 61.5662 71.3198 57.7419 66.6932 57.5111Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M57.5111 13.3068C51.6257 11.4448 45.4952 12.9109 41.5598 16.7315C36.9006 21.2547 27.5 30.451 27.5 30.451L34.7609 37.5C34.7609 37.5 44.6406 27.6897 48.744 23.706C50.6735 21.8327 53.802 21.8327 55.7315 23.706C57.6357 25.5546 57.6608 28.5367 55.8067 30.4151L62.9914 37.3902C67.1018 33.3438 68.2973 27.5544 66.5782 22.4939C71.2586 22.3213 75 18.4726 75 13.75C75 8.91752 71.0825 5.00002 66.25 5.00002C61.5662 5.00002 57.7419 8.68024 57.5111 13.3068Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M13.3068 22.4889C11.4448 28.3743 12.9109 34.5048 16.7315 38.4402C21.2547 43.0994 30.451 52.5 30.451 52.5L37.5 45.2391C37.5 45.2391 27.6897 35.3594 23.706 31.256C21.8328 29.3265 21.8328 26.198 23.706 24.2685C25.5546 22.3643 28.5367 22.3392 30.4151 24.1933L37.3902 17.0086C33.3438 12.8982 27.5544 11.7027 22.494 13.4218C22.3213 8.74138 18.4726 5 13.75 5C8.91752 5 5.00002 8.91754 5.00002 13.75C5.00002 18.4338 8.68025 22.2581 13.3068 22.4889Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22.4889 66.6932C28.3743 68.5552 34.5048 67.0891 38.4402 63.2685C43.0994 58.7453 52.5 49.549 52.5 49.549L45.2391 42.5C45.2391 42.5 35.3594 52.3103 31.256 56.294C29.3265 58.1672 26.198 58.1672 24.2685 56.294C22.3643 54.4454 22.3392 51.4633 24.1933 49.5849L17.0086 42.6098C12.8982 46.6562 11.7027 52.4456 13.4218 57.506C8.74138 57.6787 5 61.5274 5 66.25C5 71.0825 8.91754 75 13.75 75C18.4338 75 22.2581 71.3197 22.4889 66.6932Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsJoomla = forwardRef((props, ref) => {
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

BrandsJoomla.displayName = 'BrandsJoomla'

export default BrandsJoomla
