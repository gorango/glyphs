
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M49.0242 14.4358C43.3597 12.5214 37.2232 12.5214 31.5588 14.4358L30.5226 14.786C25.2023 16.5841 20.6721 20.1749 17.7068 24.944L17.5034 25.2712C14.4253 30.2217 13.3205 36.1484 14.408 41.8755C15.4616 47.4241 18.4999 52.399 22.955 55.8702L23.72 56.4662C24.5986 57.1508 25.0473 58.2719 24.784 59.3541L24.5935 60.1374C24.3954 60.9518 24.4167 61.8042 24.6553 62.6078C25.2527 64.62 27.102 66 29.201 66H51.3893C53.4834 66 55.3284 64.6233 55.9244 62.6158C56.1644 61.8073 56.184 60.9493 55.981 60.1306L55.7953 59.3821C55.5247 58.2907 55.9759 57.1573 56.8629 56.4662L57.628 55.8702C62.083 52.399 65.1213 47.4241 66.1749 41.8755C67.2624 36.1484 66.1576 30.2217 63.0795 25.2712L62.8761 24.944C59.9108 20.1749 55.3806 16.5841 50.0604 14.786L49.0242 14.4358Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25.8269 33C27.9705 31.7624 30.6115 31.7624 32.7551 33C34.8987 34.2376 36.2192 36.5248 36.2192 39C36.2192 41.4752 34.8987 43.7624 32.7551 45C30.6115 46.2376 27.9705 46.2376 25.8269 45C23.6833 43.7624 22.3628 41.4752 22.3628 39C22.3628 36.5248 23.6833 34.2376 25.8269 33Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47.8269 33C49.9705 31.7624 52.6115 31.7624 54.7551 33C56.8987 34.2376 58.2192 36.5248 58.2192 39C58.2192 41.4752 56.8987 43.7624 54.7551 45C52.6115 46.2376 49.9705 46.2376 47.8269 45C45.6833 43.7624 44.3628 41.4752 44.3628 39C44.3628 36.5248 45.6833 34.2376 47.8269 33Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.291 58V66"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.291 58V66"
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
            d="M49.0242 14.4358C43.3597 12.5214 37.2232 12.5214 31.5588 14.4358L30.5226 14.786C25.2023 16.5841 20.6721 20.1749 17.7068 24.944L17.5034 25.2712C14.4253 30.2217 13.3205 36.1484 14.408 41.8755C15.4616 47.4241 18.4999 52.399 22.955 55.8702L23.72 56.4662C24.5986 57.1508 25.0473 58.2719 24.784 59.3541L24.5935 60.1374C24.3954 60.9518 24.4167 61.8042 24.6553 62.6078C25.2527 64.62 27.102 66 29.201 66H32.791V58C32.791 56.6193 33.9103 55.5 35.291 55.5C36.6717 55.5 37.791 56.6193 37.791 58V66H42.791V58C42.791 56.6193 43.9103 55.5 45.291 55.5C46.6717 55.5 47.791 56.6193 47.791 58V66H51.3893C53.4834 66 55.3284 64.6233 55.9244 62.6158C56.1644 61.8073 56.184 60.9493 55.981 60.1306L55.7953 59.3821C55.5247 58.2907 55.9759 57.1573 56.8629 56.4662L57.628 55.8702C62.083 52.399 65.1213 47.4241 66.1749 41.8755C67.2624 36.1484 66.1576 30.2217 63.0795 25.2712L62.8761 24.944C59.9108 20.1749 55.3806 16.5841 50.0604 14.786L49.0242 14.4358ZM25.8269 33C27.9705 31.7624 30.6115 31.7624 32.7551 33C34.8987 34.2376 36.2192 36.5248 36.2192 39C36.2192 41.4752 34.8987 43.7624 32.7551 45C30.6115 46.2376 27.9705 46.2376 25.8269 45C23.6833 43.7624 22.3628 41.4752 22.3628 39C22.3628 36.5248 23.6833 34.2376 25.8269 33ZM54.7551 33C52.6115 31.7624 49.9705 31.7624 47.8269 33C45.6833 34.2376 44.3628 36.5248 44.3628 39C44.3628 41.4752 45.6833 43.7624 47.8269 45C49.9705 46.2376 52.6115 46.2376 54.7551 45C56.8987 43.7624 58.2192 41.4752 58.2192 39C58.2192 36.5248 56.8987 34.2376 54.7551 33Z"
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
            d="M49.0242 14.4358C43.3597 12.5214 37.2232 12.5214 31.5588 14.4358L30.5226 14.786C25.2023 16.5841 20.6721 20.1749 17.7068 24.944L17.5034 25.2712C14.4253 30.2217 13.3205 36.1484 14.408 41.8755C15.4616 47.4241 18.4999 52.399 22.955 55.8702L23.72 56.4662C24.5986 57.1508 25.0473 58.2719 24.784 59.3541L24.5935 60.1374C24.3954 60.9518 24.4167 61.8042 24.6553 62.6078C25.2527 64.62 27.102 66 29.201 66H35.2624H45.3196H51.3893C53.4834 66 55.3284 64.6233 55.9244 62.6158C56.1644 61.8073 56.184 60.9493 55.981 60.1306L55.7953 59.3821C55.5247 58.2907 55.9759 57.1573 56.8629 56.4662L57.628 55.8702C62.083 52.399 65.1213 47.4241 66.1749 41.8755C67.2624 36.1484 66.1576 30.2217 63.0795 25.2712L62.8761 24.944C59.9108 20.1749 55.3806 16.5841 50.0604 14.786L49.0242 14.4358Z"
            fill="#9B51E0"
          />
          <path
            d="M31.5588 14.4358L32.1991 16.3305V16.3305L31.5588 14.4358ZM49.0242 14.4358L48.3838 16.3305L48.3838 16.3305L49.0242 14.4358ZM30.5226 14.786L29.8822 12.8913L29.8822 12.8913L30.5226 14.786ZM17.7068 24.944L16.0083 23.888L17.7068 24.944ZM17.5034 25.2712L19.2019 26.3272L17.5034 25.2712ZM14.408 41.8755L16.3729 41.5024L14.408 41.8755ZM22.955 55.8702L24.1842 54.2925L24.1842 54.2925L22.955 55.8702ZM24.5935 60.1374L26.5368 60.6101L24.5935 60.1374ZM24.6553 62.6078L22.738 63.177L24.6553 62.6078ZM55.9244 62.6158L54.0071 62.0465L55.9244 62.6158ZM55.981 60.1306L57.9222 59.6493L55.981 60.1306ZM57.628 55.8702L58.8572 57.4478H58.8572L57.628 55.8702ZM66.1749 41.8755L64.21 41.5024L66.1749 41.8755ZM63.0795 25.2712L61.381 26.3272L61.3811 26.3272L63.0795 25.2712ZM62.8761 24.944L64.5746 23.888L64.5746 23.888L62.8761 24.944ZM50.0604 14.786L50.7007 12.8913L50.7007 12.8913L50.0604 14.786ZM55.7953 59.3821L53.8541 59.8635L55.7953 59.3821ZM24.784 59.3541L22.8407 58.8814L24.784 59.3541ZM32.1991 16.3305C37.4482 14.5565 43.1347 14.5565 48.3838 16.3305L49.6645 12.5411C43.5847 10.4863 36.9982 10.4863 30.9184 12.5411L32.1991 16.3305ZM31.1629 16.6807L32.1991 16.3305L30.9184 12.5411L29.8822 12.8913L31.1629 16.6807ZM19.4053 26.0001C22.1257 21.6247 26.2819 18.3304 31.1629 16.6807L29.8822 12.8913C24.1227 14.8379 19.2185 18.7251 16.0083 23.888L19.4053 26.0001ZM19.2019 26.3272L19.4053 26.0001L16.0083 23.888L15.8049 24.2151L19.2019 26.3272ZM16.3729 41.5024C15.379 36.2682 16.3887 30.8517 19.2019 26.3272L15.8049 24.2151C12.4619 29.5918 11.262 36.0286 12.4431 42.2486L16.3729 41.5024ZM24.1842 54.2925C20.1126 51.1201 17.3358 46.5734 16.3729 41.5024L12.4431 42.2486C13.5874 48.2747 16.8873 53.6778 21.7257 57.4478L24.1842 54.2925ZM24.9492 54.8886L24.1842 54.2925L21.7257 57.4478L22.4908 58.0439L24.9492 54.8886ZM22.8407 58.8814L22.6502 59.6647L26.5368 60.6101L26.7274 59.8268L22.8407 58.8814ZM22.6502 59.6647C22.3685 60.8226 22.3988 62.0346 22.738 63.177L26.5726 62.0385C26.4346 61.5739 26.4223 61.081 26.5368 60.6101L22.6502 59.6647ZM22.738 63.177C23.5874 66.0379 26.2167 68 29.201 68V64C27.9873 64 26.918 63.202 26.5726 62.0385L22.738 63.177ZM29.201 68H35.2624V64H29.201V68ZM35.2624 68H45.3196V64H35.2624V68ZM45.3196 68H51.3893V64H45.3196V68ZM51.3893 68C54.3688 68 56.9936 66.0412 57.8417 63.185L54.0071 62.0465C53.6631 63.2053 52.5981 64 51.3893 64V68ZM57.8417 63.185C58.1832 62.0347 58.211 60.8139 57.9222 59.6493L54.0398 60.612C54.1569 61.0846 54.1457 61.5798 54.0071 62.0465L57.8417 63.185ZM57.9222 59.6493L57.7365 58.9007L53.8541 59.8635L54.0398 60.612L57.9222 59.6493ZM56.3987 54.2925L55.6337 54.8886L58.0922 58.0439L58.8572 57.4478L56.3987 54.2925ZM64.21 41.5024C63.2471 46.5734 60.4703 51.1201 56.3987 54.2925L58.8572 57.4478C63.6957 53.6778 66.9955 48.2747 68.1398 42.2486L64.21 41.5024ZM61.3811 26.3272C64.1942 30.8517 65.2039 36.2682 64.21 41.5024L68.1398 42.2486C69.3209 36.0286 68.121 29.5918 64.778 24.2151L61.3811 26.3272ZM61.1777 26.0001L61.381 26.3272L64.778 24.2151L64.5746 23.888L61.1777 26.0001ZM49.42 16.6807C54.301 18.3304 58.4572 21.6247 61.1777 26.0001L64.5746 23.888C61.3645 18.7251 56.4602 14.8379 50.7007 12.8913L49.42 16.6807ZM48.3838 16.3305L49.42 16.6807L50.7007 12.8913L49.6645 12.5411L48.3838 16.3305ZM57.7365 58.9007C57.6755 58.6545 57.7619 58.3012 58.0922 58.0439L55.6337 54.8886C54.19 56.0135 53.3739 57.9269 53.8541 59.8635L57.7365 58.9007ZM22.4908 58.0439C22.8144 58.296 22.8991 58.6412 22.8407 58.8814L26.7274 59.8268C27.1954 57.9025 26.3828 56.0055 24.9492 54.8886L22.4908 58.0439Z"
            fill="#56CCF2"
          />
          <path
            d="M25.8269 33C27.9705 31.7624 30.6115 31.7624 32.7551 33C34.8987 34.2376 36.2192 36.5248 36.2192 39C36.2192 41.4752 34.8987 43.7624 32.7551 45C30.6115 46.2376 27.9705 46.2376 25.8269 45C23.6833 43.7624 22.3628 41.4752 22.3628 39C22.3628 36.5248 23.6833 34.2376 25.8269 33Z"
            fill="#56CCF2"
          />
          <path
            d="M47.8269 33C49.9705 31.7624 52.6115 31.7624 54.7551 33C56.8987 34.2376 58.2192 36.5248 58.2192 39C58.2192 41.4752 56.8987 43.7624 54.7551 45C52.6115 46.2376 49.9705 46.2376 47.8269 45C45.6833 43.7624 44.3628 41.4752 44.3628 39C44.3628 36.5248 45.6833 34.2376 47.8269 33Z"
            fill="#56CCF2"
          />
          <path
            d="M35.291 66V58"
            stroke="#56CCF2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.291 66V58"
            stroke="#56CCF2"
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
            d="M49.0242 14.4358C43.3597 12.5214 37.2232 12.5214 31.5588 14.4358L30.5226 14.786C25.2023 16.5841 20.6721 20.1749 17.7068 24.944L17.5034 25.2712C14.4253 30.2217 13.3205 36.1484 14.408 41.8755C15.4616 47.4241 18.4999 52.399 22.955 55.8702L23.72 56.4662C24.5986 57.1508 25.0473 58.2719 24.784 59.3541L24.5935 60.1374C24.3954 60.9518 24.4167 61.8042 24.6553 62.6078C25.2527 64.62 27.102 66 29.201 66H51.3893C53.4834 66 55.3284 64.6233 55.9244 62.6158C56.1644 61.8073 56.184 60.9493 55.981 60.1306L55.7953 59.3821C55.5247 58.2907 55.9759 57.1573 56.8629 56.4662L57.628 55.8702C62.083 52.399 65.1213 47.4241 66.1749 41.8755C67.2624 36.1484 66.1576 30.2217 63.0795 25.2712L62.8761 24.944C59.9108 20.1749 55.3806 16.5841 50.0604 14.786L49.0242 14.4358Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M25.8269 33C27.9705 31.7624 30.6115 31.7624 32.7551 33C34.8987 34.2376 36.2192 36.5248 36.2192 39C36.2192 41.4752 34.8987 43.7624 32.7551 45C30.6115 46.2376 27.9705 46.2376 25.8269 45C23.6833 43.7624 22.3628 41.4752 22.3628 39C22.3628 36.5248 23.6833 34.2376 25.8269 33Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47.8269 33C49.9705 31.7624 52.6115 31.7624 54.7551 33C56.8987 34.2376 58.2192 36.5248 58.2192 39C58.2192 41.4752 56.8987 43.7624 54.7551 45C52.6115 46.2376 49.9705 46.2376 47.8269 45C45.6833 43.7624 44.3628 41.4752 44.3628 39C44.3628 36.5248 45.6833 34.2376 47.8269 33Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M35.291 58V66M45.291 58V66M31.5588 14.4358C37.2232 12.5214 43.3597 12.5214 49.0242 14.4358L50.0604 14.786C55.3806 16.5841 59.9108 20.1749 62.8761 24.944L63.0795 25.2712C66.1576 30.2217 67.2624 36.1484 66.1749 41.8755C65.1213 47.4241 62.083 52.399 57.628 55.8702L56.8629 56.4662C55.9759 57.1573 55.5247 58.2907 55.7953 59.3821L55.981 60.1306C56.184 60.9493 56.1644 61.8073 55.9244 62.6158C55.3284 64.6233 53.4834 66 51.3893 66H29.201C27.102 66 25.2527 64.62 24.6553 62.6078C24.4167 61.8042 24.3954 60.9518 24.5935 60.1374L24.784 59.3541C25.0473 58.2719 24.5986 57.1508 23.72 56.4662L22.955 55.8702C18.4999 52.399 15.4616 47.4241 14.408 41.8755C13.3205 36.1484 14.4253 30.2217 17.5034 25.2712L17.7068 24.944C20.6721 20.1749 25.2023 16.5841 30.5226 14.786L31.5588 14.4358ZM22.3628 39C22.3628 36.5248 23.6833 34.2376 25.8269 33C27.9705 31.7624 30.6115 31.7624 32.7551 33C34.8987 34.2376 36.2192 36.5248 36.2192 39C36.2192 41.4752 34.8987 43.7624 32.7551 45C30.6115 46.2376 27.9705 46.2376 25.8269 45C23.6833 43.7624 22.3628 41.4752 22.3628 39ZM44.3628 39C44.3628 36.5248 45.6833 34.2376 47.8269 33C49.9705 31.7624 52.6115 31.7624 54.7551 33C56.8987 34.2376 58.2192 36.5248 58.2192 39C58.2192 41.4752 56.8987 43.7624 54.7551 45C52.6115 46.2376 49.9705 46.2376 47.8269 45C45.6833 43.7624 44.3628 41.4752 44.3628 39Z"
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
            d="M24.8269 31.268C27.5893 29.6731 30.9927 29.6731 33.7551 31.268C36.5175 32.8628 38.2192 35.8103 38.2192 39C38.2192 42.1897 36.5175 45.1372 33.7551 46.7321C30.9927 48.3269 27.5893 48.3269 24.8269 46.7321C22.0645 45.1372 20.3628 42.1897 20.3628 39C20.3628 35.8103 22.0645 32.8628 24.8269 31.268ZM31.7551 34.7321C30.2303 33.8517 28.3517 33.8517 26.8269 34.7321C25.3021 35.6124 24.3628 37.2393 24.3628 39C24.3628 40.7607 25.3021 42.3876 26.8269 43.2679C28.3517 44.1483 30.2303 44.1483 31.7551 43.2679C33.2799 42.3876 34.2192 40.7607 34.2192 39C34.2192 37.2393 33.2799 35.6124 31.7551 34.7321Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.8269 31.268C49.5893 29.6731 52.9927 29.6731 55.7551 31.268C58.5175 32.8628 60.2192 35.8103 60.2192 39C60.2192 42.1897 58.5175 45.1372 55.7551 46.7321C52.9927 48.3269 49.5893 48.3269 46.8269 46.7321C44.0645 45.1372 42.3628 42.1897 42.3628 39C42.3628 35.8103 44.0645 32.8628 46.8269 31.268ZM53.7551 34.7321C52.2303 33.8517 50.3517 33.8517 48.8269 34.7321C47.3021 35.6124 46.3628 37.2393 46.3628 39C46.3628 40.7607 47.3021 42.3876 48.8269 43.2679C50.3517 44.1483 52.2303 44.1483 53.7551 43.2679C55.2799 42.3876 56.2192 40.7607 56.2192 39C56.2192 37.2393 55.2799 35.6124 53.7551 34.7321Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.201 68C26.2167 68 23.5874 66.0379 22.738 63.177C22.3988 62.0346 22.3685 60.8226 22.6502 59.6647L22.8407 58.8814C22.8991 58.6412 22.8144 58.296 22.4908 58.0439L21.7257 57.4478C16.8873 53.6778 13.5874 48.2747 12.4431 42.2486C11.262 36.0286 12.4619 29.5918 15.805 24.2151L16.0083 23.888C19.2185 18.7251 24.1227 14.8379 29.8822 12.8913L30.9184 12.5411C36.9982 10.4863 43.5847 10.4863 49.6645 12.5411L50.7007 12.8913C56.4602 14.8379 61.3645 18.7251 64.5746 23.888L64.778 24.2151C68.121 29.5918 69.3209 36.0286 68.1398 42.2486C66.9955 48.2747 63.6957 53.6778 58.8572 57.4478L58.0922 58.0439C57.7619 58.3012 57.6755 58.6545 57.7365 58.9007L57.9222 59.6493C58.211 60.8139 58.1832 62.0347 57.8417 63.185C56.9937 66.0412 54.3688 68 51.3894 68H29.201ZM48.3838 16.3305C43.1348 14.5565 37.4482 14.5565 32.1991 16.3305L31.1629 16.6807C26.2819 18.3304 22.1257 21.6247 19.4053 26.0001L19.2019 26.3272C16.3887 30.8517 15.379 36.2682 16.3729 41.5024C17.3358 46.5734 20.1126 51.1201 24.1842 54.2925L24.9492 54.8886C26.3828 56.0055 27.1954 57.9025 26.7274 59.8268L26.5368 60.6101C26.4223 61.081 26.4346 61.5739 26.5726 62.0385C26.918 63.202 27.9873 64 29.201 64H33.291V58C33.291 56.8954 34.1865 56 35.291 56C36.3956 56 37.291 56.8954 37.291 58V64H43.291V58C43.291 56.8954 44.1865 56 45.291 56C46.3956 56 47.291 56.8954 47.291 58V64H51.3894C52.5981 64 53.6631 63.2053 54.0071 62.0465C54.1457 61.5798 54.157 61.0846 54.0398 60.612L53.8541 59.8635C53.3739 57.9269 54.19 56.0135 55.6337 54.8886L56.3987 54.2925C60.4703 51.1201 63.2471 46.5734 64.21 41.5024C65.204 36.2682 64.1942 30.8517 61.3811 26.3272L61.1777 26.0001C58.4572 21.6247 54.301 18.3304 49.42 16.6807L48.3838 16.3305Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreSkull = forwardRef((props, ref) => {
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

CoreSkull.displayName = 'CoreSkull'

export default CoreSkull
