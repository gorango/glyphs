```bash
npm i @glyphs/vue-brands
```

```vue
<template>
  <div id="app">
    <BrandsFigma variant="color" size="200"></BrandsFigma>
  </div>
</template>

<script>
import { CoreArrowSolid } from '../../core/src'
import { BrandsFigma } from '@glyphs/vue-brands'

export default {
  name: 'App',
  components: {
    BrandsFigma
  }
}
</script>
```

```js
import Vue from 'vue'
import App from './App'
import Brands from '@glyphs/vue-brands'

Vue.use(Brands)

new Vue({
  el: '#app',
  render: h => h(App),
})
```
