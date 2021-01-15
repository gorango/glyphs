```bash
npm i @glyphs/vue-flags
```

```vue
<template>
  <div id="app">
    <FlagsCanada variant='circle' rotate='15'></FlagsCanada>
  </div>
</template>

<script>
import { CoreArrowSolid } from '../../core/src'
import { FlagsCanada } from '@glyphs/vue-flags'

export default {
  name: 'App',
  components: {
    FlagsCanada
  }
}
</script>
```

```js
import Vue from 'vue'
import App from './App'
import Flags from '@glyphs/vue-flags'

Vue.use(Flags)

new Vue({
  el: '#app',
  render: h => h(App),
})
```
