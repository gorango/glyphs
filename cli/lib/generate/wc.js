const { createVariants, s, createIndex } = require('./utils/template-utils')

module.exports.index = createIndex

module.exports.component = async ({ set, name, variants, defaultVariant, componentName, className, tagName, transform }) => `
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const ${className} = {
  size: '40',
  variant: '${defaultVariant}',
  strokeWidth: null,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  rotate: '0',
  flip: '',
  render: ({ size, variant, strokeWidth, strokeLinecap, strokeLinejoin, rotate, flip }) => {
    const ratios = ${JSON.stringify(transform?.ratios || {}, null, 1).replace(/\n\s+/g, ' ')}
    const ratio = ratios?.variants?.[variant] || ratios?.icons?.${componentName} || 1

    return html\`
      <svg
        width="\${size * ratio}"
        height="\${size}"
        viewBox="0 0 \${80 * ratio} 80"
        transform="\${transform(rotate, flip)}"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <slot></slot>
        <g>\
          ${await createVariants(variants, {
            set,
            name,
            transform,
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
}

define('${tagName}', ${className})
export default ${className}
`
