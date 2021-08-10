import * as components from './index'

const plugin = {
  install: function (Vue) {
    if (this.install.installed) {
      return
    }

    this.install.installed = true

    Object.entries(components).forEach(([componentName, component]) => {
      Vue.component(componentName, component)
    })
  }
}

// eslint-disable-next-line no-redeclare
/* global window, global */
if (process.env.ES_BUILD === 'false') {
  let GlobalVue = null

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
  } else if (typeof global !== 'undefined') {
    // eslint-disable-next-line
    GlobalVue = global.Vue
  }

  if (GlobalVue) {
    GlobalVue.use(plugin)
  }
}

export default plugin
export * from './index'
