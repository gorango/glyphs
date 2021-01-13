const { createVariants, s, createIndex } = require('../utils/template-utils')

module.exports.index = (opts) => createIndex(opts, 'vue')

module.exports.component = async (variants, name, props) => `
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 80"
    :width="size"
    :height="size"
    :transform="transform"
  >
    <slot></slot>
    <g>\
      ${await createVariants(variants, {
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
import Vue from 'Vue'
import { transform } from '../utils'

export default {
  name: '${name}',

  props: {
    size: { type: String, default: '40', },
    color: { type: String, default: 'currentColor', },
    variant: { type: String, default: '', },
    colors: { type: [String], default: ['#000000', '#C4C4C4'], },
    strokeWidth: { type: String, default: '3', },
    strokeLinecap: { type: String, default: 'round', },
    strokeLinejoin: { type: String, default: 'round', },
    rotate: { type: String, default: '0', },
    flip: { type: String, default: '' }
  },

  computed: {
    transform () {
      return transform(this.rotate, this.flip)
    }
  }
}
</script>
`
