
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreTree = {
  size: '40',
  color: 'currentColor',
  variant: '',
  colors: ['#000000', '#C4C4C4'],
  strokeWidth: '3',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  rotate: '0',
  flip: '',
  render: ({ size, color, variant, strokeWidth, strokeLinecap, strokeLinejoin, rotate, flip }) => html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${size}"
      height="${size}"
      viewBox="0 0 80 80"
      transform="${transform(rotate, flip)}"
    >
      <slot></slot>
      <g>        
        ${variant === "path" && svg`
          <path
            d="M63.8795 55L64.2338 54.8104C69.5453 51.9685 71.5829 45.383 68.8045 40.038C67.2523 37.052 64.5198 35.0738 61.4725 34.3825L61.8252 33.5918C64.2878 28.07 61.8323 21.5957 56.3272 19.0958C54.2546 18.1546 52.0423 17.9096 49.9538 18.2629C48.1832 14.5575 44.4006 12 40.0233 12C35.6459 12 31.8633 14.5575 30.0927 18.2629C28.0043 17.9096 25.7919 18.1546 23.7193 19.0958C18.2143 21.5957 15.7588 28.07 18.2213 33.5918L18.574 34.3825C15.5267 35.0738 12.7942 37.052 11.242 40.038C8.46358 45.383 10.5012 51.9685 15.8128 54.8104L16.167 55H63.8795Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M36.6502 55C36.0979 55 35.6502 55.4477 35.6502 56V61.8342C35.6502 62.8966 35.3681 63.9399 34.8329 64.8575L33.877 66.4961C33.4881 67.1628 33.969 68 34.7408 68H45.2587C46.0305 68 46.5114 67.1628 46.1225 66.4961L44.4675 63.6591C43.9322 62.7415 43.6502 61.6982 43.6502 60.6359V56C43.6502 55.4477 43.2025 55 42.6502 55"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.6502 55C36.0979 55 35.6502 55.4477 35.6502 56V61.8342C35.6502 62.8966 35.3681 63.9399 34.8329 64.8575L33.877 66.4961C33.4881 67.1628 33.969 68 34.7408 68H36.6502H42.6502H45.2587C46.0305 68 46.5114 67.1628 46.1225 66.4961L44.4675 63.6591C43.9322 62.7415 43.6502 61.6982 43.6502 60.6359V56C43.6502 55.4477 43.2025 55 42.6502 55H36.6502Z"
            fill="currentColor"
          />
          <path
            d="M33.877 66.4961L35.6045 67.5039H35.6045L33.877 66.4961ZM46.1225 66.4961L47.85 65.4884V65.4884L46.1225 66.4961ZM44.4675 63.6591L42.74 64.6668L44.4675 63.6591ZM34.8329 64.8575L33.1053 63.8497L34.8329 64.8575ZM37.6502 56C37.6502 56.5523 37.2025 57 36.6502 57V53C34.9933 53 33.6502 54.3431 33.6502 56H37.6502ZM37.6502 61.8342V56H33.6502V61.8342H37.6502ZM35.6045 67.5039L36.5604 65.8652L33.1053 63.8497L32.1494 65.4884L35.6045 67.5039ZM34.7408 66C35.5126 66 35.9934 66.8372 35.6045 67.5039L32.1494 65.4884C30.9828 67.4884 32.4254 70 34.7408 70V66ZM36.6502 66H34.7408V70H36.6502V66ZM42.6502 66H36.6502V70H42.6502V66ZM45.2587 66H42.6502V70H45.2587V66ZM44.3949 67.5039C44.006 66.8372 44.4869 66 45.2587 66V70C47.5741 70 49.0167 67.4884 47.85 65.4884L44.3949 67.5039ZM42.74 64.6668L44.3949 67.5039L47.85 65.4884L46.1951 62.6513L42.74 64.6668ZM41.6502 56V60.6359H45.6502V56H41.6502ZM42.6502 57C42.0979 57 41.6502 56.5523 41.6502 56H45.6502C45.6502 54.3431 44.307 53 42.6502 53V57ZM36.6502 57H42.6502V53H36.6502V57ZM46.1951 62.6513C45.8382 62.0396 45.6502 61.3441 45.6502 60.6359H41.6502C41.6502 62.0523 42.0263 63.4433 42.74 64.6668L46.1951 62.6513ZM33.6502 61.8342C33.6502 62.5425 33.4622 63.238 33.1053 63.8497L36.5604 65.8652C37.2741 64.6417 37.6502 63.2507 37.6502 61.8342H33.6502Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M63.8795 55L64.2338 54.8104C69.5453 51.9685 71.5829 45.383 68.8045 40.038C67.2523 37.052 64.5198 35.0738 61.4725 34.3825L61.8252 33.5918C64.2878 28.07 61.8323 21.5957 56.3272 19.0958C54.2546 18.1546 52.0423 17.9096 49.9538 18.2629C48.1832 14.5575 44.4006 12 40.0233 12C35.6459 12 31.8633 14.5575 30.0927 18.2629C28.0043 17.9096 25.7919 18.1546 23.7193 19.0958C18.2143 21.5957 15.7588 28.07 18.2213 33.5918L18.574 34.3825C15.5267 35.0738 12.7942 37.052 11.242 40.038C8.46358 45.383 10.5012 51.9685 15.8128 54.8104L16.167 55H63.8795Z"
            fill="currentColor"
          />
          <path
            d="M64.2338 54.8104L63.2902 53.047L63.2902 53.047L64.2338 54.8104ZM63.8795 55V57C64.2087 57 64.5328 56.9187 64.823 56.7634L63.8795 55ZM68.8045 40.038L70.5791 39.1155L70.5791 39.1155L68.8045 40.038ZM61.4725 34.3825L59.646 33.5679C59.4021 34.1148 59.416 34.7423 59.6841 35.2778C59.9522 35.8133 60.4461 36.2005 61.0301 36.333L61.4725 34.3825ZM61.8252 33.5918L59.9986 32.7772L59.9986 32.7772L61.8252 33.5918ZM56.3272 19.0958L57.1542 17.2748L57.1542 17.2748L56.3272 19.0958ZM49.9538 18.2629L48.1492 19.1252C48.5343 19.9309 49.4068 20.3838 50.2874 20.2348L49.9538 18.2629ZM30.0927 18.2629L29.7592 20.2348C30.6397 20.3838 31.5123 19.9309 31.8973 19.1252L30.0927 18.2629ZM23.7193 19.0958L24.5463 20.9168L23.7193 19.0958ZM18.2213 33.5918L20.0479 32.7772V32.7772L18.2213 33.5918ZM18.574 34.3825L19.0165 36.333C19.6005 36.2005 20.0944 35.8133 20.3624 35.2778C20.6305 34.7423 20.6445 34.1148 20.4006 33.5679L18.574 34.3825ZM11.242 40.038L13.0166 40.9604V40.9604L11.242 40.038ZM15.8128 54.8104L16.7563 53.047L16.7563 53.047L15.8128 54.8104ZM16.167 55L15.2235 56.7635C15.5138 56.9187 15.8379 57 16.167 57V55ZM63.2902 53.047L62.936 53.2366L64.823 56.7634L65.1773 56.5739L63.2902 53.047ZM67.0299 40.9604C69.3032 45.3336 67.6361 50.7218 63.2902 53.047L65.1773 56.5739C71.4546 53.2153 73.8627 45.4323 70.5791 39.1155L67.0299 40.9604ZM61.0301 36.333C63.5279 36.8996 65.7603 38.5179 67.0299 40.9604L70.5791 39.1155C68.7444 35.5861 65.5117 33.248 61.915 32.4321L61.0301 36.333ZM59.9986 32.7772L59.646 33.5679L63.2991 35.1971L63.6518 34.4064L59.9986 32.7772ZM55.5003 20.9168C60.0044 22.9622 62.0135 28.2593 59.9986 32.7772L63.6518 34.4064C66.5621 27.8806 63.6601 20.2292 57.1542 17.2748L55.5003 20.9168ZM50.2874 20.2348C51.9949 19.946 53.802 20.1456 55.5003 20.9168L57.1542 17.2748C54.7072 16.1636 52.0896 15.8732 49.6202 16.2909L50.2874 20.2348ZM40.0233 14C43.6018 14 46.6984 16.089 48.1492 19.1252L51.7583 17.4006C49.668 13.0261 45.1994 10 40.0233 10V14ZM31.8973 19.1252C33.3481 16.089 36.4448 14 40.0233 14V10C34.8471 10 30.3785 13.0261 28.2882 17.4006L31.8973 19.1252ZM24.5463 20.9168C26.2445 20.1456 28.0516 19.946 29.7592 20.2348L30.4263 16.2909C27.9569 15.8732 25.3393 16.1636 22.8923 17.2748L24.5463 20.9168ZM20.0479 32.7772C18.0331 28.2593 20.0421 22.9622 24.5463 20.9168L22.8923 17.2748C16.3864 20.2292 13.4844 27.8806 16.3948 34.4064L20.0479 32.7772ZM20.4006 33.5679L20.0479 32.7772L16.3948 34.4064L16.7474 35.1971L20.4006 33.5679ZM13.0166 40.9604C14.2863 38.5179 16.5186 36.8996 19.0165 36.333L18.1315 32.4321C14.5348 33.248 11.3021 35.5861 9.46747 39.1155L13.0166 40.9604ZM16.7563 53.047C12.4105 50.7218 10.7433 45.3336 13.0166 40.9604L9.46747 39.1155C6.18385 45.4324 8.59196 53.2153 14.8692 56.5739L16.7563 53.047ZM17.1106 53.2365L16.7563 53.047L14.8692 56.5739L15.2235 56.7635L17.1106 53.2365ZM16.167 57H63.8795V53H16.167V57Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.6502 55C36.0979 55 35.6502 55.4477 35.6502 56V61.8342C35.6502 62.8966 35.3681 63.9399 34.8329 64.8575L33.877 66.4961C33.4881 67.1628 33.969 68 34.7408 68H36.6502H42.6502H45.2587C46.0305 68 46.5114 67.1628 46.1225 66.4961L44.4675 63.6591C43.9322 62.7415 43.6502 61.6982 43.6502 60.6359V56C43.6502 55.4477 43.2025 55 42.6502 55H36.6502Z"
            fill="#F2994A"
          />
          <path
            d="M33.877 66.4961L35.6045 67.5039H35.6045L33.877 66.4961ZM46.1225 66.4961L47.85 65.4884V65.4884L46.1225 66.4961ZM44.4675 63.6591L42.74 64.6668L44.4675 63.6591ZM34.8329 64.8575L33.1053 63.8497L34.8329 64.8575ZM37.6502 56C37.6502 56.5523 37.2025 57 36.6502 57V53C34.9933 53 33.6502 54.3431 33.6502 56H37.6502ZM37.6502 61.8342V56H33.6502V61.8342H37.6502ZM35.6045 67.5039L36.5604 65.8652L33.1053 63.8497L32.1494 65.4884L35.6045 67.5039ZM34.7408 66C35.5126 66 35.9934 66.8372 35.6045 67.5039L32.1494 65.4884C30.9828 67.4884 32.4254 70 34.7408 70V66ZM36.6502 66H34.7408V70H36.6502V66ZM42.6502 66H36.6502V70H42.6502V66ZM45.2587 66H42.6502V70H45.2587V66ZM44.3949 67.5039C44.006 66.8372 44.4869 66 45.2587 66V70C47.5741 70 49.0167 67.4884 47.85 65.4884L44.3949 67.5039ZM42.74 64.6668L44.3949 67.5039L47.85 65.4884L46.1951 62.6513L42.74 64.6668ZM41.6502 56V60.6359H45.6502V56H41.6502ZM42.6502 57C42.0979 57 41.6502 56.5523 41.6502 56H45.6502C45.6502 54.3431 44.307 53 42.6502 53V57ZM36.6502 57H42.6502V53H36.6502V57ZM46.1951 62.6513C45.8382 62.0396 45.6502 61.3441 45.6502 60.6359H41.6502C41.6502 62.0523 42.0263 63.4433 42.74 64.6668L46.1951 62.6513ZM33.6502 61.8342C33.6502 62.5425 33.4622 63.238 33.1053 63.8497L36.5604 65.8652C37.2741 64.6417 37.6502 63.2507 37.6502 61.8342H33.6502Z"
            fill="#F2994A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M63.8795 55L64.2338 54.8104C69.5453 51.9685 71.5829 45.383 68.8045 40.038C67.2523 37.052 64.5198 35.0738 61.4725 34.3825L61.8252 33.5918C64.2878 28.07 61.8323 21.5957 56.3272 19.0958C54.2546 18.1546 52.0423 17.9096 49.9538 18.2629C48.1832 14.5575 44.4006 12 40.0233 12C35.6459 12 31.8633 14.5575 30.0927 18.2629C28.0043 17.9096 25.7919 18.1546 23.7193 19.0958C18.2143 21.5957 15.7588 28.07 18.2213 33.5918L18.574 34.3825C15.5267 35.0738 12.7942 37.052 11.242 40.038C8.46358 45.383 10.5012 51.9685 15.8128 54.8104L16.167 55H63.8795Z"
            fill="#219653"
          />
          <path
            d="M64.2338 54.8104L63.2902 53.047L63.2902 53.047L64.2338 54.8104ZM63.8795 55V57C64.2087 57 64.5328 56.9187 64.823 56.7634L63.8795 55ZM68.8045 40.038L70.5791 39.1155V39.1155L68.8045 40.038ZM61.4725 34.3825L59.646 33.5679C59.4021 34.1148 59.416 34.7423 59.6841 35.2778C59.9522 35.8133 60.4461 36.2005 61.0301 36.333L61.4725 34.3825ZM61.8252 33.5918L59.9986 32.7772L59.9986 32.7772L61.8252 33.5918ZM56.3272 19.0958L57.1542 17.2748L57.1542 17.2748L56.3272 19.0958ZM49.9538 18.2629L48.1492 19.1252C48.5343 19.9309 49.4068 20.3838 50.2874 20.2348L49.9538 18.2629ZM30.0927 18.2629L29.7592 20.2348C30.6397 20.3838 31.5123 19.9309 31.8973 19.1252L30.0927 18.2629ZM23.7193 19.0958L24.5463 20.9168L23.7193 19.0958ZM18.2213 33.5918L20.0479 32.7772V32.7772L18.2213 33.5918ZM18.574 34.3825L19.0165 36.333C19.6005 36.2005 20.0944 35.8133 20.3624 35.2778C20.6305 34.7423 20.6445 34.1148 20.4006 33.5679L18.574 34.3825ZM11.242 40.038L13.0166 40.9604V40.9604L11.242 40.038ZM15.8128 54.8104L16.7563 53.047L16.7563 53.047L15.8128 54.8104ZM16.167 55L15.2235 56.7635C15.5138 56.9187 15.8379 57 16.167 57V55ZM63.2902 53.047L62.936 53.2366L64.823 56.7634L65.1773 56.5739L63.2902 53.047ZM67.0299 40.9604C69.3032 45.3336 67.6361 50.7218 63.2902 53.047L65.1773 56.5739C71.4546 53.2153 73.8627 45.4323 70.5791 39.1155L67.0299 40.9604ZM61.0301 36.333C63.5279 36.8996 65.7603 38.5179 67.0299 40.9604L70.5791 39.1155C68.7444 35.5861 65.5117 33.248 61.915 32.4321L61.0301 36.333ZM59.9986 32.7772L59.646 33.5679L63.2991 35.1971L63.6518 34.4064L59.9986 32.7772ZM55.5003 20.9168C60.0044 22.9622 62.0134 28.2593 59.9986 32.7772L63.6518 34.4064C66.5621 27.8806 63.6601 20.2292 57.1542 17.2748L55.5003 20.9168ZM50.2874 20.2348C51.9949 19.946 53.802 20.1456 55.5003 20.9168L57.1542 17.2748C54.7072 16.1636 52.0896 15.8732 49.6202 16.2909L50.2874 20.2348ZM40.0233 14C43.6018 14 46.6984 16.089 48.1492 19.1252L51.7583 17.4006C49.668 13.0261 45.1994 10 40.0233 10V14ZM31.8973 19.1252C33.3481 16.089 36.4448 14 40.0233 14V10C34.8471 10 30.3785 13.0261 28.2882 17.4006L31.8973 19.1252ZM24.5463 20.9168C26.2445 20.1456 28.0516 19.946 29.7592 20.2348L30.4263 16.2909C27.9569 15.8732 25.3393 16.1636 22.8923 17.2748L24.5463 20.9168ZM20.0479 32.7772C18.0331 28.2593 20.0421 22.9622 24.5463 20.9168L22.8923 17.2748C16.3864 20.2292 13.4844 27.8806 16.3948 34.4064L20.0479 32.7772ZM20.4006 33.5679L20.0479 32.7772L16.3948 34.4064L16.7474 35.1971L20.4006 33.5679ZM13.0166 40.9604C14.2863 38.5179 16.5186 36.8996 19.0165 36.333L18.1315 32.4321C14.5348 33.248 11.3021 35.5861 9.46747 39.1155L13.0166 40.9604ZM16.7563 53.047C12.4105 50.7218 10.7433 45.3336 13.0166 40.9604L9.46747 39.1155C6.18385 45.4324 8.59196 53.2153 14.8692 56.5739L16.7563 53.047ZM17.1106 53.2365L16.7563 53.047L14.8692 56.5739L15.2235 56.7635L17.1106 53.2365ZM16.167 57H63.8795V53H16.167V57Z"
            fill="#219653"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M36.65 55C36.0977 55 35.65 55.4477 35.65 56V61.8342C35.65 62.8966 35.368 63.9399 34.8327 64.8575L33.8768 66.4961C33.4879 67.1628 33.9688 68 34.7406 68H45.2585C46.0303 68 46.5112 67.1628 46.1223 66.4961L44.4673 63.6591C43.9321 62.7415 43.65 61.6982 43.65 60.6358V56C43.65 55.4477 43.2023 55 42.65 55H36.65Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M63.8795 55L64.2338 54.8104C69.5453 51.9685 71.5829 45.383 68.8045 40.038C67.2523 37.052 64.5198 35.0738 61.4725 34.3825L61.8252 33.5918C64.2878 28.07 61.8323 21.5957 56.3272 19.0958C54.2546 18.1546 52.0423 17.9096 49.9538 18.2629C48.1832 14.5575 44.4006 12 40.0233 12C35.6459 12 31.8633 14.5575 30.0927 18.2629C28.0043 17.9096 25.7919 18.1546 23.7193 19.0958C18.2143 21.5957 15.7588 28.07 18.2213 33.5918L18.574 34.3825C15.5267 35.0738 12.7942 37.052 11.242 40.038C8.46358 45.383 10.5012 51.9685 15.8128 54.8104L16.167 55H63.8795Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36.65 55C36.0977 55 35.65 55.4477 35.65 56V61.8342C35.65 62.8966 35.368 63.9399 34.8327 64.8575L33.8768 66.4961C33.4879 67.1628 33.9688 68 34.7406 68H45.2585C46.0303 68 46.5112 67.1628 46.1223 66.4961L44.4673 63.6591C43.9321 62.7415 43.65 61.6982 43.65 60.6358V56C43.65 55.4477 43.2023 55 42.65 55H36.65Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M63.8795 55L64.2338 54.8104C69.5453 51.9685 71.5829 45.383 68.8045 40.038C67.2523 37.052 64.5198 35.0738 61.4725 34.3825L61.8252 33.5918C64.2878 28.07 61.8323 21.5957 56.3272 19.0958C54.2546 18.1546 52.0423 17.9096 49.9538 18.2629C48.1832 14.5575 44.4006 12 40.0233 12C35.6459 12 31.8633 14.5575 30.0927 18.2629C28.0043 17.9096 25.7919 18.1546 23.7193 19.0958C18.2143 21.5957 15.7588 28.07 18.2213 33.5918L18.574 34.3825C15.5267 35.0738 12.7942 37.052 11.242 40.038C8.46358 45.383 10.5012 51.9685 15.8128 54.8104L16.167 55H63.8795Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.6504 57H16.1674C15.8382 57 15.5142 56.9187 15.2239 56.7635L14.8696 56.5739C8.59234 53.2153 6.18423 45.4324 9.46786 39.1155C10.9148 36.332 13.2313 34.2894 15.9102 33.1502C13.8682 26.9271 16.8002 20.0415 22.8927 17.2748C24.8686 16.3775 26.9556 16.0154 28.9861 16.1292C31.2806 12.4506 35.3656 10 40.0237 10C44.6817 10 48.7667 12.4506 51.0612 16.1292C53.0917 16.0154 55.1787 16.3775 57.1546 17.2748C63.2471 20.0415 66.1791 26.9271 64.1371 33.1502C66.816 34.2894 69.1325 36.332 70.5795 39.1155C73.8631 45.4323 71.455 53.2153 65.1777 56.5739L64.8234 56.7634C64.5332 56.9187 64.2091 57 63.8799 57H45.6504V60.6358C45.6504 61.3441 45.8384 62.0396 46.1953 62.6513L47.8502 65.4884C49.0169 67.4884 47.5743 70 45.2589 70H34.741C32.4256 70 30.983 67.4884 32.1496 65.4884L33.1055 63.8497C33.4624 63.238 33.6504 62.5425 33.6504 61.8342V57ZM31.8977 19.1252C33.3485 16.089 36.4452 14 40.0237 14C43.6021 14 46.6988 16.089 48.1496 19.1252C48.5347 19.9309 49.4072 20.3838 50.2877 20.2348C51.9953 19.946 53.8024 20.1456 55.5007 20.9168C60.0048 22.9622 62.0138 28.2593 59.999 32.7772L59.6463 33.5679C59.4024 34.1148 59.4164 34.7423 59.6845 35.2778C59.9526 35.8133 60.4465 36.2005 61.0305 36.333C63.5283 36.8996 65.7607 38.5179 67.0303 40.9604C69.2884 45.3044 67.6585 50.6499 63.3773 53H16.67C12.3888 50.6499 10.7589 45.3044 13.017 40.9604C14.2866 38.5179 16.519 36.8996 19.0168 36.333C19.6008 36.2005 20.0948 35.8133 20.3628 35.2778C20.6309 34.7423 20.6449 34.1148 20.401 33.5679L20.0483 32.7772C18.0335 28.2593 20.0425 22.9622 24.5466 20.9168C26.2449 20.1456 28.052 19.946 29.7596 20.2348C30.6401 20.3838 31.5127 19.9309 31.8977 19.1252ZM37.6504 57V61.8342C37.6504 63.2507 37.2743 64.6417 36.5606 65.8652L36.482 66H43.5179L42.7402 64.6668C42.0265 63.4433 41.6504 62.0523 41.6504 60.6358V57H37.6504Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-tree', CoreTree)
export default CoreTree