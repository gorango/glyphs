const {camelCase} = require('lodash')
const { createVariants, s, createIndex } = require('./utils/template-utils')

module.exports.index = (opts) => createIndex(opts, 'jsx')

module.exports.component = async ({ set, variants, defaultVariant, componentName, className, tagName, ratios }) => `
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {\
    ${await createVariants(variants, {
      set,
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
  const { size=80, variant='${defaultVariant}', rotate, flip, children } = props
  const ratios = ${JSON.stringify(ratios, null, 1).replace(/\n\s+/g, ' ')}
  const ratio = ratios?.variants?.[variant] || ratios?.icons?.${componentName} || 1

  return (
    <svg
      ref={ref}
      width={size * ratio}
      height={size}
      viewBox={\`0 0 \${80 * ratio} 80\`}
      transform={transform(rotate, flip)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {children}
      <g>
        {renderString({ size, variant, rotate, flip })}
      </g>
    </svg>
  )
})

${className}.displayName = '${className}'

export default ${className}
`
