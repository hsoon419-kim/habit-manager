<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="dateValue"
        :label="label"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="dateValue" @input="menu = false"></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  model: {
    prop: 'date',
    event: 'change'
  },
  props: {
    date: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: 'Date'
    }
  },
  data () {
    return {
      menu: false,
      dateValue: null
    }
  },
  watch: {
    date (data) {
      this.dateValue = data
    },
    dateValue (data) {
      this.$emit('change', data)
    }
  },
  beforeMount () {
    this.dateValue = this.date
  }
}
</script>

<style>
</style>