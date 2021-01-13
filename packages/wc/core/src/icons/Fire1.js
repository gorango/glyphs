
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreFire1 = {
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
            d="M40 67.965C51.0457 67.965 60 59.0107 60 47.965V46.7604C60 42.3408 58.6191 38.0317 56.0503 34.4354L40.0395 12.0203C40.0201 11.9932 39.9799 11.9932 39.9605 12.0203L39.8146 12.2245C37.6413 15.2672 37.5756 19.3368 39.6498 22.448L44.0662 29.0727C45.3272 30.9641 46 33.1863 46 35.4595V36.9733C46 42.4962 41.5228 46.9733 36 46.9733C30.4772 46.9733 26 42.4962 26 36.9733V35.4595C26 33.1863 26.6729 30.9641 27.9338 29.0727L30.0832 25.8485L23.9497 34.4354C21.3809 38.0317 20 42.3408 20 46.7604V47.965C20 59.0107 28.9543 67.965 40 67.965Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M40 67.965C51.0457 67.965 60 59.0107 60 47.965V46.7604C60 42.3408 58.6191 38.0317 56.0503 34.4354L40.0395 12.0203C40.0201 11.9932 39.9799 11.9932 39.9605 12.0203L39.8146 12.2245C37.6413 15.2672 37.5756 19.3368 39.6498 22.448L44.0662 29.0727C45.3272 30.9641 46 33.1863 46 35.4595V36.9733C46 42.4962 41.5228 46.9733 36 46.9733C30.4772 46.9733 26 42.4962 26 36.9733V35.4595C26 33.1863 26.6729 30.9641 27.9338 29.0727L30.0832 25.8485L23.9497 34.4354C21.3809 38.0317 20 42.3408 20 46.7604V47.965C20 59.0107 28.9543 67.965 40 67.965Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <g opacity="0.9"><path fill-rule="evenodd" clip-rule="evenodd" d="M40 67.965C51.0457 67.965 60 59.0107 60 47.965V46.7604C60 42.3408 58.6191 38.0317 56.0503 34.4354L40.0395 12.0203C40.0201 11.9932 39.9799 11.9932 39.9605 12.0203L39.8146 12.2245C37.6413 15.2672 37.5756 19.3368 39.6498 22.448L44.0662 29.0727C45.3272 30.9641 46 33.1863 46 35.4595V36.9733C46 42.4962 41.5228 46.9733 36 46.9733C30.4772 46.9733 26 42.4962 26 36.9733V35.4595C26 33.1863 26.6729 30.9641 27.9338 29.0727L30.0832 25.8485L23.9497 34.4354C21.3809 38.0317 20 42.3408 20 46.7604V47.965C20 59.0107 28.9543 67.965 40 67.965Z" fill="#EB5757"/><path d="M56.0503 34.4354L54.4228 35.5979L56.0503 34.4354ZM40.0395 12.0203L38.412 13.1827L38.412 13.1828L40.0395 12.0203ZM39.9605 12.0203L41.588 13.1828L41.588 13.1827L39.9605 12.0203ZM44.0662 29.0727L45.7303 27.9633V27.9633L44.0662 29.0727ZM27.9338 29.0727L26.2697 27.9633V27.9633L27.9338 29.0727ZM30.0832 25.8485L31.7473 26.9579C32.3531 26.0493 32.118 24.8228 31.2193 24.2025C30.3206 23.5822 29.0905 23.7974 28.4558 24.686L30.0832 25.8485ZM23.9497 34.4354L22.3223 33.2729H22.3223L23.9497 34.4354ZM39.6498 22.448L41.3139 21.3386L39.6498 22.448ZM58 47.965C58 57.9061 49.9411 65.965 40 65.965V69.965C52.1503 69.965 62 60.1153 62 47.965H58ZM58 46.7604V47.965H62V46.7604H58ZM54.4228 35.5979C56.7493 38.855 58 42.7577 58 46.7604H62C62 41.924 60.4888 37.2085 57.6777 33.2729L54.4228 35.5979ZM38.412 13.1828L54.4228 35.5979L57.6777 33.2729L41.667 10.8579L38.412 13.1828ZM41.588 13.1827C40.8097 14.2724 39.1903 14.2724 38.412 13.1827L41.667 10.8579C40.85 9.71403 39.15 9.71403 38.333 10.8579L41.588 13.1827ZM41.4421 13.387L41.588 13.1828L38.333 10.8579L38.1872 11.0621L41.4421 13.387ZM37.9857 23.5574L42.4021 30.1821L45.7303 27.9633L41.3139 21.3386L37.9857 23.5574ZM42.4021 30.1821C43.444 31.7449 44 33.5812 44 35.4595H48C48 32.7915 47.2103 30.1832 45.7303 27.9633L42.4021 30.1821ZM44 35.4595V36.9733H48V35.4595H44ZM44 36.9733C44 41.3916 40.4183 44.9733 36 44.9733V48.9733C42.6274 48.9733 48 43.6008 48 36.9733H44ZM36 44.9733C31.5817 44.9733 28 41.3916 28 36.9733H24C24 43.6008 29.3726 48.9733 36 48.9733V44.9733ZM28 36.9733V35.4595H24V36.9733H28ZM28 35.4595C28 33.5812 28.556 31.7449 29.5979 30.1821L26.2697 27.9633C24.7897 30.1832 24 32.7915 24 35.4595H28ZM29.5979 30.1821L31.7473 26.9579L28.4191 24.7391L26.2697 27.9633L29.5979 30.1821ZM25.5772 35.5979L31.7107 27.011L28.4558 24.686L22.3223 33.2729L25.5772 35.5979ZM22 46.7604C22 42.7577 23.2507 38.855 25.5772 35.5979L22.3223 33.2729C19.5112 37.2085 18 41.924 18 46.7604H22ZM22 47.965V46.7604H18V47.965H22ZM40 65.965C30.0589 65.965 22 57.9061 22 47.965H18C18 60.1153 27.8497 69.965 40 69.965V65.965ZM38.1872 11.0621C35.5308 14.7809 35.4506 19.7548 37.9857 23.5574L41.3139 21.3386C39.7007 18.9188 39.7517 15.7536 41.4421 13.387L38.1872 11.0621Z" fill="#EB5757"/></g>
          <path
            d="M51 36.9733V35.9673L51.9816 37.3415C53.9447 40.0899 55 43.3829 55 46.7603V47.965C55 56.2492 48.2843 62.965 40 62.965C31.7157 62.965 25 56.2492 25 47.965V47.1714C27.7395 50.1249 31.6539 51.9733 36 51.9733C44.2843 51.9733 51 45.2575 51 36.9733Z"
            fill="#F2C94C"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M40 67.9826C51.0457 67.9826 60 59.0283 60 47.9826V46.7779C60 42.3584 58.6191 38.0493 56.0503 34.453L40.0395 12.0379C40.0201 12.0108 39.9799 12.0108 39.9605 12.0379L39.8146 12.2421C37.6413 15.2848 37.5756 19.3544 39.6498 22.4656L44.0662 29.0903C45.3272 30.9816 46 33.2039 46 35.477V36.9909C46 42.5138 41.5228 46.9909 36 46.9909C30.4772 46.9909 26 42.5138 26 36.9909V35.477C26 33.2039 26.6729 30.9816 27.9338 29.0903L30.0832 25.8661L23.9497 34.453C21.3809 38.0493 20 42.3584 20 46.7779V47.9826C20 59.0283 28.9543 67.9826 40 67.9826Z"
            fill="currentColor"
            fill-opacity="0.25"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41.667 10.8579C40.85 9.71404 39.15 9.71404 38.333 10.8579L38.1872 11.0621C35.5308 14.7809 35.4506 19.7548 37.9857 23.5574L42.4021 30.1821C43.444 31.7449 44 33.5812 44 35.4595V36.9733C44 41.3916 40.4183 44.9733 36 44.9733C31.5817 44.9733 28 41.3916 28 36.9733V35.4595C28 33.5812 28.556 31.7449 29.5979 30.1821L31.7473 26.9579C32.353 26.0493 32.118 24.8228 31.2193 24.2025C30.3206 23.5822 29.0905 23.7975 28.4557 24.6861L22.3223 33.2729C19.5112 37.2085 18 41.924 18 46.7604V47.965C18 60.1153 27.8497 69.965 40 69.965C52.1503 69.965 62 60.1153 62 47.965V46.7604C62 41.924 60.4888 37.2085 57.6777 33.2729L41.667 10.8579ZM40.3228 15.8578C39.89 17.706 40.2177 19.6944 41.3139 21.3386L45.7303 27.9633C47.2103 30.1832 48 32.7915 48 35.4595V36.9733C48 43.6008 42.6274 48.9733 36 48.9733C29.759 48.9733 24.6308 44.209 24.054 38.119C22.7096 40.7873 22 43.7454 22 46.7604V47.965C22 57.9061 30.0589 65.965 40 65.965C49.9411 65.965 58 57.9061 58 47.965V46.7604C58 42.7577 56.7493 38.855 54.4228 35.5979L40.3228 15.8578Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-fire-1', CoreFire1)
export default CoreFire1
