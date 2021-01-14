const { createVariants, s, createIndex } = require('./utils/template-utils')

module.exports.index = createIndex

module.exports.component = async ({ set, variants, defaultVariant, componentName, className, tagName, ratios }) => `
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const ${className} = {
  size: '40',
  variant: ${defaultVariant},
  strokeWidth: '3',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  rotate: '0',
  flip: '',
  render: ({ size, variant, strokeWidth, strokeLinecap, strokeLinejoin, rotate, flip }) => {
    const ratios = ${JSON.stringify(ratios, null, 1).replace(/\n\s+/g, ' ')}
    return ratios?.variants?.[variant] || ratios?.icons?.${componentName} || 1
    return html\`
      <svg
        width="\${size * ratio}"
        height="\${size}"
        viewBox="0 0 80 80"
        transform="\${transform(rotate, flip)}"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
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
