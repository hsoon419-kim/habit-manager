<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="timeValue"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="timeValue"
        :label="label"
        prepend-icon="mdi-clock-time-four-outline"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-time-picker
      v-if="menu"
      v-model="timeValue"
      full-width
      @click:minute="$refs.menu.save(timeValue)"
    ></v-time-picker>
  </v-menu>
</template>

<script>
export default {
  model: {
    prop: 'time',
    event: 'change'
  },
  props: {
    time: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: 'Time'
    }
  },
  data () {
    return {
      menu: false,
      timeValue: null
    }
  },
  watch: {
    time (data) {
      this.timeValue = data
    },
    timeValue (data) {
      this.$emit('change', data)
    }
  },
  beforeMount () {
    this.timeValue = this.time
  }
}
</script>

<style>
</style>