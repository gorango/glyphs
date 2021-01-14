const { createVariants, s, createIndex } = require('./utils/template-utils')

module.exports.index = (opts) => createIndex(opts, 'vue')

module.exports.component = async ({ set, variants, defaultVariant, componentName, className, tagName, ratios }) => `
<template>
  <svg
    :width="size * ratio"
    :height="size"
    :viewBox='\`0 0 \${80 * ratio} 80\`'
    :transform="transform"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <slot></slot>
    <g>\
      ${await createVariants(variants, {
        set,
        parent: {
          prepend: variant => `\n${s(6)}<template v-if="variant === '${variant}'">`,
          append: variant => `\n${s(6)}</template>`
        },
        child: {
          prepend: child => `\n${s(8)}<${child.name}`,
          append: child => `\n${s(8)}/>`,
          space: '\n' + s(10),
          attr: (attr, str) => `:${attr}="${str}"`,
          default: (attr, val) => `${attr}="${val}"`
        }
      })}
    </g>
  </svg>
</template>

<script>
import Vue from 'vue'
import { transform } from '../utils'

export default {
  name: '${className}',

  props: {
    size: { type: String, default: '40', },
    variant: { type: String, default: '${defaultVariant}', },
    strokeWidth: { type: String, default: '4', },
    strokeLinecap: { type: String, default: 'round', },
    strokeLinejoin: { type: String, default: 'round', },
    rotate: { type: String, default: '0', },
    flip: { type: String, default: '' }
  },

  computed: {
    transform () {
      return transform(this.rotate, this.flip)
    },
    ratio () {
      const ratios = ${JSON.stringify(ratios, null, 1).replace(/\n\s+/g, ' ')}
      return ratios?.variants?.[this.variant] || ratios?.icons?.${componentName} || 1
    }
  }
}
</script>
`
