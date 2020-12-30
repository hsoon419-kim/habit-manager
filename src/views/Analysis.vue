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

      <!-- Analysis -->
      <v-col cols="12" v-for="item in analysis" v-bind:key="item.name">
        <v-card>
          <v-card-title>
            {{item.name}}
          </v-card-title>
          <v-card-text>
            <v-row class="justify-center align-center">
              <v-col sm="6" cols="12">
                <v-row>
                  <v-col cols="12">
                    <v-alert
                      class="text-center"
                      color="primary"
                      dark
                      border="left"
                      prominent
                      >
                      {{item.total}}
                    </v-alert>
                  </v-col>
                  <v-col cols="12">
                    <highcharts :options="item.chartOptions" style="width:100%;"></highcharts>
                  </v-col>
                </v-row>
              </v-col>
              <v-col sm="6" cols="12">
              <ag-grid-vue
                style="width:100%; height:500px;"
                class="ag-theme-material"
                :columnDefs="item.grid.columnDefs"
                :rowData="item.grid.rowData">
                </ag-grid-vue>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
import { Chart } from 'highcharts-vue'
import { AgGridVue } from 'ag-grid-vue'
import MonthPicker from '../components/MonthPicker'
import moment from 'moment-timezone'

export default {
  components: {
    MonthPicker,
    highcharts: Chart,
    AgGridVue
  },
  data () {
    return {
      type: 'MONTH',
      month: moment().tz(moment.tz.guess()).format('YYYY-MM'),
      analysis: [],
      template: {
        name: '',
        total: '',
        chartOptions: {
          title: '',
          credits: {
           enabled: false
          },
          xAxis: {
            visible: false
          },
          yAxis: {
            title: {
              enabled: false
            }
          },
          series: []
        },
        grid: {
          columnDefs: [],
          rowData: []
        }
      }
    }
  },
  watch: {
    type () {
      this.makeAnalysis()
    },
    month () {
      this.makeAnalysis()
    }
  },
  mounted () {
    this.makeAnalysis()
  },
  methods: {
    makeAnalysis () {
      const habit = this.$store.getters.GET_HABIT
      this.analysis = []

      this.makeSleepAnalysis(habit, 'Sleep')
      this.makeWeightAnalysis(habit, 'Weight')
      this.makeDietAnalysis(habit, 'Diet')
      this.makeExerciseAnalysis(habit, 'Exercise')
      this.makeSWAnalysis(habit, 'SW')
      this.makeEnglishAnalysis(habit, 'English')
    },
    makeSleepAnalysis (habit, type) {
      const item = habit.find(x => x.name === type)
      const records = item.records.filter(x => this.type === 'ALL' || x.date.indexOf(this.month) !== -1)
      records.sort(function(a, b) {
        return a.date < b.date ? -1 : a.date === b.date ? 0 : 1
      })

      const chartData = records.map(x => Math.round(parseFloat(x.extraItems.sleep)*100)/100)
      const gridData = records.map(x => {
        return { date: x.date, sleep: x.extraItems.sleep }
      })

      let analysis = JSON.parse(JSON.stringify(this.template))
      analysis.name = 'Sleep'
      analysis.total = `Average ${chartData.length === 0 ? '-' : chartData.reduce((a, b) => Math.round((a+b)/2*100)/100)} hours`
      analysis.chartOptions.series = [{
        name: 'hours',
        data: chartData
      }]
      analysis.grid.columnDefs = [
        { headerName: 'date', field: 'date', width:150, pinned: 'left' },
        { headerName: 'sleep', field: 'sleep', width:100 }
      ]
      analysis.grid.rowData = gridData
      this.analysis.push(analysis)
    },
    makeWeightAnalysis (habit, type) {
      const item = habit.find(x => x.name === type)
      const records = item.records.filter(x => this.type === 'ALL' || x.date.indexOf(this.month) !== -1)
      records.sort(function(a, b) {
        return a.date < b.date ? -1 : a.date === b.date ? 0 : 1
      })

      const chartData = records.map(x => Math.round(parseFloat(x.items.weight)*100)/100)
      const gridData = records.map(x => {
        return { date: x.date, weight: x.items.weight }
      })

      let analysis = JSON.parse(JSON.stringify(this.template))
      analysis.name = 'Weight'
      analysis.total = `Now ${chartData.length === 0 ? '-' : chartData.reduce((a, b) => b)} kg`
      analysis.chartOptions.series = [{
        name: 'kg',
        data: chartData
      }]
      analysis.grid.columnDefs = [
        { headerName: 'date', field: 'date', width:150, pinned: 'left' },
        { headerName: 'weight', field: 'weight', width:100 }
      ]
      analysis.grid.rowData = gridData
      this.analysis.push(analysis)
    },
    makeDietAnalysis (habit, type) {
      const item = habit.find(x => x.name === type)
      const records = item.records.filter(x => this.type === 'ALL' || x.date.indexOf(this.month) !== -1)
      records.sort(function(a, b) {
        return a.date < b.date ? -1 : a.date === b.date ? 0 : 1
      })

      const totalCalorie = records.map(x => parseInt(x.items.lunchCalorie) + parseInt(x.items.dinnerCalorie) + parseInt(x.items.extraCalorie))
      const lunchCalorie = records.map(x => parseInt(x.items.lunchCalorie))
      const dinnerCalorie = records.map(x => parseInt(x.items.dinnerCalorie))
      const extraCalorie = records.map(x => parseInt(x.items.extraCalorie))
      const gridData = records.map(x => {
        return { date: x.date, total: parseInt(x.items.lunchCalorie) + parseInt(x.items.dinnerCalorie) + parseInt(x.items.extraCalorie), lunch: `${x.items.lunchCalorie}(${x.items.lunchName})`, dinner: `${x.items.dinnerCalorie}(${x.items.dinnerName})`, extra: `${x.items.extraCalorie}(${x.items.extraName})` }
      })

      let analysis = JSON.parse(JSON.stringify(this.template))
      analysis.name = 'Diet'
      analysis.total = totalCalorie.length === 0 ? `Average Total(0), Lunch(0), Dinner(0), Extra(0)` : `Average Total(${totalCalorie.reduce((a, b) => Math.round((a+b)/2*100)/100)}) Lunch(${lunchCalorie.reduce((a, b) => Math.round((a+b)/2*100)/100)}) Dinner(${dinnerCalorie.reduce((a, b) => Math.round((a+b)/2*100)/100)}) Extra(${extraCalorie.reduce((a, b) => Math.round((a+b)/2*100)/100)})`
      analysis.chartOptions.series = [
        {
          name: 'total',
          data: totalCalorie
        },
        {
          name: 'lunch',
          data: lunchCalorie
        },
        {
          name: 'dinner',
          data: dinnerCalorie
        },
        {
          name: 'extra',
          data: extraCalorie
        }
      ],
      analysis.grid.columnDefs = [
        { headerName: 'date', field: 'date', width:150, pinned: 'left' },
        { headerName: 'total', field: 'total', width:150 },
        { headerName: 'lunch', field: 'lunch', width:150 },
        { headerName: 'dinner', field: 'dinner', width:150 },
        { headerName: 'extra', field: 'extra', width:150 }
      ],
      analysis.grid.rowData = gridData
      this.analysis.push(analysis)
    },
    makeExerciseAnalysis (habit, type) {
      const item = habit.find(x => x.name === type)
      const records = item.records.filter(x => this.type === 'ALL' || x.date.indexOf(this.month) !== -1)
      records.sort(function(a, b) {
        return a.date < b.date ? -1 : a.date === b.date ? 0 : 1
      })

      const squat = records.map(x => parseInt(x.items.squat))
      const pushUp = records.map(x => parseInt(x.items.pushUp))
      const plank = records.map(x => parseInt(x.items.plank))
      const burpeeTest = records.map(x => parseInt(x.items.burpeeTest))
      const gridData = records.map(x => {
        return { date: x.date, squat: x.items.squat, pushUp: x.items.pushUp, plank: x.items.plank, burpeeTest: x.items.burpeeTest }
      })

      let analysis = JSON.parse(JSON.stringify(this.template))
      analysis.name = 'Exercise'
      analysis.total = squat.length === 0 ? `Total Squat(0) PushUp(0) Plank(0) BurpeeTest(0)` : ` Total Squat(${squat.reduce((a, b) => a+b)}) PushUp(${pushUp.reduce((a, b) => a+b)}) Plank(${plank.reduce((a, b) => a+b)}) BurpeeTest(${burpeeTest.reduce((a, b) => a+b)})`
      analysis.chartOptions.series = [
        {
          name: 'squat',
          data: squat
        },
        {
          name: 'pushUp',
          data: pushUp
        },
        {
          name: 'plank',
          data: plank
        },
        {
          name: 'burpeeTest',
          data: burpeeTest
        }
      ],
      analysis.grid.columnDefs = [
        { headerName: 'date', field: 'date', width:150, pinned: 'left' },
        { headerName: 'squat', field: 'squat', width:100 },
        { headerName: 'pushUp', field: 'pushUp', width:100 },
        { headerName: 'plank', field: 'plank', width:100 },
        { headerName: 'burpeeTest', field: 'burpeeTest', width:100 }
      ],
      analysis.grid.rowData = gridData
      this.analysis.push(analysis)
    },
    makeSWAnalysis (habit, type) {
      const item = habit.find(x => x.name === type)
      const records = item.records.filter(x => this.type === 'ALL' || x.date.indexOf(this.month) !== -1)
      records.sort(function(a, b) {
        return a.date < b.date ? -1 : a.date === b.date ? 0 : 1
      })

      const chartData = records.map(x => Math.round(parseFloat(x.items.time)*100)/100)
      const gridData = records.map(x => {
        return { date: x.date, item: x.items.item, detail: x.items.detail, time: x.items.time }
      })

      let analysis = JSON.parse(JSON.stringify(this.template))
      analysis.name = 'SW'
      analysis.total = `Total ${chartData.length === 0 ? 0 : chartData.reduce((a, b) => a+b)} hours`
      analysis.chartOptions.series = [{
        name: 'hours',
        data: chartData
      }]
      analysis.grid.columnDefs = [
        { headerName: 'date', field: 'date', width:150, pinned: 'left' },
        { headerName: 'item', field: 'item', width:150 },
        { headerName: 'detail', field: 'detail', width:200 },
        { headerName: 'time', field: 'time', width:100 }
      ]
      analysis.grid.rowData = gridData
      this.analysis.push(analysis)
    },
    makeEnglishAnalysis (habit, type) {
      const item = habit.find(x => x.name === type)
      const records = item.records.filter(x => this.type === 'ALL' || x.date.indexOf(this.month) !== -1)
      records.sort(function(a, b) {
        return a.date < b.date ? -1 : a.date === b.date ? 0 : 1
      })

      const chartData = records.map(x => Math.round(parseFloat(x.items.time)*100)/100)
      const gridData = records.map(x => {
        return { date: x.date, item: x.items.item, detail: x.items.detail, time: x.items.time }
      })

      let analysis = JSON.parse(JSON.stringify(this.template))
      analysis.name = 'English'
      analysis.total = `Total ${chartData.length === 0 ? 0 : chartData.reduce((a, b) => a+b)} hours`
      analysis.chartOptions.series = [{
        name: 'hours',
        data: chartData
      }]
      analysis.grid.columnDefs = [
        { headerName: 'date', field: 'date', width:150, pinned: 'left' },
        { headerName: 'item', field: 'item', width:150 },
        { headerName: 'detail', field: 'detail', width:200 },
        { headerName: 'time', field: 'time', width:100 }
      ]
      analysis.grid.rowData = gridData
      this.analysis.push(analysis)
    }
  }
}
</script>

<style>
</style>