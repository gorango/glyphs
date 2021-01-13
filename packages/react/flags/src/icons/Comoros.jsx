
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0P8WC)"><path d="M120 -0.0102539H0V19.9897H120V-0.0102539Z" fill="#F2C94C"/><path d="M120 19.9897H0V39.9897H120V19.9897Z" fill="#F2F2F2"/><path d="M120 39.9897H0V59.9897H120V39.9897Z" fill="#EB5757"/><path d="M120 59.9897H0V79.9897H120V59.9897Z" fill="#2F80ED"/><path d="M56 40L0 0V80L56 40Z" fill="#219653"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5391 25.2654C17.3753 26.6072 11.967 32.6895 11.967 39.9897C11.967 47.29 17.3753 53.3723 24.5391 54.7141C23.5735 54.895 22.576 54.9897 21.5556 54.9897C12.9645 54.9897 6 48.274 6 39.9897C6 31.7055 12.9645 24.9897 21.5556 24.9897C22.576 24.9897 23.5735 25.0845 24.5391 25.2654Z" fill="#F2F2F2"/><path d="M23.8514 27.4343C24.2556 27.3076 24.6889 27.3076 25.0931 27.4343L25.126 27.4446C25.5184 27.5675 25.8625 27.8103 26.11 28.1387L26.1229 28.1559C26.3718 28.4862 26.5065 28.8886 26.5065 29.3022C26.5065 29.7159 26.3718 30.1183 26.1229 30.4486L26.11 30.4658C25.8625 30.7942 25.5184 31.037 25.126 31.1599L25.0931 31.1702C24.6889 31.2969 24.2556 31.2969 23.8514 31.1702L23.8185 31.1599C23.4261 31.037 23.082 30.7942 22.8345 30.4658L22.8216 30.4486C22.5727 30.1183 22.4381 29.7159 22.4381 29.3022C22.4381 28.8886 22.5727 28.4862 22.8216 28.1559L22.8345 28.1387C23.082 27.8103 23.4261 27.5675 23.8185 27.4446L23.8514 27.4343Z" fill="#F2F2F2"/><path d="M23.8514 34.5593C24.2556 34.4326 24.6889 34.4326 25.0931 34.5593L25.126 34.5696C25.5184 34.6925 25.8625 34.9353 26.11 35.2637L26.1229 35.2809C26.3718 35.6112 26.5065 36.0136 26.5065 36.4272C26.5065 36.8409 26.3718 37.2433 26.1229 37.5736L26.11 37.5908C25.8625 37.9192 25.5184 38.162 25.126 38.2849L25.0931 38.2952C24.6889 38.4219 24.2556 38.4219 23.8514 38.2952L23.8185 38.2849C23.4261 38.162 23.082 37.9192 22.8345 37.5908L22.8216 37.5736C22.5727 37.2433 22.4381 36.8409 22.4381 36.4272C22.4381 36.0136 22.5727 35.6112 22.8216 35.2809L22.8345 35.2637C23.082 34.9353 23.4261 34.6925 23.8185 34.5696L23.8514 34.5593Z" fill="#F2F2F2"/><path d="M23.8514 41.6843C24.2556 41.5576 24.6889 41.5576 25.0931 41.6843L25.126 41.6946C25.5184 41.8175 25.8625 42.0603 26.11 42.3887L26.1229 42.4059C26.3718 42.7362 26.5065 43.1386 26.5065 43.5522C26.5065 43.9659 26.3718 44.3683 26.1229 44.6986L26.11 44.7158C25.8625 45.0442 25.5184 45.287 25.126 45.4099L25.0931 45.4202C24.6889 45.5469 24.2556 45.5469 23.8514 45.4202L23.8185 45.4099C23.4261 45.287 23.082 45.0442 22.8345 44.7158L22.8216 44.6986C22.5727 44.3683 22.4381 43.9659 22.4381 43.5522C22.4381 43.1386 22.5727 42.7362 22.8216 42.4059L22.8345 42.3887C23.082 42.0603 23.4261 41.8175 23.8185 41.6946L23.8514 41.6843Z" fill="#F2F2F2"/><path d="M23.8514 48.8093C24.2556 48.6826 24.6889 48.6826 25.0931 48.8093L25.126 48.8196C25.5184 48.9425 25.8625 49.1853 26.11 49.5137L26.1229 49.5309C26.3718 49.8612 26.5065 50.2636 26.5065 50.6772C26.5065 51.0909 26.3718 51.4933 26.1229 51.8236L26.11 51.8408C25.8625 52.1692 25.5184 52.412 25.126 52.5349L25.0931 52.5452C24.6889 52.6719 24.2556 52.6719 23.8514 52.5452L23.8185 52.5349C23.4261 52.412 23.082 52.1692 22.8345 51.8408L22.8216 51.8236C22.5727 51.4933 22.4381 51.0909 22.4381 50.6772C22.4381 50.2636 22.5727 49.8612 22.8216 49.5309L22.8345 49.5137C23.082 49.1853 23.4261 48.9425 23.8185 48.8196L23.8514 48.8093Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0P8WC"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0cTsC)"><path d="M120 -0.0102539H0V19.9897H120V-0.0102539Z" fill="#F2C94C"/><path d="M120 19.9897H0V39.9897H120V19.9897Z" fill="#F2F2F2"/><path d="M120 39.9897H0V59.9897H120V39.9897Z" fill="#EB5757"/><path d="M120 59.9897H0V79.9897H120V59.9897Z" fill="#2F80ED"/><path d="M56 40L0 0V80L56 40Z" fill="#219653"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5391 25.2654C17.3753 26.6072 11.967 32.6895 11.967 39.9897C11.967 47.29 17.3753 53.3723 24.5391 54.7141C23.5735 54.895 22.576 54.9897 21.5556 54.9897C12.9645 54.9897 6 48.274 6 39.9897C6 31.7055 12.9645 24.9897 21.5556 24.9897C22.576 24.9897 23.5735 25.0845 24.5391 25.2654Z" fill="#F2F2F2"/><path d="M23.8514 27.4343C24.2556 27.3076 24.6889 27.3076 25.0931 27.4343L25.126 27.4446C25.5184 27.5675 25.8625 27.8103 26.11 28.1387L26.1229 28.1559C26.3718 28.4862 26.5065 28.8886 26.5065 29.3022C26.5065 29.7159 26.3718 30.1183 26.1229 30.4486L26.11 30.4658C25.8625 30.7942 25.5184 31.037 25.126 31.1599L25.0931 31.1702C24.6889 31.2969 24.2556 31.2969 23.8514 31.1702L23.8185 31.1599C23.4261 31.037 23.082 30.7942 22.8345 30.4658L22.8216 30.4486C22.5727 30.1183 22.4381 29.7159 22.4381 29.3022C22.4381 28.8886 22.5727 28.4862 22.8216 28.1559L22.8345 28.1387C23.082 27.8103 23.4261 27.5675 23.8185 27.4446L23.8514 27.4343Z" fill="#F2F2F2"/><path d="M23.8514 34.5593C24.2556 34.4326 24.6889 34.4326 25.0931 34.5593L25.126 34.5696C25.5184 34.6925 25.8625 34.9353 26.11 35.2637L26.1229 35.2809C26.3718 35.6112 26.5065 36.0136 26.5065 36.4272C26.5065 36.8409 26.3718 37.2433 26.1229 37.5736L26.11 37.5908C25.8625 37.9192 25.5184 38.162 25.126 38.2849L25.0931 38.2952C24.6889 38.4219 24.2556 38.4219 23.8514 38.2952L23.8185 38.2849C23.4261 38.162 23.082 37.9192 22.8345 37.5908L22.8216 37.5736C22.5727 37.2433 22.4381 36.8409 22.4381 36.4272C22.4381 36.0136 22.5727 35.6112 22.8216 35.2809L22.8345 35.2637C23.082 34.9353 23.4261 34.6925 23.8185 34.5696L23.8514 34.5593Z" fill="#F2F2F2"/><path d="M23.8514 41.6843C24.2556 41.5576 24.6889 41.5576 25.0931 41.6843L25.126 41.6946C25.5184 41.8175 25.8625 42.0603 26.11 42.3887L26.1229 42.4059C26.3718 42.7362 26.5065 43.1386 26.5065 43.5522C26.5065 43.9659 26.3718 44.3683 26.1229 44.6986L26.11 44.7158C25.8625 45.0442 25.5184 45.287 25.126 45.4099L25.0931 45.4202C24.6889 45.5469 24.2556 45.5469 23.8514 45.4202L23.8185 45.4099C23.4261 45.287 23.082 45.0442 22.8345 44.7158L22.8216 44.6986C22.5727 44.3683 22.4381 43.9659 22.4381 43.5522C22.4381 43.1386 22.5727 42.7362 22.8216 42.4059L22.8345 42.3887C23.082 42.0603 23.4261 41.8175 23.8185 41.6946L23.8514 41.6843Z" fill="#F2F2F2"/><path d="M23.8514 48.8093C24.2556 48.6826 24.6889 48.6826 25.0931 48.8093L25.126 48.8196C25.5184 48.9425 25.8625 49.1853 26.11 49.5137L26.1229 49.5309C26.3718 49.8612 26.5065 50.2636 26.5065 50.6772C26.5065 51.0909 26.3718 51.4933 26.1229 51.8236L26.11 51.8408C25.8625 52.1692 25.5184 52.412 25.126 52.5349L25.0931 52.5452C24.6889 52.6719 24.2556 52.6719 23.8514 52.5452L23.8185 52.5349C23.4261 52.412 23.082 52.1692 22.8345 51.8408L22.8216 51.8236C22.5727 51.4933 22.4381 51.0909 22.4381 50.6772C22.4381 50.2636 22.5727 49.8612 22.8216 49.5309L22.8345 49.5137C23.082 49.1853 23.4261 48.9425 23.8185 48.8196L23.8514 48.8093Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0cTsC"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0v6ja" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0v6ja)"><g clip-path="url(#clip0v6ja)"><path d="M120 -0.0102539H0V19.9897H120V-0.0102539Z" fill="#F2C94C"/><path d="M120 19.9897H0V39.9897H120V19.9897Z" fill="#F2F2F2"/><path d="M120 39.9897H0V59.9897H120V39.9897Z" fill="#EB5757"/><path d="M120 59.9897H0V79.9897H120V59.9897Z" fill="#2F80ED"/><path d="M56 40L0 0V80L56 40Z" fill="#219653"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5391 25.2654C17.3753 26.6072 11.967 32.6895 11.967 39.9897C11.967 47.29 17.3753 53.3723 24.5391 54.7141C23.5735 54.895 22.576 54.9897 21.5556 54.9897C12.9645 54.9897 6 48.274 6 39.9897C6 31.7055 12.9645 24.9897 21.5556 24.9897C22.576 24.9897 23.5735 25.0845 24.5391 25.2654Z" fill="#F2F2F2"/><path d="M23.8514 27.4343C24.2556 27.3076 24.6889 27.3076 25.0931 27.4343L25.126 27.4446C25.5184 27.5675 25.8625 27.8103 26.11 28.1387L26.1229 28.1559C26.3718 28.4862 26.5065 28.8886 26.5065 29.3022C26.5065 29.7159 26.3718 30.1183 26.1229 30.4486L26.11 30.4658C25.8625 30.7942 25.5184 31.037 25.126 31.1599L25.0931 31.1702C24.6889 31.2969 24.2556 31.2969 23.8514 31.1702L23.8185 31.1599C23.4261 31.037 23.082 30.7942 22.8345 30.4658L22.8216 30.4486C22.5727 30.1183 22.4381 29.7159 22.4381 29.3022C22.4381 28.8886 22.5727 28.4862 22.8216 28.1559L22.8345 28.1387C23.082 27.8103 23.4261 27.5675 23.8185 27.4446L23.8514 27.4343Z" fill="#F2F2F2"/><path d="M23.8514 34.5593C24.2556 34.4326 24.6889 34.4326 25.0931 34.5593L25.126 34.5696C25.5184 34.6925 25.8625 34.9353 26.11 35.2637L26.1229 35.2809C26.3718 35.6112 26.5065 36.0136 26.5065 36.4272C26.5065 36.8409 26.3718 37.2433 26.1229 37.5736L26.11 37.5908C25.8625 37.9192 25.5184 38.162 25.126 38.2849L25.0931 38.2952C24.6889 38.4219 24.2556 38.4219 23.8514 38.2952L23.8185 38.2849C23.4261 38.162 23.082 37.9192 22.8345 37.5908L22.8216 37.5736C22.5727 37.2433 22.4381 36.8409 22.4381 36.4272C22.4381 36.0136 22.5727 35.6112 22.8216 35.2809L22.8345 35.2637C23.082 34.9353 23.4261 34.6925 23.8185 34.5696L23.8514 34.5593Z" fill="#F2F2F2"/><path d="M23.8514 41.6843C24.2556 41.5576 24.6889 41.5576 25.0931 41.6843L25.126 41.6946C25.5184 41.8175 25.8625 42.0603 26.11 42.3887L26.1229 42.4059C26.3718 42.7362 26.5065 43.1386 26.5065 43.5522C26.5065 43.9659 26.3718 44.3683 26.1229 44.6986L26.11 44.7158C25.8625 45.0442 25.5184 45.287 25.126 45.4099L25.0931 45.4202C24.6889 45.5469 24.2556 45.5469 23.8514 45.4202L23.8185 45.4099C23.4261 45.287 23.082 45.0442 22.8345 44.7158L22.8216 44.6986C22.5727 44.3683 22.4381 43.9659 22.4381 43.5522C22.4381 43.1386 22.5727 42.7362 22.8216 42.4059L22.8345 42.3887C23.082 42.0603 23.4261 41.8175 23.8185 41.6946L23.8514 41.6843Z" fill="#F2F2F2"/><path d="M23.8514 48.8093C24.2556 48.6826 24.6889 48.6826 25.0931 48.8093L25.126 48.8196C25.5184 48.9425 25.8625 49.1853 26.11 49.5137L26.1229 49.5309C26.3718 49.8612 26.5065 50.2636 26.5065 50.6772C26.5065 51.0909 26.3718 51.4933 26.1229 51.8236L26.11 51.8408C25.8625 52.1692 25.5184 52.412 25.126 52.5349L25.0931 52.5452C24.6889 52.6719 24.2556 52.6719 23.8514 52.5452L23.8185 52.5349C23.4261 52.412 23.082 52.1692 22.8345 51.8408L22.8216 51.8236C22.5727 51.4933 22.4381 51.0909 22.4381 50.6772C22.4381 50.2636 22.5727 49.8612 22.8216 49.5309L22.8345 49.5137C23.082 49.1853 23.4261 48.9425 23.8185 48.8196L23.8514 48.8093Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0v6ja"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsComoros = forwardRef((props, ref) => {
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

FlagsComoros.displayName = 'FlagsComoros'

export default FlagsComoros
