const {camelCase} = require('lodash')
const { createVariants, s, createIndex } = require('./utils/template-utils')

module.exports.index = (opts) => createIndex(opts, 'jsx')

module.exports.component = async ({ set, name, variants, defaultVariant, componentName, className, tagName, transform }) => `
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth, strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {\
    ${await createVariants(variants, {
      set,
      name,
      transform,
      parent: {
        prepend: variant => `\n${s(4)}case '${variant}':\n${s(6)}return \(\n${s(8)}<>`,
        append: variant => `\n${s(8)}</>\n${s(6)})`
      },
      child: {
        prepend: child => `\n${s(10)}<${child.name}`,
        append: child => `\n${s(10)}/>`,
        space: '\n' + s(12),
        attr: (attr, str) => `${camelCase(attr)}={${str}}`,
        default: (attr, val) => `${camelCase(attr)}="${val}"`
      }
    })}
  }
}

const ${className} = forwardRef((props, ref) => {
  const { size=null, variant='${defaultVariant}', rotate, flip, children } = props
  const computedStyle = {
    fontSize: !size ? 'auto' : isNaN(size) ? size : \`\${size}px\`,
    display: 'inline-block',
    width: '1em',
    height: '1em',
    contain: 'strict',
    boxSizing: 'content-box'
  }
  const ratios = ${JSON.stringify(transform?.ratios || {}, null, 1).replace(/\n\s+/g, ' ')}
  const ratio = ratios?.variants?.[variant] || ratios?.icons?.${componentName} || 1

  return (
    <span style={computedStyle}>
      <svg
        ref={ref}
        style="width: auto; height: 100%"
        viewBox={\`0 0 \${80 * ratio} 80\`}
        transform={transform(rotate, flip)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        {children}
        <g>
          {renderString({ variant, rotate, flip })}
        </g>
      </svg>
    </span>
  )
})

${className}.displayName = '${className}'

export default ${className}
`
