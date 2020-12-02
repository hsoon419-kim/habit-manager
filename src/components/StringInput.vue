<template>
  <v-text-field
    v-model="stringValue"
    :label="label"
  ></v-text-field>
</template>

<script>
export default {
  model: {
    prop: 'string',
    event: 'change'
  },
  props: {
    string: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: 'String'
    }
  },
  data () {
    return {
      stringValue: null
    }
  },
  watch: {
    string (data) {
      this.stringValue = data
    },
    stringValue (data) {
      this.$emit('change', data)
    }
  },
  beforeMount () {
    this.stringValue = this.string
  }
}
</script>

<style>
</style>