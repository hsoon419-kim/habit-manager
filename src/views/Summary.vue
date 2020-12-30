<template>
  <v-container>
    <v-row>

      <!-- Month -->
      <v-col cols="12">
        <v-row>
          <v-col sm="2" cols="12">
            <v-radio-group
              v-model="type"
              row
              >
              <v-radio
                label="All"
                value="ALL"
                ></v-radio>
              <v-radio
                label="Month"
                value="MONTH"
                ></v-radio>
            </v-radio-group>
          </v-col>
          <v-col sm="10" cols="12">
            <month-picker :disabled="type === 'ALL'" v-model="month"></month-picker>
          </v-col>
        </v-row>
      </v-col>

      <!-- Summary -->
      <v-col sm="3" cols="12" v-for="item in summary" v-bind:key="item.name">
        <v-alert :type="item.result">
          <v-row>
            <v-col cols="6" class="text-h3">
              {{item.name}}
            </v-col>
            <v-col cols="6">
              <v-row no-gutters>
                <v-col cols="12" class="text-center text-h4">
                  {{item.summary}}
                </v-col>
                <v-col cols="12" class="text-center text-subtitle-2">
                  {{item.detail}}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import MonthPicker from '../components/MonthPicker'
import moment from 'moment-timezone'

export default {
  components: {
    MonthPicker
  },
  data () {
    return {
      type: 'MONTH',
      month: moment().tz(moment.tz.guess()).format('YYYY-MM'),
      summary: []
    }
  },
  watch: {
    type () {
      this.makeSummary()
    },
    month () {
      this.makeSummary()
    }
  },
  mounted () {
    this.makeSummary()
  },
  methods: {
    makeSummary () {
      this.summary = []

      const habit = this.$store.getters.GET_HABIT
      habit.forEach(x => {
        if (x.name === 'Weight') {
          let success = false

          x.records.forEach(y => {
            if (this.type === 'ALL' || y.date.indexOf(this.month) !== -1) {
              success = y.goals.every(z => z)
            }
          })

          let result = success ? 'success' : 'warning'

          this.summary.push({ name: x.name, result: result, summary: `-`, detail: `-` })
        } else {
          let total = 0
          let success = 0

          x.records.forEach(y => {
            if (this.type === 'ALL' || y.date.indexOf(this.month) !== -1) {
              total = total + 1
              success = y.goals.every(z => z) ? success + 1 : success
            }
          })

          let rate = total > 0 ? Math.round((success / total) * 100 * 100) / 100 : 0
          let result = rate >= 75 ? 'success' : (rate >=50 ? 'warning' : 'error')

          this.summary.push({ name: x.name, result: result, summary: `${rate}%`, detail: `(${success}/${total})` })
        }
      })
    }
  }
}
</script>

<style>
</style>