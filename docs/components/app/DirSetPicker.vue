<template lang="pug">
  div.relative(v-click-outside='hideSet')
    a.cursor-pointer.w-full.px-2.py-1.rounded-lg.border-2.border-gray-500.dark_border-gray-700.border-transparent.flex.items-center.outline-none(
      :class=`{
        'bg-gray-900 hover_bg-gray-800': $colorMode.value === 'dark',
        'bg-gray-200 hover_bg-gray-300': $colorMode.value === 'light',
      }`,
      :style='showSelect && "border-bottom-color: transparent"',
      tabindex='0',
      @click='selectSet'
    )
      //- @focusout='showSelect = false'
      span.capitalize {{ selectedSet.label }}
      span.text-gray-600.ml-2 ({{ selectedSet.count }})
      .flex-auto
      svg-icon.text-3xl(set='core', name='caret', :rotate='showSelect ? "0" : "180"')
    template(v-if='showSelect')
      .absolute.top-0.overflow-hidden.inset-x-0.bg-gray-200.dark_bg-gray-800.rounded-lg.border-2.border-gray-500.dark_border-gray-700.flex.flex-col.z-10(
      )
        template(v-for='option in setsSelection')
          a.cursor-pointer.w-full.p-2.flex.items-center.w-full(
            @click='changeSet(option)',
            :class=`{
              'bg-gray-400 dark_bg-gray-900': option.label === selectedSet.label,
              'hover_bg-gray-700': $colorMode.value === 'dark',
              'hover_bg-gray-300': $colorMode.value === 'light',
            }`
          )
            span.capitalize {{ option.label }}
            span.text-gray-600.ml-2 ({{ option.count || 'Coming Soon' }})
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    showSelect: false
  }),

  computed: {
    selectedSet () {
      return this.$store.getters['dir/selectedSet']
    },
    setsSelection () {
      return this.$store.getters['dir/setsSelection']
    }
  },

  mounted () {
    this.showSelect = this.value
  },

  methods: {
    selectSet () {
      this.showSelect = !this.showSelect
      this.$emit('input', this.showSelect)
    },
    changeSet (set = {}) {
      const routeSet = this.$route.query.s
      if (set.count && routeSet !== set.label) {
        this.$router.push({ query: { s: set.label } })
        this.showSelect = false
        this.$emit('input', this.showSelect)
      }
    },
    hideSet () {
      // console.log('hide', this.showSelect)
      this.showSelect = false
    }
  }
}
</script>
