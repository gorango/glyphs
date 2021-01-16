```bash
npm i @glyphs/vue-core
```

```vue
<template>
  <div id="app">
    <CoreHeart variant="path" stroke-width="6"></CoreHeart>
  </div>
</template>

<script>
import { CoreHeart } from '@glyphs/vue-core'

export default {
  name: 'App',
  components: {
    CoreHeart
  }
}
</script>
```

```js
import Vue from 'vue'
import App from './App'
import Core from '@glyphs/vue-core'

Vue.use(Core)

new Vue({
  el: '#app',
  render: h => h(App),
})
```
