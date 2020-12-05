<template>
  <v-text-field
    v-model="valueValue"
    :label="label"
  ></v-text-field>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      required: true
    },
    label: {
      type: String,
      required: false,
      default: 'Value'
    }
  },
  data () {
    return {
      valueValue: null
    }
  },
  watch: {
    value (data) {
      this.valueValue = data
    },
    valueValue (data) {
      this.$emit('change', data)
    }
  },
  beforeMount () {
    this.valueValue = this.value
  }
}
</script>

<style>
</style>