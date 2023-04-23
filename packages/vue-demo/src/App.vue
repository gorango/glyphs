<template>
  <div id="app">
    <flags-cuba variant="rectangle" size="200"></flags-cuba>
    <core-arrow-solid variant="path" strokeWidth='4' size='200'></core-arrow-solid>
  </div>
</template>

<script>
import { CoreArrowSolid } from '../../core/src'
import { FlagsCuba } from '../../flags/src'

export default {
  name: 'App',
  components: {
    CoreArrowSolid,
    FlagsCuba
  }
}
</script>
