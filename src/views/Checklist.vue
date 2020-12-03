<template>
  <v-container>
    <!-- Date -->
    <v-row>
      <v-col cols="12" class="d-flex justify-center align-center">
        <date-picker v-model="date"></date-picker>
      </v-col>
    </v-row>
    <v-row class="justify-center align-center">
      <!-- Sleep -->
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-alert
          border="left"
          colored-border
          :type="sleepRecord.isRecorded ? 'success' : 'error'"
          elevation="2"
          style="width:100%;"
        >
          <v-row no-gutters>
            <v-col sm="4" cols="12" class="d-flex justify-start align-center">
              {{sleepInfo.name}}
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <date-picker v-model="sleepRecord.items.startDate" :label="sleepInfo.info.items.startDate"></date-picker>
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <time-picker v-model="sleepRecord.items.startTime" :label="sleepInfo.info.items.startTime"></time-picker>
            </v-col>
            <v-col offset-sm="4" sm="4" cols="12" class="d-flex justify-center align-center">
              <date-picker v-model="sleepRecord.items.finishDate" :label="sleepInfo.info.items.finishDate"></date-picker>
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <time-picker v-model="sleepRecord.items.finishTime" :label="sleepInfo.info.items.finishTime"></time-picker>
            </v-col>
            <v-col offset-sm="11" sm="1" offset="8" cols="4" class="d-flex justify-end align-center">
              <v-btn
                icon
                color="blue"
                @click="sleepSaveButtonClicked"
              >
                <v-icon>mdi-floppy</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import DatePicker from '../components/DatePicker'
import TimePicker from '../components/TimePicker'

export default {
  components: {
    DatePicker,
    TimePicker
  },
  data () {
    return {
      date : null
    }
  },
  computed: {
    ...mapGetters ({
      dateFromStore: 'GET_DATE',
      sleepInfo: 'GET_SLEEP_INFO',
      sleepRecord: 'GET_SLEEP_RECORD'
    })
  },
  watch : {
    dateFromStore (data) {
      this.date = data
    },
    date (data) {
      this.setDate(data)
    }
  },
  beforeMount () {
    this.date = this.dateFromStore
  },
  methods: {
    ...mapMutations ({
      setDate: 'SET_DATE',
    }),
    ...mapActions ({
      saveSleepRecord: 'SAVE_SLEEP_RECORD'
    }),
    sleepSaveButtonClicked () {
      const startDate = new Date(`${this.sleepRecord.items.startDate} ${this.sleepRecord.items.startTime}`)
      const finishDate = new Date(`${this.sleepRecord.items.finishDate} ${this.sleepRecord.items.finishTime}`)
      const sleep = Math.round((finishDate - startDate) / (1000 * 60 * 60) * 100) / 100

      this.sleepRecord.isRecorded = true
      this.sleepRecord.extraItems.sleep = sleep
      this.sleepRecord.extraItems.wakeUp = this.sleepRecord.items.finishTime
      this.sleepRecord.goals[0] = sleep > 6 ? true : false
      this.sleepRecord.goals[1] = this.sleepRecord.extraItems.wakeUp <= '06:30' ? true : false
      
      this.saveSleepRecord(this.sleepRecord)
    }
  }
}
</script>

<style scoped>
>>> .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border: none;
}
</style>