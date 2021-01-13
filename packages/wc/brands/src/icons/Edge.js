
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsEdge = {
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
        ${variant === "color" && svg`
          <path
            d="M68.1797 57.0949C67.2464 57.583 66.284 58.013 65.2978 58.3827C62.1588 59.5571 58.8336 60.1555 55.482 60.1489C42.5438 60.1489 31.2734 51.2495 31.2734 39.8293C31.2899 38.2976 31.715 36.798 32.5047 35.4854C33.2944 34.1728 34.4202 33.0948 35.7657 32.3625C24.0633 32.8547 21.0557 45.0486 21.0557 52.1927C21.0557 72.392 39.6729 74.4398 43.6839 74.4398C45.8467 74.4398 49.1086 73.811 51.0663 73.1931L51.4245 73.0728C58.9579 70.4686 65.3801 65.3773 69.6343 58.6369C69.7646 58.4316 69.8227 58.1888 69.7996 57.9468C69.7764 57.7047 69.6733 57.4773 69.5065 57.3005C69.3396 57.1236 69.1186 57.0074 68.8783 56.9701C68.638 56.9329 68.3922 56.9768 68.1797 57.0949Z"
            fill="url(#paint0_linear7TL2)"
          />
          <path
            opacity="0.35"
            d="M68.1797 57.0949C67.2464 57.583 66.284 58.013 65.2978 58.3827C62.1588 59.5571 58.8336 60.1555 55.482 60.1489C42.5438 60.1489 31.2734 51.2495 31.2734 39.8293C31.2899 38.2976 31.715 36.798 32.5047 35.4854C33.2944 34.1728 34.4202 33.0948 35.7657 32.3625C24.0633 32.8547 21.0557 45.0486 21.0557 52.1927C21.0557 72.392 39.6729 74.4398 43.6839 74.4398C45.8467 74.4398 49.1086 73.811 51.0663 73.1931L51.4245 73.0728C58.9579 70.4686 65.3801 65.3773 69.6343 58.6369C69.7646 58.4316 69.8227 58.1888 69.7996 57.9468C69.7764 57.7047 69.6733 57.4773 69.5065 57.3005C69.3396 57.1236 69.1186 57.0074 68.8783 56.9701C68.638 56.9329 68.3922 56.9768 68.1797 57.0949Z"
            fill="url(#paint1_radial7TL2)"
          />
          <path
            d="M33.9089 71.0056C31.4702 69.4921 29.3567 67.5088 27.6913 65.1712C25.7932 62.5707 24.487 59.5865 23.8644 56.4279C23.2418 53.2692 23.3178 50.0126 24.0872 46.8865C24.8565 43.7603 26.3005 40.8403 28.3179 38.3313C30.3353 35.8223 32.8772 33.785 35.7654 32.3624C36.6185 31.9605 38.0758 31.2332 40.0144 31.2687C41.3801 31.2787 42.725 31.6047 43.9437 32.2214C45.1623 32.838 46.2216 33.7285 47.0385 34.823C48.1427 36.2972 48.7515 38.0832 48.7775 39.9248C48.7775 39.8674 55.4654 18.1616 26.9039 18.1616C14.9007 18.1616 5.03024 29.5517 5.03024 39.5448C4.98289 44.8309 6.114 50.0612 8.34136 54.8555C11.9815 62.6218 18.3471 68.781 26.2293 72.1635C34.1116 75.546 42.9616 75.9162 51.0988 73.2038C48.2497 74.1021 45.2396 74.3717 42.2761 73.9941C39.3126 73.6165 36.4663 72.6007 33.9335 71.0166L33.9089 71.0056Z"
            fill="url(#paint2_linear7TL2)"
          />
          <path
            opacity="0.41"
            d="M33.9089 71.0056C31.4702 69.4921 29.3567 67.5088 27.6913 65.1712C25.7932 62.5707 24.487 59.5865 23.8644 56.4279C23.2418 53.2692 23.3178 50.0126 24.0872 46.8865C24.8565 43.7603 26.3005 40.8403 28.3179 38.3313C30.3353 35.8223 32.8772 33.785 35.7654 32.3624C36.6185 31.9605 38.0758 31.2332 40.0144 31.2687C41.3801 31.2787 42.725 31.6047 43.9437 32.2214C45.1623 32.838 46.2216 33.7285 47.0385 34.823C48.1427 36.2972 48.7515 38.0832 48.7775 39.9248C48.7775 39.8674 55.4654 18.1616 26.9039 18.1616C14.9007 18.1616 5.03024 29.5517 5.03024 39.5448C4.98289 44.8309 6.114 50.0612 8.34136 54.8555C11.9815 62.6218 18.3471 68.781 26.2293 72.1635C34.1116 75.546 42.9616 75.9162 51.0988 73.2038C48.2497 74.1021 45.2396 74.3717 42.2761 73.9941C39.3126 73.6165 36.4663 72.6007 33.9335 71.0166L33.9089 71.0056Z"
            fill="url(#paint3_radial7TL2)"
          />
          <path
            d="M46.6501 45.6993C46.4287 45.9864 45.7478 46.3828 45.7478 47.2468C45.7478 47.9604 46.2127 48.6466 47.0384 49.2235C50.9702 51.9576 58.3826 51.5967 58.4017 51.5967C61.3151 51.5897 64.1733 50.8013 66.6782 49.3137C69.2051 47.8383 71.3024 45.7279 72.7619 43.1918C74.2214 40.6557 74.9924 37.782 74.9984 34.856C75.0695 28.729 72.811 24.6552 71.8978 22.8507C66.104 11.518 53.5977 5 39.9978 5C30.8005 4.99909 21.9724 8.61853 15.423 15.0755C8.87362 21.5325 5.12934 30.3079 5 39.5039C5.13124 29.5136 15.0619 21.4454 26.8736 21.4454C27.8306 21.4454 33.2881 21.5384 38.3573 24.1986C42.825 26.5444 45.1655 29.3769 46.7923 32.1848C48.4821 35.1021 48.7828 38.7876 48.7828 40.2558C48.7828 41.724 48.0336 43.9003 46.6501 45.6993Z"
            fill="url(#paint4_radial7TL2)"
          />
          <path
            d="M46.6501 45.6993C46.4287 45.9864 45.7478 46.3828 45.7478 47.2468C45.7478 47.9604 46.2127 48.6466 47.0384 49.2235C50.9702 51.9576 58.3826 51.5967 58.4017 51.5967C61.3151 51.5897 64.1733 50.8013 66.6782 49.3137C69.2051 47.8383 71.3024 45.7279 72.7619 43.1918C74.2214 40.6557 74.9924 37.782 74.9984 34.856C75.0695 28.729 72.811 24.6552 71.8978 22.8507C66.104 11.518 53.5977 5 39.9978 5C30.8005 4.99909 21.9724 8.61853 15.423 15.0755C8.87362 21.5325 5.12934 30.3079 5 39.5039C5.13124 29.5136 15.0619 21.4454 26.8736 21.4454C27.8306 21.4454 33.2881 21.5384 38.3573 24.1986C42.825 26.5444 45.1655 29.3769 46.7923 32.1848C48.4821 35.1021 48.7828 38.7876 48.7828 40.2558C48.7828 41.724 48.0336 43.9003 46.6501 45.6993Z"
            fill="url(#paint5_radial7TL2)"
          />
          <defs><linearGradient id="paint0_linear7TL2" x1="21.0557" y1="53.4067" x2="69.8175" y2="53.4067" gradientUnits="userSpaceOnUse"><stop stop-color="#0C59A4"/><stop offset="1" stop-color="#114A8B"/></linearGradient><radialGradient id="paint1_radial7TL2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(47.9876 53.7909) scale(26.0788 24.7736)"><stop offset="0.72" stop-opacity="0"/><stop offset="0.95" stop-opacity="0.53"/><stop offset="1"/></radialGradient><linearGradient id="paint2_linear7TL2" x1="46.7624" y1="32.2557" x2="16.3078" y2="65.4297" gradientUnits="userSpaceOnUse"><stop stop-color="#1B9DE2"/><stop offset="0.16" stop-color="#1595DF"/><stop offset="0.67" stop-color="#0680D7"/><stop offset="1" stop-color="#0078D4"/></linearGradient><radialGradient id="paint3_radial7TL2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.3021 59.41) rotate(-81.3839) scale(39.2137 31.6822)"><stop offset="0.76" stop-opacity="0"/><stop offset="0.95" stop-opacity="0.5"/><stop offset="1"/></radialGradient><radialGradient id="paint4_radial7TL2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.0713 17.9531) rotate(92.2907) scale(55.39 117.975)"><stop stop-color="#35C1F1"/><stop offset="0.11" stop-color="#34C1ED"/><stop offset="0.23" stop-color="#2FC2DF"/><stop offset="0.31" stop-color="#2BC3D2"/><stop offset="0.67" stop-color="#36C752"/></radialGradient><radialGradient id="paint5_radial7TL2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(70.6406 26.1633) rotate(73.739) scale(26.6135 21.643)"><stop stop-color="#66EB6E"/><stop offset="1" stop-color="#66EB6E" stop-opacity="0"/></radialGradient></defs>
        `}
        ${variant === "solid" && svg`
          <path
            d="M68.1795 57.0949C67.2462 57.583 66.2838 58.013 65.2976 58.3827C62.1586 59.5571 58.8334 60.1555 55.4818 60.1489C42.5436 60.1489 31.2732 51.2495 31.2732 39.8293C31.2898 38.2976 31.7148 36.798 32.5045 35.4854C33.2942 34.1728 34.42 33.0948 35.7655 32.3625C24.0631 32.8547 21.0555 45.0486 21.0555 52.1927C21.0555 72.392 39.6727 74.4398 43.6838 74.4398C45.8465 74.4398 49.1084 73.811 51.0661 73.1931L51.4243 73.0728C58.9577 70.4686 65.38 65.3773 69.6341 58.6369C69.7644 58.4316 69.8226 58.1888 69.7994 57.9468C69.7763 57.7047 69.6731 57.4773 69.5063 57.3005C69.3394 57.1236 69.1184 57.0074 68.8781 56.9701C68.6379 56.9329 68.392 56.9768 68.1795 57.0949Z"
            fill="currentColor"
          />
          <path
            d="M68.1795 57.0949C67.2462 57.583 66.2838 58.013 65.2976 58.3827C62.1586 59.5571 58.8334 60.1555 55.4818 60.1489C42.5436 60.1489 31.2732 51.2495 31.2732 39.8293C31.2898 38.2976 31.7148 36.798 32.5045 35.4854C33.2942 34.1728 34.42 33.0948 35.7655 32.3625C24.0631 32.8547 21.0555 45.0486 21.0555 52.1927C21.0555 72.392 39.6727 74.4398 43.6838 74.4398C45.8465 74.4398 49.1084 73.811 51.0661 73.1931L51.4243 73.0728C58.9577 70.4686 65.38 65.3773 69.6341 58.6369C69.7644 58.4316 69.8226 58.1888 69.7994 57.9468C69.7763 57.7047 69.6731 57.4773 69.5063 57.3005C69.3394 57.1236 69.1184 57.0074 68.8781 56.9701C68.6379 56.9329 68.392 56.9768 68.1795 57.0949Z"
            fill="currentColor"
          />
          <path
            d="M33.9087 71.0058C31.47 69.4922 29.3565 67.5089 27.6911 65.1713C25.793 62.5709 24.4868 59.5867 23.8642 56.428C23.2416 53.2694 23.3176 50.0128 24.087 46.8866C24.8563 43.7604 26.3003 40.8405 28.3177 38.3314C30.3351 35.8224 32.8773 33.7852 35.7655 32.3625C36.6186 31.9606 38.0756 31.2333 40.0142 31.2689C41.38 31.2788 42.7249 31.6049 43.9435 32.2215C45.1622 32.8382 46.2215 33.7286 47.0384 34.8231C48.1425 36.2973 48.7513 38.0833 48.7773 39.9249C48.7773 39.8675 55.4652 18.1617 26.9037 18.1617C14.9005 18.1617 5.03005 29.5519 5.03005 39.5449C4.98271 44.831 6.11382 50.0614 8.34117 54.8556C11.9813 62.622 18.3469 68.7812 26.2291 72.1636C34.1114 75.5461 42.9614 75.9163 51.0987 73.204C48.2495 74.1022 45.2394 74.3719 42.2759 73.9943C39.3124 73.6167 36.4662 72.6008 33.9333 71.0167L33.9087 71.0058Z"
            fill="currentColor"
          />
          <path
            d="M33.9087 71.0058C31.47 69.4922 29.3565 67.5089 27.6911 65.1713C25.793 62.5709 24.4868 59.5867 23.8642 56.428C23.2416 53.2694 23.3176 50.0128 24.087 46.8866C24.8563 43.7604 26.3003 40.8405 28.3177 38.3314C30.3351 35.8224 32.8773 33.7852 35.7655 32.3625C36.6186 31.9606 38.0756 31.2333 40.0142 31.2689C41.38 31.2788 42.7249 31.6049 43.9435 32.2215C45.1622 32.8382 46.2215 33.7286 47.0384 34.8231C48.1425 36.2973 48.7513 38.0833 48.7773 39.9249C48.7773 39.8675 55.4652 18.1617 26.9037 18.1617C14.9005 18.1617 5.03005 29.5519 5.03005 39.5449C4.98271 44.831 6.11382 50.0614 8.34117 54.8556C11.9813 62.622 18.3469 68.7812 26.2291 72.1636C34.1114 75.5461 42.9614 75.9163 51.0987 73.204C48.2495 74.1022 45.2394 74.3719 42.2759 73.9943C39.3124 73.6167 36.4662 72.6008 33.9333 71.0167L33.9087 71.0058Z"
            fill="currentColor"
          />
          <path
            d="M46.6501 45.6993C46.4287 45.9864 45.7478 46.3828 45.7478 47.2468C45.7478 47.9604 46.2127 48.6466 47.0384 49.2235C50.9702 51.9576 58.3826 51.5967 58.4017 51.5967C61.3151 51.5897 64.1733 50.8013 66.6782 49.3137C69.2051 47.8383 71.3024 45.7279 72.7619 43.1918C74.2214 40.6557 74.9924 37.782 74.9984 34.856C75.0695 28.729 72.811 24.6552 71.8978 22.8507C66.104 11.518 53.5977 5 39.9978 5C30.8005 4.99909 21.9724 8.61853 15.423 15.0755C8.87362 21.5325 5.12934 30.3079 5 39.5039C5.13124 29.5136 15.0619 21.4454 26.8736 21.4454C27.8306 21.4454 33.2881 21.5384 38.3573 24.1986C42.825 26.5444 45.1655 29.3769 46.7923 32.1848C48.4821 35.1021 48.7828 38.7876 48.7828 40.2558C48.7828 41.724 48.0336 43.9003 46.6501 45.6993Z"
            fill="currentColor"
          />
          <path
            d="M46.6501 45.6993C46.4287 45.9864 45.7478 46.3828 45.7478 47.2468C45.7478 47.9604 46.2127 48.6466 47.0384 49.2235C50.9702 51.9576 58.3826 51.5967 58.4017 51.5967C61.3151 51.5897 64.1733 50.8013 66.6782 49.3137C69.2051 47.8383 71.3024 45.7279 72.7619 43.1918C74.2214 40.6557 74.9924 37.782 74.9984 34.856C75.0695 28.729 72.811 24.6552 71.8978 22.8507C66.104 11.518 53.5977 5 39.9978 5C30.8005 4.99909 21.9724 8.61853 15.423 15.0755C8.87362 21.5325 5.12934 30.3079 5 39.5039C5.13124 29.5136 15.0619 21.4454 26.8736 21.4454C27.8306 21.4454 33.2881 21.5384 38.3573 24.1986C42.825 26.5444 45.1655 29.3769 46.7923 32.1848C48.4821 35.1021 48.7828 38.7876 48.7828 40.2558C48.7828 41.724 48.0336 43.9003 46.6501 45.6993Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M35.7655 32.3625C34.42 33.0948 33.2942 34.1728 32.5045 35.4854C31.7148 36.798 31.2898 38.2976 31.2732 39.8293C31.2732 51.2495 42.5436 60.1489 55.4818 60.1489C58.8334 60.1555 62.1586 59.5571 65.2976 58.3827C66.2838 58.013 67.2462 57.583 68.1795 57.0949C68.392 56.9768 68.6379 56.9329 68.8781 56.9701C69.1184 57.0074 69.3394 57.1236 69.5063 57.3005C69.6731 57.4773 69.7763 57.7047 69.7994 57.9468C69.8226 58.1888 69.7644 58.4316 69.6341 58.6369C65.38 65.3773 58.9577 70.4686 51.4243 73.0728L51.0661 73.1931C49.1084 73.811 45.8465 74.4398 43.6838 74.4398C39.6727 74.4398 21.0555 72.392 21.0555 52.1927C21.0555 45.0486 24.0631 32.8547 35.7655 32.3625ZM35.7655 32.3625C32.8773 33.7852 30.3351 35.8224 28.3177 38.3314C26.3003 40.8405 24.8563 43.7604 24.087 46.8866C23.3176 50.0128 23.2416 53.2694 23.8642 56.428C24.4868 59.5867 25.793 62.5709 27.6911 65.1713C29.3565 67.5089 31.47 69.4922 33.9087 71.0058L33.9333 71.0167C36.4662 72.6008 39.3124 73.6166 42.2759 73.9943C45.2394 74.3719 48.2495 74.1022 51.0987 73.204C42.9614 75.9163 34.1114 75.5461 26.2291 72.1636C18.3469 68.7812 11.9813 62.622 8.34117 54.8556C6.11382 50.0614 4.98271 44.831 5.03005 39.5449C5.03005 29.5519 14.9005 18.1617 26.9037 18.1617C55.4652 18.1617 48.7773 39.8675 48.7773 39.9249C48.7513 38.0833 48.1425 36.2973 47.0384 34.8231C46.2215 33.7286 45.1622 32.8382 43.9435 32.2215C42.7249 31.6049 41.38 31.2788 40.0142 31.2689C38.0756 31.2333 36.6186 31.9606 35.7655 32.3625ZM46.6501 45.6993C46.4287 45.9864 45.7478 46.3828 45.7478 47.2468C45.7478 47.9604 46.2127 48.6466 47.0384 49.2235C50.9702 51.9576 58.3826 51.5967 58.4017 51.5967C61.3151 51.5897 64.1733 50.8013 66.6782 49.3137C69.2051 47.8383 71.3024 45.7279 72.7619 43.1918C74.2214 40.6557 74.9924 37.782 74.9984 34.856C75.0695 28.729 72.811 24.6552 71.8978 22.8507C66.104 11.518 53.5977 5 39.9978 5C30.8005 4.99909 21.9724 8.61853 15.423 15.0755C8.87362 21.5325 5.12934 30.3079 5 39.5039C5.13124 29.5136 15.0619 21.4454 26.8736 21.4454C27.8306 21.4454 33.2881 21.5384 38.3573 24.1986C42.825 26.5444 45.1655 29.3769 46.7923 32.1848C48.4821 35.1021 48.7828 38.7876 48.7828 40.2558C48.7828 41.724 48.0336 43.9003 46.6501 45.6993Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-edge', BrandsEdge)
export default BrandsEdge
