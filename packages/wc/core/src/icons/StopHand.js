
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreStopHand = {
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
            d="M14 30.0592C14 29.5287 14.2107 29.02 14.5858 28.645L28.645 14.5858C29.02 14.2107 29.5287 14 30.0592 14H49.9408C50.4713 14 50.98 14.2107 51.355 14.5858L65.4142 28.645C65.7893 29.02 66 29.5287 66 30.0592V49.9414C66 50.4719 65.7893 50.9806 65.4142 51.3556L51.3556 65.4142C50.9806 65.7893 50.4719 66 49.9414 66H30.0586C29.5281 66 29.0194 65.7893 28.6444 65.4142L14.5858 51.3556C14.2107 50.9806 14 50.4719 14 49.9414V30.0592Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M38.7872 24.0474C40.1732 24.0474 41.2969 25.171 41.2969 26.557V39.4856C41.2969 39.5538 41.3521 39.609 41.4203 39.609C41.5152 39.609 41.5921 39.5321 41.5921 39.4372V28.8949C41.5921 27.5089 42.7157 26.3853 44.1018 26.3853C45.4879 26.3853 46.6115 27.5089 46.6115 28.8949V39.4856C46.6115 39.5538 46.6667 39.609 46.7349 39.609C46.8298 39.609 46.9067 39.5321 46.9067 39.4372V33.5707C46.9067 32.1847 48.0303 31.0611 49.4164 31.0611C50.8025 31.0611 51.9261 32.1847 51.9261 33.5707V43.799C51.9261 43.9262 51.9164 44.0531 51.8972 44.1788L50.4209 53.8226C50.2334 55.0478 49.1795 55.9526 47.9401 55.9526H34.6536C33.8301 55.9526 33.059 55.5486 32.5902 54.8715L24.5203 43.2163C23.7313 42.0767 24.0154 40.5133 25.155 39.7243C26.2946 38.9353 27.858 39.2194 28.647 40.359L30.726 43.3616C30.7985 43.4664 30.9629 43.4151 30.9629 43.2876V28.8949C30.9629 27.5089 32.0865 26.3853 33.4726 26.3853C34.8586 26.3853 35.9822 27.5089 35.9822 28.8949V39.4856C35.9822 39.5538 36.0375 39.609 36.1057 39.609C36.2006 39.609 36.2775 39.5321 36.2775 39.4372V26.557C36.2775 25.171 37.4011 24.0474 38.7872 24.0474Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.5858 28.645C14.2107 29.02 14 29.5287 14 30.0592V49.9414C14 50.4719 14.2107 50.9806 14.5858 51.3556L28.6444 65.4142C29.0194 65.7893 29.5281 66 30.0586 66H49.9414C50.4719 66 50.9806 65.7893 51.3556 65.4142L65.4142 51.3556C65.7893 50.9806 66 50.4719 66 49.9414V30.0592C66 29.5287 65.7893 29.02 65.4142 28.645L51.355 14.5858C50.98 14.2107 50.4713 14 49.9408 14H30.0592C29.5287 14 29.02 14.2107 28.645 14.5858L14.5858 28.645ZM40.7872 26.5572C40.7872 25.4526 39.8918 24.5572 38.7872 24.5572C37.6826 24.5572 36.7872 25.4526 36.7872 26.5572V39.4373C36.7872 39.8137 36.4821 40.1188 36.1057 40.1188C35.756 40.1188 35.4726 39.8354 35.4726 39.4857V28.8951C35.4726 27.7905 34.5772 26.8951 33.4726 26.8951C32.368 26.8951 31.4726 27.7905 31.4726 28.8951V43.2878C31.4726 43.9149 30.664 44.1675 30.307 43.6519L28.228 40.6492C27.5992 39.7411 26.3533 39.5147 25.4452 40.1434C24.537 40.7722 24.3106 42.0181 24.9393 42.9263L33.0093 54.5815C33.3829 55.1211 33.9974 55.443 34.6536 55.443H47.9402C48.9279 55.443 49.7677 54.722 49.9171 53.7456L51.3934 44.1018C51.4087 44.0017 51.4164 43.9005 51.4164 43.7992V33.5709C51.4164 32.4663 50.521 31.5709 49.4164 31.5709C48.3119 31.5709 47.4164 32.4663 47.4164 33.5709V39.4373C47.4164 39.8137 47.1113 40.1188 46.7349 40.1188C46.3853 40.1188 46.1018 39.8354 46.1018 39.4857V28.8951C46.1018 27.7905 45.2064 26.8951 44.1018 26.8951C42.9973 26.8951 42.1018 27.7905 42.1018 28.8951V39.4373C42.1018 39.8137 41.7967 40.1188 41.4203 40.1188C41.0707 40.1188 40.7872 39.8354 40.7872 39.4857V26.5572Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 30.0592C14 29.5287 14.2107 29.02 14.5858 28.645L28.645 14.5858C29.02 14.2107 29.5287 14 30.0592 14L49.9408 14C50.4713 14 50.98 14.2107 51.355 14.5858L65.4142 28.645C65.7893 29.02 66 29.5287 66 30.0592V49.9414C66 50.4719 65.7893 50.9806 65.4142 51.3556L51.3556 65.4142C50.9806 65.7893 50.4719 66 49.9414 66H30.0586C29.5281 66 29.0194 65.7893 28.6444 65.4142L14.5858 51.3556C14.2107 50.9806 14 50.4719 14 49.9414L14 30.0592Z"
            fill="#EB5757"
          />
          <path
            d="M14.5858 51.3556L16 49.9414L14.5858 51.3556ZM28.6444 65.4142L27.2302 66.8284L28.6444 65.4142ZM65.4142 28.645L66.8284 27.2308L65.4142 28.645ZM51.355 14.5858L49.9408 16L51.355 14.5858ZM28.645 14.5858L30.0592 16L28.645 14.5858ZM14.5858 28.645L13.1716 27.2307L14.5858 28.645ZM16 30.0592L30.0592 16L27.2307 13.1716L13.1716 27.2307L16 30.0592ZM30.0592 16L49.9408 16V12L30.0592 12V16ZM49.9408 16L64 30.0592L66.8284 27.2308L52.7692 13.1716L49.9408 16ZM64 30.0592L64 49.9414H68V30.0592H64ZM64 49.9414L49.9414 64L52.7698 66.8284L66.8284 52.7698L64 49.9414ZM49.9414 64H30.0586V68H49.9414V64ZM30.0586 64L16 49.9414L13.1716 52.7698L27.2302 66.8284L30.0586 64ZM16 49.9414L16 30.0592H12L12 49.9414H16ZM16 49.9414H16H12C12 51.0023 12.4214 52.0197 13.1716 52.7698L16 49.9414ZM30.0586 64L27.2302 66.8284C27.9803 67.5786 28.9977 68 30.0586 68V64ZM49.9414 64V68C51.0023 68 52.0197 67.5786 52.7698 66.8284L49.9414 64ZM64 49.9414L66.8284 52.7698C67.5786 52.0197 68 51.0023 68 49.9414H64ZM64 30.0592V30.0592H68C68 28.9983 67.5786 27.9809 66.8284 27.2308L64 30.0592ZM49.9408 16L52.7692 13.1716C52.0191 12.4214 51.0017 12 49.9408 12V16ZM30.0592 16V16V12C28.9983 12 27.9809 12.4214 27.2307 13.1716L30.0592 16ZM13.1716 27.2307C12.4214 27.9809 12 28.9983 12 30.0592H16V30.0592L13.1716 27.2307Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.7924 27.6724C40.7924 26.5678 39.897 25.6724 38.7924 25.6724C37.6879 25.6724 36.7924 26.5678 36.7924 27.6724V39.5412C36.7924 39.6499 36.7043 39.7381 36.5956 39.7381H36.2346C36.1259 39.7381 36.0377 39.6499 36.0377 39.5412V29.7707C36.0377 28.6662 35.1423 27.7707 34.0377 27.7707C32.9332 27.7707 32.0377 28.6662 32.0377 29.7707V39.5412V42.6888C32.0377 43.1396 31.4537 43.3175 31.2024 42.9432L29.3586 40.1969C28.7429 39.2798 27.5003 39.0355 26.5833 39.6512C25.6662 40.2669 25.4219 41.5095 26.0376 42.4265L33.4338 53.4429C33.8053 53.9962 34.4279 54.3281 35.0943 54.3281H46.717C47.6902 54.3281 48.5222 53.6275 48.6878 52.6684L50.2727 43.488C50.2921 43.3757 50.3019 43.2618 50.3019 43.1478V33.9674C50.3019 32.8629 49.4065 31.9674 48.3019 31.9674C47.1973 31.9674 46.3019 32.8629 46.3019 33.9674V39.3607C46.3019 39.5691 46.1329 39.7381 45.9245 39.7381H45.744C45.6353 39.7381 45.5472 39.6499 45.5472 39.5412V29.7707C45.5472 28.6662 44.6517 27.7707 43.5472 27.7707C42.4426 27.7707 41.5472 28.6662 41.5472 29.7707V39.5412C41.5472 39.6499 41.459 39.7381 41.3503 39.7381H40.9893C40.8806 39.7381 40.7924 39.6499 40.7924 39.5412V27.6724Z"
            fill="#F2F2F2"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M14 30.0592C14 29.5287 14.2107 29.02 14.5858 28.645L28.645 14.5858C29.02 14.2107 29.5287 14 30.0592 14H49.9408C50.4713 14 50.98 14.2107 51.355 14.5858L65.4142 28.645C65.7893 29.02 66 29.5287 66 30.0592V49.9414C66 50.4719 65.7893 50.9806 65.4142 51.3556L51.3556 65.4142C50.9806 65.7893 50.4719 66 49.9414 66H30.0586C29.5281 66 29.0194 65.7893 28.6444 65.4142L14.5858 51.3556C14.2107 50.9806 14 50.4719 14 49.9414V30.0592Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M41.1425 27.6721C41.1425 26.3743 40.0903 25.3221 38.7925 25.3221C37.4946 25.3221 36.4425 26.3743 36.4425 27.6721V39.7105C36.4425 39.7256 36.4302 39.7378 36.4151 39.7378C36.4 39.7378 36.3878 39.7256 36.3878 39.7105V29.7705C36.3878 28.4726 35.3356 27.4205 34.0378 27.4205C32.7399 27.4205 31.6878 28.4726 31.6878 29.7705V42.6885C31.6878 42.7936 31.5516 42.8351 31.493 42.7478L29.6492 40.0016C28.9257 38.924 27.4657 38.637 26.3882 39.3604C25.3107 40.0839 25.0236 41.5438 25.747 42.6214L33.1433 53.6378C33.5797 54.2879 34.3113 54.6779 35.0943 54.6779H46.717C47.8606 54.6779 48.8382 53.8546 49.0327 52.7277L50.6176 43.5473C50.6404 43.4153 50.6519 43.2815 50.6519 43.1475V33.9672C50.6519 32.6693 49.5998 31.6172 48.3019 31.6172C47.004 31.6172 45.9519 32.6693 45.9519 33.9672V39.7105C45.9519 39.7256 45.9397 39.7378 45.9245 39.7378C45.9094 39.7378 45.8972 39.7256 45.8972 39.7105V29.7705C45.8972 28.4726 44.8451 27.4205 43.5472 27.4205C42.2493 27.4205 41.1972 28.4726 41.1972 29.7705V39.7105C41.1972 39.7256 41.1849 39.7378 41.1698 39.7378C41.1547 39.7378 41.1425 39.7256 41.1425 39.7105V27.6721Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M14 30.0592C14 29.5287 14.2107 29.02 14.5858 28.645L28.645 14.5858C29.02 14.2107 29.5287 14 30.0592 14H49.9408C50.4713 14 50.98 14.2107 51.355 14.5858L65.4142 28.645C65.7893 29.02 66 29.5287 66 30.0592V49.9414C66 50.4719 65.7893 50.9806 65.4142 51.3556L51.3556 65.4142C50.9806 65.7893 50.4719 66 49.9414 66H30.0586C29.5281 66 29.0194 65.7893 28.6444 65.4142L14.5858 51.3556C14.2107 50.9806 14 50.4719 14 49.9414V30.0592Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M41.1425 27.6721C41.1425 26.3743 40.0903 25.3221 38.7925 25.3221C37.4946 25.3221 36.4425 26.3743 36.4425 27.6721V39.7105C36.4425 39.7256 36.4302 39.7378 36.4151 39.7378C36.4 39.7378 36.3878 39.7256 36.3878 39.7105V29.7705C36.3878 28.4726 35.3356 27.4205 34.0378 27.4205C32.7399 27.4205 31.6878 28.4726 31.6878 29.7705V42.6885C31.6878 42.7936 31.5516 42.8351 31.493 42.7478L29.6492 40.0016C28.9257 38.924 27.4657 38.637 26.3882 39.3604C25.3107 40.0839 25.0236 41.5438 25.747 42.6214L33.1433 53.6378C33.5797 54.2879 34.3113 54.6779 35.0943 54.6779H46.717C47.8606 54.6779 48.8382 53.8546 49.0327 52.7277L50.6176 43.5473C50.6404 43.4153 50.6519 43.2815 50.6519 43.1475V33.9672C50.6519 32.6693 49.5998 31.6172 48.3019 31.6172C47.004 31.6172 45.9519 32.6693 45.9519 33.9672V39.7105C45.9519 39.7256 45.9397 39.7378 45.9245 39.7378C45.9094 39.7378 45.8972 39.7256 45.8972 39.7105V29.7705C45.8972 28.4726 44.8451 27.4205 43.5472 27.4205C42.2493 27.4205 41.1972 28.4726 41.1972 29.7705V39.7105C41.1972 39.7256 41.1849 39.7378 41.1698 39.7378C41.1547 39.7378 41.1425 39.7256 41.1425 39.7105V27.6721Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.9459 56.0102C31.7883 57.2267 33.1739 57.9527 34.6536 57.9527H47.9402C50.1673 57.9527 52.0609 56.3269 52.3979 54.1254L53.8742 44.4816C53.9088 44.2557 53.9261 44.0276 53.9261 43.7992V33.5709C53.9261 31.0802 51.9071 29.0612 49.4164 29.0612C49.1417 29.0612 48.8727 29.0857 48.6115 29.1328V28.8951C48.6115 26.4044 46.5925 24.3854 44.1018 24.3854C43.6618 24.3854 43.2366 24.4484 42.8346 24.5659C42.0991 23.0739 40.563 22.0475 38.7872 22.0475C37.0114 22.0475 35.4753 23.0739 34.7399 24.5659C34.3378 24.4484 33.9126 24.3854 33.4726 24.3854C30.982 24.3854 28.9629 26.4044 28.9629 28.8951V37.9554C27.4832 37.0378 25.5393 37.0257 24.0165 38.0801C21.9688 39.4979 21.4582 42.3072 22.876 44.3549L30.9459 56.0102ZM38.2775 26.5572C38.2775 26.2757 38.5057 26.0475 38.7872 26.0475C39.0687 26.0475 39.2969 26.2757 39.2969 26.5572V39.4857C39.2969 40.6584 40.2476 41.6091 41.4203 41.6091C42.6198 41.6091 43.5921 40.6367 43.5921 39.4373V28.8951C43.5921 28.6136 43.8203 28.3854 44.1018 28.3854C44.3833 28.3854 44.6115 28.6136 44.6115 28.8951V39.4857C44.6115 40.6584 45.5622 41.6091 46.7349 41.6091C47.9344 41.6091 48.9068 40.6368 48.9068 39.4373V33.5709C48.9068 33.2894 49.135 33.0612 49.4164 33.0612C49.6979 33.0612 49.9261 33.2894 49.9261 33.5709V43.7992C49.9261 43.825 49.9242 43.8508 49.9202 43.8763L48.444 53.5201C48.4059 53.7689 48.1919 53.9527 47.9402 53.9527H34.6536C34.4864 53.9527 34.3298 53.8706 34.2346 53.7331L26.1646 42.0779C26.0044 41.8465 26.0621 41.529 26.2935 41.3687C26.525 41.2085 26.8425 41.2662 27.0027 41.4976L29.0817 44.5003C30.2704 46.2171 32.9629 45.3759 32.9629 43.2878V28.8951C32.9629 28.6136 33.1911 28.3854 33.4726 28.3854C33.7541 28.3854 33.9823 28.6136 33.9823 28.8951V39.4857C33.9823 40.6584 34.933 41.6091 36.1057 41.6091C37.3052 41.6091 38.2775 40.6368 38.2775 39.4373V26.5572Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.0592 12C28.9983 12 27.9809 12.4214 27.2307 13.1716L13.1716 27.2307C12.4214 27.9809 12 28.9983 12 30.0592V49.9414C12 51.0023 12.4214 52.0197 13.1716 52.7698L27.2302 66.8284C27.9803 67.5786 28.9977 68 30.0586 68H49.9414C51.0023 68 52.0197 67.5786 52.7698 66.8284L66.8284 52.7698C67.5786 52.0197 68 51.0023 68 49.9414V30.0592C68 28.9983 67.5786 27.9809 66.8284 27.2308L52.7692 13.1716C52.0191 12.4214 51.0017 12 49.9408 12H30.0592ZM30.0592 16L49.9408 16L64 30.0592V49.9414L49.9414 64H30.0586L16 49.9414V30.0592L30.0592 16Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-stop-hand', CoreStopHand)
export default CoreStopHand
