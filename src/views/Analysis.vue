<template>
  <v-container>
    <v-card>
      <v-card-title>
        SW
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
                  Total {{total}} hours
                </v-alert>
              </v-col>
              <v-col cols="12">
                <highcharts :options="chartOptions"></highcharts>
              </v-col>
            </v-row>
          </v-col>
          <v-col sm="6" cols="12">
          <ag-grid-vue
            style="width:100%; height:500px;"
            class="ag-theme-material"
            :gridOptions="gridOptions"
            :columnDefs="columnDefs"
            :rowData="rowData">
            </ag-grid-vue>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import {Chart} from 'highcharts-vue'
import { AgGridVue } from 'ag-grid-vue'

export default {
  components: {
    highcharts: Chart,
    AgGridVue
  },
  data () {
    return {
      total: 0,
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
        series: [{
          name: 'hours',
          data: [1, 2, 3]
        }]
      },
      gridOptions: {},
      columnDefs: [
        { headerName: 'date', field: 'date', width:150 },
        { headerName: 'item', field: 'item', width:150 },
        { headerName: 'detail', field: 'detail', width:150 },
        { headerName: 'time', field: 'time', width:100 }
      ],
      rowData: []
    }
  },
  mounted () {
    const habit = this.$store.getters.GET_HABIT
    const sw = habit.find(x => x.name === 'SW')
    const records = sw.records
    const chartData = records.map(x => parseInt(x.items.time))
    const gridData = records.map(x => {
      return { date: x.date, item: x.items.item, detail: x.items.detail, time: x.items.time }
    })

    this.chartOptions.series[0].data = chartData
    this.total = chartData.length === 0 ? 0 : chartData.reduce((a, b) => a+b)

    this.rowData = gridData
  }
}
</script>

<style>
</style>