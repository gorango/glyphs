<template lang="pug">
  input(
    :value='constrainedValue',
    @mousedown='handleMouseDown',
    @keypress='handleInput',
    @keydown.up='handleKeyCodeUp',
    @keydown.down='handleKeyCodeDown',
    @change='handleChange'
  )
</template>

<script>
export default {
  name: 'InputScrub',

  // props that the scrubber can receive
  // value: initial value
  // min: minimum value
  // max: maximum value
  // steps: increments for each pixel the mouse is moved
  props: {
    value: {
      type: [String, Number],
      required: true,
      default: undefined
    },
    min: {
      type: [String, Number],
      default: undefined
    },
    max: {
      type: [String, Number],
      default: undefined
    },
    steps: {
      type: [String, Number],
      default: undefined
    },
    friction: {
      type: [Number],
      default: 1
    }
  },

  data: () => ({
    isMouseDown: false,
    initialMouse: null,
    internalValue: 0
  }),

  computed: {
    // returns the number of decimals based on the step value
    // e.g. "0.25" returns "2"
    decimals () {
      return this.steps.toString().substr((this.steps).toString().indexOf('.')).length - 1
    },

    // every time the value changes, we need to make sure it stays inside the min/max
    constrainedValue () {
      return this.constrain(this.internalValue, this.min, this.max, this.decimals)
    }
  },

  watch: {
    value: {
      handler (val) {
        this.internalValue = parseFloat(this.value)
      }
    }
  },

  mounted () {
    this.internalValue = parseFloat(this.value)
  },

  methods: {
    // constrains a number to not exceed the min/max
    // decimals: rounding precision
    constrain (value, min, max, decimals) {
      decimals = typeof decimals !== 'undefined' ? decimals : 0

      if (min !== undefined && max !== undefined) {
        return this.round(Math.min(Math.max(parseFloat(value), min), max), decimals)
      } else {
        return value
      }
    },

    // method to round a number to given decimals
    round (value, decimals) {
      return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
    },

    handleInput  (event) {
      // console.log(event)
      if (event.keyCode === 13) {
        this.handleChange(event)
      }
      // only allow numeric keys
      if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault()
      }
    },

    handleChange  (event) {
      this.internalValue = isNaN(parseFloat(event.target.value)) ? 0 : parseFloat(event.target.value)
      this.$emit('input', this.internalValue)
    },

    handleKeyCodeUp  (event) {
      event.preventDefault()
      const newValue = this.internalValue + parseFloat(this.steps)
      this.internalValue = this.constrain(newValue, this.min, this.max, this.decimals)
      this.$emit('input', this.internalValue)
    },

    handleKeyCodeDown  (event) {
      event.preventDefault()
      const newValue = this.internalValue - parseFloat(this.steps)
      this.internalValue = this.constrain(newValue, this.min, this.max, this.decimals)
      this.$emit('input', this.internalValue)
    },

    // mouse handler
    handleMouseDown (event) {
      // enable scrubbing
      this.mouseDown = true

      // remember the initial mouse position when the scubbing started
      this.initialMouse = {
        x: event.clientX,
        y: event.clientY
      }

      // remember the initial value
      this.initialValue = this.internalValue

      // register global event handlers because now we are not bound to the component anymore
      document.addEventListener('mousemove', this.handleMouseMove)

      // global mouse up listener
      document.addEventListener('mouseup', this.handleMouseUp)
    },

    handleMouseUp ($event) {
      // disable scrubbing
      this.mouseDown = false

      document.removeEventListener('mousemove', this.handleMouseMove)
      document.removeEventListener('mouseup', this.handleMouseUp)
    },

    // the actual translation of mouse movement to value change…
    handleMouseMove (event) {
      // scrub if the mouse is being pressed
      if (this.mouseDown) {
        const steps = parseFloat(this.steps)
        const newValue = this.initialValue + (((event.clientX - this.initialMouse.x) / this.friction) * steps)
        this.internalValue = this.constrain(newValue, this.min, this.max, this.decimals)

        // if (this.internalValue !== this.initialValue) {}
        this.$emit('input', this.internalValue)
      }
    }
  }
}
</script>
