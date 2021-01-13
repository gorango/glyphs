const { createVariants, s, createIndex } = require('../utils/template-utils')

module.exports.index = createIndex

module.exports.component = async ({ variants, className, tagName, set }) => `
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const ${className} = {
  size: '40',
  color: 'currentColor',
  variant: '',
  colors: ['#000000', '#C4C4C4'],
  strokeWidth: '3',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  rotate: '0',
  flip: '',
  render: ({ size, color, variant, strokeWidth, strokeLinecap, strokeLinejoin, rotate, flip }) => html\`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="\${size}"
      height="\${size}"
      viewBox="0 0 80 80"
      transform="\${transform(rotate, flip)}"
    >
      <slot></slot>
      <g>\
        ${await createVariants(variants, {
          set,
          parent: {
            prepend: variant => `\n${s(8)}\${variant === "${variant}" && svg\``,
            append: variant => `\n${s(8)}\`}`
          },
          child: {
            prepend: child => `\n${s(10)}<${child.name}`,
            append: child => `\n${s(10)}/>`,
            space: '\n' + s(12),
            attr: (attr, str) => `${attr}="\${${str}}"`,
            default: (attr, val) => `${attr}="${val}"`
          }
        })}
      </g>
    </svg>
  \`
}

define('${tagName}', ${className})
export default ${className}
`
