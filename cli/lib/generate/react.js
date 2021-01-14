const { createVariants, s, createIndex } = require('./utils/template-utils')

module.exports.index = (opts) => createIndex(opts, 'jsx')

module.exports.component = async ({ variants, className, set }) => `
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
        attr: (attr, str) => `${attr}={${str}}`,
        default: (attr, val) => `${attr}="${val}"`
      }
    })}
  }
}

const ${className} = forwardRef((props, ref) => {
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

${className}.displayName = '${className}'

export default ${className}
`
