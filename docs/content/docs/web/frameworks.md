---
title: JS Components
category: Web Components
position: 16
---

<alert>

The frameworks components are under active development.

</alert>

All three icon sets are supported as components for React and Vue. The files are [generated with the CLI](/docs/cli/generate) using the SVG assets exported from Figma.

## ReactJS components

Install any of the following sets into your React project:

```bash
npm i @glyphs/react-core
npm i @glyphs/react-brands
npm i @glyphs/react-flags
```

Import and inject the required components into your files:

```js
import React from 'react'
import { CoreFigma } from '@glyphs/react-core'
import { BrandsFigma } from '@glyphs/react-brands'
import { FlagsCanada } from '@glyphs/react-flags'

class Component extends React.Component {
  render() {
    return (
      <>
        <CoreArrow variant='path' strokeWidth='6' flip='x'></CoreArrow>
        <BrandsFigma variant='color' size='100'></BrandsFigma>
        <FlagsCanada variant='circle' rotate='15'></FlagsCanada>
      </>
    )
  }
}
```

## VueJS components

Install any of the following sets into your Vue project:

```bash
npm i @glyphs/vue-core
npm i @glyphs/vue-brands
npm i @glyphs/vue-flags
```

Import and inject the required components into your files:

```vue
<template>
  <div id="app">
    <CoreArrow variant='path' strokeWidth='6' flip='x'></CoreArrow>
    <BrandsFigma variant='color' size='100'></BrandsFigma>
    <FlagsCanada variant='circle' rotate='15'></FlagsCanada>
  </div>
</template>

<script>
import { CoreFigma } from '@glyphs/vue-core'
import { BrandsFigma } from '@glyphs/vue-brands'
import { FlagsCanada } from '@glyphs/vue-flags''

export default {
  name: 'App',
  components: {
    CoreFigma,
    BrandsFigma,
    FlagsFigma
  }
}
</script>
```

You can optionally import all components from the packages into your Vue project. This will make your components available anywhere in the app but will increase your bundle size.

```js
import Vue from 'vue'
import App from './App'
import Core from '@glyphs/vue-core'
import Brands from '@glyphs/vue-brands'
import Flags from '@glyphs/vue-flags'

Vue.use(Core)
Vue.use(Brands)
Vue.use(Flags)

new Vue({
  el: '#app',
  render: h => h(App),
})
```

---

<alert>

More features, documentation, and guides coming soon.

</alert>
