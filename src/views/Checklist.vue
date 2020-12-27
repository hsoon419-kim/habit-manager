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
                @click="saveButtonClicked('Sleep')"
              >
                <v-icon>mdi-floppy</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>

      <!-- Weight -->
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-alert
          border="left"
          colored-border
          :type="weightRecord.isRecorded ? 'success' : 'error'"
          elevation="2"
          style="width:100%;"
        >
          <v-row no-gutters>
            <v-col sm="4" cols="12" class="d-flex justify-start align-center">
              {{weightInfo.name}}
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="weightRecord.items.weight" :label="weightInfo.info.items.weight"></value-input>
            </v-col>
            <v-col offset-sm="11" sm="1" offset="8" cols="4" class="d-flex justify-end align-center">
              <v-btn
                icon
                color="blue"
                @click="saveButtonClicked('Weight')"
              >
                <v-icon>mdi-floppy</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>

      <!-- Sleep -->
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-alert
          border="left"
          colored-border
          :type="dietRecord.isRecorded ? 'success' : 'error'"
          elevation="2"
          style="width:100%;"
        >
          <v-row no-gutters>
            <v-col sm="4" cols="12" class="d-flex justify-start align-center">
              {{dietInfo.name}}
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <time-picker v-model="dietRecord.items.startTime" :label="dietInfo.info.items.startTime"></time-picker>
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <time-picker v-model="dietRecord.items.finishTime" :label="dietInfo.info.items.finishTime"></time-picker>
            </v-col>
            <v-col offset-sm="4" sm="4" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="dietRecord.items.lunchName" :label="dietInfo.info.items.lunchName"></value-input>
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="dietRecord.items.lunchCalorie" :label="dietInfo.info.items.lunchCalorie"></value-input>
            </v-col>
            <v-col offset-sm="4" sm="4" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="dietRecord.items.dinnerName" :label="dietInfo.info.items.dinnerName"></value-input>
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="dietRecord.items.dinnerCalorie" :label="dietInfo.info.items.dinnerCalorie"></value-input>
            </v-col>
            <v-col offset-sm="4" sm="4" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="dietRecord.items.extraName" :label="dietInfo.info.items.extraName"></value-input>
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="dietRecord.items.extraCalorie" :label="dietInfo.info.items.extraCalorie"></value-input>
            </v-col>
            <v-col offset-sm="11" sm="1" offset="8" cols="4" class="d-flex justify-end align-center">
              <v-btn
                icon
                color="blue"
                @click="saveButtonClicked('Diet')"
              >
                <v-icon>mdi-floppy</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>

      <!-- Weight Training -->
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-alert
          border="left"
          colored-border
          :type="weightTrainingRecord.isRecorded ? 'success' : 'error'"
          elevation="2"
          style="width:100%;"
        >
          <v-row no-gutters>
            <v-col sm="4" cols="12" class="d-flex justify-start align-center">
              {{weightTrainingInfo.name}}
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="weightTrainingRecord.items.squat" :label="weightTrainingInfo.info.items.squat"></value-input>
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="weightTrainingRecord.items.pushUp" :label="weightTrainingInfo.info.items.pushUp"></value-input>
            </v-col>
            <v-col offset-sm="4" sm="4" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="weightTrainingRecord.items.plank" :label="weightTrainingInfo.info.items.plank"></value-input>
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="weightTrainingRecord.items.burpeeTest" :label="weightTrainingInfo.info.items.burpeeTest"></value-input>
            </v-col>
            <v-col offset-sm="11" sm="1" offset="8" cols="4" class="d-flex justify-end align-center">
              <v-btn
                icon
                color="blue"
                @click="saveButtonClicked('Weight Training')"
              >
                <v-icon>mdi-floppy</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>

      <!-- SW Development -->
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-alert
          border="left"
          colored-border
          :type="swDevelopmentRecord.isRecorded ? 'success' : 'error'"
          elevation="2"
          style="width:100%;"
        >
          <v-row no-gutters>
            <v-col sm="4" cols="12" class="d-flex justify-start align-center">
              {{swDevelopmentInfo.name}}
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="swDevelopmentRecord.items.item" :label="swDevelopmentInfo.info.items.item"></value-input>
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="swDevelopmentRecord.items.time" :label="swDevelopmentInfo.info.items.time"></value-input>
            </v-col>
            <v-col offset-sm="4" sm="8" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="swDevelopmentRecord.items.detail" :label="swDevelopmentInfo.info.items.detail"></value-input>
            </v-col>
            <v-col offset-sm="11" sm="1" offset="8" cols="4" class="d-flex justify-end align-center">
              <v-btn
                icon
                color="blue"
                @click="saveButtonClicked('SW Development')"
              >
                <v-icon>mdi-floppy</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>

      <!-- English -->
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-alert
          border="left"
          colored-border
          :type="englishRecord.isRecorded ? 'success' : 'error'"
          elevation="2"
          style="width:100%;"
        >
          <v-row no-gutters>
            <v-col sm="4" cols="12" class="d-flex justify-start align-center">
              {{englishInfo.name}}
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="englishRecord.items.item" :label="englishInfo.info.items.item"></value-input>
            </v-col>
            <v-col sm="4" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="englishRecord.items.time" :label="englishInfo.info.items.time"></value-input>
            </v-col>
            <v-col offset-sm="4" sm="8" cols="12" class="d-flex justify-center align-center">
              <value-input v-model="englishRecord.items.detail" :label="englishInfo.info.items.detail"></value-input>
            </v-col>
            <v-col offset-sm="11" sm="1" offset="8" cols="4" class="d-flex justify-end align-center">
              <v-btn
                icon
                color="blue"
                @click="saveButtonClicked('English')"
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
import ValueInput from '../components/ValueInput'

export default {
  components: {
    DatePicker,
    TimePicker,
    ValueInput
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
      weightInfo: 'GET_WEIGHT_INFO',
      dietInfo: 'GET_DIET_INFO',
      weightTrainingInfo: 'GET_WEIGHT_TRAINING_INFO',
      swDevelopmentInfo: 'GET_SW_DEVELOPMENT_INFO',
      englishInfo: 'GET_ENGLISH_INFO',

      sleepRecord: 'GET_SLEEP_RECORD',
      weightRecord: 'GET_WEIGHT_RECORD',
      dietRecord: 'GET_DIET_RECORD',
      weightTrainingRecord: 'GET_WEIGHT_TRAINING_RECORD',
      swDevelopmentRecord: 'GET_SW_DEVELOPMENT_RECORD',
      englishRecord: 'GET_ENGLISH_RECORD'
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
      saveRecord: 'SAVE_RECORD'
    }),

    saveButtonClicked (type) {
      let record

      switch (type) {
        case 'Sleep':
          record = this.sleepRecord
          break
        case 'Weight':
          record = this.weightRecord
          break
        case 'Diet':
          record = this.dietRecord
          break
        case 'Weight Training':
          record = this.weightTrainingRecord
          break
        case 'SW Development':
          record = this.swDevelopmentRecord
          break
        case 'English':
          record = this.englishRecord
          break
      }

      this.updateRecordData(type, record)
      this.saveRecord({ type: type, record: record})
    },
    updateRecordData (type, record) {
      if (type === 'Sleep') {
        const startDate = new Date(`${record.items.startDate} ${record.items.startTime}`)
        const finishDate = new Date(`${record.items.finishDate} ${record.items.finishTime}`)
        const sleep = Math.round((finishDate - startDate) / (1000 * 60 * 60) * 100) / 100

        record.isRecorded = true
        record.extraItems.sleep = sleep
        record.extraItems.wakeUp = record.items.finishTime
        record.goals[0] = sleep * 1 > 6 ? true : false
        record.goals[1] = record.extraItems.wakeUp <= '06:30' ? true : false
      } else if (type === 'Weight') {
        record.isRecorded = true
        record.goals[0] = true
        record.goals[1] = record.items.weight * 1 <= 70
      } else if (type === 'Diet') {
        record.isRecorded = true

        const startTime = new Date(`2020-12-06 ${record.items.startTime}`)
        const finishTime = new Date(`2020-12-06 ${record.items.finishTime}`)
        const time = finishTime - startTime
        record.goals[0] = (time/1000/60) <= 480 // 8 hours

        const totalCalorie = (record.items.lunchCalorie * 1) + (record.items.dinnerCalorie * 1) + (record.items.extraCalorie * 1)
        record.goals[1] = totalCalorie <= 2000
      } else if (type === 'Weight Training') {
        record.isRecorded = true
        const isDone = record.items.squat * 1 > 0
                              && record.items.pushUp * 1 > 0
                              && record.items.plank * 1 > 0
                              && record.items.burpeeTest * 1 > 0
        record.goals[0] = isDone

        const isGoalAchieved = record.items.squat * 1 >= 200
                              && record.items.pushUp * 1 >= 100
                              && record.items.plank * 1 >= 300
                              && record.items.burpeeTest * 1 >= 100
        record.goals[1] = isGoalAchieved
      } else if (type === 'SW Development') {
        record.isRecorded = true
        const isDone = (record.items.time * 1) > 0
        record.goals[0] = isDone
      } else if (type === 'English') {
        record.isRecorded = true
        const isDone = (record.items.time * 1) > 0
        record.goals[0] = isDone
      }
    }
  }
}
</script>

<style scoped>
>>> .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border: none;
}
</style>