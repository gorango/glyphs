<template>
  <div id="app">
    <core-arrow-solid variant="path"></core-arrow-solid>
    <flags-cuba variant="circle" size="600"></flags-cuba>
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
Z