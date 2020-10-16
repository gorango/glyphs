import Vue from 'vue'
import { applyPolyfills as applyRounded, defineCustomElements as defineRounded } from '@glyphs/rounded/loader'
import { applyPolyfills as applyBrands, defineCustomElements as defineBrands } from '@glyphs/brands/loader'
import { applyPolyfills as applyFlags, defineCustomElements as defineFlags } from '@glyphs/flags/loader'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/rounded-icon/, /brands-icon/]

applyRounded().then(defineRounded)
applyBrands().then(defineBrands)
applyFlags().then(defineFlags)
