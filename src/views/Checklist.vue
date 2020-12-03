<template>
  <v-container>
    <v-row class="justify-center align-center">
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-alert
      border="left"
      colored-border
      color="deep-purple accent-4"
      elevation="2"
    >
      Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi..

      Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula non mi varius sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
    </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import DatePicker from '../components/DatePicker'
// import TimePicker from '../components/TimePicker'
// import StringInput from '../components/StringInput'

export default {
  components: {
    // DatePicker,
    // TimePicker,
    // StringInput
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
>>> .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border: none;
}
</style>